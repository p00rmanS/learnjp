import { useEffect, useRef, useState } from 'react';
import { useReviewSession } from '@/hooks/useReviewSession';
import { speak } from '@/utils/speech';
import KanaInput from './KanaInput';
import type { Card, GrammarItem, Item, KanaItem, KanjiItem, VocabItem } from '@/types';

type Rating = 1 | 2 | 3 | 4;

const RATINGS: { value: Rating; label: string; hint: string; tone: string }[] = [
  { value: 1, label: 'Again', hint: 'Forgot', tone: 'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100' },
  { value: 2, label: 'Hard', hint: 'Struggled', tone: 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100' },
  { value: 3, label: 'Good', hint: 'Recalled', tone: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100' },
  { value: 4, label: 'Easy', hint: 'Instant', tone: 'border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100' },
];

const CARD_LABELS: Record<string, string> = {
  kana_reading: 'Read the kana',
  vocab_recall_typed: 'Type the kana',
  vocab_meaning: 'Meaning',
  kanji_meaning: 'Kanji',
  kanji_reading: 'Reading',
  grammar_cloze: 'Grammar',
};

interface ReviewSessionProps {
  onComplete: () => void;
}

export default function ReviewSession({ onComplete }: ReviewSessionProps) {
  const { currentItem, currentCard, progress, reviewed, isSessionComplete, handleReview } = useReviewSession();

  if (isSessionComplete) {
    return (
      <div className="card p-10 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold mb-2">Session complete</h2>
        <p className="text-gray-600 mb-8">
          You reviewed {reviewed} {reviewed === 1 ? 'card' : 'cards'}. Your next reviews are scheduled automatically.
        </p>
        <button onClick={onComplete} className="btn-primary px-8 py-3 text-lg">
          Back to home
        </button>
      </div>
    );
  }

  if (!currentCard || !currentItem || currentItem.id !== currentCard.itemId) {
    return <div className="card p-6 text-center text-gray-500">Loading card…</div>;
  }

  return (
    <div className="space-y-5">
      <div className="card p-4">
        <div className="mb-2 flex justify-between text-sm font-semibold text-gray-700">
          <span>
            Card {progress.current} of {progress.total}
          </span>
          <span className="text-gray-500">{Math.round(progress.percent)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
            style={{ width: `${progress.percent}%` }}
          />
        </div>
      </div>

      <ReviewCard key={currentCard.id} card={currentCard} item={currentItem} onRate={handleReview} />
    </div>
  );
}

interface ReviewCardProps {
  card: Card;
  item: Item;
  onRate: (rating: Rating) => void;
}

function ReviewCard({ card, item, onRate }: ReviewCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [kanaResult, setKanaResult] = useState<'correct' | 'wrong' | null>(null);
  const autoRateTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(autoRateTimer.current), []);

  const isKana = item.type === 'kana';

  function handleKanaAnswer(isCorrect: boolean) {
    setKanaResult(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) {
      autoRateTimer.current = window.setTimeout(() => onRate(3), 1200);
    }
  }

  return (
    <div className="space-y-5">
      <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-200 sm:p-12">
        <span className="absolute left-5 top-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
          {CARD_LABELS[card.cardType] ?? card.cardType}
        </span>

        <Prompt card={card} item={item} revealed={revealed} />
      </div>

      {isKana && (
        <KanaInput
          correctAnswer={card.cardType === 'kana_reading' ? (item as KanaItem).romaji : (item as KanaItem).character}
          cardType={card.cardType}
          onAnswer={handleKanaAnswer}
        />
      )}

      {isKana && kanaResult === 'correct' && (
        <p className="text-center text-sm font-medium text-emerald-700">Correct. Moving to the next card…</p>
      )}

      {isKana && kanaResult === 'wrong' && <RatingRow onRate={onRate} />}

      {!isKana && !revealed && (
        <button
          onClick={() => setRevealed(true)}
          className="w-full rounded-2xl bg-slate-900 py-4 text-lg font-semibold text-white transition hover:bg-slate-700"
        >
          Show answer
        </button>
      )}

      {!isKana && revealed && (
        <>
          <Answer item={item} />
          <RatingRow onRate={onRate} />
        </>
      )}
    </div>
  );
}

function Prompt({ card, item, revealed }: { card: Card; item: Item; revealed: boolean }) {
  if (item.type === 'kana') {
    if (card.cardType === 'vocab_recall_typed') {
      return <div className="text-5xl font-bold text-slate-800">{item.romaji}</div>;
    }
    return <div className="jp-text text-9xl font-bold text-slate-900">{item.character}</div>;
  }

  if (item.type === 'vocab') {
    return (
      <div className="space-y-3">
        <div className="jp-text text-5xl font-bold text-slate-900 sm:text-6xl">{item.kana}</div>
        {item.kanji && <div className="jp-text text-2xl text-slate-500">{item.kanji}</div>}
        <button
          onClick={() => speak(item.kana)}
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
        >
          🔊 Listen
        </button>
        {revealed && (item as VocabItem).romaji && (
          <div className="text-lg text-slate-500">{(item as VocabItem).romaji}</div>
        )}
      </div>
    );
  }

  if (item.type === 'kanji') {
    return <div className="jp-text text-9xl font-bold text-slate-900">{(item as KanjiItem).character}</div>;
  }

  return (
    <div className="max-w-xl space-y-3">
      <h3 className="jp-text text-2xl font-bold text-slate-900 sm:text-3xl">{(item as GrammarItem).title}</h3>
      <p className="text-sm text-slate-500">Recall what this pattern means and how to use it.</p>
    </div>
  );
}

function Answer({ item }: { item: Item }) {
  if (item.type === 'vocab') {
    return (
      <div className="rounded-2xl bg-indigo-50 p-6 text-center ring-1 ring-indigo-100">
        <div className="text-2xl font-semibold text-slate-900">{item.meanings.join(' / ')}</div>
      </div>
    );
  }

  if (item.type === 'kanji') {
    return (
      <div className="rounded-2xl bg-indigo-50 p-6 text-center text-xl font-semibold text-slate-900 ring-1 ring-indigo-100">
        {(item as KanjiItem).meanings.join(', ')}
      </div>
    );
  }

  if (item.type === 'grammar') {
    const grammar = item as GrammarItem;
    return (
      <div className="space-y-4 rounded-2xl bg-indigo-50 p-6 ring-1 ring-indigo-100">
        <p className="text-slate-800">{grammar.explanation}</p>
        <ul className="space-y-3">
          {grammar.exampleSentences.map((example) => (
            <li key={example.japanese} className="rounded-xl bg-white p-4 ring-1 ring-indigo-100">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="jp-text text-lg font-semibold text-slate-900">{example.japanese}</div>
                  <div className="text-sm text-slate-500">{example.english}</div>
                </div>
                <button
                  onClick={() => speak(example.japanese)}
                  className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700 hover:bg-indigo-100"
                  aria-label="Listen to example"
                >
                  🔊
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

function RatingRow({ onRate }: { onRate: (rating: Rating) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {RATINGS.map((rating) => (
        <button
          key={rating.value}
          onClick={() => onRate(rating.value)}
          className={`flex flex-col items-center rounded-2xl border-2 px-4 py-3 transition ${rating.tone}`}
        >
          <span className="text-base font-bold">{rating.label}</span>
          <span className="text-xs opacity-75">{rating.hint}</span>
        </button>
      ))}
    </div>
  );
}
