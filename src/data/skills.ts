export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Desarrollo de software",
    skills: ["Python", "JavaScript", "TypeScript", "Next.js", "React", "Node.js"],
  },
  {
    name: "Datos e integración",
    skills: ["ETL", "SQL", "PostgreSQL", "Power BI", "Data Integration", "APIs REST"],
  },
  {
    name: "Infraestructura",
    skills: ["Git", "GitHub", "Vercel", "Linux", "Docker"],
  },
  {
    name: "Ciberseguridad",
    skills: ["Seguridad OT", "Ciberinteligencia", "Análisis de vulnerabilidades"],
  },
];