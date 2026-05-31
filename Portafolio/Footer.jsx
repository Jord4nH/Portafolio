import React from "react";

const Footer = () => (
  <footer className="border-t border-slate-800 py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-slate-600 font-mono text-sm">
        <span className="text-cyan-600">&lt;</span>
        Jordan Hinojoza
        <span className="text-cyan-600"> /&gt;</span>
        {" "}— Construido con React + Tailwind
      </p>
      <p className="text-slate-700 font-mono text-xs">
        {new Date().getFullYear()} · Todos los derechos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
