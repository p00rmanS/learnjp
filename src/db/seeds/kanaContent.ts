// Teaching content for each kana: memory hook (m), Taglish explanation (t), pro tip (p).
// Keys are romaji ids from the seed (e.g. "ka"); hiragana and katakana have separate tables.

export interface KanaContent {
  m: string;
  t: string;
  p: string;
}

type Row = [string, string, string];

function table(rows: Record<string, Row>): Record<string, KanaContent> {
  const out: Record<string, KanaContent> = {};
  for (const [k, [m, t, p]] of Object.entries(rows)) out[k] = { m, t, p };
  return out;
}

export const hiraganaContent = table({
  a: ['Parang taong naka-"A" pose: may crossbar at loop sa kanan, tulad ng apple na may tangkay.', 'Tunog na "ah" gaya ng "a" sa "ama". Pareho lang sa Tagalog, walang pagbabago.', 'Ang pangalawang stroke ay tumatawid pababa. Ang loop sa dulo ang madalas makalimutan.'],
  i: ['Dalawang "i" na magkatabi, parang dalawang taong nakatayo. Ang kaliwa ay mas mahaba.', 'Tunog na "ee" gaya ng "i" sa "isda". Maikli at malinaw.', 'Huwag gawing magkadikit sa dulo.'],
  u: ['Parang "u" na nakatagilid, may maliit na tuldok sa taas, parang takip ng bote.', 'Tunog na "oo" gaya ng "u" sa "uod". Hindi bilugan ang labi masyado, relaxed lang.', 'Ang maliit na stroke sa taas ay hiwalay. Huwag itong kalimutan, kamukha niya si ら kapag wala.'],
  e: ['Parang ibon na lumilipad, may ulo sa taas at pakpak sa baba. "E" para sa "eagle".', 'Tunog na "eh" gaya ng "e" sa "esa". Pareho sa Tagalog.', 'Kamukha ng え ang katakana エ pero mas kurbado. Tandaan na magkaibang set sila.'],
  o: ['Parang taong may hawak na bola: may crossbar, loop, at tuldok sa kanan. "O" ang loop.', 'Tunog na "oh" gaya ng "o" sa "oso". Bilog ang bibig.', 'Huwag ihalo sa あ. Ang お ay may tuldok sa taas-kanan, ang あ ay wala.'],
  ka: ['Parang kamay na may hawak na kutsilyo. "Ka" = "kamay".', 'Tunog na "ka" gaya ng "kama". Walang aspirasyon, hindi ito "kha".', 'Ang maliit na tuldok sa kanan ay stroke din, hindi dakuten. Pag may dalawang tuldok, iba na (が).'],
  ki: ['Parang susi (key) na may dalawang ngipin sa taas. "Ki" = "key".', 'Tunog na "kee" gaya ng "ki" sa "kilay".', 'Dalawang pahalang na linya sa taas ay dapat parallel. Ang ibaba ay kurbado.'],
  ku: ['Parang tuka ng ibon na nakabukas: "ku" = "kuk-kuk" ng manok na tumutuka.', 'Tunog na "koo" gaya ng "ku" sa "kuya".', 'Isa sa pinakamadaling kana. Siguraduhing ang anggulo ay parang "<" na nakatagilid.'],
  ke: ['Parang barrel o bariles na may linya sa gitna. "Ke" = "keg".', 'Tunog na "keh" gaya ng "ke" sa "keso".', 'Ang tatlong stroke ay: kaliwang patayo, pahalang, tapos mahabang kurba pababa.'],
  ko: ['Dalawang pahalang na linya, parang dalawang "kotse" riles. "Ko" = "coat" hanger.', 'Tunog na "koh" gaya ng "ko" sa "kotse".', 'Ang itaas ay diretso, ang ibaba ay kurbado. Huwag ihalo sa い o に.'],
  sa: ['Parang taong may hawak na stick at nakangiti, "sa" = "sandok".', 'Tunog na "sah" gaya ng "sa" sa "saging".', 'Sa maraming font, ang ibabang stroke ay nakakabit (さ) o hiwalay (き). Pareho lang sila.'],
  si: ['Parang fishing hook na nakabaligtad. "Shi" = "shield" hook.', 'Tunog na "shee": "sh" at hindi "s". Parang "shi" sa "shine".', 'Ito ang pinakamadaling hiragana.'],
  su: ['Parang taong may buhol sa buhok. "Su" = "suman" na may tali.', 'Tunog na "soo" gaya ng "su" sa "sukat". Madalas halos hindi marinig ang "u" sa dulo ng salita (desu → "des").', 'Ang loop sa gitna ay dapat bukas. Ang katakana ス ay mas simple.'],
  se: ['Parang bakod na may hawak ang isang tao. "Se" = "set" ng bakod.', 'Tunog na "seh" gaya ng "se" sa "sesyon".', 'May tatlong stroke. Huwag ihalo sa さ at ぜ (may dakuten).'],
  so: ['Parang zigzag na kidlat. "So" = "sorry" na zigzag.', 'Tunog na "soh" gaya ng "so" sa "sobre".', 'Kamukha ng katakana ソ pero mas bilog.'],
  ta: ['Parang "ta" na may "t" sa kaliwa at "c" sa kanan. "Ta" = "tatay".', 'Tunog na "tah" gaya ng "ta" sa "tama".', 'Ang kanang bahagi ay parang く at こ na magkasama.'],
  ti: ['Parang taong may "5" sa ulo. "Chi" = "cheese" na mukhang numero 5.', 'Tunog na "chee": "ch" at hindi "t". Parang "chi" sa "chika".', 'Kamukha ng さ pero ang ち ay may kurbadong buntot sa kanan. Mag-ingat sa mirror.'],
  tu: ['Parang alon (wave) na pa-isa-isa. "Tsu" = "tsunami".', 'Tunog na "tsoo". Sa Tagalog, may "ts" tayo sa "tsinelas", ganun din ito.', 'Ang maliit na っ ay ang parehong hugis pero mas maliit, ibig sabihin "double consonant". Tingnan ang Concepts lesson.'],
  te: ['Parang "T" na may kurba, parang antenna. "Te" = "telepono".', 'Tunog na "teh" gaya ng "te" sa "tela".', 'Isang pahalang na linya at isang kurbadong linya pababa. Pinakamadaling hugis na "T".'],
  to: ['Parang daliri ng paa (toe) na may tinik. "To" = "toe".', 'Tunog na "toh" gaya ng "to" sa "toto" o "tono".', 'Ang maliit na stroke sa kaliwa ay hiwalay sa kurba sa kanan. Huwag ihalo sa ち.'],
  na: ['Parang taong naglalakad na may krus. "Na" = "nanay" na may dalang krus.', 'Tunog na "nah" gaya ng "na" sa "nanay".', 'Ang loop sa dulo ay ang pinakamahirap isulat.'],
  ni: ['Parang "ni" na may dalawang tuldok sa kanan at isang patayo sa kaliwa. Parang riles at poste.', 'Tunog na "nee" gaya ng "ni" sa "nilaga". Madalas gamitin bilang particle na "sa/to".', 'Ang katakana ニ ay dalawang linya lang, mas simple.'],
  nu: ['Parang noodles (nu-dols) na may buhol sa dulo. "Nu" = "noodles".', 'Tunog na "noo" gaya ng "nu" sa "nuno".', 'Kamukha ng め (me) pero ang ぬ ay may loop sa dulo. Ito ang pinakamadalas na pagkakamali.'],
  ne: ['Parang pusa (neko) na nakatayo. "Ne" = "neko" (pusa).', 'Tunog na "neh" gaya ng "ne" sa "neto".', 'Kamukha ng れ at わ. Ang ね ay may loop sa dulo, ang れ ay wala.'],
  no: ['Parang kutsara na bumabalik. "No" = "no entry" na arrow.', 'Tunog na "noh" gaya ng "no" sa "noon". Pinakagamit na particle (の = "ng").', 'Isa sa mga una mong matututunan.'],
  ha: ['Parang taong humahakbang, may bigote. "Ha" = "ha-ha" na nakangiti.', 'Tunog na "hah". Pero kapag particle ito (は), binibigkas na "wa".', 'Kamukha ng ほ at ま. Ang は ay may kaliwang patayo at tatlong stroke.'],
  hi: ['Parang labi na nakangiti. "Hi" = "hee-hee" na ngiti.', 'Tunog na "hee" gaya ng "hi" sa "hiya".', 'Madaling kilalanin, parang ngiti.'],
  hu: ['Parang bundok na may apat na pahalang. "Fu" = "Mt. Fuji" ang hugis.', 'Tunog na "foo", gitna ng "f" at "h". Ibuga ang hangin, huwag diin ang ngipin sa labi.', 'Ang tunog ay hindi tulad ng "f" sa English, mas malambot.'],
  he: ['Parang bundok na mababa. "He" = "hill".', 'Tunog na "heh" gaya ng "he" sa "hena". Kapag particle (へ), binibigkas na "e" at ibig sabihin "papunta sa".', 'Kamukha ng katakana ヘ, halos magkapareho.'],
  ho: ['Parang は na may dagdag na linya. "Ho" = "house" na may bubong.', 'Tunog na "hoh" gaya ng "ho" sa "hotel".', 'Ang は ay tatlo lang, ang ほ ay may dagdag na pahalang sa gitna.'],
  ma: ['Parang mama (nanay) na may dalang bag. "Ma" = "mama".', 'Tunog na "mah" gaya ng "ma" sa "mama".', 'Ang loop sa baba ay ang pinakamahalagang bahagi.'],
  mi: ['Parang "21" na nakasulat. "Mi" = "21" (mi-sa).', 'Tunog na "mee" gaya ng "mi" sa "mina".', 'Ang itaas ay parang 2, ang ibaba ay parang 1, tapos may buntot.'],
  mu: ['Parang baka (cow) na nagsasabing "moo". May buntot na kurba.', 'Tunog na "moo" gaya ng "mu" sa "muni".', 'Ang buntot ay may dagdag na tuldok sa kanan.'],
  me: ['Parang mata (eye) na may pilik. "Me" = "mata" (eye sa Japanese ay め din!).', 'Tunog na "meh" gaya ng "me" sa "mesa". Ang め ay literal na "mata" sa Japanese.', 'Kamukha ng ぬ pero walang loop sa dulo. Ito ang pinakamadalas na kalituhan.'],
  mo: ['Parang bulate (worm) na may dalawang pahalang. "Mo" = "more" na linya.', 'Tunog na "moh" gaya ng "mo" sa "mora".', 'Ang unang dalawa ay pahalang, ang pangatlo ay kurbadong patayo.'],
  ya: ['Parang taong sumisigaw "Yaaa!" na may kamay sa ere.', 'Tunog na "yah" gaya ng "ya" sa "yaya". Bahagi ng yoon din (きゃ).', 'Isa sa tatlong "y-row" lang, kaya madaling matandaan.'],
  yu: ['Parang isda (fish) na lumalangoy, may loop sa dulo. "Yu" = "you" na may fish.', 'Tunog na "yoo" gaya ng "yu" sa "yuta".', 'Ang loop at ang tuwid na linya ay magkaibang stroke.'],
  yo: ['Parang "yo" na may "3" sa kaliwa at tuwid sa kanan. "Yo" = "yo-yo" na may tali.', 'Tunog na "yoh" gaya ng "yo" sa "yoyo".', 'Ang katakana ヨ ay parang nakahiga na "E".'],
  ra: ['Parang "5" na may tuldok sa taas. "Ra" = "rat" na may buntot.', 'Tunog sa pagitan ng "r" at "l". Parang "d" sa "dalawa" pero mabilis ang dila. Hindi ito rolling "r" gaya ng Spanish.', 'Kamukha ng う pero mas mahaba. Ang ら ay may kurbadong buntot sa baba.'],
  ri: ['Parang dalawang "ri" (reed) na magkatabi, ang kanan ay mas mahaba.', 'Tunog na "ree", mabilis ang dila. Parang "li" at "ri" na pinagsama.', 'Kamukha ng い pero ang り ay may kurba sa kanan. Tandaan: ang kanang linya ay mas mahaba.'],
  ru: ['Parang "3" na may loop sa dulo. "Ru" = "roo" na tumatalon.', 'Tunog na "roo", dila sa itaas ng bibig, mabilis. Parang "d" at "r" na pinagsama.', 'Kamukha ng ろ pero ang る ay may loop sa dulo. Kung may loop, る. Kung wala, ろ.'],
  re: ['Parang れ ay ね na walang loop. "Re" = "red" na linya.', 'Tunog na "reh", mabilis ang dila. Parang "le" at "re" na pinagsama.', 'Kamukha ng ね at わ. Ang れ ay walang loop sa dulo, ang ね ay mayroon.'],
  ro: ['Parang "3" na walang loop. "Ro" = "road" na kurbado.', 'Tunog na "roh", mabilis ang dila. Parang "lo" at "ro" na pinagsama.', 'Kung walang loop sa dulo, ろ. Kung may loop, る.'],
  wa: ['Parang れ at ね pero may kurba sa dulo. "Wa" = "wave" (alon).', 'Tunog na "wah" gaya ng "wa" sa "wala". Pareho sa Tagalog!', 'Ito rin ang particle は (binibigkas na "wa"). Mag-ingat sa pagbasa.'],
  wo: ['Parang taong may hawak na krus at nagwawala. "Wo" = "wow" na may tuldok.', 'Tunog na "oh" (hindi "wo"). Ginagamit lang bilang particle ng object (を).', 'Halos hindi ito ginagamit sa salita, particle lang. Madaling matandaan: "to ang tinatamaan".'],
  n: ['Parang "h" na nakabaligtad, o "n" na may kurba. "N" = "n" sa dulo.', 'Tunog na "n" o "ng" depende sa susunod na tunog. Ang ん ay hindi nagsisimula ng salita.', 'Kamukha ng katakana ン pero ang ん ay mas kurbado.'],
});

