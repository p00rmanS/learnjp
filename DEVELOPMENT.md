# Development Roadmap — Phase 1: Kana MVP

This is your **immediate next steps** guide. Phase 0 (scaffold) is done; Phase 1 starts here.

---

## Phase 1 Goals

**Ship a complete kana bootcamp** with spaced repetition reviews.

### MVP Definition
- ✅ User can see Home screen with daily plan
- ✅ User can start a review session
- ✅ Review UI shows kana cards
- ✅ User can rate cards (Again/Hard/Good/Easy)
- ⬜ **NEXT:** Kana lessons (hiragana → katakana)
- ⬜ **NEXT:** FSRS algorithm integration
- ⬜ **NEXT:** Typed input with romaji → kana conversion
- ⬜ **NEXT:** Unit check quiz after each kana set
- ⬜ **NEXT:** Stroke animation (KanjiVG)

### Timeline
- **Week 1:** FSRS integration + typed input
- **Week 2:** Kana lesson player + audio
- **Week 3:** Stroke animation + polish

---

## Data: Kana Seed

Before coding, you need kana data in the database. Create a seed file:

**File:** `src/db/seeds/kana.ts`

```typescript
import type { KanaItem, Unit } from '@/types';

// Stage 0 unit structure (example)
export const stage0Units = [
  { id: 'stage0-u1', levelId: 'stage0', order: 1, title: 'あ行・か行', theme: 'Hiragana Set 1' },
  { id: 'stage0-u2', levelId: 'stage0', order: 2, title: 'さ行・た行', theme: 'Hiragana Set 2' },
  // ... 6 units total for hiragana + 6 for katakana
];

export const kanaItems: KanaItem[] = [
  // HIRAGANA — あ row
  {
    id: 'kana-a',
    type: 'kana',
    unitId: 'stage0-u1',
    character: 'あ',
    hiragana: 'あ',
    katakana: 'ア',
    romaji: 'a',
    pronunciation: 'ah',
    strokeCount: 3,
    mnemonic: 'looks like an "a"',
    createdAt: new Date(),
  },
  // ... more kana
];
```

**To generate this**, use Tatoeba or a reference:
- All 46 base hiragana
- All 46 base katakana
- Dakuten (が, ぎ, ぐ, げ, ご, etc.) — ~20 more
- Handakuten (ぱ, ぴ, ぷ, ぺ, ぽ)
- Small ゃゅょ
- Small っ
- Long vowel marks

**Total: ~71 hiragana + 71 katakana = 142 items**

---

## Integrating FSRS

**File:** `src/services/fsrsService.ts` (new)

```typescript
import { FSRS, FSRSAlgorithm, Rating } from 'ts-fsrs';

const fsrs = new FSRS();

export function scheduleCard(
  cardState: FSRSState,
  rating: 1 | 2 | 3 | 4
): FSRSState {
  // Convert rating (1–4) to FSRS Rating
  const fsrsRating = {
    1: Rating.Again,
    2: Rating.Hard,
    3: Rating.Good,
    4: Rating.Easy,
  }[rating];

  const updated = fsrs.next(cardState, new Date(), fsrsRating);
  return {
    stability: updated.stability,
    difficulty: updated.difficulty,
    due: updated.due,
    reps: updated.reps,
    lapses: updated.lapses,
    state: updated.state.toLowerCase() as 'new' | 'learning' | 'review' | 'relearning',
  };
}

export function initCard(): FSRSState {
  const card = fsrs.createEmptyCard();
  return {
    stability: card.stability,
    difficulty: card.difficulty,
    due: card.due,
    reps: card.reps,
    lapses: card.lapses,
    state: 'new',
  };
}
```

Then update `fsrsStore.ts` to call `scheduleCard()` on review.

---

## Kana Lesson Player

**File:** `src/components/KanaLesson.tsx` (new)

Display a kana lesson with:
1. Kana character (large)
2. Romaji + pronunciation
3. Stroke order animation (placeholder for now)
4. Audio button
5. Mnemonic
6. "Mark as learned" button → create 3–4 SRS cards per kana

