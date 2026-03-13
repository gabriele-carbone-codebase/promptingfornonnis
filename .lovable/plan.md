

## Update placeholder and examples to be senior-friendly

The placeholder text and some example badges reference professional/technical tasks (emails to boss, writing code) that don't resonate with the senior target audience.

### Changes

**`src/i18n/translations/en.ts`** (lines 75-77):
- Placeholder: `"e.g., Help me write a birthday message for my grandchild..."` 
- Examples: Replace "Write code" with "Plan a trip", keep others that are universal

**`src/i18n/translations/it.ts`** (lines 75-77):
- Placeholder: `"es., Aiutami a scrivere un messaggio di auguri per il compleanno di mio nipote..."`
- Examples: Replace "Scrivi codice" with "Pianifica un viaggio"

### Example badges (both languages)

| Before | After |
|---|---|
| Write an email | Write a letter |
| Write code | Plan a trip |

All other examples (Summarize a text, Create a poem, Plan my week, Explain a concept, Generate ideas, Translate text) are universal enough to keep.

