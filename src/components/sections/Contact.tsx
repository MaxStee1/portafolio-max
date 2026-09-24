"use client";

import { motion } from "framer-motion";
import { Mail, Link, GitBranch, MapPin, Clock, Send, ArrowRight } from "lucide-react";

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  description: string;
  color: string;
  bg: string;
  external?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: "max.malebranc@gmail.com",
    href: "mailto:max.malebranc@gmail.com",
    description: "Respondo en < 24h laborables",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    external: true,
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "linkedin.com/in/max-malebran",
    href: "https://linkedin.com/in/max-malebrán-cortés-96ba89388",
    description: "Conectemos profesionalmente",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    external: true,
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/MaxStee1",
    href: "https://github.com/MaxStee1",
    description: "Código abierto y experimentos",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    external: true,
  },
];

const availability = [
  { icon: MapPin, label: "Ubicación", value: "Coquimbo | La Serena, Chile · Remoto" },
  { icon: Clock, label: "Disponibilidad", value: "Inmediata · Full-time / Freelance" },
  { icon: Send, label: "Intereses", value: "Data Engineer · Full-Stack" },
] as const;

function BrandLogo() {
  return (
    <span className="font-mono text-accent font-bold tracking-tight">
      <span className="text-text-primary">{'<'}</span>MMC<span className="text-text-primary">{'/>'}</span>
    </span>
  );
}

export default function Contact() {
  return (
    <section id="contacto" className="bg-background section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            ¿Empezamos <span className="gradient-text">algo juntos?</span>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Estoy abierto a propuestas: roles full-time, proyectos freelance,
            colaboraciones técnicas o simplemente charlar sobre datos y seguridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-base p-5 card-hover group flex items-center gap-5"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.bg} ${method.color} group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-text-primary font-medium">{method.label}</span>
                    <span className="text-text-dim text-xs font-mono">{method.value}</span>
                  </div>
                  <p className="text-text-muted text-sm">{method.description}</p>
                </div>
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-surface-hover border border-border group-hover:bg-accent-dim group-hover:border-accent/50 group-hover:text-accent transition-all">
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="card-base p-6">
              <h3 className="text-text-primary font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-accent to-violet-500 rounded-full" />
                Disponibilidad
              </h3>
              <div className="space-y-4">
                {availability.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-surface-hover border border-border"
                  >
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent-dim/50 text-accent flex-shrink-0">
                      <item.icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-text-dim text-xs font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-text-secondary text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-text-dim text-sm">
            <BrandLogo /> construido con Next.js 15, TypeScript, Tailwind CSS v4 y Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}