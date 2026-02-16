import React from "react";

const MissionVision = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-orange-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold">
            Our Core <span className="text-orange-500">Purpose</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed text-lg">
            We are not just building websites — we are creating powerful digital
            systems that help restaurants grow, scale and dominate online.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          {/* Mission Card */}
          <div className="relative group">

            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 transition p-12 rounded-3xl h-full">

              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 text-sm rounded-full border border-orange-500/20">
                  Our Mission
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Empower Restaurants With 
                <span className="text-orange-500"> High-Performance </span>
                Digital Platforms
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                Our mission is to design and develop modern, fast, scalable
                restaurant websites that increase online orders, improve
                customer experience and build strong digital brands.
              </p>

              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>⚡ Blazing Fast Performance</span>
                  <span className="text-green-400">●</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>📱 Mobile-First Experience</span>
                  <span className="text-green-400">●</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>🛒 Smart Online Ordering</span>
                  <span className="text-green-400">●</span>
                </li>
                <li className="flex justify-between">
                  <span>🔐 Secure & Scalable Architecture</span>
                  <span className="text-green-400">●</span>
                </li>
              </ul>

            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">

            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 transition p-12 rounded-3xl h-full">

              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">
                  Our Vision
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-6">
                Become The Leading 
                <span className="text-orange-500"> Restaurant-Focused </span>
                Digital Agency
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                We envision a future where restaurants rely on powerful
                digital ecosystems to scale globally — and we aim to be
                the trusted technology partner behind that transformation.
              </p>

              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>🌍 Global Digital Expansion</span>
                  <span className="text-green-400">●</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>📊 Data-Driven Growth</span>
                  <span className="text-green-400">●</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-3">
                  <span>🚀 Continuous Innovation</span>
                  <span className="text-green-400">●</span>
                </li>
                <li className="flex justify-between">
                  <span>🤝 Long-Term Partnerships</span>
                  <span className="text-green-400">●</span>
                </li>
              </ul>

            </div>
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-400 leading-relaxed">
            We combine design excellence, modern technology, and deep
            restaurant industry understanding to create digital platforms
            that truly make a difference.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;