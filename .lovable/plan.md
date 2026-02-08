
# Enhanced Training: Multi-Question Lesson Quizzes + Final Quiz with Certificate

## Summary
This update will expand each lesson to include 5 quiz questions (with 3 options each), add a comprehensive 20-question final quiz, and generate a shareable certificate upon completion.

---

## Changes Overview

### 1. Expand Lesson Quizzes to 5 Questions Each

Each of the 5 lessons currently has only 1 quiz question with 2 options. We'll expand each lesson to have **5 quiz questions** with **3 options each** (1 correct answer per question).

**Updated Data Structure:**

| Current | New |
|---------|-----|
| 1 question per lesson | 5 questions per lesson |
| 2 options per question | 3 options per question |
| Single quiz object | Array of quiz questions |

**File:** `src/data/lessons.ts`
- Change `quiz: LessonQuiz` to `quiz: LessonQuiz[]` (array of 5 questions)
- Each question has 3 options (a, b, c) with 1 correct answer
- Total: 25 quiz questions across all 5 lessons

**File:** `src/components/training/LessonCard.tsx`
- Update to handle multiple questions per lesson
- Show questions one at a time with progress indicator
- After answering all 5 questions, show "Complete Lesson" button

---

### 2. Create Final Quiz (20 Questions)

A comprehensive quiz that tests all 5 concepts with varied questions.

**Structure:**
- 20 questions total (roughly 4 questions per concept)
- 3 options per question (1 correct, 2 incorrect)
- Questions displayed one at a time
- Immediate feedback after each answer (correct/incorrect + explanation)
- Progress indicator showing current question number

**New Files:**
| File | Purpose |
|------|---------|
| `src/data/finalQuizQuestions.ts` | 20 quiz questions with 3 options each |
| `src/components/training/FinalQuiz.tsx` | Quiz component with one-at-a-time flow |
| `src/components/training/FinalQuizQuestion.tsx` | Individual question card with answer feedback |

**Quiz Flow:**
1. User sees question 1 of 20 with 3 options
2. User selects an answer
3. "Check Answer" button reveals correct/incorrect status
4. Explanation appears below
5. "Next Question" button advances to question 2
6. Repeat until question 20
7. After final question, show results summary then certificate

---

### 3. Create Shareable Certificate

A visually appealing certificate component that users can share.

**Features:**
- Displays user's name (or "Prompt Master" if not logged in)
- Shows completion date
- Shows score (e.g., "18/20 correct")
- Professional certificate design with decorative elements
- **Share Options:**
  - "Copy Link" button (generates shareable URL)
  - "Download Image" button (uses html2canvas to save as PNG)
  - Social share buttons (Twitter/X, LinkedIn)

**New Files:**
| File | Purpose |
|------|---------|
| `src/components/training/Certificate.tsx` | Certificate display with user info and score |
| `src/components/training/ShareButtons.tsx` | Share/download buttons |

---

### 4. Update Training Flow

Modify the training page to include the final quiz step.

**Updated Flow:**
```text
Lessons Hub -> Lesson (5 questions each) -> All Lessons Done -> Final Quiz (20 questions) -> Certificate
```

**File:** `src/pages/Training.tsx`
- Add state for `showFinalQuiz` and `showCertificate`
- Add `finalQuizScore` to track results
- Show "Take Final Quiz" button after all 5 lessons complete
- Display certificate after final quiz completion

**File:** `src/components/training/TrainingProgress.tsx`
- Add "Final Quiz" card that appears after lesson 5
- Show locked state until all lessons completed
- Show completion status after quiz taken

**File:** `src/components/training/TrainingComplete.tsx`
- Update to show "Take Final Quiz" CTA instead of going directly to prompt builder

---

## Technical Details

### Updated Lesson Quiz Interface

```typescript
export interface LessonQuiz {
  id: number;
  question: string;
  options: {
    id: string; // "a", "b", or "c"
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  concept: string;
  description: string;
  tip: string;
  quiz: LessonQuiz[]; // Changed from single object to array of 5
}
```

### LessonCard Multi-Question Flow

```text
1. Show lesson explanation and tip
2. "Start Quiz" button
3. Question 1 of 5 -> Answer -> Feedback -> Next
4. Question 2 of 5 -> Answer -> Feedback -> Next
5. ... repeat ...
6. Question 5 of 5 -> Answer -> Feedback -> "Complete Lesson"
```

### Training State Machine

```text
States:
- lessons_hub (show progress grid)
- lesson_active (show LessonCard with multi-question quiz)
- final_quiz_unlocked (all lessons done, quiz not started)
- final_quiz_active (taking the 20-question quiz)
- certificate (quiz complete, show certificate)
```

---

## Sample Lesson Quiz Questions (Lesson 1 example)

**Lesson 1: "More text is better"**

| Q# | Question | Options |
|----|----------|---------|
| 1 | Which prompt will get better results? | a) Write an email, b) Write a professional email..., c) Email please |
| 2 | What's wrong with "Help me cook dinner"? | a) Too short, b) Too long, c) Nothing wrong |
| 3 | Which detail helps the AI most? | a) "Write fast", b) "500 words", c) "Thanks" |
| 4 | Pick the most specific prompt | a) Make a logo, b) Design a blue minimalist logo for a coffee shop, c) Logo for business |
| 5 | Why do detailed prompts work better? | a) AI likes reading, b) Less guessing needed, c) They're polite |

---

## Files to Create

1. `src/data/finalQuizQuestions.ts` - 20 final quiz questions
2. `src/components/training/FinalQuiz.tsx` - Final quiz controller
3. `src/components/training/FinalQuizQuestion.tsx` - Single question display
4. `src/components/training/Certificate.tsx` - Shareable certificate
5. `src/components/training/ShareButtons.tsx` - Share/download buttons

## Files to Modify

1. `src/data/lessons.ts` - Expand to 5 questions per lesson (3 options each)
2. `src/components/training/LessonCard.tsx` - Handle multi-question flow
3. `src/pages/Training.tsx` - Add final quiz and certificate states
4. `src/components/training/TrainingProgress.tsx` - Add final quiz card
5. `src/components/training/TrainingComplete.tsx` - Update CTA to final quiz

---

## Visual Design Notes

### Lesson Quiz Progress
- "Question X of 5" indicator within each lesson
- Small progress dots below question
- Consistent styling with current quiz design

### Final Quiz Progress
- "Question X of 20" indicator at top
- Progress bar showing completion percentage
- Same question card styling as lesson quizzes

### Certificate Design
- Clean white card with soft pastel border
- Decorative corner elements or badge icon
- Clear hierarchy: Title -> Name -> Score -> Date
- Prominent share buttons below certificate
- Responsive design for mobile screenshots
