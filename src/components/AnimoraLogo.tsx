export const AnimoraLogo = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-face-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D8B4FE" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="logo-face-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="logo-face-c" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="logo-face-d" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>
      </defs>
      <polygon points="100,22 36,94 100,106" fill="url(#logo-face-a)" />
      <polygon points="100,22 164,94 100,106" fill="url(#logo-face-b)" />
      <polygon points="36,94 100,178 100,106" fill="url(#logo-face-c)" />
      <polygon points="164,94 100,178 100,106" fill="url(#logo-face-d)" />
    </svg>
    <span
      className="text-foreground tracking-[-0.04em] font-body"
      style={{
        fontSize: size * 0.55,
        fontWeight: 500,
        lineHeight: 1,
      }}
    >
      animora
    </span>
  </div>
);
