import { useEffect, useState } from 'react';
import { db } from '@/db';
import KanaLesson from './KanaLesson';
import type { Unit, KanaItem } from '@/types';

interface LessonBrowserProps {
  onBack: () => void;
  onLessonStart: (unitId: string) => void;
}

export default function LessonBrowser({ onBack, onLessonStart }: LessonBrowserProps) {
  const [units, setUnits] = useState<Unit[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [unitKana, setUnitKana] = useState<KanaItem[]>([]);
  const [currentKanaIndex, setCurrentKanaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUnits();
  }, []);

  async function loadUnits() {
    try {
      const stage0Units = await db.units.where('levelId').equals('stage0').toArray();
      setUnits(stage0Units.sort((a, b) => a.order - b.order));
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to load units:', error);
      setIsLoading(false);
    }
  }

  async function selectUnit(unit: Unit) {
    setSelectedUnit(unit);
    try {
      const kana = await db.items
        .where('unitId')
        .equals(unit.id)
        .filter((item) => item.type === 'kana')
        .toArray();
      setUnitKana(kana as KanaItem[]);
      setCurrentKanaIndex(0);
      onLessonStart(unit.id);
    } catch (error) {
      console.error('Failed to load unit kana:', error);
    }
  }

  if (isLoading) {
    return (
      <div className="card p-6 text-center">
        <p className="text-gray-600">Loading lessons...</p>
      </div>
    );
  }

  // Lesson view (showing kana from selected unit)
  if (selectedUnit && unitKana.length > 0) {
    const currentKana = unitKana[currentKanaIndex] as KanaItem;
    const isLastKana = currentKanaIndex === unitKana.length - 1;

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <button onClick={() => setSelectedUnit(null)} className="text-brand-600 hover:underline">
            ← Back to Units
          </button>
          <div className="text-sm text-gray-600">
            {currentKanaIndex + 1} / {unitKana.length}
          </div>
        </div>

        <KanaLesson
          kana={currentKana}
          onLearned={() => {
            if (isLastKana) {
              // Unit complete
              setSelectedUnit(null);
              setCurrentKanaIndex(0);
            } else {
              setCurrentKanaIndex(currentKanaIndex + 1);
            }
          }}
        />

        <div className="flex gap-2">
          {currentKanaIndex > 0 && (
            <button
              onClick={() => setCurrentKanaIndex(currentKanaIndex - 1)}
              className="btn-secondary flex-1"
            >
              ← Previous
            </button>
          )}
          {!isLastKana && (
            <button
              onClick={() => setCurrentKanaIndex(currentKanaIndex + 1)}
              className="btn-secondary flex-1"
            >
              Skip →
            </button>
          )}
          {isLastKana && (
            <button
              onClick={() => {
                setSelectedUnit(null);
                setCurrentKanaIndex(0);
              }}
              className="btn-primary flex-1"
            >
              ✅ Unit Complete
            </button>
          )}
        </div>
      </div>
    );
  }

  // Unit selection view
  return (
    <div className="space-y-4">
      <button onClick={onBack} className="mb-4 text-brand-600 hover:underline">
        ← Back to Home
      </button>

      <h2 className="text-2xl font-bold mb-4">Stage 0: Kana Bootcamp</h2>
      <p className="text-gray-600 mb-6">Master hiragana and katakana with spaced repetition.</p>

      <div className="grid gap-3">
        {units.map((unit) => (
          <button
            key={unit.id}
            onClick={() => selectUnit(unit)}
            className="card p-4 hover:shadow-md hover:border-brand-300 transition text-left border border-gray-200"
          >
            <h3 className="font-bold text-lg">{unit.title}</h3>
            <p className="text-sm text-gray-600">{unit.theme}</p>
          </button>
        ))}
      </div>

      {units.length === 0 && (
        <div className="card p-6 text-center text-gray-600">No lessons available yet. Try reloading.</div>
      )}
    </div>
  );
}
