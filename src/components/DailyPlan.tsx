interface DailyPlanProps {
  stats: {
    total: number;
    new: number;
    learning: number;
    review: number;
    estimatedMinutes: number;
  };
  onStartReview: () => void;
}

export default function DailyPlan({ stats, onStartReview }: DailyPlanProps) {
  return (
    <div className="card p-6 mb-8 border-2 border-brand-200">
      <h2 className="text-xl font-bold mb-4">Today's Plan</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
          <span className="text-gray-700">Reviews due</span>
          <span className="text-xl font-bold text-brand-600">{stats.total}</span>
        </div>

        {stats.new > 0 && (
          <div className="flex justify-between items-center p-3 bg-green-50 rounded">
            <span className="text-gray-700">New items</span>
            <span className="font-semibold text-green-600">{stats.new}</span>
          </div>
        )}

        <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
          <span className="text-gray-700">Estimated time</span>
          <span className="font-semibold text-purple-600">~{stats.estimatedMinutes} min</span>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
        <div
          className="bg-brand-600 h-2 transition-all"
          style={{ width: '0%' }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 text-center">
        {stats.total === 0 ? '✨ All caught up! Take a break.' : `Ready to review? ${stats.estimatedMinutes} min of focused study.`}
      </p>
    </div>
  );
}
