import { useState, useRef, FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

type Status = "idle" | "loading" | "success" | "exists" | "error" | "rate-limited";

interface WaitlistFormProps {
  source?: string;
  className?: string;
}

// Basic email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Sanitize text input — strip HTML tags and trim
const sanitize = (input: string): string => {
  return input.replace(/<[^>]*>/g, "").trim();
};

// Rate limit: max 3 submissions per 60 seconds
const RATE_LIMIT_COUNT = 3;
const RATE_LIMIT_WINDOW = 60_000;

export const WaitlistForm = ({
  source = "landing_page",
  className = "",
}: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const submissionTimestamps = useRef<number[]>([]);

  const isRateLimited = (): boolean => {
    const now = Date.now();
    // Remove timestamps outside the window
    submissionTimestamps.current = submissionTimestamps.current.filter(
      (ts) => now - ts < RATE_LIMIT_WINDOW
    );
    return submissionTimestamps.current.length >= RATE_LIMIT_COUNT;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const cleanEmail = sanitize(email).toLowerCase();
    const cleanName = sanitize(name);

    // Validate email
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return;
    }

    // Validate name length
    if (cleanName.length > 100) {
      return;
    }

    // Rate limit check
    if (isRateLimited()) {
      setStatus("rate-limited");
      return;
    }

    setStatus("loading");
    submissionTimestamps.current.push(Date.now());

    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          email: cleanEmail,
          name: cleanName || null,
          source,
          trial_days: 7,
          referrer: document.referrer || null,
        },
      ]);

      if (error) {
        if (error.code === "23505") setStatus("exists");
        else setStatus("error");
      } else {
        setStatus("success");
        supabase.functions
          .invoke("notify-waitlist", {
            body: {
              name: cleanName || null,
              email: cleanEmail,
              created_at: new Date().toISOString(),
            },
          })
          .catch(() => {});
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center animate-fade-in-up ${className}`}>
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-1.5 font-display italic">
          You're on the list.
        </h3>
        <p className="text-sm text-white/40 leading-relaxed font-body">
          We'll email you when Animora launches. You get 7 days free as a
          founding member.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={100}
        autoComplete="name"
        className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-foreground text-sm placeholder:text-white/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-300 font-body"
      />
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={254}
        autoComplete="email"
        className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-foreground text-sm placeholder:text-white/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all duration-300 font-body"
      />
      {status === "exists" && (
        <p className="text-sm text-primary/80 font-medium flex items-center gap-1.5 px-1 font-body">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          You're already on the list — see you at launch.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400/80 flex items-center gap-1.5 px-1 font-body">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          Something went wrong. Try again.
        </p>
      )}
      {status === "rate-limited" && (
        <p className="text-sm text-yellow-400/80 flex items-center gap-1.5 px-1 font-body">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          Too many attempts. Please wait a moment.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full h-12 rounded-xl text-sm font-medium transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 btn-primary font-body"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Joining...
          </>
        ) : (
          <>
            Join Waitlist — 7 Days Free
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
      <p className="text-[11px] text-white/25 text-center pt-1 font-body">
        No spam. Unsubscribe any time.
      </p>
    </form>
  );
};
