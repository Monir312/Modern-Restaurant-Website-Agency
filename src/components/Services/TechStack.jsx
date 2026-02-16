import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";

const TechStack = () => {
  return (
    <section className="relative  py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Our <span className="text-orange-500">Tech Stack</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            We use modern and powerful technologies to build fast, secure,
            scalable restaurant websites and ordering systems.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* React */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/20">
            <FaReact className="text-5xl text-cyan-400 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">React.js</h3>
          </div>

          {/* Next.js */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <SiNextdotjs className="text-5xl text-white mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">Next.js</h3>
          </div>

          {/* TypeScript */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <SiTypescript className="text-5xl text-blue-500 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">TypeScript</h3>
          </div>

          {/* Tailwind */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <SiTailwindcss className="text-5xl text-sky-400 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">Tailwind CSS</h3>
          </div>

          {/* Node.js */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <FaNodeJs className="text-5xl text-green-500 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">Node.js</h3>
          </div>

          {/* MongoDB */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <SiMongodb className="text-5xl text-green-400 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">MongoDB</h3>
          </div>

          {/* PostgreSQL */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <SiPostgresql className="text-5xl text-blue-400 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">PostgreSQL</h3>
          </div>

          {/* Firebase */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <SiFirebase className="text-5xl text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">Firebase</h3>
          </div>

          {/* JWT */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <SiJsonwebtokens className="text-5xl text-red-500 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">JWT Auth</h3>
          </div>

          {/* PHP */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <FaPhp className="text-5xl text-indigo-400 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">PHP</h3>
          </div>

          {/* Laravel */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <FaLaravel className="text-5xl text-red-500 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">Laravel</h3>
          </div>

          {/* WordPress */}
          <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 text-center transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 hover:shadow-xl">
            <FaWordpress className="text-5xl text-blue-500 mx-auto mb-6 group-hover:scale-110 transition duration-500" />
            <h3 className="text-white font-semibold text-lg">WordPress</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;