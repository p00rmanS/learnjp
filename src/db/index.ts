import Dexie, { Table } from 'dexie';
import type {
  User,
  Level,
  Unit,
  Item,
  Card,
  ReviewLog,
  Lesson,
  ReadingPassage,
  ListeningClip,
  MockExam,
  ExamAttempt,
} from '@/types';

export class MichiDB extends Dexie {
  users!: Table<User>;
  levels!: Table<Level>;
  units!: Table<Unit>;
  items!: Table<Item>;
  lessons!: Table<Lesson>;
  cards!: Table<Card>;
  reviewLogs!: Table<ReviewLog>;
  readingPassages!: Table<ReadingPassage>;
  listeningClips!: Table<ListeningClip>;
  mockExams!: Table<MockExam>;
  examAttempts!: Table<ExamAttempt>;

  constructor() {
    super('michi');
    this.version(1).stores({
      users: 'id',
      levels: 'id, order',
      units: 'id, levelId, order',
      items: 'id, type, unitId',
      lessons: 'id, unitId, order',
      cards: 'id, userId, itemId, [userId+cardType]',
      reviewLogs: 'id, cardId, [cardId+reviewedAt]',
      readingPassages: 'id, levelId, unitId',
      listeningClips: 'id, levelId, unitId',
      mockExams: 'id, levelId',
      examAttempts: 'id, userId, examId',
    });
  }
}

export const db = new MichiDB();

// Initialize default data (levels) on first load
export async function initializeDatabase() {
  const count = await db.levels.count();
  if (count === 0) {
    await db.levels.bulkAdd([
      {
        id: 'stage0',
        name: 'stage0',
        order: 0,
        title: 'Foundations: Hiragana & Katakana',
        description: 'Master kana, pitch accent basics, and sentence structure.',
      },
      {
        id: 'n5',
        name: 'n5',
        order: 1,
        title: 'JLPT N5',
        description: 'Basic sentences, particles, and everyday vocabulary.',
      },
      {
        id: 'n4',
        name: 'n4',
        order: 2,
        title: 'JLPT N4',
        description: 'Verb forms, giving/receiving, simple conditionals.',
      },
      {
        id: 'n3',
        name: 'n3',
        order: 3,
        title: 'JLPT N3',
        description: 'Passive, causative, bridge to advanced grammar.',
      },
      {
        id: 'n2',
        name: 'n2',
        order: 4,
        title: 'JLPT N2',
        description: 'Formal written grammar, news, and opinion.',
      },
      {
        id: 'n1',
        name: 'n1',
        order: 5,
        title: 'JLPT N1',
        description: 'Advanced literary and abstract grammar.',
      },
    ]);

    // Seed kana data (Stage 0)
    const { seedKanaData } = await import('./seeds/kana');
    await seedKanaData(db);
  }
}
