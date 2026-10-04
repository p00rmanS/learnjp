interface DailyPlanProps {
  stats: {
    total: number;
    new: number;
    learning: number;
    review: number;
    estimatedMinutes: number;
  };
  onStartReview?: () => void;
}

export default function DailyPlan({ stats }: DailyPlanProps) {
  const getMotivationalMessage = () => {
    if (stats.total === 0) return '✨ All caught up! Take a well-deserved break.';
    if (stats.total <= 5) return '🎯 Just a quick session away from perfection!';
    if (stats.total <= 15) return '📖 Good study session ahead.';
    return '💯 Plenty to review today. Let\'s go!';
  };

  const getProgressColor = () => {
    if (stats.total === 0) return 'from-green-500 to-emerald-500';
    if (stats.total <= 10) return 'from-blue-500 to-indigo-500';
    return 'from-orange-500 to-red-500';
  };

  return (
    <div className="card p-6 sm:p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Today's Plan</h2>
        <div className="text-4xl">📋</div>
      </div>

      {/* Review stats cards */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <p className="text-xs text-gray-600 font-medium">Reviews due</p>
              <p className="text-lg font-bold text-gray-900">{stats.total} cards</p>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="text-sm font-bold text-blue-700">{stats.total}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-green-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="text-2xl">⏱️</div>
            <div>
              <p className="text-xs text-gray-600 font-medium">Estimated time</p>
              <p className="text-lg font-bold text-gray-900">~{stats.estimatedMinutes} min</p>
            </div>
          </div>
          <div className="text-right text-sm">
            <p className="text-gray-600 font-medium">{stats.estimatedMinutes > 0 ? 'Doable!' : 'Ready when you are!'}</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">Daily Progress</span>
          <span className="text-xs font-bold text-gray-600">
            {stats.total === 0 ? '100%' : `${Math.max(10, Math.min(90, Math.floor((stats.total / 50) * 100)))}%`}
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getProgressColor()} transition-all duration-500`}
            style={{
              width: `${stats.total === 0 ? 100 : Math.max(10, Math.min(90, Math.floor((stats.total / 50) * 100)))}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Motivational message */}
      <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-200">
        <p className="text-sm sm:text-base text-center text-gray-800 font-medium">
          {getMotivationalMessage()}
        </p>
      </div>
    </div>
  );
}
