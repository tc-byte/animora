import hero3dCharacter from "@/assets/hero-3d-character.jpg";
import { use3DTilt } from "@/hooks/use3DTilt";

export const ProductMockup = () => {
  const { ref, style, handleMouseMove, handleMouseLeave } = use3DTilt(6);

  return (
    <div className="perspective-root w-[92%] max-w-[980px] mx-auto mt-14 md:mt-20">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="rounded-2xl overflow-hidden shadow-deep relative"
      >
        {/* Outer border highlight */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.06] via-transparent to-transparent pointer-events-none z-10" />

        <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-[#0b0b10] relative">
          {/* Window chrome */}
          <div className="flex items-center px-4 py-3 border-b border-white/[0.04] bg-white/[0.015]">
            <div className="flex gap-[7px]">
              <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
              <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
              <div className="w-[10px] h-[10px] rounded-full bg-white/[0.08]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[11px] text-white/15 font-mono-code tracking-wide">
                animora — Untitled Scene
              </span>
            </div>
            <div className="w-[52px]" />
          </div>

          <div className="flex h-[240px] md:h-[400px]">
            {/* Left tool rail */}
            <div className="w-11 border-r border-white/[0.04] bg-white/[0.01] flex flex-col items-center gap-3 py-4">
              {[
                <path key="p1" d="M4 4l7 7-3 1 1 3-2 1-1-3-3 1z" />,
                <>
                  <path key="p2a" d="M12 2L2 7l10 5 10-5z" />
                  <path key="p2b" d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </>,
                <circle key="p3" cx="12" cy="12" r="8" />,
                <>
                  <path key="p4a" d="M2 12h4" />
                  <path key="p4b" d="M18 12h4" />
                  <circle key="p4c" cx="12" cy="12" r="3" />
                </>,
                <>
                  <path
                    key="p5a"
                    d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                  />
                  <circle key="p5b" cx="12" cy="13" r="4" />
                </>,
              ].map((paths, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                    i === 0
                      ? "text-primary bg-primary/10"
                      : "text-white/15 hover:text-white/30 hover:bg-white/[0.03]"
                  }`}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {paths}
                  </svg>
                </div>
              ))}
            </div>

            {/* Viewport */}
            <div className="flex-1 relative overflow-hidden bg-[#07070c]">
              <img
                src={hero3dCharacter}
                alt="3D character created in Animora"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070c]/50 via-transparent to-[#07070c]/20 pointer-events-none" />
              {/* Corner info */}
              <div className="absolute top-3 left-3">
                <span className="text-[9px] text-white/12 font-mono-code font-medium">
                  Perspective · Solid
                </span>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <span className="text-[9px] text-white/10 font-mono-code">
                  Verts: 1,024
                </span>
                <span className="text-[9px] text-white/5">|</span>
                <span className="text-[9px] text-white/10 font-mono-code">
                  Faces: 2,048
                </span>
              </div>
              {/* Axis gizmo */}
              <div className="absolute bottom-3 right-3">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <line x1="16" y1="16" x2="27" y2="16" stroke="#ef4444" strokeWidth="1.5" />
                  <line x1="16" y1="16" x2="16" y2="5" stroke="#22c55e" strokeWidth="1.5" />
                  <line x1="16" y1="16" x2="9" y2="23" stroke="#3b82f6" strokeWidth="1.5" />
                  <text x="28" y="18" fill="#ef4444" fontSize="6" fontFamily="monospace">X</text>
                  <text x="14" y="4" fill="#22c55e" fontSize="6" fontFamily="monospace">Y</text>
                  <text x="4" y="26" fill="#3b82f6" fontSize="6" fontFamily="monospace">Z</text>
                </svg>
              </div>
            </div>

            {/* Right AI Panel */}
            <div className="hidden md:flex w-[240px] border-l border-white/[0.04] bg-[#09090f] flex-col">
              <div className="px-4 py-3 border-b border-white/[0.04] flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="100,22 36,94 100,106" fill="#D8B4FE" />
                  <polygon points="100,22 164,94 100,106" fill="#A855F7" />
                  <polygon points="36,94 100,178 100,106" fill="#7C3AED" />
                  <polygon points="164,94 100,178 100,106" fill="#5B21B6" />
                </svg>
                <span className="text-[11px] font-semibold text-foreground font-body">
                  Animora AI
                </span>
                <span className="ml-auto text-[9px] px-2 py-0.5 rounded-md bg-primary/10 text-primary/80 font-medium font-mono-code">
                  Active
                </span>
              </div>

              <div className="flex-1 p-3.5 overflow-hidden">
                <div className="border-l-2 border-primary/25 bg-primary/[0.02] rounded-r-lg p-3.5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-primary/70 font-body">
                      Modeling
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div className="space-y-2 text-[10px] text-white/30 font-mono-code leading-relaxed">
                    {["Archway geometry", "Stone displacement", "Moss vertex groups"].map(
                      (s, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <span className="text-primary/40 text-xs">✓</span>
                          <span>{s}</span>
                        </div>
                      )
                    )}
                    <div className="flex gap-2 items-center text-primary/20">
                      <span className="animate-spin text-xs">⟳</span>
                      <span>Key light at 45°...</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 border-t border-white/[0.04]">
                <div className="h-9 px-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center">
                  <span className="text-[10px] text-white/15 truncate font-body">
                    Create a stone archway with moss...
                  </span>
                  <svg
                    className="ml-auto flex-shrink-0 text-primary/20"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="h-7 px-4 border-t border-white/[0.04] bg-white/[0.01] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-white/20 font-medium font-mono-code">
                AI Working · 3 steps complete
              </span>
            </div>
            <span className="text-[10px] text-white/10 hidden sm:block font-mono-code">
              Press Tab to accept
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
