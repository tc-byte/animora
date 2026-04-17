CREATE OR REPLACE VIEW public.waitlist_count WITH (security_invoker = on) AS
  SELECT COUNT(*) AS total FROM public.waitlist;