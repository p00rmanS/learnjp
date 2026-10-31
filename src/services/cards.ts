import { db } from '@/db';
import { initializeCard } from '@/services/fsrsService';
import type { CardType, Item } from '@/types';

export async function addItemsToReview(userId: string, items: Item[], cardType: CardType): Promise<number> {
  if (items.length === 0) return 0;

  const existing = await db.cards
    .where('itemId')
    .anyOf(items.map((item) => item.id))
    .filter((card) => card.userId === userId && card.cardType === cardType)
    .toArray();
  const alreadyAdded = new Set(existing.map((card) => card.itemId));

  const fresh = items
    .filter((item) => !alreadyAdded.has(item.id))
    .map((item) => ({
      id: `${userId}:${item.id}:${cardType}`,
      userId,
      itemId: item.id,
      cardType,
      fsrsState: initializeCard(),
      createdAt: new Date(),
    }));

  await db.cards.bulkAdd(fresh);
  return fresh.length;
}
