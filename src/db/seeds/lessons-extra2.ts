import type { LessonGuide, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const n5Extra2Units: Unit[] = [
  { id: 'n5-body', levelId: 'n5', order: 21, title: 'Katawan', theme: 'Ulo, mata, kamay, at paano ilarawan ang sarili' },
  { id: 'n5-house', levelId: 'n5', order: 22, title: 'Sa Bahay', theme: 'Mga gamit sa bahay at kung nasaan ang mga ito' },
];

const B = 'n5-body';
const H = 'n5-house';

export const n5Extra2Vocab: VocabItem[] = [
  phrase(B, 'body-atama', 'あたま', 'atama', ['head'], '頭'),
  phrase(B, 'body-kao', 'かお', 'kao', ['face'], '顔'),
  phrase(B, 'body-kami', 'かみ', 'kami', ['hair'], '髪'),
  phrase(B, 'body-me', 'め', 'me', ['eye'], '目'),
  phrase(B, 'body-mimi', 'みみ', 'mimi', ['ear'], '耳'),
  phrase(B, 'body-hana', 'はな', 'hana', ['nose'], '鼻'),
  phrase(B, 'body-kuchi', 'くち', 'kuchi', ['mouth'], '口'),
  phrase(B, 'body-te', 'て', 'te', ['hand / arm'], '手'),
  phrase(B, 'body-ashi', 'あし', 'ashi', ['foot / leg'], '足'),
  phrase(B, 'body-se-takai', 'せがたかいです', 'se ga takai desu', ["I'm tall."], '背が高いです'),

  phrase(H, 'house-ie', 'いえ', 'ie', ['house / home'], '家'),
  phrase(H, 'house-doa', 'ドア', 'doa', ['door']),
  phrase(H, 'house-mado', 'まど', 'mado', ['window'], '窓'),
  phrase(H, 'house-tsukue', 'つくえ', 'tsukue', ['desk'], '机'),
  phrase(H, 'house-isu', 'いす', 'isu', ['chair'], '椅子'),
  phrase(H, 'house-beddo', 'ベッド', 'beddo', ['bed']),
  phrase(H, 'house-reizouko', 'れいぞうこ', 'reizouko', ['refrigerator'], '冷蔵庫'),
  phrase(H, 'house-terebi', 'テレビ', 'terebi', ['television']),
  phrase(H, 'house-denki', 'でんき', 'denki', ['electricity / light'], '電気'),
  phrase(H, 'house-koko-sunde', 'ここにすんでいます', 'koko ni sunde imasu', ['I live here.'], 'ここに住んでいます'),
];

export const n5Extra2Guides: Record<string, LessonGuide> = {
  'n5-body': {
    intro: "Ngayon, matututunan natin ang mga parte ng katawan. Kapag alam mo na ang mga ito, pwede mo nang ilarawan ang sarili mo o sabihin kung saan ka masakit.",
    pronunciation: "Ang 'atama' ay 'ah-tah-mah', at ang 'kami' ay 'kah-mee'. Tandaan na malinaw ang bawat pantig sa Japanese, walang pinagdidikit.",
    proTip: "Para sabihing may mahabang buhok, gamitin ang 'ga': 髪が長いです (kami ga nagai desu). Ang bahaging pinag-uusapan ay may 'ga' o 'wa' pagkatapos.",
  },
  'n5-house': {
    intro: "Bahay, tahanan, at mga gamit dito. Kapag nasa Japan ka at may kasamang host family, ang mga salitang ito ang madalas gamitin.",
    pronunciation: "Ang 'reizouko' ay 'ray-zoh-koh', at ang 'terebi' ay 'teh-reh-bee'. Ang 'ie' ay 'ee-eh' na mabilis, dalawang pantig.",
    proTip: "Para sabihing nasaan ang isang bagay, gamitin ang 'wa doko desu ka': 冷蔵庫はどこですか (reizouko wa doko desu ka). Itinuturo ng 'doko' ang lugar.",
  },
};

export const n5Extra2Stories: Record<string, Story> = {
  'n5-body': {
    title: 'Describing Myself',
    lines: [
      { japanese: '私は背が高いです。', romaji: 'Watashi wa se ga takai desu.', english: 'I am tall.', tl: 'Matangkad ako. Ang "se" ay taas ng katawan, at ang "takai" ay mataas.' },
      { japanese: '髪が長いです。', romaji: 'Kami ga nagai desu.', english: 'My hair is long.', tl: 'Mahaba ang buhok ko. Ang "nagai" ay mahaba.' },
      { japanese: '目が大きいです。', romaji: 'Me ga ookii desu.', english: 'My eyes are big.', tl: 'Malaki ang mata ko. Ang "ookii" ay malaki.' },
      { japanese: '手が痛いです。', romaji: 'Te ga itai desu.', english: 'My hand hurts.', tl: 'Masakit ang kamay ko. Ang "itai" ay masakit.' },
      { japanese: '耳は小さいです。', romaji: 'Mimi wa chiisai desu.', english: 'My ears are small.', tl: 'Maliit ang tenga ko. Ang "chiisai" ay maliit.' },
    ],
  },
  'n5-house': {
    title: 'Welcome Home',
    lines: [
      { japanese: 'ここが私の家です。', romaji: 'Koko ga watashi no ie desu.', english: 'This is my house.', tl: 'Ito ang bahay ko. Ang "koko" ay dito.' },
      { japanese: 'ドアは赤いです。', romaji: 'Doa wa akai desu.', english: 'The door is red.', tl: 'Pula ang pinto. Ang "akai" ay pula.' },
      { japanese: '窓は大きいです。', romaji: 'Mado wa ookii desu.', english: 'The window is big.', tl: 'Malaki ang bintana. Ang "ookii" ay malaki.' },
      { japanese: '机と椅子があります。', romaji: 'Tsukue to isu ga arimasu.', english: 'There is a desk and a chair.', tl: 'May mesa at upuan. Ang "arimasu" ay mayroon para sa mga bagay.' },
      { japanese: '冷蔵庫はどこですか。', romaji: 'Reizouko wa doko desu ka?', english: 'Where is the refrigerator?', tl: 'Nasaan ang ref? Ang "doko" ay saan.' },
    ],
  },
};

export const vocabTaglish2: Record<string, string> = {
  'vocab-body-atama': 'Ulo. Ginagamit para sabihing masakit ang ulo: "atama ga itai".',
  'vocab-body-kao': 'Mukha. Ang "kao" ay pwede ring "ekspresyon".',
  'vocab-body-kami': 'Buhok. Pwede ring sabihing "kami no ke" para sa buhok mismo.',
  'vocab-body-me': 'Mata. Gamitin sa "me ga ookii" para ilarawan ang mata.',
  'vocab-body-mimi': 'Tenga. Ang "mimi" ay parehong salita para sa tenga.',
  'vocab-body-hana': 'Ilong. Ginagamit din sa "hana ga itai" para sa masakit na ilong.',
  'vocab-body-kuchi': 'Bibig. Ang "kuchi" ay pinto ng pagsasalita at pagkain.',
  'vocab-body-te': 'Kamay o braso. Sa "te ga itai", ibig sabihin ay masakit ang kamay.',
  'vocab-body-ashi': 'Paa o binti. Ang "ashi ga itai" ay masakit ang paa.',
  'vocab-body-se-takai': 'Matangkad ako. Ang "se" ay taas, at ang "takai" ay mataas.',
  'vocab-house-ie': 'Bahay o tahanan. Pwede ring ibig sabihin ay "pamilya" sa tahanan.',
  'vocab-house-doa': 'Pinto. Galing sa English na "door".',
  'vocab-house-mado': 'Bintana. Madalas makita sa kuwarto at sala.',
  'vocab-house-tsukue': 'Mesa o desk. Dito madalas mag-aral o magtrabaho.',
  'vocab-house-isu': 'Upuan. Pwede ring tumutukoy sa stool o bangko.',
  'vocab-house-beddo': 'Kama. Galing sa English na "bed".',
  'vocab-house-reizouko': 'Refrigerator o ref. Sinasabi kapag naghahanap ng pagkain o inumin.',
  'vocab-house-terebi': 'Telebisyon. Galing sa English na "television".',
  'vocab-house-denki': 'Kuryente o ilaw. Ginagamit din sa "denki wo tsukete" = buksan ang ilaw.',
  'vocab-house-koko-sunde': 'Nakatira ako rito. Ang "sunde imasu" ay nakatira.',
};
