import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { db } from '@/db';
import { initializeCard } from '@/services/fsrsService';
import type { KanaItem } from '@/types';

interface KanaLessonProps {
  kana: KanaItem;
  learned: boolean;
  onLearned: () => void;
}

export default function KanaLesson({ kana, learned, onLearned }: KanaLessonProps) {
  const { user } = useUserStore();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAdd() {
    if (!user) return;
    setIsSaving(true);
    setError(null);

    try {
      const cardTypes = ['kana_reading', 'vocab_recall_typed'] as const;
      await db.cards.bulkPut(
        cardTypes.map((type) => ({
          id: `card-${kana.id}-${type}`,
          userId: user.id,
          itemId: kana.id,
          cardType: type,
          fsrsState: initializeCard(),
          createdAt: new Date(),
        })),
      );
      onLearned();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save this card');
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="card p-8 sm:p-10 text-center">
      <div className="text-[9rem] leading-none jp-text text-ink">{kana.character}</div>
      <div className="mt-4 text-3xl font-semibold">{kana.romaji}</div>
      <p className="text-stone-500 mt-1">sounds like &ldquo;{kana.pronunciation}&rdquo;</p>

      {kana.mnemonic && (
        <div className="mt-8 mx-auto max-w-md border-l-2 border-vermilion pl-4 text-left">
          <p className="label mb-1">Memory hook</p>
          <p className="text-stone-800">{kana.mnemonic}</p>
        </div>
      )}

      <p className="mt-6 text-sm text-stone-500">{kana.strokeCount} stroke{kana.strokeCount === 1 ? '' : 's'}</p>

      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

      <div className="mt-8">
        {learned ? (
          <p className="text-sm text-stone-500">Added to your reviews</p>
        ) : (
          <button onClick={handleAdd} disabled={isSaving} className="btn-primary">
            {isSaving ? 'Saving' : 'Add to my reviews'}
          </button>
        )}
      </div>
    </div>
  );
}
