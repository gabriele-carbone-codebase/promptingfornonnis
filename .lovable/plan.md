

# Add Photos of Elderly People to the Landing Page

## Summary
Add warm, relatable photos of older adults using phones and technology to three key sections of the landing page. We will use free stock photos from Unsplash, referenced directly by URL -- no backend or API key needed.

---

## Where the Images Will Go

### 1. Hero Section
Add a large, rounded hero image below the headline showing an elderly person happily using a smartphone or tablet. This immediately sets the tone: "this is for you."

### 2. "Who Is This For" Cards
Replace the abstract icons on each of the three persona cards with a circular photo of an older adult in a relatable situation (e.g., looking curious at a phone, puzzled at a screen, browsing casually).

### 3. Community Section
Add a wide photo strip or single image showing a group of older adults together with devices, reinforcing the "community" feel.

---

## Image Source
We will use **Unsplash** stock photos, which are free to use and can be loaded directly via URL (`https://images.unsplash.com/...`). Each image URL includes size parameters to keep load times fast.

---

## Technical Details

### Files to modify

**`src/components/landing/HeroSection.tsx`**
- Add an `<img>` tag after the subtitle text and before the CTA button
- The image will be rounded, have a subtle shadow, and be responsive
- Use `loading="lazy"` for performance

**`src/components/landing/WhoIsThisFor.tsx`**
- Replace the icon circles at the top of each card with circular `<img>` elements
- Each persona gets a distinct photo
- Images are sized at roughly 80x80px with `object-cover` and `rounded-full`

**`src/components/landing/CommunitySection.tsx`**
- Add a single wide image above the feature list, showing older people together with technology
- Rounded corners, constrained max-width, centered

### No new dependencies or backend changes needed
All images are loaded from external URLs. No storage buckets, no edge functions, no new packages.

