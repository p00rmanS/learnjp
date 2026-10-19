import type { GrammarItem, LessonGuide, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const n5Extra3Units: Unit[] = [
  { id: 'n5-clothes', levelId: 'n5', order: 23, title: 'Damit at Gamit', theme: 'Mga damit, sapatos, at mga bagay na dala-dala' },
  { id: 'n5-grammar-3', levelId: 'n5', order: 24, title: 'Te-form at Nakaraan', theme: 'Ginagawa ngayon, pagpapahintulot, at mga nakaraang kwento' },
];

const C = 'n5-clothes';

export const n5Extra3Vocab: VocabItem[] = [
  phrase(C, 'cl-fuku', 'ふく', 'fuku', ['clothes'], '服'),
  phrase(C, 'cl-shatsu', 'シャツ', 'shatsu', ['shirt']),
  phrase(C, 'cl-zubon', 'ズボン', 'zubon', ['pants']),
  phrase(C, 'cl-sukaato', 'スカート', 'sukaato', ['skirt']),
  phrase(C, 'cl-kutsu', 'くつ', 'kutsu', ['shoes'], '靴'),
  phrase(C, 'cl-boushi', 'ぼうし', 'boushi', ['hat'], '帽子'),
  phrase(C, 'cl-kaban', 'かばん', 'kaban', ['bag'], '鞄'),
  phrase(C, 'cl-tokei', 'とけい', 'tokei', ['watch / clock'], '時計'),
  phrase(C, 'cl-megane', 'めがね', 'megane', ['glasses']),
  phrase(C, 'cl-kasa', 'かさ', 'kasa', ['umbrella'], '傘'),
  phrase(C, 'cl-kite-mo', 'これをきてもいいですか', 'kore o kitemo ii desu ka', ['May I wear this?'], 'これを着てもいいですか'),
];

export const n5Extra3Guides: Record<string, LessonGuide> = {
  'n5-clothes': {
    intro: "Anong isusuot mo ngayon? Matututunan natin ang mga damit at gamit na dala-dala. Kapag alam mo ang mga ito, kaya mo nang sabihin kung ano ang suot mo o kung ano ang kailangan mo sa ulan.",
    pronunciation: "Ang 'fuku' ay 'foo-koo', at ang 'kutsu' ay 'koot-soo', pero halos hindi naririnig ang 'u'. Ang 'boushi' ay 'boh-shee', na may mahabang 'oo'.",
    proTip: "Gamitin ang 'kite mo ii desu ka?' para magtanong kung pwede mong isuot ang isang damit sa tindahan. Magiging maganda ang dating mo sa staff.",
  },
  'n5-grammar-3': {
    intro: "Ngayon, may apat na mahahalagang pattern. Matututunan mo kung paano sabihin ang ginagawa mo ngayon, paano humingi ng pahintulot, at paano magkwento tungkol sa nakaraan.",
    pronunciation: "Ang 'tabete' ay 'tah-beh-teh', at ang 'itte' ay 'eet-teh', na may maikling hinto sa 'tt'. Ang 'katta' ay 'kat-tah', may maikling hinto din.",
    proTip: "Sa 'te-form', tandaan ang tatlong pangunahing pagbabago: 食べる → 食べて, 行く → 行って, 見る → 見て. Ang 'iku' ay exception, kaya 行って ang tama, hindi 行いて.",
  },
};

export const n5Extra3Stories: Record<string, Story> = {
  'n5-clothes': {
    title: 'Getting Ready',
    lines: [
      { japanese: '今日は寒いですね。', romaji: 'Kyou wa samui desu ne.', english: "It's cold today, isn't it?", tl: 'Malamig ngayon, di ba? Ang "samui" ay malamig ang panahon.' },
      { japanese: 'シャツとズボンを着ます。', romaji: 'Shatsu to zubon o kimasu.', english: 'I wear a shirt and pants.', tl: 'Nagsusuot ako ng shirt at pantalon. Ang "kimasu" ay magsuot.' },
      { japanese: '靴をはいて、帽子をかぶります。', romaji: 'Kutsu o haite, boushi o kaburimasu.', english: 'I put on shoes and put on a hat.', tl: 'Nagsusuot ako ng sapatos, tapos sumusuot ng sombrero. Ang "haite" ay gamit para sa sapatos.' },
      { japanese: '傘も持って行きましょう。', romaji: 'Kasa mo motte ikimashou.', english: "Let's take an umbrella too.", tl: 'Dalhin din natin ang payong. Ang "mo" ay "din".' },
      { japanese: 'かばんはどこですか。', romaji: 'Kaban wa doko desu ka?', english: 'Where is my bag?', tl: 'Nasaan ang bag ko? Ang "kaban" ay bag.' },
    ],
  },
  'n5-grammar-3': {
    title: 'What Are You Doing?',
    lines: [
      { japanese: '今、ご飯を食べています。', romaji: 'Ima, gohan o tabete imasu.', english: 'Right now, I am eating rice.', tl: 'Kumakain ako ng kanin ngayon. Ang "tabete imasu" ay ginagawa ngayon mismo.' },
      { japanese: 'ここで見てもいいですか。', romaji: 'Koko de mite mo ii desu ka?', english: 'May I look here?', tl: 'Pwede ko bang tingnan dito? Ang "mite mo ii desu ka" ay humihingi ng pahintulot.' },
      { japanese: '昨日は雨で、楽しかったです。', romaji: 'Kinou wa ame de, tanoshikatta desu.', english: 'Yesterday it rained, and it was fun.', tl: 'Umulan kahapon, at masaya ito. Ang "tanoshikatta" ay masaya noon.' },
      { japanese: '食べて、行きましょう。', romaji: 'Tabete, ikimashou.', english: "Let's eat and then go.", tl: 'Kumain muna tayo, tapos alis na. Ang "tabete" ay "kumain at" na nag-uugnay ng dalawang aksyon.' },
    ],
  },
};

export const n5Extra3Grammar: GrammarItem[] = [
  {
    id: 'grammar-teiru',
    type: 'grammar',
    unitId: 'n5-grammar-3',
    title: '〜ています (te imasu): ginagawa ngayon',
    level: 5,
    explanation:
      'Ginagamit para sabihing may ginagawa ka ngayon mismo, o may kalagayan na tuloy-tuloy. Pattern: VERB-て + います. Halimbawa: 食べています = kumakain ngayon; 住んでいます = nakatira (sa isang lugar).',
    exampleSentences: [
      { japanese: '今、ご飯を食べています。', furigana: 'いま、ごはんをたべています。', english: 'Right now, I am eating rice.' },
      { japanese: '東京に住んでいます。', furigana: 'とうきょうにすんでいます。', english: 'I live in Tokyo.' },
    ],
    commonMistakes: 'Ang 住んでいます ay nakatira, hindi "nagtitirahan ngayon". May ilang verb na ang ibig sabihin ay estado, hindi aksyon.',
    createdAt: new Date(),
  },
  {
    id: 'grammar-temoii',
    type: 'grammar',
    unitId: 'n5-grammar-3',
    title: '〜てもいいです (te mo ii desu): pwede ba?',
    level: 5,
    explanation:
      'Ginagamit para humingi ng pahintulot o sabihing okay lang. Pattern: VERB-て + もいいですか (tanong: pwede ba?). Sagot: はい、いいですよ (oo, pwede).',
    exampleSentences: [
      { japanese: '見てもいいですか。', furigana: 'みてもいいですか。', english: 'May I look at it?' },
      { japanese: '写真を撮ってもいいですか。', furigana: 'しゃしんをとってもいいですか。', english: 'May I take a photo?' },
    ],
    commonMistakes: 'Para sa bawal, gamitin ang 〜てはいけません. Huwag gamitin ang もいいです para sa pagbabawal.',
    createdAt: new Date(),
  },
  {
    id: 'grammar-te-form',
    type: 'grammar',
    unitId: 'n5-grammar-3',
    title: '〜て (te-form): ang pundasyon ng maraming pattern',
    level: 5,
    explanation:
      'Binabago ang verb para maidugtong sa ibang pattern tulad ng 〜ています, 〜てください, at 〜てもいい. Tatlong pangunahing halimbawa: 食べる → 食べて, 行く → 行って, 見る → 見て.',
    exampleSentences: [
      { japanese: 'ご飯を食べて、行きます。', furigana: 'ごはんをたべて、いきます。', english: 'I eat and then go.' },
      { japanese: '見てください。', furigana: 'みてください。', english: 'Please look.' },
      { japanese: '行って、来ます。', furigana: 'いって、きます。', english: "I'm off, I'll be back." },
    ],
    commonMistakes: 'Ang 行く ay exception: 行って, hindi 行いて. Tandaan ito palagi.',
    createdAt: new Date(),
  },
  {
    id: 'grammar-katta',
    type: 'grammar',
    unitId: 'n5-grammar-3',
    title: '〜かったです (katta desu): nakaraang estado ng i-adjective',
    level: 5,
    explanation:
      'Para sa i-adjectives: palitan ang "い" ng "かったです" para sabihing ganito ito noon. 楽しい → 楽しかったです (masaya ito noon). Para sa negatibo: 〜くなかったです.',
    exampleSentences: [
      { japanese: '昨日は暑かったです。', furigana: 'きのうはあつかったです。', english: 'Yesterday was hot.' },
      { japanese: '映画は楽しかったです。', furigana: 'えいがはたのしかったです。', english: 'The movie was fun.' },
    ],
    commonMistakes: 'Ang na-adjectives ay gumagamit ng でした, hindi かったです. Halimbawa: 元気でした.',
    createdAt: new Date(),
  },
];
