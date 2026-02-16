import React from "react";

const FullCapability = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold">
            We Build <span className="text-orange-500">Any Type</span> of
            Restaurant Website
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            From small café websites to enterprise-level restaurant chains —
            we deliver custom digital solutions tailored to your business goals.
          </p>
        </div>

        {/* Big Feature Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-orange-500/40 transition">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Online Ordering System
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Fully custom ordering system with cart, payment integration,
              order tracking and admin dashboard.
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-orange-500/40 transition">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Table Reservation Platform
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Smart booking system with calendar, time-slot control,
              confirmation emails and admin panel.
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-orange-500/40 transition">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Multi-Branch Management
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Manage multiple restaurant branches from a centralized dashboard.
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-orange-500/40 transition">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Custom WordPress Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              WordPress theme & plugin development tailored specifically
              for restaurant businesses.
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-orange-500/40 transition">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              High Performance Custom Apps
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Built with Next.js, TypeScript & modern backend architecture
              for blazing fast performance.
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-orange-500/40 transition">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Secure Authentication System
            </h3>
            <p className="text-gray-400 leading-relaxed">
              JWT-based authentication and role-based access control
              for admin & staff management.
            </p>
          </div>

        </div>

        {/* Strong Closing Statement */}
        <div className="mt-24 text-center">
          <p className="text-2xl font-semibold text-orange-500">
            From concept to launch — we handle everything.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FullCapability;