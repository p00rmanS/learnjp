import { useCallback, useEffect, useState } from 'react';
import { db } from '@/db';
import { useUserStore } from '@/stores/userStore';
import { useFSRSStore } from '@/stores/fsrsStore';
import DailyPlan from './DailyPlan';
import ReviewSession from './ReviewSession';
import LessonBrowser from './LessonBrowser';

type Screen = 'home' | 'review' | 'lessons';

const TABS: { id: Screen; label: string }[] = [
  { id: 'home', label: 'Today' },
  { id: 'lessons', label: 'Lessons' },
  { id: 'review', label: 'Review' },
];

export default function Home() {
  const { user } = useUserStore();
  const { stats, loadDueCards } = useFSRSStore();
  const [screen, setScreen] = useState<Screen>('home');
  const [learnedKana, setLearnedKana] = useState(0);
  const [totalKana, setTotalKana] = useState(0);

  const refresh = useCallback(async () => {
    if (!user) return;
    await loadDueCards(user.id);
    const cards = await db.cards.where('userId').equals(user.id).toArray();
    setLearnedKana(new Set(cards.map((c) => c.itemId)).size);
    setTotalKana(await db.items.where('type').equals('kana').count());
  }, [user, loadDueCards]);

  // Re-read counts whenever the user switches screens
  useEffect(() => {
    refresh();
  }, [refresh, screen]);

  if (!user) return null;

  return (
    <div className="min-h-screen">
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button onClick={() => setScreen('home')} className="flex items-baseline gap-2">
            <span className="text-2xl jp-text text-brand-600">道</span>
            <span className="font-semibold">Michi</span>
          </button>
          <nav className="flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setScreen(tab.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  screen === tab.id ? 'bg-brand-50 text-brand-700' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {tab.label}
                {tab.id === 'review' && stats.total > 0 && (
                  <span className="ml-1.5 text-xs tabular-nums bg-vermilion text-white rounded-full px-1.5 py-0.5">
                    {stats.total}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {screen === 'home' && (
          <div className="space-y-6">
            <DailyPlan
              stats={stats}
              learnedKana={learnedKana}
              totalKana={totalKana}
              onStartReview={() => setScreen('review')}
              onOpenLessons={() => setScreen('lessons')}
            />
            <section className="card p-6">
              <p className="label mb-3">Path</p>
              <ol className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-stone-500">
                {['Kana', 'N5', 'N4', 'N3', 'N2', 'N1'].map((s, i) => (
                  <li key={s} className={i === 0 ? 'font-semibold text-brand-700' : ''}>
                    {s}
                    {i < 5 && <span className="ml-2 text-stone-300">/</span>}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        )}

        {screen === 'review' &&
          (stats.total > 0 ? (
            <ReviewSession onComplete={() => setScreen('home')} />
          ) : (
            <div className="card p-8 text-center">
              <h2 className="text-xl font-semibold">No reviews due</h2>
              <p className="text-stone-500 mt-1 mb-6">
                Learn some kana first. They will show up here when they are due.
              </p>
              <button onClick={() => setScreen('lessons')} className="btn-primary">
                Go to lessons
              </button>
            </div>
          ))}

        {screen === 'lessons' && <LessonBrowser />}
      </main>
    </div>
  );
}
