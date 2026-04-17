import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ProductMockup } from "@/components/ProductMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";
import { useState, useRef } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const capabilities = [
  {
    title: "Modeling & Sculpting",
    desc: "From low-poly game props to film-quality character meshes. Procedural geometry, organic sculpting, hard-surface — all from natural language.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Rigging & Animation",
    desc: "Auto-rig any character. Keyframes with 12 animation principles applied automatically. Secondary motion, dynamics, lip sync.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="18" r="2" />
        <line x1="6" y1="8" x2="12" y2="16" /><line x1="18" y1="8" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    title: "Simulation & VFX",
    desc: "Cloth, fluid, fire, smoke, destruction, particles — all configured by describing what you need in plain language.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c2-4 6-4 8 0s6 4 8 0" /><path d="M2 6c2-4 6-4 8 0s6 4 8 0" /><path d="M2 18c2-4 6-4 8 0s6 4 8 0" />
      </svg>
    ),
  },
  {
    title: "Materials & Shaders",
    desc: "Describe any material — AI builds the full shader node tree. Rusted metal, wet skin, iridescent fabric. Procedural, no textures needed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </svg>
    ),
  },
];

const howItWorks = [
  { num: "01", title: "Describe", desc: "Type or speak your idea in plain language." },
  { num: "02", title: "Reads the scene", desc: "Animora reads your entire project — every object, material, layer." },
  { num: "03", title: "Executes like an expert", desc: "Selects the right tools, runs every operation with artistic judgment." },
  { num: "04", title: "You iterate naturally", desc: "Follow up: 'make it darker', 'add wind in the trees'." },
];

const faqItems = [
  { q: "Do I need creative or technical experience?", a: "No. If you can describe what you want in a sentence, Animora can build it. We built Animora specifically for people who have creative vision but not necessarily the years of technical skill traditionally required." },
  { q: "What kind of creative work can Animora do?", a: "Animora covers the complete 3D creative pipeline — modeling, sculpting, rigging, animation, simulation, materials, lighting, and rendering. It also handles game asset preparation for Unreal Engine, Unity, and Godot." },
  { q: "Is the output professionally usable?", a: "Yes. Animora's AI applies real professional standards — correct topology, physically accurate materials, cinematographic lighting. Output is production-ready." },
  { q: "How is this different from AI image generators?", a: "Image generators give you a flat picture. Animora gives you a fully editable creative project — live geometry, adjustable materials, animatable rigs. It's a creative studio, not a generator." },
  { q: "When does Animora launch?", a: "We're in active development and building in public. Join the waitlist for 7 days free at launch." },
  { q: "What happens to my projects and data?", a: "Your projects belong to you. We do not use your work to train AI models without your explicit consent." },
];

