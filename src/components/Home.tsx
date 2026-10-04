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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {screen === 'home' && (
          <>
            {/* Header with hero section */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 mb-6 shadow-lg">
                <h1 className="text-5xl sm:text-7xl font-bold jp-text bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  道
                </h1>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Michi</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-3">
                Japanese from Zero to JLPT N1
              </p>
              <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
                Master grammar, kanji, and vocabulary through spaced repetition and structured learning
              </p>
            </div>

            {/* Daily plan card */}
            <div className="mb-8 sm:mb-10">
              <DailyPlan stats={stats} />
            </div>

            {/* Action buttons - award-winning design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-12">
              <button
                onClick={() => setScreen('lessons')}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8 text-white font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-2xl sm:text-3xl">📚</span>
                  <span>Browse Lessons</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"></div>
              </button>

              <button
                onClick={startReview}
                disabled={stats.total === 0}
                className={`group relative overflow-hidden rounded-2xl p-6 sm:p-8 font-bold text-lg sm:text-xl transition-all duration-300 transform ${
                  stats.total > 0
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-2xl hover:scale-105 active:scale-95'
                    : 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 cursor-not-allowed opacity-60'
                }`}
              >
                <div
                  className={`absolute inset-0 ${
                    stats.total > 0 ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : ''
                  } opacity-0 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-2xl sm:text-3xl">{stats.total > 0 ? '✅' : '⏸️'}</span>
                  <span>{stats.total > 0 ? 'Start Reviews' : 'All Caught Up'}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"></div>
              </button>
            </div>

            {/* Stats grid - polished */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
              <div className="card p-4 sm:p-6 text-center hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-default">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 font-bold text-lg sm:text-2xl mb-3">
                  {stats.total}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Due Today</div>
              </div>

              <div className="card p-4 sm:p-6 text-center hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-default">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700 font-bold text-lg sm:text-2xl mb-3">
                  {user.dailyMinutesGoal}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Daily Goal</div>
              </div>

              <div className="card p-4 sm:p-6 text-center hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-default">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-200 text-green-700 font-bold text-lg sm:text-2xl mb-3">
                  {stats.estimatedMinutes}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Est. Time</div>
              </div>
            </div>

            {/* Learning path teaser */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border-2 border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Your Learning Path</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-500"></div>
                </div>
                <span className="text-sm font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  0%
                </span>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Stage 0 → N5 → N4 → N3 → N2 → N1
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Complete each level to unlock the next. Master kana, grammar, vocabulary, and reading comprehension step by step.
              </p>
            </div>

            {/* Footer motivational text */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600">
                💪 <span className="font-semibold">Ready to start learning?</span> Click "Browse Lessons" to begin with Stage 0 (Hiragana & Katakana).
              </p>
            </div>
          </>
        )}

        {screen === 'review' && <ReviewSession onComplete={() => setScreen('home')} />}

        {screen === 'lessons' && (
          <LessonBrowser onBack={() => setScreen('home')} onLessonStart={() => setScreen('home')} />
        )}
      </div>
    </div>
  );
}
