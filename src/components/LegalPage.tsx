import { Link, useLocation } from "react-router-dom";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

/* ── Navigation sidebar items ── */
const legalNav = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Cookie Policy", to: "/cookies" },
  { label: "Acceptable Use", to: "/acceptable-use" },
];

/* ── Icon components ── */
const IconArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const LegalPage = ({ title, lastUpdated, children }: LegalPageProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero header */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a18] via-[#0a0a0f] to-[#0a0a0f]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[900px] mx-auto relative z-10">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/80 transition-colors duration-300 font-body mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              <IconArrowLeft />
            </span>
            Back to home
          </Link>

          {/* Shield icon + title */}
          <div className="flex items-start gap-4">
            <div className="mt-1 w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 text-primary/70">
              <IconShield />
            </div>
            <div>
              <h1 className="heading-display text-3xl md:text-[44px] text-foreground italic leading-[1.05]">
                {title}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-white/25">
                  <IconCalendar />
                </span>
                <span className="text-[12px] text-white/35 font-body">
                  Last updated: {lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content area with sidebar */}
      <section className="px-6 pb-32">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-12">
          {/* Sticky sidebar navigation */}
          <aside className="md:w-[200px] shrink-0">
            <div className="md:sticky md:top-28">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/20 font-body block mb-4">
                Legal
              </span>
              <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {legalNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`text-[13px] font-body px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                      location.pathname === item.to
                        ? "text-white bg-white/[0.06] border border-white/[0.08]"
                        : "text-white/35 hover:text-white/60 hover:bg-white/[0.03] border border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Accent line */}
            <div className="w-10 h-[2px] bg-gradient-to-r from-primary/50 to-primary/10 rounded-full mb-10" />
            <div className="legal-content space-y-0">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const LegalSection = ({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group py-8 border-b border-white/[0.05] last:border-b-0">
    {/* Section header */}
    <div className="flex items-baseline gap-3 mb-4">
      {number && (
        <span className="text-[28px] font-display italic text-primary/20 leading-none select-none">
          {number}
        </span>
      )}
      <h2 className="text-[15px] font-semibold text-white/80 tracking-[-0.01em] font-body">
        {title}
      </h2>
    </div>
    {/* Section body */}
    <div className={`text-[14px] text-white/45 leading-[1.8] font-body space-y-3 ${number ? "md:pl-10" : ""}`}>
      {children}
    </div>
  </div>
);