export const katakanaContent = table({
  a: ['Parang palakol (axe) na nakatayo. Ang "A" ay para sa "axe".', 'Parehong "ah" na tunog tulad ng あ. Mas angular ang hugis ng katakana.', 'Mas mabilis isulat kaysa あ.'],
  i: ['Dalawang linya, ang kaliwa ay pahilig at ang kanan ay patayo. "I" = "eel" na lumalangoy.', 'Pareho ang tunog sa い ("ee"). Mas payat ang hugis ng katakana.', 'Ang pangalawang stroke ay kurbado pababa.'],
  u: ['Parang payong (umbrella) na may hawakan. "U" = "umbrella".', 'Pareho ang tunog sa う ("oo"). May tuldok sa taas, parang takip ng payong.', 'Ang unang dalawa ay maikli at patayo.'],
  e: ['Parang "I" beam o riles ng tren. "E" = "elevator" na hugis.', 'Pareho ang tunog sa え ("eh"). Pinakamadaling katakana, parang titik na "I" na may crossbar.', 'Tatlong pahalang/patayong linya lang. Kamukha ng kanji 工, na ito rin ang pinagmulan.'],
  o: ['Parang "t" na may hook, "o" = "ohio" na hugis krus.', 'Pareho ang tunog sa お ("oh"). May tuldok ito sa kanan.', 'Huwag ihalo sa ナ (na) at メ (me).'],
  ka: ['Parang katana (sword) na hugis K. "Ka" = "katana".', 'Pareho ang tunog sa か ("kah"). Hugis na parang か pero walang tuldok.', 'Halos kapareho ng kanji 力 (lakas).'],
  ki: ['Parang susi (key) na may tatlong linya. "Ki" = "key".', 'Pareho ang tunog sa き ("kee"). Mas simple at tuwid.', 'Dalawang pahalang at isang patayo na tumatawid.'],
  ku: ['Parang kuko na nakabaluktot, o ang sulok ng kahon na may bubong. "Ku" = "kuko".', 'Pareho ang tunog sa く ("koo"). Parang く pero may dagdag na maliit na linya.', 'Kamukha ng タ (ta) at ケ (ke), tingnan nang maigi.'],
  ke: ['Parang titik K na nakatagilid, may patayong linya sa gitna. "Ke" = "kettle".', 'Pareho ang tunog sa け ("keh").', 'Kamukha ng ク at タ. Ang ケ ay may mahabang patayo na linya.'],
  ko: ['Parang kahon na walang kanang gilid. "Ko" = "corner" ng kahon.', 'Pareho ang tunog sa こ ("koh"). Dalawang linya na nagkakabit.', 'Kamukha ng ロ (ro) pero bukas ang isang gilid.'],
  sa: ['Parang taong may tatlong tuldok sa ulo. "Sa" = "saw" (lagari).', 'Pareho ang tunog sa さ ("sah").', 'Kamukha ng セ (se) at キ (ki). Tandaan: ang サ ay may dalawang patayong tuldok sa taas.'],
  si: ['Parang taong may dalawang tuldok at kurba, nakangiti. "Shi" = "she" na nakangiti.', 'Pareho ang tunog sa し ("shee"). Ang mga tuldok ay nakahilig pahilis pakanan.', 'IMPORTANTE: シ vs ツ. Ang シ ay may tuldok na pahalang-sa-pahalang, ang ツ ay patayo. Isipin: シ = "smile" mula kaliwa pakanan.'],
  su: ['Parang espada (sword) na nakahilig. "Su" = "sword".', 'Pareho ang tunog sa す ("soo").', 'Kamukha ng ヌ (nu) pero walang dagdag na stroke sa kanan.'],
  se: ['Parang セット (set): isang pahalang na may patayong kurba. "Se" = "set".', 'Pareho ang tunog sa せ ("seh").', 'Kamukha ng サ pero ang セ ay may kurba sa dulo.'],
  so: ['Dalawang linya na pahilig pababa mula sa taas. "So" = "sew".', 'Pareho ang tunog sa そ ("soh").', 'IMPORTANTE: ソ vs ン. Ang ソ ay may tuldok na patayo (parang \\), ang ン ay pahalang (parang /). Tandaan: "SO" = "slant down".'],
  ta: ['Parang ク na may dagdag na pahilig na linya sa gitna. "Ta" = "tag".', 'Pareho ang tunog sa た ("tah").', 'Kamukha ng ク. Ang タ ay may tumatawid na linya sa gitna.'],
  ti: ['Parang numero 7 na may pahalang sa taas. "Chi" = "cheese" na hiwa.', 'Pareho ang tunog sa ち ("chee").', 'Parang "T" na may dagdag na kurba.'],
  tu: ['Parang tatlong tuldok na nakahilig sa isang kurba. "Tsu" = "tsunami".', 'Pareho ang tunog sa つ ("tsoo").', 'IMPORTANTE: ツ vs シ. Ang ツ ay patayo ang mga tuldok. Ang シ ay pahalang. "TSU" = "straight down".'],
  te: ['Tatlong pahalang na linya na may kurbadong patayo, parang antenna ng telepono.', 'Pareho ang tunog sa て ("teh").', 'Dalawang pahalang sa itaas at isang kurbadong patayo.'],
  to: ['Parang tinik sa daliri ng paa. "To" = "toe".', 'Pareho ang tunog sa と ("toh").', 'Isang patayo at isang pahilig na maikli.'],
  na: ['Parang krus na may kurba. "Na" = "nail" (pako).', 'Pareho ang tunog sa な ("nah").', 'Kamukha ng オ (o) at メ (me).'],
  ni: ['Dalawang pahalang na linya, parang "=" (equals). "Ni" = "two" (ni = 2 sa Japanese).', 'Pareho ang tunog sa に ("nee"). Ang 二 ay ang kanji para sa "dalawa" din!', 'Pinakamadaling katakana. Dalawang linya lang, ang ibaba ay mas mahaba.'],
  nu: ['Parang ス na may dagdag na tuldok sa kanan. "Nu" = "noodles".', 'Pareho ang tunog sa ぬ ("noo").', 'Kamukha ng ス (su) pero may dagdag na stroke.'],
  ne: ['Parang lambat (net) na may krus sa taas.', 'Pareho ang tunog sa ね ("neh").', 'Kamukha ng ホ (ho) at フ (fu).'],
  no: ['Isang pahilig na linya, parang "/" slash.', 'Pareho ang tunog sa の ("noh"). Isang linya lang.', 'Kamukha ng ソ at ン pero walang tuldok.'],
  ha: ['Parang sumbrero (hat) o bundok na may dalawang paa.', 'Pareho ang tunog sa は ("hah").', 'Kamukha ng 八 (8) na kanji.'],
  hi: ['Parang sakong (heel) ng sapatos. "Hi" = "heel".', 'Pareho ang tunog sa ひ ("hee").', 'Tandaan: may pahalang sa taas at kurba sa baba, parang nakatagilid na "L".'],
  hu: ['Parang bubong ng bahay. "Fu" = "fuji" bundok.', 'Pareho ang tunog sa ふ ("foo").', 'Kamukha ng ワ (wa) at ウ (u).'],
  he: ['Parang bundok na mababa. "He" = "hill".', 'Pareho ang tunog sa へ ("heh"). Halos kapareho ng hiragana!', 'Ito ay halos kapareho ng hiragana へ, kaya madali.'],
  ho: ['Parang krus na may dalawang tuldok sa gilid, parang kabayo (horse) na nakatayo.', 'Pareho ang tunog sa ほ ("hoh").', 'Kamukha ng ネ (ne) at ホ.'],
  ma: ['Parang maskara (mask) na nakatiklop sa isang sulok. "Ma" = "mask".', 'Pareho ang tunog sa ま ("mah").', 'Kamukha ng ム (mu) at ヌ (nu).'],
  mi: ['Tatlong pahilig na linya. "Mi" = "three" (mi = 3 sa Japanese counting).', 'Pareho ang tunog sa み ("mee").', 'Dapat parallel at magkakapareho ang haba.'],
  mu: ['Parang triangle na may sungay ng baka. "Mu" = "moo".', 'Pareho ang tunog sa む ("moo").', 'Kamukha ng マ pero ang ム ay may dagdag na tuldok.'],
  me: ['Parang X na may kurba. "Me" = "mess", magulong krus.', 'Pareho ang tunog sa め ("meh").', 'Kamukha ng ナ (na) at ノ (no).'],
  mo: ['Parang も na pinasimple: dalawang pahalang at isang kurbadong patayo. "Mo" = "more" na linya.', 'Pareho ang tunog sa も ("moh").', 'Kamukha ng セ (se) at モ.'],
  ya: ['Parang bangka na may layag. "Ya" = "yacht".', 'Pareho ang tunog sa や ("yah").', 'Kamukha ng セ at ヤ ay may kaibahan sa dulo.'],
  yu: ['Parang kahon na may dagdag na linya sa kanan. "Yu" = "U".', 'Pareho ang tunog sa ゆ ("yoo").', 'Kamukha ng コ (ko) pero may dagdag na linya.'],
  yo: ['Parang "yo" na may tatlong pahalang na linya, parang "E" na nakahiga.', 'Pareho ang tunog sa よ ("yoh").', 'Kamukha ng 3 na may tuwid na gilid, o letrang E na nakahiga.'],
  ra: ['Parang dalawang linya sa taas ng kurba, "ra" = "rainbow" na may bubong.', 'Pareho ang tunog sa ら ("rah"), mabilis ang dila.', 'Kamukha ng フ (fu) at ヲ (wo).'],
  ri: ['Dalawang patayong linya, ang kanan ay mas mahaba. "Ri" = "reed".', 'Pareho ang tunog sa り ("ree"), mabilis ang dila.', 'Kamukha ng 川 (ilog) na kanji.'],
  ru: ['Parang dalawang ugat (root) na bumababa. "Ru" = "root".', 'Pareho ang tunog sa る ("roo"), mabilis ang dila.', 'Kamukha ng ノ at ン.'],
  re: ['Parang letrang L na nakahilig pakanan. "Re" = "reel" na may tali.', 'Pareho ang tunog sa れ ("reh"), mabilis ang dila.', 'Kamukha ng 乚 at ヒ.'],
  ro: ['Isang kahon. "Ro" = "room" (kuwarto).', 'Pareho ang tunog sa ろ ("roh"), mabilis ang dila.', 'Kamukha ng ロ ay parang kahon, mag-ingat sa 口 (bibig) na kanji.'],
  wa: ['Parang "U" na may flat na bubong, "wa" = "wall" na may bubong.', 'Pareho ang tunog sa わ ("wah").', 'Kamukha ng ウ (u) at フ (fu).'],
  wo: ['Parang ラ na may dagdag na linya. Bibihira lang itong makita.', 'Pareho ang tunog sa を ("oh").', 'Halos hindi ito ginagamit sa katakana.'],
  n: ['Parang "n" na may dalawang tuldok at kurba. "N" = "nose" (ilong).', 'Pareho ang tunog sa ん ("n" o "ng").', 'IMPORTANTE: ン vs ソ. Ang ン ay pahalang ang tuldok (parang /), ang ソ ay patayo. "N" = "nine" tuldok.'],
});

