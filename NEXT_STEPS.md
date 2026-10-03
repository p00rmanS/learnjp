# Next Steps — What to Do Now

**Congratulations!** The scaffold is complete. Here's your immediate action plan.

---

## 🎯 Right Now (Next 30 minutes)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```
   - You should see the Home screen in your browser at `http://localhost:5173`.

3. **Explore the existing components:**
   - Click "Start Reviews" (it won't show cards yet because there's no data).
   - Click "Browse Lessons" (placeholder screen).
   - Verify the UI loads and is responsive.

4. **Check the database:**
   - Open browser DevTools → Application → IndexedDB → michi.
   - You should see 11 empty tables (users, items, cards, etc.).
   - You should see 6 default levels (Stage 0, N5–N1) pre-populated.

---

## 📋 Decision Phase (Today)

**Lock in these three decisions** (required before Phase 1 coding):

### 1️⃣ Audio Sourcing

**Question:** How will you generate audio for kana, vocabulary, and example sentences?

**Options:**
| Provider | Cost | Quality | Setup Time |
|----------|------|---------|-----------|
| **Google Cloud TTS** | $0.5–2 per 1000 chars | Good (natural-sounding) | 30 min |
| **Azure Speech** | $1–4 per 1000 chars | Good | 30 min |
| **ElevenLabs** | $0.30 per 1K chars | Excellent | 15 min |
| **Open Forvo** | Free | Mixed (crowdsourced) | 2 hours (curate) |
| **Hire voice actors** | $500–2000 | Excellent | 2–4 weeks |
| **Record yourself** | Free | Varies | 10+ hours |

**Recommendation:** Start with **Google Cloud TTS** (cheap, fast, good enough). You can re-record with natives later if learners respond well.

**Action:**
- [ ] Choose one provider above.
- [ ] Create an account (if needed) and get API key.
- [ ] Create a `src/services/audioService.ts` stub that calls the API.
- [ ] Update `DEVELOPMENT.md` with the chosen provider.

### 2️⃣ N5 Grammar Syllabus

**Question:** Which 25 grammar points, in what order, and with what explanations?

You need to decide this *before* you write the lesson player, because lessons depend on the grammar order.

**Recommendation:** Use a proven order (e.g., Genki textbook, Bunpro, or JLPT preparation guides).

**Action:**
- [ ] Create a spreadsheet: `N5_SYLLABUS.xlsx` or `N5_SYLLABUS.md`
- [ ] List 25 grammar points in order (Unit 1–5, ~5 points per unit)
- [ ] For each point: write a 50–100 word explanation, add 3–5 example sentences
- [ ] Example structure:
  ```
  Unit 1: Basic Sentences & です/ます
  ├─ です (polite "to be")
  │  └─ Explanation: Connects two nouns; marks polite register
  │  └─ Examples: 私は学生です。(I am a student.)
  ├─ ます (polite verb ending)
  ├─ は (topic particle)
  ├─ を (object particle)
  └─ に (location/direction particle)
  ```
- [ ] Store in `/content/N5_SYLLABUS.md` for reference during Phase 2.

### 3️⃣ Content Workflow

**Question:** How will you write, review, and import content into the app?

**Workflow options:**

| Option | Process | Pros | Cons |
|--------|---------|------|------|
| **Spreadsheet → JSON → Import script** | Draft in Excel/Google Sheets → export JSON → script seeds DB | Easy to iterate, version-control friendly | Manual JSON conversion |
| **JSON files in git** | Write `/content/N5/unit1.json` by hand | Version-controlled, no external tools | Error-prone |
| **Markdown + parser** | Write grammar in Markdown → script parses to JSON | Readable, portable | Requires parser |
| **Supabase CMS (later)** | Use Supabase Studio to edit content | No build step, live editing | Phase 4+, overkill for MVP |

**Recommendation:** Spreadsheet → JSON → import script (simplest for Phase 1–2).

**Action:**
- [ ] Create `/content/` directory.
- [ ] Create a CSV template: `content/N5_vocabulary.csv` with columns: kanji, kana, meaning, partOfSpeech, exampleSentence.
- [ ] Create a JSON template: `content/N5_grammar.json` with structure matching `GrammarItem` type.
- [ ] Create an import script: `src/db/import.ts` that reads JSON and seeds DB.
- [ ] Document the format in `CONTENT_FORMAT.md`.

