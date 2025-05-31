import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficPhase } from '../../../core/models/traffic-state';
import { ButtonComponent } from '../button/button.component';

interface DocumentationPage {
  title: string;
  description: string;
  bulletPoints?: string[];
  visualization: 'overview' | 'rl-demo' | 'baseline-demo' | 'comparison';
}

@Component({
  selector: 'app-documentation-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-sm" 
         *ngIf="isOpen" 
         (click)="onBackdropClick($event)"
         style="z-index: 9999; background-color: rgba(0, 0, 0, 0.5);">
      <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden"
           (click)="$event.stopPropagation()"
           style="z-index: 10000;">
        
        <!-- Header -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-2xl font-bold">Traffic Master: AI vs Traditional Control</h2>
              <p class="text-blue-100 mt-1">Interactive Traffic Signal Optimization Experiment</p>
            </div>
            <button 
              class="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-black hover:bg-opacity-20"
              (click)="close()">
              ×
            </button>
          </div>
        </div>

        <!-- Progress Indicator -->
        <div class="bg-gray-50 px-6 py-3">
          <div class="flex items-center justify-between">
            <div class="flex space-x-2">
              <div *ngFor="let page of pages; let i = index" 
                   class="w-3 h-3 rounded-full transition-colors duration-200"
                   [ngClass]="i === currentPageIndex ? 'bg-blue-600' : 'bg-gray-300'">
              </div>
            </div>
            <span class="text-sm text-gray-600">
              {{ currentPageIndex + 1 }} of {{ pages.length }}
            </span>
          </div>
        </div>

        <!-- Content -->
        <div class="flex h-[500px]">
          <!-- Left Panel - Text Content -->
          <div class="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">
                {{ currentPage.title }}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ currentPage.description }}
              </p>
              <ul *ngIf="currentPage.bulletPoints" class="space-y-2">
                <li *ngFor="let point of currentPage.bulletPoints" 
                    class="flex items-start text-sm text-gray-700">
                  <span class="text-blue-600 mr-2 mt-1">•</span>
                  {{ point }}
                </li>
              </ul>
            </div>

            <!-- Navigation -->
            <div class="flex justify-between items-center mt-6">
              <app-button 
                variant="secondary" 
                size="sm"
                [disabled]="currentPageIndex === 0"
                (click)="previousPage()">
                Previous
              </app-button>
              
              <div class="flex space-x-2">
                <app-button 
                  variant="secondary" 
                  size="sm"
                  (click)="close()">
                  Skip Tutorial
                </app-button>
                
                <app-button 
                  [variant]="isLastPage ? 'primary' : 'secondary'"
                  size="sm"
                  (click)="isLastPage ? close() : nextPage()">
                  {{ isLastPage ? 'Start Simulation' : 'Next' }}
                </app-button>
              </div>
            </div>
          </div>

          <!-- Right Panel - Visual Demonstration -->
          <div class="w-1/2 bg-gray-50 p-6 flex items-center justify-center">
            <div class="relative">
              <canvas 
                #demoCanvas
                class="border-2 border-gray-300 rounded-lg bg-white shadow-sm"
                width="300" 
                height="300"
                style="width: 300px; height: 300px;">
              </canvas>
              <div class="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {{ getVisualizationLabel() }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    .modal-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.3s, transform 0.3s;
    }
  `]
})
export class DocumentationModalComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('demoCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  currentPageIndex = 0;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationId: number | null = null;
  private readonly demoState = {
    phase: TrafficPhase.NS_GREEN,
    queues: [2, 1.5, 2.5, 1.8] as [number, number, number, number],
    time: 0,
    initialized: false
  };

  pages: DocumentationPage[] = [
    {
      title: 'Welcome to Traffic Master',
      description: 'This is an interactive experiment comparing AI-powered traffic signal control with traditional fixed-timer systems. You\'ll see how different approaches handle real-time traffic optimization at a 4-way intersection.',
      bulletPoints: [
        'Compare Reinforcement Learning (RL) vs Fixed-Timer Control',
        'Observe real-time traffic flow and queue management',
        'Adjust parameters to see how they affect performance',
        'View live metrics and performance comparisons'
      ],
      visualization: 'overview'
    },
    {
      title: 'Reinforcement Learning Agent (RL)',
      description: 'The RL agent uses Deep Q-Network (DQN) to learn optimal traffic signal timing. It observes queue lengths and makes intelligent decisions to minimize total waiting time.',
      bulletPoints: [
        'Learns from experience and adapts to traffic patterns',
        'Makes decisions based on current queue lengths',
        'Optimizes for minimal total vehicle waiting time',
        'Gets better over time through trial and error'
      ],
      visualization: 'rl-demo'
    },
    {
      title: 'Fixed-Timer Baseline',
      description: 'The traditional approach uses predetermined timing cycles. Signals change every 30 seconds regardless of actual traffic conditions - this is how most real traffic lights work today.',
      bulletPoints: [
        'Simple 30-second cycles for each direction',
        'No adaptation to current traffic conditions',
        'Predictable but potentially inefficient',
        'Standard approach used in most cities worldwide'
      ],
      visualization: 'baseline-demo'
    },
    {
      title: 'Interactive Controls & Metrics',
      description: 'Use the control panel to start either system, adjust traffic arrival rates, and monitor performance. Watch how different parameters affect queue lengths and total rewards.',
      bulletPoints: [
        'Start/Stop RL and Baseline simulations independently',
        'Adjust arrival rates for each direction (North, East, South, West)',
        'Tune RL parameters like learning rate and exploration',
        'Compare real-time metrics: rewards, queue lengths, wait times'
      ],
      visualization: 'comparison'
    }
  ];

  get currentPage(): DocumentationPage {
    return this.pages[this.currentPageIndex];
  }

  get isLastPage(): boolean {
    return this.currentPageIndex === this.pages.length - 1;
  }

  ngOnInit(): void {
    // Initialize demo state
    this.resetDemoState();
  }

  ngAfterViewInit(): void {
    this.initializeCanvas();
  }

  ngOnChanges(changes: any): void {
    if (changes.isOpen?.currentValue && !changes.isOpen?.previousValue) {
      console.log('Modal opened, starting visualization...');
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        this.initializeCanvas();
        this.startVisualization();
      }, 100);
    }
    
    if (changes.isOpen && !changes.isOpen.currentValue && this.animationId) {
      console.log('Modal closed, stopping visualization...');
      this.stopVisualization();
    }
  }

  ngOnDestroy(): void {
    this.stopVisualization();
  }

  private initializeCanvas(): void {
    if (!this.canvasRef?.nativeElement) {
      console.warn('Canvas not available');
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    
    if (!this.ctx) {
      console.error('Failed to get canvas context');
      return;
    }

    // Set canvas properties for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    this.ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    console.log('Canvas initialized:', canvas.width, 'x', canvas.height);
    this.demoState.initialized = true;
  }

  nextPage(): void {
    console.log('Next page clicked. Current index:', this.currentPageIndex);
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
      console.log('Moving to page:', this.currentPageIndex + 1);
      this.resetDemoState();
      this.updateVisualization();
    }
  }

  previousPage(): void {
    console.log('Previous page clicked. Current index:', this.currentPageIndex);
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      console.log('Moving to page:', this.currentPageIndex + 1);
      this.resetDemoState();
      this.updateVisualization();
    }
  }

  close(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    this.close();
  }

  private resetDemoState(): void {
    this.demoState.time = 0;
    this.demoState.phase = TrafficPhase.NS_GREEN;
    this.demoState.queues = [2, 1.5, 2.5, 1.8];
  }

  private startVisualization(): void {
    if (!this.ctx || !this.demoState.initialized) {
      console.warn('Cannot start visualization - canvas not ready');
      return;
    }
    
    console.log('Starting visualization for page:', this.currentPageIndex + 1);
    this.stopVisualization(); // Stop any existing animation
    this.resetDemoState();
    this.animateDemo();
  }

  private stopVisualization(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  private animateDemo(): void {
    if (!this.ctx || !this.demoState.initialized) return;
    
    this.demoState.time += 0.05;
    
    // Update demonstration based on current page
    switch (this.currentPage.visualization) {
      case 'rl-demo':
        this.animateRLDemo();
        break;
      case 'baseline-demo':
        this.animateBaselineDemo();
        break;
      case 'comparison':
        this.animateComparisonDemo();
        break;
      default:
        this.animateOverview();
    }

    this.drawVisualization();
    this.animationId = requestAnimationFrame(() => this.animateDemo());
  }

  private animateOverview(): void {
    const baseQueues = [2, 1.5, 2.5, 1.8];
    this.demoState.queues = baseQueues.map((base, i) => 
      Math.max(0.5, base + Math.sin(this.demoState.time * 0.5 + i) * 0.8)
    ) as [number, number, number, number];
    
    this.demoState.phase = Math.floor(this.demoState.time / 4) % 2 === 0 
      ? TrafficPhase.NS_GREEN 
      : TrafficPhase.EW_GREEN;
  }

  private animateRLDemo(): void {
    // Simulate intelligent behavior - adapt to traffic
    const time = this.demoState.time;
    
    // Create dynamic queue patterns
    this.demoState.queues[0] = Math.max(0.5, 3 + Math.sin(time * 0.3) * 1.5);
    this.demoState.queues[1] = Math.max(0.5, 1.5 + Math.sin(time * 0.5) * 1);
    this.demoState.queues[2] = Math.max(0.5, 2 + Math.sin(time * 0.4) * 1.2);
    this.demoState.queues[3] = Math.max(0.5, 3.5 + Math.sin(time * 0.6) * 2);
    
    // Intelligent switching based on queue lengths
    const nsTotal = this.demoState.queues[0] + this.demoState.queues[2];
    const ewTotal = this.demoState.queues[1] + this.demoState.queues[3];
    
    // Switch every 3-5 seconds, but prefer direction with more traffic
    const shouldSwitch = Math.floor(time / 4) % 2;
    if (shouldSwitch === 0) {
      this.demoState.phase = ewTotal > nsTotal ? TrafficPhase.EW_GREEN : TrafficPhase.NS_GREEN;
    } else {
      this.demoState.phase = nsTotal > ewTotal ? TrafficPhase.NS_GREEN : TrafficPhase.EW_GREEN;
    }
  }

  private animateBaselineDemo(): void {
    // Fixed timing - exactly every 4 seconds regardless of traffic
    this.demoState.phase = Math.floor(this.demoState.time / 4) % 2 === 0 
      ? TrafficPhase.NS_GREEN 
      : TrafficPhase.EW_GREEN;
    
    // Show queues building up during wrong phase
    const cycleTime = this.demoState.time % 8;
    const halfCycle = cycleTime % 4;
    
    if (this.demoState.phase === TrafficPhase.NS_GREEN) {
      // NS flowing, EW building up
      this.demoState.queues[0] = Math.max(0.5, 1 + Math.sin(halfCycle) * 0.5);
      this.demoState.queues[2] = Math.max(0.5, 1 + Math.sin(halfCycle) * 0.5);
      this.demoState.queues[1] = Math.min(6, 1 + halfCycle * 0.8);
      this.demoState.queues[3] = Math.min(5, 1 + halfCycle * 0.7);
    } else {
      // EW flowing, NS building up
      this.demoState.queues[1] = Math.max(0.5, 1 + Math.sin(halfCycle) * 0.5);
      this.demoState.queues[3] = Math.max(0.5, 1 + Math.sin(halfCycle) * 0.5);
      this.demoState.queues[0] = Math.min(6, 1 + halfCycle * 0.8);
      this.demoState.queues[2] = Math.min(5, 1 + halfCycle * 0.7);
    }
  }

  private animateComparisonDemo(): void {
    // Show side-by-side comparison effect
    const cycleTime = this.demoState.time % 10;
    
    if (cycleTime < 5) {
      this.demoState.phase = TrafficPhase.NS_GREEN;
      this.demoState.queues = [1.5, 3.5, 1.2, 4.0];
    } else {
      this.demoState.phase = TrafficPhase.EW_GREEN;
      this.demoState.queues = [3.0, 1.5, 2.8, 1.0];
    }
  }

  private updateVisualization(): void {
    this.resetDemoState();
    if (this.ctx && this.demoState.initialized) {
      this.drawVisualization();
    }
  }

  private drawVisualization(): void {
    if (!this.ctx) return;

    const width = 300; // Use logical pixels
    const height = 300;
    
    // Clear canvas
    this.ctx.fillStyle = '#f8fafc';
    this.ctx.fillRect(0, 0, width, height);
    
    // Draw intersection
    this.drawDemoIntersection(width, height);
    
    // Add page-specific overlays
    this.drawPageSpecificOverlay(width, height);
  }

  private drawDemoIntersection(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const roadWidth = 80;
    
    // Draw roads
    this.ctx.fillStyle = '#6b7280';
    this.ctx.fillRect(0, centerY - roadWidth / 2, width, roadWidth);
    this.ctx.fillRect(centerX - roadWidth / 2, 0, roadWidth, height);
    
    // Draw lane markings
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([15, 10]);
    
    this.ctx.beginPath();
    this.ctx.moveTo(0, centerY);
    this.ctx.lineTo(width, centerY);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, 0);
    this.ctx.lineTo(centerX, height);
    this.ctx.stroke();
    
    this.ctx.setLineDash([]);
    
    // Draw traffic lights
    this.drawDemoTrafficLights(width, height);
    
    // Draw vehicle queues
    this.drawDemoVehicleQueues(width, height);
    
    // Draw intersection center
    this.ctx.fillStyle = '#e5e7eb';
    this.ctx.fillRect(centerX - 30, centerY - 30, 60, 60);
    this.ctx.strokeStyle = '#9ca3af';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(centerX - 30, centerY - 30, 60, 60);
  }

  private drawDemoTrafficLights(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const lightSize = 16;
    const offset = 65;
    
    const lights = [
      { x: centerX, y: centerY - offset, direction: 'north' },
      { x: centerX + offset, y: centerY, direction: 'east' },
      { x: centerX, y: centerY + offset, direction: 'south' },
      { x: centerX - offset, y: centerY, direction: 'west' }
    ];
    
    lights.forEach(light => {
      const isGreen = this.isDirectionGreen(light.direction);
      
      // Light housing
      this.ctx!.fillStyle = '#374151';
      this.ctx!.fillRect(light.x - lightSize / 2, light.y - lightSize / 2, lightSize, lightSize);
      
      // Light color
      this.ctx!.fillStyle = isGreen ? '#10b981' : '#ef4444';
      this.ctx!.beginPath();
      this.ctx!.arc(light.x, light.y, lightSize / 3, 0, 2 * Math.PI);
      this.ctx!.fill();
      
      // Light glow effect
      if (isGreen) {
        this.ctx!.fillStyle = 'rgba(16, 185, 129, 0.3)';
        this.ctx!.beginPath();
        this.ctx!.arc(light.x, light.y, lightSize / 2, 0, 2 * Math.PI);
        this.ctx!.fill();
      }
    });
  }

  private drawDemoVehicleQueues(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const vehicleSize = 6;
    const spacing = 8;
    
    const directions = [
      { queue: this.demoState.queues[0], startX: centerX - 12, startY: centerY - 80, dx: 0, dy: -spacing, color: '#ef4444' },
      { queue: this.demoState.queues[1], startX: centerX + 80, startY: centerY - 12, dx: spacing, dy: 0, color: '#3b82f6' },
      { queue: this.demoState.queues[2], startX: centerX + 12, startY: centerY + 80, dx: 0, dy: spacing, color: '#10b981' },
      { queue: this.demoState.queues[3], startX: centerX - 80, startY: centerY + 12, dx: -spacing, dy: 0, color: '#f59e0b' }
    ];
    
    directions.forEach(dir => {
      const queueLength = Math.min(Math.floor(dir.queue), 10);
      for (let i = 0; i < queueLength; i++) {
        const x = dir.startX + dir.dx * i;
        const y = dir.startY + dir.dy * i;
        
        // Vehicle body
        this.ctx!.fillStyle = dir.color;
        this.ctx!.fillRect(x - vehicleSize / 2, y - vehicleSize / 2, vehicleSize, vehicleSize);
        
        // Vehicle outline
        this.ctx!.strokeStyle = '#1f2937';
        this.ctx!.lineWidth = 1;
        this.ctx!.strokeRect(x - vehicleSize / 2, y - vehicleSize / 2, vehicleSize, vehicleSize);
      }
      
      // Queue length text
      this.ctx!.fillStyle = '#374151';
      this.ctx!.font = '12px Arial';
      this.ctx!.textAlign = 'center';
      this.ctx!.fillText(dir.queue.toFixed(1), dir.startX, dir.startY - 15);
    });
  }

  private drawPageSpecificOverlay(width: number, height: number): void {
    if (!this.ctx) return;

    switch (this.currentPage.visualization) {
      case 'rl-demo':
        this.drawRLOverlay(width, height);
        break;
      case 'baseline-demo':
        this.drawBaselineOverlay(width, height);
        break;
      case 'comparison':
        this.drawComparisonOverlay(width, height);
        break;
      case 'overview':
        this.drawOverviewOverlay(width, height);
        break;
    }
  }

  private drawOverviewOverlay(width: number, height: number): void {
    if (!this.ctx) return;
    
    this.ctx.fillStyle = '#3b82f6';
    this.ctx.font = 'bold 14px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('🚦 4-Way Intersection', width / 2, 25);
  }

  private drawRLOverlay(width: number, height: number): void {
    if (!this.ctx) return;
    
    // AI thinking indicator
    this.ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
    this.ctx.fillRect(5, 5, width - 10, 30);
    
    this.ctx.fillStyle = '#3b82f6';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('🧠 AI Learning & Adapting', width / 2, 22);
    
    // Show decision making
    this.ctx.font = '10px Arial';
    this.ctx.fillText(`Decision: ${this.demoState.phase === TrafficPhase.NS_GREEN ? 'NS Green' : 'EW Green'}`, width / 2, width - 10);
  }

  private drawBaselineOverlay(width: number, height: number): void {
    if (!this.ctx) return;
    
    // Timer visualization
    const cycleTime = this.demoState.time % 8;
    const progress = (cycleTime % 4) / 4;
    
    // Timer background
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(10, 10, width - 20, 25);
    
    // Timer bar
    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillRect(15, 15, (width - 30) * progress, 15);
    
    // Timer text
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('⏱️ Fixed 4s Timer', width / 2, 26);
  }

  private drawComparisonOverlay(width: number, height: number): void {
    if (!this.ctx) return;
    
    // Metrics overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    this.ctx.fillRect(10, height - 50, width - 20, 40);
    
    const totalQueue = this.demoState.queues.reduce((a, b) => a + b, 0);
    const rlScore = Math.floor(totalQueue * 0.7); // RL performs better
    const baselineScore = Math.floor(totalQueue);
    
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '10px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText(`🧠 RL Score: -${rlScore}`, 15, height - 35);
    this.ctx.fillText(`⏱️ Baseline: -${baselineScore}`, 15, height - 20);
    this.ctx.fillText(`Total Queue: ${totalQueue.toFixed(1)}`, 15, height - 5);
  }

  private isDirectionGreen(direction: string): boolean {
    switch (direction) {
      case 'north':
      case 'south':
        return this.demoState.phase === TrafficPhase.NS_GREEN;
      case 'east':
      case 'west':
        return this.demoState.phase === TrafficPhase.EW_GREEN;
      default:
        return false;
    }
  }

  getVisualizationLabel(): string {
    switch (this.currentPage.visualization) {
      case 'rl-demo':
        return 'RL Agent Demo';
      case 'baseline-demo':
        return 'Fixed-Timer Demo';
      case 'comparison':
        return 'Performance Comparison';
      default:
        return 'Traffic Overview';
    }
  }
}