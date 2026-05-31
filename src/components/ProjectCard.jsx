import React from "react";

// Iconos SVG inline (sin dependencias extra)
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const DocsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// Colores para los tags — se asignan automáticamente por nombre
const TAG_COLORS = {
  Python:      "bg-blue-900/60 text-blue-300 border-blue-700/50",
  JavaScript:  "bg-yellow-900/60 text-yellow-300 border-yellow-700/50",
  React:       "bg-cyan-900/60 text-cyan-300 border-cyan-700/50",
  Arduino:     "bg-teal-900/60 text-teal-300 border-teal-700/50",
  FlutterFlow: "bg-blue-900/60 text-blue-300 border-blue-700/50",
  FastAPI:     "bg-emerald-900/60 text-emerald-300 border-emerald-700/50",
  Docker:      "bg-sky-900/60 text-sky-300 border-sky-700/50",
  PostgreSQL:  "bg-indigo-900/60 text-indigo-300 border-indigo-700/50",
  IoT:         "bg-lime-900/60 text-lime-300 border-lime-700/50",
  "Node.js":   "bg-green-900/60 text-green-300 border-green-700/50",
  "Chart.js":  "bg-pink-900/60 text-pink-300 border-pink-700/50",
  MQTT:        "bg-orange-900/60 text-orange-300 border-orange-700/50",
  DEFAULT:     "bg-slate-800/60 text-slate-300 border-slate-600/50",
};

// Imagen placeholder cuando no hay imagen real
const PlaceholderImage = ({ title }) => (
  <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
    {/* Grid pattern decorativo */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "linear-gradient(rgba(99,210,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,210,255,0.3) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
    <span className="text-slate-500 text-sm font-mono z-10 px-4 text-center">
      {"// "}{title}
    </span>
  </div>
);

/**
 * ProjectCard — Componente modular de tarjeta de proyecto
 *
 * Props:
 *  - project: objeto del array en projectsData.js
 *  - featured: boolean, muestra la tarjeta en tamaño destacado
 */
const ProjectCard = ({ project }) => {
  const { title, description, image, tags = [], links = {}, featured } = project;

  return (
    <article
      className={`
        group relative flex flex-col
        bg-slate-900/70 border border-slate-700/50
        rounded-xl overflow-hidden
        hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10
        transition-all duration-300 ease-out
        hover:-translate-y-1
        ${featured ? "md:col-span-2" : ""}
      `}
    >
      {/* Badge "Destacado" */}
      {featured && (
        <span className="absolute top-3 right-3 z-10 text-xs font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 px-2 py-0.5 rounded-full">
          ★ featured
        </span>
      )}

      {/* Imagen o placeholder */}
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <PlaceholderImage title={title} />
      )}

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-semibold text-white font-mono group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Tags de tecnologías */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2 py-0.5 rounded-full border font-mono ${TAG_COLORS[tag] || TAG_COLORS.DEFAULT}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 pt-1 border-t border-slate-700/50">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <GitHubIcon /> GitHub
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLinkIcon /> Demo
            </a>
          )}
          {links.docs && (
            <a
              href={links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <DocsIcon /> Docs
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
