import { WaitlistForm } from "@/components/WaitlistForm";
import { Reveal3D, Card3D } from "@/components/ScrollAnimations";
import { useState } from "react";

const plans = [
  { name: "Free", pm: "$0", pa: "$0", sub: "3-day trial. No card.", features: ["Full access 3 days", "10 AI operations", "All exports"], cta: "Start Free", hl: false },
  { name: "Creator", pm: "$29", pa: "$24", sub: "For creators.", badge: "Most Popular", features: ["1,000 AI credits/mo", "Full pipeline", "Commercial license", "Voice input", "Priority processing"], cta: "Join Waitlist", hl: true },
  { name: "Studio", pm: "$99", pa: "$82", sub: "For teams.", features: ["Unlimited credits", "Team collab", "Asset library", "Style memory", "Priority support"], cta: "Join Waitlist", hl: false },
];

const PricingPage = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <section className="pt-32 pb-16 px-6 text-center ambient-glow noise-overlay">
        <Reveal3D>
          <h1 className="heading-display text-4xl md:text-[72px] text-foreground italic">Pricing</h1>
          <p className="mt-4 text-lg text-white/50 font-body">Try free. No card required.</p>
        </Reveal3D>
        <div className="flex items-center justify-center gap-3 mt-8 relative z-10">
          <span className={`text-sm font-body ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full p-0.5 transition-all ${annual ? "bg-primary" : "bg-white/[0.08]"}`}>
            <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${annual ? "translate-x-6" : ""}`} />
          </button>
          <span className={`text-sm font-body ${annual ? "text-foreground" : "text-muted-foreground"}`}>Annual</span>
          {annual && <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">Save 17%</span>}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
          {plans.map((p, i) => (
            <Card3D key={i} index={i} className={`relative text-left p-8 rounded-2xl ${p.hl ? "pricing-featured card-interactive" : "card-interactive"}`}>
              {p.badge && <span className="absolute -top-3 left-8 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">{p.badge}</span>}
              <h3 className="text-overline !text-muted-foreground/40">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-4xl text-foreground italic">{annual ? p.pa : p.pm}</span>
                <span className="text-sm text-white/25">{p.name === "Free" ? "" : annual ? "/mo annually" : "/month"}</span>
              </div>
              <p className="mt-2 text-sm text-white/35 font-body">{p.sub}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map(f => <li key={f} className="flex items-center gap-2.5 text-sm text-white/40 font-body"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" className="opacity-50"><polyline points="20 6 9 17 4 12" /></svg>{f}</li>)}
              </ul>
              <a href="#waitlist-pricing" className={`mt-8 w-full h-12 flex items-center justify-center rounded-xl text-sm font-medium transition-transform hover:scale-[1.02] ${p.hl ? "btn-primary" : "btn-secondary"}`}>{p.cta}</a>
            </Card3D>
          ))}
        </div>
      </section>

      <section id="waitlist-pricing" className="py-24 px-6 ambient-glow noise-overlay">
        <Reveal3D className="max-w-md mx-auto text-center relative z-10">
          <h2 className="heading-display text-4xl text-foreground italic">Start creating.</h2>
          <p className="mt-4 text-white/40 font-body">7 days free at launch.</p>
          <WaitlistForm source="pricing_page" className="mt-10" />
        </Reveal3D>
      </section>
    </div>
  );
};

export default PricingPage;