---

## 🛠️ Phase 1 Immediate Todo

**Week 1: Kana Data + FSRS**

- [ ] Create `src/db/seeds/kana.ts` with all 142 hiragana + katakana items.
- [ ] Create `src/services/fsrsService.ts` with real FSRS algorithm (using `ts-fsrs` package).
- [ ] Update `fsrsStore.ts` to call `fsrsService.recordReview()` when a review is logged.
- [ ] **Test:** Complete a kana review session, check IndexedDB to confirm cards are rescheduled.

**Week 2: Kana Lessons + Typed Input**

- [ ] Build `src/components/KanaLesson.tsx` (display kana, create cards on "learned").
- [ ] Build `src/components/KanaInput.tsx` (romaji → kana conversion, check answer).
- [ ] Update `ReviewSession.tsx` to show typed input for kana cards.
- [ ] Build `src/components/UnitCheck.tsx` (quiz after each kana set).
- [ ] **Test:** Go through a full kana set (e.g., あいうえお) → create cards → review → pass unit check.

**Week 3: Audio + Stroke Order + Polish**

- [ ] Integrate audio service (TTS or Forvo).
- [ ] Add audio playback buttons to kana lessons.
- [ ] Add placeholder stroke order SVGs (static KanjiVG).
- [ ] Polish UI: improve spacing, add animations, dark mode (optional).
- [ ] Fix any bugs found during testing.
- [ ] **Test:** Complete full Stage 0 (all kana) with audio, stroke order, and unit checks.

---

## 📚 Phase 1 Success Criteria

By end of Phase 1, you should be able to:

1. ✅ Start the app.
2. ✅ See Home screen with "Start Reviews" button.
3. ✅ Click "Start Reviews" → see kana flashcards (one at a time).
4. ✅ Type answer in romaji (e.g., type `a` for あ).
5. ✅ Get feedback ("Correct!" or "Try again").
6. ✅ Click rating buttons (Again/Hard/Good/Easy).
7. ✅ Cards are rescheduled via FSRS (due dates change in IndexedDB).
8. ✅ Complete a kana unit → take unit check quiz.
9. ✅ Pass unit check → unlock next unit.
10. ✅ Entire Stage 0 is playable and feels polished.

---

## 📖 Files to Read First

1. **README.md** — Overview of tech stack and project.
2. **DEVELOPMENT.md** — Detailed Phase 1 guidance.
3. **AUDIT.md** — Risk assessment and decisions you made.
4. **src/types/index.ts** — All TypeScript types (understand the data model).
5. **src/db/index.ts** — Database schema (understand how data is stored).

---

## 🚀 Quick Commands

```bash
# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Type-check your code
npm run type-check

# Build for production
npm run build

# Preview production build
npm run build && npm run preview

# Lint code
npm run lint
```

---

## 💡 Tips While Building Phase 1

1. **Use the browser console.** IndexedDB DevTools helps debug data issues.
2. **Test review logic manually.** Create a few test cards with different FSRS states, then verify they're rescheduled correctly.
3. **Keep it simple.** Phase 1 is about kana + FSRS. Don't add grammar yet.
4. **Document as you go.** Add comments to `fsrsService.ts` and complex hooks.
5. **Commit often.** Small commits make debugging easier.

---

## ❓ If You Get Stuck

1. **Check the type definitions** (`src/types/index.ts`) — everything is typed.
2. **Search the codebase** for similar patterns (e.g., if you're building a new component, look at `ReviewSession.tsx`).
3. **Test in Dexie DevTools** — inspect DB state directly.
4. **Read the FSRS package docs** — `ts-fsrs` has good examples on GitHub.

---

## 🎯 Success Looks Like

By end of this week, you should see:
- Home screen loads ✅
- Database is initialized (6 levels visible in DevTools) ✅
- Kana items seeded (142 items visible in IndexedDB) ✅
- First review session works (cards display, ratings work) ✅

---

**Next:** Read `DEVELOPMENT.md` for the detailed Phase 1 implementation guide.

**Questions?** Reference the audit and architecture docs. Good luck! 🎌
