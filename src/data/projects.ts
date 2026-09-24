export type ProjectStatus = "En planificación" | "En desarrollo" | "Publicado";

export type Project = {
  name: string;
  description: string;
  status: ProjectStatus;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "DINERIN",
    description: "Aplicación full-stack de gestión financiera personal. Registra ingresos/gastos, categorización automática, dashboards interactivos con métricas de ahorro, metas presupuestarias y proyecciones. Arquitectura limpia con separación de capas.",
    status: "En desarrollo",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Recharts", "NextAuth.js", "Zod"],
    repoUrl: "https://github.com/MaxStee1/dinerin",
  },
  {
    name: "Job Hunter",
    description: "Sistema de automatización de búsqueda y postulación laboral. Scraping inteligente de portales (LinkedIn, Indeed, Glassdoor), filtrado por stack/ubicación/salario, scoring de匹配度, aplicación automática con cobertura de formularios dinámicos.",
    status: "En planificación",
    technologies: ["Python", "Selenium", "Playwright", "BeautifulSoup", "PostgreSQL", "FastAPI", "Celery", "Redis", "Docker"],
    repoUrl: "https://github.com/MaxStee1/job-hunter",
  },
  {
    name: "RetroPlay Store",
    description: "E-commerce de videojuegos físicos para PlayStation 2 y pensado para agregar más consolas a futuro creado en Shopify. Catálogo con productos variados, carrito persistente, checkout optimizado, integración Webpay/Transbank.",
    status: "Publicado",
    technologies: ["Shopify", "Liquid", "HTML/CSS", "JavaScript", "Webpay", "Responsive Design"],
    liveUrl: "https://j2hctk-es.myshopify.com/",
  },
];