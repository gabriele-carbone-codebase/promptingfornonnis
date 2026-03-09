

## Fix: Allow lesson titles to wrap instead of truncate

Replace `truncate` with `whitespace-normal break-words` on the lesson title `h3` and subtitle `p` elements in `TrainingProgress.tsx`, and remove `min-w-0` / `truncate` constraints so text wraps naturally.

### File: `src/components/training/TrainingProgress.tsx`
- On the title `h3`: remove `truncate`, keep other classes
- On the subtitle `p`: remove `truncate`
- On the parent `div`: remove `min-w-0` (or keep it, it's fine either way)

This ensures long Italian titles wrap to the next line on mobile instead of being cut off.

