import { projects, ProjectStatus } from "@/data/projects";

const statusColors: Record<ProjectStatus, string> = {
  "En planificación": "bg-yellow-900/30 text-yellow-400",
  "En desarrollo": "bg-blue-900/30 text-blue-400",
  "Publicado": "bg-green-900/30 text-green-400",
};

export default function Projects() {
  return (
    <section id="proyectos" className="bg-background py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Proyectos
        </p>
        <h2 className="text-3xl font-bold text-text-primary mb-12">
          Proyectos propios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-surface border border-border rounded-md p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-text-primary font-semibold text-lg">
                  {project.name}
                </h3>
                <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent-dim text-accent text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto pt-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline"
                  >
                    Ver sitio →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}