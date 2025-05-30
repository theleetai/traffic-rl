import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TrafficSimulationService } from '../../core/services/traffic-sim.service';
import { BaselineService } from '../../core/services/baseline.service';
import { TrafficState, SimulationMetrics } from '../../core/models/traffic-state';
import { ChartComponent } from '../../shared/components/chart/chart.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartComponent, ButtonComponent],
  template: `
    <div class="dashboard-container p-6 max-w-7xl mx-auto">
      <div class="header mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Performance Dashboard</h1>
        <p class="text-lg text-gray-600">Real-time comparison of RL Agent vs Fixed-Timer Baseline</p>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="stats-card bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">RL Performance</p>
              <p class="text-2xl font-semibold text-gray-900">
                {{ rlMetrics.totalReward | number:'1.0-0' }}
              </p>
              <p class="text-xs text-blue-600">Total Reward</p>
            </div>
          </div>
        </div>

        <div class="stats-card bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Baseline Performance</p>
              <p class="text-2xl font-semibold text-gray-900">
                {{ baselineMetrics.totalReward | number:'1.0-0' }}
              </p>
              <p class="text-xs text-red-600">Total Reward</p>
            </div>
          </div>
        </div>

        <div class="stats-card bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Improvement</p>
              <p class="text-2xl font-semibold" [class]="getImprovementColor()">
                {{ improvementPercentage | number:'1.1-1' }}%
              </p>
              <p class="text-xs text-gray-500">RL vs Baseline</p>
            </div>
          </div>
        </div>

        <div class="stats-card bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Episodes</p>
              <p class="text-2xl font-semibold text-gray-900">{{ totalEpisodes }}</p>
              <p class="text-xs text-purple-600">Training Progress</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Cumulative Reward Comparison -->
        <div class="chart-container">
          <app-chart
            #rewardChart
            title="Cumulative Reward Comparison"
            subtitle="RL Agent vs Fixed-Timer Baseline over time"
            [height]="400"
            chartType="line"
            [loading]="isLoading"
          ></app-chart>
        </div>

        <!-- Queue Length Analysis -->
        <div class="chart-container">
          <app-chart
            #queueChart
            title="Average Queue Length"
            subtitle="Real-time queue analysis by direction"
            [height]="400"
            chartType="line"
            [loading]="isLoading"
          ></app-chart>
        </div>
      </div>

      <!-- Detailed Metrics -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Performance Metrics Table -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Detailed Performance Metrics</h3>
          
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Metric
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RL Agent
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Baseline
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difference
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total Reward
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    {{ rlMetrics.totalReward | number:'1.2-2' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    {{ baselineMetrics.totalReward | number:'1.2-2' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm" [class]="getMetricDifferenceColor('reward')">
                    {{ getRewardDifference() | number:'1.2-2' }}
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Avg Queue Length
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    {{ rlMetrics.avgQueueLength | number:'1.2-2' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    {{ baselineMetrics.avgQueueLength | number:'1.2-2' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm" [class]="getMetricDifferenceColor('queue')">
                    {{ getQueueDifference() | number:'1.2-2' }}
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total Vehicles
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    {{ rlMetrics.totalVehicles | number:'1.0-0' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    {{ baselineMetrics.totalVehicles | number:'1.0-0' }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm" [class]="getMetricDifferenceColor('vehicles')">
                    {{ getVehicleDifference() | number:'1.0-0' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Training Status -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Training Status</h3>
          
          <div class="space-y-4">
            <div class="training-status-item">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">RL Training</span>
                <span class="font-medium" [class]="rlRunning ? 'text-green-600' : 'text-gray-400'">
                  {{ rlRunning ? 'Running' : 'Stopped' }}
                </span>
              </div>
              <div class="mt-1 relative">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="h-2 rounded-full transition-all duration-300"
                    [class]="rlRunning ? 'bg-green-400' : 'bg-gray-400'"
                    [style.width.%]="rlRunning ? 100 : 0"
                  ></div>
                </div>
              </div>
            </div>

            <div class="training-status-item">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Baseline Running</span>
                <span class="font-medium" [class]="baselineRunning ? 'text-blue-600' : 'text-gray-400'">
                  {{ baselineRunning ? 'Running' : 'Stopped' }}
                </span>
              </div>
              <div class="mt-1 relative">
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="h-2 rounded-full transition-all duration-300"
                    [class]="baselineRunning ? 'bg-blue-400' : 'bg-gray-400'"
                    [style.width.%]="baselineRunning ? 100 : 0"
                  ></div>
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-200">
              <div class="text-sm text-gray-600 mb-2">Current Episode Progress</div>
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Episode {{ currentEpisode }}</span>
                <span>{{ episodeProgress | number:'1.0-0' }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="bg-purple-400 h-2 rounded-full transition-all duration-300"
                  [style.width.%]="episodeProgress"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Controls -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Dashboard Controls</h3>
        
        <div class="flex flex-wrap gap-4">
          <app-button 
            variant="primary"
            (click)="refreshData()"
            [disabled]="isLoading"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path>
            </svg>
            Refresh Data
          </app-button>
          
          <app-button 
            variant="secondary"
            (click)="exportData()"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            Export CSV
          </app-button>
          
          <app-button 
            variant="secondary"
            (click)="clearCharts()"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clip-rule="evenodd"></path>
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 012 0v4a1 1 0 11-2 0V7zM12 7a1 1 0 012 0v4a1 1 0 11-2 0V7z" clip-rule="evenodd"></path>
            </svg>
            Clear Charts
          </app-button>
          
          <app-button 
            variant="success"
            (click)="downloadReport()"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
            </svg>
            Download Report
          </app-button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stats-card {
      @apply transition-transform hover:scale-105;
    }
    
    .chart-container {
      @apply bg-white rounded-lg shadow-md p-2;
    }
    
    .training-status-item {
      @apply p-3 bg-gray-50 rounded-lg;
    }
  `]
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('rewardChartRef', { static: false }) rewardChart?: ChartComponent;
  @ViewChild('queueChartRef', { static: false }) queueChart?: ChartComponent;
  
  private readonly destroy$ = new Subject<void>();
  
  // State
  isLoading = false;
  rlRunning = false;
  baselineRunning = false;
  currentEpisode = 0;
  
  // Metrics
  rlMetrics: SimulationMetrics = {
    totalReward: 0,
    avgQueueLength: 0,
    totalVehicles: 0,
    avgWaitTime: 0,
    episode: 0
  };
  
  baselineMetrics: SimulationMetrics = {
    totalReward: 0,
    avgQueueLength: 0,
    totalVehicles: 0,
    avgWaitTime: 0,
    episode: 0
  };
  
  // Historical data for charts
  private rlHistory: SimulationMetrics[] = [];
  private baselineHistory: SimulationMetrics[] = [];
  private queueHistory: { timestamp: number; queueLengths: number[] }[] = [];

  get totalEpisodes(): number {
    return Math.max(this.rlMetrics.episode, this.baselineMetrics.episode);
  }

  get improvementPercentage(): number {
    if (this.baselineMetrics.totalReward === 0) return 0;
    return ((this.rlMetrics.totalReward - this.baselineMetrics.totalReward) / Math.abs(this.baselineMetrics.totalReward)) * 100;
  }

  get episodeProgress(): number {
    // Assuming 1000 steps per episode (this should come from config)
    return (this.currentEpisode % 1000) / 10;
  }

  constructor(
    private readonly rlService: TrafficSimulationService,
    private readonly baselineService: BaselineService
  ) {}

  ngOnInit(): void {
    this.setupSubscriptions();
    this.startDataCollection();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupSubscriptions(): void {
    // RL Service subscriptions
    this.rlService.metrics$.pipe(takeUntil(this.destroy$)).subscribe((metrics: SimulationMetrics) => {
      this.rlMetrics = metrics;
      this.rlHistory.push({ ...metrics });
      this.updateCharts();
    });

    this.rlService.isRunning$.pipe(takeUntil(this.destroy$)).subscribe(running => {
      this.rlRunning = running;
    });

    this.rlService.state$.pipe(takeUntil(this.destroy$)).subscribe((state: TrafficState) => {
      this.queueHistory.push({
        timestamp: state.totalTime,
        queueLengths: [...state.queueLengths]
      });
      
      // Keep only last 100 queue data points for performance
      if (this.queueHistory.length > 100) {
        this.queueHistory = this.queueHistory.slice(-100);
      }
      
      this.updateQueueChart();
    });

    // Baseline Service subscriptions
    this.baselineService.metrics$.pipe(takeUntil(this.destroy$)).subscribe((metrics: SimulationMetrics) => {
      this.baselineMetrics = metrics;
      this.baselineHistory.push({ ...metrics });
      this.updateCharts();
    });

    this.baselineService.isRunning$.pipe(takeUntil(this.destroy$)).subscribe(running => {
      this.baselineRunning = running;
    });
  }

  private startDataCollection(): void {
    // Initial data load
    this.refreshData();
  }

  private updateCharts(): void {
    if (this.rewardChart && this.rlHistory.length > 0 && this.baselineHistory.length > 0) {
      this.rewardChart.updateComparisonData(this.rlHistory, this.baselineHistory);
    }
  }

  private updateQueueChart(): void {
    if (this.queueChart && this.queueHistory.length > 0) {
      this.queueChart.updateQueueData(this.queueHistory);
    }
  }

  // Action handlers
  refreshData(): void {
    this.isLoading = true;
    
    // Simulate refresh delay
    setTimeout(() => {
      this.updateCharts();
      this.updateQueueChart();
      this.isLoading = false;
    }, 1000);
  }

  exportData(): void {
    if (this.rewardChart) {
      this.rewardChart.exportData();
    }
  }

  clearCharts(): void {
    this.rlHistory = [];
    this.baselineHistory = [];
    this.queueHistory = [];
    
    if (this.rewardChart) {
      this.rewardChart.clearData();
    }
    
    if (this.queueChart) {
      this.queueChart.clearData();
    }
  }

  downloadReport(): void {
    const reportData = {
      timestamp: new Date().toISOString(),
      rlMetrics: this.rlMetrics,
      baselineMetrics: this.baselineMetrics,
      improvementPercentage: this.improvementPercentage,
      totalEpisodes: this.totalEpisodes,
      rlHistory: this.rlHistory,
      baselineHistory: this.baselineHistory
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `traffic-simulation-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    window.URL.revokeObjectURL(url);
  }

  // Helper methods
  getImprovementColor(): string {
    const improvement = this.improvementPercentage;
    if (improvement > 0) return 'text-green-600';
    if (improvement < 0) return 'text-red-600';
    return 'text-gray-600';
  }

  getMetricDifferenceColor(metric: string): string {
    let difference = 0;
    
    switch (metric) {
      case 'reward':
        difference = this.getRewardDifference();
        break;
      case 'queue':
        difference = this.getQueueDifference();
        // For queue length, lower is better, so invert the logic
        return difference < 0 ? 'text-green-600' : 'text-red-600';
      case 'vehicles':
        difference = this.getVehicleDifference();
        break;
    }
    
    return difference > 0 ? 'text-green-600' : 'text-red-600';
  }

  getRewardDifference(): number {
    return this.rlMetrics.totalReward - this.baselineMetrics.totalReward;
  }

  getQueueDifference(): number {
    return this.rlMetrics.avgQueueLength - this.baselineMetrics.avgQueueLength;
  }

  getVehicleDifference(): number {
    return this.rlMetrics.totalVehicles - this.baselineMetrics.totalVehicles;
  }
}