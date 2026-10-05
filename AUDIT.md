# Michi Project Audit

**Date:** Oct 2, 2026  
**Scope:** Project design, feasibility, stack, roadmap, risk assessment

---

## Executive Summary

**Verdict:** ✅ **Ambitious but well-designed and achievable.** The project has a clear vision, realistic MVP scope, and good technical decisions. Success depends heavily on **content creation** (grammar, examples, audio), not code.

**Key risks:** content pipeline underestimated, audio sourcing unclear, FSRS implementation details not finalized.

**Recommendation:** Lock in content strategy (audio provider, grammar syllabus) before Phase 2 coding.

---

## 1. Project Vision & Differentiation

### ✅ Strengths
- **Clear positioning:** "Duolingo pain points → Michi's answers" table is excellent.
- **Honest design principles:** Spaced repetition-first, input-heavy, no manipulation.
- **Realistic scope:** Targets specific JLPT levels, not vague "beginner to fluent."

### ⚠️ Cautions
- **Competitor awareness:** Duolingo is improving (grammar explanations coming), Wanikani is trusted for kanji. Michi must deliver on promise.
- **"Understand then practice"** sounds good but requires *really good* explanations. This is harder than it sounds.

---

## 2. Technical Stack Assessment

### React + TypeScript + Vite
✅ **Good choice.** Fast dev experience, type safety, and Vite's hot-reload is excellent for iterating on UI.

### Tailwind CSS
✅ **Good choice.** Rapid UI development, responsive by default, easy to customize for Japanese fonts.

### Dexie (IndexedDB)
✅ **Good choice.** Local-first is essential for offline, Dexie is well-maintained and type-safe.

### Zustand (state management)
✅ **Good choice.** Lightweight, easier than Redux for a single-user app, type-safe.

### ts-fsrs (FSRS algorithm)
✅ **Good choice, but incomplete in current code.** The algorithm is modern (FSRS, not SM-2 from Anki). Need to integrate properly in Phase 1.

### wanakana (kana input)
✅ **Good choice.** Battle-tested, handles all edge cases (long vowels, small っ, etc.).

### Supabase (future backend)
✅ **Good choice.** Postgres is solid for storing users, synced cards, and review logs. Auth is simple. Fits the stack well.

### PWA (offline-first)
✅ **Good choice.** Essential for a learning app; users may study without internet. Service worker setup started but not finalized.

---

## 3. Scope & Roadmap Feasibility

### Phase 0 (Setup) — 1 week
✅ **Complete.** Scaffold is done.

### Phase 1 (Kana MVP) — 2–3 weeks
✅ **Realistic.** Kana is well-defined (142 items), FSRS integration is straightforward, UI is simple. Main risk: audio sourcing (TTS setup).

### Phase 2 (N5 content + lesson engine) — 4–6 weeks
⚠️ **CONTENT-HEAVY. This is not a coding problem; it's a *writing* problem.**

You need:
- ~25 grammar point explanations (500–1000 words each = 12,500–25,000 words of original writing)
- ~1,000+ example sentences with furigana and English translations
- ~300 vocabulary items with meanings, examples, mnemonics
- ~100 kanji with meanings, readings, radicals, mnemonics
- 2–3 graded reading passages (200–500 words each)
- 2–3 listening clips (transcripts, audio)

**Estimate:** 100–150 hours of *content creation*, not code.

**Risk:** Underestimating this will cause Phase 2 to balloon to 8–12 weeks.

### Phase 3 (Reading & Listening) — 3–4 weeks
✅ **Realistic.** UI is straightforward; depends on Phase 2 content.

### Phase 4 (Accounts & Sync) — 2 weeks
⚠️ **Tight but doable.** Supabase makes auth trivial. Main risk: sync conflict resolution (last-write-wins is simple but loses data in edge cases). Plan better strategy.

### Phase 5+ (N4–N1, v2 features, AI)
✅ **Scoped correctly.** These are future phases; don't over-commit.

---

## 4. Content Strategy Assessment

### JMdict, KANJIDIC2, KanjiVG (data sources)
✅ **Good sources, licensed properly.** You have legal right to use them if you attribute.

⚠️ **But:** You can't just dump dictionary entries. N5 vocab needs:
- Frequency-ordered (N5 words first)
- Curated examples from Tatoeba (not all 50 examples)
- Clear, simple English meanings
- Mnemonics where helpful

### Tatoeba (example sentences)
✅ **Good source, CC BY licensed.** But ~1 million sentences are too many. You must *curate* for:
- Grammar point relevance
- Clarity (short, simple)
- Freshness (real examples, not archaic)

