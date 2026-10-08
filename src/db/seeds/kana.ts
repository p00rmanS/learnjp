import type { KanaItem, Unit } from '@/types';
import { hiraganaYoon, katakanaYoon, yoonUnits } from './yoon';
import { hiraganaContent, katakanaContent, voicedHiragana, voicedKatakana } from './kanaContent';

// Stage 0 Units structure (12 units total: 6 hiragana + 6 katakana)
export const stage0Units: Unit[] = [
  // Hiragana
  { id: 'stage0-u1', levelId: 'stage0', order: 1, title: 'あ行・か行', theme: 'Hiragana Set 1: Basic rows' },
  { id: 'stage0-u2', levelId: 'stage0', order: 2, title: 'さ行・た行', theme: 'Hiragana Set 2: S & T rows' },
  { id: 'stage0-u3', levelId: 'stage0', order: 3, title: 'な行・は行', theme: 'Hiragana Set 3: N & H rows' },
  { id: 'stage0-u4', levelId: 'stage0', order: 4, title: 'ま行・や行・ら行・わ行', theme: 'Hiragana Set 4: Final rows' },
  { id: 'stage0-u5', levelId: 'stage0', order: 5, title: 'が行・ざ行', theme: 'Hiragana Set 5a: Dakuten (G, Z)' },
  { id: 'stage0-u6', levelId: 'stage0', order: 6, title: 'だ行・ば行・ぱ行', theme: 'Hiragana Set 5b: Dakuten (D, B, P)' },
  // Katakana (same structure)
  { id: 'stage0-u7', levelId: 'stage0', order: 7, title: 'ア行・カ行', theme: 'Katakana Set 1: Basic rows' },
  { id: 'stage0-u8', levelId: 'stage0', order: 8, title: 'サ行・タ行', theme: 'Katakana Set 2: S & T rows' },
  { id: 'stage0-u9', levelId: 'stage0', order: 9, title: 'ナ行・ハ行', theme: 'Katakana Set 3: N & H rows' },
  { id: 'stage0-u10', levelId: 'stage0', order: 10, title: 'マ行・ヤ行・ラ行・ワ行', theme: 'Katakana Set 4: Final rows' },
  { id: 'stage0-u11', levelId: 'stage0', order: 11, title: 'ガ行・ザ行', theme: 'Katakana Set 5a: Dakuten (G, Z)' },
  { id: 'stage0-u12', levelId: 'stage0', order: 12, title: 'ダ行・バ行・パ行', theme: 'Katakana Set 5b: Dakuten (D, B, P)' },
];

