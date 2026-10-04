import type { FSRSState } from '@/types';

// Simple FSRS-like algorithm for spacing reviews
// Based on research by Michael Nielsen and others
// Will be replaced with ts-fsrs in future phases

const INITIAL_STABILITY = 0.5;
const INITIAL_DIFFICULTY = 5;
const FACTOR_EASY = 1.3;
const FACTOR_GOOD = 1.0;
const FACTOR_HARD = 0.6;
const FACTOR_AGAIN = 0.1;

// Create an initial card for an item (before any reviews)
export function initializeCard(): FSRSState {
  return {
    stability: INITIAL_STABILITY,
    difficulty: INITIAL_DIFFICULTY,
    due: new Date(),
    reps: 0,
    lapses: 0,
    state: 'new',
  };
}

// Simple SRS scheduling based on spacedrepetition research
// Ratings: 1=Again (0%), 2=Hard (20%), 3=Good (80%), 4=Easy (100%)
export function scheduleCard(
  currentState: FSRSState,
  rating: 1 | 2 | 3 | 4,
  reviewDate: Date = new Date()
): FSRSState {
  let { stability, difficulty, reps, lapses } = currentState;
  const factor =
    rating === 4 ? FACTOR_EASY : rating === 3 ? FACTOR_GOOD : rating === 2 ? FACTOR_HARD : FACTOR_AGAIN;

  // Update stability and difficulty
  stability = Math.max(0.1, stability * factor);
  difficulty = Math.max(1, difficulty + (8 - 9 * factor));

  // Update review counts
  reps += 1;
  if (rating < 3) {
    lapses += 1;
  }

  // Calculate next due date based on intervals
  const intervals = [1, 3, 7, 14, 30, 60, 120]; // days
  const intervalIndex = Math.min(Math.floor(Math.log2(stability * 10)), intervals.length - 1);
  const days = intervals[Math.max(0, intervalIndex)];

  // Schedule next review
  const nextDue = new Date(reviewDate);
  nextDue.setDate(nextDue.getDate() + days);

  // Determine new state
  let state: 'new' | 'learning' | 'review' | 'relearning' = 'review';
  if (reps === 1) state = 'learning';
  if (rating < 3 && reps > 1) state = 'relearning';

  return {
    stability,
    difficulty,
    due: nextDue,
    reps,
    lapses,
    state,
  };
}

// Get recommended retention rate (typically 85-90% for FSRS)
export function getRecommendedRetention(): number {
  return 0.9; // 90% target retention
}

// Calculate estimated next review date
export function getEstimatedNextReviewDate(state: FSRSState): string {
  const daysUntilDue = Math.ceil((state.due.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  if (daysUntilDue <= 0) return 'Today';
  if (daysUntilDue === 1) return 'Tomorrow';
  return `In ${daysUntilDue} days`;
}
