import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const features = [
  {
    title: "Modeling & Sculpting",
    desc: "From simple primitives to complex organic forms. Animora's AI understands topology, edge flow, and subdivision surfaces. Describe any object — the AI selects the optimal modeling approach, applies proper edge loops for deformation, and maintains quad-based topology throughout. Hard-surface and organic workflows, procedural geometry nodes, and full sculpting with dynamic topology.",
    panel: "Mesh · 24,892 faces · Quad-dominant\nTopology score: 98/100\nSubdivision ready: Yes",
  },
  {
    title: "Rigging & Animation",
    desc: "Auto-rig any character — humanoid, quadruped, or custom — in seconds. The AI generates proper bone hierarchies, weight paints with anatomical accuracy, and builds facial rigs with full shape key systems. Animate with natural language: 'walk confidently', 'swing the sword overhead'. The 12 principles of animation are applied automatically — anticipation, follow-through, overlapping action, all of it.",
    panel: "Rig · 156 bones · IK/FK ready\nWeight paint: Auto-corrected\nAnimation: 120 frames @ 24fps",
  },
  {
    title: "Simulation & VFX",
    desc: "Cloth that drapes like real fabric. Fluid, fire, and smoke with physically accurate behavior. Rigid body destruction with proper fracturing. Particle systems configured by description — 'dust motes in a sunbeam', 'embers rising from a campfire'. Every simulation parameter is set by the AI based on your creative intent, not manual slider adjustment.",
    panel: "Simulation · Cloth\nFabric: Silk, 0.3mm thickness\nCollision margin: 0.01\nSubsteps: 8",
  },
  {
    title: "Materials & Shaders",
    desc: "Describe any material and the AI builds the complete shader node tree — physically based, procedural, no texture images required. 'Weathered copper with green patina', 'wet asphalt after rain', 'iridescent beetle shell'. Each material uses correct IOR values, roughness maps, and subsurface scattering parameters. Production-standard PBR output.",
    panel: "Material · Weathered Copper\nBase: Metallic 0.95, Roughness 0.35\nPatina: Noise-driven, green oxide\nNormal: Multi-layer procedural",
  },
  {
    title: "Lighting & Rendering",
    desc: "Cinematographic lighting from a sentence. 'Golden hour, key light at 45 degrees, warm fill' — the AI configures light type, intensity, color temperature, shadow softness, and position. Supports Rembrandt, butterfly, split, and custom lighting setups. Path-traced and real-time rendering. HDRI environment matching. The AI understands light ratios and artistic intent.",
    panel: "Lighting · 3-point setup\nKey: Area, 5600K, 800W\nFill: Soft, 4200K, ratio 3:1\nRim: Spot, 6500K, 200W",
  },
  {
    title: "Game Asset Pipeline",
    desc: "Animora prepares your creative work for game engines automatically. LOD generation with proper decimation. Texture baking — normal, AO, roughness, metallic — at any resolution. Collision mesh generation. Bone naming conventions per engine (Unreal, Unity, Godot). FBX and GLTF export with correct scale, axis orientation, and material mapping.",
    panel: "Export · Unreal Engine 5\nLODs: 4 levels generated\nTextures: 4K baked (PBR set)\nCollision: Convex hull, simplified",
  },
];

const FeaturesPage = () => (
  <div className="min-h-screen bg-background pt-24">
    <section className="py-20 px-6 text-center">
      <motion.h1 {...fadeUp} className="text-4xl md:text-[56px] font-light text-foreground tracking-[-0.04em]">
        Every creative tool. One AI.
      </motion.h1>
      <motion.p {...fadeUp} className="mt-6 text-lg text-muted-foreground max-w-[560px] mx-auto">
        Animora covers the complete professional creative pipeline — from the first shape to the final rendered frame.
      </motion.p>
    </section>

    {features.map((feature, i) => (
      <section key={i} className={`py-20 px-6 border-t border-border ${i % 2 === 1 ? "bg-surface-alt" : ""}`}>
        <div className={`max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center`}>
          <motion.div {...fadeUp} className={i % 2 === 1 ? "md:order-2" : ""}>
            <span className="text-xs uppercase tracking-[0.08em] text-primary font-semibold">0{i + 1}</span>
            <h2 className="mt-4 text-3xl md:text-[36px] font-medium text-foreground tracking-[-0.03em]">{feature.title}</h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">{feature.desc}</p>
          </motion.div>
          <motion.div {...fadeUp} className={`bg-surface-alt border border-border rounded-xl p-6 font-mono text-sm ${i % 2 === 1 ? "md:order-1" : ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
              <span className="text-xs text-primary font-medium">Animora · {feature.title.split(" ")[0]}</span>
            </div>
            <pre className="text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed">{feature.panel}</pre>
          </motion.div>
        </div>
      </section>
    ))}

    <section className="py-32 px-6 gradient-cta">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-4xl font-light text-foreground tracking-[-0.03em]">Start creating with Animora.</h2>
        <p className="mt-4 text-muted-foreground">Join the waitlist. Get 7 days free when we launch.</p>
        <WaitlistForm source="features_page" className="mt-10" />
      </div>
    </section>
  </div>
);

export default FeaturesPage;
