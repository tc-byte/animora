CREATE OR REPLACE VIEW waitlist_with_stats AS
SELECT
  id,
  name,
  email,
  status,
  trial_days,
  source,
  referrer,
  created_at AT TIME ZONE 'Africa/Nairobi' AS signed_up_nairobi,
  COUNT(*) OVER() AS total_signups
FROM waitlist
ORDER BY created_at DESC;