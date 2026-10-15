import { useEffect, useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { useFSRSStore } from '@/stores/fsrsStore';
import Brand from './Brand';
import DailyPlan from './DailyPlan';
import ReviewSession from './ReviewSession';
import LessonBrowser from './LessonBrowser';

type Screen = 'today' | 'lessons' | 'review';

const START_UNIT_ID = 'n5-greetings';

export default function Home() {
  const { user } = useUserStore();
  const { stats, loadDueCards } = useFSRSStore();
  const [screen, setScreen] = useState<Screen>('today');
  const [openUnitId, setOpenUnitId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (user && screen === 'today') loadDueCards(user.id);
  }, [user, screen, loadDueCards]);

  async function startReview() {
    if (!user) return;
    await loadDueCards(user.id);
    setScreen('review');
  }

  function openLesson(unitId?: string) {
    setOpenUnitId(unitId);
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
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => (key === 'lessons' ? openLesson() : setScreen('today'))}
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
            <div className="max-w-2xl">
              <p className="eyebrow">Welcome back</p>
              <h1 className="display mt-3 text-4xl leading-tight sm:text-5xl">
                A little every day <span className="text-ai-600">becomes fluent.</span>
              </h1>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DailyPlan stats={stats} />

              <section className="surface flex flex-col justify-between p-7 sm:p-9">
                <div>
                  <p className="eyebrow">Start here</p>
                  <h2 className="display mt-4 text-2xl">Greetings &amp; First Words</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    Fourteen phrases, a short story to read aloud, and a teacher's tip on how to say each one.
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
              <p className="text-sm text-ink-3">
                Reviews come back at the right moment, so you remember without cramming.
              </p>
            </div>
          </div>
        )}

        {screen === 'lessons' && (
          <LessonBrowser
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
