interface DailyPlanProps {
  stats: {
    total: number;
    estimatedMinutes: number;
  };
}

export default function DailyPlan({ stats }: DailyPlanProps) {
  const done = stats.total === 0;
  return (
    <section className="surface relative overflow-hidden p-7 sm:p-9">
      <p className="eyebrow">Today</p>
      <div className="mt-4 flex items-end gap-4">
        <span className="display text-6xl tabular-nums sm:text-7xl">{stats.total}</span>
        <span className="pb-2 text-base text-ink-2">{stats.total === 1 ? 'card due' : 'cards due'}</span>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
        {done
          ? 'Nothing is waiting for you. Learn something new, or come back tomorrow.'
          : `About ${stats.estimatedMinutes} minutes. A short, steady session is better than a long one.`}
      </p>
    </section>
  );
}
