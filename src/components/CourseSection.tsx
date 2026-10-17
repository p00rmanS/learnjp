import { useEffect, useMemo, useState } from 'react';
import { useArrowKeys } from '@/utils/keyboard';
import { compareAnswers } from '@/utils/kanaInput';
import { speak } from '@/utils/speech';
import { recordXp } from '@/services/progress';
import {
  COURSES,
  MASTERY_STREAK,
  MEMORY_TRICKS,
  loadCourseState,
  recordDrillAnswer,
  type CourseDef,
  type CourseId,
  type CourseState,
} from '@/services/courses';
import type { Item, KanaItem, KanjiItem, Unit } from '@/types';

type View =
  | { kind: 'hub' }
  | { kind: 'course'; courseId: CourseId }
  | { kind: 'unit'; courseId: CourseId; unitId: string }
  | { kind: 'drill'; courseId: CourseId; unitId: string };

const DRILL_SIZE = 10;

export default function CourseSection() {
  const [view, setView] = useState<View>({ kind: 'hub' });
  const [states, setStates] = useState<Record<string, CourseState>>({});
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    Promise.all(COURSES.map(async (c) => [c.id, await loadCourseState(c)] as const)).then((pairs) =>
      setStates(Object.fromEntries(pairs)),
    );
  }, [view]);

  const current = (courseId: CourseId) => states[courseId];

  if (view.kind === 'drill') {
    const state = current(view.courseId);
    const unit = state?.units.find((u) => u.unit.id === view.unitId);
    if (!unit) return <p className="text-ink-3">Nilo-load…</p>;
    return (
      <Drill
        key={attempt}
        course={COURSES.find((c) => c.id === view.courseId)!}
        unit={unit.unit}
        items={unit.items}
        onRestart={() => setAttempt((a) => a + 1)}
        onExit={() => setView({ kind: 'unit', courseId: view.courseId, unitId: view.unitId })}
      />
    );
  }

  if (view.kind === 'unit') {
    const state = current(view.courseId);
    const unit = state?.units.find((u) => u.unit.id === view.unitId);
    if (!unit) return <p className="text-ink-3">Nilo-load…</p>;
    return (
      <UnitView
        unit={unit.unit}
        items={unit.items}
        mastered={unit.mastered}
        onBack={() => setView({ kind: 'course', courseId: view.courseId })}
        onDrill={() => setView({ kind: 'drill', courseId: view.courseId, unitId: view.unitId })}
      />
    );
  }

  if (view.kind === 'course') {
    const state = current(view.courseId);
    const course = COURSES.find((c) => c.id === view.courseId)!;
    if (!state) return <p className="text-ink-3">Nilo-load…</p>;
    return (
      <CourseView
        course={course}
        state={state}
        onBack={() => setView({ kind: 'hub' })}
        onOpenUnit={(unitId) => setView({ kind: 'unit', courseId: course.id, unitId })}
      />
    );
  }

  return <Hub states={states} onOpen={(courseId) => setView({ kind: 'course', courseId })} />;
}

function Progress({ done, total, tone = 'ai' }: { done: number; total: number; tone?: 'ai' | 'matcha' }) {
  const ratio = total === 0 ? 0 : done / total;
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-paper-deep">
      <div
        className={`h-full rounded-full transition-[width] duration-700 ease-out ${tone === 'matcha' ? 'bg-matcha-500' : 'bg-ai-600'}`}
        style={{ width: `${Math.round(ratio * 100)}%` }}
      />
    </div>
  );
}

