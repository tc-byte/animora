import { useState, useEffect } from "react";

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("animora-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
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
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-50 bg-card border border-border rounded-xl p-5 shadow-lg animate-fade-in">
      <p className="text-sm text-muted-foreground mb-4">
        We use essential cookies and optional analytics cookies. See our{" "}
        <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
      </p>
      <div className="flex gap-3">
        <button onClick={accept} className="flex-1 h-9 text-sm rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors">
          Accept
        </button>
        <button onClick={decline} className="flex-1 h-9 text-sm rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors">
          Decline
        </button>
      </div>
    </div>
  );
};
