import type { LessonGuide, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const n5Extra6Units: Unit[] = [
  { id: 'n5-visit', levelId: 'n5', order: 29, title: 'Sa Bahay ng Kaibigan', theme: 'Paano pumasok, magpasalamat, at magpaalam sa bahay ng iba' },
  { id: 'n5-cooking', levelId: 'n5', order: 30, title: 'Sa Kusina', theme: 'Mga salitang pang-luto: hiwa, prito, pakuluan, at mga sangkap' },
];

const VI = 'n5-visit';
const CK = 'n5-cooking';

export const n5Extra6Vocab: VocabItem[] = [
  phrase(VI, 'vi-ojamashimasu', 'おじゃまします', 'ojamashimasu', ['excuse me for intruding (said when entering)'], 'お邪魔します'),
  phrase(VI, 'vi-osewa', 'おせわになりました', 'osewa ni narimashita', ['thank you for your help / hospitality'], 'お世話になりました'),
  phrase(VI, 'vi-otearai', 'おてあらい', 'otearai', ['toilet (polite)'], 'お手洗い'),
  phrase(VI, 'vi-kutsu-nugu', 'くつをぬぎます', 'kutsu o nugimasu', ['to take off (shoes)'], '靴を脱ぎます'),
  phrase(VI, 'vi-tsumaranai', 'つまらないものですが', 'tsumaranai mono desu ga', ['it is a small gift, but please accept it'], 'つまらない物ですが'),
  phrase(VI, 'vi-dozo', 'どうぞ', 'dozo', ['please, go ahead / here you are']),
  phrase(VI, 'vi-suwarimasu', 'すわります', 'suwarimasu', ['to sit down'], '座ります'),
  phrase(VI, 'vi-nomimono', 'のみもの', 'nomimono', ['drink (beverage)'], '飲み物'),
  phrase(VI, 'vi-oishikatta', 'おいしかったです', 'oishikatta desu', ['it was delicious (past)'], '美味しかったです'),
  phrase(VI, 'vi-mata-kite', 'またきてください', 'mata kite kudasai', ['please come again'], 'また来てください'),

  phrase(CK, 'ck-kirimasu', 'きります', 'kirimasu', ['to cut (food)'], '切ります'),
  phrase(CK, 'ck-nimasu', 'にます', 'nimasu', ['to boil / simmer'], '煮ます'),
  phrase(CK, 'ck-yakimasu', 'やきます', 'yakimasu', ['to grill / bake / fry'], '焼きます'),
  phrase(CK, 'ck-araimasu', 'あらいます', 'araimasu', ['to wash'], '洗います'),
  phrase(CK, 'ck-shio', 'しお', 'shio', ['salt'], '塩'),
  phrase(CK, 'ck-satou', 'さとう', 'satou', ['sugar'], '砂糖'),
  phrase(CK, 'ck-shouyu', 'しょうゆ', 'shouyu', ['soy sauce'], '醤油'),
  phrase(CK, 'ck-miso', 'みそ', 'miso', ['miso (fermented soybean paste)'], '味噌'),
  phrase(CK, 'ck-abura', 'あぶら', 'abura', ['oil'], '油'),
  phrase(CK, 'ck-okazu', 'おかず', 'okazu', ['side dish'], 'お菜'),
];

export const n5Extra6Guides: Record<string, LessonGuide> = {
  'n5-visit': {
    intro: "Ngayon, pupunta tayo sa bahay ng kaibigan! Sa Japan, may mga simpleng gawi at salita na nagpapakita ng respeto: magsabi bago pumasok, maghubad ng sapatos, at magpasalamat sa pagkain.",
    pronunciation: "Ang 'ojamashimasu' ay 'oh-jah-mah-shee-mahss'. Ang 'kutsu' ay 'koot-soo', at ang 'u' sa dulo ay halos hindi naririnig. Ang 'dozo' ay 'doh-zoh'.",
    proTip: "Sabihin ang 'tsumaranai mono desu ga' kapag nagbibigay ng regalo. Mapagpakumbabang paraan ito ng pagsasabing maliit lang ang regalo, pero may kasamang pagmamahal.",
  },
  'n5-cooking': {
    intro: "Tara, magluto tayo! Sa kusina, may mga simpleng salitang gagamitin mo sa paghiwa, pagprito, at pagpapakulo ng pagkain. Kapag alam mo ang mga ito, kaya mo nang sabihin ang ginagawa mo habang nagluluto.",
    pronunciation: "Ang 'kirimasu' ay 'kee-ree-mahss'. Ang 'yakimasu' ay 'yah-kee-mahss'. Ang 'shouyu' ay 'shoh-yoo', na may mahabang 'oh' sa unahan.",
    proTip: "Kapag may ginagawa ka at gusto mong sabihing gagawin mo ito, gamitin ang 'masu' form: 魚を焼きます (sakana o yakimasu) = iihaw ako ng isda. Maikli at malinaw.",
  },
};

export const n5Extra6Stories: Record<string, Story> = {
  'n5-visit': {
    title: 'Sa Bahay ng Kaibigan',
    lines: [
      { japanese: 'こんにちは、お邪魔します。', romaji: 'Konnichiwa, ojamashimasu.', english: 'Hello, excuse me for coming in.', tl: 'Kumusta, pasensya na sa abala. Sinasabi ito pagpasok sa bahay ng iba.' },
      { japanese: '靴を脱いでください。', romaji: 'Kutsu o nuide kudasai.', english: 'Please take off your shoes.', tl: 'Pakihubad ng sapatos. Ito ang karaniwang gawi sa loob ng bahay sa Japan.' },
      { japanese: 'どうぞ、座ってください。', romaji: 'Dozo, suwatte kudasai.', english: 'Please, have a seat.', tl: 'Tuloy, pakiupo ka. Ang "dozo" ay pang-anyaya.' },
      { japanese: 'つまらないものですが、どうぞ。', romaji: 'Tsumaranai mono desu ga, dozo.', english: "It's a small gift, but please accept it.", tl: 'Maliit lang na regalo ito, pero tanggapin mo sana. Mapagpakumbabang pananalita.' },
      { japanese: 'ごちそうさまでした。おいしかったです。', romaji: 'Gochisousama deshita. Oishikatta desu.', english: 'Thank you for the meal. It was delicious.', tl: 'Salamat sa pagkain. Masarap ito. Ang "oishikatta" ay masarap noon.' },
      { japanese: 'また来てください。', romaji: 'Mata kite kudasai.', english: 'Please come again.', tl: 'Bumalik ka ulit ha. Mainit na pagpapaalam.' },
    ],
  },
  'n5-cooking': {
    title: 'Hapunan sa Bahay',
    lines: [
      { japanese: '今日は魚を焼きます。', romaji: 'Kyou wa sakana o yakimasu.', english: "Today I'll grill the fish.", tl: 'Iihaw ako ng isda ngayon. Ang "yakimasu" ay mag-ihaw o magprito.' },
      { japanese: '野菜を切ります。', romaji: 'Yasai o kirimasu.', english: "I'll cut the vegetables.", tl: 'Hihiwain ko ang gulay. Ang "kirimasu" ay humiwa.' },
      { japanese: '水で洗います。', romaji: 'Mizu de araimasu.', english: 'I wash them with water.', tl: 'Huhugasan ko sila ng tubig. Ang "de" ay paraan o kasangkapan.' },
      { japanese: '塩と醤油を入れます。', romaji: 'Shio to shouyu o iremasu.', english: 'I add salt and soy sauce.', tl: 'Maglalagay ako ng asin at toyo. Ang "to" ay "at".' },
      { japanese: 'おかずも作ります。', romaji: 'Okazu mo tsukurimasu.', english: "I'll make side dishes too.", tl: 'Gagawa rin ako ng ulam. Ang "mo" ay "din".' },
    ],
  },
};

export const vocabTaglish6: Record<string, string> = {
  'vocab-vi-ojamashimasu': 'Sinasabi kapag pumapasok sa bahay ng iba. Ibig sabihin ay pasensya na sa abala.',
  'vocab-vi-osewa': 'Salamat sa tulong o pagtanggap sa iyo. Sinasabi kapag aalis na.',
  'vocab-vi-otearai': 'Banyo na mas magalang. Itanong ito sa bahay ng iba.',
  'vocab-vi-kutsu-nugu': 'Maghubad ng sapatos. Kadalasan kailangan ito sa pagpasok sa bahay.',
  'vocab-vi-tsumaranai': 'Pagbibigay ng regalo nang mapagpakumbaba. Literal na "maliit na bagay lang".',
  'vocab-vi-dozo': 'Tuloy ka, o heto po. Gamitin sa pag-anyaya o pag-aabot ng bagay.',
  'vocab-vi-suwarimasu': 'Umupo. Ang "suwatte kudasai" ay pakiupo ka po.',
  'vocab-vi-nomimono': 'Inumin. Madalas alukin sa bisita.',
  'vocab-vi-oishikatta': 'Masarap ito noon. Ginagamit pagkatapos kumain.',
  'vocab-vi-mata-kite': 'Bumalik ka ulit ha. Mainit na pagpapaalam sa bisita.',
  'vocab-ck-kirimasu': 'Hiwain o gupitin ang pagkain. Ginagamit sa gulay at isda.',
  'vocab-ck-nimasu': 'Pakuluan o lutuin sa sabaw. Halimbawa ng nilagang gulay.',
  'vocab-ck-yakimasu': 'Ihawin o iprito. Depende sa pagkain ang tamang luto.',
  'vocab-ck-araimasu': 'Hugasan. Bago lutuin ang gulay, hugasan muna.',
  'vocab-ck-shio': 'Asin. Pangunahing panimpla sa pagkain.',
  'vocab-ck-satou': 'Asukal. Ginagamit sa matatamis at minsan sa ulam.',
  'vocab-ck-shouyu': 'Toyo. Madalas sa pagkaing Hapon, lalo na sa isda at gulay.',
  'vocab-ck-miso': 'Miso, pampalasa mula sa fermented na soybean. Pangunahing sangkap ng miso soup.',
  'vocab-ck-abura': 'Mantika o langis. Ginagamit sa pag-prito.',
  'vocab-ck-okazu': 'Ulam na kasama ng kanin. Madalas binibili o niluluto sa bahay.',
};
