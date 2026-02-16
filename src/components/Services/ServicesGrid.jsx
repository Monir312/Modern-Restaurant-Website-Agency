import React from "react";
import { FaLaptopCode, FaShoppingCart, FaCalendarAlt, FaCashRegister, FaMobileAlt, FaSearch, FaRocket, FaTools, FaPaintBrush, FaArrowRight } from "react-icons/fa";

// 9 Services Array
const services = [
  {
    title: "Custom Restaurant Website Design",
    desc: "Tailor-made, visually stunning websites that reflect your restaurant brand and attract more customers.",
    icon: <FaLaptopCode />
  },
  {
    title: "Online Ordering System",
    desc: "Seamless online ordering platform integrated with menus, payments and notifications.",
    icon: <FaShoppingCart />
  },
  {
    title: "Table Reservation System",
    desc: "Easy-to-use reservation module to manage bookings and improve customer experience.",
    icon: <FaCalendarAlt />
  },
  {
    title: "POS Integration",
    desc: "Synchronize your point-of-sale with your website to streamline orders and sales.",
    icon: <FaCashRegister />
  },
  {
    title: "Mobile Responsive Design",
    desc: "Fully mobile-optimized sites for smooth browsing on any device.",
    icon: <FaMobileAlt />
  },
  {
    title: "SEO for Restaurants",
    desc: "Optimized for search engines to bring more organic traffic and increase visibility.",
    icon: <FaSearch />
  },
  {
    title: "Speed Optimization",
    desc: "Lightning-fast performance to reduce bounce rate and boost conversions.",
    icon: <FaRocket />
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing support, updates and technical assistance to keep your site running smoothly.",
    icon: <FaTools />
  },
  {
    title: "Branding & Logo Design",
    desc: "Creative branding solutions and professional logo design to strengthen your identity.",
    icon: <FaPaintBrush />
  }
];

const ServicesGrid = () => {
  return (
    <section className="relative  py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Grid Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our comprehensive restaurant services designed to increase
            reservations, streamline orders, and grow your brand online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl transition duration-500 hover:-translate-y-3 hover:border-orange-500/40 shadow-lg shadow-black/20"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 text-2xl mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>

              {/* Learn More Button */}
              <div className="mt-6">
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-md shadow-orange-500/30 flex items-center gap-2">
                  Learn More <FaArrowRight />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to Boost Your Restaurant Online? 
            <span className="text-orange-500"> Let’s Get Started</span>
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            Our full-service approach ensures a custom-built restaurant website that is fast, secure, mobile-friendly, and optimized for growth.
          </p>
          <div className="mt-10">
            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg shadow-orange-500/30">
              Book Free Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;