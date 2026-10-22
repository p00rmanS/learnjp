import type { GrammarItem, Item, Unit, VocabItem } from '@/types';
import type { MichiDB } from '@/db';
import { kanaItems, katakanaItems, stage0Units } from './kana';
import { withSeedOrder } from './order';
import { phrase } from './factory';
import { n5MoreGrammar, n5MoreUnits, n5MoreVocab } from './lessons-more';
import { n5ExtraUnits, n5ExtraVocab } from './lessons-extra';
import { kanjiItems, kanjiUnits } from './kanji';
import { n5Extra2Guides, n5Extra2Stories, n5Extra2Units, n5Extra2Vocab, vocabTaglish2 } from './lessons-extra2';
import { n5Extra3Grammar, n5Extra3Guides, n5Extra3Stories, n5Extra3Units, n5Extra3Vocab } from './lessons-extra3';
import { vocabTaglish3 } from './vocabTaglish3';
import { n5Extra4Guides, n5Extra4Stories, n5Extra4Units, n5Extra4Vocab, vocabTaglish4 } from './lessons-extra4';
import { unitGuides, unitStories } from './lessonStories';
import { vocabTaglish } from './vocabTaglish';
import { kanaTaglish } from './kanaTaglish';
import { grammarTaglish } from './grammarTaglish';

export const n5Units: Unit[] = [
  { id: 'n5-greetings', levelId: 'n5', order: 1, title: 'Greetings & First Words', theme: 'Open and close every conversation' },
  { id: 'n5-daily', levelId: 'n5', order: 2, title: 'Everyday Small Talk', theme: 'Ask how someone is and talk about your day' },
  { id: 'n5-fillers', levelId: 'n5', order: 3, title: 'Fillers & Reactions', theme: 'Sound natural: pauses, "hmm", "I see", "really?"' },
  { id: 'n5-restaurant', levelId: 'n5', order: 4, title: 'At the Restaurant', theme: 'Order, ask for the bill, and say thank you' },
  { id: 'n5-shopping', levelId: 'n5', order: 5, title: 'Shopping & Money', theme: 'Ask prices, sizes, and whether you can try things' },
  { id: 'n5-directions', levelId: 'n5', order: 6, title: 'Getting Around', theme: 'Find the toilet, the station, and your way' },
  { id: 'n5-grammar', levelId: 'n5', order: 14, title: 'Core Grammar', theme: 'The patterns behind every sentence above' },
];