**Risk:** Relying on auto-imported data → learners see awkward, outdated, or irrelevant examples.

### Audio
⚠️ **DECISION NEEDED.** Section 5 lists options but doesn't commit.

**Options:**
1. **TTS (Google Cloud, Azure, ElevenLabs)** — $0.5–2 per 1000 chars.
   - MVP scale: ~50,000 words (examples + lessons) = ~250,000 chars = $125–500.
   - Pros: Instant, consistent, scalable.
   - Cons: Sounds synthetic (acceptable for MVP, but noticeable).

2. **Hire voice actors** — $500–2000+ for a full N5 course.
   - Pros: Native quality, better learner engagement.
   - Cons: Time, cost, licensing complexity.

3. **Open recordings** (e.g., Forvo, NHK) — free but licensing is scattered.
   - Pros: Free.
   - Cons: Quality varies, licensing unclear, limited coverage.

**Recommendation for MVP:** Start with Google Cloud TTS (cheapest, fastest). If learners respond well, re-record with natives for N2–N1.

---

## 5. Risk Assessment

### 🔴 High Risk

**Content creation underestimated**
- Impact: Phase 2 delays, content quality suffers.
- Mitigation: Draft N5 grammar syllabus *now* (before Phase 1 finishes). Allocate 60% of time to writing, 40% to code.

**FSRS integration incomplete**
- Impact: Reviews don't space correctly; app feels broken.
- Mitigation: Finalize FSRS service in Phase 1. Test with hand-written review data.

**Audio sourcing not finalized**
- Impact: Can't generate vocab audio; delays Phase 2.
- Mitigation: Choose TTS provider this week. Integrate API by end of Phase 1.

### 🟡 Medium Risk

**Sync conflict resolution oversimplified**
- Impact: Multi-device users see conflicting review history.
- Mitigation: Use operational transformation (OT) or CRDTs instead of last-write-wins. Defer to Phase 4.

**Service worker not implemented**
- Impact: Offline doesn't work; PWA fails.
- Mitigation: Add SW in Phase 1 (15 min of work).

**Kanji stroke order visualization complex**
- Impact: Nice-to-have feature (v2) becomes blocker.
- Mitigation: Keep stroke SVGs static for MVP. Animate in Phase 1b or v2.

### 🟢 Low Risk

**Tech stack misalignment**
- React + TypeScript + Zustand + Dexie is a proven combo.

**Licensing issues**
- JMdict, KANJIDIC2, KanjiVG are all CC BY-SA. Just attribute.

**JLPT levels changing**
- JLPT structure stable since 2010. No risk here.

---

## 6. Critical Before-You-Code Checklist

**Must complete before Phase 2 coding:**

- [ ] **Audio decision:** TTS (which provider?) or native? Budget?
- [ ] **N5 grammar syllabus:** Ordered list of ~25 points with sample explanations.
- [ ] **Content workflow:** Who writes? Spreadsheet-first? How are examples curated?
- [ ] **Pitch accent approach:** Display only, or teach actively?
- [ ] **English ↔ Japanese explanations:** When to switch?
- [ ] **Handwriting practice:** Required for N5–N1, or optional?
- [ ] **Public vs. personal:** Will you publish Michi? Affects licensing choices.
- [ ] **FSRS tuning:** Defaults work, but may need tweaking for Japanese content.

**If you skip these, Phase 2 will be chaotic.**

---

## 7. Comparison to Alternatives

### Duolingo
- **Pros:** 100M users, great marketing, streaks feel good.
- **Cons:** Shallow grammar, word tiles are gamified, stops at low-intermediate.
- **Michi advantage:** Real understanding, JLPT-aligned, no manipulation.
- **Michi risk:** No network effect (solo learner), harder to market.

### Wanikani
- **Pros:** Best-in-class kanji SRS, loyal users, Crabigator 🦀.
- **Cons:** Only kanji/radicals, grammar not covered, expensive ($9/mo).
- **Michi advantage:** All-in-one (grammar + vocab + kanji), cheaper.
- **Michi risk:** Can't compete on kanji alone; must be better overall.

### Genki textbook + Anki
- **Pros:** High-quality grammar, self-paced, free/cheap.
- **Cons:** Manual SRS setup, no listening, isolated exercises.
- **Michi advantage:** Integrated SRS + listening + reading, structured path.
- **Michi risk:** Less personal than a real textbook.

---

