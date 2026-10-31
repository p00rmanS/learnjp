import type { LessonGuide, Story } from '@/types';

export const unitGuides: Record<string, LessonGuide> = {
  'n5-greetings': {
    intro: "Hi, friend! Ngayon, matututunan mo ang mga salitang sinasabi ng mga Hapon araw-araw: hello, salamat, at sorry. Maririnig mo ang mga ito kahit saan.",
    pronunciation: "Sabihin ang 'o-ha-yo-u' na parang 'oh-ha-yoh'. Ang 'u' sa dulo ng 'desu' at 'masu' ay bulong lang, kaya parang 'dess' at 'mass'.",
    proTip: "Idagdag ang 'gozaimasu' para magalang sa teacher, staff, at bagong kakilala. Sa close na kaibigan, pwede lang 'arigatou'.",
  },
  'n5-daily': {
    intro: "Mag-usap tayo na parang magkaibigan! Madalas magtanong ang mga Hapon ng 'Ogenki desu ka?' at pag-usapan ang panahon bago ang iba.",
    pronunciation: "Sa 'ogenki desu ka', maikli ang 'o', at tumataas ang tunog ng 'ka' sa dulo na parang tanong. Ang 'tenki' ay 'ten-kee'.",
    proTip: "Ang 'ne' sa dulo, tulad ng 'ii tenki desu ne', ay parang 'di ba?'. Hinihingi nito ang sang-ayon ng kausap mo.",
  },
  'n5-fillers': {
    intro: "Madalas magsabi ang mga Hapon ng mga tunog tulad ng 'eeto' at 'maa' habang nag-iisip. Tinatawag itong fillers. Tuturuan kitang magtunog natural, parang totoong local!",
    pronunciation: "Sabihin ang 'eeto' na 'eh-toh', medyo hinahaba ang 'ee'. Ang 'hee' ay parang 'hey' na may gulat na mukha.",
    proTip: "Tumango at sabihing 'sou desu ne' habang nakikinig. Ipinapakita nitong nakikinig ka, at mas gugustuhin kang kausap ng iba.",
  },
  'n5-restaurant': {
    intro: "Kain tayo sa labas! Sa restaurant sa Japan, pwede kang magturo, tumango, at magsabi ng ilang simpleng salita. Malaking tulong ang staff kapag sinubukan mo.",
    pronunciation: "Sabihin ang 'ita-da-ki-ma-su' nang malinis at maikli ang bawat pantig. Maikli ang 'i' at 'u' sa Japanese, hindi humahaba tulad sa English.",
    proTip: "Sabihin ang 'gochisousama deshita' pagkatapos kumain. Natutuwa ang staff, at mas magalang ang buong pagkain.",
  },
  'n5-shopping': {
    intro: "Oras na para mamili! Kapag gusto mong malaman ang presyo, itanong lang. Gustong-gusto ng mga tindera kapag sinusubukan mong mag-Japanese.",
    pronunciation: "Sabihin ang 'i-ku-ra' na halos hindi naririnig ang 'u', parang 'ik-ra'. Sa 'ta-ka-i', ang 'ai' ay parang 'eye'.",
    proTip: "Itanong ang 'mitemo ii desu ka?' bago mo hawakan ang paninda. Respeto ito, at ganito rin ang sinasabi ng mga Hapon na namimili.",
  },
  'n5-directions': {
    intro: "Mag-adventure tayo at hanapin ang daan! Tatlong salita lang para sa pag-liko at paglakad, at kahit saan ka makakarating.",
    pronunciation: "Sabihin ang 'ma-ssu-gu' na may maliit na hinto pagkatapos ng 'ma', parang 'mah-s-goo'. Ang 'migi' ay 'mee-gee' at ang 'hidari' ay 'hee-dah-ree'.",
    proTip: "Kapag may nagbigay ng direksyon, sabihin ang 'hai' at tumango. Ulitin ang pangunahing salita, tulad ng 'migi', para masigurong tama ang narinig mo.",
  },
  'n5-numbers': {
    intro: "Magbilang tayo: isa, dalawa, tatlo! Makikita ang numero sa presyo, tren, at karatula sa buong Japan. Kapag alam mo na ito, pwede ka nang mamili na parang pro.",
    pronunciation: "Sabihin ang 'i-chi', 'ni', 'san', 'yon', 'go'. Ang apat ay 'yon' o 'shi', ang pito ay 'nana', at ang siyam ay 'kyuu'.",
    proTip: "Ang apat at pito ay may dalawang pagbasa. Ang 'yon' at 'nana' ang pinakakaraniwan, kaya unahin mo ang mga iyon. Maririnig mo rin ang 'shi' at 'shichi'.",
  },
  'n5-time': {
    intro: "Anong oras na? Alamin natin ang mga araw ng linggo at mga salita tungkol sa oras. Ang bawat araw ay nagtatapos sa 'youbi', na ibig sabihin ay 'araw ng linggo'.",
    pronunciation: "Sabihin ang 'getsuyoubi' na 'get-soo-yoh-bee'. Mahaba ang 'you', kaya i-hold nang kaunti ang 'yoh'.",
    proTip: "Gamitin ang 'ni' pagkatapos ng oras, tulad ng 'kuji ni' = 'at nine'. Pero huwag gamitin ang 'ni' sa 'kyou' o 'ashita'.",
  },
  'n5-food': {
    intro: "Yum! Matututunan natin ang mga salita tungkol sa pagkain at inumin. Kapag alam mo nang sabihin ang gusto mo, kaya mo nang umorder ng paborito mo.",
    pronunciation: "Sabihin ang 'ko-o-hi-i' na 'koh-hee', pinipiga nang kaunti ang mahabang 'oo'. Ang 'ocha' ay 'oh-chah'.",
    proTip: "Gamitin ang 'desu' pagkatapos ng 'suki' o 'kirai' para sabihing 'gusto ko' o 'hindi ko gusto'. Sabihin ang 'suki desu' nang nakangiti!",
  },
  'n5-transport': {
    intro: "Sumakay tayo ng tren! Punctual ang mga tren sa Japan, kaya kapag alam mo ang ilang salita, mabilis kang makakarating kahit saan nang ligtas.",
    pronunciation: "Sabihin ang 'den-sha' na 'den-shah'. Ang 'ki-p-pu' ay may maliit na hinto pagkatapos ng 'p', parang 'keep-puh'.",
    proTip: "Bago magtanong, sabihin ang 'sumimasen' para makuha ang atensyon. Pagkatapos, sabihin ang pupuntahan mo, tulad ng 'Shinjuku made'.",
  },
  'n5-help': {
    intro: "Matututunan natin kung paano manatiling ligtas. Makakatulong ang mga salitang ito para sabihin ang nararamdaman mo at kung paano humingi ng tulong.",
    pronunciation: "Sabihin ang 'ta-su-ke-te' nang malinaw ang 'ta'. Para sa 'kyuu-kyuu-sha', sabihin nang mabilis ang 'kyuu' dalawang beses, parang 'kyoo-kyoo-shah'.",
    proTip: "Sa emergency, sabihin ang 'Tasukete kudasai!' nang malakas at malinaw. Ituro ang taong gusto mong tumulong, at sasagot sila.",
  },
  'n5-family': {
    intro: "Kilalanin natin ang pamilya mo! Sa Japanese, may espesyal na salita para sa sarili mong pamilya, tulad ng 'haha' para sa nanay, at iba kapag pinag-uusapan ang pamilya ng iba.",
    pronunciation: "Sabihin ang 'ka-zo-ku' na may maikling 'ka' at 'zo' na parang 'zoh'. Ang 'ani' ay 'ah-nee', at ang 'ane' ay 'ah-neh'.",
    proTip: "Kapag pinag-uusapan ang sariling pamilya, gamitin ang mapagpakumbabang salita: 'chichi' (tatay), 'haha' (nanay), 'ani' (kuya). Ginagawa ito ng mga Hapon para magpakita ng respeto.",
  },
  'n5-verbs': {
    intro: "Action time! Ang verbs ay mga salitang kilos. Sa magalang na Japanese, karamihan ng verbs ay nagtatapos sa 'masu', na malinaw at magiliw pakinggan.",
    pronunciation: "Sabihin ang 'ta-be-ma-su' nang pantay at maikli ang bawat pantig. Ang 'su' sa dulo ay bulong lang, parang 'tah-beh-mass'.",
    proTip: "Gawing negatibo ang verb sa pagpalit ng 'masu' sa 'masen'. Ang 'tabemasu' ay 'kumakain ako', at ang 'tabemasen' ay 'hindi ako kumakain'.",
  },
  'n5-grammar': {
    intro: "Gawa na natin ang una nating mga pangungusap! May ilang building blocks ang bawat pangungusap sa Japanese. Kapag natutunan mo ang mga ito, marami ka nang masasabi.",
    pronunciation: "Ang particle na 'wa' ay isinusulat na は pero binibigkas na 'wa'. Ang particle na 'o' ay isinusulat na を pero binibigkas na 'oh'. Ang 'desu' ay 'dess'.",
    proTip: "Madalas nagtatapos ang pangungusap sa Japanese sa verb o sa 'desu'. Pwede mong alisin ang subject kapag alam na ng lahat kung sino ang pinag-uusapan.",
  },
  'n5-grammar-2': {
    intro: "Ang galing mo na! Ngayon matututunan natin ang maliliit na salita na nagdudugtong ng ideya, tulad ng 'kasama', 'sa', at 'sa loob'. Ang mga maliliit na particle na ito ang pandikit ng Japanese.",
    pronunciation: "Sabihin ang 'ni' na 'nee', ang 'de' na 'deh', at ang 'to' na 'toh'. Para sa 'tai desu', sabihin ang 'tie dess' nang malambot ang 'ai'.",
    proTip: "Gamitin ang 'ni' para sa pupuntahan, at 'de' para sa lugar kung saan ka gumagawa ng aksyon. 'Eki de matsu' = maghintay sa istasyon; 'eki ni iku' = pumunta sa istasyon.",
  },
  'n5-adjectives': {
    intro: "Hi! Ngayon, matututunan natin kung paano i-describe ang mga bagay. May dalawang uri ng adjective sa Japanese: ang 'i-adjectives' tulad ng 'ookii', at ang 'na-adjectives' tulad ng 'kirei'.",
    pronunciation: "Sabihin ang 'oo' sa 'ookii' na mahaba, 'oh-kee'. Ang 'chiisai' ay 'chee-sigh'. Malinaw dapat ang bawat pantig.",
    proTip: "Kapag na-adjective ang nasa harap ng noun, lagyan ng 'na': きれいな部屋 (kirei na heya) = malinis na kuwarto. Ang i-adjective ay hindi na kailangan ng 'na'.",
  },
  'n5-weather': {
    intro: "Ang panahon ay laging paksa ng usapan. Pwede kang magsimula sa 'Kyou wa ii tenki desu ne'. Ngayon, matututunan mo ang mga salita para sa panahon at ang apat na season.",
    pronunciation: "Ang 'ame' (ulan) ay 'ah-meh', hindi 'ay-mee'. Ang 'yuki' (niyebe) ay 'yoo-kee'. Malinaw ang 'k' sa dulo ng pantig.",
    proTip: "Madalas sabihin ng mga Hapon ang 'ne' sa dulo para humingi ng sang-ayon: 'Atsui desu ne!' = 'Ang init, 'no?'. Gamitin ito para sumabay sa usapan.",
  },
  'n5-hobbies': {
    intro: "Ano ang gusto mong gawin pag weekend? Sa lesson na ito, matututunan mo ang mga hobby at kung paano mag-imbita ng kaibigan.",
    pronunciation: "Sabihin ang 'shashin' na 'shah-sheen'. Ang 'sanpo' ay 'san-poh'. Malambot ang 'sh' sa parehong salita.",
    proTip: "Gamitin ang 'shimasen ka' para mag-imbita nang magalang: 'Issho ni sanpo shimasen ka?' = 'Gusto mo bang mag-walk together?'",
  },
  'n5-work': {
    intro: "Ang trabaho at eskwela ay bahagi ng araw-araw natin. Dito matututunan mo kung paano sabihin ang lugar at schedule mo.",
    pronunciation: "Sa 'gakkou', tandaan ang maikling 'k' bago ang 'ou'. Ang 'kaisha' ay 'kai-sha', malinaw ang bawat pantig.",
    proTip: "Gamitin ang 'de' para sa lugar kung saan ka gumagawa: 'kaisha de hataraku' = magtrabaho sa kumpanya. Ang 'de' ang nagsasabi ng lugar ng aksyon.",
  },
  'n5-hotel': {
    intro: "Nasa Japan ka na at nag-check in sa hotel? Ito ang mga salitang kailangan mo sa front desk.",
    pronunciation: "Sabihin ang 'chekkuin' na 'check-een'. Ang 'kagi' (susi) ay 'kah-ghee', malambot ang 'g'.",
    proTip: "Itanong palagi ang Wi-Fi password at check-out time pagdating. Sabihin ang 'onegaishimasu' (pakiusap) para magalang sa staff.",
  },
};