function Hub({ states, onOpen }: { states: Record<string, CourseState>; onOpen: (id: CourseId) => void }) {
  return (
    <div className="space-y-16">
      <div className="max-w-2xl">
        <p className="eyebrow">Kurso</p>
        <h2 className="display mt-3 text-5xl">Matutunan ang sistema ng pagsulat</h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-2">
          Tatlong kurso: hiragana, katakana, at kanji. Ang letra ay "natapos" kapag tama mo itong nasagot nang tatlong
          sunod-sunod. Mas mabisa ang 10 minuto araw-araw kaysa sa mahabang practice minsan sa isang linggo.
        </p>
      </div>

      <section>
        {COURSES.map((course, index) => {
          const state = states[course.id];
          const done = state?.mastered ?? 0;
          const total = state?.total ?? 0;
          return (
            <button
              key={course.id}
              onClick={() => onOpen(course.id)}
              className="group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-6 border-t border-ink-line py-8 text-left transition last:border-b hover:bg-paper-deep/40 sm:px-2"
            >
              <span className="display tabular-nums text-2xl text-ink-3 group-hover:text-ai-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 space-y-3">
                <span className="flex items-baseline gap-4">
                  <span className="display text-3xl group-hover:text-ai-600">{course.title}</span>
                  <span className="jp-text text-lg text-ink-3">{courseGlyph(course.id)}</span>
                </span>
                <span className="block max-w-xl text-sm leading-relaxed text-ink-2">{course.subtitle}</span>
                <span className="flex max-w-md items-center gap-4 pt-1">
                  <span className="flex-1">
                    <Progress done={done} total={total} tone="matcha" />
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-ink-3">
                    {done} / {total} natutunan
                  </span>
                </span>
              </span>
              <span className="text-ink-3 transition group-hover:translate-x-1 group-hover:text-ai-600" aria-hidden="true">
                →
              </span>
            </button>
          );
        })}
      </section>

      <section className="space-y-6">
        <div className="border-b border-ink pb-3">
          <p className="eyebrow">Memory tricks</p>
          <h3 className="display mt-2 text-3xl">Paano tandaan nang mas mabilis</h3>
        </div>
        <ul className="divide-y divide-ink-line">
          {MEMORY_TRICKS.map((trick) => (
            <li key={trick.id}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span>
                    <span className="display block text-xl">{trick.title}</span>
                    <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink-2">{trick.summary}</span>
                  </span>
                  <span className="mt-1 text-ink-3 transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <ol className="mt-5 max-w-2xl list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-ink-2 marker:text-ink-3">
                  {trick.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function courseGlyph(id: CourseId) {
  return id === 'hiragana' ? 'あ' : id === 'katakana' ? 'ア' : '漢';
}

function CourseView({
  course,
  state,
  onBack,
  onOpenUnit,
}: {
  course: CourseDef;
  state: CourseState;
  onBack: () => void;
  onOpenUnit: (unitId: string) => void;
}) {
  return (
    <div className="space-y-12">
      <div>
        <button onClick={onBack} className="link-back">
          ← Lahat ng kurso
        </button>
        <p className="eyebrow mt-10">{course.title}</p>
        <h2 className="display mt-3 text-5xl">{course.title}</h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-2">{course.subtitle}</p>
        <div className="mt-8 flex max-w-md items-center gap-4">
          <span className="flex-1">
            <Progress done={state.mastered} total={state.total} tone="matcha" />
          </span>
          <span className="text-xs tabular-nums text-ink-3">
            {state.mastered} / {state.total}
          </span>
        </div>
      </div>

      <ol className="divide-y divide-ink-line border-y border-ink-line">
        {state.units.map((u, index) => (
          <li key={u.unit.id}>
            <button
              onClick={() => onOpenUnit(u.unit.id)}
              className="group grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-6 text-left transition hover:bg-paper-deep/40 sm:px-2"
            >
              <span className="display tabular-nums text-xl text-ink-3">{String(index + 1).padStart(2, '0')}</span>
              <span className="min-w-0">
                <span className="display block text-xl group-hover:text-ai-600">{u.unit.title}</span>
                <span className="mt-1 block text-sm text-ink-2">{u.unit.theme}</span>
                <span className="mt-3 block max-w-xs">
                  <Progress done={u.mastered} total={u.items.length} tone="matcha" />
                </span>
              </span>
              <span className="text-xs tabular-nums text-ink-3">
                {u.mastered} / {u.items.length}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function UnitView({
  unit,
  items,
  mastered,
  onBack,
  onDrill,
}: {
  unit: Unit;
  items: Item[];
  mastered: number;
  onBack: () => void;
  onDrill: () => void;
}) {
  return (
    <div className="space-y-12">
      <div>
        <button onClick={onBack} className="link-back">
          ← Bumalik sa kurso
        </button>
        <p className="eyebrow mt-10">{unit.theme}</p>
        <h2 className="display mt-3 text-4xl">{unit.title}</h2>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <button onClick={onDrill} className="btn-ink">
            Simulan ang drill
          </button>
          <span className="text-sm tabular-nums text-ink-3">
            {mastered} / {items.length} natutunan · kailangan ng {MASTERY_STREAK} tama sa sunod-sunod
          </span>
        </div>
      </div>

      <div className="grid gap-px overflow-hidden rounded-[4px] border border-ink-line bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <CharCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function CharCard({ item }: { item: Item }) {
  const isKanji = item.type === 'kanji';
  const character = isKanji ? (item as KanjiItem).character : (item as KanaItem).character;
  const label = isKanji
    ? (item as KanjiItem).meanings.join(' / ')
    : (item as KanaItem).romaji;
  const reading = isKanji
    ? [...(item as KanjiItem).onReading.slice(0, 2), ...(item as KanjiItem).kunReading.slice(0, 2)].join(' · ')
    : '';

  return (
    <article className="flex flex-col bg-paper-card p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="jp-text text-7xl leading-none text-ink">{character}</span>
        <button
          onClick={() => speak(character)}
          className="h-9 w-9 rounded-full text-ink-2 ring-1 ring-ink-line hover:text-ink"
          aria-label={`Pakinggan ang ${label}`}
        >
          ▶
        </button>
      </div>
      <p className="mt-5 text-lg italic text-ai-600">{label}</p>
      {reading && <p className="mt-1 text-sm text-ink-3">{reading}</p>}
      {(item as KanaItem | KanjiItem).mnemonic && (
        <p className="mt-5 border-l-2 border-ai-100 pl-3 text-sm leading-relaxed text-ink-2">
          {(item as KanaItem | KanjiItem).mnemonic}
        </p>
      )}
    </article>
  );
}

function Drill({
  course,
  unit,
  items,
  onExit,
  onRestart,
}: {
  course: CourseDef;
  unit: Unit;
  items: Item[];
  onExit: () => void;
  onRestart: () => void;
}) {
  const [questions] = useState(() => pickQuestions(items));
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState<{ correct: boolean; streak: number } | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  const item = questions[index];
  const isKanji = item?.type === 'kanji';
  const options = useMemo(
    () => (item && isKanji ? kanjiOptions(item as KanjiItem, items) : []),
    [item, isKanji, items],
  );

  async function submit(answer: string) {
    if (!item || answered) return;
    const correct = isKanji ? answer === (item as KanjiItem).meanings[0] : compareAnswers(answer, (item as KanaItem).romaji);
    const streak = await recordDrillAnswer(item.id, correct);
    if (correct) await recordXp('drill');
    setAnswered({ correct, streak });
    setScore((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  }

  function next() {
    if (index === questions.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setInput('');
    setAnswered(null);
  }

  useArrowKeys(undefined, answered && !finished ? next : undefined, Boolean(answered));

  useEffect(() => {
    if (!answered) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Enter') next();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered, index]);

  if (questions.length === 0) {
    return (
      <div className="space-y-6">
        <p className="text-ink-2">Wala pang sapat na letra sa unit na ito para sa drill.</p>
        <button onClick={onExit} className="btn-quiet">
          Bumalik
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="animate-rise mx-auto max-w-xl space-y-8 py-10 text-center">
        <p className="eyebrow">Tapos na ang drill</p>
        <h2 className="display text-4xl">
          {score.correct} sa {score.total} ang tama
        </h2>
        <p className="text-[15px] leading-relaxed text-ink-2">
          {score.correct === score.total
            ? 'Perpekto! Ipagpatuloy ang ganitong ritmo.'
            : 'Ayos lang ang mali. Ulitin ito bukas, at lalakas ang alaala mo.'}
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={onRestart} className="btn-quiet">
            Ulitin
          </button>
          <button onClick={onExit} className="btn-ink">
            Bumalik sa unit
          </button>
        </div>
        <p className="text-xs text-ink-3">{course.title} · {unit.title}</p>
      </div>
    );
  }

  return (
    <div className="animate-rise mx-auto max-w-2xl space-y-8">
      <div className="flex items-center justify-between">
        <button onClick={onExit} className="link-back">
          ← Itigil ang drill
        </button>
        <span className="text-sm tabular-nums text-ink-3">
          {index + 1} / {questions.length}
        </span>
      </div>

      <div className="h-1 w-full overflow-hidden rounded-full bg-paper-deep">
        <div className="h-full rounded-full bg-ai-600 transition-all duration-500" style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>

      <section className="surface p-8 text-center sm:p-12">
        <p className="eyebrow">{isKanji ? 'Ano ang ibig sabihin?' : 'Ano ang pagbasa?'}</p>
        <p className="jp-text mt-6 text-8xl leading-none text-ink">
          {isKanji ? (item as KanjiItem).character : (item as KanaItem).character}
        </p>
        <button onClick={() => speak(item.type === 'kanji' ? (item as KanjiItem).character : (item as KanaItem).character)} className="btn-quiet mt-6 py-2 text-sm">
          ▶ Pakinggan
        </button>
      </section>

      {!answered && isKanji && (
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((option) => (
            <button key={option} onClick={() => submit(option)} className="rounded-[3px] border border-ink-line bg-paper-card px-5 py-4 text-left text-[15px] transition hover:border-ai-500">
              {option}
            </button>
          ))}
        </div>
      )}

      {!answered && !isKanji && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) submit(input);
          }}
          className="space-y-3"
        >
          <label htmlFor="drill-answer" className="eyebrow block text-center">
            I-type ang romaji
          </label>
          <input
            id="drill-answer"
            autoFocus
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-[3px] border border-ink-line bg-paper-card px-5 py-4 text-center text-xl tracking-wide outline-none focus:border-ai-500 focus:ring-2 focus:ring-ai-500/30"
            placeholder="halimbawa: a"
          />
          <button type="submit" disabled={!input.trim()} className="btn-ink w-full">
            Tingnan
          </button>
        </form>
      )}

      {answered && (
        <section className="surface animate-rise space-y-5 p-7">
          <p className={`display text-2xl ${answered.correct ? 'text-matcha-500' : 'text-shu-600'}`}>
            {answered.correct ? 'Tama!' : 'Hindi tama.'}
          </p>
          <p className="text-[15px] text-ink-2">
            {isKanji ? (
              <>
                Ang tamang sagot: <span className="text-ink">{(item as KanjiItem).meanings.join(' / ')}</span>
              </>
            ) : (
              <>
                Ang tamang romaji: <span className="italic text-ai-600">{(item as KanaItem).romaji}</span>
              </>
            )}
          </p>
          {(item as KanaItem | KanjiItem).mnemonic && (
            <p className="border-l-2 border-ai-100 pl-3 text-sm leading-relaxed text-ink-2">
              {(item as KanaItem | KanjiItem).mnemonic}
            </p>
          )}
          <p className="text-xs text-ink-3">
            Streak: {answered.streak} / {MASTERY_STREAK}
            {answered.streak >= MASTERY_STREAK ? ' · Natutunan na!' : ''}
          </p>
          <div className="flex items-center justify-between gap-4 pt-2">
            <span className="text-xs text-ink-3">Pindutin ang Enter o →</span>
            <button onClick={next} className="btn-ink">
              {index === questions.length - 1 ? 'Tapusin' : 'Susunod'}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

function pickQuestions(items: Item[]): Item[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, DRILL_SIZE);
}

function kanjiOptions(target: KanjiItem, items: Item[]): string[] {
  const others = items
    .filter((i): i is KanjiItem => i.type === 'kanji' && i.id !== target.id)
    .map((i) => i.meanings[0]);
  const distractors = [...new Set(others)].filter((m) => m !== target.meanings[0]).slice(0, 3);
  const all = [target.meanings[0], ...distractors];
  return all.sort((a, b) => a.localeCompare(b));
}
