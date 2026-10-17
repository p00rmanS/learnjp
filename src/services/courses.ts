import { db } from '@/db';
import type { Item, Unit } from '@/types';

export const MASTERY_STREAK = 3;

export type CourseId = 'hiragana' | 'katakana' | 'kanji';

export interface CourseDef {
  id: CourseId;
  title: string;
  subtitle: string;
  unitIds: string[];
}

export const COURSES: CourseDef[] = [
  {
    id: 'hiragana',
    title: 'Hiragana',
    subtitle: 'Ang pangunahing alpabeto ng Japanese. Dito magsisimula ang lahat.',
    unitIds: ['stage0-u1', 'stage0-u2', 'stage0-u3', 'stage0-u4', 'stage0-u5', 'stage0-u6'],
  },
  {
    id: 'katakana',
    title: 'Katakana',
    subtitle: 'Ginagamit sa mga banyagang salita, pangalan, at tunog ng ibang wika.',
    unitIds: ['stage0-u7', 'stage0-u8', 'stage0-u9', 'stage0-u10', 'stage0-u11', 'stage0-u12'],
  },
  {
    id: 'kanji',
    title: 'Kanji',
    subtitle: 'Mga letrang galing sa Tsina. Bawat isa ay may kahulugan at pagbasa.',
    unitIds: ['kanji-u1', 'kanji-u2', 'kanji-u3', 'kanji-u4', 'kanji-u5'],
  },
];

export interface CourseUnitState {
  unit: Unit;
  items: Item[];
  mastered: number;
}

export interface CourseState {
  course: CourseDef;
  units: CourseUnitState[];
  total: number;
  mastered: number;
}

export async function loadCourseState(course: CourseDef): Promise<CourseState> {
  const units = await db.units.bulkGet(course.unitIds);
  const itemRows = await db.items.where('unitId').anyOf(course.unitIds).toArray();
  const masteryRows = await db.mastery.bulkGet(itemRows.map((i) => i.id));
  const streakById = new Map(
    masteryRows.filter((m): m is NonNullable<typeof m> => Boolean(m)).map((m) => [m.itemId, m.streak]),
  );

  const unitStates: CourseUnitState[] = course.unitIds
    .map((id) => units.find((u) => u?.id === id))
    .filter((u): u is Unit => Boolean(u))
    .map((unit) => {
      const items = itemRows
        .filter((i) => i.unitId === unit.id)
        .filter((i) => course.id !== 'katakana' || i.id.endsWith('-katakana'))
        .filter((i) => course.id !== 'hiragana' || !i.id.endsWith('-katakana'))
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      const mastered = items.filter((i) => (streakById.get(i.id) ?? 0) >= MASTERY_STREAK).length;
      return { unit, items, mastered };
    });

  const total = unitStates.reduce((sum, u) => sum + u.items.length, 0);
  const mastered = unitStates.reduce((sum, u) => sum + u.mastered, 0);
  return { course, units: unitStates, total, mastered };
}

export async function recordDrillAnswer(itemId: string, correct: boolean): Promise<number> {
  const existing = await db.mastery.get(itemId);
  const streak = correct ? (existing?.streak ?? 0) + 1 : 0;
  await db.mastery.put({ itemId, streak, updatedAt: new Date() });
  return streak;
}

export interface MemoryTrick {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  forCourse: CourseId | 'all';
}

