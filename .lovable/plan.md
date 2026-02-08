

# Update Prompt Builder Output Format & Step Wording

## Summary
This update will change the generated prompt format to be more conversational and friendly, update step titles to better clarify intent, and add visual "optional" badges to steps 2-5.

---

## Changes Overview

### 1. New Prompt Output Format

The generated prompt will now follow this structure:

```
I want to:
[goal from step 1]

As a result I expect to receive:
[expected result from step 2, if provided]

To help with this task, you will find the following attachments:
- [name] : [description]
[only shown if attachments were added]

As additional resources you can also navigate these webpages:
- [link] : [description]
[only shown if links were added]

For added context, these are some additional information:
[notes from step 5, if provided]

Can you help me? If so, how?
Do you need any additional information?
```

**File:** `src/hooks/usePromptBuilder.ts`
- Rewrite the `generatePrompt()` function to produce this exact format
- Only include sections when the user has actually filled them in

---

### 2. Step Title Updates

| Step | Current Title | New Title |
|------|--------------|-----------|
| 3 | "Do you want to add attachments?" | "Will you attach documents?" |

**File:** `src/components/wizard/StepAttachments.tsx`
- Update the heading text
- Update the helper text to emphasize these are references to files you'll upload separately

---

### 3. Add "Optional" Badges to Steps 2-5

Add a visual badge next to each title to make it crystal clear these steps can be skipped.

**Files to update:**
- `src/components/wizard/StepResult.tsx` - Add optional badge
- `src/components/wizard/StepAttachments.tsx` - Add optional badge
- `src/components/wizard/StepLinks.tsx` - Add optional badge
- `src/components/wizard/StepNotes.tsx` - Add optional badge

Each step will show a small pill/badge next to the title saying "Optional" in a subtle style.

---

## Technical Details

### `generatePrompt()` function changes

```text
Current format:
**Task:** [goal]
**Expected Result:** [result]
**Reference Attachments:**
- filename: description
**Reference Links:**
- url: description
**Additional Notes:** [notes]

New format:
I want to:
[goal]

As a result I expect to receive:
[result]

To help with this task, you will find the following attachments:
- [name] : [description]

As additional resources you can also navigate these webpages:
- [link] : [description]

For added context, these are some additional information:
[notes]

Can you help me? If so, how?
Do you need any additional information?
```

### Optional Badge Styling
- Small pill badge in muted/secondary color
- Positioned inline with the title or as a subtitle
- Text: "Optional" or "Skip if not needed"

---

## Files to Modify

1. `src/hooks/usePromptBuilder.ts` - New prompt format
2. `src/components/wizard/StepResult.tsx` - Add optional indicator
3. `src/components/wizard/StepAttachments.tsx` - New title + optional indicator
4. `src/components/wizard/StepLinks.tsx` - Add optional indicator
5. `src/components/wizard/StepNotes.tsx` - Add optional indicator

