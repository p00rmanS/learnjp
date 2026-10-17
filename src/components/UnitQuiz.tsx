import { useMemo, useState } from 'react';
import { speak } from '@/utils/speech';
import type { GrammarItem, Item, VocabItem } from '@/types';

interface Question {
  id: string;
  prompt: string;
  speakText: string;
  hint?: string;
  answer: string;
  options: string[];
}

interface UnitQuizProps {
  items: Item[];
  onFinish: (correct: number, total: number) => void;
  onClose: () => void;
}

const QUESTION_COUNT = 5;

function shuffle<T>(list: T[]): T[] {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function uniqueDistractors(candidates: string[], answer: string): string[] {
  const unique = [...new Set(candidates.filter((c) => c !== answer))];
  return shuffle(unique).slice(0, 3);
}

function buildQuestions(items: Item[]): Question[] {
  const vocab = items.filter((item): item is VocabItem => item.type === 'vocab');
  const grammar = items.filter((item): item is GrammarItem => item.type === 'grammar');

  if (vocab.length >= 4) {
    const picks = shuffle(vocab).slice(0, QUESTION_COUNT);
    return picks.map((item) => {
      const distractors = uniqueDistractors(
        vocab.filter((v) => v.id !== item.id).map((v) => v.meanings[0]),
        item.meanings[0],
      );
      return {
        id: item.id,
        prompt: item.kana,
        speakText: item.kana,
        hint: item.kanji,
        answer: item.meanings[0],
        options: shuffle([item.meanings[0], ...distractors]),
      };
    });
  }

  const sentences = grammar.flatMap((g) => g.exampleSentences.map((ex) => ({ ex, id: g.id })));
  if (sentences.length >= 4) {
    const picks = shuffle(sentences).slice(0, QUESTION_COUNT);
    return picks.map(({ ex, id }) => {
      const distractors = uniqueDistractors(
        sentences.filter((s) => s.ex.japanese !== ex.japanese).map((s) => s.ex.english),
        ex.english,
      );
      return {
        id: `${id}-${ex.japanese}`,
        prompt: ex.japanese,
        speakText: ex.japanese,
        hint: ex.furigana,
        answer: ex.english,
        options: shuffle([ex.english, ...distractors]),
      };
    });
  }

  return [];
}

export default function UnitQuiz({ items, onFinish, onClose }: UnitQuizProps) {
  const questions = useMemo(() => buildQuestions(items), [items]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="surface p-8 text-center">
        <p className="text-ink-2">This unit needs a few more words before we can make a practice quiz.</p>
        <button onClick={onClose} className="btn-quiet mt-6">
          Close
        </button>
      </div>
    );
  }

  const question = questions[index];
  const answered = picked !== null;
  const isLast = index === questions.length - 1;

  function choose(option: string) {
    if (answered) return;
    setPicked(option);
    if (option === question.answer) setCorrect((c) => c + 1);
  }

  function next() {
    if (isLast) {
      const total = questions.length;
      const finalCorrect = correct;
      setFinished(true);
      onFinish(finalCorrect, total);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  if (finished) {
    const ratio = correct / questions.length;
    return (
      <div className="animate-rise surface mx-auto max-w-xl p-10 text-center sm:p-14">
        <span className="hanko mx-auto h-16 w-16 text-2xl" aria-hidden="true">
          {ratio >= 0.6 ? '良' : '復'}
        </span>
        <h3 className="display mt-8 text-3xl">
          {ratio === 1 ? 'Perfect!' : ratio >= 0.6 ? 'Well done!' : 'Good try. Let’s review.'}
        </h3>
        <p className="mt-4 text-ink-2">
          You got {correct} out of {questions.length} right.
          {ratio >= 0.6 ? ' This unit is now complete on your path.' : ' Practice again to complete this unit.'}
        </p>
        <button onClick={onClose} className="btn-ink mt-10">
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="animate-rise mx-auto max-w-2xl space-y-6">
      <div className="flex items-center gap-2" aria-label={`Question ${index + 1} of ${questions.length}`}>
        {questions.map((q, i) => (
          <span
            key={q.id}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < index ? 'bg-ai-600' : i === index ? 'bg-ai-400' : 'bg-paper-deep'
            }`}
          />
        ))}
      </div>

      <section className="surface p-8 text-center sm:p-12">
        <p className="eyebrow">Ano ang ibig sabihin nito?</p>
        <p className="jp-text mt-6 text-4xl leading-snug text-ink sm:text-5xl">{question.prompt}</p>
        {question.hint && <p className="jp-text mt-2 text-base text-ink-3">{question.hint}</p>}
        <button onClick={() => speak(question.speakText)} className="btn-quiet mt-6 py-2 text-sm">
          ▶ Listen
        </button>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option) => {
          const isRight = option === question.answer;
          const isPicked = option === picked;
          const tone = !answered
            ? 'border-ink-line bg-paper-card hover:border-ai-500 hover:-translate-y-0.5'
            : isRight
              ? 'border-matcha-500 bg-matcha-100 text-ink'
              : isPicked
                ? 'border-shu-500 bg-shu-500/10 text-ink'
                : 'border-ink-line bg-paper-card text-ink-3';
          return (
            <button
              key={option}
              onClick={() => choose(option)}
              disabled={answered}
              className={`rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition duration-200 ${tone}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="flex items-center justify-between gap-4">
          <p className={`text-sm font-semibold ${picked === question.answer ? 'text-matcha-500' : 'text-shu-600'}`}>
            {picked === question.answer ? 'Tama!' : `Hindi tama. Ang ibig sabihin nito ay “${question.answer}”.`}
          </p>
          <button onClick={next} className="btn-ink">
            {isLast ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
}
