import { useEffect, useRef, useState } from 'react';
import { useReviewSession } from '@/hooks/useReviewSession';
import { speak } from '@/utils/speech';
import KanaInput from './KanaInput';
import type { Card, GrammarItem, Item, KanaItem, KanjiItem, VocabItem } from '@/types';

type Rating = 1 | 2 | 3 | 4;

const RATINGS: { value: Rating; label: string; hint: string }[] = [
  { value: 1, label: 'Again', hint: 'I forgot' },
  { value: 2, label: 'Hard', hint: 'I struggled' },
  { value: 3, label: 'Good', hint: 'I got it' },
  { value: 4, label: 'Easy', hint: 'Instantly' },
];

const CARD_LABELS: Record<string, string> = {
  kana_reading: 'Read the kana',
  vocab_recall_typed: 'Type the kana',
  vocab_meaning: 'Remember the meaning',
  kanji_meaning: 'Kanji',
  kanji_reading: 'Reading',
  grammar_cloze: 'Grammar pattern',
};

interface ReviewSessionProps {
  onComplete: () => void;
}

export default function ReviewSession({ onComplete }: ReviewSessionProps) {
  const { currentItem, currentCard, progress, reviewed, isSessionComplete, handleReview } = useReviewSession();

  if (isSessionComplete) {
    return (
      <div className="animate-rise surface mx-auto max-w-xl p-10 text-center sm:p-14">
        <span className="hanko mx-auto h-16 w-16 text-2xl" aria-hidden="true">
          済
        </span>
        <h2 className="display mt-8 text-3xl">Session complete</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
          You reviewed {reviewed} {reviewed === 1 ? 'card' : 'cards'}. Each one is scheduled for the moment you are
          most likely to forget it.
        </p>
        <button onClick={onComplete} className="btn-ink mt-10">
          Back to today
        </button>
      </div>
    );
  }

  if (!currentCard || !currentItem || currentItem.id !== currentCard.itemId) {
    return <div className="surface p-10 text-center text-ink-3">Loading card…</div>;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-ink-2">
            Card <span className="tabular-nums">{progress.current}</span> of{' '}
            <span className="tabular-nums">{progress.total}</span>
          </span>
          <span className="tabular-nums text-ink-3">{Math.round(progress.percent)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-deep">
          <div
            className="h-full rounded-full bg-ai-600 transition-all duration-500 ease-out"
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
      <section className="surface relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden p-8 text-center sm:p-12">
        <span className="eyebrow absolute left-6 top-6">{CARD_LABELS[card.cardType] ?? card.cardType}</span>
        <Prompt card={card} item={item} revealed={revealed} />
      </section>

      {isKana && (
        <KanaInput
          correctAnswer={card.cardType === 'kana_reading' ? (item as KanaItem).romaji : (item as KanaItem).character}
          cardType={card.cardType}
          onAnswer={handleKanaAnswer}
        />
      )}

      {isKana && kanaResult === 'correct' && (
        <p className="text-center text-sm text-matcha-500">Correct. Moving on…</p>
      )}

      {isKana && kanaResult === 'wrong' && <RatingRow onRate={onRate} />}

      {!isKana && !revealed && (
        <button onClick={() => setRevealed(true)} className="btn-ink w-full py-4 text-base">
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
      return <div className="display text-5xl">{item.romaji}</div>;
    }
    return <div className="jp-text text-8xl font-medium text-ink sm:text-9xl">{item.character}</div>;
  }

  if (item.type === 'vocab') {
    return (
      <div className="space-y-4">
        <div className="jp-text text-5xl font-medium text-ink sm:text-6xl">{item.kana}</div>
        {item.kanji && <div className="jp-text text-xl text-ink-3">{item.kanji}</div>}
        <button onClick={() => speak(item.kana)} className="btn-quiet mt-2 py-2 text-sm">
          ▶ Listen
        </button>
        {revealed && (item as VocabItem).romaji && (
          <div className="pt-2 text-base italic text-ai-600">{(item as VocabItem).romaji}</div>
        )}
      </div>
    );
  }

  if (item.type === 'kanji') {
    return <div className="jp-text text-8xl font-medium text-ink sm:text-9xl">{(item as KanjiItem).character}</div>;
  }

  return (
    <div className="max-w-xl space-y-4">
      <h3 className="display text-2xl leading-snug sm:text-3xl">{(item as GrammarItem).title}</h3>
      <p className="text-sm text-ink-3">Say what this pattern means, then check yourself.</p>
    </div>
  );
}

function Answer({ item }: { item: Item }) {
  if (item.type === 'vocab') {
    return (
      <div className="surface p-7 text-center">
        <p className="eyebrow">Meaning</p>
        <p className="display mt-3 text-2xl">{item.meanings.join(' / ')}</p>
        {item.tl && <p className="mt-4 text-sm leading-relaxed text-ink-2">{item.tl}</p>}
      </div>
    );
  }

  if (item.type === 'kanji') {
    return (
      <div className="surface p-7 text-center">
        <p className="eyebrow">Meaning</p>
        <p className="display mt-3 text-2xl">{(item as KanjiItem).meanings.join(', ')}</p>
      </div>
    );
  }

  if (item.type === 'grammar') {
    const grammar = item as GrammarItem;
    return (
      <div className="surface space-y-5 p-7">
        <p className="text-[15px] leading-relaxed text-ink-2">{grammar.explanation}</p>
        <ul className="space-y-3">
          {grammar.exampleSentences.map((example) => (
            <li key={example.japanese} className="rounded-xl bg-paper-deep/60 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="jp-text text-lg text-ink">{example.japanese}</p>
                  <p className="mt-1 text-sm text-ink-2">{example.english}</p>
                </div>
                <button
                  onClick={() => speak(example.japanese)}
                  className="h-9 w-9 shrink-0 rounded-full text-ink-2 ring-1 ring-ink-line hover:text-ink"
                  aria-label="Listen to example"
                >
                  ▶
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

const RATING_TONE: Record<Rating, string> = {
  1: 'hover:border-shu-500 hover:text-shu-600',
  2: 'hover:border-ink-3 hover:text-ink',
  3: 'hover:border-matcha-500 hover:text-matcha-500',
  4: 'hover:border-ai-600 hover:text-ai-700',
};

function RatingRow({ onRate }: { onRate: (rating: Rating) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {RATINGS.map((rating) => (
        <button
          key={rating.value}
          onClick={() => onRate(rating.value)}
          className={`flex flex-col items-center gap-0.5 rounded-2xl border border-ink-line bg-paper-card px-4 py-4 text-ink transition duration-200 ${RATING_TONE[rating.value]}`}
        >
          <span className="font-semibold">{rating.label}</span>
          <span className="text-xs text-ink-3">{rating.hint}</span>
        </button>
      ))}
    </div>
  );
}
