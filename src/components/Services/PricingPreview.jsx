import React from "react";
import { FaCheckCircle, FaCrown } from "react-icons/fa";

const PricingPreview = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Simple <span className="text-orange-500">Pricing</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Flexible pricing plans designed for restaurants of all sizes.
            Choose the package that fits your business goals.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* STARTER PLAN */}
          <div className="group relative">

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-xl">

              <h3 className="text-2xl font-bold text-white mb-4">
                Starter Plan
              </h3>

              <p className="text-gray-400 mb-6">
                Perfect for small restaurants starting their online presence.
              </p>

              <div className="text-4xl font-extrabold text-white mb-8">
                $499
              </div>

              <ul className="space-y-4 mb-8 text-gray-300 text-sm">
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Custom Website Design
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Mobile Responsive
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Basic SEO Setup
                </li>
              </ul>

              <button className="w-full bg-white/10 hover:bg-orange-500 text-white py-3 rounded-full transition duration-300">
                Get Started
              </button>

            </div>
          </div>

          {/* GROWTH PLAN (POPULAR) */}
          <div className="group relative scale-105">

            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
              <FaCrown /> Most Popular
            </div>

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-100 blur"></div>

            <div className="relative bg-slate-900 border border-orange-500/30 rounded-3xl p-12 transition-all duration-500 shadow-2xl shadow-orange-500/20">

              <h3 className="text-2xl font-bold text-white mb-4">
                Growth Plan
              </h3>

              <p className="text-gray-400 mb-6">
                Ideal for growing restaurants needing online ordering.
              </p>

              <div className="text-4xl font-extrabold text-orange-500 mb-8">
                $999
              </div>

              <ul className="space-y-4 mb-8 text-gray-300 text-sm">
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Online Ordering System
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Payment Gateway
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Advanced SEO
                </li>
              </ul>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition duration-300">
                Choose Plan
              </button>

            </div>
          </div>

          {/* PREMIUM PLAN */}
          <div className="group relative">

            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-xl">

              <h3 className="text-2xl font-bold text-white mb-4">
                Premium Plan
              </h3>

              <p className="text-gray-400 mb-6">
                Complete digital solution for large restaurants.
              </p>

              <div className="text-4xl font-extrabold text-white mb-8">
                $1999
              </div>

              <ul className="space-y-4 mb-8 text-gray-300 text-sm">
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Everything in Growth
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  POS Integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  Speed Optimization
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-orange-500 mr-3" />
                  6 Months Support
                </li>
              </ul>

              <button className="w-full bg-white/10 hover:bg-purple-600 text-white py-3 rounded-full transition duration-300">
                Contact Sales
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingPreview;