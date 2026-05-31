// ============================================================
//  HABILIDADES — Añade o elimina tecnologías aquí
// ============================================================

export const skillsData = [
  // --- Lenguajes ---
  { name: "Python",       category: "Lenguajes",  level: 90 },
  { name: "JavaScript",   category: "Lenguajes",  level: 75 },
  { name: "C++",          category: "Lenguajes",  level: 65 },
  { name: "Dart",         category: "Lenguajes",  level: 60 },

  // --- Frontend / Mobile ---
  { name: "React",        category: "Frontend",   level: 70 },
  { name: "FlutterFlow",  category: "Mobile",     level: 80 },
  { name: "Tailwind CSS", category: "Frontend",   level: 75 },

  // --- Backend / DB ---
  { name: "FastAPI",      category: "Backend",    level: 80 },
  { name: "Node.js",      category: "Backend",    level: 65 },
  { name: "PostgreSQL",   category: "Base de Datos", level: 70 },
  { name: "Firebase",     category: "Base de Datos", level: 65 },

  // --- IoT / Hardware ---
  { name: "Arduino",      category: "IoT",        level: 85 },
  { name: "Raspberry Pi", category: "IoT",        level: 75 },
  { name: "MQTT",         category: "IoT",        level: 70 },

  // --- Herramientas ---
  { name: "Docker",       category: "DevOps",     level: 60 },
  { name: "Git",          category: "Herramientas", level: 85 },
];

export const categoryColors = {
  "Lenguajes":     "from-cyan-500 to-blue-500",
  "Frontend":      "from-violet-500 to-purple-500",
  "Mobile":        "from-pink-500 to-rose-500",
  "Backend":       "from-emerald-500 to-teal-500",
  "Base de Datos": "from-amber-500 to-orange-500",
  "IoT":           "from-lime-500 to-green-500",
  "DevOps":        "from-sky-500 to-indigo-500",
  "Herramientas":  "from-slate-400 to-slate-500",
};
