import { create } from 'zustand';
import { db } from '@/db';
import { scheduleCard } from '@/services/fsrsService';
import { recordXp } from '@/services/progress';
import type { Card, ReviewLog } from '@/types';

export interface DueStats {
  total: number;
  estimatedMinutes: number;
}

interface FSRSStore {
  dueCards: Card[];
  stats: DueStats;
  sessionTotal: number;
  reviewedCount: number;
  isLoading: boolean;

  loadDueCards: (userId: string) => Promise<void>;
  recordReview: (cardId: string, rating: 1 | 2 | 3 | 4, elapsedMs: number) => Promise<void>;
}

export const useFSRSStore = create<FSRSStore>((set, get) => ({
  dueCards: [],
  stats: { total: 0, estimatedMinutes: 0 },
  sessionTotal: 0,
  reviewedCount: 0,
  isLoading: false,

  loadDueCards: async (userId) => {
    set({ isLoading: true });
    try {
      const now = new Date();
      const cards = await db.cards
        .where('userId')
        .equals(userId)
        .filter((card) => card.fsrsState.due <= now)
        .toArray();
      set({
        dueCards: cards,
        stats: { total: cards.length, estimatedMinutes: Math.max(1, Math.ceil(cards.length * 0.4)) },
        sessionTotal: cards.length,
        reviewedCount: 0,
        isLoading: false,
      });
    } catch (error) {
      console.error('Failed to load due cards:', error);
      set({ isLoading: false });
    }
  },

  recordReview: async (cardId, rating, elapsedMs) => {
    const card = get().dueCards.find((c) => c.id === cardId);
    if (!card) return;

    set((state) => ({
      dueCards: state.dueCards.filter((c) => c.id !== cardId),
      reviewedCount: state.reviewedCount + 1,
    }));

    try {
      const reviewedAt = new Date();
      const nextState = scheduleCard(card.fsrsState, rating, reviewedAt);
      const log: ReviewLog = {
        id: crypto.randomUUID(),
        cardId,
        rating,
        reviewedAt,
        elapsedMillis: elapsedMs,
      };
      await db.transaction('rw', db.cards, db.reviewLogs, async () => {
        await db.reviewLogs.add(log);
        await db.cards.update(cardId, { fsrsState: nextState, lastReviewedAt: reviewedAt });
      });
      await recordXp('review');
    } catch (error) {
      console.error('Failed to record review:', error);
    }
  },
}));
