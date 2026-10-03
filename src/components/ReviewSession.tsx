import { useState } from 'react';
import { useReviewSession } from '@/hooks/useReviewSession';
import KanaInput from './KanaInput';

interface ReviewSessionProps {
  onComplete: () => void;
}

export default function ReviewSession({ onComplete }: ReviewSessionProps) {
  const { currentItem, currentCard, progress, isSessionComplete, handleReview, stats } = useReviewSession();
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  if (isSessionComplete) {
    return (
      <div className="card p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold mb-2">Session Complete!</h2>
        <p className="text-gray-600 mb-6">
          You reviewed {progress.total} cards. Great work!
        </p>
        <button onClick={onComplete} className="btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  if (!currentCard || !currentItem) {
    return (
      <div className="card p-6 text-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="card p-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold">
            Card {progress.current} of {progress.total}
          </span>
          <span className="text-sm text-gray-500">{Math.round(progress.percent)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="bg-brand-600 h-2 transition-all" style={{ width: `${progress.percent}%` }}></div>
        </div>
      </div>

      {/* Card display */}
      <div className="space-y-4">
        <div className="card p-8 min-h-48 flex flex-col items-center justify-center space-y-6">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {currentCard.cardType}
          </div>

          {/* Display based on item type */}
          {currentItem.type === 'kana' && (
            <div>
              {/* For kana input cards, show the kana for recognition */}
              {currentCard.cardType === 'kana_reading' && (
                <div className="text-8xl jp-text font-bold text-center">{(currentItem as any).character}</div>
              )}
              {/* For recall cards, show the romaji */}
              {currentCard.cardType === 'vocab_recall_typed' && (
                <div className="text-4xl font-bold text-center text-gray-700">
                  {(currentItem as any).romaji}
                </div>
              )}
            </div>
          )}

          {currentItem.type === 'kanji' && (
            <div>
              <div className="text-6xl jp-text font-bold mb-4">{(currentItem as any).character}</div>
              <p className="text-gray-600 text-center">{(currentItem as any).meanings.join(', ')}</p>
            </div>
          )}

          {currentItem.type === 'vocab' && (
            <div>
              <div className="text-4xl jp-text font-bold mb-2">{(currentItem as any).kana}</div>
              {(currentItem as any).kanji && <div className="text-2xl jp-text mb-4">{(currentItem as any).kanji}</div>}
              <p className="text-gray-600 text-center">{(currentItem as any).meanings[0]}</p>
            </div>
          )}

          {currentItem.type === 'grammar' && (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{(currentItem as any).title}</h3>
              <p className="text-gray-600">{(currentItem as any).explanation}</p>
            </div>
          )}
        </div>

        {/* Kana input component */}
        {currentItem.type === 'kana' && (
          <KanaInput
            correctAnswer={
              currentCard.cardType === 'kana_reading'
                ? (currentItem as any).romaji
                : (currentItem as any).hiragana
            }
            cardType={currentCard.cardType}
            onAnswer={(isCorrect) => {
              setAnswerSubmitted(true);
              if (isCorrect) {
                // Auto-rate as "Good" after a short delay
                setTimeout(() => handleReview(3), 1500);
              }
            }}
            disabled={answerSubmitted}
          />
        )}
      </div>

      {/* Rating buttons (for non-kana items or manual correction) */}
      {currentItem.type !== 'kana' && (
        <div className="card p-4">
          <p className="text-center text-sm text-gray-600 mb-4">How was it?</p>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => {
                handleReview(1);
                setAnswerSubmitted(false);
              }}
              className="p-3 bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded-lg transition"
              title="I forgot completely"
            >
              Again
            </button>
            <button
              onClick={() => {
                handleReview(2);
                setAnswerSubmitted(false);
              }}
              className="p-3 bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold rounded-lg transition"
              title="Took longer than expected"
            >
              Hard
            </button>
            <button
              onClick={() => {
                handleReview(3);
                setAnswerSubmitted(false);
              }}
              className="p-3 bg-green-100 hover:bg-green-200 text-green-700 font-semibold rounded-lg transition"
              title="Got it right"
            >
              Good
            </button>
            <button
              onClick={() => {
                handleReview(4);
                setAnswerSubmitted(false);
              }}
              className="p-3 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-lg transition"
              title="Knew it instantly"
            >
              Easy
            </button>
          </div>
        </div>
      )}

      {/* For kana with incorrect answer, show manual rating buttons */}
      {currentItem.type === 'kana' && answerSubmitted && (
        <div className="card p-4">
          <p className="text-center text-sm text-gray-600 mb-4">Mark this review:</p>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => {
                handleReview(1);
                setAnswerSubmitted(false);
              }}
              className="p-2 text-sm bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded-lg transition"
            >
              Again
            </button>
            <button
              onClick={() => {
                handleReview(2);
                setAnswerSubmitted(false);
              }}
              className="p-2 text-sm bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold rounded-lg transition"
            >
              Hard
            </button>
            <button
              onClick={() => {
                handleReview(3);
                setAnswerSubmitted(false);
              }}
              className="p-2 text-sm bg-green-100 hover:bg-green-200 text-green-700 font-semibold rounded-lg transition"
            >
              Good
            </button>
            <button
              onClick={() => {
                handleReview(4);
                setAnswerSubmitted(false);
              }}
              className="p-2 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-lg transition"
            >
              Easy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