export const MEMORY_TRICKS: MemoryTrick[] = [
  {
    id: 'kwento-hugis',
    title: 'Kwento-Hugis',
    summary: 'Gawing larawan at kwento ang hugis ng bawat letra. Mas madaling tandaan ang kwento kaysa sa simpleng hugis.',
    steps: [
      'Basahin nang malakas ang letra at ang tunog nito.',
      'Tingnan ang hugis at hanapin ang bagay na kahawig nito, tulad ng "の" na parang maliit na kuwerdas o kurbadong sipit.',
      'Gumawa ng isang linyang kwento na may tunog at larawan. Halimbawa: "Ang sipit (の) ay kumukuha ng ngo-ngo (no)."',
      'Ulitin ang kwento tuwing bago matulog. Pagkatapos ng tatlong araw, ang letra na mismo ang maaalala mo.',
    ],
    forCourse: 'hiragana',
  },
  {
    id: 'pares-kahawig',
    title: 'Pares ng Magkakahawig',
    summary: 'Maraming katakana ang magkamukha. Pagsamahin mo sila sa grupo at pag-aralan ang pagkakaiba nila.',
    steps: [
      'Pagsamahin ang mga magkakamukha: シ/ツ/ソ, ン/ソ, ウ/ワ/ラ, ヌ/メ, マ/ア/フ.',
      'Hanapin ang pinakamaliit na pagkakaiba. Halimbawa, ang ソ ay may isang guhit lang sa itaas, at ang ン ay may kurba na pababa.',
      'Mag-drill sa pares lang, hindi sa lahat. Mas mabilis matutunan ang pagkakaiba kapag nakatabi sila.',
    ],
    forCourse: 'katakana',
  },
  {
    id: 'radikal-kwento',
    title: 'Radikal at Kwento',
    summary: 'Ang kanji ay binubuo ng mas maliliit na bahagi na tinatawag na radikal. Gamitin ang mga ito bilang susi sa alaala.',
    steps: [
      'Hatiin ang kanji sa mga bahaging kilala mo, tulad ng 木 (puno) at 日 (araw).',
      'Gumawa ng kwento na pinagdudugtong ang kahulugan ng mga bahagi, tulad ng "Ang araw sa ibabaw ng puno ay 林 (gubat)."',
      'Sabihin ang kahulugan at ang isang pagbasa nang malakas. Ulitin ito sa isip sa loob ng 10 segundo.',
    ],
    forCourse: 'kanji',
  },
  {
    id: 'tatlong-tama',
    title: 'Tatlong Tama',
    summary: 'Isang letra o kanji ay "matatapos" kapag tama mo itong nasagot nang tatlong sunod-sunod. Kapag nagkamali, magsisimula ulit ang bilang.',
    steps: [
      'Mag-drill ng maliit na batch, mga 10 item lang.',
      'Kapag tama, +1 sa streak. Kapag mali, bumalik sa 0 at basahin ang paalala.',
      'Pag-abot ng tatlo sunod-sunod, mamarkahan ang item bilang natutunan.',
      'Bumalik sa mga natapos pagkalipas ng ilang araw para hindi makalimutan.',
    ],
    forCourse: 'all',
  },
  {
    id: 'sulat-sabi-subok',
    title: 'Sulat, Sabi, Subok',
    summary: 'Tatlong hakbang na nagpapatibay ng alaala: gamitin ang kamay, ang bibig, at ang isip.',
    steps: [
      'Sulat: isulat ang letra o kanji tatlong beses sa papel. Bigkasin ang tunog habang sumusulat.',
      'Sabi: sabihin nang malakas ang tunog o pagbasa nang walang tinitingnan.',
      'Subok: takpan ang sagot at subukang alalahanin. Kapag hindi mo naalala, tingnan at ulitin.',
    ],
    forCourse: 'all',
  },
  {
    id: 'sampung-minuto',
    title: 'Sampung Minuto Araw-Araw',
    summary: 'Mas mabisa ang kaunti pero araw-araw kaysa sa mahabang practice minsan sa isang linggo.',
    steps: [
      'Pumili ng isang unit at mag-drill ng 10 minuto bawat araw.',
      'Huwag laktawan ang araw. Kahit isang tamang sagot ay bilang na.',
      'Gamitin ang shield kung may nalaktawang araw, pero bumalik agad sa susunod na araw.',
    ],
    forCourse: 'all',
  },
];
