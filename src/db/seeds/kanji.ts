import type { KanjiItem, Unit } from '@/types';

export const kanjiUnits: Unit[] = [
  { id: 'kanji-u1', levelId: 'kanji', order: 1, title: 'Mga Numero', theme: 'Isa hanggang sampu' },
  { id: 'kanji-u2', levelId: 'kanji', order: 2, title: 'Kalikasan', theme: 'Araw, buwan, apoy, tubig, puno' },
  { id: 'kanji-u3', levelId: 'kanji', order: 3, title: 'Tao at Katawan', theme: 'Tao, bibig, mata, kamay, paa' },
  { id: 'kanji-u4', levelId: 'kanji', order: 4, title: 'Direksyon at Galaw', theme: 'Taas, baba, kaliwa, kanan, labas, loob' },
  { id: 'kanji-u5', levelId: 'kanji', order: 5, title: 'Oras at Paaralan', theme: 'Taon, oras, pag-aaral, buhay, libro' },
];

type K = Omit<KanjiItem, 'id' | 'unitId' | 'type' | 'createdAt' | 'radicals' | 'exampleWords' | 'jlptLevel'>;

const k = (unitId: string, slug: string, data: K): KanjiItem => ({
  ...data,
  id: `kanji-${slug}`,
  type: 'kanji',
  unitId,
  radicals: [],
  createdAt: new Date(),
});

