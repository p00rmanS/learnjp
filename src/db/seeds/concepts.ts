// Stage 0 concept lessons: short, Taglish explanations that go beyond single characters.

export interface ConceptExample {
  jp: string;
  romaji: string;
  meaning: string;
}

export interface ConceptLesson {
  id: string;
  title: string;
  summary: string;
  body: string[];
  examples?: ConceptExample[];
  remember: string;
  tip: string;
}

export const conceptLessons: ConceptLesson[] = [
  {
    id: 'sounds',
    title: 'Paano tumunog ang Japanese',
    summary: 'Limang vowels, parehong-pareho sa Tagalog.',
    body: [
      'Good news: kung Tagalog speaker ka, advantage ka na. Ang Japanese ay may limang vowel lang: a, i, u, e, o. Pareho ito ng Tagalog, hindi nagbabago ang tunog (hindi tulad ng English na "a" sa "cat" vs "cake").',
      'Bawat kana ay isang "mora", isang beat. Pantay-pantay ang haba ng bawat isa, parang pag-clap habang nagbibilang. "Sa-ku-ra" ay tatlong beat, hindi "sak-ra".',
      'Ang "r" sa Japanese ay hindi rolling at hindi English "r". Mas malapit ito sa mabilis na "d" o "l": idampi lang ang dulo ng dila sa itaas ng bibig.',
    ],
    examples: [
      { jp: 'さくら', romaji: 'sa-ku-ra', meaning: 'cherry blossom (3 beats)' },
      { jp: 'あおい', romaji: 'a-o-i', meaning: 'blue (3 beats)' },
      { jp: 'ありがとう', romaji: 'a-ri-ga-to-u', meaning: 'thank you (5 beats)' },
    ],
    remember: 'Isang kana = isang beat. Pantay-pantay, walang diin.',
    tip: 'Pakinggan ang Japanese na pelikula at i-clap ang bawat beat. Mabilis mong mararamdaman ang ritmo.',
  },
  {
    id: 'study-method',
    title: 'Paano matandaan ang kana (study method)',
    summary: 'Mas mabilis kung may sistema.',
    body: [
      'Huwag subukang kabisaduhin ang 46 hiragana sa isang araw. Isang unit (5 hanggang 10 kana) kada araw ay sapat na. Mas mahalaga ang paulit-ulit kaysa sa haba ng study.',
      'Tatlong hakbang bawat kana: (1) tingnan at sabihin ang tunog, (2) isulat ito nang tatlong beses habang sinasabi, (3) i-quiz mo ang sarili mo kinabukasan. Ito ang ginagawa ng review system ng Michi.',
      'Gumawa ng sariling mnemonic. Kung ang "looks like a cat" ay hindi gumagana sa iyo, gumawa ka ng sarili, kahit nakakatawa o weird. Mas natatandaan ang kakaiba.',
      'Pag nagkamali, huwag magalit. Ang mga kamukha (め/ぬ, シ/ツ, ソ/ン) ay hindi pagkukulang mo. Lahat nagkakamali dito.',
    ],
    remember: 'Maliit na unit, araw-araw, tapos review kinabukasan.',
    tip: 'Mas epektibo ang 10 minuto araw-araw kaysa 1 oras isang beses sa isang linggo.',
  },
  {
    id: 'small-tsu',
    title: 'Maliit na っ (double consonant)',
    summary: 'Ang maikling pause bago ang tunog.',
    body: [
      'Ang maliit na っ ay hindi binibigkas bilang "tsu". Ito ay isang maikling pause na nagdodoble sa susunod na consonant. Isipin ang "pause" bago sabihin ang "ke" sa "ki-t-te".',
      'Sa Tagalog, may katumbas tayo sa glottal stop gaya ng sa "pag-asa". Katulad ito: saglit na putol bago ang tunog.',
      'Importante ito dahil nagbabago ang kahulugan: きて (kite, "halika") ay iba sa きって (kitte, "selyo").',
    ],
    examples: [
      { jp: 'きって', romaji: 'kitte', meaning: 'stamp' },
      { jp: 'がっこう', romaji: 'gakkou', meaning: 'school' },
      { jp: 'ざっし', romaji: 'zasshi', meaning: 'magazine' },
    ],
    remember: 'Maliit na っ = hawak ng isang beat, tapos ang susunod na consonant.',
    tip: 'Sa romaji, isinusulat ito bilang doble: gakkou, kitte. Kapag nakita mo ang doble sa romaji, hanapin ang っ.',
  },
  {
    id: 'yoon',
    title: 'Maliit na ゃ ゅ ょ (yoon)',
    summary: 'Pagsamahin ang i-row at maliit na ya, yu, yo.',
    body: [
      'Kapag nilagyan ng maliit na や, ゆ, o よ ang isang kana sa i-column (き, し, ち, に, ひ, み, り, ぎ, じ, び, ぴ), nagiging iisang beat ang dalawa.',
      'き + ゃ = きゃ ("kya"). Hindi "ki-ya", kundi mabilis na "kya", isang beat lang.',
      'Mas madali isipin: tanggalin ang "i", idikit ang "ya". Ki + ya = kya. Shi + yu = shu. Chi + yo = cho.',
    ],
    examples: [
      { jp: 'きゃ きゅ きょ', romaji: 'kya kyu kyo', meaning: 'row ng き' },
      { jp: 'しゃ しゅ しょ', romaji: 'sha shu sho', meaning: 'row ng し' },
      { jp: 'ちゃ ちゅ ちょ', romaji: 'cha chu cho', meaning: 'row ng ち' },
      { jp: 'りょこう', romaji: 'ryokou', meaning: 'trip, travel' },
    ],
    remember: 'Maliit na ゃゅょ = idikit sa naunang kana, isang beat lang.',
    tip: 'Ang しゃ, しゅ, しょ, ちゃ, ちゅ, ちょ, じゃ, じゅ, じょ ay may espesyal na tunog (sha, shu, sho, cha, chu, cho, ja, ju, jo). Walang "y" sa romaji nila.',
  },
  {
    id: 'long-vowels',
    title: 'Mahabang vowel (long vowels)',
    summary: 'Dobleng beat kapag mahaba ang tunog.',
    body: [
      'Sa Japanese, ang haba ng vowel ay nagbabago ng kahulugan. おばさん (obasan, tita) ay iba sa おばあさん (obaasan, lola).',
      'Sa hiragana, ang mahabang vowel ay isinusulat sa pamamagitan ng pagdagdag ng vowel: ああ, いい, うう, ええ (o えい), おお (o おう).',
      'Sa katakana, gumagamit ng gitling "ー" para sa mahabang tunog: コーヒー (koohii).',
      'Ang おう at えい ay madalas binibigkas bilang "oo" at "ee": とうきょう = Tookyoo.',
    ],
    examples: [
      { jp: 'おかあさん', romaji: 'okaasan', meaning: 'mother (polite)' },
      { jp: 'せんせい', romaji: 'sensee', meaning: 'teacher' },
      { jp: 'コーヒー', romaji: 'koohii', meaning: 'coffee' },
      { jp: 'とうきょう', romaji: 'tookyoo', meaning: 'Tokyo' },
    ],
    remember: 'Mahabang vowel = dalawang beat. Bilangin mo.',
    tip: 'Kapag nagbabasa ng ー, hawakan ang vowel ng naunang kana sa isang dagdag na beat.',
  },
  {
    id: 'particles-sound',
    title: 'は, を, へ bilang particle',
    summary: 'Tatlong kana na iba ang basa kapag particle.',
    body: [
      'Tatlong kana lang ang may "espesyal" na basa kapag ginamit bilang particle (salitang nag-uugnay): は binibigkas na "wa", を binibigkas na "o", at へ binibigkas na "e".',
      'Ito ay halos kapareho ng "ang", "ng", "sa" sa Tagalog: maliliit na salita na nagsasabi ng papel ng salita sa pangungusap.',
      'Sa labas ng particle, normal ang basa: はな (hana, flower) ay "ha", hindi "wa".',
    ],
    examples: [
      { jp: 'わたしは がくせいです', romaji: 'watashi wa gakusei desu', meaning: 'Ako ay estudyante.' },
      { jp: 'みずを のみます', romaji: 'mizu o nomimasu', meaning: 'Umiinom ako ng tubig.' },
      { jp: 'がっこうへ いきます', romaji: 'gakkou e ikimasu', meaning: 'Pupunta ako sa paaralan.' },
    ],
    remember: 'は = wa, を = o, へ = e. Pero lang kapag particle.',
    tip: 'Ang を ay halos laging particle. Kapag nakita mo ito sa pangungusap, alam mong "object marker" ito.',
  },
  {
    id: 'katakana-loanwords',
    title: 'Katakana: salitang hiram',
    summary: 'Marami kang makikilala na agad.',
    body: [
      'Ang katakana ay ginagamit para sa mga salitang hiram mula sa ibang wika, lalo na English. Parang Tagalog na "kompyuter" at "telepono".',
      'Kapag natutunan mo na ang katakana, makakabasa ka agad ng maraming salita. Basahin ang tunog, tapos isipin ang English na salita.',
      'Mag-ingat: iba ang tunog ng English sa Japanese. Ang "l" at "r" ay parehong ラ-row, at laging may vowel sa dulo ng consonant (maliban sa ン).',
    ],
    examples: [
      { jp: 'コーヒー', romaji: 'koohii', meaning: 'coffee' },
      { jp: 'テレビ', romaji: 'terebi', meaning: 'television' },
      { jp: 'ホテル', romaji: 'hoteru', meaning: 'hotel' },
      { jp: 'アイスクリーム', romaji: 'aisukuriimu', meaning: 'ice cream' },
      { jp: 'パソコン', romaji: 'pasokon', meaning: 'personal computer' },
    ],
    remember: 'Katakana = tunog ng ibang wika, binasa gamit ang Japanese sounds.',
    tip: 'Maglaro: basahin ang mga pangalan ng produkto sa Japanese ads. Mabilis itong magiging masaya.',
  },
  {
    id: 'sentence-order',
    title: 'Paano buuin ang pangungusap',
    summary: 'Ang pandiwa ay laging nasa dulo.',
    body: [
      'Ang Japanese ay SOV: Subject, Object, Verb. Ang pandiwa ay nasa dulo. Sa English, "I eat rice". Sa Japanese, "I rice eat".',
      'Hindi ito kalayo sa Tagalog: puwede nating sabihing "Kumain ako ng kanin" o "Ako ay kumain ng kanin". Pero sa Japanese, ang pandiwa ay talagang laging huli.',
      'Ang mga particle ang nagsasabi ng papel ng bawat salita. は para sa topic, を para sa object, に at で para sa lugar o oras.',
      'Walang plural sa Japanese. "Hon" ay puwedeng "book" o "books", depende sa konteksto.',
    ],
    examples: [
      { jp: 'わたしは ごはんを たべます', romaji: 'watashi wa gohan o tabemasu', meaning: 'I rice eat = Kumakain ako ng kanin.' },
      { jp: 'ねこが すきです', romaji: 'neko ga suki desu', meaning: 'Gusto ko ang pusa.' },
    ],
    remember: 'Pandiwa sa dulo, particle sa gitna.',
    tip: 'Sa pakikinig, hintayin mo ang dulo ng pangungusap. Doon nasa pinakamahalagang impormasyon.',
  },
];
