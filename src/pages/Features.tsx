import { WaitlistForm } from "@/components/WaitlistForm";
import { ImageShowcase, Reveal3D, Card3D } from "@/components/ScrollAnimations";
import featureModeling from "@/assets/feature-modeling.png";
import featureRigging from "@/assets/feature-rigging.png";
import featureSimulation from "@/assets/feature-simulation.png";
import featureMaterials from "@/assets/feature-materials.png";
import featureLighting from "@/assets/feature-lighting.png";
import featureExport from "@/assets/feature-export.png";

const featureSlides = [
  { img: featureModeling, label: "01 · Modeling", title: "Modeling &\nSculpting", desc: "AI understands topology, edge flow, and subdivision surfaces. Operates Blender's modeling tools like a pro." },
  { img: featureRigging, label: "02 · Animation", title: "Rigging &\nAnimation", desc: "Proper bone hierarchies, weight painting, facial rigs — all generated automatically from your description." },
  { img: featureSimulation, label: "03 · Simulation", title: "Simulation\n& VFX", desc: "Physically accurate cloth, fluid, fire, and destruction. The AI configures Blender's physics engines for you." },
  { img: featureMaterials, label: "04 · Materials", title: "Materials &\nShaders", desc: "Complete shader node trees — procedural, PBR. The AI builds the exact material you describe." },
  { img: featureLighting, label: "05 · Lighting", title: "Lighting &\nRendering", desc: "Cinematographic lighting from a single sentence. Studio-quality renders on demand." },
  { img: featureExport, label: "06 · Export", title: "Game Asset\nPipeline", desc: "LOD generation, texture baking, export to Unreal Engine, Unity, Godot & standard formats." },
];

const panels = [
  { label: "Modeling", text: "Mesh · 24,892 faces · Quad-dominant\nTopology: 98/100 · Subdivision ready" },
  { label: "Animation", text: "Rig · 156 bones · IK/FK\nWeight paint: Auto · 120f @ 24fps" },
  { label: "Simulation", text: "Cloth · Silk 0.3mm\nCollision: 0.01 · Substeps: 8" },
  { label: "Materials", text: "Weathered Copper\nMetallic 0.95 · Patina: Noise-driven" },
  { label: "Lighting", text: "3-point setup\nKey: 5600K 800W · Fill: 3:1" },
  { label: "Export", text: "Game-ready assets\n4 LODs · 4K PBR textures · glTF/FBX" },
];

const FeaturesPage = () => (
  <div className="min-h-screen bg-[#0a0a0f]">
    <section className="pt-32 pb-12 px-6 text-center ambient-glow noise-overlay">
      <Reveal3D>
        <span className="text-overline mb-4 block">Animora Features</span>
        <h1 className="heading-display text-4xl md:text-[68px] text-foreground italic">
          Every creative tool.<br />One AI.
        </h1>
        <p className="mt-5 text-lg text-white/50 max-w-[520px] mx-auto font-body">
          Animora's AI operates Blender's full toolset for you — from first shape to final render.
        </p>
      </Reveal3D>
    </section>

    <ImageShowcase slides={featureSlides} />

    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal3D className="text-center mb-14">
          <span className="text-overline mb-3 block">Technical Detail</span>
          <h2 className="heading-display text-3xl md:text-[48px] text-foreground italic">Under the hood.</h2>
          <p className="mt-4 text-body max-w-lg mx-auto">
            Real Blender operations. Real output quality. The AI doesn't fake it.
          </p>
        </Reveal3D>
        <div className="grid md:grid-cols-3 gap-4">
          {panels.map((p, i) => (
            <Card3D key={i} index={i} className="card-interactive p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-primary/70 font-medium font-body">{p.label}</span>
              </div>
              <pre className="text-xs text-white/40 whitespace-pre-wrap leading-relaxed font-mono-code">{p.text}</pre>
            </Card3D>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 px-6 ambient-glow noise-overlay">
      <Reveal3D className="max-w-md mx-auto text-center relative z-10">
        <h2 className="heading-display text-4xl text-foreground italic">Start creating.</h2>
        <p className="mt-3 text-white/45 font-body">7 days free at launch.</p>
        <WaitlistForm source="features_page" className="mt-8" />
      </Reveal3D>
    </section>
  </div>
);

export default FeaturesPage;
