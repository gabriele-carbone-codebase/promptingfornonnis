

## Shift hero background image left on mobile

The hero image needs `object-position` adjusted so the lady's face is visible on narrow screens.

### Change in `src/components/landing/HeroSection.tsx`

Replace `object-center` with a responsive object position:
- Mobile: `object-[30%_center]` — shifts the visible area to the left
- Desktop (`sm:`): `object-center` — keeps centered on larger screens

```tsx
className="absolute inset-0 w-full h-full object-cover object-[30%_center] sm:object-center"
```

