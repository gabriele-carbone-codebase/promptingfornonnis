

# "Open in Chatbot" Buttons

## Summary
Add a new section to the prompt output screen with buttons for the major AI chatbots (ChatGPT, Claude, Gemini). Clicking a button opens the chatbot in a new tab with the generated prompt pre-filled, so the user can start chatting immediately without copy-pasting.

---

## How It Works

Each chatbot supports a URL parameter to pre-fill a prompt:

- **ChatGPT**: `https://chat.openai.com/?q=ENCODED_PROMPT`
- **Claude**: `https://claude.ai/new?q=ENCODED_PROMPT`
- **Google Gemini**: `https://gemini.google.com/app?text=ENCODED_PROMPT`

The prompt text is URL-encoded and appended as a query parameter. Clicking the button opens a new browser tab -- the user lands directly in the chatbot with the prompt already typed in.

---

## Changes

### Modify `src/components/wizard/PromptOutput.tsx`

- Add a new section between the prompt card and the existing action buttons
- Section heading: "Or open it directly in your favourite AI"
- Three styled buttons in a row, each with the chatbot's name and a distinct color/icon:
  - **ChatGPT** (green-ish) -- opens `chat.openai.com`
  - **Claude** (orange-ish) -- opens `claude.ai`
  - **Gemini** (blue-ish) -- opens `gemini.google.com`
- Each button calls `window.open(url, '_blank')` with the encoded prompt
- Update subtitle text from "Copy and paste this into ChatGPT, Claude, or any AI chatbot" to something like "Choose an AI chatbot below, or copy the prompt to use anywhere"

### No other files need to change

This is a self-contained UI addition to the existing PromptOutput component.

---

## Technical Details

- The prompt is encoded with `encodeURIComponent(generatedPrompt)` for safe URL usage
- Buttons use `window.open()` to open in a new tab
- Each button has a subtle brand-inspired background color using Tailwind classes
- Fully responsive: buttons stack vertically on mobile, sit side-by-side on desktop
- The existing "Copy Prompt" button remains as a fallback for users who prefer other chatbots

