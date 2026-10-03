import { FSRS, Rating, Card as FSRSCard } from 'ts-fsrs';
import type { FSRSState } from '@/types';

const fsrs = new FSRS();

// Map user ratings (1-4) to FSRS Rating enum
function mapRatingToFSRS(rating: 1 | 2 | 3 | 4): Rating {
  const ratingMap: Record<number, Rating> = {
    1: Rating.Again, // forgot, need to review again
    2: Rating.Hard, // struggled, but correct
    3: Rating.Good, // correct and steady
    4: Rating.Easy, // knew immediately
  };
  return ratingMap[rating];
}

// Create an initial card for an item (before any reviews)
export function initializeCard(): FSRSState {
  const card = fsrs.createEmptyCard();
  return {
    stability: card.stability,
    difficulty: card.difficulty,
    due: card.due,
    reps: card.reps,
    lapses: card.lapses,
    state: 'new',
  };
}

// Schedule a card based on a review rating
// This applies the FSRS algorithm to determine the next due date
export function scheduleCard(
  currentState: FSRSState,
  rating: 1 | 2 | 3 | 4,
  reviewDate: Date = new Date()
): FSRSState {
  // Convert our state to FSRS Card format
  const fsrsCard = new FSRSCard({
    due: currentState.due,
    stability: currentState.stability,
    difficulty: currentState.difficulty,
    elapsed_days: Math.floor(
      (reviewDate.getTime() - currentState.due.getTime()) / (1000 * 60 * 60 * 24)
    ),
    scheduled_days: 0,
    reps: currentState.reps,
    lapses: currentState.lapses,
    state: mapCardState(currentState.state),
    last_review: reviewDate,
  });

  // Get FSRS rating
  const fsrsRating = mapRatingToFSRS(rating);

  // Schedule the card
  const schedulingInfo = fsrs.next(fsrsCard, reviewDate, fsrsRating);

  // Return updated state
  return {
    stability: schedulingInfo.card.stability,
    difficulty: schedulingInfo.card.difficulty,
    due: schedulingInfo.card.due,
    reps: schedulingInfo.card.reps,
    lapses: schedulingInfo.card.lapses,
    state: mapCardStateToString(schedulingInfo.card.state),
  };
}

// Helper: convert state string to FSRS CardState enum
function mapCardState(state: string): number {
  const stateMap: Record<string, number> = {
    new: 0,
    learning: 1,
    review: 2,
    relearning: 3,
  };
  return stateMap[state] || 0;
}

// Helper: convert FSRS CardState number back to string
function mapCardStateToString(state: number): 'new' | 'learning' | 'review' | 'relearning' {
  const stateMap: Record<number, 'new' | 'learning' | 'review' | 'relearning'> = {
    0: 'new',
    1: 'learning',
    2: 'review',
    3: 'relearning',
  };
  return stateMap[state] || 'new';
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
