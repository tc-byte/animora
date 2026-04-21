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
    {
      label: "Instagram",
      href: "https://www.instagram.com/animo_raai?igsh=OTF3eHNsaXNpNDEy",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@animora.ai6?_r=1&_t=ZS-95AS6f2WHkj",
    },
    { label: "YouTube", href: "https://www.youtube.com/@Anim_ora_ai" },
  ],
};

export const Footer = () => (
  <footer className="relative border-t border-white/[0.04]">
    {/* Subtle top accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="max-w-[1100px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <AnimoraLogo size={22} />
          <p className="mt-5 text-[13px] text-white/30 max-w-[200px] leading-relaxed font-body">
            AI-native 3D creation.
            <br />
            Built from Nairobi.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-overline mb-5 !text-white/20 !text-[10px]">
              {title}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {"to" in link && link.to ? (
                    <Link
                      to={link.to}
                      className="text-[13px] text-white/30 hover:text-white/65 transition-colors duration-300 font-body"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={"href" in link ? link.href : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/30 hover:text-white/65 transition-colors duration-300 font-body"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.05] mt-12 pt-7 flex flex-col md:flex-row justify-between text-[11px] text-white/20 font-body">
        <p>© 2025 EAT · Animora. Built in public from Nairobi, Kenya 🇰🇪</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </footer>
);