// Dakuten / handakuten rows: generated from the base kana with a shared explanation.
const VOICED: Record<string, { base: string; kind: 'dakuten' | 'handakuten' }> = {
  ga: { base: 'ka', kind: 'dakuten' }, gi: { base: 'ki', kind: 'dakuten' }, gu: { base: 'ku', kind: 'dakuten' },
  ge: { base: 'ke', kind: 'dakuten' }, go: { base: 'ko', kind: 'dakuten' },
  za: { base: 'sa', kind: 'dakuten' }, zi: { base: 'si', kind: 'dakuten' }, zu: { base: 'su', kind: 'dakuten' },
  ze: { base: 'se', kind: 'dakuten' }, zo: { base: 'so', kind: 'dakuten' },
  da: { base: 'ta', kind: 'dakuten' }, di: { base: 'ti', kind: 'dakuten' }, du: { base: 'tu', kind: 'dakuten' },
  de: { base: 'te', kind: 'dakuten' }, do: { base: 'to', kind: 'dakuten' },
  ba: { base: 'ha', kind: 'dakuten' }, bi: { base: 'hi', kind: 'dakuten' }, bu: { base: 'hu', kind: 'dakuten' },
  be: { base: 'he', kind: 'dakuten' }, bo: { base: 'ho', kind: 'dakuten' },
  pa: { base: 'ha', kind: 'handakuten' }, pi: { base: 'hi', kind: 'handakuten' }, pu: { base: 'hu', kind: 'handakuten' },
  pe: { base: 'he', kind: 'handakuten' }, po: { base: 'ho', kind: 'handakuten' },
};

