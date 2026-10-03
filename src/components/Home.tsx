import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';
import { useFSRSStore } from '@/stores/fsrsStore';
import DailyPlan from './DailyPlan';
import ReviewSession from './ReviewSession';
import LessonBrowser from './LessonBrowser';

type Screen = 'home' | 'review' | 'lessons';

export default function Home() {
  const { user } = useUserStore();
  const { stats, loadDueCards } = useFSRSStore();
  const [screen, setScreen] = useState<Screen>('home');

  async function startReview() {
    if (user) {
      await loadDueCards(user.id);
      setScreen('review');
    }
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 py-8">
      {screen === 'home' && (
        <>
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold jp-text mb-2">道</h1>
            <h2 className="text-2xl text-gray-700 mb-2">Michi</h2>
            <p className="text-gray-600">Japanese from Zero to N1</p>
          </div>

          <DailyPlan stats={stats} onStartReview={startReview} />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setScreen('lessons')}
              className="btn-primary text-lg py-3"
            >
              📚 Browse Lessons
            </button>
            <button
              onClick={startReview}
              disabled={stats.total === 0}
              className={`${stats.total > 0 ? 'btn-primary' : 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-500'} text-lg py-3`}
            >
              ✅ Start Reviews
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="card p-4">
              <div className="text-2xl font-bold text-brand-600">{stats.total}</div>
              <div className="text-sm text-gray-600">Due Today</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-brand-600">{user.dailyMinutesGoal}</div>
              <div className="text-sm text-gray-600">Daily Goal (min)</div>
            </div>
            <div className="card p-4">
              <div className="text-2xl font-bold text-brand-600">{stats.estimatedMinutes}</div>
              <div className="text-sm text-gray-600">Est. Time</div>
            </div>
          </div>
        </>
      )}

      {screen === 'review' && <ReviewSession onComplete={() => setScreen('home')} />}

      {screen === 'lessons' && (
        <LessonBrowser onBack={() => setScreen('home')} onLessonStart={() => setScreen('home')} />
      )}
    </div>
  );
}
