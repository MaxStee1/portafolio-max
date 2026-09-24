"use client";

import { motion } from "framer-motion";
import { GitBranch, Link, Mail, Heart, Code2 } from "lucide-react";

function BrandLogo() {
  return (
    <span className="text-accent font-bold tracking-tight font-mono text-lg flex items-center gap-2">
      <span className="text-text-primary">{'<'}</span>MMC<span className="text-text-primary">{' />'}</span>
    </span>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50" role="contentinfo">
      <div className="container-max px-6 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <BrandLogo />
            <span className="text-text-dim text-sm font-mono hidden sm:block">
              v1.0.0
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/MaxStee1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5"
              aria-label="GitHub"
            >
              <GitBranch className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/max-malebrán-cortés-96ba89388"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <Link className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:max.malebranc@gmail.com"
              className="text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span className="hidden sm:inline text-sm">Contacto</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-text-dim text-sm">
            <span>© {currentYear} Max Malebrán Cortés</span>
            <span className="flex items-center gap-1.5" aria-label="Hecho con cariño">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.span>
              <Code2 className="w-3.5 h-3.5 text-accent/50" aria-hidden="true" />
              <span className="hidden sm:inline">Next.js · TypeScript · Tailwind</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <p className="text-text-muted text-sm">
            Diseñado y desarrollado por mí. Código abierto en{" "}
            <a href="https://github.com/MaxStee1/portafolio-max" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
              GitHub
            </a>
          </p>
          <nav aria-label="Enlaces legales" className="flex items-center gap-6">
            <a href="#inicio" className="text-text-dim text-sm hover:text-text-primary transition-colors">
              Inicio
            </a>
            <a href="#sobre-mi" className="text-text-dim text-sm hover:text-text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#proyectos" className="text-text-dim text-sm hover:text-text-primary transition-colors">
              Proyectos
            </a>
            <a href="#contacto" className="text-text-dim text-sm hover:text-text-primary transition-colors">
              Contacto
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}