import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ImageShowcase, Reveal3D, Card3D } from "@/components/ScrollAnimations";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";
import { useState, useRef } from "react";
import heroSculpture from "@/assets/hero-sculpture.png";
import hero3dCharacter from "@/assets/hero-3d-character.jpg";
import featureModeling from "@/assets/feature-modeling.png";
import featureRigging from "@/assets/feature-rigging.png";
import featureSimulation from "@/assets/feature-simulation.png";
import featureMaterials from "@/assets/feature-materials.png";

const slides = [
  { img: featureModeling, label: "01", title: "Modeling &\nSculpting", desc: "From low-poly game props to film-quality meshes — just describe what you want." },
  { img: featureRigging, label: "02", title: "Rigging &\nAnimation", desc: "Auto-rig any character. The 12 principles of animation applied automatically." },
  { img: featureSimulation, label: "03", title: "Simulation\n& VFX", desc: "Cloth, fluid, fire, smoke — configured by plain language, powered by real physics." },
  { img: featureMaterials, label: "04", title: "Materials &\nShaders", desc: "AI builds full shader node trees. Procedural, PBR-ready, no textures needed." },
];

const faqs = [
  { q: "Do I need 3D experience to use Animora?", a: "No. If you can describe what you want, Animora's AI will build it — like having an expert Blender artist at your side." },
  { q: "What is Animora exactly?", a: "Animora is a professional 3D creation studio powered by AI. It's built on industry-standard open-source technology, giving you access to the same tools the pros use — but the AI operates them for you." },
  { q: "What kind of 3D work can it do?", a: "The complete pipeline — modeling, sculpting, rigging, animation, simulation, materials, lighting, and rendering." },
  { q: "Is the output professionally usable?", a: "Yes. Correct topology, accurate materials, cinematographic lighting. Production-ready." },
  { q: "How is this different from AI image generators?", a: "Image generators give flat pictures. Animora gives fully editable 3D geometry, materials, rigs, and animations." },
  { q: "Can I export to game engines?", a: "Yes. Export to Unreal Engine, Unity, Godot, and all standard formats like FBX, glTF, OBJ, USD." },
  { q: "When does Animora launch?", a: "We're in active development. Join the waitlist for 7 days free at launch." },
];

