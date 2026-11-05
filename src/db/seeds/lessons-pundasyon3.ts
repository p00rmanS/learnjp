import type { LessonGuide, LessonSection, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

// Third batch of Pundasyon ng Bata units: zoo, vehicles, playground, kitchen, and sea animals.

export const pundasyonUnits3: Unit[] = [
  { id: 'pun-zoo', levelId: 'pundasyon', order: 16, title: 'Sa Zoo', theme: 'Elepante, jirap, panda, at iba pang hayop sa zoo' },
  { id: 'pun-sasakyan', levelId: 'pundasyon', order: 17, title: 'Mga Sasakyan', theme: 'Kotse, tren, bisikleta, at eroplano' },
  { id: 'pun-palaruan', levelId: 'pundasyon', order: 18, title: 'Sa Palaruan', theme: 'Slide, swing, at mga laro sa parke' },
  { id: 'pun-kusina', levelId: 'pundasyon', order: 19, title: 'Gamit sa Kusina', theme: 'Plato, kutsara, tinidor, chopsticks, at palayok' },
  { id: 'pun-dagat', levelId: 'pundasyon', order: 20, title: 'Mga Hayop sa Dagat', theme: 'Balyena, dolphin, pagong, at alimasag' },
];

const ZO = 'pun-zoo';
const SY = 'pun-sasakyan';
const PY = 'pun-palaruan';
const KS = 'pun-kusina';
const DG = 'pun-dagat';

export const pundasyonVocab3: VocabItem[] = [
  phrase(ZO, 'zo-zou', 'ぞう', 'zou', ['elephant'], '象'),
  phrase(ZO, 'zo-raion', 'ライオン', 'raion', ['lion']),
  phrase(ZO, 'zo-kirin', 'キリン', 'kirin', ['giraffe']),
  phrase(ZO, 'zo-shimauma', 'しまうま', 'shimauma', ['zebra'], '縞馬'),
  phrase(ZO, 'zo-pengin', 'ペンギン', 'pengin', ['penguin']),
  phrase(ZO, 'zo-panda', 'パンダ', 'panda', ['panda']),

  phrase(SY, 'sy-kuruma', 'くるま', 'kuruma', ['car'], '車'),
  phrase(SY, 'sy-densha', 'でんしゃ', 'densha', ['train'], '電車'),
  phrase(SY, 'sy-basu', 'バス', 'basu', ['bus']),
  phrase(SY, 'sy-jitensha', 'じてんしゃ', 'jitensha', ['bicycle'], '自転車'),
  phrase(SY, 'sy-hikouki', 'ひこうき', 'hikouki', ['airplane'], '飛行機'),
  phrase(SY, 'sy-fune', 'ふね', 'fune', ['boat / ship'], '船'),

  phrase(PY, 'py-suberidai', 'すべりだい', 'suberidai', ['slide'], '滑り台'),
  phrase(PY, 'py-buranko', 'ブランコ', 'buranko', ['swing']),
  phrase(PY, 'py-shiisoo', 'シーソー', 'shiisoo', ['seesaw']),
  phrase(PY, 'py-sunaba', 'すなば', 'sunaba', ['sandbox'], '砂場'),
  phrase(PY, 'py-tomodachi', 'ともだち', 'tomodachi', ['friend'], '友達'),
  phrase(PY, 'py-kouen', 'こうえん', 'kouen', ['park'], '公園'),

  phrase(KS, 'ks-sara', 'さら', 'sara', ['plate'], '皿'),
  phrase(KS, 'ks-hashi', 'はし', 'hashi', ['chopsticks'], '箸'),
  phrase(KS, 'ks-supuun', 'スプーン', 'supuun', ['spoon']),
  phrase(KS, 'ks-fooku', 'フォーク', 'fooku', ['fork']),
  phrase(KS, 'ks-koppu', 'コップ', 'koppu', ['cup / glass']),
  phrase(KS, 'ks-nabe', 'なべ', 'nabe', ['pot'], '鍋'),

  phrase(DG, 'dg-kujira', 'くじら', 'kujira', ['whale'], '鯨'),
  phrase(DG, 'dg-iruka', 'いるか', 'iruka', ['dolphin'], '海豚'),
  phrase(DG, 'dg-kani', 'かに', 'kani', ['crab'], '蟹'),
  phrase(DG, 'dg-ebi', 'えび', 'ebi', ['shrimp'], '海老'),
  phrase(DG, 'dg-kame', 'かめ', 'kame', ['turtle'], '亀'),
  phrase(DG, 'dg-ika', 'いか', 'ika', ['squid'], '烏賊'),
];

export const pundasyonGuides3: Record<string, LessonGuide> = {
  'pun-zoo': {
    intro: 'Gusto mo bang pumunta sa zoo? Makikilala natin ang mga hayop sa zoo at kung paano sila ilalarawan.',
    pronunciation: "Ang 'zou' ay 'zoh'. Ang 'kirin' ay 'kee-reen', at ang 'panda' ay 'pahn-dah'.",
    proTip: "Ituro ang hayop sa larawan at sabihin ang pangalan at isang katangian, halimbawa 'zou wa ookii desu' (malaki ang elepante).",
  },
  'pun-sasakyan': {
    intro: 'Saan ka pupunta ngayon? Matututunan natin ang mga sasakyang nakikita natin sa kalsada, riles, at langit.',
    pronunciation: "Ang 'densha' ay 'den-shah'. Ang 'jitensha' ay 'jee-ten-shah'.",
    proTip: "Kapag may nakitang sasakyan, sabihin ang pangalan nito at kung mabilis (hayai) o malaki (ookii) ito.",
  },
  'pun-palaruan': {
    intro: 'Sa palaruan, pinakamasaya ang mga laro. Matututunan natin ang mga gamit sa parke at kung paano sabihin ang ginagawa natin doon.',
    pronunciation: "Ang 'suberidai' ay 'soo-beh-ree-dai'. Ang 'buranko' ay 'boo-rahn-koh'.",
    proTip: "Sabihin ang ginagawa habang naglalaro: 'suberimasu' (dumudulas) at 'norimasu' (sumasakay). Ang salita at galaw nang sabay ay mabilis matandaan.",
  },
  'pun-kusina': {
    intro: 'Sa kusina, may mga gamit tayo sa pagkain. Alamin natin ang pangalan ng plato, kutsara, tinidor, chopsticks, at palayok.',
    pronunciation: "Ang 'hashi' (chopsticks) ay 'hah-shee'. Ang 'supuun' ay 'soo-puun', at pinahahaba ang 'uu'.",
    proTip: "Ituro ang gamit sa hapag habang sinasabi ang pangalan. Hayaang pumili ang bata: 'dotchi ga ii desu ka?' (alin ang gusto mo?).",
  },
  'pun-dagat': {
    intro: 'Maraming nakatira sa dagat! Alamin natin ang pangalan ng mga hayop sa dagat, mula sa malaking balyena hanggang sa maliit na hipon.',
    pronunciation: "Ang 'kujira' ay 'koo-jee-rah'. Ang 'iruka' ay 'ee-roo-kah'.",
    proTip: "Gumamit ng larawan o video ng aquarium. Ituro ang hayop at sabihin ang pangalan at isang katangian, halimbawa 'iruka wa hayai desu' (mabilis ang dolphin).",
  },
};

export const pundasyonStories3: Record<string, Story> = {
  'pun-zoo': {
    title: 'Pumunta sa Zoo',
    lines: [
      { japanese: 'どうぶつえんに、いきます。', romaji: 'Doubutsuen ni, ikimasu.', english: 'I go to the zoo.', tl: 'Pupunta ako sa zoo. Ang "doubutsuen" ay zoo.' },
      { japanese: 'ぞうは、おおきいです。', romaji: 'Zou wa, ookii desu.', english: 'The elephant is big.', tl: 'Malaki ang elepante. Ang "ookii" ay malaki.' },
      { japanese: 'キリンは、くびがながいです。', romaji: 'Kirin wa, kubi ga nagai desu.', english: 'The giraffe has a long neck.', tl: 'Mahaba ang leeg ng jirap. Ang "kubi" ay leeg at ang "nagai" ay mahaba.' },
      { japanese: 'パンダは、かわいいですね！', romaji: 'Panda wa, kawaii desu ne!', english: "The panda is cute, isn't it!", tl: 'Ang cute ng panda, di ba! Ang "kawaii" ay cute.' },
    ],
  },
  'pun-sasakyan': {
    title: 'Saan Tayo Sasakay?',
    lines: [
      { japanese: 'くるまに、のります。', romaji: 'Kuruma ni, norimasu.', english: 'I ride in a car.', tl: 'Sumasakay ako sa kotse. Ang "noru" ay sumakay.' },
      { japanese: 'でんしゃは、はやいです。', romaji: 'Densha wa, hayai desu.', english: 'The train is fast.', tl: 'Mabilis ang tren. Ang "hayai" ay mabilis.' },
      { japanese: 'じてんしゃで、いきます。', romaji: 'Jitensha de, ikimasu.', english: 'I go by bicycle.', tl: 'Pupunta ako gamit ang bisikleta. Ang "de" ay gamit.' },
      { japanese: 'そらに、ひこうきがあります！', romaji: 'Sora ni, hikouki ga arimasu!', english: "There's an airplane in the sky!", tl: 'May eroplano sa langit! Ang "sora" ay langit.' },
    ],
  },
  'pun-palaruan': {
    title: 'Masayang Parke',
    lines: [
      { japanese: 'こうえんで、あそびます。', romaji: 'Kouen de, asobimasu.', english: 'I play at the park.', tl: 'Naglalaro ako sa parke. Ang "de" ay sa lugar ng ginagawa.' },
      { japanese: 'すべりだいで、すべります。', romaji: 'Suberidai de, suberimasu.', english: 'I slide down the slide.', tl: 'Dumudulas ako sa slide. Ang "suberu" ay dumulas.' },
      { japanese: 'ブランコに、のります。', romaji: 'Buranko ni, norimasu.', english: 'I ride the swing.', tl: 'Sumasakay ako sa swing. Ang "ni noru" ay sumakay sa.' },
      { japanese: 'ともだちと、いっしょに！', romaji: 'Tomodachi to, issho ni!', english: 'Together with my friend!', tl: 'Kasama ang kaibigan ko! Ang "to" ay kasama ng.' },
    ],
  },
  'pun-kusina': {
    title: 'Oras ng Kain',
    lines: [
      { japanese: 'おさらに、ごはんをいれます。', romaji: 'Osara ni, gohan o iremasu.', english: 'I put rice on the plate.', tl: 'Nilalagay ko ang kanin sa plato. Ang "ireru" ay ilagay sa loob.' },
      { japanese: 'はしで、たべます。', romaji: 'Hashi de, tabemasu.', english: 'I eat with chopsticks.', tl: 'Kumakain ako gamit ang chopsticks. Ang "de" ay gamit.' },
      { japanese: 'スプーンとフォーク、どっちがいいですか？', romaji: 'Supuun to fooku, dotchi ga ii desu ka?', english: 'Spoon or fork, which do you prefer?', tl: 'Kutsara o tinidor, alin ang gusto mo? Ang "dotchi" ay alin sa dalawa.' },
      { japanese: 'みずをのみます。', romaji: 'Mizu o nomimasu.', english: 'I drink water.', tl: 'Umiinom ako ng tubig. Ang "nomu" ay uminom.' },
    ],
  },
  'pun-dagat': {
    title: 'Sa Ilalim ng Dagat',
    lines: [
      { japanese: 'うみに、くじらがいます。', romaji: 'Umi ni, kujira ga imasu.', english: 'There is a whale in the sea.', tl: 'May balyena sa dagat. Ang "umi" ay dagat.' },
      { japanese: 'いるかは、はやく、およぎます。', romaji: 'Iruka wa, hayaku, oyogimasu.', english: 'Dolphins swim fast.', tl: 'Mabilis lumangoy ang dolphin. Ang "oyogu" ay lumangoy.' },
      { japanese: 'かめも、いっしょ。', romaji: 'Kame mo, issho.', english: 'The turtle too, together.', tl: 'Pati ang pagong, kasama. Ang "mo" ay pati o din.' },
      { japanese: 'うみは、きれいですね！', romaji: 'Umi wa, kirei desu ne!', english: "The sea is beautiful, isn't it!", tl: 'Maganda ang dagat, di ba! Ang "kirei" ay maganda o malinis.' },
    ],
  },
};

const L = (kind: LessonSection['kind'], title: string, body: string): LessonSection => ({ kind, title, body });

export const pundasyonSections3: Record<string, LessonSection[]> = {
  'pun-zoo': [
    L('explain', 'Paliwanag', "Ang paglalarawan ay gumagamit ng pang-uri: 'ookii' (malaki), 'nagai' (mahaba), at 'kawaii' (cute). Ang 'wa' ay nagmamarka ng paksa: 'zou wa ookii desu' (ang elepante ay malaki)."),
    L('tip', 'Tip & trick', "Maglaro ng 'hayop na Hapon': pumili ng hayop at sabihin ang isang bagay tungkol dito gamit ang '... wa ... desu'."),
    L('remember', 'Tandaan natin', "Zou = elepante. Kirin = jirap, at isipin ang mahabang leeg nito. Panda = panda, pareho ang salita sa Japan at sa Tagalog."),
    L('local', 'Sabi ng mga lokal', 'Maraming zoo sa Japan ang may palabas ng pagpapakain sa mga hayop, at maraming bata ang may paboritong hayop na sinusundan ng pamilya tuwing bumibisita.'),
  ],
  'pun-sasakyan': [
    L('explain', 'Paliwanag', "Ang 'de' ay gamit ng sasakyan: 'densha de' (sakay ng tren), 'jitensha de' (gamit ang bisikleta). Ang 'ni' ay lugar ng pagsakay: 'kuruma ni noru' (sumakay sa kotse)."),
    L('tip', 'Tip & trick', "Sa tuwing sasakay, sabihin ang sasakyan at saan ka pupunta: 'densha de ... ni ikimasu'. Nakakatulong ito sa pag-alala ng 'de' at 'ni'."),
    L('remember', 'Tandaan natin', "Kuruma = kotse, 車 ang kanji. Densha = tren, at ang 電車 ay literal na 'sasakyang kuryente'. Hikouki = eroplano, ang 飛行機 ay 'makina na lumilipad'."),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, maraming estudyante ang bumibiyahe papuntang paaralan gamit ang tren o bisikleta. Madalas itinuturo sa mga bata ang tamang pagsakay sa tren.'),
  ],
  'pun-palaruan': [
    L('explain', 'Paliwanag', "Ang 'de' ay lugar ng ginagawa: 'kouen de asobimasu' (naglalaro sa parke). Ang 'ni' ay lugar na sinasakyan o inuupuan: 'buranko ni norimasu'. Ang 'to' ay 'kasama ang': 'tomodachi to'."),
    L('tip', 'Tip & trick', "Mag-imbita ng kalaro: 'issho ni asobimashou!' (maglaro tayo nang magkasama!). Ginagamit ito sa pag-aya."),
    L('remember', 'Tandaan natin', 'Suberu = dumulas. Ang suberidai ay "lugar ng pagdulas". Tomodachi = kaibigan, ang salitang gamitin kapag may kalaro ka.'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, madalas maglaro ang mga bata sa parke pagkatapos ng eskwela, at karaniwan silang nagdadala ng sariling laruan.'),
  ],
  'pun-kusina': [
    L('explain', 'Paliwanag', "Ang 'ni' ay lugar kung saan inilalagay: 'osara ni' (sa plato). Ang 'de' ay gamit: 'hashi de' (gamit ang chopsticks). Ang 'dotchi' ay pagpili sa dalawa: 'supuun to fooku, dotchi?' (kutsara o tinidor, alin?)."),
    L('tip', 'Tip & trick', "Pag-aralan ito sa tunay na hapag. Itanong ang pangalan ng bawat gamit habang kumakain."),
    L('remember', 'Tandaan natin', 'Hashi (箸) = chopsticks. Ang hashi (橋) na tulay ay magkapareho ang tunog pero magkaiba ang kanji. Nabe = palayok, at ang nabe ay sabaw na niluluto sa palayok.'),
    L('local', 'Sabi ng mga lokal', "Sa Japan, madalas gumagamit ng chopsticks sa pang-araw-araw na kainan, pero may kutsara para sa sabaw at kanin ng mga bata. Bago kumain, sinasabi ang 'itadakimasu'."),
  ],
  'pun-dagat': [
    L('explain', 'Paliwanag', "Ang 'ni' sa 'umi ni' ay 'sa': 'umi ni imasu' (nasa dagat). Ang 'mo' ay 'pati': 'kame mo imasu' (may pagong din). Ang 'hayaku' ay mabilis, galing sa 'hayai'."),
    L('tip', 'Tip & trick', "Gamitin ang 'mo' para sa listahan: 'kujira mo imasu, iruka mo imasu' (may balyena rin, may dolphin rin)."),
    L('remember', 'Tandaan natin', 'Kujira = balyena. Ang kanji na 鯨 ay may radical na 魚 (isda) sa gilid. Kani = alimasag, at madalas makita sa sushi.'),
    L('local', 'Sabi ng mga lokal', 'Sa Japan, mahilig sa seafood ang maraming pamilya, kaya kilala na ng mga bata ang ebi (hipon) at kani (alimasag) mula pagkabata. Sikat din ang aquarium para sa bakasyon ng pamilya.'),
  ],
};

// Taglish notes for the vocabulary above, keyed by item id.
export const vocabTaglishPun3: Record<string, string> = {
  'vocab-zo-zou': 'Elepante. Pinakamalaking hayop sa lupa na madalas makita sa zoo.',
  'vocab-zo-raion': 'Leon. Galing sa English na "lion", at may mahabang buhok sa leeg.',
  'vocab-zo-kirin': 'Jirap. Pinakamataas na hayop sa lupa, may mahabang leeg.',
  'vocab-zo-shimauma': 'Zebra. Kilala sa mga guhit na itim at puti. Ang 縞 (shima) ay guhit.',
  'vocab-zo-pengin': 'Penguin. Galing sa English. Hindi lumilipad pero magaling lumangoy.',
  'vocab-zo-panda': 'Panda. Ang salita ay pareho sa Japan at sa Tagalog.',

  'vocab-sy-kuruma': 'Kotse o sasakyan. Ang 車 ay ginagamit din sa mga sasakyan sa pangkalahatan.',
  'vocab-sy-densha': 'Tren. Ang 電車 ay literal na "sasakyang kuryente".',
  'vocab-sy-basu': 'Bus. Galing sa English na "bus".',
  'vocab-sy-jitensha': 'Bisikleta. Ang 自転車 ay literal na "sasakyang umiikot ng sarili".',
  'vocab-sy-hikouki': 'Eroplano. Ang 飛行機 ay literal na "makina na lumilipad".',
  'vocab-sy-fune': 'Bangka o barko. Ang ふね ay sasakyan sa tubig.',

  'vocab-py-suberidai': 'Slide. Dinudulas ang bata mula sa itaas.',
  'vocab-py-buranko': 'Swing. Nakasabit na upuan na sinasakyan at ina-ugoy ng bata.',
  'vocab-py-shiisoo': 'Seesaw o tabla-tabla. Galing sa English na "seesaw".',
  'vocab-py-sunaba': 'Lugar na may buhangin para maglaro. Ang "suna" ay buhangin.',
  'vocab-py-tomodachi': 'Kaibigan. Ang salitang gamitin kapag may kalaro ka.',
  'vocab-py-kouen': 'Parke. Ang lugar na pinupuntahan para maglaro at magpahinga.',

  'vocab-ks-sara': 'Plato. Ginagamit sa pagkain ng kanin at ulam.',
  'vocab-ks-hashi': 'Chopsticks. Magkapareho ang tunog ng hashi (tulay) pero iba ang kanji.',
  'vocab-ks-supuun': 'Kutsara. Galing sa English na "spoon".',
  'vocab-ks-fooku': 'Tinidor. Galing sa English na "fork".',
  'vocab-ks-koppu': 'Baso o tasa. Galing sa Dutch na "kopje" at ginagamit sa inumin.',
  'vocab-ks-nabe': 'Palayok o kaserola. Ginagamit sa pagluluto ng sabaw.',

  'vocab-dg-kujira': 'Balyena. Pinakamalaking hayop sa dagat.',
  'vocab-dg-iruka': 'Dolphin. Matalino at mabilis lumangoy.',
  'vocab-dg-kani': 'Alimasag o alimango. Madalas makita sa sushi.',
  'vocab-dg-ebi': 'Hipon. Madalas na sangkap sa tempura.',
  'vocab-dg-kame': 'Pagong. Mabagal pero matagal mabuhay.',
  'vocab-dg-ika': 'Pusit. Madalas na sangkap sa sushi at ulam.',
};
