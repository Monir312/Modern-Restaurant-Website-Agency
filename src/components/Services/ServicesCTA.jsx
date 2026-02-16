import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const ServicesCTA = () => {
  return (
    <section className="relative  py-32 px-6 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Glass Container */}
        <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-16 text-center overflow-hidden group transition-all duration-500 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/20">

          {/* Gradient Border Animation */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-0  blur transition duration-700"></div>

          {/* Content Wrapper */}
          <div className="relative z-10">

            {/* Small Tag */}
            <span className="inline-block mb-6 text-sm tracking-widest uppercase text-orange-400 font-semibold">
              Let’s Build Something Amazing
            </span>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
              Ready To Grow Your
              <span className="block text-orange-500">
                Restaurant Business?
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
              From custom restaurant websites to full online ordering systems,
              we provide complete digital solutions that increase your revenue,
              improve customer experience, and strengthen your brand presence.
              Let’s transform your restaurant into a powerful online business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

              {/* Primary Button */}
              <button className="group relative inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30">

                Start Your Project

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

              </button>

              {/* Secondary Button */}
              <button className="group inline-flex items-center gap-3 border border-white/20 text-white hover:border-orange-500 hover:text-orange-400 font-semibold px-8 py-4 rounded-full transition-all duration-300">

                <FaPhoneAlt className="transition-transform duration-300 group-hover:scale-110" />

                Book A Free Call

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesCTA;