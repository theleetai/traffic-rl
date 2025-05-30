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
    queues: [0, 0, 0, 0] as [number, number, number, number],
    time: 0
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
    // Don't start visualization immediately - wait for modal to open
  }

  ngAfterViewInit(): void {
    if (this.canvasRef?.nativeElement) {
      const canvas = this.canvasRef.nativeElement;
      this.ctx = canvas.getContext('2d');
      if (this.isOpen) {
        this.startVisualization();
      }
    }
  }

  ngOnChanges(changes: any): void {
    // Start visualization when modal opens
    if (changes.isOpen?.currentValue && !changes.isOpen?.previousValue) {
      console.log('Modal opened, starting visualization...');
      setTimeout(() => {
        if (this.canvasRef?.nativeElement) {
          const canvas = this.canvasRef.nativeElement;
          this.ctx = canvas.getContext('2d');
          console.log('Canvas context obtained:', this.ctx);
          this.startVisualization();
        }
      }, 50); // Give the DOM time to render
    }
    
    // Stop visualization when modal closes
    if (changes.isOpen && !changes.isOpen.currentValue && this.animationId) {
      console.log('Modal closed, stopping visualization...');
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  ngOnDestroy(): void {
    // Cleanup animation frame on destroy
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  nextPage(): void {
    console.log('Next page clicked. Current index:', this.currentPageIndex, 'Total pages:', this.pages.length);
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
      console.log('New page index:', this.currentPageIndex);
      this.updateVisualization();
    }
  }

  previousPage(): void {
    console.log('Previous page clicked. Current index:', this.currentPageIndex);
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      console.log('New page index:', this.currentPageIndex);
      this.updateVisualization();
    }
  }

  close(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    this.close();
  }

  private startVisualization(): void {
    console.log('Starting visualization with context:', this.ctx);
    if (!this.ctx) {
      console.error('No canvas context available');
      return;
    }
    
    this.demoState.time = 0;
    this.updateVisualization();
    
    // Force an immediate draw to show something right away
    this.drawVisualization();
    console.log('Initial draw completed');
    
    // Start the animation loop
    this.animateDemo();
  }

  private animateDemo(): void {
    if (!this.ctx) return;
    
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
    // Simple animation showing all directions with gentle queue changes
    const baseQueues = [2, 1.5, 2.5, 1.8];
    this.demoState.queues = baseQueues.map(base => 
      Math.max(0, base + Math.sin(this.demoState.time + Math.random()) * 0.5)
    ) as [number, number, number, number];
    
    // Alternate phases every 3 seconds
    this.demoState.phase = Math.floor(this.demoState.time / 3) % 2 === 0 
      ? TrafficPhase.NS_GREEN 
      : TrafficPhase.EW_GREEN;
  }

  private animateRLDemo(): void {
    // Simulate intelligent behavior - switch to direction with more traffic
    const nsTotal = this.demoState.queues[0] + this.demoState.queues[2];
    const ewTotal = this.demoState.queues[1] + this.demoState.queues[3];
    
    // Add some randomness to queues
    this.demoState.queues[0] = Math.max(0, 3 + Math.sin(this.demoState.time * 0.5) * 1.5);
    this.demoState.queues[1] = Math.max(0, 1 + Math.sin(this.demoState.time * 0.3) * 1);
    this.demoState.queues[2] = Math.max(0, 2 + Math.sin(this.demoState.time * 0.7) * 1);
    this.demoState.queues[3] = Math.max(0, 4 + Math.sin(this.demoState.time * 0.4) * 2);
    
    // Intelligent phase switching based on queue lengths
    this.demoState.phase = ewTotal > nsTotal ? TrafficPhase.EW_GREEN : TrafficPhase.NS_GREEN;
  }

  private animateBaselineDemo(): void {
    // Fixed 30-second cycles regardless of traffic
    this.demoState.phase = Math.floor(this.demoState.time / 3) % 2 === 0 
      ? TrafficPhase.NS_GREEN 
      : TrafficPhase.EW_GREEN;
    
    // Show how queues can build up during wrong phase
    const cycleTime = this.demoState.time % 6;
    if (cycleTime < 3) {
      // NS Green - EW queues build up
      this.demoState.queues[0] = 1;
      this.demoState.queues[2] = 1;
      this.demoState.queues[1] = Math.min(5, cycleTime * 1.5);
      this.demoState.queues[3] = Math.min(4, cycleTime * 1.2);
    } else {
      // EW Green - NS queues build up
      this.demoState.queues[1] = 1;
      this.demoState.queues[3] = 1;
      this.demoState.queues[0] = Math.min(5, (cycleTime - 3) * 1.5);
      this.demoState.queues[2] = Math.min(4, (cycleTime - 3) * 1.2);
    }
  }

  private animateComparisonDemo(): void {
    // Show both systems side by side with metrics
    const cycleTime = this.demoState.time % 8;
    
    if (cycleTime < 4) {
      this.demoState.phase = TrafficPhase.NS_GREEN;
      this.demoState.queues = [1, 3, 1, 2.5];
    } else {
      this.demoState.phase = TrafficPhase.EW_GREEN;
      this.demoState.queues = [2, 1, 1.5, 1];
    }
  }

  private updateVisualization(): void {
    this.demoState.time = 0; // Reset animation for new page
  }

  private drawVisualization(): void {
    if (!this.ctx) {
      console.log('Cannot draw - no context');
      return;
    }

    const canvas = this.canvasRef.nativeElement;
    const width = canvas.width;
    const height = canvas.height;
    
    console.log('Drawing on canvas:', width, 'x', height);
    
    // Clear canvas with a visible background first
    this.ctx.fillStyle = '#f8fafc';
    this.ctx.fillRect(0, 0, width, height);
    
    // Draw a test rectangle to verify canvas is working
    this.ctx.fillStyle = '#ff0000';
    this.ctx.fillRect(10, 10, 50, 50);
    
    // Draw intersection
    this.drawDemoIntersection(width, height);
    
    // Add page-specific overlays
    this.drawPageSpecificOverlay(width, height);
    
    console.log('Draw visualization completed');
  }

  private drawDemoIntersection(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const roadWidth = 60;
    
    // Draw roads
    this.ctx.fillStyle = '#6b7280';
    this.ctx.fillRect(0, centerY - roadWidth / 2, width, roadWidth);
    this.ctx.fillRect(centerX - roadWidth / 2, 0, roadWidth, height);
    
    // Draw center markings
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([10, 5]);
    
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
    this.ctx.fillStyle = '#f3f4f6';
    this.ctx.fillRect(centerX - 25, centerY - 25, 50, 50);
    this.ctx.strokeStyle = '#d1d5db';
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
  }

  private drawDemoTrafficLights(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const lightSize = 12;
    const offset = 50;
    
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

  private drawDemoVehicleQueues(width: number, height: number): void {
    if (!this.ctx) return;
    
    const centerX = width / 2;
    const centerY = height / 2;
    const vehicleSize = 4;
    const spacing = 6;
    
    const directions = [
      { queue: this.demoState.queues[0], startX: centerX - 8, startY: centerY - 60, dx: 0, dy: -spacing },
      { queue: this.demoState.queues[1], startX: centerX + 60, startY: centerY - 8, dx: spacing, dy: 0 },
      { queue: this.demoState.queues[2], startX: centerX + 8, startY: centerY + 60, dx: 0, dy: spacing },
      { queue: this.demoState.queues[3], startX: centerX - 60, startY: centerY + 8, dx: -spacing, dy: 0 }
    ];
    
    directions.forEach(dir => {
      for (let i = 0; i < Math.min(Math.floor(dir.queue), 8); i++) {
        const x = dir.startX + dir.dx * i;
        const y = dir.startY + dir.dy * i;
        
        this.ctx!.fillStyle = '#3b82f6';
        this.ctx!.fillRect(x - vehicleSize / 2, y - vehicleSize / 2, vehicleSize, vehicleSize);
      }
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
    }
  }

  private drawRLOverlay(width: number, height: number): void {
    if (!this.ctx) return;
    
    // Draw "AI thinking" indicator
    this.ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
    this.ctx.fillRect(0, 0, width, height);
    
    // Brain icon or AI indicator
    this.ctx.fillStyle = '#3b82f6';
    this.ctx.font = '12px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('🧠 AI Deciding', width / 2, 20);
  }

  private drawBaselineOverlay(width: number, height: number): void {
    if (!this.ctx) return;
    
    // Draw timer indicator
    const cycleTime = this.demoState.time % 6;
    const progress = (cycleTime % 3) / 3;
    
    // Timer bar
    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillRect(10, 10, 100 * progress, 8);
    this.ctx.strokeStyle = '#374151';
    this.ctx.strokeRect(10, 10, 100, 8);
    
    this.ctx.fillStyle = '#374151';
    this.ctx.font = '10px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Fixed Timer', 10, 30);
  }

  private drawComparisonOverlay(width: number, height: number): void {
    if (!this.ctx) return;
    
    // Draw comparison metrics
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(10, height - 60, width - 20, 50);
    
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '10px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('RL Reward: -' + Math.floor(this.demoState.queues.reduce((a, b) => a + b, 0) * 0.8), 15, height - 40);
    this.ctx.fillText('Baseline Reward: -' + Math.floor(this.demoState.queues.reduce((a, b) => a + b, 0)), 15, height - 25);
    this.ctx.fillText('Total Queue: ' + Math.floor(this.demoState.queues.reduce((a, b) => a + b, 0)), 15, height - 10);
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
        return 'Traffic Intersection';
    }
  }
}