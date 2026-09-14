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
              Soy egresado de Ingeniería en Tecnologías de Información de la
              Universidad Católica del Norte, con experiencia real en integración
              de datos, automatización de procesos y desarrollo de software.
            </p>
            <p className="text-text-muted leading-relaxed">
              He trabajado en entornos exigentes: desde automatizar procesos ETL
              sobre APIs de ERP y construir dashboards en Power BI, hasta desarrollar
              aplicaciones web y APIs REST con TypeScript, React y NestJS.
            </p>
          </div>
          <div>
            <p className="text-text-muted leading-relaxed mb-4">
              Complemento mi perfil con un Minor de Profundidad en Seguridad Digital
              y Ciberinteligencia, y experiencia práctica en ciberseguridad OT:
              levantamiento de activos industriales, análisis de vulnerabilidades y
              documentación bajo estándares ISA/IEC 62443 y NIST SP 800-82r3.
            </p>
            <p className="text-text-muted leading-relaxed">
              Busco nuevos desafíos donde aplicar estas capacidades en equipos que
              valoren la calidad técnica, la autonomía y el impacto real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}