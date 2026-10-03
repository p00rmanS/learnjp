import { create } from 'zustand';
import { db } from '@/db';
import type { Card, ReviewLog } from '@/types';

interface DueCardsStats {
  total: number;
  new: number;
  learning: number;
  review: number;
  estimatedMinutes: number;
}

interface FSRSStore {
  dueCards: Card[];
  stats: DueCardsStats;
  currentCardIndex: number;
  isLoading: boolean;

  loadDueCards: (userId: string) => Promise<void>;
  recordReview: (cardId: string, rating: 1 | 2 | 3 | 4, elapsedMs: number) => Promise<void>;
  nextCard: () => void;
  previousCard: () => void;
}

export const useFSRSStore = create<FSRSStore>((set, get) => ({
  dueCards: [],
  stats: { total: 0, new: 0, learning: 0, review: 0, estimatedMinutes: 0 },
  currentCardIndex: 0,
  isLoading: false,

  loadDueCards: async (userId: string) => {
    set({ isLoading: true });
    try {
      const now = new Date();
      const cards = await db.cards
        .where('userId')
        .equals(userId)
        .filter((card) => card.fsrsState.due <= now)
        .toArray();

      const stats = {
        total: cards.length,
        new: cards.filter((c) => c.fsrsState.state === 'new').length,
        learning: cards.filter((c) => c.fsrsState.state === 'learning').length,
        review: cards.filter((c) => c.fsrsState.state === 'review').length,
        estimatedMinutes: Math.ceil(cards.length * 0.5),
      };

      set({ dueCards: cards, stats, currentCardIndex: 0, isLoading: false });
    } catch (error) {
      console.error('Failed to load due cards:', error);
      set({ isLoading: false });
    }
  },

  recordReview: async (cardId: string, rating: 1 | 2 | 3 | 4, elapsedMs: number) => {
    try {
      const reviewLog: ReviewLog = {
        id: 'review_' + Date.now(),
        cardId,
        rating,
        reviewedAt: new Date(),
        elapsedMillis: elapsedMs,
      };

      await db.reviewLogs.add(reviewLog);

      // TODO: Apply FSRS algorithm to update card due date and state
      // This will be integrated with ts-fsrs package

      const { dueCards, currentCardIndex } = get();
      const updated = dueCards.filter((c) => c.id !== cardId);
      set({
        dueCards: updated,
        currentCardIndex: Math.min(currentCardIndex, updated.length - 1),
      });
    } catch (error) {
      console.error('Failed to record review:', error);
    }
  },

  nextCard: () => {
    const { dueCards, currentCardIndex } = get();
    if (currentCardIndex < dueCards.length - 1) {
      set({ currentCardIndex: currentCardIndex + 1 });
    }
  },

  previousCard: () => {
    const { currentCardIndex } = get();
    if (currentCardIndex > 0) {
      set({ currentCardIndex: currentCardIndex - 1 });
    }
  },
}));
