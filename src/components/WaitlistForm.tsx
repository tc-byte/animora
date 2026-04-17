import { useState, FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";

type Status = "idle" | "loading" | "success" | "exists" | "error";

interface WaitlistFormProps {
  source?: string;
  className?: string;
}

export const WaitlistForm = ({ source = "landing_page", className = "" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    const { error } = await supabase.from("waitlist").insert([
      {
        email,
        name: name || null,
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
      supabase.functions.invoke('notify-waitlist', {
        body: {
          name: name || null,
          email,
          created_at: new Date().toISOString(),
        }
      }).catch(() => {});
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center animate-fade-in ${className}`}>
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl glass flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-foreground mb-2 italic">You're on the list.</h3>
        <p className="text-sm text-muted-foreground/60 leading-relaxed">
          We'll email you when Animora launches. You get 7 days free as a founding member.
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
        className="w-full h-12 px-4 rounded-xl glass text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200"
      />
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full h-12 px-4 rounded-xl glass text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200"
      />
      {status === "exists" && (
        <p className="text-sm text-primary/70 font-medium flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          You're already on the list — see you at launch.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive/70 flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          Something went wrong. Try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium hover:glow-primary hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
            Joining...
          </>
        ) : (
          <>
            Join the Waitlist — 7 Days Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground/30 text-center mt-4">No spam. Unsubscribe any time.</p>
    </form>
  );
};
