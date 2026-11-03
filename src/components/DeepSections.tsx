import type { LessonSection, SectionKind } from '@/types';

const ACCENT: Record<SectionKind, string> = {
  explain: 'border-ai-500',
  tip: 'border-matcha-500',
  remember: 'border-shu-500',
  local: 'border-ink-3',
};

const LABEL: Record<SectionKind, string> = {
  explain: 'Paliwanag',
  tip: 'Tip & trick',
  remember: 'Tandaan natin',
  local: 'Sabi ng mga lokal',
};

interface DeepSectionsProps {
  sections: LessonSection[];
}

export default function DeepSections({ sections }: DeepSectionsProps) {
  return (
    <section id="malalim" className="scroll-mt-28 space-y-8">
      <div className="border-b border-ink pb-3">
        <p className="eyebrow">Malalim na aral</p>
        <h3 className="display mt-2 text-3xl">Paliwanag, tips, at sabi ng mga lokal</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((s) => (
          <article key={s.kind} className={`surface border-l-[3px] p-7 ${ACCENT[s.kind]}`}>
            <p className="eyebrow">{LABEL[s.kind]}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
