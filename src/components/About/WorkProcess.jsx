import React from "react";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We analyze your restaurant concept, target audience, competitors and digital goals to create a clear project roadmap."
  },
  {
    title: "UI/UX Design",
    desc: "We craft a modern, conversion-focused restaurant interface that enhances user experience and drives reservations."
  },
  {
    title: "Development",
    desc: "Using modern technologies, we build a fast, scalable and secure restaurant website with custom functionality."
  },
  {
    title: "Integration",
    desc: "We integrate online ordering, reservation systems, payment gateways and management dashboards."
  },
  {
    title: "Testing & Optimization",
    desc: "We test across devices, optimize performance, improve SEO structure and ensure smooth user experience."
  },
  {
    title: "Launch & Growth",
    desc: "After launch, we monitor performance, provide support and help scale your restaurant’s digital presence."
  }
];

const WorkProcess = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Our Proven
            <span className="block text-orange-500 mt-3">
              Work Process
            </span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            We follow a structured and strategic workflow to ensure every
            restaurant website we build delivers measurable business results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-white/10"></div>

          <div className="space-y-20">

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Content */}
                <div className="md:w-1/2 p-6">
                  <div className="group bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 p-10 rounded-3xl transition duration-500 hover:-translate-y-2 relative">

                    {/* Step Number */}
                    <div className="absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-lg shadow-lg shadow-orange-500/20">
                      {index + 1}
                    </div>

                    <h3 className="text-2xl font-bold mt-6">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

                  </div>
                </div>

                {/* Dot Indicator */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full border-4 border-slate-950 shadow-lg shadow-orange-500/40"></div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            From Concept to Launch —
            <span className="text-orange-500"> We Handle Everything</span>
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            Our streamlined workflow ensures your restaurant website is delivered
            on time, optimized for performance and built for long-term growth.
          </p>

          <div className="mt-10">
            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg shadow-orange-500/30">
              Start Your Restaurant Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;