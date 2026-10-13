import type { GrammarItem, Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const n5MoreUnits: Unit[] = [
  { id: 'n5-numbers', levelId: 'n5', order: 7, title: 'Numbers', theme: 'Count, shop, and say how many' },
  { id: 'n5-time', levelId: 'n5', order: 8, title: 'Time & Days', theme: 'Days of the week, clock time, and when' },
  { id: 'n5-food', levelId: 'n5', order: 9, title: 'Food & Drink', theme: 'Name what you eat, what you like, and what is hot or cold' },
  { id: 'n5-transport', levelId: 'n5', order: 10, title: 'Trains & Taxis', theme: 'Buy a ticket, find the platform, and get where you are going' },
  { id: 'n5-help', levelId: 'n5', order: 11, title: 'Emergencies & Health', theme: 'Ask for help and describe how you feel' },
  { id: 'n5-family', levelId: 'n5', order: 12, title: 'Family & Friends', theme: 'Introduce your family and the people around you' },
  { id: 'n5-verbs', levelId: 'n5', order: 13, title: 'Everyday Verbs', theme: 'Common actions in polite ます form' },
  { id: 'n5-grammar-2', levelId: 'n5', order: 15, title: 'Particles & Patterns', theme: 'に, で, と, の, たい, and the verb endings you will hear every day' },
];

const N = 'n5-numbers';
const T = 'n5-time';
const F = 'n5-food';
const TR = 'n5-transport';
const H = 'n5-help';
const FA = 'n5-family';
const V = 'n5-verbs';

export const n5MoreVocab: VocabItem[] = [
  // Numbers
  phrase(N, 'num-1', 'いち', 'ichi', ['one'], '一'),
  phrase(N, 'num-2', 'に', 'ni', ['two'], '二'),
  phrase(N, 'num-3', 'さん', 'san', ['three'], '三'),
  phrase(N, 'num-4', 'よん', 'yon', ['four'], '四'),
  phrase(N, 'num-5', 'ご', 'go', ['five'], '五'),
  phrase(N, 'num-6', 'ろく', 'roku', ['six'], '六'),
  phrase(N, 'num-7', 'なな', 'nana', ['seven'], '七'),
  phrase(N, 'num-8', 'はち', 'hachi', ['eight'], '八'),
  phrase(N, 'num-9', 'きゅう', 'kyuu', ['nine'], '九'),
  phrase(N, 'num-10', 'じゅう', 'juu', ['ten'], '十'),
  phrase(N, 'num-100', 'ひゃく', 'hyaku', ['one hundred'], '百'),
  phrase(N, 'num-ikutsu', 'いくつ', 'ikutsu', ['how many? (things)']),
  phrase(N, 'num-futatsu', 'ふたつください', 'futatsu kudasai', ['Two of these, please.'], '二つ'),
  phrase(N, 'num-hyakuen', 'ひゃくえん', 'hyaku en', ['100 yen'], '百円'),

  // Time & days
  phrase(T, 'time-kyou', 'きょう', 'kyou', ['today'], '今日'),
  phrase(T, 'time-ashita', 'あした', 'ashita', ['tomorrow'], '明日'),
  phrase(T, 'time-kinou', 'きのう', 'kinou', ['yesterday'], '昨日'),
  phrase(T, 'time-konshuu', 'こんしゅう', 'konshuu', ['this week'], '今週'),
  phrase(T, 'time-raishuu', 'らいしゅう', 'raishuu', ['next week'], '来週'),
  phrase(T, 'time-senshuu', 'せんしゅう', 'senshuu', ['last week'], '先週'),
  phrase(T, 'time-asa', 'あさ', 'asa', ['morning'], '朝'),
  phrase(T, 'time-hiru', 'ひる', 'hiru', ['daytime / noon'], '昼'),
  phrase(T, 'time-yoru', 'よる', 'yoru', ['night / evening'], '夜'),
  phrase(T, 'time-gozen', 'ごぜん', 'gozen', ['a.m. (morning)'], '午前'),
  phrase(T, 'time-gogo', 'ごご', 'gogo', ['p.m. (afternoon)'], '午後'),
  phrase(T, 'time-kuji', 'くじです', 'kuji desu', ["It's nine o'clock."], '九時'),
  phrase(T, 'time-juugofun', 'じゅうごふん', 'juugofun', ['fifteen minutes'], '十五分'),
  phrase(T, 'time-getsu', 'げつようび', 'getsuyoubi', ['Monday'], '月曜日'),
  phrase(T, 'time-ka', 'かようび', 'kayoubi', ['Tuesday'], '火曜日'),
  phrase(T, 'time-sui', 'すいようび', 'suiyoubi', ['Wednesday'], '水曜日'),
  phrase(T, 'time-moku', 'もくようび', 'mokuyoubi', ['Thursday'], '木曜日'),
  phrase(T, 'time-kin', 'きんようび', 'kinyoubi', ['Friday'], '金曜日'),
  phrase(T, 'time-do', 'どようび', 'doyoubi', ['Saturday'], '土曜日'),
  phrase(T, 'time-nichi', 'にちようび', 'nichiyoubi', ['Sunday'], '日曜日'),
  phrase(T, 'time-nanyoubi', 'きょうはなんようびですか', 'kyou wa nan youbi desu ka', ['What day of the week is it today?'], '今日は何曜日ですか'),

  // Food & drink
  phrase(F, 'food-gohan', 'ごはん', 'gohan', ['rice / a meal'], 'ご飯'),
  phrase(F, 'food-asagohan', 'あさごはん', 'asagohan', ['breakfast'], '朝ご飯'),
  phrase(F, 'food-hirugohan', 'ひるごはん', 'hirugohan', ['lunch'], '昼ご飯'),
  phrase(F, 'food-bangohan', 'ばんごはん', 'bangohan', ['dinner'], '晩ご飯'),
  phrase(F, 'food-pan', 'パン', 'pan', ['bread']),
  phrase(F, 'food-niku', 'にく', 'niku', ['meat'], '肉'),
  phrase(F, 'food-sakana', 'さかな', 'sakana', ['fish'], '魚'),
  phrase(F, 'food-yasai', 'やさい', 'yasai', ['vegetables'], '野菜'),
  phrase(F, 'food-tamago', 'たまご', 'tamago', ['egg'], '卵'),
  phrase(F, 'food-kudamono', 'くだもの', 'kudamono', ['fruit'], '果物'),
  phrase(F, 'food-gyuunyuu', 'ぎゅうにゅう', 'gyuunyuu', ['milk'], '牛乳'),
  phrase(F, 'food-ocha', 'おちゃ', 'ocha', ['tea (green or general)'], 'お茶'),
  phrase(F, 'food-koohii', 'コーヒー', 'koohii', ['coffee']),
  phrase(F, 'food-biiru', 'ビール', 'biiru', ['beer']),
  phrase(F, 'food-osake', 'おさけ', 'osake', ['alcohol / sake'], 'お酒'),
  phrase(F, 'food-amai', 'あまい', 'amai', ['sweet'], '甘い'),
  phrase(F, 'food-atsui', 'あつい', 'atsui', ['hot (to the touch / weather)'], '熱い'),
  phrase(F, 'food-tsumetai', 'つめたい', 'tsumetai', ['cold (to the touch)'], '冷たい'),
  phrase(F, 'food-tabemono', 'たべもの', 'tabemono', ['food'], '食べ物'),
  phrase(F, 'food-suki', 'すきです', 'suki desu', ['I like it.'], '好きです'),
  phrase(F, 'food-kirai', 'きらいです', 'kirai desu', ["I don't like it."], '嫌いです'),

  // Trains & taxis
  phrase(TR, 'tr-densha', 'でんしゃ', 'densha', ['train'], '電車'),
  phrase(TR, 'tr-basu', 'バス', 'basu', ['bus']),
  phrase(TR, 'tr-takushii', 'タクシー', 'takushii', ['taxi']),
  phrase(TR, 'tr-kippu', 'きっぷ', 'kippu', ['ticket'], '切符'),
  phrase(TR, 'tr-kuukou', 'くうこう', 'kuukou', ['airport'], '空港'),
  phrase(TR, 'tr-norikae', 'のりかえはどこですか', 'norikae wa doko desu ka', ['Where do I transfer?'], '乗り換え'),
  phrase(TR, 'tr-tsugi', 'つぎのえきはどこですか', 'tsugi no eki wa doko desu ka', ['Where is the next station?'], '次の駅'),
  phrase(TR, 'tr-ban', 'なんばんせんですか', 'nanbansen desu ka', ['Which platform is it?'], '何番線'),
  phrase(TR, 'tr-shinjuku', 'しんじゅくまでいきたいです', 'shinjuku made ikitai desu', ["I'd like to go to Shinjuku."], '新宿まで行きたいです'),
  phrase(TR, 'tr-tokyo', 'とうきょういきですか', 'toukyou iki desu ka', ['Is this bound for Tokyo?'], '東京行きですか'),
  phrase(TR, 'tr-orimasu', 'おります', 'orimasu', ["I'm getting off."], '降ります'),
  phrase(TR, 'tr-taxi-yonde', 'タクシーをよんでください', 'takushii o yonde kudasai', ['Please call a taxi.'], '呼んでください'),
  phrase(TR, 'tr-aruite', 'あるいてなんぷんですか', 'aruite nanpun desu ka', ['How many minutes on foot?'], '歩いて何分ですか'),

  // Emergencies & health
  phrase(H, 'help-tasukete', 'たすけてください', 'tasukete kudasai', ['Please help me!'], '助けてください'),
  phrase(H, 'help-kyuukyuusha', 'きゅうきゅうしゃ', 'kyuukyuusha', ['ambulance'], '救急車'),
  phrase(H, 'help-keisatsu', 'けいさつ', 'keisatsu', ['police'], '警察'),
  phrase(H, 'help-byouin', 'びょういん', 'byouin', ['hospital'], '病院'),
  phrase(H, 'help-guai', 'ぐあいがわるいです', 'guai ga warui desu', ["I don't feel well."], '具合が悪いです'),
  phrase(H, 'help-atama', 'あたまがいたいです', 'atama ga itai desu', ['I have a headache.'], '頭が痛いです'),
  phrase(H, 'help-onaka', 'おなかがいたいです', 'onaka ga itai desu', ['My stomach hurts.'], 'お腹が痛いです'),
  phrase(H, 'help-kusuri', 'くすり', 'kusuri', ['medicine'], '薬'),
  phrase(H, 'help-saifu', 'さいふ', 'saifu', ['wallet'], '財布'),
  phrase(H, 'help-pasupooto', 'パスポート', 'pasupooto', ['passport']),
  phrase(H, 'help-nakushita', 'なくしました', 'nakushimashita', ['I lost it.'], '失くしました'),
  phrase(H, 'help-nihongo-hanaseru', 'にほんごがはなせるひとはいますか', 'nihongo ga hanaseru hito wa imasu ka', ['Is there anyone who speaks Japanese?'], '日本語が話せる人はいますか'),
  phrase(H, 'help-eigo', 'えいごをはなせますか', 'eigo o hanasemasu ka', ['Can you speak English?'], '英語を話せますか'),

  // Family & friends
  phrase(FA, 'fam-kazoku', 'かぞく', 'kazoku', ['family'], '家族'),
  phrase(FA, 'fam-chichi', 'ちち', 'chichi', ['my father'], '父'),
  phrase(FA, 'fam-haha', 'はは', 'haha', ['my mother'], '母'),
  phrase(FA, 'fam-ryoushin', 'りょうしん', 'ryoushin', ['parents'], '両親'),
  phrase(FA, 'fam-ani', 'あに', 'ani', ['my older brother'], '兄'),
  phrase(FA, 'fam-ane', 'あね', 'ane', ['my older sister'], '姉'),
  phrase(FA, 'fam-otouto', 'おとうと', 'otouto', ['my younger brother'], '弟'),
  phrase(FA, 'fam-imouto', 'いもうと', 'imouto', ['my younger sister'], '妹'),
  phrase(FA, 'fam-tomodachi', 'ともだち', 'tomodachi', ['friend'], '友達'),
  phrase(FA, 'fam-kodomo', 'こども', 'kodomo', ['child'], '子供'),
  phrase(FA, 'fam-kekkon', 'けっこんしています', 'kekkon shiteimasu', ["I'm married."], '結婚しています'),
  phrase(FA, 'fam-dokushin', 'どくしんです', 'dokushin desu', ["I'm single."], '独身です'),
  phrase(FA, 'fam-kyoudai', 'きょうだいはいますか', 'kyoudai wa imasu ka', ['Do you have siblings?'], '兄弟はいますか'),

  // Everyday verbs (polite ます form)
  phrase(V, 'verb-iki', 'いきます', 'ikimasu', ['to go'], '行きます'),
  phrase(V, 'verb-ki', 'きます', 'kimasu', ['to come'], '来ます'),
  phrase(V, 'verb-tabe', 'たべます', 'tabemasu', ['to eat'], '食べます'),
  phrase(V, 'verb-nomi', 'のみます', 'nomimasu', ['to drink'], '飲みます'),
  phrase(V, 'verb-mi', 'みます', 'mimasu', ['to see / to look at'], '見ます'),
  phrase(V, 'verb-kiki', 'ききます', 'kikimasu', ['to listen / to ask'], '聞きます'),
  phrase(V, 'verb-hanashi', 'はなします', 'hanashimasu', ['to speak'], '話します'),
  phrase(V, 'verb-yomi', 'よみます', 'yomimasu', ['to read'], '読みます'),
  phrase(V, 'verb-kaki', 'かきます', 'kakimasu', ['to write'], '書きます'),
  phrase(V, 'verb-kai', 'かいます', 'kaimasu', ['to buy'], '買います'),
  phrase(V, 'verb-tsukuri', 'つくります', 'tsukurimasu', ['to make / to cook'], '作ります'),
  phrase(V, 'verb-ne', 'ねます', 'nemasu', ['to sleep'], '寝ます'),
  phrase(V, 'verb-oki', 'おきます', 'okimasu', ['to wake up / to get up'], '起きます'),
  phrase(V, 'verb-benkyou', 'べんきょうします', 'benkyou shimasu', ['to study'], '勉強します'),
  phrase(V, 'verb-hataraki', 'はたらきます', 'hatarakimasu', ['to work'], '働きます'),
  phrase(V, 'verb-sunde', 'すんでいます', 'sunde imasu', ['to live (somewhere)'], '住んでいます'),
  phrase(V, 'verb-shitte', 'しっています', 'shitte imasu', ['to know'], '知っています'),
  phrase(V, 'verb-tsukai', 'つかいます', 'tsukaimasu', ['to use'], '使います'),
];

const grammar = (
  id: string,
  title: string,
  explanation: string,
  examples: { japanese: string; furigana: string; english: string }[],
  commonMistakes?: string,
): GrammarItem => ({
  id,
  type: 'grammar',
  unitId: 'n5-grammar-2',
  title,
  level: 5,
  explanation,
  exampleSentences: examples,
  commonMistakes,
  createdAt: new Date(),
});

export const n5MoreGrammar: GrammarItem[] = [
  grammar(
    'grammar-ni',
    '〜に (ni): at a time, or toward a place',
    'Attaches to a specific point in time (七時に = at seven o\'clock) and to destinations used with verbs of going, coming, or returning (行きます, 来ます, 帰ります).',
    [
      { japanese: '七時に起きます。', furigana: 'しちじにおきます。', english: 'I wake up at seven.' },
      { japanese: '東京に行きます。', furigana: 'とうきょうにいきます。', english: 'I go to Tokyo.' },
    ],
    'Don\'t use に with time words like 今日, 明日, or きのう. Those stand alone.',
  ),
  grammar(
    'grammar-de',
    '〜で (de): the place where an action happens, or the means',
    'Marks where an action takes place (駅で待ちます) and the means or method used (バスで行きます).',
    [
      { japanese: '駅で待ちます。', furigana: 'えきでまちます。', english: 'I wait at the station.' },
      { japanese: 'バスで行きます。', furigana: 'ばすでいきます。', english: 'I go by bus.' },
    ],
    'に marks where something exists or where you arrive. で marks where you do the action.',
  ),
  grammar(
    'grammar-to',
    '〜と (to): "and" between nouns, or "with" a person',
    'Connects two nouns with "and" (パンとご飯 = bread and rice). Also means "with" when doing something with someone (友達と行きます).',
    [
      { japanese: 'パンとご飯。', furigana: 'ぱんとごはん。', english: 'Bread and rice.' },
      { japanese: '友達と行きます。', furigana: 'ともだちといきます。', english: 'I go with a friend.' },
    ],
    'と used for "and" is for listing nouns only. Use other forms to join full sentences.',
  ),
  grammar(
    'grammar-no',
    '〜の (no): "of" / "\'s" (possession)',
    'Connects two nouns where the first owns or describes the second: 私の本 = my book.',
    [
      { japanese: '私の本です。', furigana: 'わたしのほんです。', english: "It's my book." },
      { japanese: '日本の食べ物。', furigana: 'にほんのたべもの。', english: 'Japanese food.' },
    ],
  ),
  grammar(
    'grammar-tai',
    '〜たいです (tai desu): "I want to ~"',
    'Take the ます stem of a verb and add たいです to express a wish. 行きます → 行きたいです.',
    [
      { japanese: '日本に行きたいです。', furigana: 'にほんにいきたいです。', english: 'I want to go to Japan.' },
      { japanese: 'ラーメンを食べたいです。', furigana: 'らーめんをたべたいです。', english: 'I want to eat ramen.' },
    ],
    'The thing you want takes を or が. Used for your own wishes, not for asking others directly.',
  ),
  grammar(
    'grammar-masen-ka',
    '〜ませんか (masen ka): "won\'t you ~?" (invitation)',
    'A soft, polite invitation. Take the ます stem and add ませんか.',
    [
      { japanese: '一緒に行きませんか。', furigana: 'いっしょにいきませんか。', english: "Won't you come along?" },
      { japanese: 'お茶を飲みませんか。', furigana: 'おちゃをのみませんか。', english: 'Would you like to have some tea?' },
    ],
  ),
  grammar(
    'grammar-mashita',
    '〜ました (mashita): the past tense (polite)',
    'Change ます to ました to talk about something finished. Negative past: ませんでした.',
    [
      { japanese: '昨日映画を見ました。', furigana: 'きのうえいがをみました。', english: 'I watched a movie yesterday.' },
      { japanese: '昨日は行きませんでした。', furigana: 'きのうはいきませんでした。', english: "I didn't go yesterday." },
    ],
  ),
  grammar(
    'grammar-masen',
    '〜ません (masen): the negative (polite)',
    'Change ます to ません to say "don\'t" or "won\'t". 食べます → 食べません.',
    [
      { japanese: '魚は食べません。', furigana: 'さかなはたべません。', english: "I don't eat fish." },
      { japanese: '今日は行きません。', furigana: 'きょうはいきません。', english: "I'm not going today." },
    ],
  ),
];