const VOICED_SOUND: Record<string, string> = {
  ga: 'ga', gi: 'gee', gu: 'goo', ge: 'geh', go: 'goh',
  za: 'za', zi: 'jee', zu: 'zoo', ze: 'zeh', zo: 'zoh',
  da: 'da', di: 'jee', du: 'zoo', de: 'deh', do: 'doh',
  ba: 'ba', bi: 'bee', bu: 'boo', be: 'beh', bo: 'boh',
  pa: 'pa', pi: 'pee', pu: 'poo', pe: 'peh', po: 'poh',
};

function voicedContent(script: 'hiragana' | 'katakana') {
  const out: Record<string, KanaContent> = {};
  const baseTable = script === 'hiragana' ? hiraganaContent : katakanaContent;
  const rare = script === 'hiragana' ? ['di', 'du'] : ['di', 'du'];
  for (const [key, { base, kind }] of Object.entries(VOICED)) {
    const mark = kind === 'dakuten' ? 'dakuten (゛)' : 'handakuten (゜)';
    const dots = kind === 'dakuten' ? 'dalawang tuldok' : 'maliit na bilog';
    const b = baseTable[base];
    out[key] = {
      m: `Kunin mo ang "${base}" at lagyan ng ${dots}. ${kind === 'dakuten' ? 'Parang may "buzzer" na idinagdag sa tunog.' : 'Parang "pop!" na bula sa dulo.'}`,
      t: kind === 'dakuten'
        ? `Pareho ng "${base}" pero may ${mark}, kaya "voiced": nanginginig ang lalamunan mo. Tunog: "${VOICED_SOUND[key]}". Hawakan mo ang leeg mo habang binibigkas, dapat may vibration.`
        : `Pareho ng "${base}" pero may ${mark}. Ang "h" ay nagiging "p". Tunog: "${VOICED_SOUND[key]}". Madaling matandaan, parang "pop".`,
      p: rare.includes(key)
        ? `Bihirang gamitin. Halos pareho ang tunog ng ${key === 'di' ? 'じ (ji)' : 'ず (zu)'}. Makikita mo lang ito sa ilang salita gaya ng "hanaji" (nosebleed) o "tsuzuku" (to continue).`
        : `Hakbang: isulat muna ang "${base}", tapos idagdag ang ${dots} sa taas-kanan. ${b ? b.p.split('.')[0] + '.' : ''}`,
    };
  }
  return out;
}

export const voicedHiragana = voicedContent('hiragana');
export const voicedKatakana = voicedContent('katakana');
