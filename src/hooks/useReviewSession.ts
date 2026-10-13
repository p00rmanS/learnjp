import { useEffect, useRef, useState } from 'react';
import { useFSRSStore } from '@/stores/fsrsStore';
import { db } from '@/db';
import type { Item } from '@/types';

type Rating = 1 | 2 | 3 | 4;

export function useReviewSession() {
  const { dueCards, stats, sessionTotal, reviewedCount, isLoading } = useFSRSStore();
  const currentCard = dueCards[0];
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const startedAtRef = useRef(Date.now());

  useEffect(() => {
    startedAtRef.current = Date.now();
    if (!currentCard) {
      setCurrentItem(null);
      return;
    }
    let cancelled = false;
    db.items.get(currentCard.itemId).then((item) => {
      if (!cancelled) setCurrentItem(item ?? null);
    });
    return () => {
      cancelled = true;
    };
  }, [currentCard?.id]);

  function handleReview(rating: Rating) {
    const card = useFSRSStore.getState().dueCards[0];
    if (!card) return;
    void useFSRSStore.getState().recordReview(card.id, rating, Date.now() - startedAtRef.current);
  }

  return {
    currentItem,
    currentCard,
    progress: {
      current: Math.min(reviewedCount + 1, sessionTotal),
      total: sessionTotal,
      percent: sessionTotal > 0 ? (reviewedCount / sessionTotal) * 100 : 0,
    },
    reviewed: reviewedCount,
    stats,
    isLoading,
    isSessionComplete: dueCards.length === 0,
    handleReview,
  };
}