export const unitStories: Record<string, Story> = {
  'n5-greetings': {
    title: 'A Good Morning',
    lines: [
      { japanese: 'おはようございます。', romaji: 'Ohayou gozaimasu.', english: 'Good morning.', tl: 'Ito ang bati sa umaga, magalang na bersyon.' },
      { japanese: 'こんにちは。わたしは ゆきです。', romaji: 'Konnichiwa. Watashi wa Yuki desu.', english: 'Hello. I am Yuki.', tl: 'Bati sa hapon. Ang "wa" dito ay particle na nagsasabi ng paksa, ikaw o si Yuki.' },
      { japanese: 'はじめまして。よろしくおねがいします。', romaji: 'Hajimemashite. Yoroshiku onegaishimasu.', english: 'Nice to meet you. Please treat me well.', tl: 'Sinasabi kapag unang beses kayong magkita. Ibig sabihin, "magandang makilala ka, pakisamahan mo ako."' },
      { japanese: 'ありがとうございます。さようなら。', romaji: 'Arigatou gozaimasu. Sayounara.', english: 'Thank you very much. Goodbye.', tl: 'Salamat nang marami, at paalam. Ang "sayounara" ay para sa mahabang paghihiwalay.' },
    ],
  },
  'n5-daily': {
    title: 'Hello, Friend',
    lines: [
      { japanese: 'お元気ですか。', romaji: 'Ogenki desu ka?', english: 'How are you?', tl: 'Kumusta ka? Ang "ka" sa dulo ay ginagawang tanong ang pangungusap.' },
      { japanese: '元気です。あなたは？', romaji: 'Genki desu. Anata wa?', english: 'I am fine. And you?', tl: 'Mabuti ako. "Anata wa?" ang tanong pabalik: ikaw naman?' },
      { japanese: '元気です。今日はいい天気ですね。', romaji: 'Genki desu. Kyou wa ii tenki desu ne.', english: "I'm fine. Nice weather today, isn't it?", tl: 'Mabuti ako. Ang "ne" sa dulo ay parang "di ba?", hinihingi ang sang-ayon mo.' },
      { japanese: 'そうですね。行きましょう！', romaji: 'Sou desu ne. Ikimashou!', english: "That's right. Let's go!", tl: '"Sou desu ne" ay pagsang-ayon. Ang "ikimashou" ay yayaing umalis na kayo.' },
    ],
  },
  'n5-fillers': {
    title: 'Hmm, Let Me Think',
    lines: [
      { japanese: '日本語が少しわかります。', romaji: 'Nihongo ga sukoshi wakarimasu.', english: 'I understand a little Japanese.', tl: 'Naiintindihan ko nang kaunti ang Japanese. Ang "ga" ay particle para sa bagay na naiintindihan.' },
      { japanese: 'えーと、ゆっくり話してください。', romaji: 'Eeto, yukkuri hanashite kudasai.', english: 'Um... please speak slowly.', tl: '"Eeto" ay pag-iisip. "Yukkuri hanashite kudasai" ay pakiusap na magsalita nang dahan-dahan.' },
      { japanese: 'なるほど。へえ、本当に？', romaji: 'Naruhodo. Hee, hontou ni?', english: 'I see. Oh, really?', tl: '"Naruhodo" ay naiintindihan na. "Hee" ay gulat o interes, at "hontou ni?" ay "talaga?".' },
      { japanese: 'たぶん、大丈夫です。', romaji: 'Tabun, daijoubu desu.', english: "Probably, it's okay.", tl: '"Tabun" ay siguro. "Daijoubu desu" ay ayos lang o okay ako.' },
    ],
  },
  'n5-restaurant': {
    title: 'Dinner Out',
    lines: [
      { japanese: 'いらっしゃいませ。', romaji: 'Irasshaimase.', english: 'Welcome!', tl: 'Ito ang sinasabi ng staff sa pagpasok mo. Hindi mo kailangang sumagot ng mahaba.' },
      { japanese: '二人です。メニューをください。', romaji: 'Futari desu. Menyuu o kudasai.', english: 'Two people. Menu, please.', tl: '"Futari desu" ay dalawa kayo. "O kudasai" ay pakibigay ang bagay na nasa harap ng "o".' },
      { japanese: 'おすすめは何ですか。', romaji: 'Osusume wa nan desu ka?', english: 'What do you recommend?', tl: 'Ano ang inirerekomenda ninyo? Gamit ito kapag hindi ka sigurado sa oorderin.' },
      { japanese: 'じゃあ、これをください。いただきます！', romaji: 'Jaa, kore o kudasai. Itadakimasu!', english: "Then, I'll have this, please. Let's eat!", tl: '"Itadakimasu" ay sinasabi bago kumain, parang "salamat sa pagkain" bago magsimula.' },
      { japanese: 'ごちそうさまでした。お会計お願いします。', romaji: 'Gochisousama deshita. Okaikei onegaishimasu.', english: 'Thank you for the meal. Check, please.', tl: '"Gochisousama deshita" ay salamat sa pagkain pagkatapos. "Okaikei" ang bill, at "onegaishimasu" ay pakiusap.' },
    ],
  },
  'n5-shopping': {
    title: 'A New Shirt',
    lines: [
      { japanese: 'これはいくらですか。', romaji: 'Kore wa ikura desu ka?', english: 'How much is this?', tl: 'Magkano ito? Ang "kore" ay "ito" at ang "ikura" ay "magkano".' },
      { japanese: '二千円です。', romaji: 'Nisen en desu.', english: "It's 2,000 yen.", tl: 'Dalawang libong yen ito. Ang "en" ay ang pera ng Japan.' },
      { japanese: '高いですね。見てもいいですか。', romaji: 'Takai desu ne. Mitemo ii desu ka?', english: "It's expensive, isn't it? May I look at it?", tl: '"Takai" ay mahal. "Mitemo ii desu ka" ay pwede ko bang tingnan?' },
      { japanese: '試着してもいいですか。', romaji: 'Shichaku shitemo ii desu ka?', english: 'May I try it on?', tl: 'Pwede ko bang isukat? Ang "shichaku" ay pagsukat ng damit.' },
    ],
  },
  'n5-directions': {
    title: 'Where Is the Station?',
    lines: [
      { japanese: 'すみません、駅はどこですか。', romaji: 'Sumimasen, eki wa doko desu ka?', english: 'Excuse me, where is the station?', tl: 'Excuse me, nasaan ang istasyon? Ang "doko" ay "saan".' },
      { japanese: 'まっすぐ行ってください。', romaji: 'Massugu itte kudasai.', english: 'Please go straight.', tl: 'Pakidiretso lang. Ang "massugu" ay "diretso".' },
      { japanese: '右に曲がってください。', romaji: 'Migi ni magatte kudasai.', english: 'Please turn right.', tl: 'Pakiliko sa kanan. Ang "migi" ay kanan.' },
      { japanese: '近いですか。——はい、近いです！', romaji: 'Chikai desu ka? — Hai, chikai desu!', english: "Is it close? — Yes, it's close!", tl: 'Malapit ba? Oo, malapit! Ang "chikai" ay malapit.' },
    ],
  },
  'n5-numbers': {
    title: 'Counting Apples',
    lines: [
      { japanese: 'いち、に、さん、し、ご！', romaji: 'Ichi, ni, san, shi, go!', english: 'One, two, three, four, five!', tl: 'Isa, dalawa, tatlo, apat, lima! Ang "shi" ay apat din.' },
      { japanese: 'ろく、しち、はち、く、じゅう！', romaji: 'Roku, shichi, hachi, ku, juu!', english: 'Six, seven, eight, nine, ten!', tl: 'Anim, pito, walo, siyam, sampu! Ang "shichi" ay pito at "ku" ay siyam.' },
      { japanese: 'ジュースは百円です。', romaji: 'Juusu wa hyaku en desu.', english: 'The juice is 100 yen.', tl: 'Ang juice ay isandaang yen. Ang "hyaku" ay isandaan.' },
      { japanese: 'いくつください。二つください。', romaji: 'Ikutsu kudasai? Futatsu kudasai.', english: 'How many? Two, please.', tl: '"Ikutsu" ay ilan, at "futatsu" ay dalawang piraso.' },
    ],
  },
  'n5-time': {
    title: 'My Week',
    lines: [
      { japanese: '今日は月曜日です。', romaji: 'Kyou wa getsuyoubi desu.', english: 'Today is Monday.', tl: 'Lunes ngayon. Ang "kyou" ay ngayong araw.' },
      { japanese: '明日は火曜日です。', romaji: 'Ashita wa kayoubi desu.', english: 'Tomorrow is Tuesday.', tl: 'Martes bukas. Ang "ashita" ay bukas.' },
      { japanese: '九時に起きます。', romaji: 'Kuji ni okimasu.', english: 'I wake up at nine.', tl: 'Gumigising ako ng alas-nuwebe. Ang "ni" ay sumusunod sa oras.' },
      { japanese: '週末は日曜日です。楽しいですね！', romaji: 'Shuumatsu wa nichiyoubi desu. Tanoshii desu ne!', english: "The weekend is Sunday. That's fun, isn't it!", tl: 'Linggo ang weekend. Ang "tanoshii" ay masaya.' },
    ],
  },
  'n5-food': {
    title: 'Lunch Time',
    lines: [
      { japanese: '今日のお昼はパンです。', romaji: 'Kyou no ohiru wa pan desu.', english: "Today's lunch is bread.", tl: 'Tinapay ang tanghalian ngayon. Ang "ohiru" ay tanghalian.' },
      { japanese: 'わたしは卵が好きです。', romaji: 'Watashi wa tamago ga suki desu.', english: 'I like eggs.', tl: 'Gusto ko ang itlog. Tandaan: "suki" ay gumagamit ng "ga", hindi "o".' },
      { japanese: '飲み物はお茶です。', romaji: 'Nomimono wa ocha desu.', english: 'The drink is tea.', tl: 'Tsaa ang inumin. Ang "nomimono" ay inumin.' },
      { japanese: '冷たいお茶をください。', romaji: 'Tsumetai ocha o kudasai.', english: 'Cold tea, please.', tl: 'Pakibigay ng malamig na tsaa. Ang "tsumetai" ay malamig, hawak mo.' },
    ],
  },
  'n5-transport': {
    title: 'Lost on the Train',
    lines: [
      { japanese: 'すみません、新宿まで行きたいです。', romaji: 'Sumimasen, Shinjuku made ikitai desu.', english: 'Excuse me, I want to go to Shinjuku.', tl: 'Gusto kong pumunta sa Shinjuku. Ang "made" ay hanggang sa.' },
      { japanese: 'これは東京行きですか。', romaji: 'Kore wa Toukyou iki desu ka?', english: 'Is this the train bound for Tokyo?', tl: 'Papunta ba ito sa Tokyo? Ang "iki" ay papunta sa.' },
      { japanese: 'いいえ、次の駅で乗り換えてください。', romaji: 'Iie, tsugi no eki de norikaete kudasai.', english: 'No, please transfer at the next station.', tl: 'Hindi, pakilipat sa susunod na istasyon. Ang "norikae" ay paglipat ng tren.' },
      { japanese: 'ありがとうございます！', romaji: 'Arigatou gozaimasu!', english: 'Thank you very much!', tl: 'Maraming salamat!' },
    ],
  },
  'n5-help': {
    title: 'Feeling Sick',
    lines: [
      { japanese: 'すみません、具合が悪いです。', romaji: 'Sumimasen, guai ga warui desu.', english: "Excuse me, I don't feel well.", tl: 'Hindi ako maayos ang pakiramdam. Ang "guai" ay kalagayan ng katawan.' },
      { japanese: '頭が痛いです。', romaji: 'Atama ga itai desu.', english: 'I have a headache.', tl: 'Masakit ang ulo ko. Ang "atama" ay ulo at "itai" ay masakit.' },
      { japanese: '病院はどこですか。', romaji: 'Byouin wa doko desu ka?', english: 'Where is the hospital?', tl: 'Nasaan ang ospital?' },
      { japanese: '助けてください！', romaji: 'Tasukete kudasai!', english: 'Please help me!', tl: 'Tulungan ninyo ako!' },
    ],
  },
  'n5-family': {
    title: 'My Family',
    lines: [
      { japanese: '私の家族は四人です。', romaji: 'Watashi no kazoku wa yonin desu.', english: 'My family is four people.', tl: 'Apat kami sa pamilya. Ang "no" ay nagpapakita ng pagmamay-ari o kaugnayan.' },
      { japanese: '父と母と兄がいます。', romaji: 'Chichi to haha to ani ga imasu.', english: 'I have a father, a mother, and an older brother.', tl: 'May tatay, nanay, at kuya ako. Ang "to" ay "at".' },
      { japanese: '私には妹がいます。', romaji: 'Watashi ni wa imouto ga imasu.', english: 'I have a younger sister.', tl: 'May kapatid akong babae na mas bata. Ang "ni wa" ay nagsasabi ng "para sa akin".' },
      { japanese: '友達もいます。', romaji: 'Tomodachi mo imasu.', english: 'I have friends, too.', tl: 'May mga kaibigan din ako. Ang "mo" ay "din".' },
    ],
  },
  'n5-verbs': {
    title: 'My Morning Routine',
    lines: [
      { japanese: '私は六時に起きます。', romaji: 'Watashi wa roku ji ni okimasu.', english: 'I wake up at six.', tl: 'Gumigising ako ng alas-sais. Ang "okimasu" ay gumising.' },
      { japanese: '朝ご飯を食べます。', romaji: 'Asagohan o tabemasu.', english: 'I eat breakfast.', tl: 'Kumakain ako ng almusal. Ang "o" ay nagmamarka ng binibilang na kinakain.' },
      { japanese: 'コーヒーを飲みます。', romaji: 'Koohii o nomimasu.', english: 'I drink coffee.', tl: 'Umiinom ako ng kape. "Nomimasu" ay uminom.' },
      { japanese: '夜、本を読みます。', romaji: 'Yoru, hon o yomimasu.', english: 'At night, I read a book.', tl: 'Sa gabi, nagbabasa ako ng libro. Ang "yoru" ay gabi.' },
    ],
  },
  'n5-grammar': {
    title: 'My First Sentences',
    lines: [
      { japanese: '私は学生です。', romaji: 'Watashi wa gakusei desu.', english: 'I am a student.', tl: 'Estudyante ako. Ang "wa" ay paksa, at ang "desu" ay "ako ay".' },
      { japanese: 'これは本です。', romaji: 'Kore wa hon desu.', english: 'This is a book.', tl: 'Ito ay libro. Ang "kore" ay ito.' },
      { japanese: 'これは何ですか。', romaji: 'Kore wa nan desu ka?', english: 'What is this?', tl: 'Ano ito? Ang "nan" ay ano.' },
      { japanese: '私の本です。', romaji: 'Watashi no hon desu.', english: "It's my book.", tl: 'Libro ko ito. Ang "no" ay nagpapakita ng pagmamay-ari.' },
    ],
  },
  'n5-grammar-2': {
    title: 'Weekend Plans',
    lines: [
      { japanese: '週末、友達と東京に行きたいです。', romaji: 'Shuumatsu, tomodachi to Toukyou ni ikitai desu.', english: 'On the weekend, I want to go to Tokyo with a friend.', tl: 'Sa weekend, gusto kong pumunta sa Tokyo kasama ang kaibigan. Ang "to" ay "kasama".' },
      { japanese: '電車で行きましょう。', romaji: 'Densha de ikimashou.', english: "Let's go by train.", tl: 'Sumakay tayo ng tren. Ang "de" ay paraan ng pagpunta.' },
      { japanese: '一緒に行きませんか。', romaji: 'Issho ni ikimasen ka?', english: "Won't you come along?", tl: 'Sasama ka ba? Ang "masen ka" ay magalang na yaya.' },
      { japanese: '昨日は映画を見ました。', romaji: 'Kinou wa eiga o mimashita.', english: 'Yesterday, I watched a movie.', tl: 'Kahapon, nanood ako ng pelikula. Ang "mashita" ay nakaraan.' },
    ],
  },
  'n5-adjectives': {
    title: 'My Room',
    lines: [
      { japanese: '私の部屋は大きいです。', romaji: 'Watashi no heya wa ookii desu.', english: 'My room is big.', tl: 'Malaki ang kuwarto ko. Ang "ookii" ay malaki.' },
      { japanese: '窓は小さいです。', romaji: 'Mado wa chiisai desu.', english: 'The window is small.', tl: 'Maliit ang bintana. Ang "chiisai" ay maliit.' },
      { japanese: '机は新しいです。', romaji: 'Tsukue wa atarashii desu.', english: 'The desk is new.', tl: 'Bago ang mesa. Ang "atarashii" ay bago.' },
      { japanese: '椅子は赤いです。', romaji: 'Isu wa akai desu.', english: 'The chair is red.', tl: 'Pula ang upuan. Ang "akai" ay pula.' },
      { japanese: '部屋はきれいで、静かです！', romaji: 'Heya wa kirei de, shizuka desu!', english: 'The room is clean and quiet!', tl: 'Malinis at tahimik ang kuwarto! Ang "de" ay "at" para sa na-adjectives.' },
    ],
  },
  'n5-weather': {
    title: 'Four Seasons',
    lines: [
      { japanese: '今日は雨ですね。', romaji: 'Kyou wa ame desu ne.', english: "It's rainy today, isn't it?", tl: 'Umuulan ngayon, di ba? Ang "ame" ay ulan.' },
      { japanese: '明日は晴れです。', romaji: 'Ashita wa hare desu.', english: 'Tomorrow will be sunny.', tl: 'Maaraw bukas. Ang "hare" ay maaliwalas at maaraw.' },
      { japanese: '夏は暑いです。冬は寒いです。', romaji: 'Natsu wa atsui desu. Fuyu wa samui desu.', english: 'Summer is hot. Winter is cold.', tl: 'Mainit ang tag-init. Malamig ang taglamig.' },
      { japanese: '春が好きです。', romaji: 'Haru ga suki desu.', english: 'I like spring.', tl: 'Gusto ko ang tagsibol. Ang "haru" ay spring.' },
    ],
  },
  'n5-hobbies': {
    title: 'Saturday Fun',
    lines: [
      { japanese: '週末は音楽を聞きます。', romaji: 'Shuumatsu wa ongaku o kikimasu.', english: 'On weekends, I listen to music.', tl: 'Tuwing weekend, nakikinig ako ng musika. Ang "kikimasu" ay makinig.' },
      { japanese: '土曜日は泳ぎます。', romaji: 'Doyoubi wa oyogimasu.', english: 'On Saturday, I swim.', tl: 'Tuwing Sabado, lumalangoy ako. Ang "oyogimasu" ay lumangoy.' },
      { japanese: '日曜日は映画を見ます。', romaji: 'Nichiyoubi wa eiga o mimasu.', english: 'On Sunday, I watch a movie.', tl: 'Tuwing Linggo, nanonood ako ng pelikula. Ang "mimasu" ay manood.' },
      { japanese: '趣味は写真です。', romaji: 'Shumi wa shashin desu.', english: 'My hobby is photography.', tl: 'Ang libangan ko ay pagkuha ng litrato. Ang "shumi" ay hobby.' },
      { japanese: '一緒に散歩しませんか。', romaji: 'Issho ni sanpo shimasen ka?', english: "Won't you go for a walk together?", tl: 'Mag-lakad tayo nang sabay? Magalang na yaya ito.' },
    ],
  },
  'n5-work': {
    title: 'A Busy Day',
    lines: [
      { japanese: '私は会社で働きます。', romaji: 'Watashi wa kaisha de hatarakimasu.', english: 'I work at a company.', tl: 'Nagtatrabaho ako sa kumpanya. Ang "de" ay lugar kung saan ka gumagawa.' },
      { japanese: '毎日、会議があります。', romaji: 'Mainichi, kaigi ga arimasu.', english: 'There is a meeting every day.', tl: 'May meeting araw-araw. Ang "mainichi" ay araw-araw.' },
      { japanese: '仕事は忙しいです。', romaji: 'Shigoto wa isogashii desu.', english: 'My work is busy.', tl: 'Abala ang trabaho ko. Ang "isogashii" ay abala.' },
      { japanese: '休みは日曜日です。', romaji: 'Yasumi wa nichiyoubi desu.', english: 'My day off is Sunday.', tl: 'Linggo ang day off ko. Ang "yasumi" ay pahinga o day off.' },
      { japanese: '先生、ありがとうございます。', romaji: 'Sensei, arigatou gozaimasu.', english: 'Teacher, thank you very much.', tl: 'Salamat nang marami, sensei. Ang "sensei" ay guro o tagapagturo.' },
    ],
  },
  'n5-hotel': {
    title: 'Check In',
    lines: [
      { japanese: 'こんばんは。予約しています。', romaji: 'Konbanwa. Yoyaku shiteimasu.', english: 'Good evening. I have a reservation.', tl: 'Magandang gabi. May reservation ako. Ang "yoyaku shiteimasu" ay "nakapag-reserve na ako".' },
      { japanese: 'チェックインをお願いします。', romaji: 'Chekkuin o onegaishimasu.', english: 'Check-in, please.', tl: 'Pa-check in po. Ang "onegaishimasu" ay pakiusap.' },
      { japanese: '部屋の鍵をください。', romaji: 'Heya no kagi o kudasai.', english: 'The room key, please.', tl: 'Pakibigay ang susi ng kuwarto. Ang "kagi" ay susi.' },
      { japanese: 'Wi-Fiのパスワードは何ですか。', romaji: 'Waifai no pasuwaado wa nan desu ka?', english: "What's the Wi-Fi password?", tl: 'Ano ang password ng Wi-Fi? Ang "pasuwaado" ay password.' },
      { japanese: 'ありがとうございます！', romaji: 'Arigatou gozaimasu!', english: 'Thank you very much!', tl: 'Maraming salamat!' },
    ],
  },
};
