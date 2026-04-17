import hero3dCharacter from "@/assets/hero-3d-character.jpg";

export const ProductMockup = () => (
  <div className="perspective-mockup w-[92%] max-w-[920px] mx-auto mt-12 md:mt-16">
    <div className="rounded-2xl border border-border bg-card overflow-hidden" style={{ boxShadow: '0 30px 100px rgba(124,58,237,0.2), 0 10px 40px rgba(0,0,0,0.4)' }}>
      {/* Window chrome */}
      <div className="flex items-center px-4 py-3 border-b border-border bg-muted/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[11px] text-muted-foreground/60 ml-4 flex-1 text-center font-medium">Animora — Untitled Scene</span>
      </div>

      <div className="flex h-[260px] md:h-[400px]">
        {/* Left icon rail */}
        <div className="w-11 border-r border-border bg-muted/30 flex flex-col items-center gap-3 py-4">
          {[
            <path key="cursor" d="M4 4l7 7-3 1 1 3-2 1-1-3-3 1z" />,
            <><path key="cube1" d="M12 2L2 7l10 5 10-5z" /><path key="cube2" d="M2 17l10 5 10-5M2 12l10 5 10-5" /></>,
            <circle key="sphere" cx="12" cy="12" r="8" />,
            <><path key="key1" d="M2 12h4" /><path key="key2" d="M18 12h4" /><circle key="key3" cx="12" cy="12" r="3" /></>,
            <><path key="cam1" d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle key="cam2" cx="12" cy="13" r="4" /></>,
            <><rect key="ren1" x="2" y="3" width="20" height="14" rx="2" /><path key="ren2" d="M8 21h8M12 17v4" /></>,
          ].map((paths, i) => (
            <div key={i} className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${i === 0 ? 'text-primary bg-primary/[0.15]' : 'text-muted-foreground/50 hover:text-primary'}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {paths}
              </svg>
            </div>
          ))}
        </div>

        {/* Main viewport - dark with 3D grid */}
        <div className="flex-1 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a14 0%, #0f0f1e 100%)' }}>
          {/* 3D Character render */}
          <img src={hero3dCharacter} alt="3D character created in Animora" className="absolute inset-0 w-full h-full object-cover object-center" />

          {/* Viewport info */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-[9px] text-white/15 font-mono">Perspective · Solid</span>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <span className="text-[9px] text-white/15 font-mono">Verts: 1,024</span>
            <span className="text-[9px] text-white/10 font-mono">|</span>
            <span className="text-[9px] text-white/15 font-mono">Faces: 2,048</span>
          </div>
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className="text-[9px] text-white/15 font-mono">viewport · perspective</span>
          </div>
          {/* Axis gizmo */}
          <div className="absolute bottom-3 right-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <line x1="16" y1="16" x2="28" y2="16" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="16" y1="16" x2="16" y2="4" stroke="#22c55e" strokeWidth="1.5" />
              <line x1="16" y1="16" x2="8" y2="24" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="29" y="18" fill="#ef4444" fontSize="7" fontFamily="monospace">X</text>
              <text x="14" y="3" fill="#22c55e" fontSize="7" fontFamily="monospace">Y</text>
              <text x="3" y="27" fill="#3b82f6" fontSize="7" fontFamily="monospace">Z</text>
            </svg>
          </div>
        </div>

        {/* Right AI panel */}
        <div className="hidden md:flex w-[260px] border-l border-border bg-background flex-col">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="100,22 36,94 100,106" fill="#C4B5FD"/>
              <polygon points="100,22 164,94 100,106" fill="#7C3AED"/>
              <polygon points="36,94 100,178 100,106" fill="#5B21B6"/>
              <polygon points="164,94 100,178 100,106" fill="#2E1065"/>
            </svg>
            <span className="text-xs font-semibold text-foreground">Animora AI</span>
            <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-medium">Active</span>
          </div>
          <div className="flex-1 p-3 space-y-3 overflow-hidden">
            <div className="border-l-2 border-primary bg-primary/[0.05] rounded-r-lg p-3">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[10px] font-semibold text-primary">Modeling</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
              <div className="space-y-1.5 text-[10px] text-muted-foreground leading-relaxed font-mono">
                <div className="flex gap-1.5"><span className="text-primary">✓</span> Archway geometry</div>
                <div className="flex gap-1.5"><span className="text-primary">✓</span> Stone displacement</div>
                <div className="flex gap-1.5"><span className="text-primary">✓</span> Moss vertex groups</div>
                <div className="flex gap-1.5 text-primary/50"><span className="animate-spin">⟳</span> Key light at 45°...</div>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-border">
            <div className="h-8 px-3 rounded-lg bg-muted/50 border border-border/50 flex items-center">
              <span className="text-[10px] text-muted-foreground/60 truncate">Create a stone archway with moss...</span>
              <svg className="ml-auto flex-shrink-0 text-primary/40" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="h-7 px-4 border-t border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] text-muted-foreground/60 font-medium">AI Working · 3 steps complete</span>
        </div>
        <span className="text-[10px] text-muted-foreground/40 hidden sm:block">Press Tab to accept</span>
      </div>
    </div>
  </div>
);
