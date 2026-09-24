"use client";

import { motion } from "framer-motion";
import { projects, ProjectStatus } from "@/data/projects";
import { GitBranch, ExternalLink, Code2, Database, Shield, ShoppingCart } from "lucide-react";

const statusConfig: Record<ProjectStatus, { label: string; color: string; bg: string; border: string; icon: React.ComponentType<{ className?: string }> }> = {
  "En planificación": { label: "Planificación", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", icon: Code2 },
  "En desarrollo": { label: "En desarrollo", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", icon: Database },
  "Publicado": { label: "Publicado", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: Shield },
};

const projectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  DINERIN: Database,
  "Job Hunter": Shield,
  "RetroPlay Store": ShoppingCart,
};

export default function Projects() {
  return (
    <section id="proyectos" className="bg-background section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20">
            Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Proyectos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Desde aplicaciones financieras full-stack hasta automatizaciones de empleo
            y e-commerce en producción. Cada uno resuelve un problema real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            const ProjectIcon = projectIcons[project.name] || Code2;
            const hasLinks = project.repoUrl || project.liveUrl;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.12, duration: 0.6, type: "spring", damping: 25 }}
                className="card-base relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${status.bg} ${status.color} flex-shrink-0`}>
                        <status.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-text-primary font-semibold text-lg truncate">{project.name}</h3>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.color} ${status.border}`}>
                          {status.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-surface-hover border border-border text-text-muted text-xs font-medium hover:border-accent/50 hover:text-text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2.5 py-1 rounded-full bg-accent-dim text-accent text-xs font-medium">
                        +{project.technologies.length - 6} más
                      </span>
                    )}
                  </div>

                  {hasLinks && (
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm flex-1 md:flex-none justify-center group"
                          aria-label={`Ver código de ${project.name} en GitHub`}
                        >
                          <GitBranch className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                          Código
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm flex-1 md:flex-none justify-center group"
                          aria-label={`Ver demo de ${project.name}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.3, duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted mb-4">Más proyectos y experimentos en mi GitHub</p>
          <a
            href="https://github.com/MaxStee1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <GitBranch className="w-4 h-4" aria-hidden="true" />
            Ver repositorios
          </a>
        </motion.div>
      </div>
    </section>
  );
}