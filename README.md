# 道 Michi — Japanese from Zero to N1

A self-paced Japanese learning app built for understanding, not streaks. Master grammar, kanji, and vocabulary with spaced repetition (FSRS) and never worry about levels again.

**Status:** MVP scaffold initialized. Phase 0 (setup) ✅ | Phase 1 (kana MVP) → in progress

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- A code editor (VS Code recommended)

### Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The app opens at `http://localhost:5173` and is ready to use offline.

---

## Architecture

### Tech Stack
- **Frontend:** React 18 + TypeScript + Vite (⚡ fast HMR)
- **Styling:** Tailwind CSS + custom Japanese font (Noto Sans JP)
- **Data (local-first):** IndexedDB via Dexie
- **SRS engine:** `ts-fsrs` (FSRS algorithm)
- **Kana input:** `wanakana` (romaji ↔ kana conversion)
- **State:** Zustand (lightweight, type-safe)
- **Backend (future):** Supabase (Postgres + auth + sync)
- **PWA:** Service worker + manifest (installable)

### Directory Structure

```
src/
├── components/        # React components (Home, ReviewSession, etc.)
├── db/               # Dexie setup, schema, initialization
├── hooks/            # Custom hooks (useReviewSession, etc.)
├── stores/           # Zustand stores (userStore, fsrsStore)
├── types/            # TypeScript type definitions
├── utils/            # Utility functions (kana input, comparisons, etc.)
├── index.css         # Global styles + Tailwind
├── App.tsx           # Root component
└── main.tsx          # React entry point

public/
├── index.html        # HTML template
└── manifest.json     # PWA manifest

vite.config.ts        # Vite configuration
tsconfig.json         # TypeScript configuration
tailwind.config.js    # Tailwind configuration
package.json          # Dependencies and scripts
```

### Data Flow

```
User Action
  ↓
React Component
  ↓
Zustand Store (state management)
  ↓
Dexie/IndexedDB (local storage)
  ↓
(Optional) Supabase Sync (backend)
```

### Key Stores

**`userStore`** — manages user profile, daily goals, preferences
- `user` (User | null)
- `initializeUser()` — load or create user
- `updateUserGoal()`, `updateFuriganaMode()`

**`fsrsStore`** — manages SRS review state
- `dueCards` (Card[]) — cards due for review
- `stats` (DueCardsStats) — today's review counts
- `loadDueCards()` — fetch cards due before now
- `recordReview()` — log a review and update card state

### Key Components

**`Home`** — main screen, daily plan, navigation  
**`DailyPlan`** — shows reviews due, time estimate, progress  
**`ReviewSession`** — card display, rating buttons, progress tracking  
**`Loading`** — splash screen while initializing  

### Database Schema

See `src/types/index.ts` for all type definitions. Tables:

- **users** — User profile, settings
- **levels** — Stage0, N5, N4, N3, N2, N1
- **units** — ~12–15 units per level
- **items** — kana, kanji, vocab, grammar (learnable things)
- **lessons** — ordered groups of items with explanations
- **cards** — SRS cards (one item → multiple cards)
- **reviewLogs** — review history, ratings, timings
- **readingPassages**, **listeningClips** — graded content
- **mockExams**, **examAttempts** — JLPT-style tests

---

## Roadmap & Next Steps

### Phase 0: Setup ✅
- [x] React + TypeScript + Vite scaffold
- [x] Tailwind CSS setup
- [x] Dexie/IndexedDB schema
- [x] Zustand stores for user & FSRS state
- [x] Basic UI (Home, DailyPlan, ReviewSession)
- [x] PWA manifest

### Phase 1: Kana MVP (Next)
**Goal:** Complete kana bootcamp with FSRS reviews.

- [ ] Stroke animation component (KanjiVG SVGs)
- [ ] Kana lesson player with audio
- [ ] FSRS integration (`ts-fsrs` algorithm)
- [ ] Typed kana input (romaji → kana)
- [ ] Kana recall flashcards
- [ ] Unit check quiz
- [ ] Data: seed all 71 hiragana + 71 katakana + dakuten/handakuten

### Phase 2: N5 Content & Lesson Engine
**Duration:** 4–6 weeks (content-heavy)

- [ ] Lesson player component (renders markdown + examples)
- [ ] Grammar explanation UI with furigana toggle
- [ ] Unit system with unlock gates (~80% threshold)
- [ ] N5 grammar points (~25 total) + example sentences
- [ ] N5 vocabulary (~300 words) + kanji (~100 chars)
- [ ] Reading passage + comprehension questions
- [ ] Listening clips (TTS or native)
- [ ] Unit check quiz

