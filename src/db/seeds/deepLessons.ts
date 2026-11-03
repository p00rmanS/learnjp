import type { LessonSection, SectionKind } from '@/types';

const TITLES: Record<SectionKind, string> = {
  explain: 'Paliwanag',
  tip: 'Tip & trick',
  remember: 'Tandaan natin',
  local: 'Sabi ng mga lokal',
};

const section = (kind: SectionKind, body: string): LessonSection => ({ kind, title: TITLES[kind], body });

function deep(explain: string, tip: string, remember: string, local: string): LessonSection[] {
  return [section('explain', explain), section('tip', tip), section('remember', remember), section('local', local)];
}

export const deepSections: Record<string, LessonSection[]> = {
  'n5-greetings': deep(
    'May dalawang antas ng pagbati: pang-kaibigan (casual) at magalang (polite). Ang "ohayou" ay casual, at ang "ohayou gozaimasu" ay magalang. Sa unang pagkikita, laging magalang ang gamitin.',
    'Kapag hindi sigurado, piliin ang magalang na anyo. Mas mabuti ang sobrang magalang kaysa sa sobrang casual, lalo na sa taong mas matanda o mas mataas ang posisyon.',
    'Ohayou = "Good morning!" sa umaga lang. Konnichiwa = hapon. Konbanwa = gabi. Isipin mo ang "hapon" bilang gitna ng araw: "konnichi" = araw.',
    'Madalas sinasabi ng mga Hapon ang "ohayou" sa kapitbahay, pero "ohayou gozaimasu" sa boss at guro. Maraming naninirahan ang tumatango lang kasabay ng pagbati.',
  ),
  'n5-daily': deep(
    'Ang "ogenki desu ka?" ay tanong tungkol sa kalusugan at kalagayan. Ang sagot na "genki desu" ay simpleng "mabuti ako". Ang "ne" sa dulo ay humihingi ng pagsang-ayon.',
    'Kapag mahaba ang usapan tungkol sa panahon, gamitin ang "ne" nang madalas: "ii tenki desu ne", "samui desu ne". Parang "di ba?" sa Taglish, at nagpapakita ng interes.',
    'Ang "ne" ay parang nod. Ang "ka" ay parang tanong. Kung "ne" ang gamit mo, hindi ka nagtatanong, nakikipag-usap ka lang.',
    'Sa Japan, madalas magsimula ang usapan sa panahon, lalo na sa elevator o sa tindahan. Hindi ito awkward; ito ang normal na paraan ng pakikipagkilala.',
  ),
  'n5-fillers': deep(
    'Ang filler ay tunog na ginagamit habang nag-iisip o nagre-react. Hindi ito mali, pero dapat ay hindi sobra. Ang "eeto" ay para sa paghahanap ng salita, ang "maa" ay para sa "siguro lang", at ang "hee" ay para sa gulat o interes.',
    'Gumamit ng isang filler kada pangungusap lang. Kapag sobra, mukhang nagmamadali o hindi pa sigurado ang nagsasalita. Makinig muna sa kausap, at tumango.',
    'Eeto = "um...". Maa = "well...". Hee = "oh!" Isipin mo ang "hee" bilang "hi!" na may gulat: "Hee! Talaga?"',
    'Madalas ang "sou desu ne" habang nakikinig, at ang "naruhodo" kapag may natutunan. Sa tren o trabaho, mas tahimik ang reaksyon, mas kaunting "hee".',
  ),
  'n5-restaurant': deep(
    'Ang "kudasai" ay pakiusap. Ang "o kudasai" ay pagbigay ng bagay. Ang "itadakimasu" ay salitang sinasabi bago kumain, at "gochisousama deshita" pagkatapos.',
    'Kapag hindi mo alam ang pangalan ng ulam, ituro na lang sa menu at sabihing "kore o kudasai". Sa maraming restaurant may picture menu o vending ticket machine.',
    'Itadakimasu = "salamat sa pagkain, kakain na ako". Gochisousama = "salamat sa pagkain" pagkatapos. Isipin: "Ita-da-ki" bago, "Go-chi-sou" pagkatapos.',
    'Madalas sinasabi ng mga Hapon ang "itadakimasu" habang nakadikit ang kamay. Sa counter ng ramen, sinasabi rin nila ang "gochisousama" paglabas, lalo na sa staff.',
  ),
  'n5-shopping': deep(
    'Ang "ikura desu ka?" ay magkano. Ang "takai" at "yasui" ay mahal at mura. Ang "mitemo ii desu ka" ay pwede ko bang tingnan, at "shichaku shitemo ii desu ka" ay pwede ko bang isukat.',
    'Sa Japan, bihira ang bargaining sa tindahan. Kapag nais mo ng mas mababang presyo, magtanong lang sa palengke o sa lumang tindahan, at magalang.',
    'Mitemo = "tingnan ko muna". Shichaku = "isukat". Isipin: "mi" = mata, "shichaku" = isuot ang damit sa katawan.',
    'Madalas tinatanong ng tindera ang "fukuro wa irimasu ka?". Ang sagot na "hai" ay oo, "iie" ay hindi. Kadalasan may dagdag na bayad ang plastic bag.',
  ),
  'n5-directions': deep(
    'Ang "migi" at "hidari" ay kanan at kaliwa. Ang "massugu" ay diretso. Ang "chikai" at "tooi" ay malapit at malayo. Gamitin ang "ni magatte kudasai" para sa pag-liko.',
    'Kapag naghahanap ng daan, itanong ang "doko desu ka?" at ipakita ang papel o mapa. Madalas, may tumuturo at sumasagot ng "achira" (doon) habang nakaturo.',
    'Migi = kanan, hidari = kaliwa. Kapag may nagtuturo sa iyo, ituro mo rin ang direksyon habang inuulit ang salita para masiguro mong tama ang naintindihan mo.',
    'Maraming Hapon ang nagsasabing "achira desu" habang nakaturo. Mabait silang naglalakad kasama mo kung malayo ang lugar, kaya huwag mahiyang magtanong ulit.',
  ),
  'n5-numbers': deep(
    'May dalawang basa ang 4 (yon at shi) at 7 (nana at shichi). Ang 9 ay kyuu o ku. Ang "ju" ay 10. Sa pagbilang ng bagay, ginagamit ang "hitotsu, futatsu, mittsu" para sa mga pangkalahatang bagay.',
    'Gamitin ang "yon" at "nana" sa karaniwang usapan. Kapag may numero sa presyo, huwag mag-alala sa iba pang basa; maiintindihan ka pa rin.',
    'Yon at nana ang madalas gamitin sa usapan, kaya ang mga ito ang unahin mong matutunan. Ang iba (shi, shichi) ay maririnig mo rin, pero hindi kailangang perpekto agad.',
    'Sa Japan, iniiwasan ng marami ang "shi" (4) at "ku" (9) dahil magkatulad sa "kamatayan" at "paghihirap". Makikita mo ito sa hospital at sa room numbers, kaya minsan walang room 4.',
  ),
  'n5-time': deep(
    'Ang "ji" ay oras. Ang "ni" ay ginagamit pagkatapos ng oras: "kuji ni" = alas-nuwebe. Ang "fun" ay minuto. Ang araw ng linggo ay nagtatapos sa "youbi".',
    'Huwag gumamit ng "ni" sa "kyou", "ashita" at "kinou". Ang mga ito ay nakatayo nang mag-isa. Ito ang pinakamadalas na pagkakamali ng nagsisimula.',
    'Kyou = ngayon. Ashita = bukas. Kinou = kahapon. "Kyou-ashita-kinou" ay parang "ngayon-bukas-kahapon" na may tatlong "o" na tunog.',
    'Madalas sinasabi ng mga Hapon ang oras gamit ang 24-oras na sistema sa tren at sa trabaho. Sa usapan naman, "gozen" at "gogo" ang gamit.',
  ),
  'n5-food': deep(
    'Ang "suki desu" ay gusto. Ang "kirai desu" ay ayaw. Ang "oishii" ay masarap, at "amai" ay matamis. Ang "atsui" sa pagkain ay mainit sa hawakan, at "tsumetai" ay malamig.',
    'Kapag tinanong ka kung ano ang gusto mo, sagutin ang "suki desu" at ituro ang pagkain. Mas madaling maintindihan kaysa sa pagpapaliwanag ng buong pangalan.',
    'Suki = "gusto ko", kirai = "ayaw ko". Isipin mo ang "ki" bilang "gusto ng kamay" (ki = pakiramdam), o "ki-rai" bilang "ayoko ng kirai".',
    'Madalas sinasabi ng mga Hapon ang "oishii!" nang may ngiti kahit simpleng pagkain. Ang pagpuri sa pagkain ng kaibigan ay mahalagang bahagi ng pakikisalamuha.',
  ),
  'n5-transport': deep(
    'Ang "made" ay hanggang sa destinasyon. Ang "iki" ay papunta sa. Ang "norikae" ay paglipat ng tren. Ang "orimasu" ay bababa na ako.',
    'Bago magtanong sa station staff, itanong muna ang "sumimasen" para makuha ang atensyon. Sa ticket machine, may English na button sa karamihan ng malalaking istasyon.',
    'Norikae = "lipat ng tren". Tandaan: "nori" = sumakay, "kae" = palitan. Sumakay, palitan, lumipat.',
    'Sa tren, tahimik ang mga Hapon at hindi tumatawag sa phone. Maraming tren may "quiet car" o "manner mode". Kapag malapit na sa istasyon, nag-aanunsyo ang tren sa wikang Hapon at English.',
  ),
  'n5-help': deep(
    'Ang "tasukete kudasai" ay "tulungan ninyo ako". Sa emergency, ang tawag ay 119 para sa ambulansya at sunog, at 110 para sa pulis. Ang "byouin" ay ospital.',
    'Sa emergency, sabihin nang malakas at malinaw. Itawag ang 119 kung kailangan ng ambulansya, at ituro ang taong tutulong sa iyo. Madalas tumutulong ang ibang tao kapag tinawag mo sila nang direkta.',
    'Tasukete = "tulong!" Isipin mo ang "ta-su-ke" na parang "tulak-ke" kapag humihingi ng tulong sa kaibigan na nasa tabi mo.',
    'Madalas sinasabi ng mga Hapon ang "daijoubu desu ka?" kapag may nakitang nahihirapan. Ang "daijoubu" ay pwede ring sagot na okay lang ako, kahit hindi talaga okay, para hindi mag-alala ang iba.',
  ),
  'n5-family': deep(
    'Sa sariling pamilya, gumamit ng mapagpakumbabang salita: chichi, haha, ani, ane. Sa pamilya ng iba, gumamit ng magalang na salita: otousan, okaasan, onii-san, onee-san.',
    'Kapag nagpapakilala ka ng pamilya mo sa iba, gumamit ng mapagpakumbabang salita. Kapag tinatanong mo ang pamilya ng kausap, gumamit ng magalang na anyo at "o" sa unahan.',
    'Chichi = tatay ko, otousan = tatay mo. Isipin: "o" sa unahan ay paggalang sa ibang tao: "o" + "kaasan" = okaasan (nanay ng iba).',
    'Madalas tinatawag ng mga Hapon ang matatandang kaibigan ng pamilya na "oji-san" o "oba-san" bilang paggalang, kahit hindi kamag-anak. Ito ay tanda ng pagmamahal at respeto.',
  ),
  'n5-verbs': deep(
    'Ang "masu" form ay magalang at pang-araw-araw na anyo. Ang "masen" ay negatibo. Ang "mashita" ay past. Halimbawa: tabemasu (kumakain), tabemasen (hindi kumakain), tabemashita (kumain na).',
    'Kung natatandaan mo ang "masu", kaya mong gawing negatibo at past sa isang galaw lang: palitan ang "masu" ng "masen" o "mashita". Mas madali kaysa sa pagsasaulo ng bawat anyo.',
    'Masu = magalang na aksyon. Masen = hindi. Mashita = tapos na. Isipin mo ang "masen" bilang "masyadong ayaw": mas matalino kung "ma-sen" ay parang "mas-hindi".',
    'Sa kaibigan, madalas ginagamit ang casual na anyo: "taberu" sa halip na "tabemasu". Pero sa unang pagkikita, laging masu muna. Mas ligtas kapag hindi sigurado.',
  ),
  'n5-grammar': deep(
    'May tatlong pangunahing bahagi ng pangungusap: paksa (wa), bagay (o), at lugar o direksyon (ni o de). Ang "desu" ay pagtatapos ng pangngalan. Ang "wa" ay nagsasabi kung ano ang pinag-uusapan.',
    'Kapag nakikinig ka, hanapin ang "wa" at ang "desu". Halos lahat ng simpleng pangungusap ay may ganitong balangkas: paksa, komento, pagtatapos.',
    'Wa = "tungkol sa". Desu = "ay". Kapag pinagsama: "Tungkol sa X, ay Y" = "X ay Y". Ganito mo maiintindihan ang halos lahat ng simpleng pangungusap.',
    'Madalas tinatanggal ng mga Hapon ang paksa kapag halata na kung sino ang pinag-uusapan. Halimbawa, sa usapan, "tabemasu ka?" lang ang tanong, at alam na ng lahat na ikaw ang tinatanong.',
  ),
  'n5-grammar-2': deep(
    'Ang "ni" ay para sa tiyak na oras o pupuntahan. Ang "de" ay para sa lugar ng aksyon at paraan. Ang "to" ay "at" o "kasama". Ang "no" ay pagmamay-ari.',
    'Tanungin ang sarili: may aksyon ba? Kung oo, "de" ang lugar. Kung pupunta ka o may tiyak na oras, "ni" ang gamitin. Ganito mo maiiwasan ang karamihan ng pagkakamali.',
    'Ni = patungo o tiyak na oras. De = kung saan gumagawa. Isipin: "de" = "doon ginagawa", "ni" = "papunta doon".',
    'Sa Japan, madalas gamitin ng mga tao ang "de" sa pagsasabing "bumili sa", tulad ng "konbini de kaimasu" (bibili sa convenience store). Simple at natural.',
  ),
  'n5-adjectives': deep(
    'May dalawang uri: i-adjectives (ookii, chiisai) at na-adjectives (kirei, shizuka). Ang i-adjective ay direktang tumatapos sa "desu". Ang na-adjective ay may "na" bago ang pangngalan: kirei na heya.',
    'Itanong: nagtatapos ba sa "i"? Kung oo, malamang i-adjective. Kung hindi, malamang na-adjective, at lagyan ng "na" kapag nasa harap ng pangngalan.',
    'I-adjective: "ii", "ookii", "chiisai". Na-adjective: "kirei", "shizuka". Kapag nasa harap ng pangngalan, kirei NA, pero ookii LANG.',
    'Madalas ang "kawaii" ay ginagamit ng lahat, kahit sa matatanda, para sa cute na bagay. Ang "ii" ay ginagamit kahit saan, pero ang "yoi" ay mas pormal.',
  ),
  'n5-weather': deep(
    'Ang "ame ga furu" ay umuulan. Ang "yuki ga furu" ay umuulan ng niyebe. Ang "hare" ay maaraw, "kumori" ay maulap. Ang "atsui" at "samui" ay tungkol sa temperatura.',
    'Kapag pinag-uusapan ang panahon, idagdag ang "ne" sa dulo: "atsui desu ne!" Madali itong pagsisimula ng usapan kahit kanino.',
    'Ame = ulan. "Ame ga furu" = bumabagsak ang ulan. Ang "furu" ang salitang tumutukoy sa pagbagsak ng ulan o niyebe.',
    'Sa Japan, halos bawat usapan ay may banggit sa panahon. Madalas sinasabi ng tao ang "kyou wa atsui desu ne" kahit alam na ng lahat na mainit, dahil ito ang paraan ng pagbati.',
  ),
  'n5-hobbies': deep(
    'Ang "shumi" ay hobby. Ang "suki desu" ay gusto. Ang "shimasen ka" ay magalang na imbitasyon. Ang "~ masu" ay pang-aksyon: "oyogimasu" (lumalangoy).',
    'Para mag-imbita nang hindi pilit, gamitin ang "~ shimasen ka?" tulad ng "issho ni ikimasen ka?" (sasama ka ba?). Kung hindi sila makakasama, madalas sasabihin nila ang "chotto..." na may pagtanggi.',
    'Shimasen ka = "hindi ka ba...?" Isipin: "shi-masen ka" = "hindi ka ba gagawa?" kaya ito ay magalang na tanong.',
    'Kapag tinanong ng Hapon ang "shumi wa nan desu ka?", inaasahan nilang sumagot ka ng isang bagay at magtanong pabalik. Ang usapan ay dapat dalawang panig.',
  ),
  'n5-work': deep(
    'Ang "shigoto" ay trabaho, ang "kaisha" ay kumpanya, at ang "kaigi" ay meeting. Ang "de" ay nagsasabi ng lugar ng trabaho: "kaisha de hataraku".',
    'Sa opisina, mahalaga ang maayos na pagpasok at paglabas. Sabihin ang "shitsurei shimasu" sa pagpasok at paglabas ng opisina ng boss.',
    'Kaisha = kumpanya. Ang "kaisha de hataraku" ay "magtrabaho sa kumpanya". Gamitin ang "de" pagkatapos ng lugar ng trabaho.',
    'Sa dulo ng araw, sinasabi ng mga kasamahan ang "otsukaresama desu!" bilang pasasalamat sa pagod. Hindi ito tanong, ito ay pagkilala sa pagod ng bawat isa.',
  ),
  'n5-hotel': deep(
    'Ang "yoyaku shiteimasu" ay may reservation ako. Ang "onegaishimasu" ay pakiusap sa staff. Ang "chekkuin" ay check-in at "chekkuauto" ay check-out.',
    'Bago pumunta sa hotel, i-screenshot ang reservation. Pagdating sa front desk, sabihin ang pangalan at ang "yoyaku shiteimasu" para mabilis ang proseso.',
    'Yoyaku = reservation. Shite imasu = meron na akong ginawa. Isipin: "yoyaku" + "shiteimasu" = "nakapag-book na ako".',
    'Sa maraming hotel sa Japan, karaniwang oras ng check-out ay mga 10 hanggang 11 ng umaga. Sa banyo madalas may hiwalay na tsinelas, kaya huwag itong dalhin palabas ng banyo.',
  ),
  'n5-body': deep(
    'Ang "atama" ay ulo, "me" ay mata, "mimi" ay tenga, "hana" ay ilong, "kuchi" ay bibig. Ang "ga" ay nagsasabi ng bahagi ng katawan na pinag-uusapan: "me ga ookii".',
    'Kapag inilalarawan mo ang sarili, gamitin ang "wa" para sa paksa at "ga" para sa bahagi: "watashi wa kami ga nagai desu" (ako, mahaba ang buhok ko).',
    'Me = mata. Mimi = tenga. Ang "me" at "mimi" ay madaling maalala: "mi" ay parang "mi" sa "mirror" (salamin ng mata).',
    'Kapag masakit ang ulo, madalas sinasabi ng mga Hapon ang "atama ga itai" at kumukuha ng gamot sa botika. Sa botika, may tinatawag na "kusuriya" na nagbebenta ng gamot.',
  ),
  'n5-house': deep(
    'Ang "ie" ay bahay. Ang "doa", "mado", "tsukue", "isu" ay pang-araw-araw na gamit. Ang "wa doko desu ka?" ay nagtatanong kung nasaan ang isang bagay.',
    'Kapag nagtatanong kung nasaan ang bagay, ituro ang lugar habang nagtatanong. Mas mabilis ang pag-unawa kapag may kasamang kilos.',
    'Isu = upuan. Tsukue = mesa. Isipin ang "tsukue" bilang "tsu-kuwe" = mesa para sa kuwentuhan.',
    'Sa bahay ng mga Hapon, madalas may maliit na lugar sa pasukan para sa sapatos (genkan). Ito ang lugar kung saan ka naghuhubad ng sapatos bago pumasok.',
  ),
  'n5-clothes': deep(
    'Ang "kiru" ay magsuot sa katawan, "haku" ay sa paa, "kaburu" ay sa ulo, at "kakeru" ay sa mata (salamin). Ang "kite mo ii desu ka?" ay pwede ko bang isuot ito?',
    'Kapag bumibili ng damit, tanungin ang "kite mo ii desu ka?" bago sumubok. Sa maraming tindahan, may fitting room at mga staff na tutulong sa sukat.',
    'Kiru para sa damit, haku para sa sapatos at pantalon, kaburu para sa sombrero. Tandaan ang pares: bawat isusuot ay may sariling verb.',
    'Sa Japan, madalas mahigpit ang pagsusuot ng damit sa trabaho at paaralan. Ang uniform ay karaniwan sa mga estudyante, at may dress code sa maraming opisina.',
  ),
  'n5-grammar-3': deep(
    'Ang "-te" form ay batayan ng maraming pattern. Ang "~te imasu" ay ginagawa ngayon. Ang "~te mo ii desu" ay pwede ba. Ang "~ta" at "~katta" ay nakaraan.',
    'Kapag pinagsasama ang dalawang aksyon, gamitin ang te-form: "tabete, ikimasu" (kakain, tapos aalis). Hindi kailangang tapusin ang bawat pangungusap nang hiwalay.',
    'Te-form: taberu → tabete. Iku → itte (exception!). Miru → mite. Isipin ang "tabete" bilang "tabi-te" na nagdudugtong ng kilos.',
    'Maraming Hapon ang nagsasabi ng "chotto matte" (sandali lang) kapag may kailangan pang tapusin. Ito ay natural na paraan ng pagsasabing maghintay ka muna.',
  ),
  'n5-classroom': deep(
    'Ang "shitsumon" ay tanong. Ang "kotaemasu" ay sumagot. Ang "shukudai" ay takdang-aralin. Ang "shitsurei shimasu" ay pagpasok o paglabas sa kuwarto.',
    'Kapag may hindi naintindihan, sabihin ang "mou ichido onegaishimasu" bago pa man mawalan ng sunod sa usapan. Mas magalang ito kaysa sa basta tumahimik.',
    'Shitsumon = tanong. Sa klase, sabihin ang "shitsumon ga arimasu" para ipaalam na may itatanong ka.',
    'Sa maraming klase sa Japan, madalas tumatayo ang estudyante kapag sumasagot sa guro, bilang paggalang. Ang pagyuko ng kaunti ay karaniwang tanda ng pasasalamat.',
  ),
  'n5-sightseeing': deep(
    'Ang "otera" ay templong Budista, ang "jinja" ay shrine ng Shinto. Ang "keshiki" ay tanawin. Ang "shashin o totte mo ii desu ka?" ay pwede ba akong kumuha ng litrato?',
    'Bago kumuha ng litrato, itanong muna. Sa templo, maraming lugar ang nagbabawal sa loob, kaya tingnan ang karatula sa pasukan.',
    'Otera = templong Budista (karaniwan may malaking bulwagan at estatwa ng Buddha). Jinja = shrine ng Shinto (kadalasan may torii na pintuan sa pasukan).',
    'Sa shrine, karaniwang hinuhugasan ng mga bisita ang kamay sa chozuya bago pumasok. Minsan nagsisindi rin ng kandila at nagdarasal nang tahimik.',
  ),
  'n5-market': deep(
    'Ang "kono ~ wa ikura desu ka?" ay magkano ang ito. Ang "hitotsu" ay isa. Ang "mou sukoshi yasuku" ay bawasan pa nang kaunti. Ang "ryoushuusho" ay resibo.',
    'Sa palengke, mas madalas bumababa ang presyo kapag bumibili ng marami o sa dulo ng araw. Magtanong nang magalang, at huwag pilitin kung ayaw ng tindera.',
    'Kono = "ito". Isipin: "ko-no" = "ko na ito" (ito na ito, akin na).',
    'Sa maliliit na tindahan, madalas ngumingiti ang tindera at nagpapasalamat sa bawat bumibili. Sabihin ang "arigatou gozaimasu" pag-alis mo.',
  ),
  'n5-feelings': deep(
    'Ang "ureshii" ay masaya, "kanashii" ay malungkot, "tsukareta" ay pagod, at "kowai" ay nakakatakot. Ang "kibun" ay pakiramdam o mood. Ang "kibun ga ii" ay maganda ang pakiramdam.',
    'Para magsabi ng pakiramdam nang casual, gamitin ang "tsukareta" nang walang "masu". Para sa magalang na usapan, gamitin ang "tsukaremashita".',
    'Ureshii = masaya (ur-e-shi). Kanashii = malungkot (ka-na-shi). Isipin: "kanashii" ay parang "kanin" na malungkot dahil wala ka nang ulam.',
    'Madalas sinasabi ng mga Hapon ang "tsukareta~" na may mahabang tunog kapag pagod na pagod. Sa opisina, ito ang karaniwang reklamo, pero may kasamang tawa.',
  ),
  'n5-visit': deep(
    'Ang "ojamashimasu" ay sinasabi kapag pumapasok sa bahay ng iba. Ang "kutsu o nugimasu" ay maghubad ng sapatos. Ang "osewa ni narimashita" ay pasasalamat sa hospitality.',
    'Dalhin ang regalo sa dalawang kamay at iabot nang may yuko. Sabihin ang "tsumaranai mono desu ga" bago iabot, at hayaang buksan ng tatanggap sa ibang oras kung gusto nila.',
    'Ojamashimasu = "pasensya na sa abala". Isipin mo ang "o-ja-ma" bilang "oh, jama (istorbo)!" pero magalang.',
    'Sa bahay na may tatami, tanggalin ang tsinelas bago tumapak sa tatami. Madalas maghihintay ang bisita na sabihan ng host kung saan uupo.',
  ),
  'n5-cooking': deep(
    'Ang "kiru" ay hiwa, "niru" ay pakuluan, "yaku" ay ihaw o prito, at "arau" ay hugas. Ang "shio", "satou", "shouyu" at "miso" ay mga panimpla.',
    'Kapag nagluluto, ilagay muna ang mga sangkap sa tamang pagkakasunod: hugasan, hiwain, tapos lutuin. Mas madali ang pagsunod sa recipe kapag nakaayos ang bawat hakbang.',
    'Yaku = ihaw. Isipin ang "yaki" (iniihaw) na parang "yakisoba" na may ihaw.',
    'Sa hapag ng Hapon, kanin ang sentro at ang okazu ang kasama. Karaniwang sinasabi ng nagluluto ang "gohan dekita yo" kapag handa na ang kain.',
  ),
};
