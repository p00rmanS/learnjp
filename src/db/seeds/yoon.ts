import type { KanaItem, Unit } from '@/types';

// Combination kana (yoon): an i-column kana plus a small ya / yu / yo.

interface YoonRow {
  key: string; // romaji consonant used in ids, e.g. "k"
  hira: string; // base hiragana, e.g. "き"
  kata: string;
  romaji: [string, string, string]; // ya, yu, yo
  group: 0 | 1 | 2;
  note: string; // row-specific Taglish tip
}

const HIRA_SMALL = ['ゃ', 'ゅ', 'ょ'];
const KATA_SMALL = ['ャ', 'ュ', 'ョ'];

const ROWS: YoonRow[] = [
  { key: 'k', hira: 'き', kata: 'キ', romaji: ['kya', 'kyu', 'kyo'], group: 0, note: 'Tanggalin ang "i" ng "ki", idikit ang "ya/yu/yo".' },
  { key: 's', hira: 'し', kata: 'シ', romaji: ['sha', 'shu', 'sho'], group: 0, note: 'Dahil "shi" ang し, ang tunog ay "sha, shu, sho" at walang "y".' },
  { key: 't', hira: 'ち', kata: 'チ', romaji: ['cha', 'chu', 'cho'], group: 0, note: 'Dahil "chi" ang ち, ang tunog ay "cha, chu, cho". Parang "cha-cha" sa sayaw.' },
  { key: 'n', hira: 'に', kata: 'ニ', romaji: ['nya', 'nyu', 'nyo'], group: 1, note: 'Parang "nya" sa Tagalog na "nyebe" o "Nyanza"; ang "ny" ay iisang tunog, gaya ng "ñ" sa Spanish.' },
  { key: 'h', hira: 'ひ', kata: 'ヒ', romaji: ['hya', 'hyu', 'hyo'], group: 1, note: 'Hininga muna, tapos "ya". Parang sinasabi mo ang "hi-ya" pero mabilis.' },
  { key: 'm', hira: 'み', kata: 'ミ', romaji: ['mya', 'myu', 'myo'], group: 1, note: 'Parang "mya" sa "myaw" ng pusa.' },
  { key: 'r', hira: 'り', kata: 'リ', romaji: ['rya', 'ryu', 'ryo'], group: 1, note: 'Dampi ang dila (ang Japanese "r") tapos "ya". Madalas sa "ryokou" (biyahe).' },
  { key: 'g', hira: 'ぎ', kata: 'ギ', romaji: ['gya', 'gyu', 'gyo'], group: 2, note: 'Voiced na bersyon ng kya. May dakuten kaya may vibration sa lalamunan.' },
  { key: 'j', hira: 'じ', kata: 'ジ', romaji: ['ja', 'ju', 'jo'], group: 2, note: 'Dahil "ji" ang じ, "ja, ju, jo" ang tunog. Parang "ja" sa "jacket".' },
  { key: 'b', hira: 'び', kata: 'ビ', romaji: ['bya', 'byu', 'byo'], group: 2, note: 'Voiced na bersyon ng hya, may dakuten. Parang "bya" sa "byahe".' },
  { key: 'p', hira: 'ぴ', kata: 'ピ', romaji: ['pya', 'pyu', 'pyo'], group: 2, note: 'May handakuten (゜). "Pya" na mabilis. Madalas sa "happyou" (presentation).' },
];

const I_SOUND: Record<string, string> = {
  k: 'ki', s: 'shi', t: 'chi', n: 'ni', h: 'hi', m: 'mi', r: 'ri', g: 'gi', j: 'ji', b: 'bi', p: 'pi',
};

const GROUP_TITLES: [string, string][] = [
  ['きゃ・しゃ・ちゃ', 'キャ・シャ・チャ'],
  ['にゃ・ひゃ・みゃ・りゃ', 'ニャ・ヒャ・ミャ・リャ'],
  ['ぎゃ・じゃ・びゃ・ぴゃ', 'ギャ・ジャ・ビャ・ピャ'],
];

// Hiragana yoon units are 13-15, katakana yoon units are 16-18.
export const yoonUnits: Unit[] = [
  ...GROUP_TITLES.map(([h], i) => ({
    id: `stage0-u${13 + i}`,
    levelId: 'stage0',
    order: 13 + i,
    title: h,
    theme: `Hiragana combinations ${i + 1}`,
  })),
  ...GROUP_TITLES.map(([, k], i) => ({
    id: `stage0-u${16 + i}`,
    levelId: 'stage0',
    order: 16 + i,
    title: k,
    theme: `Katakana combinations ${i + 1}`,
  })),
];

export const HIRAGANA_UNIT_ORDERS = [1, 2, 3, 4, 5, 6, 13, 14, 15];
export const KATAKANA_UNIT_ORDERS = [7, 8, 9, 10, 11, 12, 16, 17, 18];

function build(isKatakana: boolean): KanaItem[] {
  const items: KanaItem[] = [];
  for (const row of ROWS) {
    const base = isKatakana ? row.kata : row.hira;
    const smalls = isKatakana ? KATA_SMALL : HIRA_SMALL;
    smalls.forEach((small, i) => {
      const romaji = row.romaji[i];
      const character = base + small;
      const sound = ['ya', 'yu', 'yo'][i];
      items.push({
        id: `${isKatakana ? 'kata' : 'kana'}-${romaji}`,
        type: 'kana',
        unitId: `stage0-u${(isKatakana ? 16 : 13) + row.group}`,
        character,
        hiragana: row.hira + HIRA_SMALL[i],
        katakana: row.kata + KATA_SMALL[i],
        romaji,
        pronunciation: romaji,
        strokeCount: 0,
        mnemonic: `${base} + ${small} = ${character}. Pagsamahin ang tunog ng "${base}" at maliit na "${sound}" sa iisang beat.`,
        taglish: `Ito ay ${base} na may maliit na ${small}, kaya "${romaji}", isang beat lang. ${row.note}`,
        tip: `Mahalaga ang laki: ${character} (${romaji}) ay isang beat, pero ${base}${isKatakana ? 'ヤユヨ'[i] : 'やゆよ'[i]} (${I_SOUND[row.key]}-${sound}) ay dalawang beat. Maliit na ${small} ang hanapin.`,
        createdAt: new Date(),
      });
    });
  }
  return items;
}

export const hiraganaYoon = build(false);
export const katakanaYoon = build(true);
