export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Disponible para nuevas oportunidades
        </p>
        <h1 className="text-5xl font-bold text-text-primary tracking-tight leading-tight mb-6">
          Max Malebrán Cortés
        </h1>
        <h2 className="text-2xl font-medium text-text-muted mb-6">
          Ingeniero TI — Data Integration & ETL
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-2xl mb-10">
          Diseño e implemento soluciones de integración de datos, automatización de procesos
          y desarrollo de software. Combino experiencia en ETL, APIs de ERP y visualización
          con formación en ciberseguridad OT.
        </p>
        <div className="flex gap-4">
          <a
            href="#proyectos"
            className="bg-accent text-background font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Ver proyectos
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-text-primary font-medium px-6 py-3 rounded-md hover:bg-surface transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}