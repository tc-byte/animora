export const GlyphLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg width="32" height="32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 100 38 A 62 62 0 1 0 162 100 L 140 100"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <line x1="140" y1="100" x2="108" y2="100" stroke="hsl(var(--primary))" strokeWidth="14" strokeLinecap="round" />
      <circle cx="155" cy="56" r="10" fill="hsl(var(--accent))" />
    </svg>
    <span className="text-xl font-light tracking-tight text-foreground lowercase">glyph</span>
  </div>
);
