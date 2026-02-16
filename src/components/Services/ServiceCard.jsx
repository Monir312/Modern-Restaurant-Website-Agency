import React from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const ServicesGrid = () => {
  return (
    <section className="relative bg-slate-950 py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Premium <span className="text-orange-500">Restaurant Services</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            We build powerful digital solutions for restaurants — from custom
            website design to online ordering systems and revenue growth strategies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* CARD 1 */}
          <div className="group relative">

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-0  transition duration-700"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 transition-all duration-500 group-hover:-translate-y-5 group-hover:shadow-2xl group-hover:shadow-orange-500/20">

              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400 text-3xl mb-8 group-hover:scale-110 transition duration-500">
                <FaLaptopCode />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition">
                Custom Website Design
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                High-converting, visually stunning restaurant websites built
                with Next.js, Tailwind CSS, and optimized backend systems.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Fully Custom UI/UX
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Mobile Responsive
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  SEO Optimized
                </li>
              </ul>

              <button className="flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-500 transition">
                Learn More
                <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
              </button>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="group relative">

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 opacity-0 transition duration-700"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 transition-all duration-500 group-hover:-translate-y-5 group-hover:shadow-2xl group-hover:shadow-green-500/20">

              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-green-500/20 text-green-400 text-3xl mb-8 group-hover:scale-110 transition duration-500">
                <FaShoppingCart />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition">
                Online Ordering System
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Seamless food ordering platform with payment gateway integration
                and real-time order tracking.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  Stripe / SSLCommerz
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  Admin Dashboard
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-green-400 mr-3" />
                  Order Notifications
                </li>
              </ul>

              <button className="flex items-center gap-2 text-green-400 font-semibold hover:text-green-500 transition">
                Learn More
                <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
              </button>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="group relative">

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-0 transition duration-700"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 transition-all duration-500 group-hover:-translate-y-5 group-hover:shadow-2xl group-hover:shadow-purple-500/20">

              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 text-3xl mb-8 group-hover:scale-110 transition duration-500">
                <FaChartLine />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition">
                SEO & Growth Strategy
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Advanced SEO and speed optimization techniques to increase
                visibility and boost restaurant revenue.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-purple-400 mr-3" />
                  Local SEO
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-purple-400 mr-3" />
                  Google Ranking
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <FaCheckCircle className="text-purple-400 mr-3" />
                  Speed Optimization
                </li>
              </ul>

              <button className="flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-500 transition">
                Learn More
                <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;