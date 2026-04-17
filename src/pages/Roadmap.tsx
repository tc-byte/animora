import { motion } from "framer-motion";

const phases = [
  { title: "Foundation", badge: "IN PROGRESS", badgeStyle: "bg-green-50 text-green-600 border-green-200", pulse: true, items: ["AI command panel inside the creative studio", "Scene reading — the AI understands every object, layer, and state", "Basic modeling and material operations via natural language", "Quality gate — the AI validates its own output", "Core undo/redo system"] },
  { title: "Full Modeling & Materials", badge: "NEXT", badgeStyle: "bg-purple-light text-primary border-purple-200", items: ["Complete modeling coverage for any object type", "Procedural geometry nodes", "Full sculpting pipeline", "Shader node tree generation for any material description", "Auto-repair for mesh quality issues"] },
  { title: "Character Pipeline", badge: "PLANNED", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["Auto-rigging for humanoid and non-human characters", "AI weight painting and correction", "Facial rig with full shape key system", "Character-specific material workflows"] },
  { title: "Animation", badge: "PLANNED", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["Keyframe generation with all 12 animation principles applied", "NLA editor for layered motion", "Camera animation", "AI-driven motion timing and spacing"] },
  { title: "Simulation & VFX", badge: "PLANNED", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["Cloth simulation with real fabric physics", "Fluid, fire, smoke", "Rigid body destruction", "Particle systems configured by description"] },
  { title: "Voice & Vision", badge: "PLANNED", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["Real-time voice commands while working", "Continuous viewport analysis — the AI notices issues proactively", "Reference image understanding"] },
  { title: "Game Export Pipeline", badge: "PLANNED", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["LOD generation", "Texture baking", "Engine-specific export for Unreal, Unity, and Godot", "Collision mesh generation", "Correct bone naming conventions per engine"] },
  { title: "2D & Motion", badge: "PLANNED", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["Motion graphics pipeline", "2D illustration", "Animated typography", "Compositing workflows"] },
  { title: "Public Launch", badge: "PLANNED", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["Subscription billing", "Credit system", "User dashboard", "Public access for all"] },
  { title: "Platform", badge: "FUTURE", badgeStyle: "bg-muted text-muted-foreground border-border", items: ["Asset marketplace", "Collaboration tools", "Plugin ecosystem", "Enterprise features"] },
];

const RoadmapPage = () => (
  <div className="min-h-screen bg-background pt-24">
    <section className="py-20 px-6 text-center">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-[56px] font-light text-foreground tracking-[-0.04em]">
        Building in public
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-lg text-muted-foreground max-w-[520px] mx-auto">
        Every phase, every milestone, shared openly. No vague promises — just real progress.
      </motion.p>
    </section>

    <section className="px-6 pb-32">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20" />

        {phases.map((phase, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}
            className="relative pl-12 pb-16"
          >
            <div className={`absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 ${phase.pulse ? "border-green-500 bg-green-500" : "border-primary/30 bg-background"}`}>
              {phase.pulse && <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-medium text-foreground">Phase {i + 1} — {phase.title}</h3>
              <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full border ${phase.badgeStyle}`}>
                {phase.badge}
              </span>
            </div>

            <ul className="space-y-2">
              {phase.items.map((item, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">·</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default RoadmapPage;
