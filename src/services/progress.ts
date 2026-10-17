import { db } from '@/db';
import type { Activity, UnitProgress } from '@/types';

export const DAILY_XP_GOAL = 40;
export const FREEZE_CAPACITY = 2;
export const FREEZE_EVERY_DAYS = 7;
const XP_PER_LEVEL = 100;
const UNIT_COMPLETE_BONUS = 50;
const PASS_RATIO = 0.6;

export type XpSource = 'review' | 'kana' | 'quiz';
const XP_VALUE: Record<XpSource, number> = { review: 10, kana: 5, quiz: 5 };

export function dateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function parseKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Walks every day from the first activity to today.
 * A missed day uses a freeze if one is stored; otherwise the streak resets.
 * Today is never penalised while it is still in progress.
 */
export function computeStreak(activeDays: Set<string>, today: string): { streak: number; freezes: number } {
  if (activeDays.size === 0) return { streak: 0, freezes: 0 };

  const first = [...activeDays].sort()[0];
  let cursor = parseKey(first);
  const end = parseKey(today);
  let streak = 0;
  let freezes = 0;

  while (cursor <= end) {
    const key = dateKey(cursor);
    if (activeDays.has(key)) {
      streak += 1;
      if (streak % FREEZE_EVERY_DAYS === 0 && freezes < FREEZE_CAPACITY) freezes += 1;
    } else if (key !== today) {
      if (freezes > 0) freezes -= 1;
      else streak = 0;
    }
    cursor = addDays(cursor, 1);
  }

  return { streak, freezes };
}

export interface ProgressSummary {
  streak: number;
  freezes: number;
  todayXp: number;
  totalXp: number;
  level: number;
  levelProgress: number;
  week: { date: string; active: boolean; isToday: boolean }[];
  completedUnitIds: string[];
  activeToday: boolean;
}

export async function loadProgressSummary(): Promise<ProgressSummary> {
  const [activities, completed] = await Promise.all([db.activity.toArray(), db.unitProgress.toArray()]);
  const byDate = new Map<string, Activity>(activities.map((a) => [a.date, a]));
  const today = dateKey(new Date());
  const activeDays = new Set(activities.filter((a) => a.xp > 0).map((a) => a.date));
  const { streak, freezes } = computeStreak(activeDays, today);

  const totalXp = activities.reduce((sum, a) => sum + a.xp, 0);
  const todayXp = byDate.get(today)?.xp ?? 0;

  const now = new Date();
  const week = Array.from({ length: 7 }, (_, i) => {
    const date = dateKey(addDays(now, i - 6));
    return { date, active: (byDate.get(date)?.xp ?? 0) > 0, isToday: date === today };
  });

  return {
    streak,
    freezes,
    todayXp,
    totalXp,
    level: Math.floor(totalXp / XP_PER_LEVEL) + 1,
    levelProgress: (totalXp % XP_PER_LEVEL) / XP_PER_LEVEL,
    week,
    completedUnitIds: completed.map((c: UnitProgress) => c.unitId),
    activeToday: todayXp > 0,
  };
}

export async function recordXp(source: XpSource, amount: number = XP_VALUE[source]): Promise<void> {
  const key = dateKey(new Date());
  await db.transaction('rw', db.activity, async () => {
    const row = (await db.activity.get(key)) ?? { date: key, xp: 0, reviews: 0, lessons: 0 };
    await db.activity.put({
      ...row,
      xp: row.xp + amount,
      reviews: row.reviews + (source === 'review' ? 1 : 0),
      lessons: row.lessons + (source === 'kana' ? 1 : 0),
    });
  });
}

export interface UnitResult {
  passed: boolean;
  firstCompletion: boolean;
  xpAwarded: number;
}

export async function completeUnit(unitId: string, correct: number, total: number): Promise<UnitResult> {
  const score = total === 0 ? 0 : correct / total;
  const passed = score >= PASS_RATIO;
  const existing = await db.unitProgress.get(unitId);
  const firstCompletion = passed && !existing;

  let xpAwarded = correct * XP_VALUE.quiz;
  if (firstCompletion) xpAwarded += UNIT_COMPLETE_BONUS;

  await db.transaction('rw', db.unitProgress, db.activity, async () => {
    if (passed || existing) {
      await db.unitProgress.put({
        unitId,
        completedAt: existing?.completedAt ?? new Date(),
        bestScore: Math.max(existing?.bestScore ?? 0, score),
      });
    }
    if (xpAwarded > 0) {
      const key = dateKey(new Date());
      const row = (await db.activity.get(key)) ?? { date: key, xp: 0, reviews: 0, lessons: 0 };
      await db.activity.put({ ...row, xp: row.xp + xpAwarded, lessons: row.lessons + 1 });
    }
  });

  return { passed, firstCompletion, xpAwarded };
}
