import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TrafficState, TrafficPhase, SimulationMetrics, SimulationConfig } from '../models/traffic-state';
import { DQNService, Experience } from './dqn.service';

export interface Vehicle {
  id: string;
  x: number;
  y: number;
  speed: number;
  direction: 'north' | 'south' | 'east' | 'west';
  type: 'car' | 'truck' | 'bus';
}

export interface TrafficLight {
  id: string;
  x: number;
  y: number;
  state: 'red' | 'yellow' | 'green';
  countdown: number;
}

export interface Intersection {
  id: string;
  x: number;
  y: number;
  trafficLights: TrafficLight[];
}

export interface Road {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  lanes: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrafficSimulationService {
  private canvas?: HTMLCanvasElement;
  private ctx?: CanvasRenderingContext2D;
  private initialized = false;
  private readonly _isRunning$ = new BehaviorSubject<boolean>(false);
  private readonly _state$ = new BehaviorSubject<TrafficState>({
    queueLengths: [0, 0, 0, 0],
    currentPhase: TrafficPhase.NS_GREEN,
    phaseTimeRemaining: 30,
    totalTime: 0
  });
  private readonly _metrics$ = new BehaviorSubject<SimulationMetrics>({
    totalReward: 0,
    avgQueueLength: 0,
    totalVehicles: 0,
    avgWaitTime: 0,
    episode: 0
  });
  private animationId?: number;
  private savingModel = false;
  private loadingModel = false;
  
  // Simulation state
  private simulationTimer?: number;
  private stepCount = 0;
  private currentEpisode = 0;
  private totalReward = 0;
  private lastStepTime = 0;

  // Add DQN integration
  private previousState: TrafficState | null = null;
  private previousAction: number | null = null;
  private totalTrainingLoss = 0;
  private trainingSteps = 0;

  private config: SimulationConfig = {
    arrivalRates: [0.1, 0.08, 0.12, 0.09],
    episodeLength: 200, // Shorter episodes for faster learning
    timestepDuration: 1,
    maxQueueLength: 50,
    minPhaseDuration: 15,
    maxPhaseDuration: 60,
    clearanceTime: 3,
    pedestrianPhaseEnabled: false,
    pedestrianPhaseDuration: 20,
    gridSize: 10
  };

  constructor(private readonly dqnService: DQNService) {}

  // Public observables - fix naming to match component expectations
  get state$(): Observable<TrafficState> {
    return this._state$.asObservable();
  }

  get metrics$(): Observable<SimulationMetrics> {
    return this._metrics$.asObservable();
  }

  get isRunning$(): Observable<boolean> {
    return this._isRunning$.asObservable();
  }

  get isRunning(): Observable<boolean> {
    return this._isRunning$.asObservable();
  }

  get trafficState(): Observable<TrafficState> {
    return this._state$.asObservable();
  }

  get isInitialized(): boolean {
    return this.initialized;
  }

  initialize(): void {
    this.initialized = true;
    this.lastStepTime = Date.now();
    console.log('Traffic simulation initialized');
  }

  async start(): Promise<void> {
    if (!this.initialized) {
      console.error('Simulation not initialized');
      return;
    }
    
    console.log('Starting RL simulation...');
    this._isRunning$.next(true);
    this.startSimulationLoop();
  }

  stop(): void {
    console.log('Stopping RL simulation...');
    console.trace('Stop called from:'); // This will show the call stack
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = undefined;
    }
    if (this.simulationTimer) {
      clearInterval(this.simulationTimer);
      this.simulationTimer = undefined;
    }
    this._isRunning$.next(false);
  }

  startSimulation(): void {
    this.start();
  }

  stopSimulation(): void {
    this.stop();
  }

  reset(): void {
    this.stop();
    this.stepCount = 0;
    this.currentEpisode = 0;
    this.totalReward = 0;
    
    this._state$.next({
      queueLengths: [0, 0, 0, 0],
      currentPhase: TrafficPhase.NS_GREEN,
      phaseTimeRemaining: 30,
      totalTime: 0
    });
    this._metrics$.next({
      totalReward: 0,
      avgQueueLength: 0,
      totalVehicles: 0,
      avgWaitTime: 0,
      episode: 0
    });
    
    console.log('RL simulation reset');
  }

  setCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') || undefined;
  }

  updateConfig(config: Partial<SimulationConfig>): void {
    this.config = { ...this.config, ...config };
  }

  getConfig(): SimulationConfig {
    return { ...this.config };
  }

  // Add methods to expose DQN metrics
  getDQNMemoryStats(): { size: number; capacity: number; utilizationPercent: number } {
    return this.dqnService.getMemoryStats();
  }

  getCurrentEpsilon(): number {
    return this.dqnService.getConfig().epsilon;
  }

  getTrainingLoss(): number {
    return this.trainingSteps > 0 ? this.totalTrainingLoss / this.trainingSteps : 0;
  }

  updateDQNConfig(config: any): void {
    this.dqnService.updateConfig(config);
    console.log('DQN config updated:', config);
  }

  async saveModel(): Promise<void> {
    this.savingModel = true;
    try {
      console.log('Saving DQN model...');
      await this.dqnService.saveModel();
      console.log('DQN model saved successfully');
    } catch (error) {
      console.error('Failed to save DQN model:', error);
    } finally {
      this.savingModel = false;
    }
  }

  async loadModel(): Promise<void> {
    this.loadingModel = true;
    try {
      console.log('Loading DQN model...');
      await this.dqnService.loadModel();
      console.log('DQN model loaded successfully');
    } catch (error) {
      console.error('Failed to load DQN model:', error);
    } finally {
      this.loadingModel = false;
    }
  }

  private startSimulationLoop(): void {
    console.log('Starting simulation loop with timestep:', this.config.timestepDuration * 1000, 'ms');
    
    // Run simulation steps at regular intervals
    this.simulationTimer = window.setInterval(() => {
      if (this._isRunning$.value) {
        this.runSimulationStep();
      }
    }, this.config.timestepDuration * 1000);
  }

  private runSimulationStep(): void {
    const currentState = this._state$.value;
    
    // Convert traffic state to DQN input format
    const stateVector = this.stateToVector(currentState);
    
    // Get action from DQN (this is where the actual RL happens!)
    const action = this.dqnService.selectAction(stateVector);
    
    // Execute action and get next state
    const nextState = this.executeAction(currentState, action);
    
    // Calculate reward
    const reward = this.calculateReward(currentState, nextState, action);
    this.totalReward += reward;
    
    // Store experience for training (if we have a previous state)
    if (this.previousState && this.previousAction !== null) {
      const experience: Experience = {
        state: this.stateToVector(this.previousState),
        action: this.previousAction,
        reward: reward,
        nextState: stateVector,
        done: false // Will be set to true at episode end
      };
      this.dqnService.remember(experience);
    }
    
    // Train the model if we have enough experiences
    if (this.stepCount % 4 === 0) { // Train every 4 steps
      this.trainModel();
    }
    
    console.log(`Step ${this.stepCount}: Action=${action}, Reward=${reward.toFixed(2)}, Queues=[${nextState.queueLengths.map(q => q.toFixed(1)).join(',')}]`);
    
    // Update state
    this._state$.next(nextState);
    this.updateMetrics(nextState, reward);
    
    // Store current state and action for next iteration
    this.previousState = currentState;
    this.previousAction = action;
    
    this.stepCount++;
    
    // Check if episode is complete
    if (this.stepCount >= this.config.episodeLength) {
      this.endEpisode();
    }
  }

  /**
   * Convert TrafficState to vector format for DQN
   */
  private stateToVector(state: TrafficState): number[] {
    return [
      ...state.queueLengths,           // 4 queue lengths
      state.currentPhase,              // Current phase (0-3)
      state.phaseTimeRemaining / 60    // Normalized time remaining
    ];
  }

  /**
   * Calculate reward based on traffic efficiency
   */
  private calculateReward(prevState: TrafficState, newState: TrafficState, action: number): number {
    // Negative reward for queue lengths (encourage shorter queues)
    const queuePenalty = -newState.queueLengths.reduce((sum, q) => sum + q, 0) * 0.1;
    
    // Bonus for reducing total queue length
    const prevTotal = prevState.queueLengths.reduce((sum, q) => sum + q, 0);
    const newTotal = newState.queueLengths.reduce((sum, q) => sum + q, 0);
    const improvementBonus = (prevTotal - newTotal) * 0.5;
    
    // Small penalty for phase changes (encourage stability)
    const changePenalty = action !== prevState.currentPhase ? -0.1 : 0;
    
    return queuePenalty + improvementBonus + changePenalty;
  }

  /**
   * Train the DQN model
   */
  private async trainModel(): Promise<void> {
    try {
      const loss = await this.dqnService.replay();
      if (loss > 0) {
        this.totalTrainingLoss += loss;
        this.trainingSteps++;
        
        if (this.trainingSteps % 20 === 0) {
          const avgLoss = this.totalTrainingLoss / this.trainingSteps;
          console.log(`Training: Avg Loss = ${avgLoss.toFixed(4)}, Episodes = ${this.currentEpisode}, Epsilon = ${this.dqnService.getConfig().epsilon.toFixed(3)}`);
        }
      }
    } catch (error) {
      console.error('Training error:', error);
    }
  }

  private updateMetrics(state: TrafficState, reward: number): void {
    const currentQueueSum = state.queueLengths.reduce((sum, q) => sum + q, 0);
    
    const updatedMetrics: SimulationMetrics = {
      totalReward: this.totalReward,
      avgQueueLength: currentQueueSum / 4,
      totalVehicles: this.stepCount,
      avgWaitTime: currentQueueSum > 0 ? currentQueueSum * 2 : 0, // Simple wait time estimate
      episode: this.currentEpisode
    };
    
    this._metrics$.next(updatedMetrics);
  }

  private endEpisode(): void {
    // Mark the last experience as terminal
    if (this.previousState && this.previousAction !== null) {
      const finalExperience: Experience = {
        state: this.stateToVector(this.previousState),
        action: this.previousAction,
        reward: 0, // No final reward
        nextState: this.stateToVector(this._state$.value),
        done: true // This marks the episode as finished
      };
      this.dqnService.remember(finalExperience);
    }
    
    // Train one final time at episode end
    this.trainModel();
    
    this.currentEpisode++;
    this.stepCount = 0;
    this.totalReward = 0;
    this.previousState = null;
    this.previousAction = null;
    
    // Reset to initial state for new episode
    const initialState: TrafficState = {
      queueLengths: [0, 0, 0, 0],
      currentPhase: TrafficPhase.NS_GREEN,
      phaseTimeRemaining: this.config.minPhaseDuration,
      totalTime: 0
    };
    
    this._state$.next(initialState);
    
    console.log(`🎯 Episode ${this.currentEpisode} completed! Starting episode ${this.currentEpisode + 1}`);
    console.log(`📊 Memory: ${this.dqnService.getMemoryStats().size}/${this.dqnService.getMemoryStats().capacity} experiences`);
  }

  private executeAction(state: TrafficState, action: number): TrafficState {
    const nextState: TrafficState = {
      queueLengths: [...state.queueLengths] as [number, number, number, number],
      currentPhase: action as TrafficPhase,
      phaseTimeRemaining: this.config.minPhaseDuration,
      totalTime: state.totalTime + this.config.timestepDuration
    };

    // Simulate vehicle arrivals (Poisson process)
    for (let i = 0; i < 4; i++) {
      const arrivals = this.poissonRandom(this.config.arrivalRates[i] * this.config.timestepDuration);
      nextState.queueLengths[i] = Math.min(
        nextState.queueLengths[i] + arrivals,
        this.config.maxQueueLength
      );
    }

    // Process vehicles based on current phase
    this.processTrafficFlow(nextState);

    return nextState;
  }

  private processTrafficFlow(state: TrafficState): void {
    const processingRate = 0.5; // Vehicles per second when green
    const processed = processingRate * this.config.timestepDuration;

    switch (state.currentPhase) {
      case TrafficPhase.NS_GREEN:
        state.queueLengths[0] = Math.max(0, state.queueLengths[0] - processed); // North
        state.queueLengths[2] = Math.max(0, state.queueLengths[2] - processed); // South
        break;
      case TrafficPhase.EW_GREEN:
        state.queueLengths[1] = Math.max(0, state.queueLengths[1] - processed); // East
        state.queueLengths[3] = Math.max(0, state.queueLengths[3] - processed); // West
        break;
      case TrafficPhase.ALL_RED:
      case TrafficPhase.PEDESTRIAN:
        // No vehicle processing during these phases
        break;
    }
  }

  private poissonRandom(lambda: number): number {
    const L = Math.exp(-lambda);
    let k = 0;
    let p = 1;
    
    do {
      k++;
      p *= Math.random();
    } while (p > L);
    
    return k - 1;
  }
}