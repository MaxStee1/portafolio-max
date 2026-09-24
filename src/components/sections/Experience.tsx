"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Building2, MapPin, Calendar, CheckCircle, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experiencia" className="bg-background section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20">
            Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Experiencia <span className="gradient-text">profesional</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Dos experiencias clave en entornos exigentes: ciberseguridad industrial en
            planta crítica y data engineering en retail masivo.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-12 md:gap-16"
          >
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-4 md:left-8 top-1 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 400, damping: 17 }}
                    className="w-3.5 h-3.5 rounded-full bg-accent border-4 bg-background shadow-lg"
                    aria-hidden="true"
                  />
                </div>

                <div className="card-base p-6 md:p-8 card-hover group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-text-primary font-semibold text-lg md:text-xl mb-2 group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
                        <span className="flex items-center gap-1.5 font-medium text-text-secondary">
                          <Building2 className="w-4 h-4 text-accent" aria-hidden="true" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6" role="list">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 + i * 0.08, duration: 0.4 }}
                        className="flex gap-3 text-text-secondary text-sm leading-relaxed group relative pl-1"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.25 + i * 0.08, type: "spring", stiffness: 500, damping: 30 }}
                          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-accent mt-0.5"
                        >
                          <CheckCircle className="w-4 h-4" aria-hidden="true" />
                        </motion.div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4, duration: 0.3, type: "spring" }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-hover border border-border text-text-muted text-xs font-medium hover:border-accent/50 hover:text-text-primary hover:bg-accent-dim transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted mb-4">¿Quieres ver el detalle técnico completo?</p>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Ver CV completo
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}