export const n5Vocab: VocabItem[] = [
  // Greetings
  phrase('n5-greetings', 'ohayou', 'おはようございます', 'ohayou gozaimasu', ['Good morning']),
  phrase('n5-greetings', 'konnichiwa', 'こんにちは', 'konnichiwa', ['Hello (daytime)']),
  phrase('n5-greetings', 'konbanwa', 'こんばんは', 'konbanwa', ['Good evening']),
  phrase('n5-greetings', 'oyasumi', 'おやすみなさい', 'oyasumi nasai', ['Good night']),
  phrase('n5-greetings', 'sayounara', 'さようなら', 'sayounara', ['Goodbye (a longer parting)']),
  phrase('n5-greetings', 'jaane', 'じゃあね', 'jaa ne', ['See you (casual)']),
  phrase('n5-greetings', 'hajimemashite', 'はじめまして', 'hajimemashite', ['Nice to meet you (first time)']),
  phrase('n5-greetings', 'yoroshiku', 'よろしくおねがいします', 'yoroshiku onegaishimasu', ['Please treat me well / nice to work with you']),
  phrase('n5-greetings', 'arigatou', 'ありがとうございます', 'arigatou gozaimasu', ['Thank you (polite)']),
  phrase('n5-greetings', 'douitashimashite', 'どういたしまして', 'douitashimashite', ["You're welcome"]),
  phrase('n5-greetings', 'sumimasen', 'すみません', 'sumimasen', ['Excuse me / sorry (very versatile)']),
  phrase('n5-greetings', 'gomen', 'ごめんなさい', 'gomen nasai', ["I'm sorry"]),
  phrase('n5-greetings', 'hai', 'はい', 'hai', ['Yes']),
  phrase('n5-greetings', 'iie', 'いいえ', 'iie', ['No']),

  // Everyday small talk
  phrase('n5-daily', 'genki', 'お元気ですか', 'ogenki desu ka', ['How are you?'], 'お元気'),
  phrase('n5-daily', 'genki-desu', '元気です', 'genki desu', ["I'm fine."], '元気'),
  phrase('n5-daily', 'tenki', '今日はいい天気ですね', 'kyou wa ii tenki desu ne', ["Nice weather today, isn't it?"]),
  phrase('n5-daily', 'nanji', '今何時ですか', 'ima nanji desu ka', ['What time is it now?'], '今何時'),
  phrase('n5-daily', 'namae', 'お名前は何ですか', 'onamae wa nan desu ka', ["What's your name?"], 'お名前'),
  phrase('n5-daily', 'gakusei', '私は学生です', 'watashi wa gakusei desu', ['I am a student.'], '学生'),
  phrase('n5-daily', 'doko', 'どこから来ましたか', 'doko kara kimashita ka', ['Where are you from?'], '来'),
  phrase('n5-daily', 'shumi', '趣味は何ですか', 'shumi wa nan desu ka', ["What's your hobby?"], '趣味'),
  phrase('n5-daily', 'shuumatsu', '週末は何をしますか', 'shuumatsu wa nani o shimasu ka', ['What do you do on weekends?'], '週末'),
  phrase('n5-daily', 'nihongo', '日本語を話せますか', 'nihongo o hanasemasu ka', ['Can you speak Japanese?'], '日本語'),
  phrase('n5-daily', 'wakarimasu', 'わかります', 'wakarimasu', ['I understand.'], '分かります'),
  phrase('n5-daily', 'ikimashou', '行きましょう', 'ikimashou', ["Let's go."], '行'),
  phrase('n5-daily', 'mata-kondo', 'また今度', 'mata kondo', ['See you next time.']),

  // Fillers & reactions
  phrase('n5-fillers', 'eeto', 'えーと', 'eeto', ['Um... / let me think']),
  phrase('n5-fillers', 'anou', 'あのう', 'anou', ['Um... (to get attention, a bit hesitant)']),
  phrase('n5-fillers', 'soudesune', 'そうですね', 'sou desu ne', ["Well... / that's right."]),
  phrase('n5-fillers', 'maa', 'まあ', 'maa', ['Well... / so-so / not bad']),
  phrase('n5-fillers', 'hee', 'へえ', 'hee', ['Oh! / Really? (impressed)']),
  phrase('n5-fillers', 'sounandesuka', 'そうなんですか', 'sou nan desu ka', ['Is that so?']),
  phrase('n5-fillers', 'naruhodo', 'なるほど', 'naruhodo', ['I see. / That makes sense.']),
  phrase('n5-fillers', 'hontouni', '本当に', 'hontou ni', ['Really? / truly'], '本当'),
  phrase('n5-fillers', 'mochiron', 'もちろん', 'mochiron', ['Of course.']),
  phrase('n5-fillers', 'tabun', 'たぶん', 'tabun', ['Probably.']),
  phrase('n5-fillers', 'chotto', 'ちょっと', 'chotto', ['A little... / hmm (a soft "no")']),
  phrase('n5-fillers', 'daijoubu', '大丈夫です', 'daijoubu desu', ["I'm okay. / It's fine."], '大丈夫'),
  phrase('n5-fillers', 'nihongo-sukoshi', '日本語が少しわかります', 'nihongo ga sukoshi wakarimasu', ['I understand a little Japanese.']),
  phrase('n5-fillers', 'mouichido', 'もう一度お願いします', 'mou ichido onegaishimasu', ['Could you say that once more, please?']),
  phrase('n5-fillers', 'yukkuri', 'ゆっくり話してください', 'yukkuri hanashite kudasai', ['Please speak slowly.']),
  phrase('n5-fillers', 'wakarimasen', 'わかりません', 'wakarimasen', ["I don't understand. / I don't know."]),

  // Restaurant
  phrase('n5-restaurant', 'irasshaimase', 'いらっしゃいませ', 'irasshaimase', ['Welcome! (what staff say to you)']),
  phrase('n5-restaurant', 'hitori', '一人です', 'hitori desu', ['Table for one, please.'], '一人'),
  phrase('n5-restaurant', 'futari', '二人です', 'futari desu', ['Two people, please.'], '二人'),
  phrase('n5-restaurant', 'menu', 'メニューをください', 'menyuu o kudasai', ['Menu, please.']),
  phrase('n5-restaurant', 'mizu', 'お水をください', 'omizu o kudasai', ['Water, please.']),
  phrase('n5-restaurant', 'osusume', 'おすすめは何ですか', 'osusume wa nan desu ka', ['What do you recommend?']),
  phrase('n5-restaurant', 'kore-o', 'これをください', 'kore o kudasai', ["I'll have this, please."]),
  phrase('n5-restaurant', 'chuumon', '注文お願いします', 'chuumon onegaishimasu', ["I'm ready to order, please."], '注文'),
  phrase('n5-restaurant', 'itadakimasu', 'いただきます', 'itadakimasu', ['Said before eating (thank you for the food)']),
  phrase('n5-restaurant', 'gochisou', 'ごちそうさまでした', 'gochisousama deshita', ['Said after eating (thanks for the meal)']),
  phrase('n5-restaurant', 'oishii', 'おいしい', 'oishii', ['Delicious!']),
  phrase('n5-restaurant', 'karai', '辛いのは苦手です', 'karai no wa nigate desu', ["I'm not good with spicy food."], '辛い'),
  phrase('n5-restaurant', 'okaikei', 'お会計お願いします', 'okaikei onegaishimasu', ['Check, please.'], '会計'),
  phrase('n5-restaurant', 'zenbu', '全部で千円です', 'zenbu de sen en desu', ["That's 1,000 yen in total."], '全部'),
  phrase('n5-restaurant', 'kaado', 'カードは使えますか', 'kaado wa tsukaemasu ka', ['Can I pay by card?']),

  // Shopping
  phrase('n5-shopping', 'ikura', 'いくらですか', 'ikura desu ka', ['How much is it?']),
  phrase('n5-shopping', 'takai', '高いです', 'takai desu', ["It's expensive."], '高い'),
  phrase('n5-shopping', 'yasui', '安いです', 'yasui desu', ["It's cheap."], '安い'),
  phrase('n5-shopping', 'mitemo', '見てもいいですか', 'mitemo ii desu ka', ['May I look at it?'], '見'),
  phrase('n5-shopping', 'shichaku', '試着してもいいですか', 'shichaku shitemo ii desu ka', ['May I try it on?'], '試着'),
  phrase('n5-shopping', 'ookii', 'もっと大きいサイズはありますか', 'motto ookii saizu wa arimasu ka', ['Do you have a bigger size?'], '大きい'),
  phrase('n5-shopping', 'hokanoiro', 'ほかの色はありますか', 'hoka no iro wa arimasu ka', ['Do you have other colors?']),
  phrase('n5-shopping', 'fukuro', '袋はいりますか', 'fukuro wa irimasu ka', ['Do you need a bag?'], '袋'),
  phrase('n5-shopping', 'kore-kudasai', 'これください', 'kore kudasai', ["I'll take this, please."]),

  // Directions
  phrase('n5-directions', 'toire', 'トイレはどこですか', 'toire wa doko desu ka', ['Where is the bathroom?']),
  phrase('n5-directions', 'eki', '駅はどこですか', 'eki wa doko desu ka', ['Where is the station?'], '駅'),
  phrase('n5-directions', 'massugu', 'まっすぐ行ってください', 'massugu itte kudasai', ['Please go straight.'], '真っ直ぐ'),
  phrase('n5-directions', 'migi', '右に曲がってください', 'migi ni magatte kudasai', ['Please turn right.'], '右'),
  phrase('n5-directions', 'hidari', '左に曲がってください', 'hidari ni magatte kudasai', ['Please turn left.'], '左'),
  phrase('n5-directions', 'chikai', '近いですか', 'chikai desu ka', ['Is it close?'], '近い'),
  phrase('n5-directions', 'tooi', '遠いです', 'tooi desu', ["It's far."], '遠い'),
  phrase('n5-directions', 'kokoni', 'ここに書いてください', 'koko ni kaite kudasai', ['Please write it here.'], '書'),
];

