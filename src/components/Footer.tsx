import { Link } from "react-router-dom";
import { AnimoraLogo } from "./AnimoraLogo";

/* ── SVG Social Icons ── */
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.5V7.12a4.83 4.83 0 0 1-1-.43z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialIconMap: Record<string, () => JSX.Element> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  YouTube: YouTubeIcon,
};

const footerLinks = {
  Product: [
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "Roadmap", to: "/roadmap" },
  ],
  Legal: [
    { label: "Terms", to: "/terms" },
    { label: "Privacy", to: "/privacy" },
    { label: "Cookies", to: "/cookies" },
    { label: "Acceptable Use", to: "/acceptable-use" },
  ],
  Follow: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/animo_raai?igsh=OTF3eHNsaXNpNDEy",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@animora.ai6?_r=1&_t=ZS-95AS6f2WHkj",
    },
    { label: "YouTube", href: "https://www.youtube.com/@animorabyEAT" },
  ],
};

export const Footer = () => (
  <footer className="relative border-t border-white/[0.08] bg-[#0a0a0f]">
    {/* Subtle top accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="max-w-[1100px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <AnimoraLogo size={22} />
          <p className="mt-5 text-[13px] text-white/50 max-w-[200px] leading-relaxed font-body">
            AI-native 3D creation.
            <br />
            Built from Nairobi.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/45 mb-5 font-body">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {"to" in link && link.to ? (
                    <Link
                      to={link.to}
                      className="text-[13px] text-white/60 hover:text-white transition-colors duration-300 font-body"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={"href" in link ? link.href : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 text-[13px] text-white/60 hover:text-white transition-all duration-300 font-body"
                    >
                      {/* Platform icon */}
                      <span className="text-white/40 group-hover:text-white/90 transition-colors duration-300">
                        {socialIconMap[link.label]?.()}
                      </span>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.08] mt-12 pt-7 flex flex-col md:flex-row justify-between text-[12px] text-white/40 font-body gap-2">
        <p>© 2026 EAT · Animora. Built in public from Nairobi, Kenya 🇰🇪</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
);
