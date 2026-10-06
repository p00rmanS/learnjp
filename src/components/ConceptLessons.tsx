import { useState } from 'react';
import { conceptLessons } from '@/db/seeds/concepts';

const STORAGE_KEY = 'michi-concepts-read';

function loadRead(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'));
  } catch {
    return new Set();
  }
}

function saveRead(ids: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  } catch {
    // Storage can be unavailable (private mode); progress just won't persist
  }
}

export default function ConceptLessons() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [read, setRead] = useState<Set<string>>(loadRead);

  const index = conceptLessons.findIndex((l) => l.id === openId);
  const lesson = conceptLessons[index];

  function markRead(id: string) {
    const next = new Set(read).add(id);
    setRead(next);
    saveRead(next);
  }

  if (lesson) {
    const next = conceptLessons[index + 1];
    return (
      <article className="space-y-6">
        <button onClick={() => setOpenId(null)} className="btn-ghost -ml-3">
          Back to concepts
        </button>

        <header>
          <p className="label">
            Concept {index + 1} of {conceptLessons.length}
          </p>
          <h2 className="text-2xl font-semibold mt-1">{lesson.title}</h2>
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

        <div className="flex gap-2">
          <button onClick={() => setOpenId(null)} className="btn-secondary flex-1">
            All concepts
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
      <p className="text-stone-500">Short lessons on how Japanese works. Basahin habang nag-aaral ng kana.</p>
      <ul className="space-y-3">
        {conceptLessons.map((l, i) => (
          <li key={l.id}>
            <button
              onClick={() => setOpenId(l.id)}
              className="card w-full p-5 text-left hover:border-brand-500 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="label">Concept {i + 1}</p>
                  <h2 className="text-lg font-semibold mt-0.5">{l.title}</h2>
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
