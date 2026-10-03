import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { db } from '@/db';
import { initializeCard } from '@/services/fsrsService';
import type { KanaItem } from '@/types';

interface KanaLessonProps {
  kana: KanaItem;
  onLearned: () => void;
}

export default function KanaLesson({ kana, onLearned }: KanaLessonProps) {
  const { user } = useUserStore();
  const [isCreatingCards, setIsCreatingCards] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleMarkAsLearned() {
    if (!user) return;

    setIsCreatingCards(true);
    setError(null);

    try {
      // Create multiple card types for this kana
      const cardTypes = [
        { type: 'kana_reading', prompt: `What is the romaji for ${kana.character}?` },
        { type: 'vocab_recall_typed', prompt: `Type the hiragana for "${kana.romaji}"` },
      ];

      const cardsToAdd = cardTypes.map((ct) => ({
        id: `card-${kana.id}-${ct.type}-${Date.now()}`,
        userId: user.id,
        itemId: kana.id,
        cardType: ct.type as any,
        fsrsState: initializeCard(),
        createdAt: new Date(),
      }));

      // Bulk add cards to database
      await db.cards.bulkAdd(cardsToAdd);

      console.log(`✓ Created ${cardsToAdd.length} cards for ${kana.character}`);
      onLearned();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create cards';
      setError(message);
      console.error('Failed to create cards:', err);
    } finally {
      setIsCreatingCards(false);
    }
  }

  return (
    <div className="card p-8">
      <div className="text-center space-y-6">
        {/* Large kana display */}
        <div className="text-9xl jp-text font-bold animate-pulse">{kana.character}</div>

        {/* Romaji and pronunciation */}
        <div className="space-y-2">
          <div className="text-3xl font-semibold text-brand-600">{kana.romaji}</div>
          <div className="text-lg text-gray-600">Pronounced: {kana.pronunciation}</div>
        </div>

        {/* Mnemonic */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-600 mb-2">Remember:</p>
          <p className="text-lg text-gray-800">{kana.mnemonic}</p>
        </div>

        {/* Stroke count */}
        <div className="text-sm text-gray-500">
          Strokes: <span className="font-semibold">{kana.strokeCount}</span>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded p-3 text-red-700 text-sm">{error}</div>
        )}

        {/* Action button */}
        <button
          onClick={handleMarkAsLearned}
          disabled={isCreatingCards}
          className={`${
            isCreatingCards ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
          } btn-primary bg-green-600 text-lg py-3 px-6`}
        >
          {isCreatingCards ? '⏳ Creating review cards...' : '✅ Got it! Create review cards'}
        </button>

        {/* Info text */}
        <p className="text-xs text-gray-500 mt-4">
          This will create 2 review cards to help you remember this kana through spaced repetition.
        </p>
      </div>
    </div>
  );
}