const Index = () => {
  const count = useWaitlistCount();
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative flex flex-col items-center px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.07] blur-[150px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] rounded-full bg-sky/[0.03] blur-[100px] pointer-events-none" />

        <motion.div className="max-w-[820px] mx-auto text-center pt-28 md:pt-36 relative z-10" variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium glass text-muted-foreground mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary glow-pulse" />
              By <span className="font-semibold text-foreground/90">EAT</span> · Now accepting early access signups
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-serif text-[44px] md:text-[76px] text-foreground leading-[1.05] tracking-[-0.02em]">
            AI-Native{" "}
            <span className="italic shimmer-text">3D Creation</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-[480px] mx-auto leading-relaxed">
            The Cursor for 3D · Powered by Pure Blender.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#waitlist" className="group h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:glow-primary transition-all duration-300 hover:scale-[1.02]">
              Join the Waitlist — 7 Days Free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <Link to="/features" className="h-12 px-6 flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full glass hover:bg-white/[0.04]">
              Watch the demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </Link>
          </motion.div>

          {/* Live waitlist social proof */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-accent/60" style={{ zIndex: 5 - i }} />
                ))}
              </div>
              <div className="text-sm">
                {count > 0 ? (
                  <span className="text-muted-foreground/70">
                    <span className="text-foreground font-semibold">{count.toLocaleString()}+</span> creators already joined
                  </span>
                ) : (
                  <span className="text-muted-foreground/60">Be among the first to join</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground/40">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                No spam, ever
              </span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Cancel anytime
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: mockupY, scale: mockupScale }}
        >
          <ProductMockup />
        </motion.div>
      </section>

      {/* WHY US — editorial serif headline + glass cards */}
      <section className="py-28 md:py-36 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-medium">Why Animora</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[48px] text-foreground tracking-[-0.02em] italic leading-[1.15]">
              The difference is everything.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: "⚡", title: "Days, Not Months", desc: "Concept to launch at a pace that redefines fast." },
              { icon: "◎", title: "Obsessively Crafted", desc: "Every detail considered. Every element refined." },
              { icon: "▊", title: "Built to Convert", desc: "Layouts informed by data. Decisions backed by performance." },
              { icon: "◌", title: "Secure by Default", desc: "Enterprise-grade protection comes standard." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 text-left"
              >
                <span className="text-lg text-muted-foreground/40 mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-base text-foreground mb-2 italic">{item.title}</h3>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SHIFT — conversation demo */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-medium">How It Works</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[44px] text-foreground leading-[1.15] tracking-[-0.02em] italic">
              Stays in flow.<br />Knows your scene.<br />Moves with you.
            </h2>
            <p className="mt-8 text-base text-muted-foreground max-w-[440px] leading-relaxed">
              Animora's AI reads your entire creative project — every object, layer, material, and timeline state. It acts like an expert collaborator who's been on your project from day one.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-5 border-b border-white/[0.04]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center">
                  <span className="text-[10px] text-foreground/60">You</span>
                </div>
              </div>
              <p className="text-foreground text-sm font-medium mt-2">Create a battle-damaged sword with a worn leather grip</p>
            </div>
            <div className="p-5">
              <div className="border-l-2 border-primary/40 bg-primary/[0.03] rounded-r-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="14" height="14" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100,22 36,94 100,106" fill="#C4B5FD"/>
                    <polygon points="100,22 164,94 100,106" fill="#7C3AED"/>
                    <polygon points="36,94 100,178 100,106" fill="#5B21B6"/>
                    <polygon points="164,94 100,178 100,106" fill="#2E1065"/>
                  </svg>
                  <span className="text-xs font-semibold text-primary/80">Animora · Modeling</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
                <div className="space-y-2.5 text-xs text-muted-foreground font-mono">
                  {[
                    "Base blade geometry — cylinder, scaled & tapered",
                    "Edge bevel — 0.02 width, 2 segments",
                    "Damage sculpt along blade edge",
                    "Guard mesh — cross-section extruded",
                    "Grip — leather wrap displacement",
                    "Material: steel PBR, roughness 0.15",
                    "Material: leather, subsurface scatter",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary/60 mt-0.5 text-sm">✓</span>
                      <span>{step}</span>
                    </motion.div>
                  ))}
                  <div className="flex items-start gap-2 text-primary/40">
                    <span className="animate-spin text-sm">⟳</span>
                    <span>Placing key light at 45°...</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground/50 font-mono">7 ops · 0 errors</span>
                  <span className="text-[10px] text-primary/50 font-mono">Undo available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-medium">Capabilities</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[44px] text-foreground tracking-[-0.02em] italic">
              The complete creative pipeline.
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-[480px] mx-auto">
              From first shape to final render — every tool, every technique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-2xl p-7 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-muted-foreground/60 mb-5">
                  {cap.icon}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2 italic">{cap.title}</h3>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-[44px] text-foreground tracking-[-0.02em] italic">From idea to creation.</h2>
            <p className="mt-4 text-muted-foreground">Four steps. No experience required.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {howItWorks.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <span className="text-xs text-primary/50 font-mono font-bold tracking-wider">{step.num}</span>
                <h3 className="font-serif text-sm text-foreground mt-2 mb-2 italic">{step.title}</h3>
                <p className="text-xs text-muted-foreground/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl md:text-[44px] text-foreground tracking-[-0.02em] italic">Simple pricing.</h2>
            <p className="mt-4 text-muted-foreground">Try it free. Upgrade when you're ready.</p>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm transition-colors ${!isAnnual ? "text-foreground font-medium" : "text-muted-foreground"}`}>Monthly</span>
            <button onClick={() => setIsAnnual(!isAnnual)} className={`w-12 h-6 rounded-full p-0.5 transition-all duration-300 ${isAnnual ? "bg-primary" : "bg-white/[0.08]"}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 shadow-sm ${isAnnual ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-sm transition-colors ${isAnnual ? "text-foreground font-medium" : "text-muted-foreground"}`}>Annual</span>
            {isAnnual && <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">Save 17%</span>}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {[
              {
                name: "Free", price: "$0", sub: "3-day trial",
                features: ["Full access for 3 days", "10 AI operations", "All export formats"],
                excluded: ["Commercial license"],
                cta: "Start Free", highlight: false,
              },
              {
                name: "Creator", price: isAnnual ? "$24" : "$29", sub: isAnnual ? "/mo annually" : "/month",
                badge: "Most Popular",
                features: ["Everything in Free", "1,000 AI credits/month", "Full creative pipeline", "Commercial license", "Voice input", "Priority processing"],
                excluded: [],
                cta: "Join Waitlist", highlight: true,
              },
              {
                name: "Studio", price: isAnnual ? "$82" : "$99", sub: isAnnual ? "/mo annually" : "/month",
                features: ["Everything in Creator", "Unlimited AI credits", "Team collaboration", "Asset library", "Custom style memory", "Priority support"],
                excluded: [],
                cta: "Join Waitlist", highlight: false,
              },
            ].map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative text-left p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlight
                    ? "glass-strong border-primary/20 scale-[1.02]"
                    : "glass-card"
                }`}
                style={plan.highlight ? { boxShadow: '0 0 60px rgba(124,58,237,0.1)' } : {}}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-8 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-medium">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-foreground italic">{plan.price}</span>
                  <span className="text-sm text-muted-foreground/50">{plan.sub}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground/70">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                  {plan.excluded.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" className={`mt-8 w-full h-11 flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 ${
                  plan.highlight ? "bg-primary text-primary-foreground hover:glow-primary hover:scale-[1.01]" : "glass text-foreground/80 hover:bg-white/[0.06]"
                }`}>
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground/50">
            Waitlist members get <span className="text-primary/70 font-medium">7 days free</span> at launch — double the standard trial.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[720px] mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-3xl md:text-[44px] text-foreground tracking-[-0.02em] text-center mb-12 italic"
          >
            Questions
          </motion.h2>
          {faqItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="border-b border-white/[0.04]"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-5 flex items-center justify-between text-left group"
              >
                <span className="text-foreground/80 text-base pr-4 group-hover:text-foreground transition-colors">{item.q}</span>
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`flex-shrink-0 text-muted-foreground/40 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === i ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p className="text-sm text-muted-foreground/60 leading-relaxed">{item.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUILD IN PUBLIC */}
      <section className="py-16 px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-medium">Built in Public</span>
          <h3 className="mt-4 font-serif text-2xl md:text-[28px] text-foreground italic">Follow the build. Shape the product.</h3>
          <p className="mt-4 text-base text-muted-foreground/60 max-w-[500px] mx-auto leading-relaxed">
            Building Animora in public from Nairobi, Kenya — sharing every milestone, breakthrough, and setback.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {[
              { label: "Instagram", href: "https://www.instagram.com/animo_raai?igsh=OTF3eHNsaXNpNDEy" },
              { label: "TikTok", href: "https://www.tiktok.com/@animora.ai6?_r=1&_t=ZS-95AS6f2WHkj" },
              { label: "YouTube", href: "https://www.youtube.com/@Anim_ora_ai" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-sm text-muted-foreground/60 glass hover:text-foreground hover:bg-white/[0.04] transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.08] blur-[120px] pointer-events-none" />
        <div className="max-w-md mx-auto text-center relative z-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-serif text-4xl md:text-[52px] text-foreground tracking-[-0.02em] italic"
          >
            Start creating.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground/60 max-w-[480px] mx-auto"
          >
            Join {count > 0 ? <span className="text-foreground/80 font-semibold">{count.toLocaleString()}+</span> : ""} creators on the waitlist. Get 7 days free when we launch.
          </motion.p>
          <WaitlistForm className="mt-10" />
        </div>
      </section>
    </div>
  );
};

export default Index;
