import { Link } from "react-router-dom";
import { AnimoraLogo } from "./AnimoraLogo";

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
    { label: "Instagram", href: "https://www.instagram.com/animo_raai?igsh=OTF3eHNsaXNpNDEy" },
    { label: "TikTok", href: "https://www.tiktok.com/@animora.ai6?_r=1&_t=ZS-95AS6f2WHkj" },
    { label: "YouTube", href: "https://www.youtube.com/@Anim_ora_ai" },
  ],
};

export const Footer = () => (
  <footer className="border-t border-white/[0.04]">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <AnimoraLogo size={28} />
          <p className="mt-4 text-sm text-muted-foreground/40 max-w-[200px] leading-relaxed">
            AI-native 3D creation. Built in public from Nairobi.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground/40 font-medium mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  {"to" in link && link.to ? (
                    <Link to={link.to} className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={"href" in link ? link.href : "#"} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.04] mt-12 pt-8 flex flex-col md:flex-row justify-between text-xs text-muted-foreground/30">
        <p>© 2025 EAT · Animora. Built in public from Nairobi, Kenya 🇰🇪</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
);
