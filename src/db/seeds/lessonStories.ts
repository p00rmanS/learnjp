import type { LessonGuide, Story } from '@/types';

export const unitGuides: Record<string, LessonGuide> = {
  'n5-greetings': {
    intro: "Hi, friend! Today you learn the magic words people say every day: hello, thank you, and sorry. Japanese people say them all the time, so you will hear them everywhere.",
    pronunciation: "Say 'o-ha-yo-u' like 'oh-ha-yoh'. The 'u' at the end of 'desu' and 'masu' is whispered, so it sounds like 'dess' and 'mass'.",
    proTip: "Add 'gozaimasu' to be extra polite with teachers, shop staff, and new people. With close friends, you can say just 'arigatou'.",
  },
  'n5-daily': {
    intro: "Let's talk like a little friend! Japanese people often ask 'How are you?' and talk about the weather before they talk about anything else.",
    pronunciation: "In 'ogenki desu ka', the 'o' is short, and the 'ka' goes up at the end like a question. Try 'ten-ki' as 'ten-kee', with 'ki' short.",
    proTip: "Adding 'ne' at the end, as in 'ii tenki desu ne', means 'isn't it?'. It asks the other person to agree with you. Japanese people use it all the time.",
  },
  'n5-fillers': {
    intro: "Japanese people often say little sounds like 'eeto' and 'maa' while they think. These are called fillers. Let's make you sound natural, like a true local!",
    pronunciation: "Say 'eeto' as 'eh-toh', holding the 'ee' a little longer. 'Hee' sounds like 'hey' with a surprised face.",
    proTip: "Nod and say 'sou desu ne' while you listen. It shows you are paying attention, and people will love talking with you.",
  },
  'n5-restaurant': {
    intro: "Let's go out to eat! At a Japanese restaurant, you can point, nod, and say a few simple words. Staff are very helpful when you try.",
    pronunciation: "Say 'ita-da-ki-ma-su' with short, clean syllables. Japanese 'i' and 'u' are short, not long like English.",
    proTip: "Say 'gochisousama deshita' when you finish. Staff love hearing it, and it makes the whole meal feel warm and polite.",
  },
  'n5-shopping': {
    intro: "Time to go shopping! When you want to know the price, just ask. Shopkeepers love when you try to speak Japanese.",
    pronunciation: "Say 'i-ku-ra' with the 'u' almost silent, like 'ik-ra'. Say 'ta-ka-i' with the 'ai' sound like 'eye'.",
    proTip: "Ask 'mitemo ii desu ka?' before you touch something in a shop. It shows respect, and it is what Japanese shoppers say too.",
  },
  'n5-directions': {
    intro: "Let's go on an adventure and find our way! Learn three words for turning and walking, and you can get almost anywhere.",
    pronunciation: "Say 'ma-ssu-gu' with a tiny pause after the 'ma', like 'mah-s-goo'. 'Migi' is 'mee-gee', and 'hidari' is 'hee-dah-ree'.",
    proTip: "When someone gives you directions, say 'hai' and nod. Then repeat the main word, like 'migi', to check you heard right.",
  },
  'n5-numbers': {
    intro: "Let's count together, one, two, three! Numbers are everywhere in Japan: on prices, on trains, and on signs. Once you know them, you can shop like a pro.",
    pronunciation: "Say 'i-chi', 'ni', 'san', 'yon', 'go'. For four, many people say 'yon' or 'shi'. For seven, say 'nana'. For nine, say 'kyuu'.",
    proTip: "Four and seven each have two readings. 'Yon' and 'nana' are the most common, so learn those first. You'll hear 'shi' and 'shichi' too.",
  },
  'n5-time': {
    intro: "What time is it? Let's learn the days of the week and words for time. Japanese calendars are fun because every day ends with 'youbi', which means 'day of the week'.",
    pronunciation: "Say 'getsuyoubi' as 'get-soo-yoh-bee'. The 'you' is one long 'yoh' sound, so hold it a little longer.",
    proTip: "Use 'ni' after a time, like 'kuji ni', to say 'at nine'. But don't use 'ni' with words like 'kyou' or 'ashita'.",
  },
  'n5-food': {
    intro: "Yum! Let's learn words about food and drink. Once you can say what you like, you can order your favorite dish with confidence.",
    pronunciation: "Say 'ko-o-hi-i' as 'koh-hee', with the long 'oo' pressed out a little. 'Ocha' is 'oh-chah' with the 'ch' sound short.",
    proTip: "Use 'desu' after 'suki' or 'kirai' to say 'I like it' or 'I don't like it'. Say 'suki desu' with a happy smile!",
  },
  'n5-transport': {
    intro: "Let's catch a train! Japanese trains are very punctual, so when you know a few words, you can get anywhere quickly and safely.",
    pronunciation: "Say 'den-sha' as 'den-shah' and 'ki-p-pu' with a tiny stop after the 'p', like 'keep-puh'. 'Kuu-kou' sounds like 'koo-koh'.",
    proTip: "Before you ask a question, say 'sumimasen' to get attention. Then say the place you want, like 'Shinjuku made'.",
  },
  'n5-help': {
    intro: "Let's learn how to stay safe. These words help you say how you feel, and how to ask for help if you ever need it.",
    pronunciation: "Say 'ta-su-ke-te' with a clear 'ta'. For 'kyuu-kyuu-sha', say 'kyuu' twice quickly, like 'kyoo-kyoo-shah'.",
    proTip: "In an emergency, say 'Tasukete kudasai!' loudly and clearly. Point at the person you want to help you, and they will respond.",
  },
  'n5-family': {
    intro: "Let's meet your family! In Japanese, you use special words for your own family, like 'haha' for mother, and different words when you talk about someone else's.",
    pronunciation: "Say 'ka-zo-ku' with a short 'ka' and 'zo' like 'zoh'. 'Ani' is 'ah-nee', and 'ane' is 'ah-neh'.",
    proTip: "When you talk about your own family, use the humble words: 'chichi' (father), 'haha' (mother), 'ani' (older brother). Japanese people do this to show respect.",
  },
  'n5-verbs': {
    intro: "Action time! Verbs are the action words. In polite Japanese, most verbs end with 'masu', which makes them sound friendly and clear.",
    pronunciation: "Say 'ta-be-ma-su' with each sound short and even. The 'su' at the end is whispered, so it sounds like 'tah-beh-mass'.",
    proTip: "Turn any verb into a 'no' sentence by changing 'masu' to 'masen'. 'Tabemasu' means 'I eat', and 'tabemasen' means 'I don't eat'.",
  },
  'n5-grammar': {
    intro: "Let's build our very first sentences! Every Japanese sentence has a few building blocks. Learn these and you can say so many things.",
    pronunciation: "The particle 'wa' is written は but spoken 'wa'. The particle 'o' is written を but spoken 'oh'. Say 'desu' as 'dess'.",
    proTip: "Japanese sentences often end with the verb or 'desu'. You can drop the subject when everyone knows who you're talking about.",
  },
  'n5-grammar-2': {
    intro: "You're getting so good! Now we learn small words that connect ideas, like 'with', 'at', and 'in'. These little particles are the glue of Japanese.",
    pronunciation: "Say 'ni' as 'nee', 'de' as 'deh', and 'to' as 'toh'. For 'tai desu', say 'tie dess' with a soft 'ai'.",
    proTip: "Use 'ni' for where you are going, and 'de' for where you do something. 'Eki de matsu' means 'wait at the station', and 'eki ni iku' means 'go to the station'.",
  },
};

