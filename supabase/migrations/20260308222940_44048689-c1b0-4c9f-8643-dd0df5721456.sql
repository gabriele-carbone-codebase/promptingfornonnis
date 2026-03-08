ALTER TABLE public.prompts ADD COLUMN language text NOT NULL DEFAULT 'en';
ALTER TABLE public.profiles ADD COLUMN preferred_language text NOT NULL DEFAULT 'en';