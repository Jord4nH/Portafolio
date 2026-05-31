import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

// Extrae todos los tags únicos para el filtro
const ALL_TAGS = ["Todos", ...new Set(projectsData.flatMap((p) => p.tags))];

const Projects = () => {
  const [activeTag, setActiveTag] = useState("Todos");

  const filtered =
    activeTag === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-cyan-500 font-mono text-sm mb-2">// proyectos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Lo que he construido
          </h2>
          <div className="w-12 h-0.5 bg-cyan-500 mt-3" />
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${
                activeTag === tag
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/60"
                  : "bg-transparent text-slate-500 border-slate-700 hover:border-slate-500 hover:text-slate-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────
            GRID DE PROYECTOS
            Los proyectos se generan automáticamente desde
            projectsData.js. Para añadir uno nuevo, solo
            agrega un objeto al array en ese archivo.
        ───────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-slate-500 font-mono text-sm">
            // No hay proyectos con ese filtro todavía.
          </p>
        )}

        {/* Contador */}
        <p className="mt-8 text-slate-600 text-xs font-mono text-right">
          {filtered.length} proyecto{filtered.length !== 1 ? "s" : ""} mostrado{filtered.length !== 1 ? "s" : ""}
        </p>
      </div>
    </section>
  );
};

export default Projects;
