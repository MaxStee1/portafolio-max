import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="bg-surface py-24">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Habilidades
        </p>
        <h2 className="text-3xl font-bold text-text-primary mb-12">
          Capacidades técnicas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-background rounded-md p-6 border border-border">
              <h3 className="text-text-primary font-semibold mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-accent-dim text-accent text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
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