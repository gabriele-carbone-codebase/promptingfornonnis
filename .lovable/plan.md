

## Summary

Create an Italian version of the discovery activities data file (`src/data/discoveryActivities.it.ts`) with all activity labels, use case titles, descriptions, and example prompts fully translated to Italian. Update the DiscoveryWizard to use the correct language file based on locale. The ChatGPT links will also use the Italian prompts.

## What Changes

### New file: `src/data/discoveryActivities.it.ts`
- Complete Italian translation of `discoveryActivities.ts`
- All 5 age buckets with their activities (labels, examplePrompts)
- All nested use cases (title, description, examplePrompt) translated
- Prompts rewritten in Italian following the same template structure ("Voglio:", "Come risultato mi aspetto di ricevere:", "Puoi aiutarmi?...")
- Same IDs and structure as the English version so the component logic stays identical

### Modified: `src/components/discovery/DiscoveryWizard.tsx`
- Import both `activitiesByAge` (EN) and a new `activitiesByAgeIt` (IT)
- Use `useLanguage()` to detect the current locale
- Select the correct data source: Italian activities when locale is `it`, English otherwise
- This automatically makes the ChatGPT links use Italian prompts since `item.prompt` drives the `?q=` parameter

### No changes to `useCasePrompts.ts`
The discovery flow uses its own data from `discoveryActivities`, not `useCasePrompts`. The existing use cases page already has its own separate data. This task only covers the discovery wizard content.

## Technical Details

The Italian prompt template mirrors the existing `promptBuilder` translations:
- "Voglio:" instead of "I want to:"
- "Come risultato mi aspetto di ricevere:" instead of "As a result I expect to receive:"
- "Puoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?" as closing

The component selects data like:
```tsx
const { language } = useLanguage();
const allActivities = language === "it" ? activitiesByAgeIt : activitiesByAge;
const activities = selectedAge ? allActivities[selectedAge] : [];
```

