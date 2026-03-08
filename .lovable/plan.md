

## Plan: "What does Nonni mean?" scroll-triggered popup (English only)

### What
A small, dismissable popup/toast that appears when the user scrolls past 70% of the homepage (landing view only, English version only). It explains:
1. "Nonni" means "grandparents" in Italian
2. The project was born to make AI accessible to everyone

### How

**New component: `src/components/landing/NonniPopup.tsx`**
- Uses `useEffect` + scroll listener to detect when `scrollY / (documentHeight - windowHeight) > 0.7`
- Shows a small card (bottom-right corner, fixed position) with an X to dismiss
- Once dismissed, stores flag in `sessionStorage` so it doesn't reappear during the session
- Gentle fade-in animation via Tailwind

**Modified: `src/pages/Index.tsx`**
- Import `NonniPopup` and `useLanguage`
- Render `<NonniPopup />` only when `lang === "en"` and `view === "landing"`

**No Italian translation needed** — this popup is exclusively for English-speaking visitors.

**No privacy policy update needed** — no new data is collected (sessionStorage only).

