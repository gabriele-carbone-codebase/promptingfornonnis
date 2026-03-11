

## Fix NonniPopup accessibility on dark backgrounds

The popup uses `bg-accent/30` with `backdrop-blur-sm`, which becomes unreadable over dark sections like the hero image.

### Change in `src/components/landing/NonniPopup.tsx`
Replace the translucent background with a solid, opaque background:
- Change `bg-accent/30 backdrop-blur-sm` to `bg-white shadow-xl`
- Ensure `text-card-foreground` and `text-muted-foreground` remain readable against the solid white background
- Add a stronger border for definition: `border-border`

This guarantees readability regardless of what content is behind the popup.

