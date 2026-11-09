import { useState } from 'react';
import ConceptLessons from './ConceptLessons';
import { conceptLessons } from '@/db/seeds/concepts';
import { n5Lessons, n4Lessons } from '@/db/seeds/grammarN5N4';
import { n3Lessons, n2Lessons, n1Lessons } from '@/db/seeds/grammarN3N1';
import type { ConceptLesson } from '@/db/seeds/concepts';

interface GrammarLevel {
  id: string;
  label: string;
  intro: string;
  lessons: ConceptLesson[];
}

// Ordered from zero knowledge up to N1. Each level keeps its own "read" progress.
const LEVELS: GrammarLevel[] = [
  {
    id: 'konsepto',
    label: 'Konsepto',
    intro: 'Para sa baguhan: paano tumunog ang Japanese, paano bumuo ng simpleng pangungusap, at ang mga salitang araw-araw.',
    lessons: conceptLessons,
  },
  {
    id: 'n5',
    label: 'N5',
    intro: 'Pundasyon ng grammar: です, は, の, at ang mga pattern na unang maririnig mo sa kalye at sa klase.',
    lessons: n5Lessons,
  },
  {
    id: 'n4',
    label: 'N4',
    intro: 'Mas maraming paraan para magsalita: ている, nai form, potential, at mga pattern ng "kung" at "kahit".',
    lessons: n4Lessons,
  },
  {
    id: 'n3',
    label: 'N3',
    intro: 'Mga pattern na ginagamit sa totoong usapan: pagpapahayag ng dahilan, damdamin, at pagbabago ng kalagayan.',
    lessons: n3Lessons,
  },
  {
    id: 'n2',
    label: 'N2',
    intro: 'Mas maayos at natural na pagsasalita: mga pattern ng opinyon, pagpapasya, at malalim na paliwanag.',
    lessons: n2Lessons,
  },
  {
    id: 'n1',
    label: 'N1',
    intro: 'Advanced na grammar para sa balita, akademya, at mahahabang talakayan. Basahin nang dahan-dahan at ulitin.',
    lessons: n1Lessons,
  },
];

export default function GrammarHub() {
  const [activeId, setActiveId] = useState(LEVELS[0].id);
  const level = LEVELS.find((l) => l.id === activeId) ?? LEVELS[0];

  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="eyebrow">Gramatika</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl">Mula sa simula hanggang N1</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
          Isa-isang aralin ang grammar. Bawat aralin ay may paliwanag, halimbawa, paano tandaan, pro tip, at maikling
          check.
        </p>
      </div>

      <div role="tablist" aria-label="Antas ng grammar" className="flex flex-wrap gap-2">
        {LEVELS.map((l) => (
          <button
            key={l.id}
            role="tab"
            aria-selected={l.id === activeId}
            onClick={() => setActiveId(l.id)}
            className={`rounded-sm px-4 py-2 text-sm font-bold transition duration-200 ${
              l.id === activeId
                ? 'bg-ink text-paper-card'
                : 'bg-paper-card text-ink-2 shadow-soft hover:text-ink'
            }`}
          >
            {l.label} <span className="ml-1 tabular-nums opacity-70">{l.lessons.length}</span>
          </button>
        ))}
      </div>

      <ConceptLessons
        key={level.id}
        lessons={level.lessons}
        storageKey={`michi-grammar-read-${level.id}`}
        intro={level.intro}
        noun={level.label === 'Konsepto' ? 'Konsepto' : `Grammar ${level.label}`}
      />
    </div>
  );
}
