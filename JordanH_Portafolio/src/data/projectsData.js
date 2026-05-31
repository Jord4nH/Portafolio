// ============================================================
//  ARCHIVO DE PROYECTOS — EDITA AQUÍ PARA AÑADIR PROYECTOS
//  Duplica cualquier objeto del array y rellena tus datos.
//  El portafolio se actualiza automáticamente.
// ============================================================

export const projectsData = [
  {
    id: 1,
    title: "Sistema de Riego Inteligente",
    description:
      "Automatización de riego usando sensores de humedad y temperatura. Controlado remotamente desde una app móvil desarrollada en FlutterFlow.",
    image: null, // 👈 Reemplaza con la ruta de tu imagen: "/images/proyecto1.png"
    tags: ["Arduino", "FlutterFlow", "IoT", "Python"],
    links: {
      github: "https://github.com/jordanhinojoza",
      demo: null,       // 👈 URL de demo en vivo (o null para ocultar el botón)
      docs: null,       // 👈 URL de documentación (o null para ocultar el botón)
    },
    featured: true,   // 👈 true = tarjeta destacada (más grande en el grid)
  },
  {
    id: 2,
    title: "API REST de Gestión de Inventario",
    description:
      "Backend completo con autenticación JWT, CRUD de productos y reportes en PDF. Desplegado en Railway.",
    image: null,
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/jordanhinojoza",
      demo: "https://mi-api-demo.railway.app",
      docs: null,
    },
    featured: false,
  },
  {
    id: 3,
    title: "Dashboard de Monitoreo en Tiempo Real",
    description:
      "Visualización de datos de sensores IoT con gráficas dinámicas y alertas automáticas vía Telegram.",
    image: null,
    tags: ["JavaScript", "Chart.js", "MQTT", "Node.js"],
    links: {
      github: "https://github.com/jordanhinojoza",
      demo: null,
      docs: null,
    },
    featured: false,
  },
];

// ============================================================
//  PLANTILLA PARA NUEVO PROYECTO — copia esto y pégalo arriba
// ============================================================
//
//  {
//    id: 4,                          👈 Incrementa el número
//    title: "Nombre del Proyecto",
//    description: "Breve descripción de qué hace el proyecto y qué problema resuelve.",
//    image: "/images/mi-proyecto.png", // o null
//    tags: ["React", "Firebase"],      // tus tecnologías
//    links: {
//      github: "https://github.com/...",
//      demo: "https://...",
//      docs: null,
//    },
//    featured: false,
//  },
//
// ============================================================
