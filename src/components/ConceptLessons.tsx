import { useState } from 'react';
import type { ConceptLesson } from '@/db/seeds/concepts';

function loadRead(key: string): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) ?? '[]'));
  } catch {
    return new Set();
  }
}

function saveRead(key: string, ids: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...ids]));
  } catch {
    // Storage can be unavailable (private mode); progress just won't persist
  }
}

interface Props {
  lessons: ConceptLesson[];
  storageKey: string;
  intro: string;
  noun?: string;
}

function LessonCheck({ check }: { check: NonNullable<ConceptLesson['check']> }) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <div className="surface p-5 sm:p-6">
      <p className="eyebrow mb-2">Quick check</p>
      <p className="mb-4 text-lg font-bold">{check.q}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {check.options.map((o, i) => {
          const state =
            picked === null
              ? 'border-ai-100 bg-paper-card hover:border-ai-400 hover:bg-ai-50'
              : i === check.answer
                ? 'border-matcha-500 bg-matcha-100 text-ink'
                : i === picked
                  ? 'border-shu-500 bg-paper-deep text-ink'
                  : 'border-ai-100 bg-paper-card opacity-50';
          return (
            <button
              key={o}
              disabled={picked !== null}
              onClick={() => setPicked(i)}
              className={`jp-text rounded-2xl border-2 px-4 py-3 text-left text-[15px] font-bold transition-colors ${state}`}
            >
              {o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className="mt-4 text-sm font-bold text-ink-2">
          {picked === check.answer ? 'Tama!' : `Ang tamang sagot: ${check.options[check.answer]}`}
        </p>
      )}
    </div>
  );
}

export default function ConceptLessons({ lessons: conceptLessons, storageKey, intro, noun = 'Konsepto' }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [read, setRead] = useState<Set<string>>(() => loadRead(storageKey));

  const index = conceptLessons.findIndex((l) => l.id === openId);
  const lesson = conceptLessons[index];

  function markRead(id: string) {
    const next = new Set(read).add(id);
    setRead(next);
    saveRead(storageKey, next);
  }

  if (lesson) {
    const next = conceptLessons[index + 1];
    const percent = Math.round(((index + 1) / conceptLessons.length) * 100);
    return (
      <article className="animate-rise space-y-6">
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => setOpenId(null)} className="link-back">
            ← Lahat ng aralin
          </button>
          <span className="text-sm font-bold tabular-nums text-ink-2">
            {index + 1} / {conceptLessons.length}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-paper-deep" aria-hidden="true">
          <div
            className="h-full rounded-full bg-gradient-to-r from-ai-500 to-sakura-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        <header>
          <p className="eyebrow">
            {noun} {index + 1}
          </p>
          <h2 className="display mt-2 text-3xl sm:text-4xl jp-text">{lesson.title}</h2>
          {lesson.pattern && (
            <p className="mt-4 inline-block rounded-2xl bg-ai-50 px-4 py-2 text-base font-bold jp-text text-ai-700">
              {lesson.pattern}
            </p>
          )}
        </header>

        <div className="surface space-y-4 p-6 text-[16px] leading-relaxed text-ink sm:p-8">
          {lesson.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {lesson.examples && (
          <div className="surface divide-y divide-ai-50 overflow-hidden">
            {lesson.examples.map((e, i) => (
              <div key={i} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-4 sm:p-5">
                <span className="jp-text text-2xl font-bold text-ai-700">{e.jp}</span>
                <span className="text-right text-sm">
                  <span className="block font-bold text-ink">{e.romaji}</span>
                  <span className="block text-ink-2">{e.meaning}</span>
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="surface border-l-[6px] border-l-sakura-500 p-6">
          <p className="eyebrow mb-2 text-sakura-500">Paano tandaan</p>
          <p className="text-[16px] leading-relaxed text-ink">{lesson.remember}</p>
        </div>

        <div className="surface border-l-[6px] border-l-matcha-500 bg-matcha-100/60 p-6">
          <p className="eyebrow mb-2 text-matcha-500">Pro tip</p>
          <p className="text-[16px] leading-relaxed text-ink">{lesson.tip}</p>
        </div>

        {lesson.check && <LessonCheck key={lesson.id} check={lesson.check} />}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={() => setOpenId(null)} className="btn-quiet flex-1">
            Lahat ng aralin
          </button>
          <button
            onClick={() => {
              markRead(lesson.id);
              setOpenId(next ? next.id : null);
              window.scrollTo({ top: 0 });
            }}
            className="btn-ink flex-1"
          >
            {next ? 'Nakuha ko, susunod' : 'Nakuha ko, tapos na'}
          </button>
        </div>
      </article>
    );
  }

  return (
    <div className="space-y-6">
      <p className="max-w-2xl text-[15px] leading-relaxed text-ink-2">{intro}</p>
      <ul className="grid gap-4 md:grid-cols-2">
        {conceptLessons.map((l, i) => (
          <li key={l.id}>
            <button
              onClick={() => setOpenId(l.id)}
              className="surface flex h-full w-full items-start justify-between gap-4 p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-pop sm:p-6"
            >
              <div className="min-w-0">
                <p className="eyebrow">
                  {noun} {i + 1}
                </p>
                <h2 className="jp-text mt-1.5 text-lg font-bold leading-snug">{l.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{l.summary}</p>
              </div>
              {read.has(l.id) ? (
                <span className="chip shrink-0 bg-matcha-100 text-matcha-500">✓ Tapos</span>
              ) : (
                <span className="chip shrink-0 bg-ai-50 text-ai-600">Simulan</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
