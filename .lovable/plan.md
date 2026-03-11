

## Aggiunta Google Tag Manager (GTM-WCST9GH8)

### Cosa fare
Modificare `index.html` per inserire i due snippet GTM:

1. **Nel `<head>`** (il più in alto possibile): lo script GTM
2. **Subito dopo `<body>`**: il noscript/iframe fallback

Questo è sufficiente perché è una SPA — tutte le pagine condividono lo stesso `index.html`.

### File da modificare
- `index.html`: aggiungere entrambi gli snippet nelle posizioni corrette

