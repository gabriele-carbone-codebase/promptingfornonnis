

## Plan: Replace screenshot-based certificate with a proper PDF download

### Problem
On mobile, the current certificate is rendered as an HTML card and "downloaded" via `html2canvas` as a PNG screenshot, which produces poor quality on small screens and doesn't scale well.

### Solution
Replace the `html2canvas` PNG download with a proper **PDF certificate** generated client-side using the browser's built-in `window.print()` / CSS `@media print` approach — or more reliably, using a lightweight PDF generation approach with a hidden print-optimized layout.

Since we want a **standard, clean PDF** and not a screenshot, the best approach for a frontend-only app is to generate the PDF using **canvas-based rendering** or a simple **print-to-PDF** flow. Given we already have `html2canvas`, we can pair it with a lightweight PDF library. However, to keep it truly clean and vector-based, the simplest robust approach is:

**Use a dedicated print-friendly certificate layout + `window.print()`** with `@media print` CSS that hides everything except the certificate. This produces a proper PDF on all devices (mobile included, via "Save as PDF" in print dialog).

But for a seamless "Download PDF" button experience without the print dialog, we should use **jsPDF** (lightweight library).

### Changes

**1. Add `jspdf` dependency**

**2. Prompt user for name if not provided**
- Add a new intermediate state `"name_prompt"` in `Training.tsx` between quiz completion and certificate display
- Show a simple dialog/input asking for the user's name before showing the certificate
- Pre-fill with auth user's display name if available

**3. Rewrite `ShareButtons.tsx` download handler**
- Replace `html2canvas` PNG approach with `jsPDF` to generate a proper vector PDF
- The PDF will contain:
  - Title: "Certificate of Completion" / "Certificato di completamento"
  - Course name
  - User name
  - Grade, Score, Accuracy
  - Completion date
  - Clean layout that works identically on mobile and desktop

**4. Update `Certificate.tsx`**
- Accept `userName` as required (after name prompt step)
- Keep the visual HTML card for on-screen display (it looks good)
- The download button produces the PDF separately (not a screenshot of the card)

**5. Update `Training.tsx`**
- Add `"name_prompt"` state after quiz completion
- Add name input UI (simple card with text input + confirm button)
- Pass confirmed name to Certificate component

**6. Add translations (both EN and IT)**
- "Enter your name for the certificate" / "Inserisci il tuo nome per il certificato"
- "Your name" / "Il tuo nome"
- "Generate Certificate" / "Genera certificato"

### Files to modify
- `package.json` — add `jspdf`
- `src/pages/Training.tsx` — add name prompt state
- `src/components/training/ShareButtons.tsx` — replace html2canvas with jsPDF
- `src/components/training/Certificate.tsx` — minor props adjustment
- `src/i18n/translations/en.ts` — add name prompt strings
- `src/i18n/translations/it.ts` — add name prompt strings