```typescript
export default function KanaLesson({ kanaItem, onLearned }: Props) {
  const createCards = async () => {
    // For each kana, create:
    // 1. kana → romaji (recognition)
    // 2. romaji → kana (recall, typed)
    // 3. katakana ↔ hiragana conversion
  };

  return (
    <div>
      <div className="text-8xl jp-text">{kanaItem.character}</div>
      <p>{kanaItem.mnemonic}</p>
      <button onClick={createCards} className="btn-primary">
        Got it! Create review cards
      </button>
    </div>
  );
}
```

---

## Typed Kana Input

**File:** `src/components/KanaInput.tsx` (new)

```typescript
import { useState } from 'react';
import { compareAnswers } from '@/utils/kanaInput';
import type { VocabItem } from '@/types';

interface KanaInputProps {
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

export default function KanaInput({ correctAnswer, onAnswer }: KanaInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const isCorrect = compareAnswers(input, correctAnswer);
    onAnswer(isCorrect);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type romaji (e.g., 'a' → あ)"
        className="border rounded px-4 py-2 w-full"
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit} className="btn-primary mt-2">
        Check
      </button>
    </div>
  );
}
```

---

## Stroke Animation (Phase 1b)

For now, display a static SVG. Later, animate strokes:

```typescript
export function renderStrokeOrder(kanjiVGPath: string) {
  // Fetch SVG from KanjiVG (e.g., https://kanjivg.tagaini.net/kanji/4e00.svg)
  // Parse <path d="..."> elements
  // Animate with CSS stroke-dasharray
}
```

Use a library like `react-svg` or raw SVG.

---

## Unit Check Quiz

After completing a kana set (e.g., あ行), show a quiz:

**File:** `src/components/UnitCheck.tsx` (new)

- 5–10 questions mixing recognition (show kana, pick romaji) and recall (show romaji, type kana)
- Must score ≥80% to pass
- Weak items get pushed back into SRS queue

---

## Updating ReviewSession

Modify `src/components/ReviewSession.tsx` to handle **kana-specific typing**:

```typescript
{currentCard.cardType === 'kana_reading' && (
  <KanaInput
    correctAnswer={(currentItem as KanaItem).romaji}
    onAnswer={(correct) => handleReview(correct ? 3 : 1)}
  />
)}
```

---

## Priority Checklist for Phase 1

- [ ] **Seed Stage 0 units + kana items** → `src/db/seeds/kana.ts`
- [ ] **Implement `fsrsService.ts`** with FSRS algorithm
- [ ] **Update `fsrsStore.recordReview()`** to use FSRS scheduling
- [ ] **Build `KanaLesson` component** (display kana, mark as learned)
- [ ] **Build `KanaInput` component** (typed romaji input)
- [ ] **Update `ReviewSession`** to show kana cards with typed input
- [ ] **Seed Stage 0 into database** on app init
- [ ] **Test:** Complete hiragana set, verify FSRS spacing works
- [ ] **Polish:** Smooth transitions, audio playback, instructions
- [ ] **Stroke animation placeholder** (static SVG for now)

---

## Known Issues to Address

1. **FSRS integration:** Currently stubbed in `fsrsStore`. Real FSRS will reschedule cards.
2. **Audio:** Using placeholder URLs. Swap with real TTS/native later.
3. **Kana data:** Hard-coded above; use a JSON seed file instead for maintenance.
4. **Service worker:** PWA manifest is set up but SW script not yet implemented.

---

## Commands for Phase 1

```bash
# Dev
npm run dev

# Type-check regularly
npm run type-check

# Build for testing
npm run build && npm run preview
```

---

## Questions Before You Start

1. **Audio generation:** Will you use Google Cloud TTS, Azure, ElevenLabs, or record manually?
   - **Recommend:** Google Cloud TTS (cheapest, fastest for MVP)
   - Setup: API key + call from browser or backend

2. **Kana mnemonic style:** Should mnemonics be story-based (longer) or shape-based (short)?
   - **Recommend:** Short shape-based (e.g., "looks like an 'a'"), can expand later

3. **Katakana approach:** Learn after all hiragana, or interleave?
   - **Current plan:** All hiragana first (6 units), then katakana (6 units)

---

Good luck, and enjoy building! Let me know when you're ready to move to Phase 2 (N5 content). 🎌
