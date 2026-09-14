export default function About() {
  return (
    <section id="sobre-mi" className="bg-surface py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Sobre mí
        </p>
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          ¿Quién soy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-text-muted leading-relaxed mb-4">
              Soy Ingeniero en Tecnologías de Información con foco en integración
              de datos, automatización de procesos y desarrollo de software. Me especializo
              en construir puentes entre sistemas, transformar datos en información útil
              y entregar soluciones que funcionan en producción.
            </p>
            <p className="text-text-muted leading-relaxed">
              Complemento mi perfil técnico con formación en ciberseguridad OT y
              ciberinteligencia, lo que me permite diseñar soluciones considerando
              la seguridad desde el inicio.
            </p>
          </div>
          <div>
            <p className="text-text-muted leading-relaxed mb-4">
              Trabajo con pipelines ETL, APIs de ERP, modelado de datos y visualización
              mediante dashboards en Power BI. También desarrollo aplicaciones web y
              herramientas de automatización que resuelven problemas concretos.
            </p>
            <p className="text-text-muted leading-relaxed">
              Actualmente busco nuevos desafíos donde pueda aplicar estas capacidades
              en equipos que valoren la calidad técnica y el impacto real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}