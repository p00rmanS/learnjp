import { DAILY_XP_GOAL, type ProgressSummary } from '@/services/progress';

interface GrowthPanelProps {
  summary: ProgressSummary;
  totalUnits: number;
  reviewsDue: number;
  onReview: () => void;
}

const WEEKDAY = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function GrowthPanel({ summary, totalUnits, reviewsDue, onReview }: GrowthPanelProps) {
  const goalRatio = Math.min(1, summary.todayXp / DAILY_XP_GOAL);
  const pathRatio = totalUnits === 0 ? 0 : summary.completedUnitIds.length / totalUnits;
  const goalMet = summary.todayXp >= DAILY_XP_GOAL;

  return (
    <div className="grid gap-5 md:grid-cols-3">
      <section className="surface relative overflow-hidden p-7 md:col-span-2">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-center gap-4">
            <FlameIcon lit={summary.streak > 0} />
            <div>
              <p className="display text-5xl tabular-nums leading-none">{summary.streak}</p>
              <p className="mt-1 text-sm text-ink-2">day streak</p>
            </div>
          </div>

          <div className="text-right">
            <p className="eyebrow">Freeze shields</p>
            <div className="mt-2 flex justify-end gap-1.5">
              {Array.from({ length: 2 }, (_, i) => (
                <span
                  key={i}
                  className={`flex h-9 w-8 items-center justify-center rounded-lg ${
                    i < summary.freezes ? 'bg-ai-600 text-paper-card shadow-card' : 'bg-paper-deep text-ink-3 ring-1 ring-ink-line'
                  }`}
                  aria-hidden="true"
                >
                  <ShieldIcon />
                </span>
              ))}
            </div>
            <p className="mt-2 max-w-[13rem] text-xs text-ink-3">
              A shield saves your streak on a day you miss. You earn one every 7 days.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-7 gap-2">
          {summary.week.map((day) => {
            const weekday = WEEKDAY[new Date(day.date + 'T00:00:00').getDay()];
            return (
              <div key={day.date} className="flex flex-col items-center gap-2">
                <span className="text-[11px] font-semibold text-ink-3">{weekday}</span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${
                    day.active
                      ? 'bg-shu-500 text-paper-card shadow-card'
                      : day.isToday
                        ? 'ring-2 ring-ai-500 ring-offset-2 ring-offset-paper-card'
                        : 'bg-paper-deep ring-1 ring-ink-line'
                  }`}
                  aria-label={`${day.date}${day.active ? ', active' : ''}`}
                >
                  {day.active ? <CheckIcon /> : null}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-[15px] text-ink-2">
          {summary.activeToday
            ? 'Streak saved for today. Come back tomorrow to keep it going.'
            : reviewsDue > 0
              ? `Do one review to keep your ${summary.streak}-day streak alive.`
              : 'Learn one new lesson to start today’s streak.'}
        </p>
        {!summary.activeToday && reviewsDue > 0 && (
          <button onClick={onReview} className="btn-ink mt-5">
            Review {reviewsDue} {reviewsDue === 1 ? 'card' : 'cards'}
          </button>
        )}
      </section>

      <section className="surface flex flex-col justify-between p-7">
        <div>
          <p className="eyebrow">Today’s goal</p>
          <div className="mt-5 flex items-center gap-5">
            <Ring ratio={goalRatio} done={goalMet} />
            <div>
              <p className="display text-2xl tabular-nums">
                {summary.todayXp}
                <span className="text-base text-ink-3"> / {DAILY_XP_GOAL}</span>
              </p>
              <p className="text-sm text-ink-2">{goalMet ? 'Goal reached. Nicely done!' : 'XP earned today'}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-semibold">Level {summary.level}</span>
              <span className="tabular-nums text-ink-3">{summary.totalXp} XP total</span>
            </div>
            <Bar ratio={summary.levelProgress} />
          </div>
          <div>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-semibold">N5 path</span>
              <span className="tabular-nums text-ink-3">
                {summary.completedUnitIds.length} / {totalUnits} units
              </span>
            </div>
            <Bar ratio={pathRatio} tone="shu" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Bar({ ratio, tone = 'ai' }: { ratio: number; tone?: 'ai' | 'shu' }) {
  return (
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-paper-deep">
      <div
        className={`h-full rounded-full transition-[width] duration-700 ease-out ${tone === 'shu' ? 'bg-shu-500' : 'bg-ai-600'}`}
        style={{ width: `${Math.round(ratio * 100)}%` }}
      />
    </div>
  );
}

function Ring({ ratio, done }: { ratio: number; done: boolean }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" aria-hidden="true" className="shrink-0 -rotate-90">
      <circle cx="38" cy="38" r={radius} fill="none" className="stroke-paper-deep" strokeWidth="7" />
      <circle
        cx="38"
        cy="38"
        r={radius}
        fill="none"
        className={`${done ? 'stroke-matcha-500' : 'stroke-ai-600'} transition-[stroke-dashoffset] duration-700 ease-out`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - ratio)}
      />
    </svg>
  );
}

function FlameIcon({ lit }: { lit: boolean }) {
  return (
    <span
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${lit ? 'bg-shu-500/10' : 'bg-paper-deep'}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className={`h-8 w-8 ${lit ? 'text-shu-500' : 'text-ink-3'}`} fill="currentColor">
        <path d="M12 2c.6 3.2 2.9 4.8 4.4 6.9C18 10.9 19 12.7 19 15a7 7 0 0 1-14 0c0-2.9 1.6-4.7 3-6.3.3 1.6 1 2.8 2.2 3.5C10.1 8.2 10.2 5 12 2z" />
      </svg>
    </span>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5l5.5 2v4.3c0 3.4-2.3 5.9-5.5 6.7-3.2-.8-5.5-3.3-5.5-6.7V3.5L8 1.5z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
