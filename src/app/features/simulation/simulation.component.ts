import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

import { TrafficSimulationService } from '../../core/services/traffic-sim.service';
import { BaselineService } from '../../core/services/baseline.service';
import { TrafficState, TrafficPhase } from '../../core/models/traffic-state';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { DocumentationModalComponent } from '../../shared/components/documentation-modal/documentation-modal.component';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, SliderComponent, DocumentationModalComponent],
  template: `
    <!-- Documentation Modal -->
    <app-documentation-modal 
      [isOpen]="showDocumentation" 
      (closeModal)="closeDocumentation()">
    </app-documentation-modal>

    <div class="simulation-container p-6 max-w-7xl mx-auto">
      <div class="header mb-8">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Traffic Simulation</h1>
            <p class="text-lg text-gray-600">Compare RL Agent (DQN) vs Fixed-Timer Baseline</p>
          </div>
          <app-button 
            variant="secondary" 
            size="sm"
            (click)="openDocumentation()">
            📖 How it Works
          </app-button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Simulation Canvas -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold text-gray-800">4-Way Intersection</h2>
              <div class="flex space-x-2">
                <span class="text-sm text-gray-500">Episode: {{ currentEpisode }}</span>
                <span class="text-sm text-gray-500">Step: {{ currentStep }}</span>
              </div>
            </div>
            
            <canvas 
              #simulationCanvas
              class="intersection-canvas w-full"
              width="600" 
              height="600"
              (click)="onCanvasClick($event)"
            ></canvas>
            
            <!-- Traffic Light Status -->
            <div class="mt-4 grid grid-cols-4 gap-4 text-center">
              <div class="traffic-light-status" [class]="getTrafficLightClass('north')">
                <div class="text-sm font-medium">North</div>
                <div class="text-xs">{{ queueLengths[0] }} vehicles</div>
              </div>
              <div class="traffic-light-status" [class]="getTrafficLightClass('east')">
                <div class="text-sm font-medium">East</div>
                <div class="text-xs">{{ queueLengths[1] }} vehicles</div>
              </div>
              <div class="traffic-light-status" [class]="getTrafficLightClass('south')">
                <div class="text-sm font-medium">South</div>
                <div class="text-xs">{{ queueLengths[2] }} vehicles</div>
              </div>
              <div class="traffic-light-status" [class]="getTrafficLightClass('west')">
                <div class="text-sm font-medium">West</div>
                <div class="text-xs">{{ queueLengths[3] }} vehicles</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls Panel -->
        <div class="space-y-6">
          <!-- Simulation Controls -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Simulation Controls</h3>
            
            <div class="space-y-4">
              <div class="flex space-x-2">
                <app-button 
                  [variant]="isRLRunning ? 'danger' : 'primary'"
                  [fullWidth]="true"
                  (click)="toggleRLSimulation()"
                >
                  {{ isRLRunning ? 'Stop RL' : 'Start RL' }}
                </app-button>
                
                <app-button 
                  [variant]="isBaselineRunning ? 'danger' : 'secondary'"
                  [fullWidth]="true"
                  (click)="toggleBaselineSimulation()"
                >
                  {{ isBaselineRunning ? 'Stop Baseline' : 'Start Baseline' }}
                </app-button>
              </div>
              
              <app-button 
                variant="secondary"
                [fullWidth]="true"
                (click)="resetSimulation()"
              >
                Reset All
              </app-button>

              <div class="grid grid-cols-2 gap-2">
                <app-button 
                  size="sm"
                  variant="success"
                  [fullWidth]="true"
                  (click)="saveModel()"
                  [disabled]="!isRLRunning"
                >
                  Save Model
                </app-button>
                
                <app-button 
                  size="sm"
                  variant="secondary"
                  [fullWidth]="true"
                  (click)="loadModel()"
                >
                  Load Model
                </app-button>
              </div>
            </div>
          </div>

          <!-- Traffic Parameters -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Traffic Parameters</h3>
            
            <div class="space-y-4">
              <app-slider
                label="North Arrival Rate"
                [min]="0"
                [max]="0.5"
                [step]="0.01"
                [value]="arrivalRates[0]"
                unit=" veh/s"
                description="Vehicles per second from north"
                (valueChange)="updateArrivalRate(0, $event)"
              ></app-slider>
              
              <app-slider
                label="East Arrival Rate"
                [min]="0"
                [max]="0.5"
                [step]="0.01"
                [value]="arrivalRates[1]"
                unit=" veh/s"
                description="Vehicles per second from east"
                (valueChange)="updateArrivalRate(1, $event)"
              ></app-slider>
              
              <app-slider
                label="South Arrival Rate"
                [min]="0"
                [max]="0.5"
                [step]="0.01"
                [value]="arrivalRates[2]"
                unit=" veh/s"
                description="Vehicles per second from south"
                (valueChange)="updateArrivalRate(2, $event)"
              ></app-slider>
              
              <app-slider
                label="West Arrival Rate"
                [min]="0"
                [max]="0.5"
                [step]="0.01"
                [value]="arrivalRates[3]"
                unit=" veh/s"
                description="Vehicles per second from west"
                (valueChange)="updateArrivalRate(3, $event)"
              ></app-slider>
            </div>
          </div>

          <!-- RL Parameters -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">RL Parameters</h3>
            
            <div class="space-y-4">
              <app-slider
                label="Learning Rate"
                [min]="0.0001"
                [max]="0.01"
                [step]="0.0001"
                [value]="learningRate"
                description="How fast the agent learns"
                (valueChange)="updateLearningRate($event)"
              ></app-slider>
              
              <app-slider
                label="Discount Factor (γ)"
                [min]="0.8"
                [max]="0.999"
                [step]="0.001"
                [value]="gamma"
                description="Future reward importance"
                (valueChange)="updateGamma($event)"
              ></app-slider>
              
              <app-slider
                label="Exploration (ε)"
                [min]="0.01"
                [max]="1.0"
                [step]="0.01"
                [value]="epsilon"
                description="Random action probability"
                (valueChange)="updateEpsilon($event)"
              ></app-slider>
            </div>
          </div>

          <!-- Real-time Metrics -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Live Metrics</h3>
            
            <div class="space-y-3">
              <div class="metric-row">
                <span class="text-sm text-gray-600">RL Total Reward:</span>
                <span class="text-sm font-mono text-blue-600">{{ rlMetrics.totalReward | number:'1.2-2' }}</span>
              </div>
              
              <div class="metric-row">
                <span class="text-sm text-gray-600">Baseline Total Reward:</span>
                <span class="text-sm font-mono text-red-600">{{ baselineMetrics.totalReward | number:'1.2-2' }}</span>
              </div>
              
              <div class="metric-row">
                <span class="text-sm text-gray-600">Avg Queue Length:</span>
                <span class="text-sm font-mono text-gray-800">{{ avgQueueLength | number:'1.1-1' }}</span>
              </div>
              
              <div class="metric-row">
                <span class="text-sm text-gray-600">Current Phase:</span>
                <span class="text-sm font-medium" [class]="getPhaseColor(currentPhase)">{{ getPhaseText(currentPhase) }}</span>
              </div>

              <!-- RL Training Progress -->
              <div class="mt-4 pt-4 border-t border-gray-200" *ngIf="isRLRunning">
                <h4 class="text-sm font-semibold text-gray-700 mb-2">🧠 Training Progress</h4>
                
                <div class="metric-row">
                  <span class="text-xs text-gray-600">Episode Progress:</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-20 bg-gray-200 rounded-full h-2">
                      <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                           [style.width.%]="(currentStep / getEpisodeLength()) * 100"></div>
                    </div>
                    <span class="text-xs font-mono">{{ currentStep }}/{{ getEpisodeLength() }}</span>
                  </div>
                </div>
                
                <div class="metric-row">
                  <span class="text-xs text-gray-600">Exploration (ε):</span>
                  <span class="text-xs font-mono text-orange-600">{{ epsilon | number:'1.3-3' }}</span>
                </div>
                
                <div class="metric-row">
                  <span class="text-xs text-gray-600">Memory Used:</span>
                  <span class="text-xs font-mono text-purple-600">{{ getMemoryUsage() }}</span>
                </div>
                
                <div class="metric-row" *ngIf="getTrainingStatus()">
                  <span class="text-xs text-gray-600">Status:</span>
                  <span class="text-xs font-mono text-green-600">{{ getTrainingStatus() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .intersection-canvas {
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
    }
    
    .traffic-light-status {
      @apply p-3 rounded-lg border-2 transition-colors;
    }
    
    .traffic-light-green {
      @apply bg-green-100 border-green-300 text-green-800;
    }
    
    .traffic-light-red {
      @apply bg-red-100 border-red-300 text-red-800;
    }
    
    .traffic-light-yellow {
      @apply bg-yellow-100 border-yellow-300 text-yellow-800;
    }
    
    .metric-row {
      @apply flex justify-between items-center;
    }
  `]
})
export class SimulationComponent implements OnInit, OnDestroy {
  @ViewChild('simulationCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private readonly destroy$ = new Subject<void>();
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  
  // Simulation state
  isRLRunning = false;
  isBaselineRunning = false;
  currentEpisode = 0;
  currentStep = 0;
  currentPhase = TrafficPhase.NS_GREEN;
  queueLengths: [number, number, number, number] = [0, 0, 0, 0];
  
  // Documentation modal state
  showDocumentation = false;
  
  // Configuration
  arrivalRates: [number, number, number, number] = [0.1, 0.08, 0.12, 0.09];
  learningRate = 0.001;
  gamma = 0.95;
  epsilon = 1.0;
  
  // Metrics
  rlMetrics = { totalReward: 0, avgQueueLength: 0, totalVehicles: 0, avgWaitTime: 0, episode: 0 };
  baselineMetrics = { totalReward: 0, avgQueueLength: 0, totalVehicles: 0, avgWaitTime: 0, episode: 0 };
  
  get avgQueueLength(): number {
    return this.queueLengths.reduce((sum, q) => sum + q, 0) / 4;
  }

  constructor(
    private readonly rlService: TrafficSimulationService,
    private readonly baselineService: BaselineService
  ) {}

  ngOnInit(): void {
    this.initializeCanvas();
    this.initializeServices();
    this.setupSubscriptions();
    this.startAnimationLoop();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    
    // Set canvas for the RL service
    this.rlService.setCanvas(canvas);
    
    if (this.ctx) {
      this.drawIntersection();
    }
  }

  private initializeServices(): void {
    // Initialize the RL simulation service
    this.rlService.initialize();
    
    // The baseline service doesn't need explicit initialization
    console.log('Services initialized successfully');
  }

  private setupSubscriptions(): void {
    // Subscribe to RL service without takeUntil to prevent premature stopping
    this.rlService.state$.subscribe((state: TrafficState) => {
      this.currentPhase = state.currentPhase;
      this.queueLengths = state.queueLengths;
      this.currentStep = state.totalTime; // Update step counter
      // Force a redraw when state changes
      this.drawIntersection();
    });

    this.rlService.metrics$.subscribe(metrics => {
      this.rlMetrics = metrics;
      this.currentEpisode = metrics.episode;
    });

    this.rlService.isRunning$.subscribe(running => {
      this.isRLRunning = running;
      console.log('RL Running state changed to:', running);
    });

    // Subscribe to baseline service
    this.baselineService.state$.subscribe((state: TrafficState) => {
      // Update visualization with baseline state when RL is not running
      if (!this.isRLRunning) {
        this.currentPhase = state.currentPhase;
        this.queueLengths = state.queueLengths;
        this.currentStep = state.totalTime;
        this.drawIntersection();
      }
    });

    this.baselineService.metrics$.subscribe(metrics => {
      this.baselineMetrics = metrics;
    });

    this.baselineService.isRunning$.subscribe(running => {
      this.isBaselineRunning = running;
      console.log('Baseline Running state changed to:', running);
    });
  }

  private startAnimationLoop(): void {
    const animate = () => {
      this.drawIntersection();
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  private drawIntersection(): void {
    if (!this.ctx) return;

    const canvas = this.canvasRef.nativeElement;
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    this.ctx.fillStyle = '#f8fafc';
    this.ctx.fillRect(0, 0, width, height);
    
    // Draw roads
    this.drawRoads(width, height);
    
    // Draw traffic lights
    this.drawTrafficLights(width, height);
    
    // Draw vehicles in queues
    this.drawVehicleQueues(width, height);
    
    // Draw intersection center
    this.drawIntersectionCenter(width, height);
  }

  private drawRoads(width: number, height: number): void {
    if (!this.ctx) return;
    
    const roadWidth = 100;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Road color
    this.ctx.fillStyle = '#6b7280';
    
    // Horizontal road
    this.ctx.fillRect(0, centerY - roadWidth / 2, width, roadWidth);
    
    // Vertical road
    this.ctx.fillRect(centerX - roadWidth / 2, 0, roadWidth, height);
    
    // Road markings
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([20, 10]);
    
    // Horizontal center line
    this.ctx.beginPath();
    this.ctx.moveTo(0, centerY);
    this.ctx.lineTo(width, centerY);
    this.ctx.stroke();
    
    // Vertical center line
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, 0);
    this.ctx.lineTo(centerX, height);
    this.ctx.stroke();
    
    this.ctx.setLineDash([]);
  }

  private drawTrafficLights(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const lightSize = 20;
    const offset = 80;
    
    // Traffic light positions
    const lights = [
      { x: centerX, y: centerY - offset, direction: 'north' },
      { x: centerX + offset, y: centerY, direction: 'east' },
      { x: centerX, y: centerY + offset, direction: 'south' },
      { x: centerX - offset, y: centerY, direction: 'west' }
    ];
    
    lights.forEach(light => {
      const isGreen = this.isDirectionGreen(light.direction);
      
      // Light background
      this.ctx!.fillStyle = '#374151';
      this.ctx!.fillRect(light.x - lightSize / 2, light.y - lightSize / 2, lightSize, lightSize);
      
      // Light color
      this.ctx!.fillStyle = isGreen ? '#10b981' : '#ef4444';
      this.ctx!.beginPath();
      this.ctx!.arc(light.x, light.y, lightSize / 3, 0, 2 * Math.PI);
      this.ctx!.fill();
    });
  }

  private drawVehicleQueues(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const vehicleSize = 8;
    const spacing = 12;
    
    // Draw vehicles for each direction
    const directions = [
      { queue: this.queueLengths[0], startX: centerX - 15, startY: centerY - 100, dx: 0, dy: -spacing }, // North
      { queue: this.queueLengths[1], startX: centerX + 100, startY: centerY - 15, dx: spacing, dy: 0 },   // East
      { queue: this.queueLengths[2], startX: centerX + 15, startY: centerY + 100, dx: 0, dy: spacing },   // South
      { queue: this.queueLengths[3], startX: centerX - 100, startY: centerY + 15, dx: -spacing, dy: 0 }   // West
    ];
    
    directions.forEach(dir => {
      for (let i = 0; i < Math.min(dir.queue, 15); i++) { // Limit visual queue to 15 vehicles
        const x = dir.startX + dir.dx * i;
        const y = dir.startY + dir.dy * i;
        
        this.ctx!.fillStyle = '#3b82f6';
        this.ctx!.fillRect(x - vehicleSize / 2, y - vehicleSize / 2, vehicleSize, vehicleSize);
        
        // Vehicle outline
        this.ctx!.strokeStyle = '#1e40af';
        this.ctx!.lineWidth = 1;
        this.ctx!.strokeRect(x - vehicleSize / 2, y - vehicleSize / 2, vehicleSize, vehicleSize);
      }
    });
  }

  private drawIntersectionCenter(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const size = 50;
    
    // Intersection center
    this.ctx.fillStyle = '#f3f4f6';
    this.ctx.fillRect(centerX - size / 2, centerY - size / 2, size, size);
    
    // Center outline
    this.ctx.strokeStyle = '#d1d5db';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(centerX - size / 2, centerY - size / 2, size, size);
  }

  // Component methods that are called in the template
  onCanvasClick(event: MouseEvent): void {
    // Handle canvas click events - could be used for interactive debugging
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log('Canvas clicked at:', x, y);
  }

  // Add a flag to prevent multiple rapid clicks
  private isToggling = false;

  toggleRLSimulation(): void {
    // Prevent multiple rapid clicks
    if (this.isToggling) {
      console.log('Toggle already in progress, ignoring...');
      return;
    }
    
    this.isToggling = true;
    console.log('Toggle RL - Current state:', this.isRLRunning);
    
    try {
      if (this.isRLRunning) {
        console.log('Stopping RL simulation...');
        this.rlService.stopSimulation();
      } else {
        console.log('Starting RL simulation...');
        this.rlService.startSimulation();
      }
    } finally {
      // Reset the flag after a short delay
      setTimeout(() => {
        this.isToggling = false;
      }, 500);
    }
  }

  toggleBaselineSimulation(): void {
    // Prevent multiple rapid clicks
    if (this.isToggling) {
      console.log('Toggle already in progress, ignoring...');
      return;
    }
    
    this.isToggling = true;
    console.log('Toggle Baseline - Current state:', this.isBaselineRunning);
    
    try {
      if (this.isBaselineRunning) {
        console.log('Stopping baseline simulation...');
        this.baselineService.stopSimulation();
      } else {
        console.log('Starting baseline simulation...');
        this.baselineService.startSimulation();
      }
    } finally {
      // Reset the flag after a short delay
      setTimeout(() => {
        this.isToggling = false;
      }, 500);
    }
  }

  resetSimulation(): void {
    this.rlService.reset();
    this.baselineService.reset();
    this.currentEpisode = 0;
    this.currentStep = 0;
  }

  saveModel(): void {
    this.rlService.saveModel().then(() => {
      console.log('Model saved successfully');
    }).catch(error => {
      console.error('Failed to save model:', error);
    });
  }

  loadModel(): void {
    this.rlService.loadModel().then(() => {
      console.log('Model loaded successfully');
    }).catch(error => {
      console.error('Failed to load model:', error);
    });
  }

  updateArrivalRate(direction: number, rate: number): void {
    this.arrivalRates[direction] = rate;
    const config = this.rlService.getConfig();
    config.arrivalRates[direction] = rate;
    this.rlService.updateConfig(config);
  }

  updateLearningRate(rate: number): void {
    this.learningRate = rate;
    this.rlService.updateDQNConfig({ learningRate: rate });
  }

  updateGamma(gamma: number): void {
    this.gamma = gamma;
    this.rlService.updateDQNConfig({ gamma });
  }

  updateEpsilon(epsilon: number): void {
    this.epsilon = epsilon;
    this.rlService.updateDQNConfig({ epsilon });
  }

  getTrafficLightClass(direction: string): string {
    const isGreen = this.isDirectionGreen(direction);
    if (isGreen) {
      return 'traffic-light-green';
    } else {
      return 'traffic-light-red';
    }
  }

  getPhaseColor(phase: TrafficPhase): string {
    switch (phase) {
      case TrafficPhase.NS_GREEN:
        return 'text-green-600';
      case TrafficPhase.EW_GREEN:
        return 'text-blue-600';
      case TrafficPhase.ALL_RED:
        return 'text-red-600';
      case TrafficPhase.PEDESTRIAN:
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  }

  getPhaseText(phase: TrafficPhase): string {
    switch (phase) {
      case TrafficPhase.NS_GREEN:
        return 'North-South Green';
      case TrafficPhase.EW_GREEN:
        return 'East-West Green';
      case TrafficPhase.ALL_RED:
        return 'All Red';
      case TrafficPhase.PEDESTRIAN:
        return 'Pedestrian Phase';
      default:
        return 'Unknown';
    }
  }

  private isDirectionGreen(direction: string): boolean {
    switch (direction) {
      case 'north':
      case 'south':
        return this.currentPhase === TrafficPhase.NS_GREEN;
      case 'east':
      case 'west':
        return this.currentPhase === TrafficPhase.EW_GREEN;
      default:
        return false;
    }
  }

  // Documentation modal methods
  openDocumentation(): void {
    console.log('Opening documentation modal...');
    this.showDocumentation = true;
    console.log('showDocumentation is now:', this.showDocumentation);
  }

  closeDocumentation(): void {
    console.log('Closing documentation modal...');
    this.showDocumentation = false;
    console.log('showDocumentation is now:', this.showDocumentation);
  }

  // Additional methods for enhanced metrics
  getEpisodeLength(): number {
    return this.rlService.getConfig().episodeLength;
  }

  getMemoryUsage(): string {
    try {
      const stats = this.rlService.getDQNMemoryStats();
      return `${stats.size}/${stats.capacity}`;
    } catch {
      return 'N/A';
    }
  }

  getTrainingStatus(): string {
    if (!this.isRLRunning) return '';
    
    // Get real epsilon from DQN service
    const currentEpsilon = this.rlService.getCurrentEpsilon();
    const explorationThreshold = 0.1;
    
    if (currentEpsilon > explorationThreshold) {
      return '🔍 Exploring';
    } else {
      return '🎯 Exploiting';
    }
  }

  // Method to get current epsilon from DQN service
  getCurrentEpsilon(): number {
    try {
      return this.rlService.getCurrentEpsilon();
    } catch {
      return this.epsilon; // Fallback to UI value
    }
  }
}