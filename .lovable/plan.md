

# "I Don't Know What AI Can Do For Me" Discovery Flow

## Summary
Add a secondary CTA button in the hero section that leads users through a short 2-step questionnaire (age group, then age-appropriate activities), and then displays matching use cases from the existing prompt library.

---

## User Flow

1. User clicks **"I don't know what AI can do for me"** in the hero section
2. **Step 1 -- Age**: User picks an age bucket (Under 15, 15-25, 25-40, 40-60, 60+)
3. **Step 2 -- Activities**: Based on the selected age, user sees a relevant set of activities to choose from (multi-select). For example, a 60+ user might see "Writing letters", "Planning travel", "Cooking", "Staying in touch with family"; a 25-40 user might see "Managing a team", "Side projects", "Social media", "Job hunting"
4. **Results**: A filtered list of use cases from the existing `useCasePrompts` data is shown, matching the selected activities. Each card can be copied or opened in the prompt builder.

---

## What Changes

### New files

**`src/components/discovery/DiscoveryWizard.tsx`**
- A self-contained multi-step component managing state for age selection, activity selection, and results display
- Step 1: Radio-button cards for age buckets
- Step 2: Checkbox cards for activities (list varies by age bucket)
- Step 3: Filtered use case cards with copy button, reusing the existing `useCasePrompts` data

**`src/data/discoveryActivities.ts`**
- Data file mapping each age bucket to a list of activities
- Each activity maps to one or more use case categories (Business, Education, Creative, Marketing, Personal) used to filter results

### Modified files

**`src/components/landing/HeroSection.tsx`**
- Add an `onDiscover` callback prop alongside existing `onStartBuilding`
- Add a secondary button: outlined/ghost style, white text, labeled "I don't know what AI can do for me" with a HelpCircle icon
- Both buttons sit side-by-side on desktop, stacked on mobile

**`src/pages/Index.tsx`**
- Add a new state `showDiscovery` (alongside existing `showWizard`)
- When `showDiscovery` is true, render `<DiscoveryWizard />` instead of the landing sections
- Pass `onDiscover` callback to `HeroSection`

---

## Technical Details

### Age-to-Activities Mapping (example)

| Age Bucket | Activities |
|---|---|
| Under 15 | Homework help, Creative writing, Learning new things, Fun projects |
| 15-25 | Study & exams, Job applications, Social media content, Creative projects |
| 25-40 | Work emails, Marketing, Meal planning, Side projects, Job hunting |
| 40-60 | Business communication, Travel planning, Learning tech, Health & fitness |
| 60+ | Writing letters, Cooking recipes, Staying connected with family, Travel, Understanding technology |

### Activity-to-Category Mapping (example)

Each activity maps to one or more categories from `useCasePrompts` (Business, Education, Creative, Marketing, Personal). The results step filters the 20 existing prompts by the union of categories matched by selected activities.

### Component Structure

The `DiscoveryWizard` uses simple `useState` for step tracking, selected age, and selected activities. No backend or database needed -- everything is client-side using existing data.

### No new dependencies
Uses existing UI components: Card, Button, Badge, Checkbox, RadioGroup.

