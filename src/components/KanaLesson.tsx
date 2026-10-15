import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { addItemsToReview } from '@/services/cards';
import { speak } from '@/utils/speech';
import type { KanaItem } from '@/types';

interface KanaLessonProps {
  kana: KanaItem;
  onLearned: () => void;
}

export default function KanaLesson({ kana, onLearned }: KanaLessonProps) {
  const { user } = useUserStore();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleMarkAsLearned() {
    if (!user) return;
    setBusy(true);
    setError(null);
    try {
      await addItemsToReview(user.id, [kana], 'kana_reading');
      await addItemsToReview(user.id, [kana], 'vocab_recall_typed');
      onLearned();
    } catch (err) {
      console.error('Failed to create cards:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <article className="animate-rise surface p-8 text-center sm:p-14">
      <p className="eyebrow">{kana.id.endsWith('-katakana') ? 'Katakana' : 'Hiragana'}</p>

      <div className="jp-text mt-8 text-[9rem] leading-none text-ink sm:text-[11rem]">{kana.character}</div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <span className="text-2xl italic text-ai-600">{kana.romaji}</span>
        <button
          onClick={() => speak(kana.character)}
          className="h-10 w-10 rounded-full text-ink-2 ring-1 ring-ink-line transition hover:bg-paper-deep hover:text-ink"
          aria-label={`Listen to ${kana.romaji}`}
        >
          ▶
        </button>
      </div>
      <p className="mt-2 text-sm text-ink-3">Say it like: {kana.pronunciation}</p>

      <blockquote className="mx-auto mt-10 max-w-md rounded-2xl bg-paper-deep/60 p-6 text-left">
        <p className="eyebrow">Memory trick</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{kana.mnemonic}</p>
      </blockquote>

      {error && <p className="mt-6 text-sm text-shu-600">{error}</p>}

      <button onClick={handleMarkAsLearned} disabled={busy} className="btn-ink mt-10 px-8 py-4 text-base">
        {busy ? 'Saving…' : 'I know this one'}
      </button>
      <p className="mt-4 text-xs text-ink-3">Adds two review cards so it comes back when you need it.</p>
    </article>
  );
}
