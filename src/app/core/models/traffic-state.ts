/**
 * Traffic State Model for RL Traffic Master
 * Represents the state of the 4-way intersection
 */

export interface TrafficState {
  /** Queue lengths for each direction: [North, East, South, West] */
  queueLengths: [number, number, number, number];
  /** Current traffic light phase */
  currentPhase: TrafficPhase;
  /** Time remaining in current phase (seconds) */
  phaseTimeRemaining: number;
  /** Total simulation time elapsed */
  totalTime: number;
}

export enum TrafficPhase {
  NS_GREEN = 0,    // North-South green
  EW_GREEN = 1,    // East-West green
  ALL_RED = 2,     // All red (transition phase)
  PEDESTRIAN = 3   // Pedestrian crossing
}

export interface TrafficAction {
  phase: TrafficPhase;
  duration: number; // Duration in seconds
}

export interface SimulationConfig {
  /** Poisson arrival rate (vehicles per second) for each direction */
  arrivalRates: [number, number, number, number]; // [N, E, S, W]
  /** Episode length in timesteps */
  episodeLength: number;
  /** Timestep duration in seconds */
  timestepDuration: number;
  /** Minimum phase duration in seconds */
  minPhaseDuration: number;
  /** Maximum phase duration in seconds */
  maxPhaseDuration: number;
  /** Maximum queue length before overflow */
  maxQueueLength: number;
  /** Clearance time between phases in seconds */
  clearanceTime: number;
  /** Whether pedestrian phase is enabled */
  pedestrianPhaseEnabled: boolean;
  /** Duration of pedestrian phase in seconds */
  pedestrianPhaseDuration: number;
  /** Grid size for visualization */
  gridSize: number;
}

export interface ReplayBuffer {
  state: TrafficState;
  action: number;
  reward: number;
  nextState: TrafficState;
  done: boolean;
}

export interface DQNConfig {
  /** Learning rate */
  learningRate: number;
  /** Discount factor */
  gamma: number;
  /** Epsilon for epsilon-greedy exploration */
  epsilon: number;
  /** Epsilon decay rate */
  epsilonDecay: number;
  /** Minimum epsilon */
  epsilonMin: number;
  /** Batch size for training */
  batchSize: number;
  /** Memory/buffer size */
  memorySize: number;
  /** Target network update frequency */
  targetUpdateFreq: number;
}

export interface SimulationMetrics {
  /** Total reward accumulated */
  totalReward: number;
  /** Average queue length */
  avgQueueLength: number;
  /** Total vehicles processed */
  totalVehicles: number;
  /** Average wait time */
  avgWaitTime: number;
  /** Episode number */
  episode: number;
}