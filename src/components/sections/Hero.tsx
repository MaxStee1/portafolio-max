export default function Hero() {
  return (
    <section className="min-h-screen flex items-start bg-background">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-32 md:pt-40">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Transformando datos en soluciones desde el primer día
        </p>
        <h1 className="text-5xl font-bold text-text-primary tracking-tight leading-tight mb-6">
          Max Malebrán Cortés
        </h1>
        <h2 className="text-2xl font-medium text-text-muted mb-6">
          Ingeniero TI · Desarrollo de Software · Data Integration &amp; ETL
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-2xl mb-10">
          Egresado de Ingeniería en Tecnologías de Información con experiencia real en
          integración de datos, automatización de procesos, desarrollo de software y
          ciberseguridad OT. Construyo soluciones que funcionan en producción.
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