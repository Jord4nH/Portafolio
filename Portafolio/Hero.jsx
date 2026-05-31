import React, { useEffect, useState } from "react";

// Efecto de texto "typewriter"
const roles = [
  "Estudiante de Ingeniería en Software",
  "Desarrollador Full Stack",
  "Entusiasta de IoT & Automatización",
];

const TypewriterText = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-cyan-400 font-mono">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      {/* Greeting tag */}
      <p className="text-slate-500 font-mono text-sm mb-4 animate-fade-in">
        <span className="text-cyan-600">&lt;</span>
        hello world
        <span className="text-cyan-600">/&gt;</span>
      </p>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        Jordan{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Hinojoza
        </span>
      </h1>

      {/* Typewriter role */}
      <div className="text-xl md:text-2xl text-slate-400 mb-6 min-h-[2rem]">
        <TypewriterText />
      </div>

      {/* Bio */}
      <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
        {/* ✏️ EDITA AQUÍ tu descripción personal */}
        Apasionado por construir soluciones que conectan el mundo físico con el digital.
        Combino desarrollo de software con hardware para crear proyectos IoT funcionales
        y aplicaciones que resuelven problemas reales.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all duration-200 font-mono text-sm hover:shadow-lg hover:shadow-cyan-500/30"
        >
          Ver Proyectos →
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-slate-600 hover:border-cyan-500/60 text-slate-300 hover:text-white rounded-lg transition-all duration-200 font-mono text-sm"
        >
          Contacto
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </div>
  </section>
);

export default Hero;
