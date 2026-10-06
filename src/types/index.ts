// User
export interface User {
  id: string;
  displayName: string;
  dailyMinutesGoal: number;
  furiganaMode: 'always' | 'unlearned' | 'never';
  createdAt: Date;
  updatedAt: Date;
}

// Levels
export type LevelName = 'stage0' | 'n5' | 'n4' | 'n3' | 'n2' | 'n1';

export interface Level {
  id: string;
  name: LevelName;
  order: number;
  title: string;
  description: string;
}

// Units
export interface Unit {
  id: string;
  levelId: string;
  order: number;
  title: string;
  theme: string;
  description?: string;
}

// Items (learnable things: kana, kanji, vocab, grammar)
export type ItemType = 'kana' | 'kanji' | 'vocab' | 'grammar';

export interface BaseItem {
  id: string;
  type: ItemType;
  unitId: string;
  createdAt: Date;
}

export interface KanaItem extends BaseItem {
  type: 'kana';
  character: string;
  hiragana: string;
  katakana: string;
  romaji: string;
  pronunciation: string;
  strokeCount: number;
  mnemonic?: string;
  /** Taglish explanation of the sound and how to say it */
  taglish?: string;
  /** One practical tip (look-alikes, writing order, usage) */
  tip?: string;
  audioUrl?: string;
}

export interface KanjiItem extends BaseItem {
  type: 'kanji';
  character: string;
  meanings: string[];
  onReading: string[];
  kunReading: string[];
  jlptLevel?: number;
  radicals: string[];
  mnemonic?: string;
  strokeCount: number;
  exampleWords?: string[];
}

export interface VocabItem extends BaseItem {
  type: 'vocab';
  kana: string;
  kanji?: string;
  meanings: string[];
  partOfSpeech: string;
  mnemonic?: string;
  audioUrl?: string;
  exampleSentences?: string[];
}

export interface GrammarItem extends BaseItem {
  type: 'grammar';
  title: string;
  level: number;
  explanation: string;
  exampleSentences: GrammarExample[];
  commonMistakes?: string;
  similarPoints?: string[];
}

export interface GrammarExample {
  japanese: string;
  furigana: string;
  english: string;
  audioUrl?: string;
}

export type Item = KanaItem | KanjiItem | VocabItem | GrammarItem;

// Lessons
export interface Lesson {
  id: string;
  unitId: string;
  order: number;
  itemIds: string[];
  contentMarkdown: string;
}

// Cards (SRS cards derived from items)
export type CardType =
  | 'kana_reading'
  | 'kanji_meaning'
  | 'kanji_reading'
  | 'vocab_meaning'
  | 'vocab_recall_typed'
  | 'grammar_cloze';

export interface Card {
  id: string;
  userId: string;
  itemId: string;
  cardType: CardType;
  fsrsState: FSRSState;
  createdAt: Date;
  lastReviewedAt?: Date;
}

// FSRS State
export interface FSRSState {
  stability: number;
  difficulty: number;
  due: Date;
  reps: number;
  lapses: number;
  state: 'new' | 'learning' | 'review' | 'relearning';
}

// Review Log
export interface ReviewLog {
  id: string;
  cardId: string;
  rating: 1 | 2 | 3 | 4;
  reviewedAt: Date;
  elapsedMillis: number;
  answerGiven?: string;
}

// Reading & Listening
export interface ReadingPassage {
  id: string;
  levelId: string;
  unitId?: string;
  title: string;
  text: string;
  furiganaText: string;
  glossary: Array<{ word: string; meaning: string }>;
  questions?: ComprehensionQuestion[];
}

export interface ListeningClip {
  id: string;
  levelId: string;
  unitId?: string;
  title: string;
  audioUrl: string;
  transcript: string;
  furiganaTranscript: string;
  glossary: Array<{ word: string; meaning: string }>;
  questions?: ComprehensionQuestion[];
}

export interface ComprehensionQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// Mock Exam
export interface MockExam {
  id: string;
  levelId: string;
  sections: ExamSection[];
  timeLimit: number;
}

export interface ExamSection {
  id: string;
  name: string;
  questions: ExamQuestion[];
}

export interface ExamQuestion {
  id: string;
  type: 'vocab' | 'grammar' | 'reading' | 'listening';
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface ExamAttempt {
  id: string;
  userId: string;
  examId: string;
  startedAt: Date;
  completedAt?: Date;
  answers: Record<string, number>;
  scores: Record<string, number>;
}

// Sync metadata (for offline-first)
export interface SyncMetadata {
  lastSyncAt: Date;
  pendingChanges: string[];
  version: number;
}
