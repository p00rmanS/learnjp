const SEED_EPOCH = Date.UTC(2026, 0, 1);

export function withSeedOrder<T extends { createdAt: Date }>(items: T[]): T[] {
  return items.map((item, index) => ({ ...item, createdAt: new Date(SEED_EPOCH + index * 1000) }));
}