export const kanjiItems: KanjiItem[] = [
  // Unit 1: numbers
  k('kanji-u1', 'ichi', { character: '一', meanings: ['one'], onReading: ['ICHI', 'ITSU'], kunReading: ['hito-'], strokeCount: 1, mnemonic: 'Isang guhit lang, parang isang daliri. Isipin mong "iisa lang ako".' }),
  k('kanji-u1', 'ni', { character: '二', meanings: ['two'], onReading: ['NI'], kunReading: ['futa-'], strokeCount: 2, mnemonic: 'Dalawang guhit, isa sa itaas at isa sa ibaba. Dalawang kamay, dalawang linya.' }),
  k('kanji-u1', 'san', { character: '三', meanings: ['three'], onReading: ['SAN'], kunReading: ['mi-'], strokeCount: 3, mnemonic: 'Tatlong guhit na magkakapatong. Isipin mo ang tatlong tao sa pila.' }),
  k('kanji-u1', 'shi', { character: '四', meanings: ['four'], onReading: ['SHI'], kunReading: ['yo-', 'yon'], strokeCount: 5, mnemonic: 'Parang bintana na may apat na sulok. Apat na pader, apat na bahagi.' }),
  k('kanji-u1', 'go', { character: '五', meanings: ['five'], onReading: ['GO'], kunReading: ['itsu-'], strokeCount: 4, mnemonic: 'Isipin mong may dalawang linya sa itaas at isang "X" sa ibaba. Limang bahagi ng kamay.' }),
  k('kanji-u1', 'roku', { character: '六', meanings: ['six'], onReading: ['ROKU'], kunReading: ['mu-', 'mut-'], strokeCount: 4, mnemonic: 'Parang tent o bahay na may bubong. Anim na bahagi ng tent.' }),
  k('kanji-u1', 'shichi', { character: '七', meanings: ['seven'], onReading: ['SHICHI'], kunReading: ['nana-', 'nana'], strokeCount: 2, mnemonic: 'Parang hook na nakabaligtad. Pito, may isang kurba sa dulo.' }),
  k('kanji-u1', 'hachi', { character: '八', meanings: ['eight'], onReading: ['HACHI'], kunReading: ['ya-', 'yat-'], strokeCount: 2, mnemonic: 'Dalawang guhit na nagbubukas, parang pintuan na nakabukas. Walong bahagi.' }),
  k('kanji-u1', 'kyuu', { character: '九', meanings: ['nine'], onReading: ['KYUU', 'KU'], kunReading: ['kokono-', 'kokono'], strokeCount: 2, mnemonic: 'Parang kawit na may dagdag na linya. Siyam ang kawit ng kawit.' }),
  k('kanji-u1', 'juu', { character: '十', meanings: ['ten'], onReading: ['JUU'], kunReading: ['tou'], strokeCount: 2, mnemonic: 'Isang plus sign. Sampu, kumpleto na ang dalawang linya.' }),

  // Unit 2: nature
  k('kanji-u2', 'nichi', { character: '日', meanings: ['sun', 'day'], onReading: ['NICHI', 'JITSU'], kunReading: ['hi', 'ka'], strokeCount: 4, mnemonic: 'Parang bintana na may tuldok sa gitna. Ang araw, nakasilip sa bintana.' }),
  k('kanji-u2', 'getsu', { character: '月', meanings: ['moon', 'month'], onReading: ['GETSU', 'GATSU'], kunReading: ['tsuki'], strokeCount: 4, mnemonic: 'Parang buwan na may dalawang guhit sa loob. Isipin mong may gatla ang buwan.' }),
  k('kanji-u2', 'ka', { character: '火', meanings: ['fire'], onReading: ['KA'], kunReading: ['hi'], strokeCount: 4, mnemonic: 'Tatlong patak ng apoy at isang tuwid na apoy sa gitna. Apoy na sumisiklab.' }),
  k('kanji-u2', 'sui', { character: '水', meanings: ['water'], onReading: ['SUI'], kunReading: ['mizu'], strokeCount: 4, mnemonic: 'Agos ng tubig na may tatlong patak sa gilid, parang ilog na umaagos.' }),
  k('kanji-u2', 'moku', { character: '木', meanings: ['tree', 'wood'], onReading: ['MOKU', 'BOKU'], kunReading: ['ki'], strokeCount: 4, mnemonic: 'Puno na may sanga sa gitna, ugat sa ilalim, at dalawang kamay na nakabuka.' }),
  k('kanji-u2', 'kin', { character: '金', meanings: ['gold', 'money'], onReading: ['KIN', 'KON'], kunReading: ['kane'], strokeCount: 8, mnemonic: 'Maraming guhit sa itaas at may "ginto" sa ilalim. Ang pera ay maraming bahagi.' }),
  k('kanji-u2', 'do', { character: '土', meanings: ['earth', 'soil'], onReading: ['DO', 'TO'], kunReading: ['tsuchi'], strokeCount: 3, mnemonic: 'Isang tuwid na linya na may dalawang guhit sa ibaba. Lupa sa ilalim ng halaman.' }),
  k('kanji-u2', 'san-yama', { character: '山', meanings: ['mountain'], onReading: ['SAN'], kunReading: ['yama'], strokeCount: 3, mnemonic: 'Tatlong tuktok ng bundok, nakatayo nang magkatabi.' }),
  k('kanji-u2', 'sen', { character: '川', meanings: ['river'], onReading: ['SEN'], kunReading: ['kawa', 'gawa'], strokeCount: 3, mnemonic: 'Tatlong linya na umaagos pababa, parang ilog na may tatlong daloy.' }),
  k('kanji-u2', 'kuu', { character: '空', meanings: ['sky', 'empty'], onReading: ['KUU'], kunReading: ['sora', 'kara'], strokeCount: 8, mnemonic: 'Lupa sa ilalim at butas sa itaas. Ang langit ay nasa itaas ng lupa.' }),

  // Unit 3: people & body
  k('kanji-u3', 'jin', { character: '人', meanings: ['person'], onReading: ['JIN', 'NIN'], kunReading: ['hito'], strokeCount: 2, mnemonic: 'Dalawang binti ng tao na naglalakad. Parang taong nakatayo.' }),
  k('kanji-u3', 'kou', { character: '口', meanings: ['mouth'], onReading: ['KOU', 'KU'], kunReading: ['kuchi'], strokeCount: 3, mnemonic: 'Isang bukas na bibig. Ang bibig ay kwadrado.' }),
  k('kanji-u3', 'moku-me', { character: '目', meanings: ['eye'], onReading: ['MOKU'], kunReading: ['me'], strokeCount: 5, mnemonic: 'Parang mata na may linya sa gitna. Nakabukas ang mata.' }),
  k('kanji-u3', 'shu', { character: '手', meanings: ['hand'], onReading: ['SHU'], kunReading: ['te'], strokeCount: 4, mnemonic: 'Isipin mong nakabuka ang kamay na may daliri pataas.' }),
  k('kanji-u3', 'soku', { character: '足', meanings: ['foot', 'leg'], onReading: ['SOKU'], kunReading: ['ashi', 'ta(riru)'], strokeCount: 7, mnemonic: 'Bibig na may paa sa ilalim. Ang paa ay nasa ilalim ng katawan.' }),
  k('kanji-u3', 'jo', { character: '女', meanings: ['woman'], onReading: ['JO', 'NYO'], kunReading: ['onna', 'me'], strokeCount: 3, mnemonic: 'Taong nakatiklop ang mga kamay, parang babaeng nagbibigay galang.' }),
  k('kanji-u3', 'dan', { character: '男', meanings: ['man'], onReading: ['DAN', 'NAN'], kunReading: ['otoko'], strokeCount: 7, mnemonic: 'Lakas (力) sa ilalim ng bukid (田). Lalaki ang lakas sa bukid.' }),
  k('kanji-u3', 'shi-ko', { character: '子', meanings: ['child'], onReading: ['SHI', 'SU'], kunReading: ['ko'], strokeCount: 3, mnemonic: 'Batang may dalawang braso na nakabuka. Parang batang tumatakbo.' }),
  k('kanji-u3', 'dai', { character: '大', meanings: ['big'], onReading: ['DAI', 'TAI'], kunReading: ['ookii', 'oo-'], strokeCount: 3, mnemonic: 'Taong may nakabukang braso at paa. Malaki ang taong nakabuka.' }),
  k('kanji-u3', 'shou', { character: '小', meanings: ['small'], onReading: ['SHOU'], kunReading: ['chiisai', 'ko-'], strokeCount: 3, mnemonic: 'Tatlong maliit na guhit. Maliit ang bagay na may tatlong bahagi.' }),

  // Unit 4: direction & movement
  k('kanji-u4', 'jou', { character: '上', meanings: ['up', 'above'], onReading: ['JOU'], kunReading: ['ue', 'a(garu)'], strokeCount: 3, mnemonic: 'Linya sa itaas, at guhit na tumuturo pataas. Pataas ang taas.' }),
  k('kanji-u4', 'ka-shita', { character: '下', meanings: ['down', 'below'], onReading: ['KA', 'GE'], kunReading: ['shita', 'sa(garu)'], strokeCount: 3, mnemonic: 'Linya sa ilalim, at guhit na tumuturo pababa. Pababa ang baba.' }),
  k('kanji-u4', 'sa', { character: '左', meanings: ['left'], onReading: ['SA'], kunReading: ['hidari'], strokeCount: 5, mnemonic: 'Kamay na may hawak na kasangkapan sa kaliwang kamay. Ang kaliwa ay ang kamay na "sa."' }),
  k('kanji-u4', 'u', { character: '右', meanings: ['right'], onReading: ['U', 'YUU'], kunReading: ['migi'], strokeCount: 5, mnemonic: 'Kamay na may bibig sa tabi. Ang kanan ay kamay na ginagamit sa pagsulat.' }),
  k('kanji-u4', 'chuu', { character: '中', meanings: ['middle', 'inside'], onReading: ['CHUU'], kunReading: ['naka'], strokeCount: 4, mnemonic: 'Linya na dumadaan sa gitna ng kahon. Nasa gitna ka.' }),
  k('kanji-u4', 'shutsu', { character: '出', meanings: ['exit', 'go out'], onReading: ['SHUTSU'], kunReading: ['de(ru)', 'da(su)'], strokeCount: 5, mnemonic: 'Dalawang bundok na may linya sa gitna. Lumalabas mula sa bundok.' }),
  k('kanji-u4', 'nyuu', { character: '入', meanings: ['enter', 'put in'], onReading: ['NYUU'], kunReading: ['ha(iru)', 'i(reru)'], strokeCount: 2, mnemonic: 'Dalawang linya na nagtatagpo sa ibaba. Pumapasok sa butas.' }),
  k('kanji-u4', 'ken', { character: '見', meanings: ['see', 'look'], onReading: ['KEN'], kunReading: ['mi(ru)'], strokeCount: 7, mnemonic: 'Mata sa ibabaw ng mga binti. Tumingin gamit ang mata.' }),
  k('kanji-u4', 'kou-gyou', { character: '行', meanings: ['go'], onReading: ['KOU', 'GYOU'], kunReading: ['i(ku)', 'yu(ku)'], strokeCount: 6, mnemonic: 'Dalawang landas na tumatawid. Naglalakad sa kalsada.' }),
  k('kanji-u4', 'rai', { character: '来', meanings: ['come'], onReading: ['RAI'], kunReading: ['ku(ru)', 'ki(ta)'], strokeCount: 7, mnemonic: 'Halaman na may dalawang ugat, parang dumating mula sa malayo.' }),

  // Unit 5: time & school
  k('kanji-u5', 'nen', { character: '年', meanings: ['year'], onReading: ['NEN'], kunReading: ['toshi'], strokeCount: 6, mnemonic: 'Taong may bitbit na palay sa ulo. Taon ng ani.' }),
  k('kanji-u5', 'ji', { character: '時', meanings: ['time', 'hour'], onReading: ['JI'], kunReading: ['toki'], strokeCount: 10, mnemonic: 'Araw (日) na may templo (寺) sa gilid. Oras ng araw.' }),
  k('kanji-u5', 'fun', { character: '分', meanings: ['minute', 'part'], onReading: ['FUN', 'BUN'], kunReading: ['wa(keru)'], strokeCount: 4, mnemonic: 'Kutsilyo (八) na naghahati ng bagay (刀). Hinahati ang oras sa minuto.' }),
  k('kanji-u5', 'gaku', { character: '学', meanings: ['study', 'learning'], onReading: ['GAKU'], kunReading: ['mana(bu)'], strokeCount: 8, mnemonic: 'Bata sa ilalim ng bubong, nag-aaral sa loob ng bahay.' }),
  k('kanji-u5', 'sei', { character: '生', meanings: ['life', 'birth'], onReading: ['SEI', 'SHOU'], kunReading: ['i(kiru)', 'u(mareru)'], strokeCount: 5, mnemonic: 'Halaman na tumutubo mula sa lupa. Buhay na umuusbong.' }),
  k('kanji-u5', 'sen-saki', { character: '先', meanings: ['before', 'ahead'], onReading: ['SEN'], kunReading: ['saki'], strokeCount: 6, mnemonic: 'Paa na nauna sa iba. Nauuna ang paa.' }),
  k('kanji-u5', 'hon', { character: '本', meanings: ['book', 'origin'], onReading: ['HON'], kunReading: ['moto'], strokeCount: 5, mnemonic: 'Puno na may ugat sa ilalim. Libro ay galing sa puno.' }),
  k('kanji-u5', 'sha', { character: '車', meanings: ['car', 'vehicle'], onReading: ['SHA'], kunReading: ['kuruma'], strokeCount: 7, mnemonic: 'Gulong ng karitela na may ehe sa gitna. Sasakyan na may gulong.' }),
  k('kanji-u5', 'mei', { character: '名', meanings: ['name'], onReading: ['MEI', 'MYOU'], kunReading: ['na'], strokeCount: 6, mnemonic: 'Bibig (口) at buwan (夕), para sa pangalan na sinasabi sa dilim.' }),
  k('kanji-u5', 'en', { character: '円', meanings: ['yen', 'circle'], onReading: ['EN'], kunReading: ['maru(i)'], strokeCount: 4, mnemonic: 'Bilog na may maliit na tuldok sa loob. Ang yen ay pera ng Japan.' }),
];
