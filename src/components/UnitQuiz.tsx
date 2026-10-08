import { useMemo, useState } from 'react';
import type { KanaItem } from '@/types';

interface UnitQuizProps {
  unitTitle: string;
  items: KanaItem[];
  /** Other kana of the same script, used as wrong answers */
  pool: KanaItem[];
  onDone: () => void;
}

function shuffle<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function UnitQuiz({ unitTitle, items, pool, onDone }: UnitQuizProps) {
  const questions = useMemo(
    () =>
      shuffle(items)
        .slice(0, 10)
        .map((item) => {
          const wrong = shuffle(pool.filter((p) => p.romaji !== item.romaji))
            .filter((p, i, arr) => arr.findIndex((q) => q.romaji === p.romaji) === i)
            .slice(0, 3)
            .map((p) => p.romaji);
          return { item, options: shuffle([item.romaji, ...wrong]) };
        }),
    [items, pool],
  );

  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState<KanaItem[]>([]);
  const [round, setRound] = useState(0);

  const q = questions[step];

  function choose(option: string) {
    if (picked || !q) return;
    setPicked(option);
    if (option === q.item.romaji) setScore((s) => s + 1);
    else setMissed((m) => [...m, q.item]);
  }

  function next() {
    setPicked(null);
    setStep((s) => s + 1);
  }

  function retry() {
    setStep(0);
    setPicked(null);
    setScore(0);
    setMissed([]);
    setRound((r) => r + 1);
  }

  if (!q) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="card p-8 text-center space-y-4">
        <p className="label">Quick check</p>
        <h2 className="text-3xl font-semibold tabular-nums">
          {score} / {questions.length}
        </h2>
        <p className="text-stone-600">
          {pct === 100
            ? 'Perfect. Handa ka na sa susunod na unit.'
            : pct >= 70
              ? 'Magaling. Balikan lang ang mga namali mo.'
              : 'Okay lang. Ulitin natin ang unit, mas madali sa pangalawang beses.'}
        </p>
        {missed.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {missed.map((k, i) => (
              <div key={`${k.id}-${i}`} className="rounded-lg border border-stone-200 px-3 py-2">
                <span className="jp-text text-2xl">{k.character}</span>
                <span className="block text-xs text-stone-500">{k.romaji}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-2 pt-4">
          <button onClick={retry} className="btn-secondary flex-1">
            Try again
          </button>
          <button onClick={onDone} className="btn-primary flex-1">
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4" key={round}>
      <div className="flex items-center justify-between">
        <p className="label">Quick check: {unitTitle}</p>
        <span className="text-sm text-stone-500 tabular-nums">
          {step + 1} / {questions.length}
        </span>
      </div>

      <div className="card p-8 text-center">
        <div className="text-[7rem] leading-none jp-text">{q.item.character}</div>
        <p className="text-stone-500 mt-4">Ano ang tunog nito?</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {q.options.map((o) => {
          const isRight = o === q.item.romaji;
          const state = !picked
            ? 'bg-white border-stone-200 hover:border-brand-500'
            : isRight
              ? 'bg-green-50 border-green-600 text-green-800'
              : o === picked
                ? 'bg-red-50 border-red-600 text-red-800'
                : 'bg-white border-stone-200 opacity-50';
          return (
            <button
              key={o}
              onClick={() => choose(o)}
              disabled={!!picked}
              className={`rounded-xl border px-4 py-4 text-xl font-medium transition-colors ${state}`}
            >
              {o}
            </button>
          );
        })}
      </div>

      {picked && (
        <button onClick={next} className="btn-primary w-full">
          {step === questions.length - 1 ? 'See result' : 'Next'}
        </button>
      )}
    </div>
  );
}
