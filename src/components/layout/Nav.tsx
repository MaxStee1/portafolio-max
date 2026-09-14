export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-text-primary font-semibold tracking-tight">
          Max Malebrán
        </span>
        <ul className="flex items-center gap-6 text-sm text-text-muted">
          <li><a href="#sobre-mi" className="hover:text-text-primary transition-colors">Sobre mí</a></li>
          <li><a href="#experiencia" className="hover:text-text-primary transition-colors">Experiencia</a></li>
          <li><a href="#habilidades" className="hover:text-text-primary transition-colors">Habilidades</a></li>
          <li><a href="#proyectos" className="hover:text-text-primary transition-colors">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-text-primary transition-colors">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}