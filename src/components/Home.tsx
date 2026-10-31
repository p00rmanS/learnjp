import { useEffect, useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { useFSRSStore } from '@/stores/fsrsStore';
import { useProgressStore } from '@/stores/progressStore';
import { db } from '@/db';
import Brand from './Brand';
import GrowthPanel from './GrowthPanel';
import ReviewSession from './ReviewSession';
import LessonBrowser from './LessonBrowser';
import CourseSection from './CourseSection';

type Screen = 'today' | 'lessons' | 'courses' | 'review';

const START_UNIT_ID = 'n5-greetings';

export default function Home() {
  const { user } = useUserStore();
  const { stats, loadDueCards } = useFSRSStore();
  const { summary, refresh } = useProgressStore();
  const [screen, setScreen] = useState<Screen>('today');
  const [openUnitId, setOpenUnitId] = useState<string | undefined>(undefined);
  const [totalUnits, setTotalUnits] = useState(0);
  const [lessonsVersion, setLessonsVersion] = useState(0);

  useEffect(() => {
    if (!user || screen !== 'today') return;
    loadDueCards(user.id);
    refresh();
    db.units.where('levelId').equals('n5').count().then(setTotalUnits);
  }, [user, screen, loadDueCards, refresh]);

  async function startReview() {
    if (!user) return;
    await loadDueCards(user.id);
    setScreen('review');
  }

  function openLesson(unitId?: string) {
    setOpenUnitId(unitId);
    setLessonsVersion((v) => v + 1);
    setScreen('lessons');
  }

  if (!user) return null;

  const activeTab = screen === 'review' ? 'today' : screen;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-ink-line/70 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <button onClick={() => setScreen('today')} className="rounded-xl text-left" aria-label="Michi home">
            <Brand />
          </button>
          <nav className="flex rounded-full bg-paper-deep p-1 ring-1 ring-ink-line" aria-label="Main">
            {(
              [
                ['today', 'Today'],
                ['lessons', 'Lessons'],
                ['courses', 'Kurso'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => (key === 'lessons' ? openLesson() : setScreen(key === 'courses' ? 'courses' : 'today'))}
                aria-current={activeTab === key ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                  activeTab === key ? 'bg-paper-card text-ink shadow-card' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
        {screen === 'today' && (
          <div className="animate-rise space-y-10">
            <div className="flex items-stretch justify-between gap-8 border-b border-ink-line pb-10">
              <div className="max-w-2xl">
                <p className="eyebrow">Maligayang pagbabalik</p>
                <h1 className="display mt-4 text-[2.75rem] leading-[1.05] sm:text-6xl">
                  Kaunting araw-araw,
                  <br />
                  <span className="italic text-ai-600">malaking progreso.</span>
                </h1>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-2">
                  Hindi kailangan ng mahabang oras. Ang mahalaga, bumalik ka araw-araw. Ang streak mo ang magpapaalala
                  sa iyo.
                </p>
              </div>
              <span
                className="vertical-jp hidden select-none font-kanji text-[7rem] leading-none text-ai-100 sm:block"
                aria-hidden="true"
              >
                道を歩く
              </span>
            </div>

            {summary && (
              <GrowthPanel
                summary={summary}
                totalUnits={totalUnits}
                reviewsDue={stats.total}
                onReview={startReview}
              />
            )}

            <div className="grid gap-6">
              <section className="surface flex flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="eyebrow">Simulan dito</p>
                  <h2 className="display mt-4 text-2xl">Greetings &amp; First Words</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    Labing-apat na salita, isang maikling kwento, at tip ng teacher kung paano bigkasin ang bawat isa.
                  </p>
                </div>
                <button onClick={() => openLesson(START_UNIT_ID)} className="btn-ink mt-8 self-start">
                  Open lesson
                </button>
              </section>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                onClick={startReview}
                disabled={stats.total === 0}
                className="btn-ink px-8 py-4 text-base"
              >
                {stats.total > 0 ? 'Start reviews' : 'Nothing due right now'}
              </button>
              <p className="max-w-sm text-sm text-ink-3">
                Bumabalik ang mga review sa tamang oras, kaya natatandaan mo nang hindi nagmamadali.
              </p>
            </div>
          </div>
        )}

        {screen === 'courses' && <CourseSection />}

        {screen === 'lessons' && (
          <LessonBrowser
            key={lessonsVersion}
            initialUnitId={openUnitId}
            onBack={() => setScreen('today')}
            onOpenedUnit={() => setOpenUnitId(undefined)}
          />
        )}

        {screen === 'review' && (
          <div className="animate-rise">
            <button onClick={() => setScreen('today')} className="link-back mb-6">
              ← Back to today
            </button>
            <ReviewSession onComplete={() => setScreen('today')} />
          </div>
        )}
      </main>
    </div>
  );
}
