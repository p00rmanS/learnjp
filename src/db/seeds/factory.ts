import type { VocabItem } from '@/types';

export const phrase = (
  unitId: string,
  slug: string,
  kana: string,
  romaji: string,
  meanings: string[],
  kanji?: string,
): VocabItem => ({
  id: `vocab-${slug}`,
  type: 'vocab',
  unitId,
  kana,
  kanji,
  romaji,
  meanings,
  partOfSpeech: 'phrase',
  createdAt: new Date(),
});
