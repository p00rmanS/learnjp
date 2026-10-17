import type { GrammarItem } from '@/types';

type GrammarTl = Pick<GrammarItem, 'explanation' | 'commonMistakes'>;

export const grammarTaglish: Record<string, GrammarTl> = {
  'grammar-desu': {
    explanation:
      'Ginagamit ang "desu" para tapusin ang pangungusap na may pangngalan, na parang "ako ay" o "ito ay". Pattern: PANGNGALAN + です. Para sa negatibo, gamitin ang ではありません (de wa arimasen). Para gawing tanong, lagyan ng か sa dulo.',
    commonMistakes: 'Huwag alisin ang です sa magalang na usapan. Ang negatibo ay ではありません, hindi じゃない, dahil casual ang huli.',
  },
  'grammar-wa': {
    explanation:
      'Ang は ay particle ng PAKSA: ang pinag-uusapan ng pangungusap. Isinusulat na "wa" pero binibigkas na "wa". Pattern: PAKSA は + sinasabi tungkol dito. Isipin mong "Tungkol kay X, ..."',
    commonMistakes: 'Hindi laging ibig sabihin ng は ay "subject". Mas tama isipin na ito ay "tungkol sa ...".',
  },
  'grammar-o': {
    explanation:
      'Ang を ay particle ng OBHETO: ang binibigyan ng aksyon. Pattern: OBHETO を + VERB. Binibigkas na "o". Halimbawa: "Umiinom ako ng tubig" = 水を飲みます.',
    commonMistakes: 'Ang bagay lang na ginagalaw ng verb ang may を. Ang lugar na pinupuntahan ay gumagamit ng に o へ.',
  },
  'grammar-ka': {
    explanation:
      'Ilagay ang か sa dulo ng pangungusap para gawin itong tanong. Hindi nagbabago ang ayos ng salita. Sa usapan, pwede ring tumaas lang ang tono ng boses.',
    commonMistakes: 'Hindi kailangan ng question mark sa pagsasalita. Sa Japanese, tanong ang pangungusap kapag may か sa dulo.',
  },
  'grammar-kudasai': {
    explanation:
      'Magalang na pakiusap. PANGNGALAN + をください = "pakibigay ang PANGNGALAN". VERB-て + ください = "pakigawa ang VERB".',
    commonMistakes: 'Panatilihin ang を sa pangngalan sa unang pattern; bahagi ito ng pakiusap.',
  },
  'grammar-ni': {
    explanation:
      'Ang に ay ginagamit para sa tiyak na oras (七時に = alas-siyete) at sa pupuntahan kasama ang mga verb ng pagpunta, pagdating, o pag-uwi (行きます, 来ます, 帰ります).',
    commonMistakes: 'Huwag gamitin ang に sa 今日, 明日, o きのう. Nakatayo ang mga iyon nang mag-isa.',
  },
  'grammar-de': {
    explanation:
      'Ang で ay nagsasabi kung saan nangyayari ang aksyon (駅で待ちます = naghihintay sa istasyon) at kung paano ginawa ang aksyon, tulad ng sasakyan (バスで行きます = pupunta sa pamamagitan ng bus).',
    commonMistakes: 'Ang に ay para sa lugar na pupuntahan o kinaroroonan ng bagay. Ang で ay para sa lugar kung saan ka gumagawa ng aksyon.',
  },
  'grammar-to': {
    explanation:
      'Ang と ay nagdudugtong ng dalawang pangngalan na "at" (パンとご飯 = tinapay at kanin). Ginagamit din para sa "kasama" kapag may kasamang tao (友達と行きます = pupunta kasama ang kaibigan).',
    commonMistakes: 'Ang と bilang "at" ay para lang sa mga pangngalan. Para sa buong pangungusap, gumamit ng ibang anyo.',
  },
  'grammar-no': {
    explanation:
      'Ang の ay nagdudugtong ng dalawang pangngalan kung saan ang una ay nagmamay-ari o naglalarawan sa ikalawa: 私の本 = libro ko. Parang "ng" o "pag-aari" sa Taglish.',
  },
  'grammar-tai': {
    explanation:
      'Para sabihing "gusto kong ..." o "I want to ...", kunin ang ます-stem ng verb at idagdag ang たいです. 行きます → 行きたいです (gusto kong pumunta).',
    commonMistakes: 'Ang bagay na gusto mo ay may を o が. Para sa sariling kagustuhan ito, hindi para magtanong sa iba.',
  },
  'grammar-masen-ka': {
    explanation:
      'Magalang na yaya o imbitasyon, parang "hindi ka ba sasama?". Kunin ang ます-stem ng verb at idagdag ang ませんか.',
  },
  'grammar-mashita': {
    explanation:
      'Ginagamit para sabihing tapos na ang aksyon (past tense, magalang). Palitan ang ます ng ました. Ang negatibong nakaraan ay ませんでした.',
    commonMistakes: 'Huwag gamitin ang ました para sa mga plano sa hinaharap. Para sa hinaharap, gamitin ang ます.',
  },
  'grammar-masen': {
    explanation:
      'Ginagawang negatibo ang verb (magalang): "hindi ako ..." o "hindi ko ...". Palitan ang ます ng ません. 食べます → 食べません (hindi ako kumakain).',
  },
};
