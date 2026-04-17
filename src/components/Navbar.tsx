import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimoraLogo } from "./AnimoraLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/roadmap", label: "Roadmap" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16">
        {/* Logo - left */}
        <Link to="/" className="hover:opacity-80 transition-opacity relative z-10">
          <AnimoraLogo />
        </Link>

        {/* Center floating glass pill nav */}
        <div
          className={`hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full transition-all duration-500 ${
            scrolled ? "glass-nav shadow-lg shadow-black/20" : "glass-nav"
          }`}
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-1.5 rounded-full text-[13px] transition-all duration-200 ${
                location.pathname === l.to
                  ? "bg-white/10 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right - CTA */}
        <div className="flex items-center gap-4 relative z-10">
          <Link
            to="/#waitlist"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-medium rounded-full glass-strong text-foreground hover:bg-white/[0.08] transition-all duration-300"
          >
            Get Started
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#waitlist"
            className="mt-4 px-8 py-3 text-base font-medium rounded-full glass-strong text-foreground hover:bg-white/[0.08] transition-all"
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
};
