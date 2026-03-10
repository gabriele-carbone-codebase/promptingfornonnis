

## Modifica pulsante ChatGPT nelle card Use Cases

### Cosa cambia
Nel file `src/pages/UseCases.tsx`, il pulsante ChatGPT nella `PromptCard`:
1. Rimuovere il testo "ChatGPT", lasciando solo l'icona/logo
2. Cambiare lo stile del pulsante: sfondo verde (#74aa9c, il colore del logo ChatGPT) con icona bianca o logo visibile
3. Usare `size="icon"` invece di `size="sm"`

### Dettagli tecnici
- Riga ~78-85 di `src/pages/UseCases.tsx`: modificare il `Button` da `variant="outline" size="sm"` a `size="icon"` con classe custom `bg-[#74aa9c] hover:bg-[#74aa9c]/90 text-white`
- Rimuovere il testo "ChatGPT" e il `mr-1` dall'immagine
- Applicare lo stesso stile anche al pulsante ChatGPT in `src/pages/MyPrompts.tsx` per consistenza

