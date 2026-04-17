export const AnimoraLogo = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,22 36,94 100,106" fill="#C4B5FD"/>
      <polygon points="100,22 164,94 100,106" fill="#7C3AED"/>
      <polygon points="36,94 100,178 100,106" fill="#5B21B6"/>
      <polygon points="164,94 100,178 100,106" fill="#2E1065"/>
    </svg>
    <span
      className="text-foreground"
      style={{
        fontSize: size * 0.65,
        fontWeight: 300,
        letterSpacing: '-0.03em',
        lineHeight: 1,
      }}
    >
      animora
    </span>
  </div>
);
