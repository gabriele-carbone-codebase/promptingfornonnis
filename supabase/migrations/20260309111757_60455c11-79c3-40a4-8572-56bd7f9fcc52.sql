create table public.training_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  completed_lessons integer[] not null default '{}',
  updated_at timestamptz not null default now(),
  unique (user_id)
);

alter table public.training_progress enable row level security;

create policy "Users can view own progress" on public.training_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress" on public.training_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress" on public.training_progress for update using (auth.uid() = user_id);