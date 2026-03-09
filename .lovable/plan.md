

## Plan: Rename Lesson 1 from "More text is better" to "More context is better"

### Scope
Update lesson 1's title, description, tip, quiz questions/explanations, and final exam questions in **both EN and IT** files to reflect the concept of "more context" rather than "more text."

### Files to edit

**1. `src/data/lessons.ts`** (Lesson 1, lines 23-78)
- Title: "More text is better" → "More context is better"
- Concept: "Details matter" → "Context matters"
- Description: Reframe around providing context (background, purpose, audience) not just "lots of details/text"
- Tip: Update the analogy to emphasize context over verbosity
- Quiz questions (5): Update wording and explanations to use "context" language — e.g. Q5 "Why do detailed prompts work better?" → "Why does providing context work better?"

**2. `src/data/lessons.it.ts`** (Lesson 1, lines 3-61)
- Title: "Più testo è meglio" → "Più contesto è meglio"
- Concept: "I dettagli contano" → "Il contesto conta"
- Same reframing in Italian for description, tip, and all 5 quiz items

**3. `src/data/finalQuizQuestions.ts`** (Questions 1-4, lines 13-58)
- Update `concept` field: "More text is better" → "More context is better"
- Reword questions and explanations to focus on context rather than text length

**4. `src/data/finalQuizQuestions.it.ts`** (Questions 1-4, lines 4-7)
- Update `concept` field: "Più testo è meglio" → "Più contesto è meglio"
- Reword Italian questions and explanations accordingly

### Key content shift
The core teaching changes from "write more text / be more detailed" to "provide more context — background, purpose, audience, constraints." The quiz answers and explanations will reflect that context (not just volume) is what makes prompts effective.

