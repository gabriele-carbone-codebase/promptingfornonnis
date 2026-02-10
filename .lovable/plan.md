

# Landing Page Overhaul: Use Cases + New Sections

## Summary
Add a "Use Cases" page with 20 example prompts, remove the "Free Training" CTA from the hero, and add four new landing page sections: Who This Is For, Training & Certification, Use Cases preview, and Community.

---

## Changes Overview

### 1. Create Use Cases Data (20 Example Prompts)

**New file:** `src/data/useCasePrompts.ts`
- 20 pre-built prompts following the exact generator template format ("I want to...", "As a result I expect to receive...", etc.)
- Each prompt has a title, category tag (e.g. "Business", "Education", "Creative Writing", "Marketing", "Personal"), and the full generated prompt text
- Covers diverse real-world scenarios to show beginners what's possible

---

### 2. Create Use Cases Page

**New file:** `src/pages/UseCases.tsx`
- Full page displaying all 20 example prompts in browsable cards
- Category filter tabs at the top
- Each card shows: title, category badge, truncated prompt preview, and a "Copy" button
- Expandable cards to see full prompt text
- CTA at bottom: "Create Your Own Prompt"

**Update:** `src/App.tsx`
- Add route: `/use-cases`

---

### 3. Update Hero Section

**File:** `src/components/landing/HeroSection.tsx`
- Remove the "Free Training" outline button
- Keep only the "Start Building" primary CTA
- Keep the "100% free / No signup / Works with any AI" tagline

---

### 4. Create New Landing Page Sections

Four new section components, displayed below the hero on the Index page:

#### a) "Who This Is For" Section
**New file:** `src/components/landing/WhoIsThisFor.tsx`
- Targets people who don't know what AI can do for them
- 3 persona cards with icons:
  - "I've heard of ChatGPT but never tried it"
  - "I've tried AI but my results were disappointing"  
  - "I don't even know what questions to ask AI"
- Reassuring, non-technical tone
- Subtle background styling

#### b) Training & Certification Section
**New file:** `src/components/landing/TrainingSection.tsx`
- Highlights the free 5-lesson training program
- Mentions the final quiz and shareable certificate
- Shows key stats: "5 lessons", "25 practice questions", "Certificate"
- CTA button linking to `/training`

#### c) Use Cases Preview Section
**New file:** `src/components/landing/UseCasesSection.tsx`
- Shows 3-4 featured example prompts from the use cases data
- Brief preview cards with category badges
- CTA: "See All 20 Examples" linking to `/use-cases`

#### d) Community Section
**New file:** `src/components/landing/CommunitySection.tsx`
- Highlights the community prompt sharing feature
- Mentions browsing, liking, and sharing prompts
- CTA linking to `/community`

---

### 5. Update Index Page

**File:** `src/pages/Index.tsx`
- Import and render the four new sections below the HeroSection (when wizard is not shown)
- Section order: Hero -> Who Is This For -> Use Cases Preview -> Training & Certification -> Community

---

## Technical Details

### Use Case Prompt Data Structure

```typescript
interface UseCasePrompt {
  id: number;
  title: string;
  category: "Business" | "Education" | "Creative" | "Marketing" | "Personal";
  prompt: string; // Full prompt text in the generator format
}
```

### Section Layout Pattern

All new sections will follow a consistent pattern:
- Full-width section with alternating subtle backgrounds (white / muted)
- Container-constrained content with max-w-5xl
- Centered heading + subheading
- Content grid (cards, features, etc.)
- Optional CTA button at bottom

---

## Files to Create

1. `src/data/useCasePrompts.ts` - 20 example prompts
2. `src/pages/UseCases.tsx` - Full use cases page
3. `src/components/landing/WhoIsThisFor.tsx` - Target audience section
4. `src/components/landing/TrainingSection.tsx` - Training & certification section
5. `src/components/landing/UseCasesSection.tsx` - Use cases preview section
6. `src/components/landing/CommunitySection.tsx` - Community section

## Files to Modify

1. `src/components/landing/HeroSection.tsx` - Remove "Free Training" button
2. `src/pages/Index.tsx` - Add new sections below hero
3. `src/App.tsx` - Add `/use-cases` route