## 8. Success Criteria (Revised)

By end of Phase 1:
- ✅ Kana bootcamp is complete and playable.
- ✅ FSRS is working (cards are rescheduled correctly).
- ✅ Typed input feels smooth.
- ✅ App works offline.

By end of Phase 2:
- ✅ N5 is content-complete (grammar, vocab, kanji, reading, listening).
- ✅ Lesson player renders clearly.
- ✅ Mock N5 exam scores users accurately.
- ✅ Users can complete N5 in 250–450 hours of study.

By Phase 4 (accounts + sync):
- ✅ Users can sync across devices.
- ✅ Multi-device reviews don't conflict.

By Phase 5 (N4–N1):
- ✅ Users can study N4, N3, N2, N1.
- ✅ Mock exams correlate with real JLPT scores.

By Phase 7 (AI tutor + native content):
- ✅ LLM tutor gives useful feedback on user questions.
- ✅ Learners can import native content (articles, subtitles).

---

## 9. Budget & Resource Estimate

### Development (coding)
- **Solo developer, part-time:** 4–6 months to Phase 4.
- **Solo developer, full-time:** 2–3 months to Phase 4.
- **With a co-writer (grammar + examples):** Same timeline, but content quality higher.

### Infrastructure
- **Dev:** Free (Vite, Dexie, local testing).
- **TTS (Google Cloud):** $100–300 for MVP + N5.
- **Hosting (Netlify/Vercel):** Free tier sufficient for 1000 users.
- **Supabase (backend):** Free tier for <500k rows. ~$25/mo for 1000 active users.

### Total startup cost: ~$200–500 (mostly TTS).

---

## 10. Open Questions (Not Answered by Project Doc)

1. **Why not just use WaniKani + Bunpro?**
   - Michi advantage: all-in-one, spaced rep + grammar.
   - Cost: Wanikani ($9/mo) + Bunpro ($6–12/mo) = $15–21/mo.
   - Michi could undercut by bundling, or be free.

2. **How will you monetize?** (or: is this a hobby?)
   - If hobby: keep it free, just build for yourself.
   - If product: premium (ad-free, offline) or freemium (free → N2, pay for N1)?

3. **How to handle cheating in reviews?** (e.g., user clicks "Easy" without thinking)
   - FSRS is robust to some noise, but can't fix systematic gaming.
   - Add time-tracking + report if user answers too fast.

---

## Conclusion

**Michi is a solid project with good design decisions and realistic scope.** The code side is well-planned; the content side is the real challenge.

**Next step:** Lock in the three critical decisions (audio, N5 syllabus, content workflow) and start Phase 1. Phase 2 will feel chaotic if you haven't drafted content upfront.

**Timeline to "usable MVP":** 2–4 months (depending on content creation speed).

Good luck! 🎌

---

**Questions?** Reference this audit when prioritizing decisions in Phase 1 & 2.


---

## 11. UI/UX audit (added Oct 5, 2026)

PROJECT.md specifies the *what* (screens, flows) but almost nothing about the *feel*. That gap is why the first UI came out generic.

**Gaps in PROJECT.md**
- No visual direction. "Calm daily plan" and "no manipulation" (Section 1) are principles, but nothing says what calm looks like: palette, type, density, motion.
- Screens are listed (6.4) with no navigation model. Nothing says how you move between Home, Path, Lessons and Review, so the first build had no nav and dead-end screens.
- Stage 0 describes content (6 sets, mnemonics) but not the lesson interaction: browse a set, step through characters, see what you have learned.
- Empty and first-run states are never specified (nothing due, nothing learned yet).

**What went wrong in the first UI pass**
- Contradicted the doc's own principles: bouncing characters, pulsing glows, gradient buttons and emoji headers are the "gamified" look Section 1 rejects.
- Katakana units (7-12) had no items, so half of Stage 0 was unclickable.
- Seeding only ran on a brand-new database, so any older or partial database showed "No lessons available".
- The Review button depended on stats that never loaded, so it was always disabled.

**Design direction now implemented**
- Paper background, one blue accent, one vermilion highlight for counts. Flat cards, thin borders, no gradients or emoji.
- Persistent top nav: Today / Lessons / Review.
- Lessons: Hiragana / Katakana tabs, unit cards showing progress, per-unit character strip to jump between kana.
- Every screen has an empty state and a single obvious next action.

**Still to specify before Phase 2**
- Stroke-order and audio placement on the kana lesson (currently absent).
- Mobile bottom nav vs. top nav.
- Dark mode.
