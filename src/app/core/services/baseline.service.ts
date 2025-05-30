import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { 
  TrafficState, 
  TrafficPhase, 
  SimulationConfig, 
  SimulationMetrics 
} from '../models/traffic-state';

@Injectable({
  providedIn: 'root'
})
export class BaselineService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();
  
  // Configuration with proper defaults
  private config: SimulationConfig = {
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
  
  // State observables - initialized in constructor
  private readonly currentState$: BehaviorSubject<TrafficState>;
  private readonly initialState: TrafficState;
  metrics$!: BehaviorSubject<SimulationMetrics>;
  isRunning$!: BehaviorSubject<boolean>;
  
  private currentEpisode = 0;
  private stepCount = 0;
  private phaseTimer = 0;
  private totalWaitTime = 0;
  private vehicleCount = 0;

  constructor() {
    // Initialize with proper defaults first
    this.initialState = {
      queueLengths: [0, 0, 0, 0],
      currentPhase: TrafficPhase.NS_GREEN,
      phaseTimeRemaining: this.config.minPhaseDuration,
      totalTime: 0
    };
    
    this.currentState$ = new BehaviorSubject<TrafficState>(this.initialState);
    this.metrics$ = new BehaviorSubject<SimulationMetrics>({
      totalReward: 0,
      avgQueueLength: 0,
      totalVehicles: 0,
      avgWaitTime: 0,
      episode: 0
    });
    this.isRunning$ = new BehaviorSubject<boolean>(false);
  }

  // Public observables
  get state$(): Observable<TrafficState> {
    return this.currentState$.asObservable();
  }

  /**
   * Start the baseline simulation
   */
  startSimulation(): void {
    if (this.isRunning$.value) return;
    
    this.isRunning$.next(true);
    this.runSimulationLoop();
  }

  /**
   * Stop the baseline simulation
   */
  stopSimulation(): void {
    this.isRunning$.next(false);
    this.destroy$.next();
  }

  /**
   * Main simulation loop for baseline controller
   */
  private runSimulationLoop(): void {
    interval(this.config.timestepDuration * 1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (!this.isRunning$.value) return;
        
        this.simulationStep();
      });
  }

  /**
   * Execute one simulation timestep with fixed-timer logic
   */
  private simulationStep(): void {
    const currentState = this.currentState$.value;
    
    // Get action from fixed-timer baseline controller
    const action = this.getBaselineAction(currentState);
    
    // Execute action and get next state
    const nextState = this.executeAction(currentState, action);
    
    // Calculate reward (negative sum of queue lengths)
    const reward = -nextState.queueLengths.reduce((sum, q) => sum + q, 0);
    
    // Update state and metrics
    this.currentState$.next(nextState);
    this.updateMetrics(reward);
    
    this.stepCount++;
    this.phaseTimer++;
    
    // Check if episode is complete
    if (this.stepCount >= this.config.episodeLength) {
      this.endEpisode();
    }
  }

  /**
   * Fixed-timer baseline controller logic
   * Alternates between NS_GREEN and EW_GREEN every 30 seconds
   */
  private getBaselineAction(state: TrafficState): number {
    const cycleLength = this.config.minPhaseDuration * 2; // 60 seconds total cycle
    const timeInCycle = this.phaseTimer % cycleLength;
    
    if (timeInCycle < this.config.minPhaseDuration) {
      return TrafficPhase.NS_GREEN; // First 30 seconds: North-South green
    } else {
      return TrafficPhase.EW_GREEN; // Next 30 seconds: East-West green
    }
  }

  /**
   * Execute action and return next state
   */
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
      nextState.queueLengths[i] += arrivals;
    }

    // Process vehicles based on current phase
    this.processTrafficFlow(nextState);

    return nextState;
  }

  /**
   * Process vehicle flow based on current traffic phase
   */
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

  /**
   * Generate Poisson random number
   */
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

  /**
   * End current episode and start new one
   */
  private endEpisode(): void {
    this.currentEpisode++;
    this.stepCount = 0;
    this.phaseTimer = 0;
    this.currentState$.next(this.getInitialState());
  }

  /**
   * Update simulation metrics
   */
  private updateMetrics(reward: number): void {
    const currentMetrics = this.metrics$.value;
    const state = this.currentState$.value;
    const currentQueueSum = state.queueLengths.reduce((sum, q) => sum + q, 0);
    
    // Simple wait time calculation: assume each vehicle in queue waits the timestep duration
    this.totalWaitTime += currentQueueSum * this.config.timestepDuration;
    this.vehicleCount += currentQueueSum;
    
    const updatedMetrics: SimulationMetrics = {
      totalReward: currentMetrics.totalReward + reward,
      avgQueueLength: currentQueueSum / 4,
      totalVehicles: currentMetrics.totalVehicles + 1,
      avgWaitTime: this.vehicleCount > 0 ? this.totalWaitTime / this.vehicleCount : 0,
      episode: this.currentEpisode
    };
    
    this.metrics$.next(updatedMetrics);
  }

  /**
   * Get initial traffic state
   */
  private getInitialState(): TrafficState {
    return {
      queueLengths: [0, 0, 0, 0],
      currentPhase: TrafficPhase.NS_GREEN,
      phaseTimeRemaining: this.config.minPhaseDuration,
      totalTime: 0
    };
  }

  /**
   * Get initial metrics
   */
  private getInitialMetrics(): SimulationMetrics {
    return {
      totalReward: 0,
      avgQueueLength: 0,
      totalVehicles: 0,
      avgWaitTime: 0,
      episode: 0
    };
  }

  /**
   * Update simulation configuration
   */
  updateConfig(newConfig: Partial<SimulationConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Reset simulation state
   */
  reset(): void {
    this.currentEpisode = 0;
    this.stepCount = 0;
    this.phaseTimer = 0;
    this.currentState$.next(this.getInitialState());
    this.metrics$.next(this.getInitialMetrics());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}