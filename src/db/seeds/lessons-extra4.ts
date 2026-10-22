import type { LessonGuide, Story, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const n5Extra4Units: Unit[] = [
  { id: 'n5-classroom', levelId: 'n5', order: 25, title: 'Sa Klase', theme: 'Mga salitang pang-klase at pag-aaral ng Japanese' },
  { id: 'n5-sightseeing', levelId: 'n5', order: 26, title: 'Pamamasyal', theme: 'Templo, museo, tanawin, at souvenir' },
];

const CR = 'n5-classroom';
const SG = 'n5-sightseeing';

export const n5Extra4Vocab: VocabItem[] = [
  phrase(CR, 'cr-kyoushitsu', 'きょうしつ', 'kyoushitsu', ['classroom'], '教室'),
  phrase(CR, 'cr-shitsumon', 'しつもん', 'shitsumon', ['question'], '質問'),
  phrase(CR, 'cr-kotaemasu', 'こたえます', 'kotaemasu', ['to answer'], '答えます'),
  phrase(CR, 'cr-shukudai', 'しゅくだい', 'shukudai', ['homework'], '宿題'),
  phrase(CR, 'cr-tesuto', 'テスト', 'tesuto', ['test / exam']),
  phrase(CR, 'cr-pen', 'ペン', 'pen', ['pen']),
  phrase(CR, 'cr-noto', 'ノート', 'noto', ['notebook']),
  phrase(CR, 'cr-shitsurei', 'しつれいします', 'shitsurei shimasu', ['Excuse me (entering or leaving a room)'], '失礼します'),
  phrase(CR, 'cr-sensei-kore', 'せんせい、これは何ですか', 'sensei, kore wa nan desu ka', ['Teacher, what is this?'], '先生、これは何ですか'),
  phrase(CR, 'cr-naraitai', 'にほんごをならいたいです', 'nihongo o naraitai desu', ['I want to learn Japanese.'], '日本語を習いたいです'),

  phrase(SG, 'sg-otera', 'おてら', 'otera', ['Buddhist temple'], 'お寺'),
  phrase(SG, 'sg-jinja', 'じんじゃ', 'jinja', ['Shinto shrine'], '神社'),
  phrase(SG, 'sg-bijutsukan', 'びじゅつかん', 'bijutsukan', ['art museum'], '美術館'),
  phrase(SG, 'sg-hakubutsukan', 'はくぶつかん', 'hakubutsukan', ['museum'], '博物館'),
  phrase(SG, 'sg-otona', 'おとな', 'otona', ['adult'], '大人'),
  phrase(SG, 'sg-keshiki', 'けしき', 'keshiki', ['scenery / view'], '景色'),
  phrase(SG, 'sg-mise', 'みせ', 'mise', ['shop / store'], '店'),
  phrase(SG, 'sg-kaimono', 'かいもの', 'kaimono', ['shopping'], '買い物'),
  phrase(SG, 'sg-omiyage', 'おみやげ', 'omiyage', ['souvenir'], 'お土産'),
  phrase(SG, 'sg-shashin-totte', 'しゃしんをとってもいいですか', 'shashin o totte mo ii desu ka', ['May I take a photo?'], '写真を撮ってもいいですか'),
];

export const n5Extra4Guides: Record<string, LessonGuide> = {
  'n5-classroom': {
    intro: "Kumusta, estudyante! Ang klase ang pinakamagandang lugar para matuto. Matututunan mo dito ang mga salitang gagamitin mo sa klase: magtanong, sumagot, at magpaalam nang magalang.",
    pronunciation: "Ang 'shitsurei shimasu' ay 'shee-tsoo-ray shee-mahss'. Ang 'shitsumon' ay 'sheet-soo-mohn', na may maikling hinto bago ang 'mon'.",
    proTip: "Sabihin ang 'shitsurei shimasu' pagpasok at paglabas sa opisina ng guro. Mas magalang ito kaysa sa 'sayounara' sa ganitong sitwasyon.",
  },
  'n5-sightseeing': {
    intro: "Gusto mo bang mamasyal sa Japan? Matututunan mo ang mga salitang gagamitin sa templo, museo, tindahan, at pagbili ng souvenir. Maraming templo at museo ang may magagandang tanawin.",
    pronunciation: "Ang 'otera' ay 'oh-teh-rah'. Ang 'jinja' ay 'jeen-jah', malambot ang 'j'. Ang 'omiyage' ay 'oh-mee-yah-geh'.",
    proTip: "Sa templo at shrine, maging tahimik at magalang. Maraming lugar ang nagbabawal ng litrato sa loob, kaya itanong muna gamit ang 'shashin o totte mo ii desu ka?'.",
  },
};

export const n5Extra4Stories: Record<string, Story> = {
  'n5-classroom': {
    title: 'Sa Klase',
    lines: [
      { japanese: '先生、これは何ですか。', romaji: 'Sensei, kore wa nan desu ka?', english: 'Teacher, what is this?', tl: 'Teacher, ano ito? Ginagamit kapag may hindi naiintindihan sa klase.' },
      { japanese: '質問があります。', romaji: 'Shitsumon ga arimasu.', english: 'I have a question.', tl: 'May tanong ako. Ang "arimasu" ay mayroon.' },
      { japanese: 'もう一度お願いします。', romaji: 'Mou ichido onegaishimasu.', english: 'Please say it once more.', tl: 'Pakiulit po. Magalang na pakiusap.' },
      { japanese: '明日、テストがあります。', romaji: 'Ashita, tesuto ga arimasu.', english: 'There is a test tomorrow.', tl: 'May test bukas. Ang "ga arimasu" ay may (bagay o pangyayari).' },
      { japanese: '失礼します。', romaji: 'Shitsurei shimasu.', english: 'Excuse me (entering or leaving).', tl: 'Excuse me po. Sinasabi pagpasok o paglabas ng kuwarto o opisina.' },
    ],
  },
  'n5-sightseeing': {
    title: 'Sa Kyoto',
    lines: [
      { japanese: '今日はお寺に行きます。', romaji: 'Kyou wa otera ni ikimasu.', english: 'Today I am going to a temple.', tl: 'Pupunta kami sa templo ngayon. Ang "ni ikimasu" ay pupunta sa.' },
      { japanese: '景色がきれいですね。', romaji: 'Keshiki ga kirei desu ne.', english: 'The view is beautiful, isn\'t it?', tl: 'Ang ganda ng tanawin, di ba? Ang "ne" ay humihingi ng sang-ayon.' },
      { japanese: '写真を撮ってもいいですか。', romaji: 'Shashin o totte mo ii desu ka?', english: 'May I take a photo?', tl: 'Pwede ba akong kumuha ng litrato? Humihingi ito ng pahintulot.' },
      { japanese: '店でお土産を買いましょう。', romaji: 'Mise de omiyage o kaimashou.', english: "Let's buy souvenirs at the shop.", tl: 'Bumili tayo ng pasalubong sa tindahan. Ang "de" ay lugar kung saan gagawin ang aksyon.' },
      { japanese: '大人二人です。', romaji: 'Otona futari desu.', english: 'Two adults.', tl: 'Dalawang matanda. Ginagamit sa ticket counter.' },
    ],
  },
};

export const vocabTaglish4: Record<string, string> = {
  'vocab-cr-kyoushitsu': 'Silid-aralan. Dito nagaganap ang klase.',
  'vocab-cr-shitsumon': 'Tanong. Sinasabi ang "shitsumon ga arimasu" kung may itatanong ka.',
  'vocab-cr-kotaemasu': 'Sumagot. Ang "kotae" ay sagot.',
  'vocab-cr-shukudai': 'Takdang-aralin o homework.',
  'vocab-cr-tesuto': 'Pagsusulit o test. Galing sa English na "test".',
  'vocab-cr-pen': 'Ballpen o panulat. Galing sa English na "pen".',
  'vocab-cr-noto': 'Kuwaderno. Galing sa English na "notebook".',
  'vocab-cr-shitsurei': 'Excuse me po. Sinasabi pagpasok o paglabas ng kuwarto o opisina.',
  'vocab-cr-sensei-kore': 'Teacher, ano ito? Ginagamit kapag magtatanong sa guro.',
  'vocab-cr-naraitai': 'Gusto kong matuto ng Japanese. Ang "naraitai" ay gusto kong matutuhan.',
  'vocab-sg-otera': 'Templong Budista. Makikita sa maraming lungsod sa Japan.',
  'vocab-sg-jinja': 'Shrine ng Shinto. Kadalasan may torii na pintuan sa pasukan.',
  'vocab-sg-bijutsukan': 'Museo ng sining. Kadalasan may mga painting at eskultura.',
  'vocab-sg-hakubutsukan': 'Museo sa pangkalahatan, tulad ng museo ng kasaysayan.',
  'vocab-sg-otona': 'Matanda o adulto. Itatanong ito sa ticket counter.',
  'vocab-sg-keshiki': 'Tanawin o eksena sa kalikasan.',
  'vocab-sg-mise': 'Tindahan o restaurant. Gamitin ang "mise de" para sabihing "sa tindahan".',
  'vocab-sg-kaimono': 'Pamimili. Ang "kaimono suru" ay mamili.',
  'vocab-sg-omiyage': 'Pasalubong o souvenir para sa pamilya at kaibigan.',
  'vocab-sg-shashin-totte': 'Pwede ba akong kumuha ng litrato? Itanong bago kumuha sa lugar na pasyalan.',
};
