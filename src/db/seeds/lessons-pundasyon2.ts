import type { LessonGuide, LessonSection, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

// More Pundasyon ng Bata units: food, daily routine, insects, jobs, and the five senses.

export const pundasyonUnits2: Unit[] = [
  { id: 'pun-pagkain', levelId: 'pundasyon', order: 11, title: 'Pagkain ng Bata', theme: 'Kanin, tinapay, gatas, at mga paborito sa almusal' },
  { id: 'pun-umaga', levelId: 'pundasyon', order: 12, title: 'Umaga at Gabi', theme: 'Gising, sipilyo, paligo, at tulog' },
  { id: 'pun-insekto', levelId: 'pundasyon', order: 13, title: 'Mga Insekto', theme: 'Paru-paro, langgam, bubuyog, at kabutomushi' },
  { id: 'pun-trabaho', levelId: 'pundasyon', order: 14, title: 'Mga Trabaho ng Tao', theme: 'Doktor, guro, nars, at mga tumutulong sa atin' },
  { id: 'pun-pandama', levelId: 'pundasyon', order: 15, title: 'Mga Pandama', theme: 'Mata, tenga, ilong, bibig, kamay, at paa' },
];

const PF = 'pun-pagkain';
const UM = 'pun-umaga';
const IN = 'pun-insekto';
const TR = 'pun-trabaho';
const PM = 'pun-pandama';

export const pundasyonVocab2: VocabItem[] = [
  phrase(PF, 'pf-gohan', 'ごはん', 'gohan', ['rice (cooked) / meal'], '御飯'),
  phrase(PF, 'pf-pan', 'パン', 'pan', ['bread']),
  phrase(PF, 'pf-gyuunyuu', 'ぎゅうにゅう', 'gyuunyuu', ['milk'], '牛乳'),
  phrase(PF, 'pf-tamago', 'たまご', 'tamago', ['egg'], '卵'),
  phrase(PF, 'pf-sakana', 'さかな', 'sakana', ['fish'], '魚'),
  phrase(PF, 'pf-niku', 'にく', 'niku', ['meat'], '肉'),
  phrase(PF, 'pf-mizu', 'みず', 'mizu', ['water'], '水'),
  phrase(PF, 'pf-juusu', 'ジュース', 'juusu', ['juice']),
  phrase(PF, 'pf-ocha', 'おちゃ', 'ocha', ['tea'], 'お茶'),
  phrase(PF, 'pf-okashi', 'おかし', 'okashi', ['sweets / snacks'], 'お菓子'),

  phrase(UM, 'um-okiru', 'おきる', 'okiru', ['to wake up'], '起きる'),
  phrase(UM, 'um-neru', 'ねる', 'neru', ['to sleep'], '寝る'),
  phrase(UM, 'um-arau', 'あらう', 'arau', ['to wash'], '洗う'),
  phrase(UM, 'um-haburashi', 'はぶらし', 'haburashi', ['toothbrush'], '歯ブラシ'),
  phrase(UM, 'um-ofuro', 'おふろ', 'ofuro', ['bath'], 'お風呂'),
  phrase(UM, 'um-taberu', 'たべる', 'taberu', ['to eat'], '食べる'),
  phrase(UM, 'um-oyasumi', 'おやすみ', 'oyasumi', ['good night / rest'], 'お休み'),
  phrase(UM, 'um-hairu', 'はいる', 'hairu', ['to enter / to get in'], '入る'),

  phrase(IN, 'in-chou', 'ちょう', 'chou', ['butterfly'], '蝶'),
  phrase(IN, 'in-tonbo', 'とんぼ', 'tonbo', ['dragonfly'], '蜻蛉'),
  phrase(IN, 'in-ari', 'あり', 'ari', ['ant'], '蟻'),
  phrase(IN, 'in-hachi', 'はち', 'hachi', ['bee'], '蜂'),
  phrase(IN, 'in-mushi', 'むし', 'mushi', ['insect / bug'], '虫'),
  phrase(IN, 'in-kabutomushi', 'かぶとむし', 'kabutomushi', ['beetle']),

  phrase(TR, 'tr-isha', 'いしゃ', 'isha', ['doctor'], '医者'),
  phrase(TR, 'tr-sensei', 'せんせい', 'sensei', ['teacher'], '先生'),
  phrase(TR, 'tr-kangoshi', 'かんごし', 'kangoshi', ['nurse'], '看護師'),
  phrase(TR, 'tr-ryourinin', 'りょうりにん', 'ryourinin', ['chef / cook'], '料理人'),
  phrase(TR, 'tr-keisatsukan', 'けいさつかん', 'keisatsukan', ['police officer'], '警察官'),
  phrase(TR, 'tr-kashu', 'かしゅ', 'kashu', ['singer'], '歌手'),

  phrase(PM, 'pm-me', 'め', 'me', ['eye(s)'], '目'),
  phrase(PM, 'pm-mimi', 'みみ', 'mimi', ['ear(s)'], '耳'),
  phrase(PM, 'pm-hana', 'はな', 'hana', ['nose'], '鼻'),
  phrase(PM, 'pm-kuchi', 'くち', 'kuchi', ['mouth'], '口'),
  phrase(PM, 'pm-te', 'て', 'te', ['hand(s)'], '手'),
  phrase(PM, 'pm-ashi', 'あし', 'ashi', ['foot / leg'], '足'),
];

export const pundasyonGuides2: Record<string, LessonGuide> = {
  'pun-pagkain': {
    intro: 'Gutom ka na ba? Sa araw na ito, aalamin natin ang mga pagkaing madalas sa almusal at meryenda ng mga bata sa Japan.',
    pronunciation: "Ang 'gohan' ay 'go-hahn'. Ang 'gyuunyuu' ay 'gyoo-nyoo', at pinahahaba ang 'u' sa gitna.",
    proTip: 'Sabihin ang pangalan ng pagkain bago ito kainin. Mas madaling maalala ang salita kapag kasama ng tunay na pagkain.',
  },
  'pun-umaga': {
    intro: 'Bawat araw, may mga gawain tayo: gumising, maghilamos, magsipilyo, at matulog. Ito ang mga salitang ginagamit ng mga bata sa Japan sa araw-araw.',
    pronunciation: "Ang 'okiru' ay 'oh-kee-roo'. Ang 'oyasumi' ay 'oh-yah-soo-mee'.",
    proTip: 'Gawing kwento ang routine. Sabihin ang bawat gawain habang ginagawa mo ito, at tandaan ang pagkakasunod-sunod.',
  },
  'pun-insekto': {
    intro: 'Sa hardin o parke, makikita mo ang maraming maliliit na nilalang. Alamin natin ang pangalan nila!',
    pronunciation: "Ang 'chou' ay 'choh', mahaba ang 'o'. Ang 'hachi' ay 'hah-chee'.",
    proTip: 'Maghanap ng insekto sa labas at sabihin ang pangalan nito. Ang totoong nakikita ay mas tumatatak kaysa sa larawan.',
  },
  'pun-trabaho': {
    intro: 'Ano ang gusto mong maging paglaki mo? Matututunan natin ang mga trabahong tumutulong sa atin araw-araw.',
    pronunciation: "Ang 'isha' ay 'ee-shah'. Ang 'keisatsukan' ay 'kay-sah-tsoo-kahn', na may mahabang 'ei' na parang 'ey'.",
    proTip: "Kapag may nakikitang taong nagtatrabaho, itanong: 'nani no shigoto desu ka?' (anong trabaho niya?). Tanong at sagot ang pinakamabilis matuto.",
  },
  'pun-pandama': {
    intro: 'May limang pandama ang tao: paningin, pandinig, pang-amoy, panlasa, at pandamdam. Ang mga salitang ito ay tumutulong sa atin na makita, marinig, at maamoy ang mundo.',
    pronunciation: "Ang 'mimi' ay 'mi-mi', parehong maikli ang pantig. Ang 'me' ay 'meh'.",
    proTip: 'Ituro ang bahagi ng katawan habang sinasabi ang pangalan. Gamitin ang galaw: pumikit, tapikin ang tenga, at pindutin ang ilong.',
  },
};

export const pundasyonStories2: Record<string, Story> = {
  'pun-pagkain': {
    title: 'Almusal Namin',
    lines: [
      { japanese: 'あさごはんは、ごはんとたまごです。', romaji: 'Asagohan wa, gohan to tamago desu.', english: 'Breakfast is rice and egg.', tl: 'Kanin at itlog ang almusal. Ang "asagohan" ay almusal.' },
      { japanese: 'のみものは、ぎゅうにゅうです。', romaji: 'Nomimono wa, gyuunyuu desu.', english: 'The drink is milk.', tl: 'Gatas ang inumin. Ang "nomimono" ay inumin.' },
      { japanese: 'おかしは、ひとつだけ。', romaji: 'Okashi wa, hitotsu dake.', english: 'Only one sweet.', tl: 'Isang matamis lang. Ang "dake" ay lang o tanging.' },
      { japanese: 'おいしいですね！', romaji: 'Oishii desu ne!', english: "Delicious, isn't it!", tl: 'Masarap, di ba! Ang "oishii" ay masarap.' },
    ],
  },
  'pun-umaga': {
    title: 'Ang Routine Ko',
    lines: [
      { japanese: 'あさ、ろくじにおきます。', romaji: 'Asa, roku-ji ni okimasu.', english: 'I wake up at six in the morning.', tl: 'Gumigising ako nang alas-sais ng umaga. Ang "asa" ay umaga.' },
      { japanese: 'はをみがいて、かおをあらいます。', romaji: 'Ha o migaite, kao o araimasu.', english: 'I brush my teeth and wash my face.', tl: 'Nagsisipilyo ako at naghihilamos. Ang "te" ay nag-uugnay ng dalawang gawain.' },
      { japanese: 'よるは、おふろにはいります。', romaji: 'Yoru wa, ofuro ni hairimasu.', english: 'At night I take a bath.', tl: 'Sa gabi naliligo ako. Ang "yoru" ay gabi.' },
      { japanese: 'おやすみなさい。', romaji: 'Oyasumi nasai.', english: 'Good night.', tl: 'Magandang gabi, o matulog ka na. Sinasabi ito bago matulog.' },
    ],
  },
  'pun-insekto': {
    title: 'Sa Hardin',
    lines: [
      { japanese: 'ちょうがとんでいます。', romaji: 'Chou ga tonde imasu.', english: 'A butterfly is flying.', tl: 'May lumilipad na paru-paro. Ang "tonde imasu" ay lumilipad ngayon.' },
      { japanese: 'ありが、いっぱいいます。', romaji: 'Ari ga, ippai imasu.', english: 'There are lots of ants.', tl: 'Maraming langgam. Ang "ippai" ay marami o puno.' },
      { japanese: 'はちに、きをつけて。', romaji: 'Hachi ni, ki o tsukete.', english: 'Be careful of the bees.', tl: 'Mag-ingat sa bubuyog. Ang "ki o tsukete" ay mag-ingat.' },
      { japanese: 'むしは、おもしろいですね！', romaji: 'Mushi wa, omoshiroi desu ne!', english: "Insects are interesting, aren't they!", tl: 'Nakakatuwa ang mga insekto, di ba! Ang "omoshiroi" ay kawili-wili.' },
    ],
  },
  'pun-trabaho': {
    title: 'Ano ang Gusto Mong Maging?',
    lines: [
      { japanese: 'わたしのゆめは、せんせいです。', romaji: 'Watashi no yume wa, sensei desu.', english: 'My dream is to be a teacher.', tl: 'Pangarap kong maging guro. Ang "yume" ay pangarap.' },
      { japanese: 'いしゃさんは、びょうきを なおします。', romaji: 'Isha-san wa, byouki o naoshimasu.', english: 'The doctor cures illnesses.', tl: 'Ginagamot ng doktor ang sakit. Ang "byouki" ay sakit.' },
      { japanese: 'けいさつかんは、まちをまもります。', romaji: 'Keisatsukan wa, machi o mamorimasu.', english: 'The police protect the town.', tl: 'Binabantayan ng pulis ang bayan. Ang "machi" ay bayan o lungsod.' },
      { japanese: 'なんになりたいですか？', romaji: 'Nan ni naritai desu ka?', english: 'What do you want to become?', tl: 'Ano ang gusto mong maging? Ang "naritai" ay gusto kong maging.' },
    ],
  },
  'pun-pandama': {
    title: 'Limang Pandama',
    lines: [
      { japanese: 'めで、みます。', romaji: 'Me de, mimasu.', english: 'I look with my eyes.', tl: 'Tumitingin ako gamit ang mata. Ang "de" ay gamit o sa pamamagitan ng.' },
      { japanese: 'みみで、きこえます。', romaji: 'Mimi de, kikoemasu.', english: 'I hear with my ears.', tl: 'Naririnig ko gamit ang tenga. Ang "kikoemasu" ay naririnig.' },
      { japanese: 'はなで、かぎます。', romaji: 'Hana de, kagimasu.', english: 'I smell with my nose.', tl: 'Naaamoy ko gamit ang ilong. Ang "kagu" ay amuyin.' },
      { japanese: 'くちで、たべます。', romaji: 'Kuchi de, tabemasu.', english: 'I eat with my mouth.', tl: 'Kumakain ako gamit ang bibig. Ang "taberu" ay kumain.' },
    ],
  },
};

const L = (kind: LessonSection['kind'], title: string, body: string): LessonSection => ({ kind, title, body });

export const pundasyonSections2: Record<string, LessonSection[]> = {
  'pun-pagkain': [
    L('explain', 'Paliwanag', "Ang 'gohan' ay kanin, pero madalas din itong ginagamit para sa pagkain sa pangkalahatan. Idinadagdag ang oras ng araw: 'asagohan' (almusal), 'hirugohan' (tanghalian), at 'bangohan' (hapunan). Sa inumin, gamitin ang 'mizu' (tubig), 'ocha' (tsaa), at 'gyuunyuu' (gatas)."),
    L('tip', 'Tip & trick', "Magtanong ng 'nani o tabemasu ka?' (ano ang kakainin mo?) at sagutin ng pangalan ng pagkain. Ang tanong at sagot na ganito ay araw-araw na usapan sa hapag-kainan."),
    L('remember', 'Tandaan natin', "Ang 牛 (gyuu) ay baka, kaya ang gatas ng baka ay 牛乳 (gyuunyuu). Mizu = tubig, ang unang inumin na itinuturo sa bata."),
    L('local', 'Sabi ng mga lokal', 'Maraming batang Hapon ang may dalang obentō (baon) sa paaralan. Madalas may kanin, itlog, at gulay ang laman nito, at minsan hinuhubog pa ang kanin na parang hayop o bulaklak.'),
  ],
  'pun-umaga': [
    L('explain', 'Paliwanag', "Ang 'okiru' (gumising) at 'neru' (matulog) ay sa anyong '-masu' kapag araw-araw na gawain: 'okimasu', 'nemasu'. Ang 'te' form ay ginagamit para pagsunod-sunurin ang mga gawain: 'ha o migaite' (nagsisipilyo at)."),
    L('tip', 'Tip & trick', 'Ulitin ang routine sa tamang pagkakasunod: gising, hilamos, sipilyo, kain, alis, uwi, paligo, tulog. Sabihin ang bawat isa, at sa sunod na araw, ulitin ang pagkakasunod.'),
    L('remember', 'Tandaan natin', "Okiru = gumising. Ang 'oki' ay tumayo mula sa higaan. Oyasumi = magpahinga na, ang sinasabi bago matulog."),
    L('local', 'Sabi ng mga lokal', "Sa Japan, sinasabi ang 'itadakimasu' bago kumain bilang pasasalamat sa pagkain, at 'gochisousama deshita' pagkatapos. Ang 'oyasumi' ay sinasabi sa pamilya bago matulog."),
  ],
  'pun-insekto': [
    L('explain', 'Paliwanag', "Ang mga pangalan ng insekto ay pangngalan: 'chou', 'hachi', 'ari'. Para sabihing may nakikita ka, gamitin ang 'ga imasu': 'chou ga imasu' (may paru-paro). Ang 'imasu' ay ginagamit sa mga bagay na may buhay."),
    L('tip', 'Tip & trick', "Gumamit ng larawan ng mga insekto at ituro ang bawat isa. Sabihin: 'kore wa ... desu' (ito ay ...)."),
    L('remember', 'Tandaan natin', 'Chou = paru-paro. Hachi = bubuyog. Ari = langgam. Tatlong magkakaibang salita para sa tatlong insektong madalas makita sa labas.'),
    L('local', 'Sabi ng mga lokal', 'Tuwing tag-init, maraming batang Hapon ang naghahanap ng kabutomushi (beetle) sa mga puno at kahoy. Kilala ang tag-init sa Japan bilang panahon ng mga insekto.'),
  ],
  'pun-trabaho': [
    L('explain', 'Paliwanag', "Ang mga trabaho ay pangngalan: 'isha', 'sensei', 'kashu'. Para sabihin kung ano ka: 'watashi wa ... desu' (ako ay ...). Ang 'naritai' ay gusto kong maging. Huwag idikit ang 'san' sa 'sensei', dahil may paggalang na ang salitang ito."),
    L('tip', 'Tip & trick', "Gumawa ng laro: ituro ang larawan ng trabaho at sabihin ang pangalan. Kapag tama, sabihin ang 'sugoi!' (galing!)."),
    L('remember', 'Tandaan natin', "Isha = doktor. Sensei = guro, at ginagamit din para sa mga taong nirerespeto sa kaalaman. Keisatsukan = pulis, at ang 官 (kan) ay tumutukoy sa opisyal."),
    L('local', 'Sabi ng mga lokal', "Sa Japan, malaki ang respeto sa guro. Ang tawag na 'sensei' ay ginagamit din sa doktor at ilang propesyonal, bilang paggalang."),
  ],
  'pun-pandama': [
    L('explain', 'Paliwanag', "Ang 'de' ay 'gamit ang': 'me de' (gamit ang mata). Ang 'mimasu' ay tumingin, 'kikoemasu' ay naririnig, 'kagimasu' ay naaamoy, at 'tabemasu' ay kumain."),
    L('tip', 'Tip & trick', "Maglaro ng 'Ano ito?': pumikit, hawakan ang bagay, at sabihin ang pandamang ginamit: 'te de sawarimasu' (hinawakan gamit ang kamay)."),
    L('remember', 'Tandaan natin', 'Me = mata, mimi = tenga, hana = ilong, kuchi = bibig, te = kamay, ashi = paa. Ang me at mimi ay may dalawang bersyon, isa sa bawat gilid ng mukha.'),
    L('local', 'Sabi ng mga lokal', "Maraming Hapon ang nagdidikit ng mga kamay bago sabihin ang 'itadakimasu', bilang pasasalamat sa pagkain at sa mga nagluto nito."),
  ],
};

// Taglish notes for the vocabulary above, keyed by item id.
export const vocabTaglishPun2: Record<string, string> = {
  'vocab-pf-gohan': 'Kanin, at pagkain sa pangkalahatan. Idinadagdag sa oras ng araw ang "asa" (umaga), "hiru" (tanghali), o "ban" (gabi).',
  'vocab-pf-pan': 'Tinapay. Galing sa Portuguese na "pão", at karaniwang almusal sa Japan.',
  'vocab-pf-gyuunyuu': 'Gatas. Ang 牛 (gyuu) ay baka, kaya ang gatas ng baka ay gyuunyuu.',
  'vocab-pf-tamago': 'Itlog. Ginagamit sa maraming ulam, at madalas sa almusal.',
  'vocab-pf-sakana': 'Isda. Karaniwang pagkain sa Japan, kadalasang inihaw o nasa sabaw.',
  'vocab-pf-niku': 'Karne. Madalas sa curry at sa pagkaing pinirito.',
  'vocab-pf-mizu': 'Tubig. Ang unang inumin na dapat matutunan ng bata.',
  'vocab-pf-juusu': 'Juice. Galing sa English na "juice".',
  'vocab-pf-ocha': 'Tsaa. Ang "o" sa unahan ay paggalang, kaya "ocha".',
  'vocab-pf-okashi': 'Matamis o meryenda. Pwede rin ituring na kendi, biskwit, o cake.',

  'vocab-um-okiru': 'Gumising, o bumangon sa higaan. Kasalungat ng "neru".',
  'vocab-um-neru': 'Matulog. Kasalungat ng "okiru".',
  'vocab-um-arau': 'Maghugas o maghilamos. Ginagamit sa "kao o arau" (maghilamos).',
  'vocab-um-haburashi': 'Sipilyo. Galing sa English na "brush" at "ha" (ngipin).',
  'vocab-um-ofuro': 'Paligo, o bathtub. Ang "o" sa unahan ay paggalang.',
  'vocab-um-taberu': 'Kumain. Karaniwang ginagamit sa "gohan o taberu" (kumain ng kanin).',
  'vocab-um-oyasumi': 'Magpahinga na, o magandang gabi. Sinasabi bago matulog.',
  'vocab-um-hairu': 'Pumasok, o maligo sa ofuro. Ginagamit sa "ofuro ni hairu" (maligo).',

  'vocab-in-chou': 'Paru-paro. Kumakalat ang pakpak nito sa hangin.',
  'vocab-in-tonbo': 'Tutubi. Madalas makita sa palayan at parke tuwing tag-init.',
  'vocab-in-ari': 'Langgam. Maliit pero masipag, at kadalasang nasa pagkain sa labas.',
  'vocab-in-hachi': 'Bubuyog. Mag-ingat dahil may tusok ito.',
  'vocab-in-mushi': 'Insekto o bug sa pangkalahatan.',
  'vocab-in-kabutomushi': 'Beetle o salagubang. Paborito ng mga batang Hapon tuwing tag-init.',

  'vocab-tr-isha': 'Doktor. Tumutulong gamutin ang sakit.',
  'vocab-tr-sensei': 'Guro. Ginagamit din sa doktor at iba pang propesyonal bilang paggalang.',
  'vocab-tr-kangoshi': 'Nars. Tumutulong sa doktor at sa pag-aalaga ng may sakit.',
  'vocab-tr-ryourinin': 'Chef o cook. Nagluluto ng pagkain sa restawran o bahay.',
  'vocab-tr-keisatsukan': 'Pulis. Binabantayan ang kaligtasan ng bayan.',
  'vocab-tr-kashu': 'Mang-aawit. Ang "uta" ay kanta.',

  'vocab-pm-me': 'Mata. Ginagamit para tumingin at makakita.',
  'vocab-pm-mimi': 'Tenga. Ginagamit para makarinig.',
  'vocab-pm-hana': 'Ilong. Ginagamit para makaamoy.',
  'vocab-pm-kuchi': 'Bibig. Ginagamit para kumain at magsalita.',
  'vocab-pm-te': 'Kamay. Ginagamit para humawak.',
  'vocab-pm-ashi': 'Paa o binti. Ginagamit para maglakad at tumakbo.',
};
