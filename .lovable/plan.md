

## Piano: Persistenza progressi training (localStorage + database)

### Approccio
- **Utenti non loggati**: salvare `completedLessons` in localStorage
- **Utenti loggati**: salvare in una tabella `training_progress` nel database, sincronizzando al login

### Modifiche

**1. Nuova tabella `training_progress`** (migrazione SQL)
```sql
create table public.training_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  completed_lessons integer[] not null default '{}',
  updated_at timestamptz not null default now(),
  unique (user_id)
);
alter table public.training_progress enable row level security;
-- RLS: utenti possono leggere/scrivere solo i propri progressi
create policy "Users can view own progress" on public.training_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.training_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.training_progress for update using (auth.uid() = user_id);
```

**2. Nuovo hook `src/hooks/useTrainingProgress.ts`**
- Al mount: carica `completedLessons` da localStorage
- Se l'utente è autenticato: carica dal database e fa merge (unione) con localStorage
- Al completamento di una lezione: salva in localStorage **e** nel database (se loggato) con upsert
- Espone: `completedLessons`, `markLessonComplete(lessonId)`

**3. Aggiornamento `src/pages/Training.tsx`**
- Sostituire lo stato locale `completedLessons` con il nuovo hook `useTrainingProgress`
- `handleLessonComplete` chiamerà `markLessonComplete(currentLesson)` dal hook
- `currentLesson` iniziale calcolato come primo non completato (così l'utente riparte da dove aveva lasciato)

### Flusso utente
1. Utente non loggato completa lezioni 1-2 → salvate in localStorage
2. Chiude il browser, ritorna → lezioni 1-2 risultano completate, parte dalla 3
3. Se fa login → i progressi localStorage vengono sincronizzati nel database
4. Su un altro dispositivo (loggato) → vede gli stessi progressi dal database

