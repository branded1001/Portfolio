"use client";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight ">
            <span className="text-amber-200">Hi, I’m</span> <span className="text-blue-500">Aditya Mourya</span>
          </h1>

          <h2 className="mt-3 text-xl md:text-2xl text-gray-300">
            MERN Stack & Laravel Developer
          </h2>

          <p className="mt-5 text-gray-300 max-w-lg">
            I build scalable, modern web applications using MERN Stack,
            Next.js and Laravel with clean UI and efficient backend logic.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
            >
              View Projects
            </a>

            <a
              href="/main_resume_mern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 px-6 py-3 border border-gray-700 hover:border-gray-500 transition rounded-lg font-medium"
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
            <img
              src="/adimg.jpeg"
              alt="Aditya Mourya"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border border-gray-700"
            />

          </div>
        </div>


      </div>
    </section>
  );
}
