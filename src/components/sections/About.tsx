"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Target, Code2, Brain } from "lucide-react";

interface Highlight {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  iconColor: string;
  iconBg: string;
}

const highlights: Highlight[] = [
  { icon: Code2, title: "Desarrollo Full-Stack", desc: "TypeScript, React, Next.js, Node.js, APIs REST, arquitectura limpia", iconColor: "text-blue-400", iconBg: "bg-blue-500/10" },
  { icon: Brain, title: "Data Engineering", desc: "ETL pipelines, PostgreSQL, Power BI, modelado dimensional", iconColor: "text-emerald-400", iconBg: "bg-emerald-500/10" },
  { icon: Award, title: "Ciberseguridad OT", desc: "ISA/IEC 62443, NIST 800-82r3, inventario activos industriales, análisis riesgo", iconColor: "text-orange-400", iconBg: "bg-orange-500/10" },
  { icon: Target, title: "Automatización", desc: "Python scripting, cron jobs, GitHub Actions, infraestructura como código", iconColor: "text-violet-400", iconBg: "bg-violet-500/10" },
] as const;

const education = [
  { icon: GraduationCap, title: "Ingeniería en Tecnologías de Información", org: "Universidad Católica del Norte", year: "Egresado 2026", detail: "Desarrollo, bases de datos, redes, seguridad, gestión de proyectos TI" },
  { icon: Award, title: "Minor: Seguridad Digital y Ciberinteligencia", org: "Universidad Católica del Norte", year: "2024–2025", detail: "20 SCT · Amenazas, ciberinteligencia, gestión de riesgos, normativa" },
] as const;

export default function About() {
  return (
    <section id="sobre-mi" className="bg-surface section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20">
            Perfil
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ingeniero TI con foco en <span className="gradient-text">datos, software y seguridad</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Egresado UCN con experiencia real en entornos productivos: desde automatizar
            ETLs sobre APIs de ERP y modelar datos para 27.000+ clientes, hasta
            documentar activos OT bajo normas industriales y desarrollar aplicaciones
            full-stack tipo producción.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-base p-6 card-hover group"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${item.iconBg} ${item.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-text-primary font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-1 h-7 bg-gradient-to-b from-accent to-violet-500 rounded-full" />
            Formación académica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-base p-6 border-l-4 border-accent"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-dim text-accent flex-shrink-0">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="text-text-primary font-semibold text-base">{item.title}</h4>
                      <span className="text-text-dim text-sm font-mono whitespace-nowrap">{item.year}</span>
                    </div>
                    <p className="text-accent text-sm font-medium mb-2">{item.org}</p>
                    <p className="text-text-muted text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 card-base p-6 md:p-8 bg-gradient-surface border-accent/20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-text-primary font-semibold text-lg">Buscando nuevo desafío</h4>
                <p className="text-text-muted text-sm">
                  Disponible para roles de Data Engineer, Full-Stack Developer o
                  Ciberseguridad OT. Valor: autonomía, calidad técnica, impacto real.
                </p>
              </div>
            </div>
            <a
              href="#contacto"
              className="btn-primary w-full md:w-auto flex items-center justify-center gap-2"
            >
              Contactar
              <span className="w-4 h-4" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}