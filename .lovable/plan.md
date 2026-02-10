

# Rebrand to "Prompting for Nonnis"

## Summary
Rename the app from "PromptCoach" to "Prompting for Nonnis," update the color palette to feel warmer and more welcoming (think cozy, grandparent-friendly tones), and swap icons throughout to reinforce the friendly, accessible-to-everyone message.

---

## 1. Naming Changes

Update all references from "PromptCoach" to "Prompting for Nonnis":

| File | What changes |
|------|-------------|
| `index.html` | Title, og:title, description, og:description meta tags |
| `src/components/layout/Header.tsx` | Logo text: "Prompting for Nonnis" |
| `src/pages/Auth.tsx` | Welcome heading |
| `src/index.css` | Design system comment |
| `src/components/training/Certificate.tsx` | Certificate title reference |

---

## 2. Color Palette Update

Shift from the current lavender/mint palette to a warmer, cozier palette that feels approachable and friendly -- like a warm kitchen:

| Token | Current (lavender) | New (warm & cozy) |
|-------|--------------------|--------------------|
| Primary | `258 58% 62%` (purple) | `24 80% 58%` (warm orange) |
| Accent | `158 55% 88%` (mint) | `38 90% 90%` (soft golden) |
| Secondary | `45 50% 96%` (cream) | `30 60% 96%` (warm cream) |
| Success | `158 60% 52%` (green) | `142 50% 50%` (softer green) |
| Gradients | Purple-based | Orange-to-peach warm gradients |

Dark mode tokens will be adjusted accordingly.

**Files:** `src/index.css` (CSS variables), `tailwind.config.ts` (no structural change needed, just the CSS vars)

---

## 3. Icon Updates

Replace techy/abstract icons with friendlier, more human ones throughout:

| Location | Current Icon | New Icon | Reason |
|----------|-------------|----------|--------|
| Header logo | `Sparkles` | `Heart` or `HandHeart` | Warmth over tech |
| Hero badge | `Sparkles` | `Smile` | Friendly face |
| Hero CTA | `Sparkles` + `ArrowRight` | `HandHeart` + `ArrowRight` | Caring guidance |
| "Who Is This For" cards | `HelpCircle`, `ThumbsDown`, `Lightbulb` | `HelpCircle`, `Frown`, `Eye` | More expressive |
| Training section | `BookOpen`, `HelpCircle`, `Award` | `GraduationCap`, `MessageCircleQuestion`, `Award` | Learning-focused |
| Community section | `Users`, `Heart`, `Share2` | `UsersRound`, `Heart`, `Share2` | Rounder, friendlier |
| Certificate badge | `Award` | `Trophy` or `Medal` | Achievement feel |

All icons are from `lucide-react` (already installed).

---

## 4. Copy Tone Adjustments

Small wording tweaks to reinforce the "even your grandma can do it" message:

- Hero subtitle: "Even your nonna can do it! Our friendly guide walks you through building powerful prompts step by step."
- Hero badge: "So easy, even nonni can do it"
- "Who Is This For" heading: "Is this for me? Absolutely!"
- Tagline: "100% free -- No tech skills needed -- Works with any AI"

---

## Files to Modify

1. `index.html` -- title and meta tags
2. `src/index.css` -- color palette CSS variables + gradients
3. `src/components/layout/Header.tsx` -- logo icon + name
4. `src/components/landing/HeroSection.tsx` -- icons + copy
5. `src/components/landing/WhoIsThisFor.tsx` -- icons + copy tone
6. `src/components/landing/TrainingSection.tsx` -- icons
7. `src/components/landing/CommunitySection.tsx` -- icons
8. `src/components/training/Certificate.tsx` -- branding
9. `src/pages/Auth.tsx` -- welcome text