const Index = () => {
  const count = useWaitlistCount();
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0 will-change-transform" style={{ scale: heroScale }}>
          <img src={heroSculpture} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0f]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10" />
        </motion.div>
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold border border-white/15 bg-white/[0.08] text-white/80 mb-5 font-body backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            By EAT · Now accepting early access
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-[50px] md:text-[96px] lg:text-[115px] text-white leading-[0.88] tracking-[-0.04em]">
            AI-Native<br /><span className="italic text-gradient-warm">3D Creation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-white/70 max-w-[460px] mx-auto font-body font-medium">
            Blender's full power. Zero learning curve.<br className="hidden sm:block" />
            Just describe what you want to create.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-3 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-primary/60 to-purple-dark/60" style={{ zIndex: 5-i }} />)}
            </div>
            <span className="text-sm text-white/60 font-body font-medium">
              {count > 0 ? <><span className="text-white font-bold">{count.toLocaleString()}+</span> creators joined</> : "Be among the first"}
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 flex flex-col sm:flex-row items-center gap-3">
            <a href="#waitlist" className="btn-primary text-base px-8 py-4">
              Join the Waitlist
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </a>
            <Link to="/features" className="btn-secondary text-base px-8 py-4">See Features</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* MOCKUP */}
      <Reveal3D className="py-10 px-6">
        <div className="max-w-[960px] mx-auto rounded-2xl overflow-hidden shadow-deep border border-white/[0.06] bg-[#0b0b10]">
          <div className="flex items-center px-4 py-3 border-b border-white/[0.04] bg-white/[0.015]">
            <div className="flex gap-[7px]">{[0,1,2].map(i=><div key={i} className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />)}</div>
            <div className="flex-1 text-center"><span className="text-[11px] text-white/20 font-mono-code">animora — Untitled Scene</span></div>
          </div>
          <div className="relative h-[220px] md:h-[380px]">
            <img src={hero3dCharacter} alt="3D character" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10]/40 via-transparent to-[#0b0b10]/15" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-white/30 font-mono-code">AI Working · 3 steps complete</span>
            </div>
          </div>
        </div>
      </Reveal3D>

      {/* WHAT IS ANIMORA */}
      <section className="py-20 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal3D>
            <span className="text-overline mb-4 block">What is Animora?</span>
            <h2 className="heading-display text-3xl md:text-[52px] text-foreground italic leading-[0.95]">Professional 3D.<br />No experience needed.</h2>
            <p className="mt-6 text-body text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
              Animora is a professional-grade 3D creation studio with an AI that works like an experienced artist. Built on powerful open-source foundations, it gives you access to industry-standard tools without the years of learning. Just describe what you want to create.
            </p>
          </Reveal3D>
          <div className="grid md:grid-cols-3 gap-4 mt-14">
            {[
              { icon: "🎨", title: "Full Blender Power", desc: "Every tool, modifier, and node — accessible through natural language." },
              { icon: "🤖", title: "AI Does The Work", desc: "The AI operates Blender like a pro artist. You direct, it executes." },
              { icon: "🚀", title: "Export Anywhere", desc: "Export to Unreal Engine, Unity, Godot, or any standard 3D format." },
            ].map((item, i) => (
              <Card3D key={i} index={i} className="card-elevated p-7 text-center group">
                <span className="block text-3xl mb-3">{item.icon}</span>
                <h3 className="heading-section text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-white/35 font-body">{item.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <ImageShowcase slides={slides} />

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 ambient-glow noise-overlay">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <Reveal3D className="text-center mb-16">
            <span className="text-overline mb-4 block">How It Works</span>
            <h2 className="heading-display text-4xl md:text-[56px] text-foreground italic leading-[0.92]">Describe. Create. Iterate.</h2>
          </Reveal3D>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Describe", d: "Type what you want in plain English.", icon: "💬" },
              { n: "02", t: "AI reads scene", d: "Animora analyzes every object, material, layer.", icon: "🔍" },
              { n: "03", t: "AI executes", d: "Like an expert Blender artist — right tools, right techniques.", icon: "⚡" },
              { n: "04", t: "Iterate", d: "'Make it darker', 'add wind', 'more detail'.", icon: "🔄" },
            ].map((s, i) => (
              <Card3D key={i} index={i} className="card-elevated p-7 text-center group">
                <span className="block text-3xl mb-3">{s.icon}</span>
                <span className="block text-4xl font-display italic text-primary/25 mb-3">{s.n}</span>
                <h3 className="heading-section text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{s.t}</h3>
                <p className="text-xs text-white/35 font-body">{s.d}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal3D>
            <h2 className="heading-display text-4xl md:text-[56px] text-foreground italic">Simple pricing.</h2>
            <p className="mt-3 text-body text-lg">Try free. Upgrade when ready.</p>
          </Reveal3D>
          <div className="flex items-center justify-center gap-3 mt-7">
            <span className={`text-sm font-body ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button onClick={() => setIsAnnual(!isAnnual)} className={`w-12 h-6 rounded-full p-0.5 transition-all ${isAnnual ? "bg-primary" : "bg-white/[0.08]"}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform duration-300 ${isAnnual ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-sm font-body ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>Annual</span>
            {isAnnual && <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">Save 17%</span>}
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {[
              { name: "Free", price: "$0", sub: "3-day trial", features: ["Full access 3 days", "10 AI operations", "All exports"], cta: "Start Free", hl: false },
              { name: "Creator", price: isAnnual ? "$24" : "$29", sub: isAnnual ? "/mo annually" : "/month", badge: "Most Popular", features: ["1,000 AI credits/mo", "Full pipeline", "Commercial license", "Voice input"], cta: "Join Waitlist", hl: true },
              { name: "Studio", price: isAnnual ? "$82" : "$99", sub: isAnnual ? "/mo annually" : "/month", features: ["Unlimited credits", "Team collab", "Asset library", "Priority support"], cta: "Join Waitlist", hl: false },
            ].map((plan, i) => (
              <Card3D key={i} index={i} className={`relative text-left p-8 rounded-2xl ${plan.hl ? "pricing-featured card-interactive" : "card-interactive"}`}>
                {plan.badge && <span className="absolute -top-3 left-8 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">{plan.badge}</span>}
                <h3 className="text-overline !text-muted-foreground/40">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl text-foreground italic">{plan.price}</span>
                  <span className="text-sm text-white/30">{plan.sub}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/45 font-body">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" className="opacity-60"><polyline points="20 6 9 17 4 12" /></svg>{f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" className={`mt-8 w-full h-12 flex items-center justify-center rounded-xl text-sm font-medium transition-transform hover:scale-[1.02] ${plan.hl ? "btn-primary" : "btn-secondary"}`}>{plan.cta}</a>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-[700px] mx-auto">
          <Reveal3D className="text-center mb-12">
            <h2 className="heading-display text-4xl md:text-[48px] text-foreground italic">Questions</h2>
          </Reveal3D>
          {faqs.map((item, i) => (
            <Reveal3D key={i} delay={i * 0.03} className="border-b border-white/[0.06]">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full py-5 flex items-center justify-between text-left group">
                <span className="text-white/60 text-[15px] pr-4 group-hover:text-white/90 transition-colors font-body">{item.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`text-white/25 transition-transform duration-500 ${openFaq === i ? "rotate-180" : ""}`}><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p className="text-sm text-white/35 leading-relaxed font-body">{item.a}</p>
              </div>
            </Reveal3D>
          ))}
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-16 px-6">
        <Reveal3D className="max-w-2xl mx-auto text-center">
          <span className="text-overline">Built in Public</span>
          <h3 className="mt-3 heading-section text-2xl text-foreground">Follow the build.</h3>
          <p className="mt-4 text-body max-w-[400px] mx-auto">Building from Nairobi, Kenya.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {[{ label: "Instagram", href: "https://www.instagram.com/animo_raai" }, { label: "TikTok", href: "https://www.tiktok.com/@animora.ai6" }, { label: "YouTube", href: "https://www.youtube.com/@Anim_ora_ai" }].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">{s.label}</a>
            ))}
          </div>
        </Reveal3D>
      </section>

      {/* CTA */}
      <section id="waitlist" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroSculpture} alt="" className="w-full h-full object-cover opacity-12" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-indigo-900/5" />
        </div>
        <Reveal3D className="max-w-md mx-auto text-center relative z-10">
          <h2 className="heading-display text-5xl md:text-[64px] text-foreground italic leading-[0.92]">Start creating.</h2>
          <p className="mt-6 text-lg text-white/50 font-body">
            Join {count > 0 ? <span className="text-white/80 font-semibold">{count.toLocaleString()}+</span> : ""} creators. 7 days free.
          </p>
          <WaitlistForm className="mt-8" />
        </Reveal3D>
      </section>
    </div>
  );
};

export default Index;
