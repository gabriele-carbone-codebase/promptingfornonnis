

## Fix: Lezione 1 ha colore diverso dalle altre completate

### Problema
Quando tutte le lezioni sono completate, `currentLesson` viene impostato a `1` (fallback). La lezione 1 risulta quindi sia `isCurrent` che `isCompleted`. Lo stile `isCurrent` (blu/primary) ha priorità su quello `isCompleted` (verde), causando il colore diverso.

### Soluzione
In `src/components/training/TrainingProgress.tsx`, modificare la logica di stile alla riga 59: quando una lezione è sia `isCurrent` che `isCompleted`, applicare lo stile verde completato invece di quello primary.

```tsx
// Cambiare da:
isCurrent && "border-primary bg-primary/5 shadow-soft",
isCompleted && !isCurrent && "border-success/50 bg-success/5",

// A:
isCurrent && !isCompleted && "border-primary bg-primary/5 shadow-soft",
isCompleted && "border-success/50 bg-success/5",
```

Stesso approccio per il cerchio numerato (riga 69): se completata, mostrare sempre il verde anche se è la lezione corrente.