### Phase 3: Reading & Listening
- [ ] Graded reader library
- [ ] Tap-to-look-up kanji/vocab
- [ ] Listening player with speed control
- [ ] Comprehension question UI

### Phase 4: Accounts & Sync
- [ ] Supabase auth (email)
- [ ] Cloud sync (Dexie ↔ Supabase)
- [ ] Multi-device support

### Phase 5+: N4 → N1, v2 features, AI tutor
- Graded reader library by level
- Mock JLPT exams
- Kanji handwriting practice
- Leech detection & re-learning
- AI tutor for Q&A and free conversation

---

## Critical Before-You-Code Decisions

1. **Audio sourcing:** TTS (fast, cheap) vs. native recordings (higher quality). Choose now.
   - Suggested: Start with Google Cloud TTS (supports Japanese, ~$1–5/day at MVP scale).
   - Plan native recordings later.

2. **Pitch accent:** Teach actively from N5, or just display it?
   - Current assumption: Display only (visualizer in v3).

3. **English vs. Japanese explanations:** When do we switch to Japanese-only?
   - Current assumption: All English at N5–N3, gradual switch at N2–N1.

4. **Content-first workflow:** Before writing SRS/lesson UI, **draft your N5 grammar syllabus** in a spreadsheet:
   - Order of ~25 grammar points
   - Sample explanations
   - Example sentences (3–5 per point)
   - Practice exercises

5. **License compliance:**
   - JMdict (CC BY-SA) → attribute in UI
   - KANJIDIC2 (CC BY-SA) → attribute in UI
   - KanjiVG (CC BY-SA) → attribute in UI
   - Example sentences from Tatoeba → must review for quality & attribute

---

## Development Tips

### Running the dev server
```bash
npm run dev
# Opens http://localhost:5173 with HMR
```

### Building
```bash
npm run build
# Outputs to dist/
```

### Type checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Adding a new component
1. Create in `src/components/MyComponent.tsx`
2. Export from `src/App.tsx` or parent
3. Use TypeScript for type safety

### Adding a new store
1. Create in `src/stores/myStore.ts` using Zustand
2. Import and use with `useMyStore()` hook

### Working with the database
```typescript
import { db } from '@/db';

// Add items
await db.items.bulkAdd([...]);

// Query
const cards = await db.cards.where('userId').equals(userId).toArray();

// Update
await db.cards.update(cardId, { fsrsState: { /* ... */ } });
```

### Importing with path aliases
```typescript
// Instead of:
import { User } from '../../../types';

// Use:
import type { User } from '@/types';
```

---

## Content Creation Strategy

**This app is as good as its content.** Suggested workflow:

1. **Grammar syllabus** (spreadsheet: order, explanations, examples)
2. **Example sentence curation** (from Tatoeba, license-compliant)
3. **Audio generation** (TTS or record native speakers)
4. **Reading passages** (graded, 200–500 words per unit)
5. **Listening scripts** (short dialogues or news snippets)
6. **Import into DB** (scripts to seed data from CSV/JSON)

Content first; iterate on UI later.

---

## Testing

Run card reviews with mock data:
1. Seed items into DB (see `src/db/index.ts` initialization)
2. Manually create cards
3. Start review session → test rating flows
4. Check Dexie DevTools in browser → inspect card state changes

(Full test suite to be added in Phase 2)

---

## Deployment

Planned: Netlify or Vercel for static hosting + Supabase for backend.

**Phase 0 → Phase 1:** test locally and in browser dev tools.
**Phase 4:** deploy to staging.

---

## Open Questions

- [ ] Audio: TTS or native? Budget and timeline?
- [ ] Which 25 N5 grammar points, in what order?
- [ ] Handwriting practice: required or optional?
- [ ] Personal project or publish later?

---

## Resources

- [JLPT Info](https://www.jlpt.jp/e/)
- [JMdict](http://edrdg.org/wiki/index.php/JMDict_project)
- [KANJIDIC2](http://edrdg.org/kanjidic2/index.html)
- [KanjiVG](https://kanjivg.tagaini.net/)
- [Tatoeba (sentence corpus)](https://tatoeba.org/)
- [ts-fsrs (SRS algorithm)](https://github.com/open-spaced-repetition/ts-fsrs)
- [wanakana (kana input)](https://github.com/WaniKani/WanaKana)

---

## License

TBD (will need to clarify whether Michi is public or personal, and compliance with open data sources).

---

**Good luck! 頑張ってください!** 🎌
