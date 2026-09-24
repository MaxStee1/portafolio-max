"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Code2, Database, Server, Shield, Terminal, Layers } from "lucide-react";

const categoryIcons = {
  "Desarrollo de software": Code2,
  "Datos e integración": Database,
  Infraestructura: Server,
  Ciberseguridad: Shield,
  "Automatización & DevOps": Terminal,
  "Arquitectura & Patrones": Layers,
} as const;

const proficiency = {
  expert: { label: "Experto", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  advanced: { label: "Avanzado", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  intermediate: { label: "Intermedio", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  learning: { label: "En aprendizaje", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
} as const;

const skillProficiency: Record<string, keyof typeof proficiency> = {
  TypeScript: "expert",
  React: "expert",
  "Next.js": "expert",
  Python: "expert",
  PostgreSQL: "expert",
  ETL: "expert",
  "Power BI": "advanced",
  "Node.js": "advanced",
  "APIs REST": "advanced",
  SQL: "advanced",
  Git: "advanced",
  GitHub: "advanced",
  Linux: "advanced",
  Docker: "intermediate",
  Vercel: "advanced",
  "Seguridad OT": "advanced",
  Ciberinteligencia: "intermediate",
  "Análisis de vulnerabilidades": "advanced",
  "ISA/IEC 62443": "advanced",
  "NIST SP 800-82r3": "intermediate",
  Prisma: "advanced",
  "NextAuth.js": "intermediate",
  Zod: "intermediate",
  Tailwind: "advanced",
  Recharts: "intermediate",
  "FastAPI": "intermediate",
  Celery: "learning",
  Redis: "intermediate",
  "GitHub Actions": "advanced",
  Cron: "advanced",
  Supabase: "advanced",
  "Data Modeling": "advanced",
  "Threat Modeling": "intermediate",
  "MITRE ATT&CK": "intermediate",
  "Risk Assessment": "advanced",
  "Google Apps Script": "advanced",
  "Data Pipelines": "advanced",
  "Scheduled Jobs": "advanced",
  JavaScript: "advanced",
  "Clean Architecture": "advanced",
  Testing: "intermediate",
};

export default function Skills() {
  return (
    <section id="habilidades" className="bg-surface section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20">
            Capacidades técnicas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Stack <span className="gradient-text">principal</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Tecnologías que uso día a día en producción. Nivel basado en experiencia
            real, no en cursos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, catIndex) => {
            const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Code2;
            return (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="card-base p-6 card-hover group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                <div className="relative flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-dim/50 text-accent group-hover:scale-110 group-hover:bg-accent-dim transition-transform">
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-text-primary font-semibold text-lg">{category.name}</h3>
                    <p className="text-text-dim text-xs mt-1 font-mono">{category.skills.length} tecnologías</p>
                  </div>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const level = skillProficiency[skill] || "intermediate";
                    const prof = proficiency[level];
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.03, duration: 0.3, type: "spring" }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-default ${prof.bg} ${prof.color} ${prof.border} group-hover:shadow-md`}
                      >
                        {skill}
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${prof.color.replace("text-", "bg-")}`}
                          title={prof.label}
                          aria-label={`${skill}: ${prof.label}`}
                        />
                      </motion.span>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}