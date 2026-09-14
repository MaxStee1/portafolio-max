export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Empresa",
    role: "Cargo",
    period: "Mes 20XX — Actualidad",
    description: "Descripción breve de tus responsabilidades y logros principales.",
    technologies: ["tecnología 1", "tecnología 2"],
  },
];