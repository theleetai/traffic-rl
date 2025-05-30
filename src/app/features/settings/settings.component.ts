import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TrafficSimulationService } from '../../core/services/traffic-sim.service';
import { BaselineService } from '../../core/services/baseline.service';
import { DQNService } from '../../core/services/dqn.service';
import { SimulationConfig, DQNConfig } from '../../core/models/traffic-state';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, SliderComponent],
  template: `
    <div class="settings-container p-6 max-w-7xl mx-auto">
      <div class="header mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Simulation Settings</h1>
        <p class="text-lg text-gray-600">Configure traffic parameters and AI settings</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Traffic Simulation Parameters -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">Traffic Parameters</h2>
          
          <div class="space-y-6">
            <!-- Arrival Rates -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Vehicle Arrival Rates</h3>
              <div class="space-y-4">
                <app-slider
                  label="North Direction"
                  [min]="0"
                  [max]="0.5"
                  [step]="0.01"
                  [value]="simulationConfig.arrivalRates[0]"
                  unit=" veh/s"
                  description="Vehicles arriving from north per second"
                  (valueChange)="updateArrivalRate(0, $event)"
                ></app-slider>
                
                <app-slider
                  label="East Direction"
                  [min]="0"
                  [max]="0.5"
                  [step]="0.01"
                  [value]="simulationConfig.arrivalRates[1]"
                  unit=" veh/s"
                  description="Vehicles arriving from east per second"
                  (valueChange)="updateArrivalRate(1, $event)"
                ></app-slider>
                
                <app-slider
                  label="South Direction"
                  [min]="0"
                  [max]="0.5"
                  [step]="0.01"
                  [value]="simulationConfig.arrivalRates[2]"
                  unit=" veh/s"
                  description="Vehicles arriving from south per second"
                  (valueChange)="updateArrivalRate(2, $event)"
                ></app-slider>
                
                <app-slider
                  label="West Direction"
                  [min]="0"
                  [max]="0.5"
                  [step]="0.01"
                  [value]="simulationConfig.arrivalRates[3]"
                  unit=" veh/s"
                  description="Vehicles arriving from west per second"
                  (valueChange)="updateArrivalRate(3, $event)"
                ></app-slider>
              </div>
            </div>

            <!-- Episode Settings -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Episode Configuration</h3>
              <div class="space-y-4">
                <app-slider
                  label="Episode Length"
                  [min]="100"
                  [max]="5000"
                  [step]="100"
                  [value]="simulationConfig.episodeLength"
                  unit=" steps"
                  description="Number of simulation steps per episode"
                  (valueChange)="updateEpisodeLength($event)"
                ></app-slider>
                
                <app-slider
                  label="Timestep Duration"
                  [min]="0.1"
                  [max]="5"
                  [step]="0.1"
                  [value]="simulationConfig.timestepDuration"
                  unit=" seconds"
                  description="Real time duration of each simulation step"
                  (valueChange)="updateTimestepDuration($event)"
                ></app-slider>
              </div>
            </div>

            <!-- Phase Settings -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Traffic Light Phases</h3>
              <div class="space-y-4">
                <app-slider
                  label="Minimum Phase Duration"
                  [min]="5"
                  [max]="60"
                  [step]="5"
                  [value]="simulationConfig.minPhaseDuration"
                  unit=" seconds"
                  description="Minimum time a traffic light stays in one phase"
                  (valueChange)="updateMinPhaseDuration($event)"
                ></app-slider>
                
                <app-slider
                  label="Maximum Phase Duration"
                  [min]="30"
                  [max]="120"
                  [step]="10"
                  [value]="simulationConfig.maxPhaseDuration"
                  unit=" seconds"
                  description="Maximum time a traffic light can stay in one phase"
                  (valueChange)="updateMaxPhaseDuration($event)"
                ></app-slider>
                
                <app-slider
                  label="Clearance Time"
                  [min]="1"
                  [max]="10"
                  [step]="1"
                  [value]="simulationConfig.clearanceTime"
                  unit=" seconds"
                  description="Red light time between phase changes"
                  (valueChange)="updateClearanceTime($event)"
                ></app-slider>
              </div>
            </div>

            <!-- Other Settings -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Other Parameters</h3>
              <div class="space-y-4">
                <app-slider
                  label="Maximum Queue Length"
                  [min]="10"
                  [max]="100"
                  [step]="5"
                  [value]="simulationConfig.maxQueueLength"
                  unit=" vehicles"
                  description="Maximum vehicles that can queue in one direction"
                  (valueChange)="updateMaxQueueLength($event)"
                ></app-slider>
                
                <div class="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="pedestrianPhase"
                    [checked]="simulationConfig.pedestrianPhaseEnabled"
                    (change)="updatePedestrianPhaseEnabled($event)"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label for="pedestrianPhase" class="text-sm font-medium text-gray-700">
                    Enable Pedestrian Phase
                  </label>
                </div>
                
                <app-slider
                  *ngIf="simulationConfig.pedestrianPhaseEnabled"
                  label="Pedestrian Phase Duration"
                  [min]="10"
                  [max]="60"
                  [step]="5"
                  [value]="simulationConfig.pedestrianPhaseDuration"
                  unit=" seconds"
                  description="Duration of pedestrian crossing phase"
                  (valueChange)="updatePedestrianPhaseDuration($event)"
                ></app-slider>
              </div>
            </div>
          </div>
        </div>

        <!-- DQN AI Parameters -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">Deep Q-Network Settings</h2>
          
          <div class="space-y-6">
            <!-- Learning Parameters -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Learning Parameters</h3>
              <div class="space-y-4">
                <app-slider
                  label="Learning Rate"
                  [min]="0.0001"
                  [max]="0.01"
                  [step]="0.0001"
                  [value]="dqnConfig.learningRate"
                  description="How fast the AI learns from experience"
                  (valueChange)="updateLearningRate($event)"
                ></app-slider>
                
                <app-slider
                  label="Discount Factor (γ)"
                  [min]="0.8"
                  [max]="0.999"
                  [step]="0.001"
                  [value]="dqnConfig.gamma"
                  description="Importance of future rewards vs immediate rewards"
                  (valueChange)="updateGamma($event)"
                ></app-slider>
              </div>
            </div>

            <!-- Exploration Parameters -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Exploration Strategy</h3>
              <div class="space-y-4">
                <app-slider
                  label="Epsilon (ε)"
                  [min]="0.01"
                  [max]="1.0"
                  [step]="0.01"
                  [value]="dqnConfig.epsilon"
                  description="Probability of taking random actions for exploration"
                  (valueChange)="updateEpsilon($event)"
                ></app-slider>
                
                <app-slider
                  label="Epsilon Decay"
                  [min]="0.99"
                  [max]="0.9999"
                  [step]="0.0001"
                  [value]="dqnConfig.epsilonDecay"
                  description="How quickly exploration decreases over time"
                  (valueChange)="updateEpsilonDecay($event)"
                ></app-slider>
                
                <app-slider
                  label="Minimum Epsilon"
                  [min]="0.001"
                  [max]="0.1"
                  [step]="0.001"
                  [value]="dqnConfig.epsilonMin"
                  description="Minimum level of random exploration to maintain"
                  (valueChange)="updateEpsilonMin($event)"
                ></app-slider>
              </div>
            </div>

            <!-- Training Parameters -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Training Configuration</h3>
              <div class="space-y-4">
                <app-slider
                  label="Batch Size"
                  [min]="16"
                  [max]="128"
                  [step]="16"
                  [value]="dqnConfig.batchSize"
                  description="Number of experiences used for each training step"
                  (valueChange)="updateBatchSize($event)"
                ></app-slider>
                
                <app-slider
                  label="Memory Size"
                  [min]="1000"
                  [max]="50000"
                  [step]="1000"
                  [value]="dqnConfig.memorySize"
                  unit=" experiences"
                  description="Maximum number of experiences stored for training"
                  (valueChange)="updateMemorySize($event)"
                ></app-slider>
                
                <app-slider
                  label="Target Update Frequency"
                  [min]="50"
                  [max]="1000"
                  [step]="50"
                  [value]="dqnConfig.targetUpdateFreq"
                  unit=" steps"
                  description="How often to update the target network"
                  (valueChange)="updateTargetUpdateFreq($event)"
                ></app-slider>
              </div>
            </div>

            <!-- Model Management -->
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Model Management</h3>
              <div class="space-y-3">
                <div class="grid grid-cols-2 gap-3">
                  <app-button 
                    variant="success"
                    [fullWidth]="true"
                    (click)="saveModel()"
                    [disabled]="isSaving"
                  >
                    {{ isSaving ? 'Saving...' : 'Save Model' }}
                  </app-button>
                  
                  <app-button 
                    variant="secondary"
                    [fullWidth]="true"
                    (click)="loadModel()"
                    [disabled]="isLoading"
                  >
                    {{ isLoading ? 'Loading...' : 'Load Model' }}
                  </app-button>
                </div>
                
                <app-button 
                  variant="danger"
                  [fullWidth]="true"
                  (click)="resetTraining()"
                >
                  Reset Training
                </app-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Configuration Actions</h3>
        
        <div class="flex flex-wrap gap-4">
          <app-button 
            variant="primary"
            (click)="applySettings()"
          >
            Apply All Settings
          </app-button>
          
          <app-button 
            variant="secondary"
            (click)="resetToDefaults()"
          >
            Reset to Defaults
          </app-button>
          
          <app-button 
            variant="secondary"
            (click)="exportConfig()"
          >
            Export Config
          </app-button>
          
          <app-button 
            variant="secondary"
            (click)="importConfig()"
          >
            Import Config
          </app-button>
        </div>
        
        <!-- Status Messages -->
        <div class="mt-4" *ngIf="statusMessage">
          <div 
            class="p-3 rounded-md text-sm"
            [class]="getStatusMessageClass()"
          >
            {{ statusMessage }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      @apply min-h-screen bg-gray-50;
    }
  `]
})
export class SettingsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  
  simulationConfig: SimulationConfig = {
    arrivalRates: [0.1, 0.08, 0.12, 0.09],
    episodeLength: 1000,
    timestepDuration: 1,
    maxQueueLength: 50,
    minPhaseDuration: 15,
    maxPhaseDuration: 60,
    clearanceTime: 3,
    pedestrianPhaseEnabled: false,
    pedestrianPhaseDuration: 20,
    gridSize: 10
  };

  dqnConfig: DQNConfig = {
    learningRate: 0.001,
    gamma: 0.95,
    epsilon: 1.0,
    epsilonDecay: 0.995,
    epsilonMin: 0.01,
    batchSize: 32,
    memorySize: 10000,
    targetUpdateFreq: 100
  };

  statusMessage = '';
  statusType: 'success' | 'error' | 'info' = 'info';
  isSaving = false;
  isLoading = false;

  constructor(
    private readonly rlService: TrafficSimulationService,
    private readonly baselineService: BaselineService,
    private readonly dqnService: DQNService
  ) {}

  ngOnInit(): void {
    this.loadCurrentSettings();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadCurrentSettings(): void {
    // Load current configuration from services
    this.simulationConfig = this.rlService.getConfig();
    this.dqnConfig = this.dqnService.getConfig();
  }

  // Traffic Parameter Updates
  updateArrivalRate(direction: number, rate: number): void {
    this.simulationConfig.arrivalRates[direction] = rate;
    this.showStatus('Arrival rate updated', 'info');
  }

  updateEpisodeLength(length: number): void {
    this.simulationConfig.episodeLength = length;
    this.showStatus('Episode length updated', 'info');
  }

  updateTimestepDuration(duration: number): void {
    this.simulationConfig.timestepDuration = duration;
    this.showStatus('Timestep duration updated', 'info');
  }

  updateMinPhaseDuration(duration: number): void {
    this.simulationConfig.minPhaseDuration = duration;
    this.showStatus('Minimum phase duration updated', 'info');
  }

  updateMaxPhaseDuration(duration: number): void {
    this.simulationConfig.maxPhaseDuration = duration;
    this.showStatus('Maximum phase duration updated', 'info');
  }

  updateClearanceTime(time: number): void {
    this.simulationConfig.clearanceTime = time;
    this.showStatus('Clearance time updated', 'info');
  }

  updateMaxQueueLength(length: number): void {
    this.simulationConfig.maxQueueLength = length;
    this.showStatus('Maximum queue length updated', 'info');
  }

  updatePedestrianPhaseEnabled(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.simulationConfig.pedestrianPhaseEnabled = target.checked;
    this.showStatus('Pedestrian phase setting updated', 'info');
  }

  updatePedestrianPhaseDuration(duration: number): void {
    this.simulationConfig.pedestrianPhaseDuration = duration;
    this.showStatus('Pedestrian phase duration updated', 'info');
  }

  // DQN Parameter Updates
  updateLearningRate(rate: number): void {
    this.dqnConfig.learningRate = rate;
    this.showStatus('Learning rate updated', 'info');
  }

  updateGamma(gamma: number): void {
    this.dqnConfig.gamma = gamma;
    this.showStatus('Discount factor updated', 'info');
  }

  updateEpsilon(epsilon: number): void {
    this.dqnConfig.epsilon = epsilon;
    this.showStatus('Epsilon updated', 'info');
  }

  updateEpsilonDecay(decay: number): void {
    this.dqnConfig.epsilonDecay = decay;
    this.showStatus('Epsilon decay updated', 'info');
  }

  updateEpsilonMin(min: number): void {
    this.dqnConfig.epsilonMin = min;
    this.showStatus('Minimum epsilon updated', 'info');
  }

  updateBatchSize(size: number): void {
    this.dqnConfig.batchSize = size;
    this.showStatus('Batch size updated', 'info');
  }

  updateMemorySize(size: number): void {
    this.dqnConfig.memorySize = size;
    this.showStatus('Memory size updated', 'info');
  }

  updateTargetUpdateFreq(freq: number): void {
    this.dqnConfig.targetUpdateFreq = freq;
    this.showStatus('Target update frequency updated', 'info');
  }

  // Actions
  applySettings(): void {
    try {
      // Update services with new configurations
      this.rlService.updateConfig(this.simulationConfig);
      this.baselineService.updateConfig(this.simulationConfig);
      this.dqnService.updateConfig(this.dqnConfig);
      
      this.showStatus('All settings applied successfully!', 'success');
    } catch (error) {
      this.showStatus('Error applying settings: ' + error, 'error');
    }
  }

  resetToDefaults(): void {
    this.simulationConfig = {
      arrivalRates: [0.1, 0.08, 0.12, 0.09],
      episodeLength: 1000,
      timestepDuration: 1,
      maxQueueLength: 50,
      minPhaseDuration: 15,
      maxPhaseDuration: 60,
      clearanceTime: 3,
      pedestrianPhaseEnabled: false,
      pedestrianPhaseDuration: 20,
      gridSize: 10
    };

    this.dqnConfig = {
      learningRate: 0.001,
      gamma: 0.95,
      epsilon: 1.0,
      epsilonDecay: 0.995,
      epsilonMin: 0.01,
      batchSize: 32,
      memorySize: 10000,
      targetUpdateFreq: 100
    };

    this.showStatus('Settings reset to defaults', 'info');
  }

  exportConfig(): void {
    const config = {
      simulation: this.simulationConfig,
      dqn: this.dqnConfig,
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `traffic-simulation-config-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    window.URL.revokeObjectURL(url);
    this.showStatus('Configuration exported successfully', 'success');
  }

  importConfig(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          try {
            const config = JSON.parse(e.target.result);
            if (config.simulation) {
              this.simulationConfig = config.simulation;
            }
            if (config.dqn) {
              this.dqnConfig = config.dqn;
            }
            this.showStatus('Configuration imported successfully', 'success');
          } catch (error) {
            this.showStatus('Error importing configuration: Invalid file format', 'error');
          }
        };
        reader.readAsText(file);
      }
    };
    
    input.click();
  }

  async saveModel(): Promise<void> {
    this.isSaving = true;
    try {
      await this.dqnService.saveModel();
      this.showStatus('Model saved successfully', 'success');
    } catch (error) {
      this.showStatus('Error saving model: ' + error, 'error');
    } finally {
      this.isSaving = false;
    }
  }

  async loadModel(): Promise<void> {
    this.isLoading = true;
    try {
      await this.dqnService.loadModel();
      this.showStatus('Model loaded successfully', 'success');
    } catch (error) {
      this.showStatus('Error loading model: ' + error, 'error');
    } finally {
      this.isLoading = false;
    }
  }

  resetTraining(): void {
    this.dqnService.clearMemory();
    this.dqnService.resetEpsilon();
    this.showStatus('Training reset - memory cleared and epsilon reset', 'info');
  }

  private showStatus(message: string, type: 'success' | 'error' | 'info'): void {
    this.statusMessage = message;
    this.statusType = type;
    
    // Clear message after 3 seconds
    setTimeout(() => {
      this.statusMessage = '';
    }, 3000);
  }

  getStatusMessageClass(): string {
    switch (this.statusType) {
      case 'success':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'error':
        return 'bg-red-100 text-red-800 border border-red-200';
      case 'info':
      default:
        return 'bg-blue-100 text-blue-800 border border-blue-200';
    }
  }
}