import type { LessonGuide, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const n5Extra5Units: Unit[] = [
  { id: 'n5-market', levelId: 'n5', order: 27, title: 'Sa Palengke', theme: 'Prutas, gulay, presyo, at pag-bargain nang magalang' },
  { id: 'n5-feelings', levelId: 'n5', order: 28, title: 'Nararamdaman', theme: 'Saya, lungkot, pagod, at kung paano sabihin ang kalagayan mo' },
];

const MK = 'n5-market';
const FL = 'n5-feelings';

export const n5Extra5Vocab: VocabItem[] = [
  phrase(MK, 'mk-ringo', 'りんご', 'ringo', ['apple']),
  phrase(MK, 'mk-banana', 'バナナ', 'banana', ['banana']),
  phrase(MK, 'mk-tomato', 'トマト', 'tomato', ['tomato']),
  phrase(MK, 'mk-mikan', 'みかん', 'mikan', ['mandarin orange']),
  phrase(MK, 'mk-ninjin', 'にんじん', 'ninjin', ['carrot'], '人参'),
  phrase(MK, 'mk-tamanegi', 'たまねぎ', 'tamanegi', ['onion'], '玉ねぎ'),
  phrase(MK, 'mk-hitotsu', 'ひとつ', 'hitotsu', ['one piece (of a thing)'], '一つ'),
  phrase(MK, 'mk-yasuku', 'もうすこし安くしてください', 'mou sukoshi yasuku shite kudasai', ['Can you make it a little cheaper?'], 'もう少し安くしてください'),
  phrase(MK, 'mk-oishisou', 'おいしそうですね', 'oishisou desu ne', ['That looks delicious, doesn\'t it?'], '美味しそうですね'),
  phrase(MK, 'mk-ryoushuusho', 'りょうしゅうしょをください', 'ryoushuusho o kudasai', ['A receipt, please.'], '領収書をください'),

  phrase(FL, 'fl-ureshii', 'うれしい', 'ureshii', ['happy / glad'], '嬉しい'),
  phrase(FL, 'fl-kanashii', 'かなしい', 'kanashii', ['sad'], '悲しい'),
  phrase(FL, 'fl-samishii', 'さみしい', 'samishii', ['lonely'], '寂しい'),
  phrase(FL, 'fl-tsukareta', 'つかれました', 'tsukaremashita', ["I'm tired."], '疲れました'),
  phrase(FL, 'fl-nemui', 'ねむい', 'nemui', ['sleepy'], '眠い'),
  phrase(FL, 'fl-kowai', 'こわい', 'kowai', ['scary / afraid'], '怖い'),
  phrase(FL, 'fl-odoroku', 'おどろきます', 'odorokimasu', ['to be surprised'], '驚きます'),
  phrase(FL, 'fl-shinpai', 'しんぱいします', 'shinpai shimasu', ['to worry'], '心配します'),
  phrase(FL, 'fl-kibun-ii', 'きぶんがいいです', 'kibun ga ii desu', ['I feel good.'], '気分がいいです'),
  phrase(FL, 'fl-kibun-warui', 'きぶんがわるいです', 'kibun ga warui desu', ['I feel bad / unwell.'], '気分が悪いです'),
];

export const n5Extra5Guides: Record<string, LessonGuide> = {
  'n5-market': {
    intro: "Sa palengke, masaya ang mamili. Maraming tindera ang natutuwa kapag marunong kang magbilang at magtanong ng presyo. Matututunan mo ang mga prutas at gulay, at ang mga salitang pang-bargain.",
    pronunciation: "Ang 'ringo' ay 'reen-goh'. Ang 'mikan' ay 'mee-kahn', at ang 'ninjin' ay 'neen-jeen'. Malinaw ang 'n' sa dulo ng pantig.",
    proTip: "Gamitin ang 'mou sukoshi' (kaunti pa) para magtanong ng mas mababang presyo nang magalang. Ngumiti, maging maayos, at huwag pilitin ang presyo.",
  },
  'n5-feelings': {
    intro: "Paano mo sasabihin ang nararamdaman mo? Matututunan natin ang mga salitang nagpapahayag ng saya, lungkot, pagod, at kaba. Kapag kaya mong sabihin ang damdamin mo, mas madali nang kumonekta sa kausap.",
    pronunciation: "Ang 'ureshii' ay 'oo-reh-shee'. Ang 'kanashii' ay 'kah-nah-shee'. Ang 'tsukaremashita' ay 'tsoo-kah-reh-mah-shee-tah', may mahabang 'oo'.",
    proTip: "Ang i-adjectives tulad ng 'ureshii' ay nagiging 'ureshikatta' sa nakaraan, katulad ng natutunan natin sa 'katta desu'. Subukang gamitin ito sa sarili mong kwento.",
  },
};

export const n5Extra5Stories: Record<string, Story> = {
  'n5-market': {
    title: 'Sa Palengke',
    lines: [
      { japanese: 'このりんごはいくらですか。', romaji: 'Kono ringo wa ikura desu ka?', english: 'How much is this apple?', tl: 'Magkano ang mansanas na ito? Ang "kono" ay "ito" bago ang pangngalan.' },
      { japanese: 'ひとつ、百円です。', romaji: 'Hitotsu, hyaku en desu.', english: "One, it's 100 yen.", tl: 'Isa, isandaang yen. Ang "hitotsu" ay isa.' },
      { japanese: 'もうすこし安くしてください。', romaji: 'Mou sukoshi yasuku shite kudasai.', english: 'Please make it a little cheaper.', tl: 'Pakibaba pa nang kaunti. Magalang na pakiusap.' },
      { japanese: 'おいしそうですね。', romaji: 'Oishisou desu ne.', english: 'That looks delicious, doesn\'t it?', tl: 'Mukhang masarap, di ba? Ang "-sou" ay mukhang.' },
      { japanese: '領収書をください。', romaji: 'Ryoushuusho o kudasai.', english: 'A receipt, please.', tl: 'Pakibigay ang resibo. Ang "ryoushuusho" ay opisyal na resibo.' },
    ],
  },
  'n5-feelings': {
    title: 'Ang Araw Ko',
    lines: [
      { japanese: '今日はとても疲れました。', romaji: 'Kyou wa totemo tsukaremashita.', english: 'I was very tired today.', tl: 'Sobrang pagod ako ngayong araw. Ang "totemo" ay sobra.' },
      { japanese: 'でも、友達に会って嬉しかったです。', romaji: 'Demo, tomodachi ni atte ureshikatta desu.', english: 'But I was happy to meet a friend.', tl: 'Pero masaya ako dahil nakita ko ang kaibigan. Ang "atte" ay "nakita at".' },
      { japanese: '映画は怖かったです。', romaji: 'Eiga wa kowakatta desu.', english: 'The movie was scary.', tl: 'Nakakatakot ang pelikula. Ang "kowakatta" ay nakakatakot noon.' },
      { japanese: '少し寂しいです。', romaji: 'Sukoshi samishii desu.', english: 'I feel a little lonely.', tl: 'Medyo malungkot ako. Ang "sukoshi" ay kaunti.' },
      { japanese: '今日は気分がいいです。', romaji: 'Kyou wa kibun ga ii desu.', english: 'I feel good today.', tl: 'Maganda ang pakiramdam ko ngayong araw. Ang "kibun" ay pakiramdam.' },
    ],
  },
};

export const vocabTaglish5: Record<string, string> = {
  'vocab-mk-ringo': 'Mansanas. Galing sa salitang "ringo" na pangkaraniwan sa palengke.',
  'vocab-mk-banana': 'Saging. Galing sa English na "banana".',
  'vocab-mk-tomato': 'Kamatis. Galing sa English na "tomato".',
  'vocab-mk-mikan': 'Mandarin orange o dalandan. Madalas sa taglamig.',
  'vocab-mk-ninjin': 'Karot. Kadalasang nakikita sa mga gulayan.',
  'vocab-mk-tamanegi': 'Sibuyas. Ginagamit sa maraming lutong Japanese.',
  'vocab-mk-hitotsu': 'Isa (bagay). Ginagamit sa pagbilang ng mga bagay.',
  'vocab-mk-yasuku': 'Pwede bang bawasan nang kaunti ang presyo? Magalang na pag-bargain.',
  'vocab-mk-oishisou': 'Mukhang masarap, di ba? Papuri sa pagkain ng ibang tao.',
  'vocab-mk-ryoushuusho': 'Resibo para sa opisyal na bayad. Hihingin ito kapag kailangan para sa trabaho o pag-uulat.',
  'vocab-fl-ureshii': 'Masaya o natutuwa. Isang i-adjective.',
  'vocab-fl-kanashii': 'Malungkot. Kasalungat ng "ureshii".',
  'vocab-fl-samishii': 'Malungkot dahil wala ang iba. Madalas sa "samishii desu".',
  'vocab-fl-tsukareta': 'Pagod ako. Sinasabi kapag pagod na pagod pagkatapos ng araw.',
  'vocab-fl-nemui': 'Inaantok. Galing sa salitang "nemui" na may kaugnayan sa pagtulog.',
  'vocab-fl-kowai': 'Nakakatakot o natatakot. Isang i-adjective.',
  'vocab-fl-odoroku': 'Magulat. Gamitin kapag may hindi inaasahang nangyari.',
  'vocab-fl-shinpai': 'Mag-alala. Gamitin kapag may pinag-aalalahanan.',
  'vocab-fl-kibun-ii': 'Maganda ang pakiramdam ko. Ang "kibun" ay pakiramdam o mood.',
  'vocab-fl-kibun-warui': 'Hindi maganda ang pakiramdam ko. Sinasabi kapag may sakit o hindi maayos.',
};
