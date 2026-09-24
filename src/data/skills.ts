export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Desarrollo de software",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "JavaScript", "Python", "APIs REST", "Clean Architecture", "Testing"],
  },
  {
    name: "Datos e integración",
    skills: ["ETL", "PostgreSQL", "SQL", "Power BI", "Data Integration", "Data Modeling", "APIs REST"],
  },
  {
    name: "Infraestructura",
    skills: ["Git", "GitHub", "Linux", "Docker", "Vercel", "CI/CD", "GitHub Actions", "Cron Jobs", "Ubuntu Server"],
  },
  {
    name: "Ciberseguridad",
    skills: ["Seguridad OT", "Ciberinteligencia", "Análisis de vulnerabilidades", "ISA/IEC 62443", "NIST SP 800-82r3", "Threat Modeling", "MITRE ATT&CK", "Risk Assessment"],
  },
  {
    name: "Automatización & DevOps",
    skills: ["Python Scripting", "Google Apps Script", "GitHub Actions", "ETL Automation", "Cron", "Supabase", "Data Pipelines", "Scheduled Jobs"],
  },
];