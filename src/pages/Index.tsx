import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Reveal3D, Card3D } from "@/components/ScrollAnimations";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";
import { useState, useRef } from "react";
import heroSculpture from "@/assets/hero-sculpture.png";
import hero3dCharacter from "@/assets/hero-3d-character.jpg";

/* ── Clean SVG Icons ── */
const IconPenTool = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const IconCpu = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </svg>
);

const IconExport = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3L14 10" />
    <path d="M21 3h-6M21 3v6" />
    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
  </svg>
);

const IconCube = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconFilm = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

const IconWaves = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
);

const IconPalette = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const IconMessage = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconEye = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconZap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconRefresh = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);


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
              { icon: <IconPenTool />, title: "Full Blender Power", desc: "Every tool, modifier, and node — accessible through natural language." },
              { icon: <IconCpu />, title: "AI Does The Work", desc: "The AI operates Blender like a pro artist. You direct, it executes." },
              { icon: <IconExport />, title: "Export Anywhere", desc: "Export to Unreal Engine, Unity, Godot, or any standard 3D format." },
            ].map((item, i) => (
              <Card3D key={i} index={i} className="card-elevated p-7 text-center group">
                <span className="block mb-3 text-primary/70 group-hover:text-primary transition-colors">{item.icon}</span>
                <h3 className="heading-section text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-white/35 font-body">{item.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES PREVIEW — Links to /features */}
      <section className="py-24 px-6 ambient-glow noise-overlay">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <Reveal3D className="text-center mb-16">
            <span className="text-overline mb-4 block">Capabilities</span>
            <h2 className="heading-display text-4xl md:text-[56px] text-foreground italic leading-[0.92]">Everything you need.</h2>
            <p className="mt-4 text-body text-lg max-w-[520px] mx-auto">Modeling, rigging, animation, simulation, materials, lighting — the full pipeline.</p>
          </Reveal3D>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Modeling", d: "AI-driven mesh creation with proper topology.", icon: <IconCube /> },
              { n: "02", t: "Animation", d: "Auto-rigging and keyframe generation.", icon: <IconFilm /> },
              { n: "03", t: "Simulation", d: "Cloth, fluid, fire — real physics.", icon: <IconWaves /> },
              { n: "04", t: "Materials", d: "Full shader node trees, PBR-ready.", icon: <IconPalette /> },
            ].map((s, i) => (
              <Card3D key={i} index={i} className="card-elevated p-7 text-center group">
                <span className="block mb-3 text-primary/70 group-hover:text-primary transition-colors">{s.icon}</span>
                <span className="block text-4xl font-display italic text-primary/25 mb-3">{s.n}</span>
                <h3 className="heading-section text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{s.t}</h3>
                <p className="text-xs text-white/35 font-body">{s.d}</p>
              </Card3D>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/features" className="btn-secondary text-sm px-8 py-3.5 inline-flex items-center gap-2">
              Explore All Features
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <Reveal3D className="text-center mb-16">
            <span className="text-overline mb-4 block">How It Works</span>
            <h2 className="heading-display text-4xl md:text-[56px] text-foreground italic leading-[0.92]">Describe. Create. Iterate.</h2>
          </Reveal3D>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Describe", d: "Type what you want in plain English.", icon: <IconMessage /> },
              { n: "02", t: "AI reads scene", d: "Animora analyzes every object, material, layer.", icon: <IconEye /> },
              { n: "03", t: "AI executes", d: "Like an expert Blender artist — right tools, right techniques.", icon: <IconZap /> },
              { n: "04", t: "Iterate", d: "'Make it darker', 'add wind', 'more detail'.", icon: <IconRefresh /> },
            ].map((s, i) => (
              <Card3D key={i} index={i} className="card-elevated p-7 text-center group">
                <span className="block mb-3 text-primary/70 group-hover:text-primary transition-colors">{s.icon}</span>
                <span className="block text-4xl font-display italic text-primary/25 mb-3">{s.n}</span>
                <h3 className="heading-section text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{s.t}</h3>
                <p className="text-xs text-white/35 font-body">{s.d}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW — Links to /pricing */}
      <section className="py-24 px-6 ambient-glow noise-overlay">
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <Reveal3D>
            <h2 className="heading-display text-4xl md:text-[56px] text-foreground italic">Simple pricing.</h2>
            <p className="mt-3 text-body text-lg">Try free. Upgrade when ready.</p>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {[
                { name: "Free", price: "$0", desc: "3-day trial" },
                { name: "Creator", price: "$29", desc: "/month", featured: true },
                { name: "Studio", price: "$99", desc: "/month" },
              ].map((plan, i) => (
                <Card3D key={i} index={i} className={`text-center p-8 rounded-2xl ${plan.featured ? "pricing-featured card-interactive" : "card-interactive"}`}>
                  <h3 className="text-overline !text-muted-foreground/40">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1 justify-center">
                    <span className="font-display text-4xl text-foreground italic">{plan.price}</span>
                    <span className="text-sm text-white/30">{plan.desc}</span>
                  </div>
                </Card3D>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/pricing" className="btn-primary text-sm px-8 py-3.5 inline-flex items-center gap-2">
                View Full Pricing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </Reveal3D>
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
            {[
              { label: "Instagram", href: "https://www.instagram.com/animo_raai", icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              )},
              { label: "TikTok", href: "https://www.tiktok.com/@animora.ai6", icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.5V7.12a4.83 4.83 0 0 1-1-.43z" />
                </svg>
              )},
              { label: "YouTube", href: "https://www.youtube.com/@animorabyEAT", icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              )},
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm inline-flex items-center gap-2">
                {s.icon}
                {s.label}
              </a>
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
