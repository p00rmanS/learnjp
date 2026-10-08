import { useCallback, useEffect, useState } from 'react';
import { db } from '@/db';
import { useUserStore } from '@/stores/userStore';
import KanaLesson from './KanaLesson';
import ConceptLessons from './ConceptLessons';
import UnitQuiz from './UnitQuiz';
import { conceptLessons } from '@/db/seeds/concepts';
import { n5Lessons, n4Lessons } from '@/db/seeds/grammarN5N4';
import { n3Lessons, n2Lessons, n1Lessons } from '@/db/seeds/grammarN3N1';
import { kanaItems } from '@/db/seeds/kana';
import { HIRAGANA_UNIT_ORDERS } from '@/db/seeds/yoon';
import type { Unit, KanaItem } from '@/types';

type Script = 'hiragana' | 'katakana' | 'concepts' | 'n5' | 'n4' | 'n3' | 'n2' | 'n1';

const LEVELS = {
  n5: { lessons: n5Lessons, intro: 'N5: ang mga batayan. Greetings, です, particles, pandiwa at adjective.' },
  n4: { lessons: n4Lessons, intro: 'N4: mga anyo ng pandiwa, karanasan, pahintulot, dahilan at kondisyon.' },
  n3: { lessons: n3Lessons, intro: 'N3: passive, causative at mga salitang nag-uugnay ng lohika.' },
  n2: { lessons: n2Lessons, intro: 'N2: pormal na pananalita at mga pattern sa balita at ulat.' },
  n1: { lessons: n1Lessons, intro: 'N1: mga pattern na literary at abstract.' },
} as const;
type LevelKey = keyof typeof LEVELS;

const SCRIPT_TABS: Script[] = ['hiragana', 'katakana', 'concepts', 'n5', 'n4', 'n3', 'n2', 'n1'];

function tabLabel(s: Script): string {
  if (s === 'hiragana') return 'Hiragana';
  if (s === 'katakana') return 'Katakana';
  if (s === 'concepts') return 'Concepts';
  return s.toUpperCase();
}

// Teaching order follows the seed file, not the database's id ordering
const SEED_ORDER = new Map(kanaItems.map((k, i) => [k.id, i]));

