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
    <div className="card p-5">
      <p className="label mb-2">Quick check</p>
      <p className="font-medium mb-3">{check.q}</p>
      <div className="grid sm:grid-cols-2 gap-2">
        {check.options.map((o, i) => {
          const state =
            picked === null
              ? 'border-stone-200 hover:border-brand-500'
              : i === check.answer
                ? 'border-green-600 bg-green-50 text-green-800'
                : i === picked
                  ? 'border-red-600 bg-red-50 text-red-800'
                  : 'border-stone-200 opacity-50';
          return (
            <button
              key={o}
              disabled={picked !== null}
              onClick={() => setPicked(i)}
              className={`rounded-lg border px-4 py-3 text-left jp-text transition-colors ${state}`}
            >
              {o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p className="mt-3 text-sm text-stone-600">
          {picked === check.answer ? 'Tama!' : `Ang tamang sagot: ${check.options[check.answer]}`}
        </p>
      )}
    </div>
  );
}

export default function ConceptLessons({ lessons: conceptLessons, storageKey, intro, noun = 'Concept' }: Props) {
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
    return (
      <article className="space-y-6">
        <button onClick={() => setOpenId(null)} className="btn-ghost -ml-3">
          Back to list
        </button>

        <header>
          <p className="label">
            {noun} {index + 1} of {conceptLessons.length}
          </p>
          <h2 className="text-2xl font-semibold mt-1 jp-text">{lesson.title}</h2>
          {lesson.pattern && (
            <p className="mt-2 inline-block rounded-md bg-stone-100 px-2.5 py-1 text-sm jp-text text-stone-700">
              {lesson.pattern}
            </p>
          )}
        </header>

        <div className="card p-6 space-y-4 leading-relaxed text-stone-800">
          {lesson.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {lesson.examples && (
          <div className="card divide-y divide-stone-100">
            {lesson.examples.map((e) => (
              <div key={e.jp} className="p-4 flex items-baseline justify-between gap-4">
                <span className="text-2xl jp-text">{e.jp}</span>
                <span className="text-right text-sm">
                  <span className="block text-stone-800">{e.romaji}</span>
                  <span className="block text-stone-500">{e.meaning}</span>
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="border-l-2 border-vermilion pl-4">
          <p className="label mb-1">Paano tandaan</p>
          <p className="text-stone-800">{lesson.remember}</p>
        </div>

        <div className="rounded-xl bg-brand-50 border border-brand-100 p-4">
          <p className="label mb-1 text-brand-700">Pro tip</p>
          <p className="text-stone-800">{lesson.tip}</p>
        </div>

        {lesson.check && <LessonCheck key={lesson.id} check={lesson.check} />}

        <div className="flex gap-2">
          <button onClick={() => setOpenId(null)} className="btn-secondary flex-1">
            All lessons
          </button>
          <button
            onClick={() => {
              markRead(lesson.id);
              setOpenId(next ? next.id : null);
              window.scrollTo({ top: 0 });
            }}
            className="btn-primary flex-1"
          >
            {next ? 'Got it, next' : 'Got it, finish'}
          </button>
        </div>
      </article>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-stone-500">{intro}</p>
      <ul className="space-y-3">
        {conceptLessons.map((l, i) => (
          <li key={l.id}>
            <button
              onClick={() => setOpenId(l.id)}
              className="card w-full p-5 text-left hover:border-brand-500 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="label">{noun} {i + 1}</p>
                  <h2 className="text-lg font-semibold mt-0.5 jp-text">{l.title}</h2>
                  <p className="text-sm text-stone-500 mt-1">{l.summary}</p>
                </div>
                {read.has(l.id) && <span className="text-xs text-brand-700 shrink-0">Read</span>}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