export const n5Grammar: GrammarItem[] = [
  {
    id: 'grammar-desu',
    type: 'grammar',
    unitId: 'n5-grammar',
    title: '〜です (desu): "is / am / are" (polite)',
    level: 5,
    explanation:
      'Ends a noun sentence politely. Pattern: NOUN + です. Negative: 〜ではありません (de wa arimasen). Turn it into a question by adding か.',
    exampleSentences: [
      { japanese: '私は学生です。', furigana: 'わたしはがくせいです。', english: 'I am a student.' },
      { japanese: 'これは本です。', furigana: 'これはほんです。', english: 'This is a book.' },
      { japanese: '学生ではありません。', furigana: 'がくせいではありません。', english: 'I am not a student.' },
    ],
    commonMistakes: 'Don\'t drop です in polite speech. The negative is ではありません, not じゃない (that is casual).',
    createdAt: new Date(),
  },
  {
    id: 'grammar-wa',
    type: 'grammar',
    unitId: 'n5-grammar',
    title: '〜は (wa): the topic marker',
    level: 5,
    explanation:
      'Marks the topic: what the sentence is about. Written は but pronounced "wa" here. Pattern: TOPIC は + comment.',
    exampleSentences: [
      { japanese: '田中さんは先生です。', furigana: 'たなかさんはせんせいです。', english: 'Mr./Ms. Tanaka is a teacher.' },
      { japanese: '今日は暑いです。', furigana: 'きょうはあついです。', english: 'Today is hot.' },
    ],
    commonMistakes: 'は marks the topic, not always the subject. Think "as for X...".',
    createdAt: new Date(),
  },
  {
    id: 'grammar-o',
    type: 'grammar',
    unitId: 'n5-grammar',
    title: '〜を (o): the object marker',
    level: 5,
    explanation:
      'Marks the thing being acted on. Pattern: OBJECT を VERB. Pronounced "o".',
    exampleSentences: [
      { japanese: '水を飲みます。', furigana: 'みずをのみます。', english: 'I drink water.' },
      { japanese: 'パンを食べます。', furigana: 'パンをたべます。', english: 'I eat bread.' },
    ],
    commonMistakes: 'Only the object takes を. Places you go to use に or へ instead.',
    createdAt: new Date(),
  },
  {
    id: 'grammar-ka',
    type: 'grammar',
    unitId: 'n5-grammar',
    title: '〜か (ka): question marker',
    level: 5,
    explanation:
      'Add か at the end of a sentence to make it a question. Word order stays the same. In speech, a rising tone also works.',
    exampleSentences: [
      { japanese: '学生ですか。', furigana: 'がくせいですか。', english: 'Are you a student?' },
      { japanese: 'これは何ですか。', furigana: 'これはなんですか。', english: 'What is this?' },
    ],
    commonMistakes: 'No question mark is needed in speech. Japanese questions end with か.',
    createdAt: new Date(),
  },
  {
    id: 'grammar-kudasai',
    type: 'grammar',
    unitId: 'n5-grammar',
    title: '〜ください (kudasai): please give me / please do',
    level: 5,
    explanation:
      'A polite request. NOUN + をください = "please give me NOUN". Verb-て + ください = "please do VERB".',
    exampleSentences: [
      { japanese: 'メニューをください。', furigana: 'メニューをください。', english: 'Menu, please.' },
      { japanese: 'ここに書いてください。', furigana: 'ここにかいてください。', english: 'Please write it here.' },
    ],
    commonMistakes: 'Keep the を with the noun in the first pattern; it is part of the request.',
    createdAt: new Date(),
  },
];