export default function LessonBrowser() {
  const { user } = useUserStore();
  const [script, setScript] = useState<Script>('hiragana');
  const [units, setUnits] = useState<Unit[]>([]);
  const [kanaByUnit, setKanaByUnit] = useState<Record<string, KanaItem[]>>({});
  const [learnedIds, setLearnedIds] = useState<Set<string>>(new Set());
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [quizzing, setQuizzing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const allUnits = await db.units.where('levelId').equals('stage0').toArray();
      allUnits.sort((a, b) => a.order - b.order);
      const kana = (await db.items.where('type').equals('kana').toArray()) as KanaItem[];
      const grouped: Record<string, KanaItem[]> = {};
      for (const k of kana) (grouped[k.unitId] ||= []).push(k);
      for (const list of Object.values(grouped)) {
        list.sort((a, b) => (SEED_ORDER.get(a.id) ?? 0) - (SEED_ORDER.get(b.id) ?? 0));
      }

      const cards = user ? await db.cards.where('userId').equals(user.id).toArray() : [];
      setUnits(allUnits);
      setKanaByUnit(grouped);
      setLearnedIds(new Set(cards.map((c) => c.itemId)));
    } catch (error) {
      console.error('Failed to load lessons:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    load();
  }, [load]);

  if (isLoading) {
    return <p className="text-stone-500">Loading lessons</p>;
  }

  const selectedUnit = units.find((u) => u.id === selectedUnitId);

  // ---- Quick check at the end of a unit ----
  if (selectedUnit && quizzing) {
    const isHira = HIRAGANA_UNIT_ORDERS.includes(selectedUnit.order);
    const pool = units
      .filter((u) => HIRAGANA_UNIT_ORDERS.includes(u.order) === isHira)
      .flatMap((u) => kanaByUnit[u.id] ?? []);
    return (
      <UnitQuiz
        unitTitle={selectedUnit.title}
        items={kanaByUnit[selectedUnit.id] ?? []}
        pool={pool}
        onDone={() => {
          setQuizzing(false);
          setSelectedUnitId(null);
        }}
      />
    );
  }

  // ---- Single kana lesson ----
  if (selectedUnit) {
    const list = kanaByUnit[selectedUnit.id] ?? [];
    const current = list[index];
    const isLast = index === list.length - 1;

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setSelectedUnitId(null)} className="btn-ghost -ml-3">
            Back to lessons
          </button>
          <span className="text-sm text-stone-500 tabular-nums">
            {index + 1} / {list.length}
          </span>
        </div>

        <p className="label">{selectedUnit.title}</p>

        {/* Character strip: jump to any kana in the unit */}
        <div className="flex flex-wrap gap-1.5">
          {list.map((k, i) => (
            <button
              key={k.id}
              onClick={() => setIndex(i)}
              aria-label={k.romaji}
              className={`w-10 h-10 rounded-lg jp-text text-lg border transition-colors ${
                i === index
                  ? 'bg-brand-600 border-brand-600 text-white'
                  : learnedIds.has(k.id)
                    ? 'bg-brand-50 border-brand-200 text-brand-700'
                    : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
              }`}
            >
              {k.character}
            </button>
          ))}
        </div>

        {current && (
          <KanaLesson
            key={current.id}
            kana={current}
            learned={learnedIds.has(current.id)}
            onLearned={async () => {
              await load();
              if (!isLast) setIndex(index + 1);
            }}
          />
        )}

        <div className="flex gap-2">
          <button onClick={() => setIndex(index - 1)} disabled={index === 0} className="btn-secondary flex-1">
            Previous
          </button>
          {isLast ? (
            <button onClick={() => setQuizzing(true)} className="btn-primary flex-1">
              Take quick check
            </button>
          ) : (
            <button onClick={() => setIndex(index + 1)} className="btn-secondary flex-1">
              Next
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---- Unit list ----
  const visible = units.filter((u) => HIRAGANA_UNIT_ORDERS.includes(u.order) === (script === 'hiragana'));
  const showConcepts = script === 'concepts';
  const level = script in LEVELS ? LEVELS[script as LevelKey] : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Lessons</h1>
        <p className="text-stone-500 mt-1">Kana first, then grammar from N5 to N1.</p>
      </div>

      <div className="flex p-1 bg-stone-200/70 rounded-lg overflow-x-auto max-w-full w-fit" role="tablist">
        {SCRIPT_TABS.map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={script === s}
            onClick={() => setScript(s)}
            className={`px-3 sm:px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
              script === s ? 'bg-white shadow-sm text-ink' : 'text-stone-600'
            }`}
          >
            {(s === 'hiragana' || s === 'katakana') && <span className="jp-text mr-1.5">{s === 'hiragana' ? 'あ' : 'ア'}</span>}
            {tabLabel(s)}
          </button>
        ))}
      </div>

      {showConcepts && (
        <ConceptLessons
          lessons={conceptLessons}
          storageKey="michi-concepts-read"
          intro="Short lessons on how Japanese works. Basahin habang nag-aaral ng kana."
        />
      )}
      {level && (
        <ConceptLessons
          key={script}
          lessons={level.lessons}
          storageKey={`michi-${script}-read`}
          intro={level.intro}
          noun="Lesson"
        />
      )}

      <ul className="space-y-3">
        {!showConcepts && !level && visible.map((unit, n) => {
          const list = kanaByUnit[unit.id] ?? [];
          const done = list.filter((k) => learnedIds.has(k.id)).length;
          return (
            <li key={unit.id}>
              <button
                onClick={() => {
                  setSelectedUnitId(unit.id);
                  setIndex(Math.max(0, list.findIndex((k) => !learnedIds.has(k.id))));
                }}
                disabled={list.length === 0}
                className="card w-full p-5 text-left hover:border-brand-500 transition-colors disabled:opacity-50"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="label">Lesson {n + 1}</p>
                    <h2 className="text-lg font-semibold jp-text mt-0.5">{unit.title}</h2>
                  </div>
                  <span className="text-sm text-stone-500 tabular-nums shrink-0">
                    {done} / {list.length}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1 jp-text text-xl text-stone-400">
                  {list.map((k) => (
                    <span key={k.id} className={learnedIds.has(k.id) ? 'text-brand-600' : ''}>
                      {k.character}
                    </span>
                  ))}
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {!showConcepts && !level && visible.length === 0 && (
        <div className="card p-6 text-center text-stone-500">No lessons found. Try reloading the page.</div>
      )}
    </div>
  );
}
