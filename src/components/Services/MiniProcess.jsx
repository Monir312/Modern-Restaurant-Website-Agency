import React from "react";
import {
  FaSearch,
  FaPenNib,
  FaCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const MiniProcess = () => {
  return (
    <section className="relative  py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Our Simple <span className="text-orange-500">Work Process</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            We follow a clear, structured process to deliver high-performing
            restaurant websites that drive real results.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* STEP 1 */}
          <div className="group relative text-center">

            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0  transition duration-500"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-4">

              <div className="text-orange-500 text-sm font-semibold mb-2">
                01
              </div>

              <FaSearch className="text-4xl text-orange-400 mx-auto mb-6 group-hover:scale-110 transition duration-300" />

              <h3 className="text-white font-bold text-lg mb-3">
                Discovery
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze your restaurant goals, target audience, and brand
                identity before planning the strategy.
              </p>

            </div>
          </div>

          {/* STEP 2 */}
          <div className="group relative text-center">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0  transition duration-500"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-4">

              <div className="text-purple-400 text-sm font-semibold mb-2">
                02
              </div>

              <FaPenNib className="text-4xl text-purple-400 mx-auto mb-6 group-hover:scale-110 transition duration-300" />

              <h3 className="text-white font-bold text-lg mb-3">
                Design
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                We craft modern, attractive UI/UX design tailored to your
                restaurant’s unique identity.
              </p>

            </div>
          </div>

          {/* STEP 3 */}
          <div className="group relative text-center">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 opacity-0  transition duration-500"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-4">

              <div className="text-green-400 text-sm font-semibold mb-2">
                03
              </div>

              <FaCode className="text-4xl text-green-400 mx-auto mb-6 group-hover:scale-110 transition duration-300" />

              <h3 className="text-white font-bold text-lg mb-3">
                Development
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Our developers build secure, scalable systems with modern
                technologies and clean architecture.
              </p>

            </div>
          </div>

          {/* STEP 4 */}
          <div className="group relative text-center">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0  transition duration-500"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-4">

              <div className="text-blue-400 text-sm font-semibold mb-2">
                04
              </div>

              <FaRocket className="text-4xl text-blue-400 mx-auto mb-6 group-hover:scale-110 transition duration-300" />

              <h3 className="text-white font-bold text-lg mb-3">
                Launch
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                After testing & optimization, we launch your website smoothly
                with high performance.
              </p>

            </div>
          </div>

          {/* STEP 5 */}
          <div className="group relative text-center">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0  transition duration-500"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-4">

              <div className="text-yellow-400 text-sm font-semibold mb-2">
                05
              </div>

              <FaHeadset className="text-4xl text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition duration-300" />

              <h3 className="text-white font-bold text-lg mb-3">
                Support
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                We provide continuous maintenance and support to keep your
                restaurant website growing.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MiniProcess;