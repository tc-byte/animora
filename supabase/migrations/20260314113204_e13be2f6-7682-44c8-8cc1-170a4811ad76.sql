CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT DEFAULT 'landing_page',
  trial_days INTEGER DEFAULT 7,
  status TEXT DEFAULT 'pending',
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  notified_at TIMESTAMPTZ
);

CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS waitlist_status_idx ON public.waitlist(status);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_public_inserts" ON public.waitlist
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_authenticated_inserts" ON public.waitlist
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "allow_owner_read" ON public.waitlist
  FOR SELECT TO authenticated USING (true);

CREATE OR REPLACE VIEW public.waitlist_count AS
  SELECT COUNT(*) AS total FROM public.waitlist;

GRANT SELECT ON public.waitlist_count TO anon;
GRANT SELECT ON public.waitlist_count TO authenticated;