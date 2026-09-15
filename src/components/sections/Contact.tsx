export default function Contact() {
  return (
    <section id="contacto" className="bg-background py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Contacto
        </p>
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          ¿Hablamos?
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-xl mb-12">
          Estoy abierto a nuevas oportunidades, proyectos y colaboraciones.
          No dudes en escribirme.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:max.malebranc@gmail.com"
            className="bg-surface border border-border rounded-md p-6 flex flex-col gap-2 hover:border-accent transition-colors group"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Email
            </span>
            <span className="text-text-primary text-sm group-hover:text-accent transition-colors">
              max.malebranc@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/max-malebrán-cortés-96ba89388"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-md p-6 flex flex-col gap-2 hover:border-accent transition-colors group"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              LinkedIn
            </span>
            <span className="text-text-primary text-sm group-hover:text-accent transition-colors">
              linkedin.com/in/max-malebran
            </span>
          </a>
          <a
            href="https://github.com/MaxStee1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface border border-border rounded-md p-6 flex flex-col gap-2 hover:border-accent transition-colors group"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              GitHub
            </span>
            <span className="text-text-primary text-sm group-hover:text-accent transition-colors">
              github.com/MaxStee1
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}