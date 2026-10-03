import { toHiragana, toKatakana, isHiragana, isKatakana } from 'wanakana';

export function convertRomajiToKana(romaji: string): string {
  return toHiragana(romaji);
}

export function convertRomajiToKatakana(romaji: string): string {
  return toKatakana(romaji);
}

export function normalizeKana(text: string): string {
  return text.replace(/\s/g, '');
}

export function isValidKanaInput(input: string): boolean {
  const trimmed = normalizeKana(input);
  return trimmed.length > 0 && (isHiragana(trimmed) || isKatakana(trimmed) || /^[a-zA-Z-]+$/.test(trimmed));
}

export function compareAnswers(userAnswer: string, correctAnswer: string): boolean {
  const normalize = (s: string) => normalizeKana(toHiragana(s.toLowerCase()));
  return normalize(userAnswer) === normalize(correctAnswer);
}

export function addFurigana(kanji: string, furigana: string): string {
  return `<ruby>${kanji}<rt>${furigana}</rt></ruby>`;
}
