import React from "react";

const frontend = [
  "Tailwind CSS",
  "TypeScript",
  "Next.js",
];

const backend = [
  "Node.js",
  "PHP",
  "Laravel",
];

const database = [
  "MongoDB",
  "PostgreSQL",
  "Firebase",
];

const cms = [
  "WordPress",
  "WordPress Plugin Development",
];

const security = [
  "JWT Authentication",
];

const TechStack = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      
      {/* Glow Background Effects */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold">
            Our <span className="text-orange-500">Technology Stack</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            We use modern, scalable and performance-focused technologies
            to build powerful restaurant websites, online ordering systems,
            reservation platforms and complete digital ecosystems.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Frontend */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 transition">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              Frontend Technologies
            </h3>
            <ul className="space-y-4 text-gray-300">
              {frontend.map((tech, i) => (
                <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                  <span>{tech}</span>
                  <span className="text-green-400">●</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 transition">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              Backend Development
            </h3>
            <ul className="space-y-4 text-gray-300">
              {backend.map((tech, i) => (
                <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                  <span>{tech}</span>
                  <span className="text-green-400">●</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Database */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 transition">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              Database & Cloud
            </h3>
            <ul className="space-y-4 text-gray-300">
              {database.map((tech, i) => (
                <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                  <span>{tech}</span>
                  <span className="text-green-400">●</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CMS & Security */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-orange-500/40 transition">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">
              CMS & Security
            </h3>
            <ul className="space-y-4 text-gray-300">
              {[...cms, ...security].map((tech, i) => (
                <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                  <span>{tech}</span>
                  <span className="text-green-400">●</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-400 leading-relaxed">
            Whether you need a custom-coded high-performance website,
            a scalable SaaS ordering system, or a WordPress-based restaurant site,
            we have the tools and expertise to deliver a complete solution.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TechStack;