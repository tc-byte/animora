DROP VIEW IF EXISTS public.waitlist_count;
CREATE VIEW public.waitlist_count WITH (security_invoker=off) AS
  SELECT count(*) AS total FROM public.waitlist;
GRANT SELECT ON public.waitlist_count TO anon, authenticated;