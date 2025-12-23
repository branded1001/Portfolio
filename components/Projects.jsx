import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-black mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
