

## Problem
The "Indietro" and "Mostrami cosa può fare l'IA" buttons in Step 2 of the DiscoveryWizard sit too close to the screen edges on mobile because the outer container (`container max-w-2xl`) lacks sufficient horizontal padding.

## Solution
Add horizontal padding (`px-4`) to the root `div` of the DiscoveryWizard component (line 75), changing:
```
className="container max-w-2xl py-12 space-y-8"
```
to:
```
className="container max-w-2xl py-12 px-4 space-y-8"
```

This adds consistent side padding across all three steps, preventing buttons and content from touching the viewport edges on small screens.

