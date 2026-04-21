import { useState, useEffect } from "react";

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("animora-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("animora-cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("animora-cookie-consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-card border border-white/[0.08] rounded-xl p-4 shadow-float animate-slide-up">
      <p className="text-[13px] text-white/50 mb-3 leading-relaxed">
        We use essential cookies and optional analytics cookies. See our{" "}
        <a href="/cookies" className="text-primary/80 hover:text-primary transition-colors">Cookie Policy</a>.
      </p>
      <div className="flex gap-2">
        <button onClick={accept} className="flex-1 h-8 text-[13px] rounded-lg bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all">
          Accept
        </button>
        <button onClick={decline} className="flex-1 h-8 text-[13px] rounded-lg border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/[0.12] transition-all">
          Decline
        </button>
      </div>
    </div>
  );
};