export const unitStories: Record<string, Story> = {
  'n5-greetings': {
    title: 'A Good Morning',
    lines: [
      { japanese: 'おはようございます。', romaji: 'Ohayou gozaimasu.', english: 'Good morning.' },
      { japanese: 'こんにちは。わたしは ゆきです。', romaji: 'Konnichiwa. Watashi wa Yuki desu.', english: 'Hello. I am Yuki.' },
      { japanese: 'はじめまして。よろしくおねがいします。', romaji: 'Hajimemashite. Yoroshiku onegaishimasu.', english: 'Nice to meet you. Please treat me well.' },
      { japanese: 'ありがとうございます。さようなら。', romaji: 'Arigatou gozaimasu. Sayounara.', english: 'Thank you very much. Goodbye.' },
    ],
  },
  'n5-daily': {
    title: 'Hello, Friend',
    lines: [
      { japanese: 'お元気ですか。', romaji: 'Ogenki desu ka?', english: 'How are you?' },
      { japanese: '元気です。あなたは？', romaji: 'Genki desu. Anata wa?', english: 'I am fine. And you?' },
      { japanese: '元気です。今日はいい天気ですね。', romaji: 'Genki desu. Kyou wa ii tenki desu ne.', english: "I'm fine. Nice weather today, isn't it?" },
      { japanese: 'そうですね。行きましょう！', romaji: 'Sou desu ne. Ikimashou!', english: "That's right. Let's go!" },
    ],
  },
  'n5-fillers': {
    title: 'Hmm, Let Me Think',
    lines: [
      { japanese: '日本語が少しわかります。', romaji: 'Nihongo ga sukoshi wakarimasu.', english: 'I understand a little Japanese.' },
      { japanese: 'えーと、ゆっくり話してください。', romaji: 'Eeto, yukkuri hanashite kudasai.', english: 'Um... please speak slowly.' },
      { japanese: 'なるほど。へえ、本当に？', romaji: 'Naruhodo. Hee, hontou ni?', english: 'I see. Oh, really?' },
      { japanese: 'たぶん、大丈夫です。', romaji: 'Tabun, daijoubu desu.', english: "Probably, it's okay." },
    ],
  },
  'n5-restaurant': {
    title: 'Dinner Out',
    lines: [
      { japanese: 'いらっしゃいませ。', romaji: 'Irasshaimase.', english: 'Welcome!' },
      { japanese: '二人です。メニューをください。', romaji: 'Futari desu. Menyuu o kudasai.', english: 'Two people. Menu, please.' },
      { japanese: 'おすすめは何ですか。', romaji: 'Osusume wa nan desu ka?', english: 'What do you recommend?' },
      { japanese: 'じゃあ、これをください。いただきます！', romaji: 'Jaa, kore o kudasai. Itadakimasu!', english: "Then, I'll have this, please. Let's eat!" },
      { japanese: 'ごちそうさまでした。お会計お願いします。', romaji: 'Gochisousama deshita. Okaikei onegaishimasu.', english: 'Thank you for the meal. Check, please.' },
    ],
  },
  'n5-shopping': {
    title: 'A New Shirt',
    lines: [
      { japanese: 'これはいくらですか。', romaji: 'Kore wa ikura desu ka?', english: 'How much is this?' },
      { japanese: '二千円です。', romaji: 'Nisen en desu.', english: "It's 2,000 yen." },
      { japanese: '高いですね。見てもいいですか。', romaji: 'Takai desu ne. Mitemo ii desu ka?', english: "It's expensive, isn't it? May I look at it?" },
      { japanese: '試着してもいいですか。', romaji: 'Shichaku shitemo ii desu ka?', english: 'May I try it on?' },
    ],
  },
  'n5-directions': {
    title: 'Where Is the Station?',
    lines: [
      { japanese: 'すみません、駅はどこですか。', romaji: 'Sumimasen, eki wa doko desu ka?', english: 'Excuse me, where is the station?' },
      { japanese: 'まっすぐ行ってください。', romaji: 'Massugu itte kudasai.', english: 'Please go straight.' },
      { japanese: '右に曲がってください。', romaji: 'Migi ni magatte kudasai.', english: 'Please turn right.' },
      { japanese: '近いですか。——はい、近いです！', romaji: 'Chikai desu ka? — Hai, chikai desu!', english: "Is it close? — Yes, it's close!" },
    ],
  },
  'n5-numbers': {
    title: 'Counting Apples',
    lines: [
      { japanese: 'いち、に、さん、し、ご！', romaji: 'Ichi, ni, san, shi, go!', english: 'One, two, three, four, five!' },
      { japanese: 'ろく、しち、はち、く、じゅう！', romaji: 'Roku, shichi, hachi, ku, juu!', english: 'Six, seven, eight, nine, ten!' },
      { japanese: 'ジュースは百円です。', romaji: 'Juusu wa hyaku en desu.', english: 'The juice is 100 yen.' },
      { japanese: 'いくつください。二つください。', romaji: 'Ikutsu kudasai? Futatsu kudasai.', english: 'How many? Two, please.' },
    ],
  },
  'n5-time': {
    title: 'My Week',
    lines: [
      { japanese: '今日は月曜日です。', romaji: 'Kyou wa getsuyoubi desu.', english: 'Today is Monday.' },
      { japanese: '明日は火曜日です。', romaji: 'Ashita wa kayoubi desu.', english: 'Tomorrow is Tuesday.' },
      { japanese: '九時に起きます。', romaji: 'Kuji ni okimasu.', english: 'I wake up at nine.' },
      { japanese: '週末は日曜日です。楽しいですね！', romaji: 'Shuumatsu wa nichiyoubi desu. Tanoshii desu ne!', english: "The weekend is Sunday. That's fun, isn't it!" },
    ],
  },
  'n5-food': {
    title: 'Lunch Time',
    lines: [
      { japanese: '今日のお昼はパンです。', romaji: 'Kyou no ohiru wa pan desu.', english: "Today's lunch is bread." },
      { japanese: 'わたしは卵が好きです。', romaji: 'Watashi wa tamago ga suki desu.', english: 'I like eggs.' },
      { japanese: '飲み物はお茶です。', romaji: 'Nomimono wa ocha desu.', english: 'The drink is tea.' },
      { japanese: '冷たいお茶をください。', romaji: 'Tsumetai ocha o kudasai.', english: 'Cold tea, please.' },
    ],
  },
  'n5-transport': {
    title: 'Lost on the Train',
    lines: [
      { japanese: 'すみません、新宿まで行きたいです。', romaji: 'Sumimasen, Shinjuku made ikitai desu.', english: 'Excuse me, I want to go to Shinjuku.' },
      { japanese: 'これは東京行きですか。', romaji: 'Kore wa Toukyou iki desu ka?', english: 'Is this the train bound for Tokyo?' },
      { japanese: 'いいえ、次の駅で乗り換えてください。', romaji: 'Iie, tsugi no eki de norikaete kudasai.', english: 'No, please transfer at the next station.' },
      { japanese: 'ありがとうございます！', romaji: 'Arigatou gozaimasu!', english: 'Thank you very much!' },
    ],
  },
  'n5-help': {
    title: 'Feeling Sick',
    lines: [
      { japanese: 'すみません、具合が悪いです。', romaji: 'Sumimasen, guai ga warui desu.', english: "Excuse me, I don't feel well." },
      { japanese: '頭が痛いです。', romaji: 'Atama ga itai desu.', english: 'I have a headache.' },
      { japanese: '病院はどこですか。', romaji: 'Byouin wa doko desu ka?', english: 'Where is the hospital?' },
      { japanese: '助けてください！', romaji: 'Tasukete kudasai!', english: 'Please help me!' },
    ],
  },
  'n5-family': {
    title: 'My Family',
    lines: [
      { japanese: '私の家族は四人です。', romaji: 'Watashi no kazoku wa yonin desu.', english: 'My family is four people.' },
      { japanese: '父と母と兄がいます。', romaji: 'Chichi to haha to ani ga imasu.', english: 'I have a father, a mother, and an older brother.' },
      { japanese: '私には妹がいます。', romaji: 'Watashi ni wa imouto ga imasu.', english: 'I have a younger sister.' },
      { japanese: '友達もいます。', romaji: 'Tomodachi mo imasu.', english: 'I have friends, too.' },
    ],
  },
  'n5-verbs': {
    title: 'My Morning Routine',
    lines: [
      { japanese: '私は六時に起きます。', romaji: 'Watashi wa roku ji ni okimasu.', english: 'I wake up at six.' },
      { japanese: '朝ご飯を食べます。', romaji: 'Asagohan o tabemasu.', english: 'I eat breakfast.' },
      { japanese: 'コーヒーを飲みます。', romaji: 'Koohii o nomimasu.', english: 'I drink coffee.' },
      { japanese: '夜、本を読みます。', romaji: 'Yoru, hon o yomimasu.', english: 'At night, I read a book.' },
    ],
  },
  'n5-grammar': {
    title: 'My First Sentences',
    lines: [
      { japanese: '私は学生です。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.' },
      { japanese: 'これは本です。', romaji: 'Kore wa hon desu.', english: 'This is a book.' },
      { japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka?', english: 'What is this?' },
      { japanese: '私の本です。', romaji: 'Watashi no hon desu.', english: "It's my book." },
    ],
  },
  'n5-grammar-2': {
    title: 'Weekend Plans',
    lines: [
      { japanese: '週末、友達と東京に行きたいです。', romaji: 'Shuumatsu, tomodachi to Toukyou ni ikitai desu.', english: 'On the weekend, I want to go to Tokyo with a friend.' },
      { japanese: '電車で行きましょう。', romaji: 'Densha de ikimashou.', english: "Let's go by train." },
      { japanese: '一緒に行きませんか。', romaji: 'Issho ni ikimasen ka?', english: 'Won\'t you come along?' },
      { japanese: '昨日は映画を見ました。', romaji: 'Kinou wa eiga o mimashita.', english: 'Yesterday, I watched a movie.' },
    ],
  },
};
