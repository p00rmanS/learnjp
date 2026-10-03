import { useEffect, useState, useRef } from 'react';
import { useFSRSStore } from '@/stores/fsrsStore';
import { useUserStore } from '@/stores/userStore';
import { db } from '@/db';
import type { Item } from '@/types';

export function useReviewSession() {
  const fsrsStore = useFSRSStore();
  const { user } = useUserStore();
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    if (user && fsrsStore.dueCards.length === 0) {
      fsrsStore.loadDueCards(user.id);
    }
  }, [user, fsrsStore]);

  useEffect(() => {
    loadCurrentItem();
  }, [fsrsStore.currentCardIndex]);

  async function loadCurrentItem() {
    const card = fsrsStore.dueCards[fsrsStore.currentCardIndex];
    if (!card) {
      setCurrentItem(null);
      return;
    }

    try {
      const item = await db.items.get(card.itemId);
      setCurrentItem(item || null);
    } catch (error) {
      console.error('Failed to load item:', error);
      setCurrentItem(null);
    }
  }

  function handleReview(rating: 1 | 2 | 3 | 4) {
    const card = fsrsStore.dueCards[fsrsStore.currentCardIndex];
    if (!card) return;

    const elapsed = Date.now() - startTimeRef.current;
    fsrsStore.recordReview(card.id, rating, elapsed);

    if (fsrsStore.currentCardIndex < fsrsStore.dueCards.length - 1) {
      fsrsStore.nextCard();
      startTimeRef.current = Date.now();
    }
  }

  const currentCard = fsrsStore.dueCards[fsrsStore.currentCardIndex];
  const progress = {
    current: fsrsStore.currentCardIndex + 1,
    total: fsrsStore.dueCards.length,
    percent: fsrsStore.dueCards.length > 0 ? ((fsrsStore.currentCardIndex + 1) / fsrsStore.dueCards.length) * 100 : 0,
  };

  return {
    currentItem,
    currentCard,
    progress,
    stats: fsrsStore.stats,
    isLoading: fsrsStore.isLoading,
    isSessionComplete: fsrsStore.dueCards.length === 0 || fsrsStore.currentCardIndex >= fsrsStore.dueCards.length,
    handleReview,
    previousCard: () => fsrsStore.previousCard(),
    nextCard: () => fsrsStore.nextCard(),
  };
}
