import type { LessonGuide, LessonSection, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

// Fourth batch of Pundasyon ng Bata units: the bedroom, the bathroom, sports, and rainy-day things.

export const pundasyonUnits4: Unit[] = [
  { id: 'pun-kwarto', levelId: 'pundasyon', order: 21, title: 'Sa Kwarto', theme: 'Kama, bintana, pinto, orasan, at ilaw' },
  { id: 'pun-banyo', levelId: 'pundasyon', order: 22, title: 'Sa Banyo', theme: 'Sabon, tuwalya, shampoo, at mainit na tubig' },
  { id: 'pun-sports', levelId: 'pundasyon', order: 23, title: 'Mga Laro at Sports', theme: 'Soccer, baseball, tennis, at paglangoy' },
  { id: 'pun-ulan', levelId: 'pundasyon', order: 24, title: 'Tag-ulan', theme: 'Payong, bota, at mga gamit kapag umuulan' },
];

const KW = 'pun-kwarto';
const BN = 'pun-banyo';
const SP = 'pun-sports';
const UL = 'pun-ulan';

export const pundasyonVocab4: VocabItem[] = [
  phrase(KW, 'kw-beddo', 'ベッド', 'beddo', ['bed']),
  phrase(KW, 'kw-mado', 'まど', 'mado', ['window'], '窓'),
  phrase(KW, 'kw-doa', 'ドア', 'doa', ['door']),
  phrase(KW, 'kw-tokei', 'とけい', 'tokei', ['clock'], '時計'),
  phrase(KW, 'kw-kagami', 'かがみ', 'kagami', ['mirror'], '鏡'),
  phrase(KW, 'kw-denki', 'でんき', 'denki', ['light / electricity'], '電気'),

  phrase(BN, 'bn-shanpuu', 'シャンプー', 'shanpuu', ['shampoo']),
  phrase(BN, 'bn-sekken', 'せっけん', 'sekken', ['soap'], '石鹸'),
  phrase(BN, 'bn-taoru', 'タオル', 'taoru', ['towel']),
  phrase(BN, 'bn-oyu', 'おゆ', 'oyu', ['hot water'], 'お湯'),
  phrase(BN, 'bn-hamigakiko', 'はみがきこ', 'hamigakiko', ['toothpaste'], '歯磨き粉'),

  phrase(SP, 'sp-sakkaa', 'サッカー', 'sakkaa', ['soccer']),
  phrase(SP, 'sp-yakyuu', 'やきゅう', 'yakyuu', ['baseball'], '野球'),
  phrase(SP, 'sp-tenisu', 'テニス', 'tenisu', ['tennis']),
  phrase(SP, 'sp-suiei', 'すいえい', 'suiei', ['swimming'], '水泳'),
  phrase(SP, 'sp-undou', 'うんどう', 'undou', ['exercise / sports'], '運動'),
  phrase(SP, 'sp-sukii', 'スキー', 'sukii', ['skiing']),

  phrase(UL, 'ul-ame', 'あめ', 'ame', ['rain'], '雨'),
  phrase(UL, 'ul-kasa', 'かさ', 'kasa', ['umbrella'], '傘'),
  phrase(UL, 'ul-reinkooto', 'レインコート', 'reinkooto', ['raincoat']),
  phrase(UL, 'ul-nagagutsu', 'ながぐつ', 'nagagutsu', ['rain boots'], '長靴'),
  phrase(UL, 'ul-boushi', 'ぼうし', 'boushi', ['hat'], '帽子'),
  phrase(UL, 'ul-mizutamari', 'みずたまり', 'mizutamari', ['puddle'], '水たまり'),
];

export const pundasyonGuides4: Record<string, LessonGuide> = {
  'pun-kwarto': {
    intro: 'Ilarawan natin ang kwarto mo. Matututunan natin ang mga gamit sa kwarto, at ang mga salitang "buksan" at "patayin".',
    pronunciation: "Ang 'beddo' ay 'bed-doh'. Ang 'tokei' ay 'toh-kay', at ang 'ei' ay parang mahabang 'ay'.",
    proTip: "Ituro ang gamit sa kwarto habang sinasabi ang pangalan. Kapag binubuksan mo ang bintana, sabihin nang malakas ang 'mado o akemasu'.",
  },
  'pun-banyo': {
    intro: 'Maligo tayo nang maayos! Matututunan natin ang mga gamit sa paliguan at kung paano sabihin ang ginagawa natin doon.',
    pronunciation: "Ang 'shanpuu' ay 'shahn-poo'. Ang 'sekken' ay 'seh-ken', maikli ang 'ken'.",
    proTip: "Sabihin ang gamit habang ginagamit mo ito. Tandaan ang 'de' para sa gamit, gaya ng 'taoru de fukimasu' (pinupunasan ng tuwalya).",
  },
  'pun-sports': {
    intro: 'Anong sport ang gusto mo? Matututunan natin ang pangalan ng mga sports at kung paano sabihing gusto natin ang isang laro.',
    pronunciation: "Ang 'sakkaa' ay 'sahk-kah'. Ang 'yakyuu' ay 'yah-kyoo', at ang 'kyu' ay isang pantig.",
    proTip: "Gamitin ang 'suki desu' para sa paborito. Kapag may nakitang laro sa TV, sabihin ang pangalan nito.",
  },
  'pun-ulan': {
    intro: 'Umuulan ba? Matututunan natin ang mga gamit kapag tag-ulan at kung paano sabihin na umuulan.',
    pronunciation: "Ang 'kasa' ay 'kah-sah'. Ang 'nagagutsu' ay 'nah-gah-goo-tsoo'.",
    proTip: "Bago lumabas, tanungin ang sarili: 'ame ga futte imasu ka?' (umuulan ba?). Sagutin ng 'hai, futte imasu' o 'iie, futte imasen'.",
  },
};

export const pundasyonStories4: Record<string, Story> = {
  'pun-kwarto': {
    title: 'Ang Kwarto Ko',
    lines: [
      { japanese: 'ベッドは、おおきいです。', romaji: 'Beddo wa, ookii desu.', english: 'The bed is big.', tl: 'Malaki ang kama. Ang "ookii" ay malaki.' },
      { japanese: 'まどを、あけます。', romaji: 'Mado o, akemasu.', english: 'I open the window.', tl: 'Binubuksan ko ang bintana. Ang "akeru" ay buksan.' },
      { japanese: 'でんきを、つけましょう。', romaji: 'Denki o, tsukemashou.', english: "Let's turn on the light.", tl: 'Buksan natin ang ilaw. Ang "tsukeru" ay buksan o sindihan.' },
      { japanese: 'とけいを、みます。', romaji: 'Tokei o, mimasu.', english: 'I look at the clock.', tl: 'Tinitingnan ko ang orasan. Ang "miru" ay tumingin.' },
    ],
  },
  'pun-banyo': {
    title: 'Oras ng Paliligo',
    lines: [
      { japanese: 'おふろに、おゆをいれます。', romaji: 'Ofuro ni, oyu o iremasu.', english: 'I put hot water in the bath.', tl: 'Naglalagay ako ng mainit na tubig sa bathtub. Ang "ireru" ay maglagay.' },
      { japanese: 'シャンプーは、いいにおいですね。', romaji: 'Shanpuu wa, ii nioi desu ne.', english: "The shampoo smells good, doesn't it.", tl: 'Mabango ang shampoo, di ba. Ang "nioi" ay amoy.' },
      { japanese: 'せっけんで、てをあらいます。', romaji: 'Sekken de, te o araimasu.', english: 'I wash my hands with soap.', tl: 'Naghuhugas ako ng kamay gamit ang sabon. Ang "de" ay gamit.' },
      { japanese: 'タオルで、ふきます。', romaji: 'Taoru de, fukimasu.', english: 'I dry myself with a towel.', tl: 'Pinupunasan ko ang sarili gamit ang tuwalya. Ang "fuku" ay magpunas.' },
    ],
  },
  'pun-sports': {
    title: 'Sports Tayo',
    lines: [
      { japanese: 'わたしは、サッカーがすきです。', romaji: 'Watashi wa, sakkaa ga suki desu.', english: 'I like soccer.', tl: 'Gusto ko ang soccer. Ang "suki desu" ay gusto ko.' },
      { japanese: 'やきゅうを、みます。', romaji: 'Yakyuu o, mimasu.', english: 'I watch baseball.', tl: 'Nanonood ako ng baseball. Ang "o" ay para sa pinapanood.' },
      { japanese: 'うんどうは、たのしいですね。', romaji: 'Undou wa, tanoshii desu ne.', english: "Exercise is fun, isn't it.", tl: 'Masaya ang ehersisyo, di ba. Ang "undou" ay ehersisyo o sports.' },
      { japanese: 'げんきに、はしりましょう！', romaji: 'Genki ni, hashirimashou!', english: "Let's run energetically!", tl: 'Tumakbo tayo nang masigla! Ang "hashiru" ay tumakbo.' },
    ],
  },
  'pun-ulan': {
    title: 'Umuulan',
    lines: [
      { japanese: 'あめがふっています。', romaji: 'Ame ga futte imasu.', english: "It's raining.", tl: 'Umuulan. Ang "furu" ay bumagsak, at ang "futte imasu" ay bumabagsak ngayon.' },
      { japanese: 'かさを、もって、いきましょう。', romaji: 'Kasa o, motte, ikimashou.', english: "Let's take an umbrella and go.", tl: 'Magdala tayo ng payong at umalis. Ang "motsu" ay magdala.' },
      { japanese: 'ながぐつで、みずたまりを、あるきます。', romaji: 'Nagagutsu de, mizutamari o arukimasu.', english: 'I walk through puddles in rain boots.', tl: 'Naglalakad ako sa mga pool ng tubig gamit ang bota.' },
      { japanese: 'あめは、すきですか？', romaji: 'Ame wa, suki desu ka?', english: 'Do you like rain?', tl: 'Gusto mo ba ang ulan? Ang "suki desu ka" ay gusto mo ba.' },
    ],
  },
};

const L = (kind: LessonSection['kind'], title: string, body: string): LessonSection => ({ kind, title, body });

export const pundasyonSections4: Record<string, LessonSection[]> = {
  'pun-kwarto': [
    L('explain', 'Paliwanag', "Ang 'o' ay tanda ng bagay na ginagalaw: 'mado o akemasu' (binubuksan ang bintana). Ang 'tsukeru' ay buksan o sindihan ang ilaw, at ang 'keshimasu' ay patayin ang ilaw: 'denki o keshimasu'."),
    L('tip', 'Tip & trick', "Maglaro ng 'Hanapin ang gamit': ituro ang isang bagay sa kwarto at itanong 'kore wa nan desu ka?' (ano ito?). Sagutin ng pangalan nito."),
    L('remember', 'Tandaan natin', 'Tokei = orasan (時計): ang 時 ay oras. Kagami = salamin (鏡). Mado = bintana (窓).'),
    L('local', 'Sabi ng mga lokal', 'Sa maraming bahay sa Japan, naghuhubad ng sapatos sa pasukan, at may hiwalay na tsinelas sa loob. Kapag pumasok sa kwarto, madalas nakayapak o naka-medyas lang ang tao.'),
  ],
  'pun-banyo': [
    L('explain', 'Paliwanag', "Ang 'de' ay gamit: 'sekken de' (gamit ang sabon), 'taoru de' (gamit ang tuwalya). Ang 'ni' ay lalagyan: 'ofuro ni' (sa bathtub). Ang 'iremasu' ay maglalagay."),
    L('tip', 'Tip & trick', "Sabihin ang pagkakasunod ng paliligo: 'shanpuu, sekken, taoru'. Ang pagkakasunod ay tumutulong sa alaala, at parang kanta kapag inulit."),
    L('remember', 'Tandaan natin', 'Oyu = mainit na tubig (お湯). Ang お sa unahan ay paggalang, kaya oyu. Sekken = sabon (石鹸).'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, naliligo muna ang tao sa labas ng bathtub, at ang bathtub ay para sa pagbabad. Mainit na tubig ang karaniwan sa ofuro.'),
  ],
  'pun-sports': [
    L('explain', 'Paliwanag', "Ang 'o' ay ginagamit sa pinapanood o ginagawa: 'yakyuu o mimasu' (nanonood ng baseball), 'sakkaa o shimasu' (maglalaro ng soccer). Ang 'ga suki desu' ay gusto ang."),
    L('tip', 'Tip & trick', "Yayain ang kaibigan gamit ang 'ませんか': 'issho ni sakkaa o shimasen ka?' (maglaro ba tayo ng soccer?)."),
    L('remember', 'Tandaan natin', 'Sakkaa = soccer, hango sa English. Yakyuu = baseball (野球), literal na "bolang nasa bukid".'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, malakas ang kultura ng club sa paaralan. Maraming estudyante ang sumasali sa baseball o soccer, at madalas naglalaro sila pagkatapos ng klase.'),
  ],
  'pun-ulan': [
    L('explain', 'Paliwanag', "Ang 'ga futte imasu' ay 'umuulan'. Ang 'furu' ay bumagsak, at ang 'futte imasu' ang ginagamit kapag nangyayari ngayon. Ang 'motte' ay pagdadala: 'kasa o motte' (magdala ng payong)."),
    L('tip', 'Tip & trick', "Gawing tanong sa umaga: 'ame ga futte imasu ka?' (umuulan ba?). Sagutin: 'hai, futte imasu' o 'iie, futte imasen'."),
    L('remember', 'Tandaan natin', 'Kasa = payong (傘). Nagagutsu = bota (長靴): naga ay mahaba, kutsu ay sapatos.'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, may tag-ulan na tinatawag na tsuyu, na tumatagal nang ilang linggo sa tag-init. Maraming tao ang laging may dalang payong sa bag kahit hindi pa umuulan.'),
  ],
};

export const vocabTaglishPun4: Record<string, string> = {
  'vocab-kw-beddo': 'Kama. Galing sa English na "bed".',
  'vocab-kw-mado': 'Bintana. Ang 窓 ay bintana, at madalas itong binubuksan para papasukin ang hangin.',
  'vocab-kw-doa': 'Pinto. Galing sa English na "door".',
  'vocab-kw-tokei': 'Orasan. Ang 時 ay oras, kaya ang 時計 ay "kasangkapan ng oras".',
  'vocab-kw-kagami': 'Salamin. Ginagamit para tingnan ang sarili.',
  'vocab-kw-denki': 'Ilaw o kuryente. Sa pang-araw-araw na usapan, ang "denki o tsukeru" ay buksan ang ilaw.',

  'vocab-bn-shanpuu': 'Shampoo. Galing sa English na "shampoo".',
  'vocab-bn-sekken': 'Sabon. Ang 石鹸 ay sabon, at ang 石けん ang karaniwang sulat.',
  'vocab-bn-taoru': 'Tuwalya. Galing sa English na "towel".',
  'vocab-bn-oyu': 'Mainit na tubig. Ang お sa unahan ay paggalang, kaya "oyu".',
  'vocab-bn-hamigakiko': 'Toothpaste. Ang 歯磨き粉 ay "pulbos ng pagsisipilyo ng ngipin".',

  'vocab-sp-sakkaa': 'Soccer. Galing sa English na "soccer".',
  'vocab-sp-yakyuu': 'Baseball. Ang 野球 ay literal na "bolang nasa bukid".',
  'vocab-sp-tenisu': 'Tennis. Galing sa English na "tennis".',
  'vocab-sp-suiei': 'Paglangoy. Ang 水泳 ay "paglangoy sa tubig".',
  'vocab-sp-undou': 'Ehersisyo o sports sa pangkalahatan. Ang 運動 ay "paggalaw ng katawan".',
  'vocab-sp-sukii': 'Ski o pag-ski. Galing sa English na "ski".',

  'vocab-ul-ame': 'Ulan. Ang 雨 ay ulan, at tag-ulan ang tawag sa panahon nito.',
  'vocab-ul-kasa': 'Payong. Ang 傘 ay payong, at madalas itong dala kapag umuulan.',
  'vocab-ul-reinkooto': 'Raincoat o kapote. Galing sa English na "raincoat".',
  'vocab-ul-nagagutsu': 'Bota pang-ulan. Ang 長靴 ay "mahabang sapatos".',
  'vocab-ul-boushi': 'Sumbrero o sombrero. Ang 帽子 ay pangkalahatang salita para sa sumbrero.',
  'vocab-ul-mizutamari': 'Puddle, o lusak ng tubig sa kalsada. Ang 水たまり ay "tubig na nagtipon".',
};
