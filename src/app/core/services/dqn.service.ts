import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

export interface DQNConfig {
  learningRate: number;
  gamma: number;
  epsilon: number;
  epsilonDecay: number;
  epsilonMin: number;
  batchSize: number;
  memorySize: number;
  targetUpdateFreq: number;
}

export interface Experience {
  state: number[];
  action: number;
  reward: number;
  nextState: number[];
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DQNService {
  private mainModel: tf.Sequential | null = null;
  private targetModel: tf.Sequential | null = null;
  private memory: Experience[] = [];
  private step = 0;
  
  private config: DQNConfig = {
    learningRate: 0.001,
    gamma: 0.95,
    epsilon: 1.0,
    epsilonDecay: 0.995,
    epsilonMin: 0.01,
    batchSize: 32,
    memorySize: 10000,
    targetUpdateFreq: 100
  };

  constructor() {
    this.initializeModels();
  }

  /**
   * Initialize the main and target neural networks
   */
  private initializeModels(): void {
    // State space: [queue_north, queue_east, queue_south, queue_west, current_phase, time_in_phase]
    const stateSize = 6;
    // Action space: [maintain_current_phase, switch_to_NS, switch_to_EW]
    const actionSize = 3;

    // Main DQN model
    this.mainModel = tf.sequential({
      layers: [
        tf.layers.dense({
          inputShape: [stateSize],
          units: 64,
          activation: 'relu'
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({
          units: 64,
          activation: 'relu'
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({
          units: 32,
          activation: 'relu'
        }),
        tf.layers.dense({
          units: actionSize,
          activation: 'linear'
        })
      ]
    });

    // Compile the model
    this.mainModel.compile({
      optimizer: tf.train.adam(this.config.learningRate),
      loss: 'meanSquaredError',
      metrics: ['mse']
    });

    // Create target model (copy of main model)
    this.createTargetModel();
  }

  /**
   * Create target model as a copy of the main model
   */
  private createTargetModel(): void {
    if (!this.mainModel) return;

    try {
      // Create a new model with the same architecture
      const stateSize = 6;
      const actionSize = 3;

      this.targetModel = tf.sequential({
        layers: [
          tf.layers.dense({
            inputShape: [stateSize],
            units: 64,
            activation: 'relu'
          }),
          tf.layers.dropout({ rate: 0.2 }),
          tf.layers.dense({
            units: 64,
            activation: 'relu'
          }),
          tf.layers.dropout({ rate: 0.2 }),
          tf.layers.dense({
            units: 32,
            activation: 'relu'
          }),
          tf.layers.dense({
            units: actionSize,
            activation: 'linear'
          })
        ]
      });

      // Copy weights from main model to target model
      const mainWeights = this.mainModel.getWeights();
      this.targetModel.setWeights(mainWeights);
    } catch (error) {
      console.error('Error creating target model:', error);
      // If target model creation fails, we can still use the main model for predictions
      this.targetModel = null;
    }
  }

  /**
   * Select action using epsilon-greedy policy
   */
  selectAction(state: number[]): number {
    if (Math.random() < this.config.epsilon) {
      // Random action (exploration)
      return Math.floor(Math.random() * 3);
    }

    // Greedy action (exploitation)
    const stateTensor = tf.tensor2d([state]);
    const qValues = this.mainModel!.predict(stateTensor) as tf.Tensor;
    const actionIndex = qValues.argMax(1).dataSync()[0];
    
    stateTensor.dispose();
    qValues.dispose();
    
    return actionIndex;
  }

  /**
   * Store experience in replay buffer
   */
  remember(experience: Experience): void {
    this.memory.push(experience);
    
    // Keep memory size within limit
    if (this.memory.length > this.config.memorySize) {
      this.memory.shift();
    }
  }

  /**
   * Train the model using experience replay
   */
  async replay(): Promise<number> {
    if (this.memory.length < this.config.batchSize) {
      return 0;
    }

    // Sample random batch from memory
    const batch = this.sampleBatch();
    
    // Prepare training data
    const states = batch.map(exp => exp.state);
    const nextStates = batch.map(exp => exp.nextState);
    
    const stateTensor = tf.tensor2d(states);
    const nextStateTensor = tf.tensor2d(nextStates);
    
    // Get current Q-values
    const currentQValues = this.mainModel!.predict(stateTensor) as tf.Tensor;
    
    // Get target Q-values for next states (use main model if target model is not available)
    const modelForTargets = this.targetModel || this.mainModel!;
    const targetQValues = modelForTargets.predict(nextStateTensor) as tf.Tensor;
    const maxTargetQValues = targetQValues.max(1);
    
    // Update Q-values with Bellman equation
    const updatedQValues = await this.updateQValues(currentQValues, batch, maxTargetQValues);
    
    // Train the model
    const history = await this.mainModel!.fit(stateTensor, updatedQValues, {
      batchSize: this.config.batchSize,
      epochs: 1,
      verbose: 0
    });
    
    // Clean up tensors
    stateTensor.dispose();
    nextStateTensor.dispose();
    currentQValues.dispose();
    targetQValues.dispose();
    maxTargetQValues.dispose();
    updatedQValues.dispose();
    
    // Update epsilon
    if (this.config.epsilon > this.config.epsilonMin) {
      this.config.epsilon *= this.config.epsilonDecay;
    }
    
    // Update target model periodically
    this.step++;
    if (this.step % this.config.targetUpdateFreq === 0) {
      this.updateTargetModel();
    }
    
    return history.history['loss'][0] as number;
  }

  /**
   * Sample random batch from memory
   */
  private sampleBatch(): Experience[] {
    const batch: Experience[] = [];
    const batchSize = Math.min(this.config.batchSize, this.memory.length);
    
    for (let i = 0; i < batchSize; i++) {
      const randomIndex = Math.floor(Math.random() * this.memory.length);
      batch.push(this.memory[randomIndex]);
    }
    
    return batch;
  }

  /**
   * Update Q-values using Bellman equation
   */
  private async updateQValues(
    currentQValues: tf.Tensor, 
    batch: Experience[], 
    maxTargetQValues: tf.Tensor
  ): Promise<tf.Tensor> {
    const qValuesArray = await currentQValues.array() as number[][];
    const maxTargetArray = await maxTargetQValues.array() as number[];
    
    batch.forEach((exp, index) => {
      let target = exp.reward;
      if (!exp.done) {
        target += this.config.gamma * maxTargetArray[index];
      }
      qValuesArray[index][exp.action] = target;
    });
    
    return tf.tensor2d(qValuesArray);
  }

  /**
   * Update target model weights
   */
  private updateTargetModel(): void {
    if (!this.mainModel || !this.targetModel) return;
    
    this.targetModel.setWeights(this.mainModel.getWeights());
  }

  /**
   * Get current model predictions for visualization
   */
  async getQValues(state: number[]): Promise<number[]> {
    if (!this.mainModel) return [0, 0, 0];
    
    const stateTensor = tf.tensor2d([state]);
    const qValues = this.mainModel.predict(stateTensor) as tf.Tensor;
    const values = await qValues.data();
    
    stateTensor.dispose();
    qValues.dispose();
    
    return Array.from(values);
  }

  /**
   * Save model to browser storage
   */
  async saveModel(): Promise<void> {
    if (!this.mainModel) return;
    
    await this.mainModel.save('localstorage://traffic-dqn-model');
  }

  /**
   * Load model from browser storage
   */
  async loadModel(): Promise<void> {
    try {
      this.mainModel = await tf.loadLayersModel('localstorage://traffic-dqn-model') as tf.Sequential;
      this.createTargetModel();
    } catch (error) {
      console.warn('No saved model found, using initialized model:', error);
      this.initializeModels();
    }
  }

  /**
   * Update DQN configuration
   */
  updateConfig(newConfig: Partial<DQNConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // Update optimizer if learning rate changed
    if (newConfig.learningRate && this.mainModel) {
      this.mainModel.compile({
        optimizer: tf.train.adam(this.config.learningRate),
        loss: 'meanSquaredError',
        metrics: ['mse']
      });
    }
  }

  /**
   * Get current configuration
   */
  getConfig(): DQNConfig {
    return { ...this.config };
  }

  /**
   * Get memory usage statistics
   */
  getMemoryStats(): { size: number; capacity: number; utilizationPercent: number } {
    return {
      size: this.memory.length,
      capacity: this.config.memorySize,
      utilizationPercent: (this.memory.length / this.config.memorySize) * 100
    };
  }

  /**
   * Clear experience replay memory
   */
  clearMemory(): void {
    this.memory = [];
  }

  /**
   * Reset epsilon for training restart
   */
  resetEpsilon(): void {
    this.config.epsilon = 1.0;
  }

  /**
   * Get model summary
   */
  getModelSummary(): any {
    if (!this.mainModel) return null;
    
    return {
      layers: this.mainModel.layers.length,
      trainableParams: this.mainModel.countParams(),
      config: this.mainModel.getConfig()
    };
  }

  /**
   * Dispose of models to free memory
   */
  dispose(): void {
    if (this.mainModel) {
      this.mainModel.dispose();
      this.mainModel = null;
    }
    
    if (this.targetModel) {
      this.targetModel.dispose();
      this.targetModel = null;
    }
    
    this.memory = [];
  }
}