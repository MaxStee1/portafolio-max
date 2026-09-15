"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#formacion", label: "Formación" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-accent font-bold tracking-tight font-mono">
          &lt;MMC /&gt;
        </span>

        {/* Links en escritorio */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-5 h-0.5 bg-accent transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-accent transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-accent transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}