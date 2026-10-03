# 道 Michi — Japanese from Zero to N1

> A self-paced Japanese learning app built for an absolute beginner who wants real understanding, not streaks and owls.

---

## 1. Vision

Michi ("the path") takes a learner with **zero knowledge** of Japanese all the way to **JLPT N1** through one continuous, structured path. Every lesson explains *why* the language works the way it does, every new word is reviewed at the right moment with spaced repetition, and every level ends with real reading and listening, not just tapping word tiles.

### Why not Duolingo? (design principles that follow from that)

| Duolingo pain point | Michi's answer |
|---|---|
| Grammar is rarely explained; you guess patterns | Every grammar point has a short, clear explanation with examples before you practice it |
| Word-tile sentence building that you can "game" | Typed answers (with an IME-style kana input), recall-first flashcards, and comprehension questions |
| Kana and kanji taught shallowly | Dedicated kana bootcamp, then kanji taught by components (radicals) with mnemonics |
| Streak anxiety, hearts, leagues, pressure | No hearts, no leagues. A calm daily plan with a soft "review load" meter. Missing a day just means slightly more reviews |
| Stops around a low-intermediate level | Content mapped explicitly to N5 → N4 → N3 → N2 → N1 |
| Little real-world input | Graded reading passages and listening clips at every level, then native material at N2–N1 |

### Core principles
1. **Understand, then practice.** Explanation → examples → recall → use.
2. **Spaced repetition is the backbone.** Everything you learn (kana, kanji, vocab, grammar) goes into one SRS queue.
3. **Input-heavy.** Lots of reading and listening at your level; output (writing/speaking) grows over time.
4. **Respect the learner's time.** Clear daily target (e.g. 20–40 min), no manipulation.
5. **Always know where you are.** A visible map of N5→N1 with percent complete per level.

---

## 2. Target user

