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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div
          className={`mx-auto max-w-[1100px] px-5 md:px-6 flex items-center justify-between h-14 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "nav-container shadow-lg shadow-black/30 mx-4 md:mx-auto"
              : "nav-always-visible rounded-2xl mx-4 md:mx-auto"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity relative z-10">
            <AnimoraLogo size={24} />
          </Link>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-0.5 rounded-xl p-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                  location.pathname === l.to
                    ? "text-foreground bg-white/[0.08]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3 relative z-10">
            <a
              href="/#waitlist"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-medium rounded-xl bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Get Early Access
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-foreground p-1.5 rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 animate-fade-in">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-2xl font-display transition-all duration-300 ${
                location.pathname === l.to
                  ? "text-foreground"
                  : "text-white/40 hover:text-foreground"
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#waitlist"
            className="mt-4 px-8 py-3 text-sm font-medium rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25"
          >
            Get Early Access
          </a>
        </div>
      )}
    </>
  );
};
