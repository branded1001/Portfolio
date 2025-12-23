export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition">
      
      <h3 className="text-xl text-white font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1 bg-black border border-gray-700 rounded-full text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}
