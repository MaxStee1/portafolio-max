"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Database, Shield, Terminal } from "lucide-react";

const focusAreas = [
  { icon: Code, label: "Desarrollo Full-Stack", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Database, label: "Data Engineering & ETL", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Shield, label: "Ciberseguridad OT", color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Terminal, label: "Automatización & DevOps", color: "text-violet-400", bg: "bg-violet-500/10" },
] as const;

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                className="absolute inset-0 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            Ingeniero TI · Data & Software
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-text-primary mb-6"
          >
            Max <span className="gradient-text">Malebrán Cortés</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10"
          >
            Construyo sistemas de datos escalables, aplicaciones robustas y arquitecturas
            seguras. Especialista en integración ETL, desarrollo de software y
            ciberseguridad industrial bajo estándares ISA/IEC 62443.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#proyectos"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Ver proyectos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${area.bg} ${area.color} border-current/20 text-sm font-medium`}
              >
                <area.icon className="w-4 h-4" aria-hidden="true" />
                {area.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Status — visible solo en PC, pegado al fondo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 md:hidden flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-none"
          aria-hidden="true"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-text-dim font-mono text-xs uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" />
              <span>Disponible para oportunidades</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success/50" />
              <span>Open to work</span>
            </div>
          </div>
        </motion.div>

        {/* Status + Scroll — solo en PC, absoluto al fondo */}
        <div className="hidden md:flex absolute bottom-10 left-6 right-6 items-center justify-between pointer-events-none" aria-hidden="true">
          <div className="flex items-center gap-8 text-text-dim font-mono text-xs uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" />
              <span>Disponible para oportunidades</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success/50" />
              <span>Open to work</span>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-text-dim font-mono text-xs uppercase tracking-widest flex items-center gap-2"
          >
            Scroll
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}