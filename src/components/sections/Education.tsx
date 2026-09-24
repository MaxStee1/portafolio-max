"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star, Clock, CheckCircle2, Shield, Database } from "lucide-react";

interface EducationItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  org: string;
  location: string;
  period: string;
  status: string;
  credits?: string;
  highlights: string[];
}

const education: EducationItem[] = [
  {
    icon: GraduationCap,
    title: "Ingeniería en Tecnologías de Información",
    org: "Universidad Católica del Norte",
    location: "Coquimbo, Chile",
    period: "2022 — 2026",
    status: "Egresado",
    credits: "240 SCT",
    highlights: [
      "Desarrollo de software: TypeScript, React, Node.js, patrones de arquitectura",
      "Bases de datos: PostgreSQL, modelado relacional, optimización de consultas",
      "Integración de datos: ETL, APIs REST, procesamiento por lotes y streaming",
      "Seguridad: fundamentos criptográficos, seguridad en red, hardening",
      "Infraestructura: Linux, Docker, CI/CD, despliegue en cloud",
      "Gestión de proyectos: Scrum, estimación, documentación técnica",
    ],
  },
  {
    icon: Award,
    title: "Minor de Profundidad: Seguridad Digital y Ciberinteligencia",
    org: "Universidad Católica del Norte",
    location: "Coquimbo, Chile",
    period: "2024 — 2025",
    status: "Completado",
    credits: "20 SCT",
    highlights: [
      "Análisis de amenazas y modelado de adversarios (MITRE ATT&CK)",
      "Ciberinteligencia: OSINT, threat hunting, intelligence cycle",
      "Gestión de riesgos: ISO 27001, NIST CSF, análisis de impacto",
      "Seguridad industrial: ISA/IEC 62443, Purdue model, segmentación OT",
      "Respuesta a incidentes: contención, erradicación, lecciones aprendidas",
      "Normativa y compliance: ley de ciberseguridad, protección de datos",
    ],
  },
] as const;

const certifications = [
  { name: "ISA/IEC 62443 Fundamentals", issuer: "ISA", year: "2025", icon: Shield },
  { name: "NIST Cybersecurity Framework", issuer: "NIST", year: "2025", icon: Star },
  { name: "Power BI Data Analyst Associate", issuer: "Microsoft", year: "2024", icon: BookOpen },
  { name: "PostgreSQL Advanced Administration", issuer: "EDB", year: "2024", icon: Database },
] as const;

export default function Education() {
  return (
    <section id="formacion" className="bg-surface section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20">
            Formación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Educación <span className="gradient-text">y credenciales</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Formación universitaria sólida complementada con especialización en
            ciberseguridad y certificaciones técnicas válidas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8 mb-16"
        >
          {education.map((edu, index) => (
            <motion.article
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="card-base overflow-hidden group"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-dim/50 text-accent flex-shrink-0">
                      <edu.icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-text-primary font-semibold text-xl mb-1">{edu.title}</h3>
                      <p className="text-accent text-sm font-medium mb-2">{edu.org}</p>
                      <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" aria-hidden="true" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" aria-hidden="true" />
                          {edu.period}
                        </span>
                        {edu.credits && (
                          <span className="flex items-center gap-1.5">
                            <Star className="w-4 h-4" aria-hidden="true" />
                            {edu.credits}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {edu.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 + hIndex * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-accent/30 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-text-secondary text-sm leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
{/*     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-1 h-7 bg-gradient-to-b from-accent to-violet-500 rounded-full" />
            Certificaciones técnicas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4, type: "spring" }}
                className="card-base p-5 card-hover group text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-dim/50 text-accent mb-4 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h4 className="text-text-primary font-medium text-sm mb-1 leading-snug">{cert.name}</h4>
                <p className="text-text-muted text-xs mb-1">{cert.issuer}</p>
                <span className="text-text-dim text-xs font-mono">{cert.year}</span>
              </motion.article>
            ))}
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 card-base p-6 md:p-8 bg-gradient-surface border-accent/20 text-center"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6">
            <div className="flex items-center justify-center gap-3 text-text-secondary">
              <GraduationCap className="w-6 h-6 text-accent" aria-hidden="true" />
              <span className="font-medium">Aprendizaje continuo</span>
            </div>
            <p className="text-text-muted text-sm max-w-xl mx-auto md:mx-0">
              Actualmente profundizando en: arquitectura de datos moderna, frameworks modernos y agentes de Inteligencia Artificial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}