import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencia" className="bg-background py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Experiencia
        </p>
        <h2 className="text-3xl font-bold text-text-primary mb-12">
          Trayectoria profesional
        </h2>
        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border-l-2 border-accent pl-8 relative"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-text-primary font-semibold text-lg">
                  {exp.role}
                </h3>
                <span className="text-text-muted text-sm">{exp.period}</span>
              </div>
              <p className="text-accent text-sm font-medium mb-4">
                {exp.company}
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-text-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-accent mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent-dim text-accent text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}