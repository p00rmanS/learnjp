import { useState } from 'react';
import { compareAnswers } from '@/utils/kanaInput';

interface KanaInputProps {
  correctAnswer: string;
  cardType: string;
  onAnswer: (isCorrect: boolean, answer: string) => void;
  disabled?: boolean;
}

export default function KanaInput({ correctAnswer, cardType, onAnswer, disabled }: KanaInputProps) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
  const locked = disabled || result !== null;

  function submit() {
    if (!input.trim() || locked) return;
    const isCorrect = compareAnswers(input, correctAnswer);
    setResult(isCorrect ? 'correct' : 'wrong');
    onAnswer(isCorrect, input);
  }

  const placeholder = cardType === 'kana_reading' ? 'Type the sound in romaji, like "a"' : 'Type the romaji, like "a"';

  return (
    <div className="surface space-y-4 p-6">
      <label htmlFor="kana-answer" className="eyebrow">
        Your answer
      </label>
      <input
        id="kana-answer"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        placeholder={placeholder}
        disabled={locked}
        autoComplete="off"
        autoCapitalize="none"
        spellCheck={false}
        autoFocus
        className={`w-full rounded-xl border bg-paper px-5 py-4 text-center text-xl font-medium tracking-wide text-ink outline-none transition placeholder:text-ink-3/70 placeholder:text-base placeholder:font-normal focus:ring-2 focus:ring-ai-500/40 disabled:opacity-70 ${
          result === 'correct'
            ? 'border-matcha-500'
            : result === 'wrong'
              ? 'border-shu-500'
              : 'border-ink-line focus:border-ai-500'
        }`}
      />

      {result === null && (
        <button onClick={submit} disabled={!input.trim()} className="btn-ink w-full">
          Check
        </button>
      )}

      {result === 'wrong' && (
        <p className="text-center text-sm text-ink-2">
          Not quite. The answer is <span className="jp-text text-lg text-ink">{correctAnswer}</span>
        </p>
      )}
    </div>
  );
}