function localize(item: Item): Item {
  if (item.type === 'vocab') {
    return {
      ...item,
      tl: vocabTaglish[item.id] ?? vocabTaglish2[item.id] ?? vocabTaglish3[item.id] ?? vocabTaglish4[item.id],
    };
  }
  if (item.type === 'grammar') {
    const tl = grammarTaglish[item.id];
    return tl ? { ...item, explanation: tl.explanation, commonMistakes: tl.commonMistakes } : item;
  }
  if (item.type === 'kana') {
    const base = item.id.replace(/^kana-/, '').replace(/-katakana$/, '');
    return { ...item, mnemonic: kanaTaglish[base] ?? item.mnemonic };
  }
  return item;
}

export async function seedLessonContent(db: MichiDB) {
  const n5All = [
    ...n5Units,
    ...n5MoreUnits,
    ...n5ExtraUnits,
    ...n5Extra2Units,
    ...n5Extra3Units,
    ...n5Extra4Units,
  ].map((unit) => ({
    ...unit,
    guide: unitGuides[unit.id] ?? n5Extra2Guides[unit.id] ?? n5Extra3Guides[unit.id] ?? n5Extra4Guides[unit.id],
    story: unitStories[unit.id] ?? n5Extra2Stories[unit.id] ?? n5Extra3Stories[unit.id] ?? n5Extra4Stories[unit.id],
  }));
  await db.levels.put({
    id: 'kanji',
    name: 'kanji',
    order: 9,
    title: 'Kanji Course',
    description: 'Mga letrang Tsino, tinuturo sa kurso.',
  });
  await db.units.bulkPut([...stage0Units, ...n5All, ...kanjiUnits]);
  const allItems: Item[] = [
    ...kanaItems,
    ...katakanaItems,
    ...n5Vocab,
    ...n5Grammar,
    ...n5MoreVocab,
    ...n5MoreGrammar,
    ...n5ExtraVocab,
    ...kanjiItems,
    ...n5Extra2Vocab,
    ...n5Extra3Vocab,
    ...n5Extra3Grammar,
    ...n5Extra4Vocab,
  ];
  await db.items.bulkPut(withSeedOrder(allItems.map(localize)));
}
