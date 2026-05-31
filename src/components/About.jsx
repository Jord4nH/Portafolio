import React from "react";
import { skillsData, categoryColors } from "../data/skillsData";

// Agrupa las habilidades por categoría
const grouped = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const SkillBadge = ({ skill }) => {
  const gradient = categoryColors[skill.category] || "from-slate-400 to-slate-500";
  return (
    <div className="group flex flex-col gap-1.5 p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-300 font-mono">{skill.name}</span>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
      {/* Barra de nivel */}
      <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-700`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-cyan-500 font-mono text-sm mb-2">// sobre mí</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          ¿Quién soy?
        </h2>
        <div className="w-12 h-0.5 bg-cyan-500 mt-3" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-4">
          <p className="text-slate-400 leading-relaxed">
            {/* ✏️ EDITA AQUÍ tu descripción larga */}
            Soy Jordan Hinojoza, estudiante de Ingeniería en Software con una fuerte
            inclinación hacia el desarrollo full stack y los sistemas embebidos.
            Me emociona la intersección entre el código y el hardware: construir
            cosas que no solo "corren en la nube", sino que también encienden LEDs,
            leen sensores o automatizan procesos físicos.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Actualmente estoy explorando el mundo del IoT con Arduino y Raspberry Pi,
            mientras desarrollo mis habilidades en backend con Python/FastAPI y
            aplicaciones móviles con FlutterFlow. Creo en aprender haciendo —
            cada proyecto es un nuevo desafío que me hace mejor ingeniero.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { label: "Proyectos",     value: "10+" },
              { label: "Tecnologías",   value: "15+" },
              { label: "Años aprendiendo", value: "3+" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                <p className="text-2xl font-bold text-cyan-400 font-mono">{value}</p>
                <p className="text-xs text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="space-y-6">
          {Object.entries(grouped).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
