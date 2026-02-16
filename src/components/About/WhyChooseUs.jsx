import React from "react";

const features = [
  {
    title: "Restaurant Industry Expertise",
    desc: "We deeply understand restaurant workflows, online ordering behavior, and customer experience optimization."
  },
  {
    title: "Conversion-Focused Design",
    desc: "Every section is strategically designed to increase reservations, orders and customer engagement."
  },
  {
    title: "Blazing Fast Performance",
    desc: "Optimized architecture using modern frameworks to ensure lightning-fast loading speed."
  },
  {
    title: "Scalable Backend Systems",
    desc: "Built with Node.js, Laravel or custom architecture to handle growing restaurant operations."
  },
  {
    title: "Secure Authentication",
    desc: "JWT-based authentication and secure admin dashboards for safe restaurant management."
  },
  {
    title: "SEO & Growth Ready",
    desc: "Structured, SEO-friendly development to help restaurants rank higher on search engines."
  },
  {
    title: "Custom WordPress Solutions",
    desc: "Advanced WordPress themes & plugins tailored specifically for restaurant businesses."
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "We provide long-term technical support, upgrades and performance monitoring."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Why Restaurants
            <span className="block text-orange-500 mt-3">
              Choose Our Agency
            </span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            We don’t just design websites — we create powerful digital ecosystems
            that help restaurants increase revenue, streamline operations and
            build strong online brands.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 p-8 rounded-3xl transition duration-500 hover:-translate-y-2"
            >
              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

              <div className="relative">
                {/* Number Badge */}
                <div className="w-12 h-12 mb-6 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-28 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            We Combine Design, Technology &
            <span className="text-orange-500"> Business Strategy</span>
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            Our approach ensures that your restaurant website is not only
            visually stunning but also performance-driven, secure, scalable,
            and ready to grow with your business.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg shadow-orange-500/30">
              Start Your Project Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;