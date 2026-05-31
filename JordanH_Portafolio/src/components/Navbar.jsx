import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Inicio",      href: "#hero" },
  { label: "Sobre Mí",   href: "#about" },
  { label: "Proyectos",  href: "#projects" },
  { label: "Contacto",   href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-cyan-400 text-lg font-bold tracking-tight hover:text-cyan-300 transition-colors">
          JH<span className="text-slate-500">.</span>dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-slate-400 hover:text-white transition-colors font-mono"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/jordanhinojoza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-4 py-1.5 rounded-full font-mono transition-all"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white font-mono text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
