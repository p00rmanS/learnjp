import type { LessonGuide, LessonSection, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const pundasyonLevel = {
  id: 'pundasyon',
  name: 'pundasyon' as const,
  order: 0.5,
  title: 'Pundasyon ng Bata',
  description: 'Ang mga unang salitang natutunan ng mga bata: katawan, oras, prutas, gulay, hayop, kulay, at iba pa.',
};

export const pundasyonUnits: Unit[] = [
  { id: 'pun-katawan', levelId: 'pundasyon', order: 1, title: 'Mga Bahagi ng Katawan', theme: 'Mula ulo hanggang paa, ituro at sabihin' },
  { id: 'pun-oras', levelId: 'pundasyon', order: 2, title: 'Anong Oras Na?', theme: 'Oras, kalahati, at mga salitang "maaga" at "huli"' },
  { id: 'pun-direksyon', levelId: 'pundasyon', order: 3, title: 'Nasaan Ito?', theme: 'Sa itaas, sa ibaba, sa harap, sa likod' },
  { id: 'pun-prutas', levelId: 'pundasyon', order: 4, title: 'Mga Prutas', theme: 'Matamis, makatas, at paborito ng mga bata' },
  { id: 'pun-gulay', levelId: 'pundasyon', order: 5, title: 'Mga Gulay', theme: 'Mga gulay sa palengke at sa lutuing pambahay' },
  { id: 'pun-hayop', levelId: 'pundasyon', order: 6, title: 'Mga Hayop', theme: 'Alagang hayop at mga hayop sa kagubatan at bukid' },
  { id: 'pun-kulay', levelId: 'pundasyon', order: 7, title: 'Mga Kulay', theme: 'Pula, asul, dilaw, at lahat ng kulay ng bahaghari' },
  { id: 'pun-hugis', levelId: 'pundasyon', order: 8, title: 'Mga Hugis', theme: 'Bilog, tatsulok, parisukat, at bituin' },
  { id: 'pun-paaralan', levelId: 'pundasyon', order: 9, title: 'Gamit sa Paaralan', theme: 'Lapis, pambura, gunting, at aklat' },
  { id: 'pun-laruan', levelId: 'pundasyon', order: 10, title: 'Mga Laruan', theme: 'Manika, saranggola, at mga laruan na nilalaro ng bata' },
];

const KT = 'pun-katawan';
const OR = 'pun-oras';
const DR = 'pun-direksyon';
const PR = 'pun-prutas';
const GL = 'pun-gulay';
const HY = 'pun-hayop';
const KL = 'pun-kulay';
const HU = 'pun-hugis';
const PA = 'pun-paaralan';
const TY = 'pun-laruan';

export const pundasyonVocab: VocabItem[] = [
  phrase(KT, 'pk-yubi', 'ゆび', 'yubi', ['finger'], '指'),
  phrase(KT, 'pk-ude', 'うで', 'ude', ['arm'], '腕'),
  phrase(KT, 'pk-hiza', 'ひざ', 'hiza', ['knee'], '膝'),
  phrase(KT, 'pk-senaka', 'せなか', 'senaka', ['back (of the body)'], '背中'),
  phrase(KT, 'pk-kata', 'かた', 'kata', ['shoulder'], '肩'),
  phrase(KT, 'pk-hitai', 'ひたい', 'hitai', ['forehead'], '額'),
  phrase(KT, 'pk-hoho', 'ほほ', 'hoho', ['cheek'], '頬'),
  phrase(KT, 'pk-ha', 'は', 'ha', ['tooth'], '歯'),
  phrase(KT, 'pk-shita', 'した', 'shita', ['tongue'], '舌'),
  phrase(KT, 'pk-kuchibiru', 'くちびる', 'kuchibiru', ['lips'], '唇'),

  phrase(OR, 'po-ichiji', 'いちじ', 'ichiji', ['one o\'clock'], '一時'),
  phrase(OR, 'po-niji', 'にじ', 'niji', ['two o\'clock'], '二時'),
  phrase(OR, 'po-sanji', 'さんじ', 'sanji', ['three o\'clock'], '三時'),
  phrase(OR, 'po-juuniji', 'じゅうにじ', 'juuniji', ['twelve o\'clock'], '十二時'),
  phrase(OR, 'po-han', 'はん', 'han', ['half (thirty minutes)'], '半'),
  phrase(OR, 'po-juppun', 'じゅっぷん', 'juppun', ['ten minutes'], '十分'),
  phrase(OR, 'po-jikan', 'じかん', 'jikan', ['time / hours'], '時間'),
  phrase(OR, 'po-hayai', 'はやい', 'hayai', ['early / fast'], '早い'),
  phrase(OR, 'po-osoi', 'おそい', 'osoi', ['late / slow'], '遅い'),
  phrase(OR, 'po-itsu', 'いつ', 'itsu', ['when']),

  phrase(DR, 'pd-ue', 'うえ', 'ue', ['above / on top'], '上'),
  phrase(DR, 'pd-shita', 'した', 'shita', ['below / under'], '下'),
  phrase(DR, 'pd-mae', 'まえ', 'mae', ['in front'], '前'),
  phrase(DR, 'pd-ushiro', 'うしろ', 'ushiro', ['behind / back'], '後ろ'),
  phrase(DR, 'pd-naka', 'なか', 'naka', ['inside'], '中'),
  phrase(DR, 'pd-soto', 'そと', 'soto', ['outside'], '外'),
  phrase(DR, 'pd-tonari', 'となり', 'tonari', ['next to'], '隣'),
  phrase(DR, 'pd-aida', 'あいだ', 'aida', ['between'], '間'),
  phrase(DR, 'pd-chikaku', 'ちかく', 'chikaku', ['nearby'], '近く'),
  phrase(DR, 'pd-mukou', 'むこう', 'mukou', ['over there / beyond'], '向こう'),

  phrase(PR, 'pp-budou', 'ぶどう', 'budou', ['grapes'], '葡萄'),
  phrase(PR, 'pp-ichigo', 'いちご', 'ichigo', ['strawberry'], '苺'),
  phrase(PR, 'pp-momo', 'もも', 'momo', ['peach'], '桃'),
  phrase(PR, 'pp-suika', 'すいか', 'suika', ['watermelon'], '西瓜'),
  phrase(PR, 'pp-nashi', 'なし', 'nashi', ['pear'], '梨'),
  phrase(PR, 'pp-kaki', 'かき', 'kaki', ['persimmon'], '柿'),
  phrase(PR, 'pp-remon', 'レモン', 'remon', ['lemon']),
  phrase(PR, 'pp-meron', 'メロン', 'meron', ['melon']),
  phrase(PR, 'pp-painappuru', 'パイナップル', 'painappuru', ['pineapple']),
  phrase(PR, 'pp-sakuranbo', 'さくらんぼ', 'sakuranbo', ['cherry']),

  phrase(GL, 'pg-kyabetsu', 'キャベツ', 'kyabetsu', ['cabbage']),
  phrase(GL, 'pg-kyuuri', 'きゅうり', 'kyuuri', ['cucumber'], '胡瓜'),
  phrase(GL, 'pg-nasu', 'なす', 'nasu', ['eggplant'], '茄子'),
  phrase(GL, 'pg-piiman', 'ピーマン', 'piiman', ['green bell pepper']),
  phrase(GL, 'pg-daikon', 'だいこん', 'daikon', ['daikon radish'], '大根'),
  phrase(GL, 'pg-kabocha', 'かぼちゃ', 'kabocha', ['pumpkin / squash'], '南瓜'),
  phrase(GL, 'pg-jagaimo', 'じゃがいも', 'jagaimo', ['potato'], 'じゃが芋'),
  phrase(GL, 'pg-negi', 'ねぎ', 'negi', ['green onion / leek'], '葱'),
  phrase(GL, 'pg-hourensou', 'ほうれんそう', 'hourensou', ['spinach']),
  phrase(GL, 'pg-toumorokoshi', 'とうもろこし', 'toumorokoshi', ['corn'], '玉蜀黍'),

  phrase(HY, 'ph-inu', 'いぬ', 'inu', ['dog'], '犬'),
  phrase(HY, 'ph-neko', 'ねこ', 'neko', ['cat'], '猫'),
  phrase(HY, 'ph-uma', 'うま', 'uma', ['horse'], '馬'),
  phrase(HY, 'ph-ushi', 'うし', 'ushi', ['cow'], '牛'),
  phrase(HY, 'ph-buta', 'ぶた', 'buta', ['pig'], '豚'),
  phrase(HY, 'ph-tori', 'とり', 'tori', ['bird / chicken'], '鳥'),
  phrase(HY, 'ph-kaeru', 'かえる', 'kaeru', ['frog'], '蛙'),
  phrase(HY, 'ph-saru', 'さる', 'saru', ['monkey'], '猿'),
  phrase(HY, 'ph-kuma', 'くま', 'kuma', ['bear'], '熊'),
  phrase(HY, 'ph-usagi', 'うさぎ', 'usagi', ['rabbit'], '兎'),

  phrase(KL, 'pl-aka', 'あか', 'aka', ['red'], '赤'),
  phrase(KL, 'pl-ao', 'あお', 'ao', ['blue (also green on traffic lights)'], '青'),
  phrase(KL, 'pl-kiiro', 'きいろ', 'kiiro', ['yellow'], '黄色'),
  phrase(KL, 'pl-midori', 'みどり', 'midori', ['green'], '緑'),
  phrase(KL, 'pl-shiro', 'しろ', 'shiro', ['white'], '白'),
  phrase(KL, 'pl-kuro', 'くろ', 'kuro', ['black'], '黒'),
  phrase(KL, 'pl-chairo', 'ちゃいろ', 'chairo', ['brown'], '茶色'),
  phrase(KL, 'pl-pinku', 'ピンク', 'pinku', ['pink']),
  phrase(KL, 'pl-murasaki', 'むらさき', 'murasaki', ['purple'], '紫'),
  phrase(KL, 'pl-iro', 'いろ', 'iro', ['color'], '色'),

  phrase(HU, 'ph2-maru', 'まる', 'maru', ['circle'], '丸'),
  phrase(HU, 'ph2-sankaku', 'さんかく', 'sankaku', ['triangle'], '三角'),
  phrase(HU, 'ph2-shikaku', 'しかく', 'shikaku', ['square'], '四角'),
  phrase(HU, 'ph2-hoshi', 'ほし', 'hoshi', ['star'], '星'),
  phrase(HU, 'ph2-haato', 'ハート', 'haato', ['heart']),
  phrase(HU, 'ph2-tama', 'たま', 'tama', ['ball / sphere'], '玉'),
  phrase(HU, 'ph2-tsuki', 'つき', 'tsuki', ['moon'], '月'),
  phrase(HU, 'ph2-hosoi', 'ほそい', 'hosoi', ['thin / narrow'], '細い'),
  phrase(HU, 'ph2-futoi', 'ふとい', 'futoi', ['thick / fat'], '太い'),
  phrase(HU, 'ph2-katachi', 'かたち', 'katachi', ['shape / form'], '形'),

  phrase(PA, 'pa-enpitsu', 'えんぴつ', 'enpitsu', ['pencil'], '鉛筆'),
  phrase(PA, 'pa-keshigomu', 'けしごむ', 'keshigomu', ['eraser'], '消しゴム'),
  phrase(PA, 'pa-jougi', 'じょうぎ', 'jougi', ['ruler'], '定規'),
  phrase(PA, 'pa-hasami', 'はさみ', 'hasami', ['scissors'], '鋏'),
  phrase(PA, 'pa-kureyon', 'クレヨン', 'kureyon', ['crayon']),
  phrase(PA, 'pa-nori', 'のり', 'nori', ['glue'], '糊'),
  phrase(PA, 'pa-fudebako', 'ふでばこ', 'fudebako', ['pencil case'], '筆箱'),
  phrase(PA, 'pa-kyoukasho', 'きょうかしょ', 'kyoukasho', ['textbook'], '教科書'),
  phrase(PA, 'pa-jikanwari', 'じかんわり', 'jikanwari', ['class schedule'], '時間割'),
  phrase(PA, 'pa-hon', 'ほん', 'hon', ['book'], '本'),

  phrase(TY, 'pt-omocha', 'おもちゃ', 'omocha', ['toy'], '玩具'),
  phrase(TY, 'pt-ningyou', 'にんぎょう', 'ningyou', ['doll'], '人形'),
  phrase(TY, 'pt-tako', 'たこ', 'tako', ['kite'], '凧'),
  phrase(TY, 'pt-koma', 'こま', 'koma', ['spinning top'], '独楽'),
  phrase(TY, 'pt-taiko', 'たいこ', 'taiko', ['drum'], '太鼓'),
  phrase(TY, 'pt-burokku', 'ブロック', 'burokku', ['building blocks']),
  phrase(TY, 'pt-ehon', 'えほん', 'ehon', ['picture book'], '絵本'),
  phrase(TY, 'pt-asobu', 'あそぶ', 'asobu', ['to play'], '遊ぶ'),
];

export const pundasyonGuides: Record<string, LessonGuide> = {
  'pun-katawan': {
    intro: "Hi, maliit na kaibigan! Ituro mo ang bahagi ng katawan mo habang sinasabi ang pangalan nila. Ganito natututo ang mga bata sa Japan, at pwede mo rin itong gawin!",
    pronunciation: "Ang 'yubi' ay 'yoo-bee' at ang 'ude' ay 'oo-deh'. Sabihin nang malinaw at maikli ang bawat pantig.",
    proTip: "Kantahin ang pangalan ng bahagi ng katawan habang ituturo mo ito. Ang utak ay mas madaling tumanda sa tunog na may kasamang galaw.",
  },
  'pun-oras': {
    intro: "Anong oras na? Matututunan natin kung paano magsabi ng oras, mula sa isa hanggang labindalawa. Parang relo sa dingding ang gagamitin natin!",
    pronunciation: "Ang 'ichiji' ay 'ee-chee-jee'. Ang 'juuniji' ay 'joo-nee-jee'. Ang 'ji' sa dulo ay parang 'jee' na maikli.",
    proTip: "Gamitin ang 'ji' pagkatapos ng numero: 'ichiji' = ala-una, 'niji' = ala-dos. Madali kapag may tunay na relo sa harap mo.",
  },
  'pun-direksyon': {
    intro: "Nasaan ang laruan mo? Ituro mo at sabihin kung nasa itaas, sa ibaba, sa harap, o sa likod nito. Ito ang mga salitang ginagamit natin sa araw-araw.",
    pronunciation: "Ang 'ue' ay 'oo-eh' at ang 'naka' ay 'nah-kah'. Ang 'soto' ay 'soh-toh', malinaw ang bawat pantig.",
    proTip: "Itago ang laruan sa kahon at sabihin: 'naka ni arimasu' (nasa loob). Ang paglalaro ng nakatago ay mabilis magpatatak ng salita.",
  },
  'pun-prutas': {
    intro: "Ang mga prutas ay matamis at masarap! Sino ang paborito mong prutas? Alamin natin ang pangalan nila sa Japanese.",
    pronunciation: "Ang 'budou' ay 'boo-doh-oo'. Ang 'ichigo' ay 'ee-chee-goh'. Ang 'suika' ay 'soo-ee-kah'.",
    proTip: "Ituro ang prutas sa palengke at sabihin: 'kore wa nan desu ka?' (ano ito?). Mas madaling tumatak kapag may hawak ka.",
  },
  'pun-gulay': {
    intro: "Kumain ng gulay para lumaki at lumakas! Alamin natin ang pangalan ng mga gulay na madalas nasa hapag-kainan.",
    pronunciation: "Ang 'kyabetsu' ay 'kyah-bet-soo'. Ang 'kyuuri' ay 'kyoo-ree'. Malinaw ang 'r' sa dulo.",
    proTip: "Hanapin ang gulay sa lutuin o palengke at sabihin ang pangalan. Madalas may sangkap na ginagamit sa maraming ulam.",
  },
  'pun-hayop': {
    intro: "Ang mga hayop ay kaibigan natin! Alamin natin ang tunog at pangalan ng mga alagang hayop at mga hayop sa bukid.",
    pronunciation: "Ang 'inu' ay 'ee-noo'. Ang 'neko' ay 'neh-koh'. Ang 'usagi' ay 'oo-sah-gee', malambot ang 'g'.",
    proTip: "Gayahin ang tunog ng hayop habang sinasabi ang pangalan nila. Ginagamit ito ng maraming guro sa Japan para sa maliliit na bata.",
  },
  'pun-kulay': {
    intro: "Ang mundo ay puno ng kulay! Alamin natin ang mga kulay sa Japanese, para mailarawan mo ang lahat ng nakikita mo.",
    pronunciation: "Ang 'aka' ay 'ah-kah', at ang 'ao' ay 'ah-oh'. Ang 'kiiro' ay 'kee-ee-roh', mahaba ang 'ii'.",
    proTip: "Gamitin ang 'iro' pagkatapos ng kulay: 'aka no iro' = kulay na pula. Ito ang pinakasimpleng paraan para magtanong ng kulay.",
  },
  'pun-hugis': {
    intro: "Ang mga hugis ay nasa paligid natin: bilog na orasan, tatsulok na bubong, parisukat na libro. Alamin natin ang pangalan nila!",
    pronunciation: "Ang 'maru' ay 'mah-roo'. Ang 'sankaku' ay 'sahn-kah-koo'. Ang 'shikaku' ay 'shee-kah-koo'.",
    proTip: "Maghanap ng hugis sa kuwarto mo at sabihin ang pangalan. Ang paghahanap ng bagay ang pinakamadaling paraan para tumatak ang salita.",
  },
  'pun-paaralan': {
    intro: "Papasok na sa paaralan! Ano ang mga gamit mo sa klase? Alamin natin ang pangalan nila sa Japanese.",
    pronunciation: "Ang 'enpitsu' ay 'en-pee-tsoo'. Ang 'keshigomu' ay 'keh-shee-goh-moo'. Ang 'hasami' ay 'hah-sah-mee'.",
    proTip: "Ihanda ang mga gamit sa bag bago matulog at sabihin ang pangalan ng bawat isa. Ganyan din ang ginagawa ng mga bata sa Japan.",
  },
  'pun-laruan': {
    intro: 'Ano ang paborito mong laruan? Sa araw na ito, matututunan natin ang pangalan ng mga laruan at ang salitang "maglaro". Ituro ang laruan mo habang sinasabi ang pangalan nito.',
    pronunciation: "Ang 'omocha' ay 'oh-moh-chah'. Ang 'ningyou' ay 'nin-gyoh', at ang 'gyo' ay isang pantig lang.",
    proTip: 'Hawakan ang laruan habang sinasabi ang pangalan nito. Ang salitang kasama ng galaw at hawak ay mas madaling tandaan.',
  },
};

export const pundasyonStories: Record<string, Story> = {
  'pun-katawan': {
    title: 'Ituro ang Katawan',
    lines: [
      { japanese: 'これは頭です。', romaji: 'Kore wa atama desu.', english: 'This is the head.', tl: 'Ito ang ulo. Ang "kore wa ... desu" ay "ito ay ...".' },
      { japanese: 'ゆびは五つあります。', romaji: 'Yubi wa itsutsu arimasu.', english: 'There are five fingers.', tl: 'May limang daliri. Ang "itsutsu" ay limang bagay.' },
      { japanese: 'うでと、ひざがあります。', romaji: 'Ude to, hiza ga arimasu.', english: 'There are arms and knees.', tl: 'May braso at tuhod. Ang "to" ay "at".' },
      { japanese: '歯はきれいですね！', romaji: 'Ha wa kirei desu ne!', english: 'The teeth are clean, aren\'t they!', tl: 'Malinis ang ngipin, di ba! Ang "ha" ay ngipin.' },
    ],
  },
  'pun-oras': {
    title: 'Anong Oras?',
    lines: [
      { japanese: 'いまは、いちじです。', romaji: 'Ima wa, ichiji desu.', english: "It's one o'clock now.", tl: 'Ala-una na ngayon. Ang "ima" ay ngayon.' },
      { japanese: 'にじはんです。', romaji: 'Niji han desu.', english: "It's half past two.", tl: 'Alas-dos y media na. Ang "han" ay kalahati.' },
      { japanese: 'じゅっぷんまってください。', romaji: 'Juppun matte kudasai.', english: 'Please wait ten minutes.', tl: 'Pakihintay ng sampung minuto.' },
      { japanese: 'はやい！おそい！', romaji: 'Hayai! Osoi!', english: 'Early! Late!', tl: 'Maaga! Huli! Madaling tandaan ang magkasalungat na salita.' },
    ],
  },
  'pun-direksyon': {
    title: 'Saan ang Bola?',
    lines: [
      { japanese: 'たまは、いすのうえです。', romaji: 'Tama wa, isu no ue desu.', english: 'The ball is on the chair.', tl: 'Nasa ibabaw ng upuan ang bola. Ang "ue" ay ibabaw.' },
      { japanese: 'ねこは、はこのなかです。', romaji: 'Neko wa, hako no naka desu.', english: 'The cat is inside the box.', tl: 'Nasa loob ng kahon ang pusa. Ang "naka" ay loob.' },
      { japanese: 'いぬは、つくえのしたです。', romaji: 'Inu wa, tsukue no shita desu.', english: 'The dog is under the desk.', tl: 'Nasa ilalim ng mesa ang aso. Ang "shita" ay ilalim.' },
      { japanese: 'そとであそびましょう！', romaji: 'Soto de asobimashou!', english: "Let's play outside!", tl: 'Maglaro tayo sa labas! Ang "soto" ay labas.' },
    ],
  },
  'pun-prutas': {
    title: 'Pamimili ng Prutas',
    lines: [
      { japanese: 'いちごがすきです。', romaji: 'Ichigo ga suki desu.', english: 'I like strawberries.', tl: 'Gusto ko ang strawberry. Ang "suki" ay gusto.' },
      { japanese: 'すいかはおおきいです。', romaji: 'Suika wa ookii desu.', english: 'The watermelon is big.', tl: 'Malaki ang pakwan. Ang "ookii" ay malaki.' },
      { japanese: 'ぶどうは、あまいです。', romaji: 'Budou wa, amai desu.', english: 'The grapes are sweet.', tl: 'Matamis ang ubas. Ang "amai" ay matamis.' },
      { japanese: 'いっしょにたべましょう！', romaji: 'Issho ni tabemashou!', english: "Let's eat together!", tl: 'Kainin natin nang sabay!' },
    ],
  },
  'pun-gulay': {
    title: 'Gulayan',
    lines: [
      { japanese: 'やさいを、たべます。', romaji: 'Yasai o, tabemasu.', english: 'I eat vegetables.', tl: 'Kumakain ako ng gulay. Ang "yasai" ay gulay.' },
      { japanese: 'きゅうりとなすがあります。', romaji: 'Kyuuri to nasu ga arimasu.', english: 'There are cucumbers and eggplants.', tl: 'May pipino at talong. Ang "ga arimasu" ay may.' },
      { japanese: 'ねぎは、みどりです。', romaji: 'Negi wa, midori desu.', english: 'The green onion is green.', tl: 'Berde ang sibuyas na dahon. Ang "midori" ay berde.' },
      { japanese: 'おいしそうですね！', romaji: 'Oishisou desu ne!', english: 'That looks delicious, doesn\'t it!', tl: 'Mukhang masarap, di ba!' },
    ],
  },
  'pun-hayop': {
    title: 'Sa Bukid',
    lines: [
      { japanese: 'うしは、もーもー。', romaji: 'Ushi wa, moo moo.', english: 'The cow goes moo moo.', tl: 'Ang baka ay "moo moo" ang tunog.' },
      { japanese: 'ねこは、にゃーにゃー。', romaji: 'Neko wa, nyaa nyaa.', english: 'The cat goes meow meow.', tl: 'Ang pusa ay "nyaa nyaa" ang tunog.' },
      { japanese: 'いぬとうさぎがいます。', romaji: 'Inu to usagi ga imasu.', english: 'There is a dog and a rabbit.', tl: 'May aso at kuneho. Ang "imasu" ay may buhay na bagay.' },
      { japanese: 'かわいいですね！', romaji: 'Kawaii desu ne!', english: 'They are cute, aren\'t they!', tl: 'Ang cute nila, di ba!' },
    ],
  },
  'pun-kulay': {
    title: 'Pintura',
    lines: [
      { japanese: 'そらはあおいです。', romaji: 'Sora wa aoi desu.', english: 'The sky is blue.', tl: 'Asul ang langit. Ang "sora" ay langit.' },
      { japanese: 'りんごはあかです。', romaji: 'Ringo wa aka desu.', english: 'The apple is red.', tl: 'Pula ang mansanas. Ang "aka" ay pula.' },
      { japanese: 'ひまわりはきいろです。', romaji: 'Himawari wa kiiro desu.', english: 'The sunflower is yellow.', tl: 'Dilaw ang mirasol. Ang "kiiro" ay dilaw.' },
      { japanese: 'なにいろがすきですか。', romaji: 'Nani iro ga suki desu ka?', english: 'What color do you like?', tl: 'Anong kulay ang gusto mo? Ang "nani iro" ay anong kulay.' },
    ],
  },
  'pun-hugis': {
    title: 'Hugis sa Paligid',
    lines: [
      { japanese: 'これはまるです。', romaji: 'Kore wa maru desu.', english: 'This is a circle.', tl: 'Ito ay bilog.' },
      { japanese: 'やねはさんかくです。', romaji: 'Yane wa sankaku desu.', english: 'The roof is a triangle.', tl: 'Tatsulok ang bubong. Ang "yane" ay bubong.' },
      { japanese: 'ほんはしかくです。', romaji: 'Hon wa shikaku desu.', english: 'The book is a square.', tl: 'Parisukat ang libro. Ang "shikaku" ay parisukat.' },
      { japanese: 'そらにほしがあります！', romaji: 'Sora ni hoshi ga arimasu!', english: 'There are stars in the sky!', tl: 'May bituin sa langit!' },
    ],
  },
  'pun-paaralan': {
    title: 'Sa Klase',
    lines: [
      { japanese: 'えんぴつとけしごむがあります。', romaji: 'Enpitsu to keshigomu ga arimasu.', english: 'I have a pencil and an eraser.', tl: 'May lapis at pambura ako.' },
      { japanese: 'じょうぎでせんをひきます。', romaji: 'Jougi de sen o hikimasu.', english: 'I draw a line with a ruler.', tl: 'Gumuhit ako ng linya gamit ang ruler. Ang "de" ay gamit.' },
      { japanese: 'はさみでかみをきります。', romaji: 'Hasami de kami o kirimasu.', english: 'I cut paper with scissors.', tl: 'Gumugupit ako ng papel gamit ang gunting.' },
      { japanese: 'きょうかしょをよみます。', romaji: 'Kyoukasho o yomimasu.', english: 'I read the textbook.', tl: 'Nagbabasa ako ng aklat-aralin.' },
    ],
  },
  'pun-laruan': {
    title: 'Maglaro Tayo',
    lines: [
      { japanese: 'これは、おもちゃです。', romaji: 'Kore wa, omocha desu.', english: 'This is a toy.', tl: 'Laruan ito. Ang "omocha" ay laruan sa pangkalahatan.' },
      { japanese: 'いっしょに、あそびましょう。', romaji: 'Issho ni, asobimashou.', english: "Let's play together.", tl: 'Maglaro tayo nang magkasama. Ang "asobimashou" ay pag-aya na maglaro tayo.' },
      { japanese: 'たこをあげましょう。', romaji: 'Tako o agemashou.', english: "Let's fly a kite.", tl: 'Magpalipad tayo ng saranggola. Ang "tako" dito ay saranggola.' },
      { japanese: 'たのしいですね！', romaji: 'Tanoshii desu ne!', english: "That's fun, isn't it!", tl: 'Masaya, di ba! Ang "tanoshii" ay masaya.' },
    ],
  },
};

const L = (kind: LessonSection['kind'], title: string, body: string): LessonSection => ({ kind, title, body });

export const pundasyonSections: Record<string, LessonSection[]> = {
  'pun-katawan': [
    L('explain', 'Paliwanag', 'Ang bahagi ng katawan ay karaniwang tinatawag gamit ang pangngalan lang. Halimbawa, "yubi" ay daliri at "ude" ay braso. Sa pangungusap, gamitin ang "ga" kapag may bahagi ng katawan na may kondisyon: "ude ga itai" (masakit ang braso).'),
    L('tip', 'Tip & trick', 'Ituro ang bahagi ng katawan mo habang sinasabi ang pangalan. Ginagamit ito ng mga guro sa maliliit na bata sa Japan, dahil ang galaw ay tumutulong sa alaala.'),
    L('remember', 'Tandaan natin', 'Ude = braso. Itaas mo ang braso mo at sabihin ang "ude". Hiza = tuhod. Kapag yumuyuko ka, ang tuhod mo ang nakabaluktot.'),
    L('local', 'Sabi ng mga lokal', 'Sa maraming paaralan sa Japan, may mga awit ang mga bata na tumutukoy sa katawan at kulay. Ang pagkanta kasabay ng galaw ay karaniwang paraan ng pagtuturo sa maliliit na bata.'),
  ],
  'pun-oras': [
    L('explain', 'Paliwanag', 'Ang oras ay sinasabi gamit ang numero + "ji": ichiji (ala-una), niji (ala-dos). Ang "han" ay kalahati, kaya "niji han" = alas-dos y medya. Ang "juppun" ay sampung minuto.'),
    L('tip', 'Tip & trick', 'Tumingin sa orasan at sabihin ang oras nang malakas. Kapag araw-araw mong ginagawa ito, mabilis kang makakaintindi ng oras nang hindi nag-iisip.'),
    L('remember', 'Tandaan natin', 'Ji = oras, ang maikling salita sa bawat oras. Han = kalahati, "han" ay kalahating kahon ng pizza!'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, madalas gumagamit ng 24-oras na sistema sa iskedyul ng tren at mga opisyal na anunsyo. Sa pang-araw-araw na usapan, "ji" pa rin ang karaniwang salita para sa oras.'),
  ],
  'pun-direksyon': [
    L('explain', 'Paliwanag', 'Ang mga salitang "ue", "shita", "mae", at "ushiro" ay tumutukoy sa lokasyon ng bagay. Gamitin ang "no" pagkatapos ng bagay: "isu no ue" (sa ibabaw ng upuan).'),
    L('tip', 'Tip & trick', 'Itago ang laruan sa kahon at sabihin kung nasaan ito. Ang paghahanap ng bagay ay nagpapatatak ng salita sa isip ng bata.'),
    L('remember', 'Tandaan natin', 'Ue = itaas, isipin ang "ibabaw". Shita = ibaba, isipin ang "ilalim". Naka = loob, at soto = labas.'),
    L('local', 'Sabi ng mga lokal', 'Madalas sinasabi ng mga Hapon na "achira" (doon) habang nakaturo. Ang "mukou" naman ay ginagamit kapag malayo ang lugar at lampas sa paningin.'),
  ],
  'pun-prutas': [
    L('explain', 'Paliwanag', 'Maraming prutas sa Japan ang galing sa ibang bansa at may pangalan na hinango sa English, tulad ng "remon" (lemon) at "meron" (melon). Ang iba ay sariling pangalan Hapon, tulad ng "momo" (peach).'),
    L('tip', 'Tip & trick', 'Kapag bibili ng prutas, sabihin ang pangalan at itanong ang presyo: "ichigo wa ikura desu ka?" Madaling gamitin sa palengke o supermarket.'),
    L('remember', 'Tandaan natin', 'Ichigo = strawberry, pulang maliit na prutas. Suika = pakwan, malaki, berde sa labas at pula sa loob.'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, mahal ang magandang prutas at madalas ibinibigay bilang regalo sa pagbisita. Ang "suika" ay tanyag tuwing tag-init.'),
  ],
  'pun-gulay': [
    L('explain', 'Paliwanag', 'Ang mga gulay ay tinatawag na "yasai". Ang bawat gulay ay may sariling pangalan, tulad ng "ninjin" (karot) at "daikon" (labanos). Sa lutuin, ang "shiru" ay sabaw at ang "ryouri" ay lutuin.'),
    L('tip', 'Tip & trick', 'Pumunta sa palengke at ituro ang bawat gulay, sabihin ang pangalan, at tandaan kung paano ito lutuin. Ang pag-amoy at paghawak ay nakakatulong sa alaala.'),
    L('remember', 'Tandaan natin', 'Negi = sibuyas na dahon, madalas nasa sabaw ng miso. Nasu = talong, lila sa labas.'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, maraming tao ang bumibili ng gulay araw-araw sa maliit na tindahan. Ang "yasai" ay madalas nasa bawat ulam, kahit simpleng sabaw ng miso.'),
  ],
  'pun-hayop': [
    L('explain', 'Paliwanag', 'Ang mga hayop ay tinatawag gamit ang pangngalan lang: "inu" (aso), "neko" (pusa). Para sabihing ang hayop ay may gawain, gumamit ng "ga" o "wa" at ang aksyon: "inu ga hashiru" (tumatakbo ang aso).'),
    L('tip', 'Tip & trick', 'Gayahin ang tunog ng hayop habang sinasabi ang pangalan. Ang "wan wan" (aso) at "nyaa nyaa" (pusa) ay maaaring gamitin bilang tandaan.'),
    L('remember', 'Tandaan natin', 'Inu = aso, gayahin ang tahol: "wan wan". Neko = pusa, gayahin ang tunog: "nyaa".'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, karaniwan ang pagtawag sa aso at pusa bilang bahagi ng pamilya. Maraming bata ang nagkukwento ng alaga nila sa klase, kaya magandang pag-usapan ito.'),
  ],
  'pun-kulay': [
    L('explain', 'Paliwanag', 'Ang "aka", "ao", at "kiiro" ay mga pangngalan ng kulay. Gamitin ang "iro" para sa pangkalahatang kulay: "nani iro" (anong kulay). Ang "ao" ay asul, pero tinatawag ding berde kapag traffic light.'),
    L('tip', 'Tip & trick', 'Tumingin sa paligid at sabihin ang kulay ng bawat bagay: "sora wa ao" (asul ang langit). Madali itong ulitin kahit saan.'),
    L('remember', 'Tandaan natin', 'Aka = pula. Ao = asul. Kapag pula ang bagay, sabihin "aka desu". Kapag asul, "ao desu".'),
    L('local', 'Sabi ng mga lokal', 'Sa semaforo sa Japan, sinasabing "ao" ang berdeng ilaw. Ang "midori" naman ay ginagamit sa mga halaman at puno.'),
  ],
  'pun-hugis': [
    L('explain', 'Paliwanag', 'Ang "maru", "sankaku", at "shikaku" ay mga pangngalan ng hugis. Kapag inilalarawan ang bagay: "X wa Y desu", tulad ng "hon wa shikaku desu" (parisukat ang libro).'),
    L('tip', 'Tip & trick', 'Maghanap ng hugis sa kuwarto mo at ituro ito: "kore wa maru desu" (bilog ito). Mas mabilis tumatak kapag nakikita mo.'),
    L('remember', 'Tandaan natin', 'Maru = bilog, parang "malalaking" bilog ng buwan. Sankaku = tatsulok, "san" ay tatlo, "kaku" ay sulok: tatlong sulok!'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, marami ang gumagamit ng hugis ng puso (haato) sa mga regalo at kard. Ang "hoshi" naman ay madalas makita sa mga pang-gabing dekorasyon.'),
  ],
  'pun-paaralan': [
    L('explain', 'Paliwanag', 'Ang gamit sa paaralan ay tinatawag gamit ang pangngalan lang: "enpitsu", "keshigomu". Sa pagsasabi ng ginagawa, gamitin ang "de" para sa kasangkapan: "jougi de sen o hikimasu" (gumuhit ng linya gamit ang ruler).'),
    L('tip', 'Tip & trick', 'Ihanda ang gamit sa bag bago matulog at sabihin ang pangalan ng bawat isa. Ang nakasanayan ay nagpapatatag ng alaala.'),
    L('remember', 'Tandaan natin', 'Enpitsu = lapis, ginagamit sa pagsulat ng numero at letra. Keshigomu = pambura: "keshi" ay burahin, "gomu" ay goma.'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, madalas may dalang maliit na pamunas at panyo ang estudyante. Ang bawat bata ay may "fudebako" (pencil case) na madalas magarbo o may disenyo.'),
  ],
  'pun-laruan': [
    L('explain', 'Paliwanag', 'Ang "omocha" ay salitang pangkalahatan para sa laruan. Kapag alam mo ang pangalan ng partikular na laruan, gamitin ito: "koma", "taiko", "ehon". Ang "asobu" ay maglaro, at kapag nag-aaya ka, idagdag ang "mashou": "asobimashou" (maglaro tayo).'),
    L('tip', 'Tip & trick', 'Habang naglalaro, sabihin nang malakas ang pangalan ng laruan na hawak mo. Ang salitang kasama ng galaw at hawak ay mas tumatatak.'),
    L('remember', 'Tandaan natin', 'Tako (凧) = saranggola. Tako (蛸) naman ay pugita, magkaparehong tunog pero magkaiba ang kanji. Sa laruan, saranggola ang ibig sabihin ng tako.'),
    L('local', 'Sabi ng mga lokal', 'Tuwing Marso 3, ipinagdiriwang ang Hina Matsuri (Araw ng mga Batang Babae). Ipinapakita ng mga pamilya ang tradisyonal na manika, ang "ningyou", sa bahay bilang panalangin para sa kalusugan at kaligayahan ng mga anak.'),
  ],
};
