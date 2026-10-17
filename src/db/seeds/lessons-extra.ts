import type { Unit, VocabItem } from '@/types';
import { phrase } from './factory';

export const n5ExtraUnits: Unit[] = [
  { id: 'n5-adjectives', levelId: 'n5', order: 16, title: 'Describing Things', theme: 'Big, small, new, old, and colors' },
  { id: 'n5-weather', levelId: 'n5', order: 17, title: 'Weather & Seasons', theme: 'Talk about rain, sun, and the four seasons' },
  { id: 'n5-hobbies', levelId: 'n5', order: 18, title: 'Hobbies & Weekends', theme: 'What you like to do when you are free' },
  { id: 'n5-work', levelId: 'n5', order: 19, title: 'Work & School', theme: 'Places, jobs, and your daily schedule' },
  { id: 'n5-hotel', levelId: 'n5', order: 20, title: 'Hotel Check-in', theme: 'Reservations, keys, and Wi-Fi at the front desk' },
];

const AD = 'n5-adjectives';
const WX = 'n5-weather';
const HB = 'n5-hobbies';
const WK = 'n5-work';
const HT = 'n5-hotel';

export const n5ExtraVocab: VocabItem[] = [
  // Describing things
  phrase(AD, 'adj-ookii', 'おおきい', 'ookii', ['big'], '大きい'),
  phrase(AD, 'adj-chiisai', 'ちいさい', 'chiisai', ['small'], '小さい'),
  phrase(AD, 'adj-atarashii', 'あたらしい', 'atarashii', ['new'], '新しい'),
  phrase(AD, 'adj-furui', 'ふるい', 'furui', ['old (things)'], '古い'),
  phrase(AD, 'adj-akai', 'あかい', 'akai', ['red'], '赤い'),
  phrase(AD, 'adj-aoi', 'あおい', 'aoi', ['blue'], '青い'),
  phrase(AD, 'adj-shiroi', 'しろい', 'shiroi', ['white'], '白い'),
  phrase(AD, 'adj-kuroi', 'くろい', 'kuroi', ['black'], '黒い'),
  phrase(AD, 'adj-kirei', 'きれい', 'kirei', ['pretty / clean'], '綺麗'),
  phrase(AD, 'adj-shizuka', 'しずか', 'shizuka', ['quiet'], '静か'),
  phrase(AD, 'adj-yuumei', 'ゆうめい', 'yuumei', ['famous'], '有名'),
  phrase(AD, 'adj-tanoshii', 'たのしい', 'tanoshii', ['fun / enjoyable'], '楽しい'),
  phrase(AD, 'adj-isogashii', 'いそがしい', 'isogashii', ['busy'], '忙しい'),

  // Weather & seasons
  phrase(WX, 'wx-ame', 'あめ', 'ame', ['rain'], '雨'),
  phrase(WX, 'wx-yuki', 'ゆき', 'yuki', ['snow'], '雪'),
  phrase(WX, 'wx-kaze', 'かぜ', 'kaze', ['wind / cold (illness)'], '風'),
  phrase(WX, 'wx-hare', 'はれ', 'hare', ['sunny / clear'], '晴れ'),
  phrase(WX, 'wx-kumori', 'くもり', 'kumori', ['cloudy'], '曇り'),
  phrase(WX, 'wx-atsui', 'あつい', 'atsui-weather', ['hot (weather)'], '暑い'),
  phrase(WX, 'wx-samui', 'さむい', 'samui', ['cold (weather)'], '寒い'),
  phrase(WX, 'wx-suzushii', 'すずしい', 'suzushii', ['cool (pleasant)'], '涼しい'),
  phrase(WX, 'wx-haru', 'はる', 'haru', ['spring'], '春'),
  phrase(WX, 'wx-natsu', 'なつ', 'natsu', ['summer'], '夏'),
  phrase(WX, 'wx-aki', 'あき', 'aki', ['autumn / fall'], '秋'),
  phrase(WX, 'wx-fuyu', 'ふゆ', 'fuyu', ['winter'], '冬'),

  // Hobbies & weekends
  phrase(HB, 'hb-ongaku', 'おんがく', 'ongaku', ['music'], '音楽'),
  phrase(HB, 'hb-eiga', 'えいが', 'eiga', ['movie'], '映画'),
  phrase(HB, 'hb-supootsu', 'スポーツ', 'supootsu', ['sports']),
  phrase(HB, 'hb-utau', 'うたいます', 'utaimasu', ['to sing'], '歌います'),
  phrase(HB, 'hb-oyogu', 'およぎます', 'oyogimasu', ['to swim'], '泳ぎます'),
  phrase(HB, 'hb-hashiru', 'はしります', 'hashirimasu', ['to run'], '走ります'),
  phrase(HB, 'hb-shashin', 'しゃしん', 'shashin', ['photo / photography'], '写真'),
  phrase(HB, 'hb-ryokou', 'りょこう', 'ryokou', ['trip / travel'], '旅行'),
  phrase(HB, 'hb-sanpo', 'さんぽ', 'sanpo', ['walk (for fun)'], '散歩'),
  phrase(HB, 'hb-yasumi-hb', 'やすみ', 'yasumi', ['day off / holiday'], '休み'),

  // Work & school
  phrase(WK, 'wk-gakkou', 'がっこう', 'gakkou', ['school'], '学校'),
  phrase(WK, 'wk-kaisha', 'かいしゃ', 'kaisha', ['company'], '会社'),
  phrase(WK, 'wk-sensei', 'せんせい', 'sensei', ['teacher'], '先生'),
  phrase(WK, 'wk-shigoto', 'しごと', 'shigoto', ['job / work'], '仕事'),
  phrase(WK, 'wk-kaigi', 'かいぎ', 'kaigi', ['meeting'], '会議'),
  phrase(WK, 'wk-mainichi', 'まいにち', 'mainichi', ['every day'], '毎日'),
  phrase(WK, 'wk-shigoto-isogashii', 'しごとはいそがしいです', 'shigoto wa isogashii desu', ['My work is busy.'], '仕事は忙しいです'),
  phrase(WK, 'wk-kaigi-arimasu', 'まいにちかいぎがあります', 'mainichi kaigi ga arimasu', ['There is a meeting every day.'], '毎日会議があります'),

  // Hotel check-in
  phrase(HT, 'ht-hoteru', 'ホテル', 'hoteru', ['hotel']),
  phrase(HT, 'ht-yoyaku', 'よやく', 'yoyaku', ['reservation / booking'], '予約'),
  phrase(HT, 'ht-chekkuin', 'チェックイン', 'chekkuin', ['check-in']),
  phrase(HT, 'ht-chekkuauto', 'チェックアウト', 'chekkuauto', ['check-out']),
  phrase(HT, 'ht-heya', 'へや', 'heya', ['room'], '部屋'),
  phrase(HT, 'ht-kagi', 'かぎ', 'kagi', ['key'], '鍵'),
  phrase(HT, 'ht-yoyaku-shiteimasu', 'よやくしています', 'yoyaku shiteimasu', ['I have a reservation.'], '予約しています'),
  phrase(HT, 'ht-chekkuin-onegai', 'チェックインをおねがいします', 'chekkuin o onegaishimasu', ['Check-in, please.'], 'チェックインをお願いします'),
  phrase(HT, 'ht-heya-kagi', 'へやのかぎをください', 'heya no kagi o kudasai', ['The room key, please.'], '部屋の鍵をください'),
  phrase(HT, 'ht-wifi', 'ワイファイのパスワードはなんですか', 'waifai no pasuwaado wa nan desu ka', ["What's the Wi-Fi password?"]),
  phrase(HT, 'ht-checkout-jikan', 'なんじにチェックアウトですか', 'nanji ni chekkuauto desu ka', ['What time is check-out?'], '何時にチェックアウトですか'),
  phrase(HT, 'ht-nimotsu', 'にもつをあずけてもいいですか', 'nimotsu o azukete mo ii desu ka', ['May I leave my luggage here?'], '荷物を預けてもいいですか'),
];