- Native/fluent English speaker, **no prior Japanese** (can't read hiragana yet).
- Self-studying, wants structure but dislikes gamified apps.
- Goal: pass JLPT levels in order and actually read/understand Japanese.
- Studies on phone and laptop → needs a responsive web app (PWA) that works offline.

---

## 3. The learning path

> Note: since 2010 the JLPT has **not** published official vocabulary/kanji lists. The numbers below are the commonly used community estimates and are good targets, not guarantees.

| Stage | Focus | Kanji (cumulative) | Vocab (cumulative) | Rough study hours* |
|---|---|---|---|---|
| **Stage 0 — Foundations** | Hiragana, katakana, pronunciation, pitch basics, how sentences are built | 0 | ~50 | 15–30 |
| **N5** | Basic sentences, です/ます, particles は が を に で, numbers, time, daily life | ~100 | ~800 | 250–450 |
| **N4** | Verb forms (て, た, ない, potential, volitional), giving/receiving, simple conditionals | ~300 | ~1,500 | +200–300 |
| **N3** | Bridge level: passive, causative, nuance particles, longer reading | ~650 | ~3,700 | +300–450 |
| **N2** | Formal/written grammar, news, opinion pieces, business-ish Japanese | ~1,000 | ~6,000 | +400–700 |
| **N1** | Advanced literary/abstract grammar, editorials, native-speed listening | ~2,000 | ~10,000 | +800–1,200 |

\*Hours are rough estimates for English speakers without prior kanji knowledge; real pace varies a lot.

### Stage 0 — Foundations (before N5)
- **Hiragana** in 6 small sets (あ-row → ん), with mnemonics, audio, and stroke-order animation.
- **Katakana** the same way, plus loanword practice (コーヒー, テレビ).
- Dakuten/handakuten (が, ぱ), small ゃゅょ, small っ, long vowels.
- Pronunciation: the 5 vowels, mora timing, intro to pitch accent (awareness, not mastery).
- "How Japanese works" mini-lessons: SOV order, particles as labels, no plurals, politeness levels.
- **Exit check:** read any kana word at ~1 sec/character before unlocking N5.

### Every JLPT level is split into Units
Each **Unit** (≈ 1 week at a normal pace) contains:
1. **Grammar lessons** (3–5 points) — explanation, 5+ example sentences with audio, common mistakes.
2. **Vocabulary set** (~30–50 words) themed around the unit.
3. **Kanji set** (~10–20 kanji) taught by radicals with mnemonics and 2–3 example words.
4. **Reading passage** using only what you know (+ a few glossed words).
5. **Listening clip** with transcript toggle and slow/normal speed.
6. **Unit check** — a short mixed quiz. Weak items get pushed back into the SRS.

At the end of each level: a **mock exam** in JLPT format (語彙, 文法, 読解, 聴解) with a score breakdown.

---

## 4. Feature list

### 4.1 MVP (must have)
- **Onboarding**: placement choice ("I know nothing" → Stage 0, or a quick test to skip ahead), daily time goal.
- **Kana bootcamp** with stroke animations, audio, and recall drills.
- **Lesson player**: renders grammar explanations, examples (with furigana toggle), and inline audio.
- **Unified SRS reviews** using the **FSRS** algorithm (modern successor to Anki's SM-2).
  - Card types: kana → reading, kanji → meaning/reading, word → meaning, meaning → word (typed), grammar cloze.
  - Typed answers with a built-in romaji→kana converter (type `taberu` → たべる).
  - Grade buttons: Again / Hard / Good / Easy.
- **Daily plan screen**: "Reviews due: 42 · New lessons: 1 · Est. 25 min". No streak counter by default.
- **Progress map**: N5→N1 with completion % for grammar, vocab, kanji.
- **Furigana control**: always / only for unlearned kanji / never.
- **Offline-first** PWA; progress syncs when online.

### 4.2 Version 2
- **Graded reader library** sorted by level, with tap-to-look-up words and "add to SRS".
- **Listening practice**: dictation mode, shadowing mode with record & compare.
- **Mock JLPT exams** per level with timer.
- **Kanji handwriting practice** (draw on screen, stroke-order checking).
- **Leech detection**: cards you keep failing get a special "re-learn" lesson with a new mnemonic.
- **Personal notes and custom mnemonics** on any card.

### 4.3 Version 3 (stretch)
- **AI tutor** (LLM) for: "explain this sentence", grammar Q&A, and free conversation practice graded to your level.
- **Writing feedback**: write a short diary entry, get corrections tied to grammar points you've studied.
- **Pitch accent visualizer** for vocab.
- **Import native content**: paste an article/subtitle file, see which words you know, mine unknown words into SRS.
- Optional, opt-in light stats (study heatmap) for people who *want* them.

### 4.4 Explicitly out of scope
- Hearts/lives, leagues, leaderboards, guilt notifications.
- Word-tile sentence assembly as a main exercise.
- Romaji after Stage 0 (only as a typing input method).

---

## 5. Content sources (check licenses before use)

| Need | Source | Notes |
|---|---|---|
| Dictionary / vocab data | **JMdict** (EDRDG) | Free with attribution (CC BY-SA) |
| Kanji data | **KANJIDIC2** (EDRDG) | Readings, meanings, grades, JLPT tags (old 4-level) |
| Stroke order | **KanjiVG** | SVG stroke data, CC BY-SA |
| Example sentences | **Tatoeba** | CC BY; quality varies, curate them |
| Pitch accent | Community datasets (e.g. Kanjium) | Verify license |
| Audio | Generated TTS (e.g. a Japanese neural voice) for MVP; native recordings later | Label synthetic audio honestly |
| Grammar explanations & readers | **Written in-house** | This is the app's core value; write original content |
| JLPT level tags | Community lists (e.g. Jonathan Waller's) | Unofficial; treat as guidance |

---

## 6. Technical design

### 6.1 Stack (suggested)
- **Frontend:** React + TypeScript + Vite, Tailwind CSS, installed as a **PWA**.
- **Local data:** IndexedDB (via Dexie) for offline cards, reviews, and content.
- **Backend:** Supabase (Postgres + Auth + Storage) for accounts, sync, and audio files.
- **SRS engine:** `ts-fsrs` (FSRS implementation in TypeScript).
- **Kana input:** `wanakana` (romaji ↔ kana conversion).
- **Japanese text processing:** `kuromoji.js` (tokenizer) for tap-to-look-up and furigana.
- **Stroke order:** KanjiVG SVGs animated in the browser.
- **Hosting:** Netlify or Vercel for the frontend.
- **(v3) AI tutor:** an LLM API called from a serverless function, with the learner's level and known grammar passed as context.

### 6.2 Core data model

```text
User
  id, display_name, daily_minutes_goal, furigana_mode, created_at

Level            (Stage0, N5, N4, N3, N2, N1)
  id, name, order

Unit
  id, level_id, order, title, theme

Item             (anything learnable)
  id, type: kana | kanji | vocab | grammar
  unit_id, payload (JSON: readings, meanings, radicals, mnemonic, examples...)

Lesson
  id, unit_id, order, item_ids[], content_md

Card             (one item can produce several cards)
  id, user_id, item_id, card_type (e.g. "kanji_meaning", "vocab_recall_typed")
  fsrs_state: stability, difficulty, due, reps, lapses, state

ReviewLog
  id, card_id, rating (1-4), reviewed_at, elapsed_ms, answer_given

ReadingPassage / ListeningClip
  id, level_id, unit_id, text, audio_url, glossary[], questions[]

MockExam / ExamAttempt
  id, level_id, sections[], user scores per section
```

### 6.3 Key flows
1. **Learn:** Lesson → items marked "learned" → cards created in SRS with first review due soon.
2. **Review:** fetch due cards (local) → show → user answers → FSRS schedules next due date → log saved → sync.
3. **Unlocking:** a unit's lessons unlock when ≥ ~80% of the previous unit's items have reached a "learned" stability threshold, so you can't race ahead of your memory.
4. **Sync:** local-first writes; background sync to Supabase with last-write-wins per card.

### 6.4 Screens
- Home / Daily plan
- Path map (Stage 0 → N1)
- Lesson player
- Review session
- Item detail (kanji/word page with examples, notes, stroke order)
- Reader / Listening player
- Mock exam
- Settings (daily goal, furigana mode, audio speed, review order)

---

## 7. Roadmap

| Phase | Duration (est.) | Deliverable |
|---|---|---|
| **0. Setup** | 1 week | Repo, React + PWA scaffold, Supabase project, data import scripts for JMdict/KANJIDIC2/KanjiVG |
| **1. Kana MVP** | 2–3 weeks | Stage 0 complete: kana lessons, stroke animation, SRS reviews with FSRS, typed kana input |
| **2. N5 content + lesson engine** | 4–6 weeks | Lesson player, unit system, ~25 N5 grammar points, N5 vocab & kanji, furigana modes |
| **3. Reading & listening** | 3–4 weeks | Graded passages and audio for N5, tap-to-look-up, comprehension questions |
| **4. Accounts & sync** | 2 weeks | Auth, cloud sync, multi-device |
| **5. N4 → N3 content** | ongoing | Units, readers, mock exams for N4 and N3 |
| **6. v2 features** | ongoing | Handwriting, leech handling, mock exams, shadowing |
| **7. N2 → N1 + AI tutor** | ongoing | Advanced content, native-material import, LLM tutor |

> Content creation (grammar write-ups, readers, curated sentences) will take far more time than coding. Plan for it.

---

## 8. Success metrics (for you, the learner)

- Stage 0 finished: read all kana fluently.
- **Review accuracy** stays around 85–90% (FSRS target retention).
- Daily reviews stay manageable (< ~150/day); if not, the app slows new lessons automatically.
- Mock exam score ≥ pass threshold before moving to the next level.
- Ultimate: pass the real JLPT at each level (tests run in July and December).

---

## 9. Suggested study rhythm (built into the app)

- **Daily (20–40 min):** all due reviews first → 1 new lesson if review load is OK → 5 min of reading or listening.
- **Weekly:** finish one unit, do the unit check.
- **Per level:** mock exam, then a "consolidation week" of reading only before moving on.

---

## 10. Open questions

- Teach pitch accent actively from N5, or just display it?
- Include handwriting at all levels, or make it optional (the JLPT has no writing section)?
- How much English vs. Japanese should explanations use at N2–N1 (switch to Japanese-only explanations)?
- Free personal project, or eventually something to share/publish?

---

## 11. Next steps

1. Confirm stack and scope of the MVP (Stage 0 + N5).
2. Write import scripts for JMdict, KANJIDIC2, KanjiVG.
3. Build the SRS review screen with FSRS + wanakana first (it's the heart of the app).
4. Write the Stage 0 kana lessons.
5. Draft the N5 unit list (≈ 12–15 units) and grammar point order.
