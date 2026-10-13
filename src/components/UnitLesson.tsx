import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { addItemsToReview } from '@/services/cards';
import { speak } from '@/utils/speech';
import type { GrammarItem, Item, Unit, VocabItem } from '@/types';

interface UnitLessonProps {
  unit: Unit;
  items: Item[];
  onBack: () => void;
}

export default function UnitLesson({ unit, items, onBack }: UnitLessonProps) {
  const { user } = useUserStore();
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const isGrammar = items.length > 0 && items.every((item) => item.type === 'grammar');
  const cardType = isGrammar ? 'grammar_cloze' : 'vocab_meaning';

  async function addUnit() {
    if (!user) return;
    setBusy(true);
    try {
      const added = await addItemsToReview(user.id, items, cardType);
      setStatus(
        added > 0
          ? `Added ${added} ${added === 1 ? 'card' : 'cards'} to your reviews.`
          : 'Everything in this unit is already in your reviews.',
      );
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
        ← All lessons
      </button>

      <header className="card p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
          {isGrammar ? 'Grammar' : 'Phrases'} · {items.length} {isGrammar ? 'patterns' : 'items'}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{unit.title}</h2>
        <p className="mt-2 text-slate-600">{unit.theme}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            onClick={addUnit}
            disabled={busy}
            className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
          >
            {busy ? 'Adding…' : 'Add all to my reviews'}
          </button>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </div>
      </header>

      {isGrammar ? (
        <div className="space-y-4">
          {(items as GrammarItem[]).map((item) => (
            <article key={item.id} className="card p-6 sm:p-8">
              <h3 className="jp-text text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-700">{item.explanation}</p>
              {item.commonMistakes && (
                <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-800 ring-1 ring-amber-100">
                  <span className="font-semibold">Watch out: </span>
                  {item.commonMistakes}
                </p>
              )}
              <ul className="mt-5 space-y-3">
                {item.exampleSentences.map((example) => (
                  <li
                    key={example.japanese}
                    className="flex items-start justify-between gap-4 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100"
                  >
                    <div>
                      <div className="jp-text text-lg font-semibold text-slate-900">{example.japanese}</div>
                      <div className="text-sm text-slate-500">{example.english}</div>
                    </div>
                    <button
                      onClick={() => speak(example.japanese)}
                      className="shrink-0 rounded-full bg-white px-3 py-1 text-sm text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
                      aria-label="Listen"
                    >
                      🔊
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {(items as VocabItem[]).map((item) => (
            <article
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="min-w-0">
                <div className="jp-text text-xl font-bold text-slate-900">{item.kana}</div>
                {item.kanji && <div className="jp-text text-sm text-slate-400">{item.kanji}</div>}
                <div className="mt-1 text-sm font-medium text-indigo-600">{item.romaji}</div>
                <div className="mt-1 text-slate-600">{item.meanings.join(' / ')}</div>
              </div>
              <button
                onClick={() => speak(item.kana)}
                className="shrink-0 rounded-full bg-indigo-50 p-3 text-lg hover:bg-indigo-100"
                aria-label={`Listen to ${item.romaji}`}
              >
                🔊
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
