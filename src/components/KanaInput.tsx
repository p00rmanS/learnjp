import { useState, useRef } from 'react';
import { compareAnswers } from '@/utils/kanaInput';

interface KanaInputProps {
  correctAnswer: string;
  cardType: string;
  onAnswer: (isCorrect: boolean, answer: string) => void;
  disabled?: boolean;
}

export default function KanaInput({ correctAnswer, cardType, onAnswer, disabled }: KanaInputProps) {
  const [input, setInput] = useState('');
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!input.trim()) return;

    const isCorrect = compareAnswers(input, correctAnswer);
    setFeedbackType(isCorrect ? 'correct' : 'incorrect');

    if (!isCorrect) {
      setShowAnswer(true);
    }

    onAnswer(isCorrect, input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !feedbackType) {
      handleSubmit();
    }
  };

  const placeholder =
    cardType === 'kana_reading'
      ? 'Type romaji (e.g., "a" for あ)'
      : 'Type hiragana (e.g., "a" becomes あ)';

  return (
    <div className="card p-6 space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Your answer:</label>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || feedbackType !== null}
          className={`w-full border-2 rounded-lg px-4 py-2 text-lg font-mono transition ${
            feedbackType === 'correct'
              ? 'border-green-500 bg-green-50'
              : feedbackType === 'incorrect'
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-200'
          } ${disabled || feedbackType ? 'opacity-60 cursor-not-allowed' : ''}`}
          autoFocus
        />
      </div>

      {/* Feedback */}
      {feedbackType === 'correct' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <span className="text-green-700 font-medium">Correct!</span>
        </div>
      )}

      {feedbackType === 'incorrect' && (
        <div className="space-y-2">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
            <span className="text-2xl">❌</span>
            <span className="text-red-700 font-medium">Not quite. Try again!</span>
          </div>

          {showAnswer && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-gray-600 mb-1">The correct answer is:</p>
              <p className="text-2xl jp-text font-bold text-brand-600">{correctAnswer}</p>
            </div>
          )}
        </div>
      )}

      {/* Submit button */}
      {!feedbackType && (
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || disabled}
          className="w-full btn-primary py-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check Answer
        </button>
      )}

      {feedbackType && (
        <p className="text-sm text-gray-500 text-center">
          Select a rating (Good/Hard/etc.) to continue.
        </p>
      )}
    </div>
  );
}
