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
    description: "Aplicación de gestión financiera personal. Permite registrar ingresos, gastos y visualizar el estado financiero mediante dashboards.",
    status: "En planificación",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Power BI"],
  },
  {
    name: "Job Hunter",
    description: "Automatización de búsqueda y postulación laboral. Integra APIs de portales de empleo para filtrar y postular a ofertas relevantes automáticamente.",
    status: "En planificación",
    technologies: ["Python", "Selenium", "APIs REST"],
  },
    {
    name: "RetroPlay Store",
    description: "Tienda e-commerce de videojuegos fisicos para Play Station 2 desarrollada en Shopify. Incluye gestión de productos, carrito de compras y proceso de pago integrado.",
    status: "Publicado",
    technologies: ["Shopify", "Liquid", "E-commerce"],
    liveUrl: "https://j2hctk-es.myshopify.com/",
  },
];