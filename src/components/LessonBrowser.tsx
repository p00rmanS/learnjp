import { useEffect, useMemo, useState } from 'react';
import { db } from '@/db';
import KanaLesson from './KanaLesson';
import UnitLesson from './UnitLesson';
import { useArrowKeys } from '@/utils/keyboard';
import type { Item, KanaItem, Level, Unit } from '@/types';

interface LessonBrowserProps {
  onBack: () => void;
  initialUnitId?: string;
  onOpenedUnit?: () => void;
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

export default function LessonBrowser({ onBack, initialUnitId, onOpenedUnit }: LessonBrowserProps) {
  const [levels, setLevels] = useState<Level[]>([]);
  const [units, setUnits] = useState<UnitSummary[]>([]);
  const [selected, setSelected] = useState<UnitSummary | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [kanaIndex, setKanaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    (async () => {
      const [allLevels, allUnits, completed] = await Promise.all([
        db.levels.toArray(),
        db.units.toArray(),
        db.unitProgress.toArray(),
      ]);
      const summaries = await Promise.all(
        allUnits.map(async (unit) => ({
          ...unit,
          count: await db.items.where('unitId').equals(unit.id).count(),
        })),
      );
      setCompletedIds(new Set(completed.map((c) => c.unitId)));
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

  useEffect(() => {
    if (!initialUnitId || isLoading) return;
    const unit = units.find((u) => u.id === initialUnitId);
    if (unit) openUnit(unit);
    onOpenedUnit?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialUnitId, isLoading]);

  async function openUnit(unit: UnitSummary) {
    const unitItems = (await db.items.where('unitId').equals(unit.id).toArray()).sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );
    setItems(unitItems);
    setKanaIndex(0);
    setSelected(unit);
    window.scrollTo({ top: 0 });
  }

  const flatUnits = useMemo(() => grouped.flatMap((g) => g.units), [grouped]);
  const selectedPos = selected ? flatUnits.findIndex((u) => u.id === selected.id) : -1;
  const prevUnit = selectedPos > 0 ? flatUnits[selectedPos - 1] : undefined;
  const nextUnit = selectedPos >= 0 && selectedPos < flatUnits.length - 1 ? flatUnits[selectedPos + 1] : undefined;

  const kanaMode = selected?.levelId === 'stage0';
  useArrowKeys(
    kanaMode ? () => setKanaIndex((i) => Math.max(0, i - 1)) : undefined,
    kanaMode ? () => setKanaIndex((i) => Math.min(items.length - 1, i + 1)) : undefined,
    Boolean(kanaMode),
  );

  if (isLoading) {
    return <div className="surface p-8 text-center text-ink-3">Loading lessons…</div>;
  }

  if (selected && !kanaMode) {
    return (
      <UnitLesson
        unit={selected}
        items={items}
        onBack={() => setSelected(null)}
        prevUnit={prevUnit}
        nextUnit={nextUnit}
        onNavigate={(unit) => {
          const target = flatUnits.find((u) => u.id === unit.id);
          if (target) openUnit(target);
        }}
      />
    );
  }

  if (selected) {
    const kana = items as KanaItem[];
    const current = kana[kanaIndex];
    const isLast = kanaIndex === kana.length - 1;
    const finish = () => setSelected(null);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button onClick={finish} className="link-back">
            ← All lessons
          </button>
          <span className="text-sm tabular-nums text-ink-3">
            {kanaIndex + 1} / {kana.length}
          </span>
        </div>

        {current && <KanaLesson kana={current} onLearned={() => (isLast ? finish() : setKanaIndex(kanaIndex + 1))} />}

        <div className="flex gap-3">
          {kanaIndex > 0 && (
            <button onClick={() => setKanaIndex(kanaIndex - 1)} className="btn-quiet flex-1">
              Previous
            </button>
          )}
          {!isLast && (
            <button onClick={() => setKanaIndex(kanaIndex + 1)} className="btn-quiet flex-1">
              Skip
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-14">
      <div className="max-w-2xl">
        <button onClick={onBack} className="link-back">
          ← Back to today
        </button>
        <p className="eyebrow mt-8">Curriculum</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl">Lessons</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
          Each unit has a teacher's introduction, a pronunciation guide, a pro tip, a short story with romaji and
          English, and the words themselves. Tap 🔊 to hear any word.
        </p>
      </div>

      {grouped.map(({ level, units: levelUnits }) => (
        <section key={level.id} className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-ink-line pb-3">
            <h3 className="display text-2xl">{level.title}</h3>
            <p className="hidden text-sm text-ink-3 sm:block">{level.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {levelUnits.map((unit, index) => (
              <button
                key={unit.id}
                onClick={() => openUnit(unit)}
                className="surface group flex items-start gap-5 p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="hanko h-14 w-14 shrink-0 text-2xl transition group-hover:bg-ai-700" aria-hidden="true">
                  {UNIT_GLYPHS[unit.id] ?? '日'}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                    {unit.levelId === 'stage0' ? 'Kana' : `Unit ${index + 1}`}
                    {unit.story && <span className="text-ai-600">· Story</span>}
                    {completedIds.has(unit.id) && <span className="text-matcha-500">· Completed</span>}
                  </span>
                  <span className="display mt-1 block text-lg leading-snug group-hover:text-ai-700">{unit.title}</span>
                  <span className="mt-1 block text-sm text-ink-2">{unit.theme}</span>
                  <span className="mt-3 block text-xs tabular-nums text-ink-3">
                    {unit.count} {unit.levelId === 'stage0' ? 'characters' : 'items'}
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
