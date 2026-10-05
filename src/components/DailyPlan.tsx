interface DailyPlanProps {
  stats: {
    total: number;
    new: number;
    learning: number;
    review: number;
    estimatedMinutes: number;
  };
  learnedKana: number;
  totalKana: number;
  onStartReview: () => void;
  onOpenLessons: () => void;
}

export default function DailyPlan({
  stats,
  learnedKana,
  totalKana,
  onStartReview,
  onOpenLessons,
}: DailyPlanProps) {
  const percent = totalKana ? Math.round((learnedKana / totalKana) * 100) : 0;

  return (
    <section className="card p-6 sm:p-8">
      <p className="label mb-1">Today</p>
      {stats.total > 0 ? (
        <>
          <h2 className="text-2xl font-semibold">{stats.total} cards to review</h2>
          <p className="text-stone-500 mt-1">About {stats.estimatedMinutes} min</p>
          <button onClick={onStartReview} className="btn-primary mt-6">
            Start review
          </button>
        </>
      ) : learnedKana > 0 ? (
        <>
          <h2 className="text-2xl font-semibold">Nothing due right now</h2>
          <p className="text-stone-500 mt-1">Learn a few more kana while you are here.</p>
          <button onClick={onOpenLessons} className="btn-primary mt-6">
            Continue lessons
          </button>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold">Start with hiragana</h2>
          <p className="text-stone-500 mt-1">
            Learn a few characters at a time. Each one you learn is added to your review queue.
          </p>
          <button onClick={onOpenLessons} className="btn-primary mt-6">
            Begin lesson 1
          </button>
        </>
      )}

      <div className="mt-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-stone-600">Kana learned</span>
          <span className="tabular-nums text-stone-500">
            {learnedKana} / {totalKana}
          </span>
        </div>
        <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
          <div className="h-full bg-brand-600 rounded-full transition-all" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </section>
  );
}
