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
    <div className="card p-8 sm:p-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="text-center space-y-8">
        {/* Animated kana character */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl opacity-50 blur-2xl animate-pulse"></div>
          <div className="relative text-9xl sm:text-10xl jp-text font-bold animate-bounce drop-shadow-2xl">
            {kana.character}
          </div>
        </div>

        {/* Romaji and pronunciation */}
        <div className="space-y-3">
          <div className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            {kana.romaji}
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg text-gray-600 font-medium">Pronounced:</span>
            <span className="text-2xl font-bold text-gray-800">{kana.pronunciation}</span>
            <span className="text-3xl">🔊</span>
          </div>
        </div>

        {/* Mnemonic card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-3xl">💡</div>
            <p className="text-xs text-amber-700 font-bold uppercase tracking-wide mb-2">Memory Tip</p>
            <p className="text-lg sm:text-xl text-gray-900 font-semibold">{kana.mnemonic}</p>
          </div>
        </div>

        {/* Stroke count info */}
        <div className="flex items-center justify-center gap-4">
          <div className="px-4 py-2 bg-gray-100 rounded-full">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-600">Strokes:</span>
              <span className="text-xl font-bold text-gray-900">{kana.strokeCount}</span>
            </div>
          </div>
          <div className="w-1 h-6 bg-gray-300 rounded-full"></div>
          <div className="px-4 py-2 bg-gray-100 rounded-full">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-600">Difficulty:</span>
              <span className="text-xl font-bold text-green-600">Easy</span>
            </div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 text-red-700 font-medium text-sm">
            {error}
          </div>
        )}

        {/* Action button */}
        <button
          onClick={handleMarkAsLearned}
          disabled={isCreatingCards}
          className={`relative overflow-hidden group mt-4 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-300 transform ${
            isCreatingCards
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-70'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-2xl hover:scale-105 active:scale-95'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center justify-center gap-2">
            <span className="text-2xl">{isCreatingCards ? '⏳' : '✅'}</span>
            <span>{isCreatingCards ? 'Creating review cards...' : 'Got it! Create review cards'}</span>
          </div>
        </button>

        {/* Info text */}
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          This will create 2 review cards to help you remember this kana through spaced repetition.
          You'll see them in your daily reviews.
        </p>
      </div>
    </div>
  );
}
