import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { addItemsToReview } from '@/services/cards';
import { speak, speakAll } from '@/utils/speech';
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
          : 'Already in your reviews.',
      );
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  const guide = unit.guide;
  const story = unit.story;

  return (
    <article className="animate-rise space-y-12">
      <div>
        <button onClick={onBack} className="link-back">
          ← All lessons
        </button>
        <p className="eyebrow mt-8">{isGrammar ? 'Grammar' : 'Words & phrases'}</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl">{unit.title}</h2>
        <p className="mt-3 text-lg text-ink-2">{unit.theme}</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button onClick={addUnit} disabled={busy} className="btn-ink">
            {busy ? 'Adding…' : 'Add to my reviews'}
          </button>
          {status && <p className="text-sm text-ink-2">{status}</p>}
        </div>
      </div>

      {guide && (
        <section className="surface relative p-7 sm:p-10">
          <div className="flex gap-5">
            <span className="hanko h-12 w-12 shrink-0 text-xl" aria-hidden="true">
              先
            </span>
            <div>
              <p className="eyebrow">Your teacher says</p>
              <p className="mt-3 text-[17px] leading-relaxed text-ink">{guide.intro}</p>
            </div>
          </div>
        </section>
      )}

      {guide && (
        <div className="grid gap-5 md:grid-cols-2">
          <section className="surface p-7">
            <p className="eyebrow text-ai-600">How to say it</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{guide.pronunciation}</p>
          </section>
          <section className="surface bg-shu-500/[0.06] p-7 ring-shu-500/20">
            <p className="eyebrow text-shu-600">Pro tip</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{guide.proTip}</p>
          </section>
        </div>
      )}

      {story && (
        <section className="space-y-6">
          <div className="flex flex-col gap-4 border-b border-ink-line pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Story time</p>
              <h3 className="display mt-2 text-2xl">{story.title}</h3>
            </div>
            <button
              onClick={() => speakAll(story.lines.map((line) => line.japanese))}
              className="btn-quiet self-start sm:self-auto"
            >
              Play whole story
            </button>
          </div>

          <ol className="space-y-4">
            {story.lines.map((line, index) => (
              <li key={line.japanese} className="surface flex gap-5 p-6 sm:p-7">
                <span className="display mt-1 w-6 shrink-0 text-sm tabular-nums text-ink-3">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="jp-text text-xl leading-relaxed text-ink sm:text-2xl">{line.japanese}</p>
                  <p className="mt-2 text-[15px] italic text-ai-600">{line.romaji}</p>
                  <p className="mt-1 text-[15px] text-ink-2">{line.english}</p>
                </div>
                <button
                  onClick={() => speak(line.japanese)}
                  className="h-10 w-10 shrink-0 rounded-full text-ink-2 ring-1 ring-ink-line transition hover:bg-paper-deep hover:text-ink"
                  aria-label={`Listen to line ${index + 1}`}
                >
                  ▶
                </button>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="space-y-6">
        <p className="eyebrow">{isGrammar ? 'Patterns' : 'Words'}</p>

        {isGrammar ? (
          <div className="space-y-5">
            {(items as GrammarItem[]).map((item) => (
              <article key={item.id} className="surface p-7 sm:p-9">
                <h4 className="display text-xl">{item.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.explanation}</p>
                {item.commonMistakes && (
                  <p className="mt-4 border-l-2 border-shu-500 pl-4 text-sm text-ink-2">
                    <span className="font-semibold text-shu-600">Be careful: </span>
                    {item.commonMistakes}
                  </p>
                )}
                <ul className="mt-6 space-y-3">
                  {item.exampleSentences.map((example) => (
                    <li key={example.japanese} className="flex items-start justify-between gap-4 rounded-xl bg-paper-deep/60 p-4">
                      <div>
                        <p className="jp-text text-lg text-ink">{example.japanese}</p>
                        <p className="mt-1 text-sm text-ink-2">{example.english}</p>
                      </div>
                      <button
                        onClick={() => speak(example.japanese)}
                        className="h-9 w-9 shrink-0 rounded-full text-ink-2 ring-1 ring-ink-line hover:text-ink"
                        aria-label="Listen"
                      >
                        ▶
                      </button>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {(items as VocabItem[]).map((item) => (
              <article key={item.id} className="surface flex items-center justify-between gap-5 p-6">
                <div className="min-w-0">
                  <p className="jp-text text-xl text-ink">{item.kana}</p>
                  {item.kanji && <p className="jp-text mt-0.5 text-sm text-ink-3">{item.kanji}</p>}
                  <p className="mt-2 text-sm italic text-ai-600">{item.romaji}</p>
                  <p className="mt-1 text-[15px] text-ink-2">{item.meanings.join(' / ')}</p>
                </div>
                <button
                  onClick={() => speak(item.kana)}
                  className="h-10 w-10 shrink-0 rounded-full text-ink-2 ring-1 ring-ink-line transition hover:bg-paper-deep hover:text-ink"
                  aria-label={`Listen to ${item.romaji}`}
                >
                  ▶
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
