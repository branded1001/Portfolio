export default function About() {
  return (
    <section className="py-20 px-6 bg-black" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-200">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I’m a passionate <span className="text-white">Full Stack Developer</span> with
            strong hands-on experience in <span className="text-white">MERN Stack, Next.js</span>,
            and <span className="text-white">Laravel</span>. I enjoy building scalable web
            applications with clean UI and efficient backend logic.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I have worked on real-world projects like university management systems,
            hospital management platforms, and dynamic course management applications.
            My focus is always on writing maintainable code and creating smooth user
            experiences.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently, I’m looking for opportunities where I can grow as a developer,
            contribute to meaningful projects, and sharpen my problem-solving skills.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-amber-300">
            Quick Info
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>
              <span className="text-white font-medium">Name:</span> Aditya Mourya
            </li>
            <li>
              <span className="text-white font-medium">Role:</span> Full Stack Developer
            </li>
            <li>
              <span className="text-white font-medium">Tech:</span> MERN, Next.js, Laravel
            </li>
            <li>
              <span className="text-white font-medium">Experience:</span> Projects & Internship
            </li>
            <li>
              <span className="text-white font-medium">Availability:</span> Open to Work
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
