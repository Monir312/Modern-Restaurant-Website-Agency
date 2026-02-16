import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow & Shapes */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[250px] rounded-full"></div>
      <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-pink-500/5 blur-[200px] rounded-full"></div>
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-20 lg:py-20 flex flex-col lg:flex-row items-center lg:justify-between gap-10">

        {/* Left Side Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Our Premium
            <span className="block text-orange-500 mt-3">Restaurant Services</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mt-4">
            We build modern, high-performance restaurant websites that boost
            reservations, online orders, and brand visibility. Your restaurant
            deserves a digital presence that converts visitors into loyal customers.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg shadow-orange-500/30 flex items-center gap-3">
              Start Your Project
              <FaArrowRight />
            </button>
            <button className="px-10 py-4 border border-white/20 hover:border-orange-500 text-white transition rounded-xl font-semibold">
              Schedule Consultation
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap gap-6 justify-center lg:justify-start">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl text-gray-300 hover:border-orange-500 transition">
              100+ Restaurant Websites Built
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl text-gray-300 hover:border-orange-500 transition">
              24/7 Support & Maintenance
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl text-gray-300 hover:border-orange-500 transition">
              SEO & Performance Optimized
            </div>
          </div>

        </div>

        {/* Right Side Illustration / Hero Image */}
        <div className="lg:w-1/2 relative flex justify-center items-center">

          {/* Floating Cards */}
          <div className="absolute -top-20 -left-10 w-64 h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-lg shadow-orange-500/10 animate-float">
            <h3 className="text-white font-bold text-lg mb-2">Custom Website Design</h3>
            <p className="text-gray-400 text-sm">Visually stunning & conversion-focused layouts.</p>
          </div>

          <div className="absolute bottom-0 right-0 w-60 h-36 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 flex flex-col justify-between shadow-lg shadow-purple-500/10 animate-float animation-delay-2000">
            <h3 className="text-white font-bold text-lg mb-2">Online Ordering System</h3>
            <p className="text-gray-400 text-sm">Seamless ordering & payment integration.</p>
          </div>

          {/* Hero Image / Mockup */}
          <div className="relative w-96 h-96 bg-gradient-to-tr from-orange-500/30 to-purple-500/30 rounded-3xl flex items-center justify-center shadow-xl">
            <span className="text-white/30 text-8xl font-bold">🍽️</span>
          </div>

        </div>

      </div>

      {/* Optional Bottom SVG Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.58,29.67,158,28.15,70.54-2,135.18-24.24,206-28.15,84.18-4.78,168.36,13.23,252,35.77,70.66,19.31,140.42,40.61,211,36.12,74.08-4.76,146.77-31.85,218-61.89,46.94-20.28,94-42.64,141-45.92,53.34-3.86,106.69,12.43,160,22.5V0Z"
            fill="#1e293b"
          ></path>
        </svg>
      </div>

    </section>
  );
};

export default ServicesHero;