import React from "react";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-slate-950"></div>

      {/* Gradient Glow Effects */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          {/* Small Badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-xl">
            🚀 Restaurant-Focused Digital Agency
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            We Build
            <span className="block text-orange-500 mt-2">
              High-Converting
            </span>
            Restaurant Websites
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
            From modern landing pages to full-scale ordering platforms,
            we design and develop powerful digital solutions that increase
            online orders, reservations and brand growth for restaurants worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg shadow-orange-500/30">
              View Our Work
            </button>

            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:border-orange-500/40 transition rounded-xl font-semibold">
              Contact Us
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">50+</h3>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">5+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">100%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>

        </div>

        {/* Right Side Visual Card */}
        <div className="relative">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">

            <h3 className="text-2xl font-bold mb-6 text-orange-500">
              Why Restaurants Choose Us
            </h3>

            <ul className="space-y-5 text-gray-300">
              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>⚡ Ultra Fast Performance</span>
                <span className="text-green-400">●</span>
              </li>

              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>📱 Mobile-First Design</span>
                <span className="text-green-400">●</span>
              </li>

              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>🛒 Online Ordering Integration</span>
                <span className="text-green-400">●</span>
              </li>

              <li className="flex justify-between border-b border-white/5 pb-3">
                <span>🔐 Secure Authentication</span>
                <span className="text-green-400">●</span>
              </li>

              <li className="flex justify-between">
                <span>📈 SEO Optimized Structure</span>
                <span className="text-green-400">●</span>
              </li>
            </ul>

          </div>

          {/* Floating Decorative Card */}
          <div className="absolute -bottom-8 -left-8 bg-orange-500/10 border border-orange-500/30 backdrop-blur-xl p-6 rounded-2xl hidden lg:block">
            <p className="text-sm text-orange-400 font-semibold">
              Specialized in Restaurant Digital Solutions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;