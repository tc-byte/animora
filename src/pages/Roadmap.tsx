import { Reveal3D, Card3D } from "@/components/ScrollAnimations";

const phases = [
  { title: "Foundation", badge: "IN PROGRESS", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", pulse: true, items: ["AI command panel inside the studio", "Scene reading — understands every object, layer, state", "Modeling and material ops via natural language", "Quality gate — AI validates its own output", "Core undo/redo system"] },
  { title: "Full Modeling & Materials", badge: "NEXT", color: "bg-primary/10 text-primary/70 border-primary/15", items: ["Complete modeling for any object type", "Procedural geometry nodes", "Full sculpting pipeline", "Shader node generation", "Auto-repair mesh quality"] },
  { title: "Character Pipeline", badge: "PLANNED", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["Auto-rigging humanoid and non-human", "AI weight painting", "Facial rig with shape keys", "Character material workflows"] },
  { title: "Animation", badge: "PLANNED", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["Keyframe generation — 12 principles", "NLA editor for layered motion", "Camera animation", "AI-driven timing and spacing"] },
  { title: "Simulation & VFX", badge: "PLANNED", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["Cloth with real physics", "Fluid, fire, smoke", "Rigid body destruction", "Particle systems by description"] },
  { title: "Voice & Vision", badge: "PLANNED", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["Real-time voice commands", "Viewport analysis — proactive issues", "Reference image understanding"] },
  { title: "Game Export", badge: "PLANNED", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["LOD generation", "Texture baking", "Engine export: Unreal, Unity, Godot", "Collision mesh generation"] },
  { title: "2D & Motion", badge: "PLANNED", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["Motion graphics pipeline", "2D illustration", "Animated typography", "Compositing"] },
  { title: "Public Launch", badge: "PLANNED", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["Subscription billing", "Credit system", "User dashboard", "Public access"] },
  { title: "Platform", badge: "FUTURE", color: "bg-white/[0.03] text-white/35 border-white/[0.06]", items: ["Asset marketplace", "Collaboration", "Plugin ecosystem", "Enterprise features"] },
];

const RoadmapPage = () => (
  <div className="min-h-screen bg-[#0a0a0f]" style={{ perspective: "1200px" }}>
    <section className="pt-32 pb-20 px-6 text-center ambient-glow noise-overlay">
      <Reveal3D>
        <h1 className="heading-display text-4xl md:text-[72px] text-foreground italic">Building in public</h1>
        <p className="mt-4 text-lg text-body max-w-[480px] mx-auto">Every phase, every milestone, shared openly.</p>
      </Reveal3D>
    </section>

    <section className="px-6 pb-32">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/25 via-primary/8 to-transparent" />

        {phases.map((p, i) => (
          <Card3D key={i} index={0} className="relative pl-12 pb-14">
            <div className={`absolute left-[9px] top-1 w-3.5 h-3.5 rounded-full border-2 ${p.pulse ? "border-emerald-400 bg-emerald-400" : "border-white/[0.08] bg-[#0a0a0f]"}`}>
              {p.pulse && <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="heading-section text-lg text-foreground">Phase {i + 1} — <span className="font-display italic font-normal">{p.title}</span></h3>
              <span className={`px-2.5 py-0.5 text-[10px] uppercase tracking-wider rounded-full border font-body ${p.color}`}>{p.badge}</span>
            </div>
            <ul className="space-y-2.5">
              {p.items.map((item, j) => (
                <li key={j} className="text-sm text-white/35 flex items-start gap-2.5 font-body">
                  <span className="text-primary/30 mt-0.5">·</span>{item}
                </li>
              ))}
            </ul>
          </Card3D>
        ))}
      </div>
    </section>
  </div>
);

export default RoadmapPage;
