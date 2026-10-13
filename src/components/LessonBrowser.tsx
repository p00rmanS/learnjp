import { useEffect, useMemo, useState } from 'react';
import { db } from '@/db';
import KanaLesson from './KanaLesson';
import UnitLesson from './UnitLesson';
import type { Item, KanaItem, Level, Unit } from '@/types';

interface LessonBrowserProps {
  onBack: () => void;
}

interface UnitSummary extends Unit {
  count: number;
}

const UNIT_GLYPHS: Record<string, string> = {
  'n5-greetings': '挨',
  'n5-daily': '話',
  'n5-fillers': '間',
  'n5-restaurant': '食',
  'n5-shopping': '買',
  'n5-directions': '道',
  'n5-numbers': '数',
  'n5-time': '時',
  'n5-food': '飲',
  'n5-transport': '車',
  'n5-help': '助',
  'n5-family': '家',
  'n5-verbs': '動',
  'n5-grammar': '文',
  'n5-grammar-2': '法',
};

export default function LessonBrowser({ onBack }: LessonBrowserProps) {
  const [levels, setLevels] = useState<Level[]>([]);
  const [units, setUnits] = useState<UnitSummary[]>([]);
  const [selected, setSelected] = useState<UnitSummary | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [kanaIndex, setKanaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [allLevels, allUnits] = await Promise.all([db.levels.toArray(), db.units.toArray()]);
      const summaries = await Promise.all(
        allUnits.map(async (unit) => ({
          ...unit,
          count: await db.items.where('unitId').equals(unit.id).count(),
        })),
      );
      setLevels(allLevels.sort((a, b) => a.order - b.order));
      setUnits(summaries);
      setIsLoading(false);
    })().catch((error) => {
      console.error('Failed to load lessons:', error);
      setIsLoading(false);
    });
  }, []);

  const grouped = useMemo(
    () =>
      levels
        .map((level) => ({
          level,
          units: units.filter((u) => u.levelId === level.id).sort((a, b) => a.order - b.order),
        }))
        .filter((group) => group.units.length > 0),
    [levels, units],
  );

  async function openUnit(unit: UnitSummary) {
    const unitItems = (await db.items.where('unitId').equals(unit.id).toArray()).sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );
    setItems(unitItems);
    setKanaIndex(0);
    setSelected(unit);
  }

  if (isLoading) {
    return <div className="card p-6 text-center text-gray-500">Loading lessons…</div>;
  }

  if (selected && selected.levelId !== 'stage0') {
    return <UnitLesson unit={selected} items={items} onBack={() => setSelected(null)} />;
  }

  if (selected) {
    const kana = items as KanaItem[];
    const current = kana[kanaIndex];
    const isLast = kanaIndex === kana.length - 1;
    const finish = () => setSelected(null);

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button onClick={finish} className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
            ← All lessons
          </button>
          <span className="text-sm text-gray-600">
            {kanaIndex + 1} / {kana.length}
          </span>
        </div>

        {current && (
          <KanaLesson kana={current} onLearned={() => (isLast ? finish() : setKanaIndex(kanaIndex + 1))} />
        )}

        <div className="flex gap-2">
          {kanaIndex > 0 && (
            <button onClick={() => setKanaIndex(kanaIndex - 1)} className="btn-secondary flex-1">
              ← Previous
            </button>
          )}
          {!isLast && (
            <button onClick={() => setKanaIndex(kanaIndex + 1)} className="btn-secondary flex-1">
              Skip →
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <button onClick={onBack} className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
          ← Back to home
        </button>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Lessons</h2>
        <p className="mt-2 text-slate-600">
          Pick a unit, learn it, then add it to your reviews. Tap 🔊 to hear any phrase.
        </p>
      </div>

      {grouped.map(({ level, units: levelUnits }) => (
        <section key={level.id} className="space-y-4">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-slate-500">{level.title}</h3>
            <p className="text-sm text-slate-500">{level.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {levelUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => openUnit(unit)}
                className="group flex items-start gap-4 rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-indigo-200"
              >
                <span className="jp-text flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ai-50 font-display text-2xl font-semibold text-ai-700 ring-1 ring-ai-100">
                  {UNIT_GLYPHS[unit.id] ?? '日'}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-slate-900 group-hover:text-indigo-700">{unit.title}</span>
                  <span className="mt-1 block text-sm text-slate-600">{unit.theme}</span>
                  <span className="mt-2 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                    {unit.count} {unit.levelId === 'stage0' ? 'kana' : 'items'}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