// All kana items (hiragana + katakana + variations)
const hiraganaItems: KanaItem[] = [
  // ===== HIRAGANA SET 1: あ行・か行 =====
  // あ行
  { id: 'kana-a', type: 'kana', unitId: 'stage0-u1', character: 'あ', hiragana: 'あ', katakana: 'ア', romaji: 'a', pronunciation: 'ah', strokeCount: 3, mnemonic: 'simple curve, like letter a', createdAt: new Date() },
  { id: 'kana-i', type: 'kana', unitId: 'stage0-u1', character: 'い', hiragana: 'い', katakana: 'イ', romaji: 'i', pronunciation: 'ee', strokeCount: 2, mnemonic: 'two vertical lines', createdAt: new Date() },
  { id: 'kana-u', type: 'kana', unitId: 'stage0-u1', character: 'う', hiragana: 'う', katakana: 'ウ', romaji: 'u', pronunciation: 'oo', strokeCount: 2, mnemonic: 'hook shape', createdAt: new Date() },
  { id: 'kana-e', type: 'kana', unitId: 'stage0-u1', character: 'え', hiragana: 'え', katakana: 'エ', romaji: 'e', pronunciation: 'eh', strokeCount: 3, mnemonic: 'looks like grass', createdAt: new Date() },
  { id: 'kana-o', type: 'kana', unitId: 'stage0-u1', character: 'お', hiragana: 'お', katakana: 'オ', romaji: 'o', pronunciation: 'oh', strokeCount: 3, mnemonic: 'large circle', createdAt: new Date() },
  // か行
  { id: 'kana-ka', type: 'kana', unitId: 'stage0-u1', character: 'か', hiragana: 'か', katakana: 'カ', romaji: 'ka', pronunciation: 'kah', strokeCount: 3, mnemonic: 'looks like a key', createdAt: new Date() },
  { id: 'kana-ki', type: 'kana', unitId: 'stage0-u1', character: 'き', hiragana: 'き', katakana: 'キ', romaji: 'ki', pronunciation: 'kee', strokeCount: 3, mnemonic: 'looks like a tree', createdAt: new Date() },
  { id: 'kana-ku', type: 'kana', unitId: 'stage0-u1', character: 'く', hiragana: 'く', katakana: 'ク', romaji: 'ku', pronunciation: 'koo', strokeCount: 1, mnemonic: 'one curved line', createdAt: new Date() },
  { id: 'kana-ke', type: 'kana', unitId: 'stage0-u1', character: 'け', hiragana: 'け', katakana: 'ケ', romaji: 'ke', pronunciation: 'keh', strokeCount: 3, mnemonic: 'looks like a hand', createdAt: new Date() },
  { id: 'kana-ko', type: 'kana', unitId: 'stage0-u1', character: 'こ', hiragana: 'こ', katakana: 'コ', romaji: 'ko', pronunciation: 'koh', strokeCount: 3, mnemonic: 'looks like a cross', createdAt: new Date() },

  // ===== HIRAGANA SET 2: さ行・た行 =====
  // さ行
  { id: 'kana-sa', type: 'kana', unitId: 'stage0-u2', character: 'さ', hiragana: 'さ', katakana: 'サ', romaji: 'sa', pronunciation: 'sah', strokeCount: 3, mnemonic: 'three curved lines', createdAt: new Date() },
  { id: 'kana-si', type: 'kana', unitId: 'stage0-u2', character: 'し', hiragana: 'し', katakana: 'シ', romaji: 'shi', pronunciation: 'shee', strokeCount: 1, mnemonic: 'one line (also called "si")', createdAt: new Date() },
  { id: 'kana-su', type: 'kana', unitId: 'stage0-u2', character: 'す', hiragana: 'す', katakana: 'ス', romaji: 'su', pronunciation: 'soo', strokeCount: 2, mnemonic: 'two curved lines', createdAt: new Date() },
  { id: 'kana-se', type: 'kana', unitId: 'stage0-u2', character: 'せ', hiragana: 'せ', katakana: 'セ', romaji: 'se', pronunciation: 'seh', strokeCount: 3, mnemonic: 'looks like a fork', createdAt: new Date() },
  { id: 'kana-so', type: 'kana', unitId: 'stage0-u2', character: 'そ', hiragana: 'そ', katakana: 'ソ', romaji: 'so', pronunciation: 'soh', strokeCount: 2, mnemonic: 'looks like grass', createdAt: new Date() },
  // た行
  { id: 'kana-ta', type: 'kana', unitId: 'stage0-u2', character: 'た', hiragana: 'た', katakana: 'タ', romaji: 'ta', pronunciation: 'tah', strokeCount: 2, mnemonic: 'two lines forming a T', createdAt: new Date() },
  { id: 'kana-ti', type: 'kana', unitId: 'stage0-u2', character: 'ち', hiragana: 'ち', katakana: 'チ', romaji: 'chi', pronunciation: 'chee', strokeCount: 2, mnemonic: 'looks like a hook (also "ti")', createdAt: new Date() },
  { id: 'kana-tu', type: 'kana', unitId: 'stage0-u2', character: 'つ', hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', pronunciation: 'tsoo', strokeCount: 2, mnemonic: 'two curved lines (also "tu")', createdAt: new Date() },
  { id: 'kana-te', type: 'kana', unitId: 'stage0-u2', character: 'て', hiragana: 'て', katakana: 'テ', romaji: 'te', pronunciation: 'teh', strokeCount: 3, mnemonic: 'looks like a T', createdAt: new Date() },
  { id: 'kana-to', type: 'kana', unitId: 'stage0-u2', character: 'と', hiragana: 'と', katakana: 'ト', romaji: 'to', pronunciation: 'toh', strokeCount: 2, mnemonic: 'one stroke down then right', createdAt: new Date() },

  // ===== HIRAGANA SET 3: な行・は行 =====
  // な行
  { id: 'kana-na', type: 'kana', unitId: 'stage0-u3', character: 'な', hiragana: 'な', katakana: 'ナ', romaji: 'na', pronunciation: 'nah', strokeCount: 2, mnemonic: 'looks like a flag', createdAt: new Date() },
  { id: 'kana-ni', type: 'kana', unitId: 'stage0-u3', character: 'に', hiragana: 'に', katakana: 'ニ', romaji: 'ni', pronunciation: 'nee', strokeCount: 2, mnemonic: 'two horizontal lines', createdAt: new Date() },
  { id: 'kana-nu', type: 'kana', unitId: 'stage0-u3', character: 'ぬ', hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', pronunciation: 'noo', strokeCount: 2, mnemonic: 'looks like a "nu"', createdAt: new Date() },
  { id: 'kana-ne', type: 'kana', unitId: 'stage0-u3', character: 'ね', hiragana: 'ね', katakana: 'ネ', romaji: 'ne', pronunciation: 'neh', strokeCount: 3, mnemonic: 'looks like a plant', createdAt: new Date() },
  { id: 'kana-no', type: 'kana', unitId: 'stage0-u3', character: 'の', hiragana: 'の', katakana: 'ノ', romaji: 'no', pronunciation: 'noh', strokeCount: 1, mnemonic: 'one stroke', createdAt: new Date() },
  // は行
  { id: 'kana-ha', type: 'kana', unitId: 'stage0-u3', character: 'は', hiragana: 'は', katakana: 'ハ', romaji: 'ha', pronunciation: 'hah', strokeCount: 3, mnemonic: 'looks like a fence', createdAt: new Date() },
  { id: 'kana-hi', type: 'kana', unitId: 'stage0-u3', character: 'ひ', hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', pronunciation: 'hee', strokeCount: 2, mnemonic: 'two parallel lines', createdAt: new Date() },
  { id: 'kana-hu', type: 'kana', unitId: 'stage0-u3', character: 'ふ', hiragana: 'ふ', katakana: 'フ', romaji: 'fu', pronunciation: 'foo', strokeCount: 2, mnemonic: 'looks like an "f" (also "hu")', createdAt: new Date() },
  { id: 'kana-he', type: 'kana', unitId: 'stage0-u3', character: 'へ', hiragana: 'へ', katakana: 'ヘ', romaji: 'he', pronunciation: 'heh', strokeCount: 1, mnemonic: 'one curved line', createdAt: new Date() },
  { id: 'kana-ho', type: 'kana', unitId: 'stage0-u3', character: 'ほ', hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', pronunciation: 'hoh', strokeCount: 4, mnemonic: 'looks like a house', createdAt: new Date() },

  // ===== HIRAGANA SET 4: ま行・や行・ら行・わ行 =====
  // ま行
  { id: 'kana-ma', type: 'kana', unitId: 'stage0-u4', character: 'ま', hiragana: 'ま', katakana: 'マ', romaji: 'ma', pronunciation: 'mah', strokeCount: 3, mnemonic: 'looks like an "M"', createdAt: new Date() },
  { id: 'kana-mi', type: 'kana', unitId: 'stage0-u4', character: 'み', hiragana: 'み', katakana: 'ミ', romaji: 'mi', pronunciation: 'mee', strokeCount: 3, mnemonic: 'looks like three lines', createdAt: new Date() },
  { id: 'kana-mu', type: 'kana', unitId: 'stage0-u4', character: 'む', hiragana: 'む', katakana: 'ム', romaji: 'mu', pronunciation: 'moo', strokeCount: 2, mnemonic: 'looks like a catapult', createdAt: new Date() },
  { id: 'kana-me', type: 'kana', unitId: 'stage0-u4', character: 'め', hiragana: 'め', katakana: 'メ', romaji: 'me', pronunciation: 'meh', strokeCount: 2, mnemonic: 'looks like an "M" (me = eye)', createdAt: new Date() },
  { id: 'kana-mo', type: 'kana', unitId: 'stage0-u4', character: 'も', hiragana: 'も', katakana: 'モ', romaji: 'mo', pronunciation: 'moh', strokeCount: 3, mnemonic: 'looks like a plant', createdAt: new Date() },
  // や行
  { id: 'kana-ya', type: 'kana', unitId: 'stage0-u4', character: 'や', hiragana: 'や', katakana: 'ヤ', romaji: 'ya', pronunciation: 'yah', strokeCount: 2, mnemonic: 'looks like a "Y"', createdAt: new Date() },
  { id: 'kana-yu', type: 'kana', unitId: 'stage0-u4', character: 'ゆ', hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', pronunciation: 'yoo', strokeCount: 2, mnemonic: 'looks like a "Y" variant', createdAt: new Date() },
  { id: 'kana-yo', type: 'kana', unitId: 'stage0-u4', character: 'よ', hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', pronunciation: 'yoh', strokeCount: 2, mnemonic: 'looks like horizontal lines', createdAt: new Date() },
  // ら行
  { id: 'kana-ra', type: 'kana', unitId: 'stage0-u4', character: 'ら', hiragana: 'ら', katakana: 'ラ', romaji: 'ra', pronunciation: 'rah', strokeCount: 2, mnemonic: 'looks like an "R"', createdAt: new Date() },
  { id: 'kana-ri', type: 'kana', unitId: 'stage0-u4', character: 'り', hiragana: 'り', katakana: 'リ', romaji: 'ri', pronunciation: 'ree', strokeCount: 2, mnemonic: 'looks like vertical lines', createdAt: new Date() },
  { id: 'kana-ru', type: 'kana', unitId: 'stage0-u4', character: 'る', hiragana: 'る', katakana: 'ル', romaji: 'ru', pronunciation: 'roo', strokeCount: 1, mnemonic: 'one curved line', createdAt: new Date() },
  { id: 'kana-re', type: 'kana', unitId: 'stage0-u4', character: 'れ', hiragana: 'れ', katakana: 'レ', romaji: 're', pronunciation: 'reh', strokeCount: 2, mnemonic: 'looks like an "L"', createdAt: new Date() },
  { id: 'kana-ro', type: 'kana', unitId: 'stage0-u4', character: 'ろ', hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', pronunciation: 'roh', strokeCount: 4, mnemonic: 'looks like a box', createdAt: new Date() },
  // わ行
  { id: 'kana-wa', type: 'kana', unitId: 'stage0-u4', character: 'わ', hiragana: 'わ', katakana: 'ワ', romaji: 'wa', pronunciation: 'wah', strokeCount: 4, mnemonic: 'looks like a crown', createdAt: new Date() },
  { id: 'kana-wo', type: 'kana', unitId: 'stage0-u4', character: 'を', hiragana: 'を', katakana: 'ヲ', romaji: 'wo', pronunciation: 'oh', strokeCount: 4, mnemonic: 'looks like "wa" variant (object particle)', createdAt: new Date() },
  { id: 'kana-n', type: 'kana', unitId: 'stage0-u4', character: 'ん', hiragana: 'ん', katakana: 'ン', romaji: 'n', pronunciation: 'ng', strokeCount: 1, mnemonic: 'one curved line (ending only)', createdAt: new Date() },

  // ===== HIRAGANA SET 5A: ガ行・ザ行 (Dakuten) =====
  { id: 'kana-ga', type: 'kana', unitId: 'stage0-u5', character: 'が', hiragana: 'が', katakana: 'ガ', romaji: 'ga', pronunciation: 'gah', strokeCount: 3, mnemonic: 'か + dakuten (voiced)', createdAt: new Date() },
  { id: 'kana-gi', type: 'kana', unitId: 'stage0-u5', character: 'ぎ', hiragana: 'ぎ', katakana: 'ギ', romaji: 'gi', pronunciation: 'gee', strokeCount: 3, mnemonic: 'き + dakuten', createdAt: new Date() },
  { id: 'kana-gu', type: 'kana', unitId: 'stage0-u5', character: 'ぐ', hiragana: 'ぐ', katakana: 'グ', romaji: 'gu', pronunciation: 'goo', strokeCount: 2, mnemonic: 'く + dakuten', createdAt: new Date() },
  { id: 'kana-ge', type: 'kana', unitId: 'stage0-u5', character: 'げ', hiragana: 'げ', katakana: 'ゲ', romaji: 'ge', pronunciation: 'geh', strokeCount: 3, mnemonic: 'け + dakuten', createdAt: new Date() },
  { id: 'kana-go', type: 'kana', unitId: 'stage0-u5', character: 'ご', hiragana: 'ご', katakana: 'ゴ', romaji: 'go', pronunciation: 'goh', strokeCount: 3, mnemonic: 'こ + dakuten', createdAt: new Date() },
  // ざ行
  { id: 'kana-za', type: 'kana', unitId: 'stage0-u5', character: 'ざ', hiragana: 'ざ', katakana: 'ザ', romaji: 'za', pronunciation: 'zah', strokeCount: 3, mnemonic: 'さ + dakuten', createdAt: new Date() },
  { id: 'kana-zi', type: 'kana', unitId: 'stage0-u5', character: 'じ', hiragana: 'じ', katakana: 'ジ', romaji: 'ji', pronunciation: 'jee', strokeCount: 2, mnemonic: 'し + dakuten (also zi)', createdAt: new Date() },
  { id: 'kana-zu', type: 'kana', unitId: 'stage0-u5', character: 'ず', hiragana: 'ず', katakana: 'ズ', romaji: 'zu', pronunciation: 'zoo', strokeCount: 2, mnemonic: 'す + dakuten', createdAt: new Date() },
  { id: 'kana-ze', type: 'kana', unitId: 'stage0-u5', character: 'ぜ', hiragana: 'ぜ', katakana: 'ゼ', romaji: 'ze', pronunciation: 'zeh', strokeCount: 3, mnemonic: 'せ + dakuten', createdAt: new Date() },
  { id: 'kana-zo', type: 'kana', unitId: 'stage0-u5', character: 'ぞ', hiragana: 'ぞ', katakana: 'ゾ', romaji: 'zo', pronunciation: 'zoh', strokeCount: 2, mnemonic: 'そ + dakuten', createdAt: new Date() },

  // ===== HIRAGANA SET 5B: ダ行・バ行・パ行 (Dakuten & Handakuten) =====
  // だ行
  { id: 'kana-da', type: 'kana', unitId: 'stage0-u6', character: 'だ', hiragana: 'だ', katakana: 'ダ', romaji: 'da', pronunciation: 'dah', strokeCount: 2, mnemonic: 'た + dakuten', createdAt: new Date() },
  { id: 'kana-di', type: 'kana', unitId: 'stage0-u6', character: 'ぢ', hiragana: 'ぢ', katakana: 'ヂ', romaji: 'di', pronunciation: 'dee', strokeCount: 2, mnemonic: 'ち + dakuten (rarely used)', createdAt: new Date() },
  { id: 'kana-du', type: 'kana', unitId: 'stage0-u6', character: 'づ', hiragana: 'づ', katakana: 'ヅ', romaji: 'du', pronunciation: 'doo', strokeCount: 2, mnemonic: 'つ + dakuten (rarely used)', createdAt: new Date() },
  { id: 'kana-de', type: 'kana', unitId: 'stage0-u6', character: 'で', hiragana: 'で', katakana: 'デ', romaji: 'de', pronunciation: 'deh', strokeCount: 3, mnemonic: 'て + dakuten', createdAt: new Date() },
  { id: 'kana-do', type: 'kana', unitId: 'stage0-u6', character: 'ど', hiragana: 'ど', katakana: 'ド', romaji: 'do', pronunciation: 'doh', strokeCount: 2, mnemonic: 'と + dakuten', createdAt: new Date() },
  // ば行
  { id: 'kana-ba', type: 'kana', unitId: 'stage0-u6', character: 'ば', hiragana: 'ば', katakana: 'バ', romaji: 'ba', pronunciation: 'bah', strokeCount: 3, mnemonic: 'は + dakuten', createdAt: new Date() },
  { id: 'kana-bi', type: 'kana', unitId: 'stage0-u6', character: 'び', hiragana: 'び', katakana: 'ビ', romaji: 'bi', pronunciation: 'bee', strokeCount: 2, mnemonic: 'ひ + dakuten', createdAt: new Date() },
  { id: 'kana-bu', type: 'kana', unitId: 'stage0-u6', character: 'ぶ', hiragana: 'ぶ', katakana: 'ブ', romaji: 'bu', pronunciation: 'boo', strokeCount: 2, mnemonic: 'ふ + dakuten', createdAt: new Date() },
  { id: 'kana-be', type: 'kana', unitId: 'stage0-u6', character: 'べ', hiragana: 'べ', katakana: 'ベ', romaji: 'be', pronunciation: 'beh', strokeCount: 1, mnemonic: 'へ + dakuten', createdAt: new Date() },
  { id: 'kana-bo', type: 'kana', unitId: 'stage0-u6', character: 'ぼ', hiragana: 'ぼ', katakana: 'ボ', romaji: 'bo', pronunciation: 'boh', strokeCount: 4, mnemonic: 'ほ + dakuten', createdAt: new Date() },
  // ぱ行
  { id: 'kana-pa', type: 'kana', unitId: 'stage0-u6', character: 'ぱ', hiragana: 'ぱ', katakana: 'パ', romaji: 'pa', pronunciation: 'pah', strokeCount: 3, mnemonic: 'は + handakuten', createdAt: new Date() },
  { id: 'kana-pi', type: 'kana', unitId: 'stage0-u6', character: 'ぴ', hiragana: 'ぴ', katakana: 'ピ', romaji: 'pi', pronunciation: 'pee', strokeCount: 2, mnemonic: 'ひ + handakuten', createdAt: new Date() },
  { id: 'kana-pu', type: 'kana', unitId: 'stage0-u6', character: 'ぷ', hiragana: 'ぷ', katakana: 'プ', romaji: 'pu', pronunciation: 'poo', strokeCount: 2, mnemonic: 'ふ + handakuten', createdAt: new Date() },
  { id: 'kana-pe', type: 'kana', unitId: 'stage0-u6', character: 'ぺ', hiragana: 'ぺ', katakana: 'ペ', romaji: 'pe', pronunciation: 'peh', strokeCount: 1, mnemonic: 'へ + handakuten', createdAt: new Date() },
  { id: 'kana-po', type: 'kana', unitId: 'stage0-u6', character: 'ぽ', hiragana: 'ぽ', katakana: 'ポ', romaji: 'po', pronunciation: 'poh', strokeCount: 4, mnemonic: 'ほ + handakuten', createdAt: new Date() },

];

// Katakana items mirror the hiragana set; unit N maps to unit N+6.
const katakanaItems: KanaItem[] = hiraganaItems.map((h) => {
  const unitNo = Number(h.unitId.replace('stage0-u', '')) + 6;
  return {
    ...h,
    id: h.id.replace('kana-', 'kata-'),
    unitId: `stage0-u${unitNo}`,
    character: h.katakana,
  };
});

const HIRA_STROKES: Record<string, number> = {
  a: 3, i: 2, u: 2, e: 2, o: 3, ka: 3, ki: 4, ku: 1, ke: 3, ko: 2, sa: 3, si: 1, su: 2, se: 3, so: 1,
  ta: 4, ti: 2, tu: 1, te: 1, to: 2, na: 4, ni: 3, nu: 2, ne: 2, no: 1, ha: 3, hi: 1, hu: 4, he: 1, ho: 4,
  ma: 3, mi: 2, mu: 3, me: 2, mo: 3, ya: 3, yu: 2, yo: 2, ra: 2, ri: 2, ru: 1, re: 2, ro: 1, wa: 2, wo: 3, n: 1,
};
const KATA_STROKES: Record<string, number> = {
  a: 2, i: 2, u: 3, e: 3, o: 3, ka: 2, ki: 3, ku: 2, ke: 3, ko: 2, sa: 3, si: 3, su: 2, se: 2, so: 2,
  ta: 3, ti: 3, tu: 3, te: 3, to: 2, na: 2, ni: 2, nu: 2, ne: 4, no: 1, ha: 2, hi: 2, hu: 1, he: 1, ho: 4,
  ma: 2, mi: 3, mu: 2, me: 2, mo: 3, ya: 2, yu: 2, yo: 3, ra: 2, ri: 2, ru: 2, re: 1, ro: 3, wa: 2, wo: 3, n: 2,
};
// Voiced rows: base kana plus dakuten (2 strokes) or handakuten (1 stroke)
const VOICED_BASE: Record<string, string> = {
  ga: 'ka', gi: 'ki', gu: 'ku', ge: 'ke', go: 'ko', za: 'sa', zi: 'si', zu: 'su', ze: 'se', zo: 'so',
  da: 'ta', di: 'ti', du: 'tu', de: 'te', do: 'to', ba: 'ha', bi: 'hi', bu: 'hu', be: 'he', bo: 'ho',
  pa: 'ha', pi: 'hi', pu: 'hu', pe: 'he', po: 'ho',
};

function strokesFor(key: string, katakana: boolean): number | undefined {
  const t = katakana ? KATA_STROKES : HIRA_STROKES;
  if (t[key] !== undefined) return t[key];
  const base = VOICED_BASE[key];
  if (!base) return undefined;
  return t[base] + (key.startsWith('p') ? 1 : 2);
}

function withContent(item: KanaItem, isKatakana: boolean): KanaItem {
  const key = item.id.replace(/^(kana|kata)-/, '');
  const table = isKatakana
    ? { ...katakanaContent, ...voicedKatakana }
    : { ...hiraganaContent, ...voicedHiragana };
  const strokeCount = strokesFor(key, isKatakana) ?? item.strokeCount;
  const c = table[key];
  if (!c) return { ...item, strokeCount };
  return { ...item, strokeCount, mnemonic: c.m, taglish: c.t, tip: c.p };
}

export const kanaItems: KanaItem[] = [
  ...hiraganaItems.map((i) => withContent(i, false)),
  ...katakanaItems.map((i) => withContent(i, true)),
  ...hiraganaYoon,
  ...katakanaYoon,
];

// Idempotent: safe to run on every start, repairs partially seeded databases.
export async function seedKanaData(db: any) {
  try {
    // Drop stale kana rows from earlier seed versions
    const keep = new Set(kanaItems.map((k) => k.id));
    await db.items.where('type').equals('kana').filter((i: any) => !keep.has(i.id)).delete();
    await db.units.bulkPut([...stage0Units, ...yoonUnits]);
    await db.items.bulkPut(kanaItems);
    return true;
  } catch (error) {
    console.error('Failed to seed kana data:', error);
    return false;
  }
}
