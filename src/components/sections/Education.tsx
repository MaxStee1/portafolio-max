export default function Education() {
  return (
    <section id="formacion" className="bg-surface py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Formación
        </p>
        <h2 className="text-3xl font-bold text-text-primary mb-12">
          Educación y credenciales
        </h2>
        <div className="flex flex-col gap-8">
          <div className="bg-background border border-border rounded-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-text-primary font-semibold text-lg">
                Ingeniería en Tecnologías de Información
              </h3>
              <span className="text-text-muted text-sm">Egresado 2026</span>
            </div>
            <p className="text-accent text-sm font-medium mb-3">
              Universidad Católica del Norte
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Formación en desarrollo de software, integración de datos, bases de datos,
              redes, seguridad informática y gestión de proyectos TI.
            </p>
          </div>
          <div className="bg-background border border-border rounded-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-text-primary font-semibold text-lg">
                Minor de Profundidad: Seguridad Digital y Ciberinteligencia
              </h3>
              <span className="text-text-muted text-sm">2024 — 2025</span>
            </div>
            <p className="text-accent text-sm font-medium mb-3">
              Universidad Católica del Norte
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Programa de especialización de 20 SCT enfocado en seguridad digital,
              análisis de amenazas, ciberinteligencia y gestión de riesgos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}