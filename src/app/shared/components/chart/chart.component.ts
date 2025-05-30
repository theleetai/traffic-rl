import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Chart,
  ChartConfiguration,
  ChartType,
  registerables
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

// Register Chart.js components and zoom plugin
Chart.register(...registerables, zoomPlugin);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-container">
      <div class="chart-header mb-4" *ngIf="title">
        <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
        <p class="text-sm text-gray-600" *ngIf="subtitle">{{ subtitle }}</p>
      </div>
      
      <div class="chart-wrapper relative">
        <canvas #chartCanvas [style.height.px]="height"></canvas>
        
        <!-- Loading overlay -->
        <div 
          class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center"
          *ngIf="loading"
        >
          <div class="text-gray-500">Loading chart...</div>
        </div>
      </div>
      
      <!-- Chart controls -->
      <div class="chart-controls mt-4 flex justify-between items-center" *ngIf="showControls">
        <div class="flex space-x-2">
          <button 
            class="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
            (click)="exportData()"
          >
            Export CSV
          </button>
          <button 
            class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
            (click)="resetZoom()"
          >
            Reset Zoom
          </button>
        </div>
        
        <div class="text-xs text-gray-500">
          {{ dataPoints }} data points
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      @apply w-full;
    }
    .chart-wrapper {
      @apply w-full bg-white rounded-lg border border-gray-200 p-4;
    }
  `]
})
export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  @Input() title = '';
  @Input() subtitle = '';
  @Input() height = 400;
  @Input() chartType: ChartType = 'line';
  @Input() data: any[] = [];
  @Input() loading = false;
  @Input() showControls = true;
  @Input() responsive = true;
  @Input() maintainAspectRatio = false;
  
  private chart: Chart | null = null;
  
  get dataPoints(): number {
    if (!this.chart?.data.datasets) return 0;
    return this.chart.data.datasets.reduce((total, dataset) => 
      total + (dataset.data?.length || 0), 0
    );
  }

  ngOnInit(): void {
    this.initializeChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private initializeChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: this.chartType,
      data: {
        labels: [],
        datasets: []
      },
      options: {
        responsive: this.responsive,
        maintainAspectRatio: this.maintainAspectRatio,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
              padding: 20
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: 'white',
            bodyColor: 'white',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            display: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            title: {
              display: true,
              text: 'Episode'
            }
          },
          y: {
            display: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            title: {
              display: true,
              text: 'Cumulative Reward'
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        animation: {
          duration: 300
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }

  /**
   * Update chart with RL vs Baseline comparison data
   */
  updateComparisonData(rlMetrics: any[], baselineMetrics: any[]): void {
    if (!this.chart) return;

    const episodes = rlMetrics.map((_, index) => index + 1);
    
    this.chart.data.labels = episodes;
    this.chart.data.datasets = [
      {
        label: 'RL Agent (DQN)',
        data: rlMetrics.map(m => m.totalReward),
        borderColor: 'rgb(59, 130, 246)', // Blue
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 4,
        tension: 0.1
      },
      {
        label: 'Baseline (Fixed Timer)',
        data: baselineMetrics.map(m => m.totalReward),
        borderColor: 'rgb(239, 68, 68)', // Red
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 4,
        tension: 0.1
      }
    ];

    this.chart.update('none'); // Update without animation for performance
  }

  /**
   * Update chart with queue length data
   */
  updateQueueData(data: { timestamp: number; queueLengths: number[] }[]): void {
    if (!this.chart) return;

    const timestamps = data.map(d => d.timestamp);
    const directions = ['North', 'East', 'South', 'West'];
    const colors = ['rgb(239, 68, 68)', 'rgb(34, 197, 94)', 'rgb(59, 130, 246)', 'rgb(168, 85, 247)'];

    this.chart.data.labels = timestamps;
    this.chart.data.datasets = directions.map((direction, index) => ({
      label: `${direction} Queue`,
      data: data.map(d => d.queueLengths[index]),
      borderColor: colors[index],
      backgroundColor: colors[index].replace('rgb', 'rgba').replace(')', ', 0.1)'),
      borderWidth: 2,
      pointRadius: 1,
      pointHoverRadius: 3,
      tension: 0.1
    }));

    // Update axis labels
    if (this.chart.options.scales?.['x'] && 'title' in this.chart.options.scales['x']) {
      (this.chart.options.scales['x'] as any).title.text = 'Time (seconds)';
    }
    if (this.chart.options.scales?.['y'] && 'title' in this.chart.options.scales['y']) {
      (this.chart.options.scales['y'] as any).title.text = 'Queue Length (vehicles)';
    }

    this.chart.update('none');
  }

  /**
   * Update chart with real-time metrics
   */
  updateRealtimeMetrics(rlReward: number, baselineReward: number, episode: number): void {
    if (!this.chart) return;

    // Add new data point
    this.chart.data.labels?.push(episode);
    
    if (this.chart.data.datasets[0]) {
      this.chart.data.datasets[0].data.push(rlReward);
    }
    
    if (this.chart.data.datasets[1]) {
      this.chart.data.datasets[1].data.push(baselineReward);
    }

    // Keep only last 100 points for performance
    const maxPoints = 100;
    if (this.chart.data.labels && this.chart.data.labels.length > maxPoints) {
      this.chart.data.labels = this.chart.data.labels.slice(-maxPoints);
      this.chart.data.datasets.forEach(dataset => {
        if (dataset.data.length > maxPoints) {
          dataset.data = dataset.data.slice(-maxPoints);
        }
      });
    }

    this.chart.update('none');
  }

  /**
   * Export chart data as CSV
   */
  exportData(): void {
    if (!this.chart?.data) return;
    
    const headers = ['Episode', ...this.chart.data.datasets.map(d => d.label ?? 'Dataset')];
    const rows = [headers]; // Include headers as first row
    
    const maxLength = Math.max(...this.chart.data.datasets.map(d => (d.data as any[]).length));
    
    for (let i = 0; i < maxLength; i++) {
      rows.push([
        this.chart.data.labels?.[i] ?? i + 1,
        ...this.chart.data.datasets.map(d => (d.data as any[])[i] ?? '')
      ]);
    }
    
    const csvContent = rows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `traffic-simulation-data-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    
    window.URL.revokeObjectURL(url);
  }

  /**
   * Reset chart zoom
   */
  resetZoom(): void {
    if (this.chart) {
      this.chart.resetZoom();
    }
  }

  /**
   * Clear chart data
   */
  clearData(): void {
    if (!this.chart) return;

    this.chart.data.labels = [];
    this.chart.data.datasets.forEach(dataset => {
      dataset.data = [];
    });
    this.chart.update();
  }
}