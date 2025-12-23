import skills from "../data/skills";

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-amber-300 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Frontend */}
          <SkillCard title="Frontend" items={skills.frontend} />

          {/* Backend */}
          <SkillCard title="Backend" items={skills.backend} />

          {/* Database */}
          <SkillCard title="Database" items={skills.database} />

          {/* Tools */}
          <SkillCard title="Tools" items={skills.tools} />

        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl text-white font-semibold mb-4">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {items.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1 text-sm bg-black border border-gray-700 rounded-full text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
