export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Compañía Pisquera de Chile — CCU",
    role: "Ingeniero de Proyecto | Ciberseguridad OT",
    period: "Mar 2026 — Jul 2026",
    description: [
      "Contribuí al desarrollo de la primera fase de un proyecto de Ciberseguridad Industrial para la Planta Ovalle, orientado a fortalecer la seguridad de activos OT y sentar las bases para una futura convergencia IT/OT.",
      "Ejecuté levantamiento y análisis de activos OT: PLC, HMI y equipos de comunicación, con identificación de vulnerabilidades y elaboración de matrices de criticidad y riesgos.",
      "Elaboré procedimientos y estándares de ciberseguridad bajo referencias ISA/IEC 62443, NIST SP 800-82r3 e ISO 27001.",
      "Desarrollé una Intranet de Ciberseguridad en Google Apps Script con módulos de capacitación, evaluaciones y seguimiento de usuarios.",
    ],
    technologies: ["Google Apps Script", "Claroty", "SINEC PNI", "ISA/IEC 62443", "NIST SP 800-82r3", "BPMN"],
  },
  {
    company: "MULTIFRUTS SpA",
    role: "Practicante TI | Data & Software",
    period: "Ene 2026 — Mar 2026",
    description: [
      "Diseñé e implementé procesos ETL en Python mediante APIs del ERP Defontana, automatizando extracción, transformación y carga de datos.",
      "Migré la arquitectura de datos desde SQLite hacia PostgreSQL en servidor Ubuntu y automaticé ejecución diaria mediante cron jobs.",
      "Desarrollé dashboards comerciales en Power BI y automaticé su actualización mediante Power BI Service.",
      "Analicé aproximadamente 27.000 clientes mediante segmentación RFM y clustering K-Means para identificar patrones de comportamiento.",
    ],
    technologies: ["Python", "PostgreSQL", "Power BI", "Linux", "Cron", "API Defontana", "Supabase"],
  },
];