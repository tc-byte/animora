import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const plans = [
  {
    name: "Free", price: { monthly: "$0", annual: "$0" }, sub: "3-day free trial. No card required.",
    features: { "AI credits/month": "10", "Trial period": "3 days", "Commercial license": false, "Modeling & sculpting": true, "Rigging & animation": true, "Simulation & VFX": true, "Materials pipeline": true, "Lighting & render config": true, "Game export pipeline": true, "Voice input": false, "Priority processing": false, "Team collaboration": false, "Asset library": false, "Custom style memory": false, "Support": "Community" },
    cta: "Start Free", highlight: false,
  },
  {
    name: "Creator", price: { monthly: "$29", annual: "$24" }, sub: "For individual creators.",
    badge: "Most Popular",
    features: { "AI credits/month": "1,000", "Trial period": "3 days", "Commercial license": true, "Modeling & sculpting": true, "Rigging & animation": true, "Simulation & VFX": true, "Materials pipeline": true, "Lighting & render config": true, "Game export pipeline": true, "Voice input": true, "Priority processing": true, "Team collaboration": false, "Asset library": false, "Custom style memory": false, "Support": "Email" },
    cta: "Join Waitlist", highlight: true,
  },
  {
    name: "Studio", price: { monthly: "$99", annual: "$82" }, sub: "For power users and teams.",
    features: { "AI credits/month": "Unlimited", "Trial period": "3 days", "Commercial license": true, "Modeling & sculpting": true, "Rigging & animation": true, "Simulation & VFX": true, "Materials pipeline": true, "Lighting & render config": true, "Game export pipeline": true, "Voice input": true, "Priority processing": true, "Team collaboration": true, "Asset library": true, "Custom style memory": true, "Support": "Priority" },
    cta: "Join Waitlist", highlight: false,
  },
];

const featureRows = Object.keys(plans[0].features);

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="py-20 px-6 text-center">
        <motion.h1 {...fadeUp} className="text-4xl md:text-[56px] font-light text-foreground tracking-[-0.04em]">
          Pricing
        </motion.h1>
        <motion.p {...fadeUp} className="mt-4 text-lg text-muted-foreground">
          Try Animora free. No card required.
        </motion.p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <span className={`text-sm ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <button onClick={() => setIsAnnual(!isAnnual)} className={`w-12 h-6 rounded-full p-0.5 transition-colors ${isAnnual ? "bg-primary" : "bg-border"}`}>
            <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${isAnnual ? "translate-x-6" : ""}`} />
          </button>
          <span className={`text-sm ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Annual</span>
          {isAnnual && <span className="text-xs px-2 py-0.5 rounded-full bg-purple-light text-primary">Save 17%</span>}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
              className={`relative text-left p-8 rounded-2xl border ${plan.highlight ? "border-primary shadow-lg shadow-primary/10" : "border-border"} bg-card`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-light text-foreground">{isAnnual ? plan.price.annual : plan.price.monthly}</span>
                <span className="text-sm text-muted-foreground">{plan.name === "Free" ? "" : isAnnual ? "/mo billed annually" : "/month"}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.sub}</p>
              <a href="#waitlist-pricing" className={`mt-8 w-full h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary-hover" : "border border-primary text-primary hover:bg-purple-light"
              }`}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 text-muted-foreground font-normal">Feature</th>
                {plans.map((p) => (
                  <th key={p.name} className="text-center py-4 text-foreground font-medium">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr key={row} className="border-b border-border/50">
                  <td className="py-3 text-muted-foreground">{row}</td>
                  {plans.map((p) => {
                    const val = p.features[row as keyof typeof p.features];
                    return (
                      <td key={p.name} className="text-center py-3">
                        {typeof val === "boolean" ? (
                          val ? <span className="text-primary">✓</span> : <span className="text-muted-foreground/30">—</span>
                        ) : (
                          <span className="text-foreground text-xs">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="waitlist-pricing" className="py-32 px-6 gradient-cta">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-light text-foreground tracking-[-0.03em]">Start creating with Animora.</h2>
          <p className="mt-4 text-muted-foreground">Join the waitlist. Get 7 days free when we launch.</p>
          <WaitlistForm source="pricing_page" className="mt-10" />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
