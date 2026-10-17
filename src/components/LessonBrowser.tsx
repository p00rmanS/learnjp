import { useEffect, useMemo, useState } from 'react';
import { db } from '@/db';
import { useArrowKeys } from '@/utils/keyboard';
import KanaLesson from './KanaLesson';
import UnitLesson from './UnitLesson';
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
  'n5-adjectives': '形',
  'n5-weather': '天',
  'n5-hobbies': '趣',
  'n5-work': '仕',
  'n5-hotel': '宿',
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
        .filter((level) => level.id !== 'kanji')
        .map((level) => ({
          level,
          units: units.filter((u) => u.levelId === level.id).sort((a, b) => a.order - b.order),
        }))
        .filter((group) => group.units.length > 0),
    [levels, units],
  );

  const flatUnits = useMemo(() => grouped.flatMap((g) => g.units), [grouped]);

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
    return <div className="surface p-8 text-center text-ink-3">Nilo-load ang mga lesson…</div>;
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
        <p className="text-center text-xs text-ink-3">
          Gamitin ang <kbd className="rounded border border-ink-line px-1.5 py-0.5">←</kbd>{' '}
          <kbd className="rounded border border-ink-line px-1.5 py-0.5">→</kbd> para lumipat ng card.
        </p>
      </div>
    );
  }

  let counter = 0;

  return (
    <div className="space-y-16">
      <div className="max-w-2xl">
        <button onClick={onBack} className="link-back">
          ← Bumalik sa Today
        </button>
        <p className="eyebrow mt-10">Curriculum</p>
        <h2 className="display mt-3 text-5xl">Mga Lesson</h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
          Bawat unit ay may pagpapakilala ng teacher, gabay sa pagbigkas, pro tip, maikling kwento na may romaji at
          English, at practice. Pindutin ang ▶ para marinig ang bawat salita.
        </p>
      </div>

      {grouped.map(({ level, units: levelUnits }) => (
        <section key={level.id}>
          <div className="flex items-baseline justify-between gap-6 border-b border-ink pb-3">
            <h3 className="display text-2xl">{level.title}</h3>
            <p className="hidden text-sm text-ink-3 sm:block">{level.description}</p>
          </div>

          <ol className="divide-y divide-ink-line">
            {levelUnits.map((unit) => {
              const number = level.id === 'stage0' ? null : String(++counter).padStart(2, '0');
              return (
                <li key={unit.id}>
                  <button
                    onClick={() => openUnit(unit)}
                    className="group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 text-left transition hover:bg-paper-deep/50 sm:grid-cols-[4rem_3rem_1fr_auto] sm:gap-6 sm:px-2"
                  >
                    <span className="display tabular-nums text-2xl text-ink-3 group-hover:text-ai-600">
                      {number ?? '—'}
                    </span>
                    <span
                      className="jp-text hidden text-xl text-ink-2 sm:block"
                      aria-hidden="true"
                    >
                      {UNIT_GLYPHS[unit.id] ?? '日'}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[1.25rem] leading-snug text-ink group-hover:text-ai-600">
                        {unit.title}
                      </span>
                      <span className="mt-1 block text-sm text-ink-2">{unit.theme}</span>
                      <span className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-ink-3">
                        <span className="tabular-nums">
                          {unit.count} {unit.levelId === 'stage0' ? 'characters' : 'items'}
                        </span>
                        {unit.story && <span className="text-ai-600">Kwento</span>}
                        {completedIds.has(unit.id) && <span className="font-semibold text-matcha-500">Tapos na</span>}
                      </span>
                    </span>
                    <span className="text-ink-3 transition group-hover:translate-x-1 group-hover:text-ai-600" aria-hidden="true">
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
