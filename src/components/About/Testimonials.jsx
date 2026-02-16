import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "David Martinez",
    role: "Owner, FineBite Restaurant",
    review:
      "Our online reservations increased by 60% after launching the new website. The design is premium, fast and extremely user-friendly.",
    image: "https://i.pravatar.cc/150?img=15"
  },
  {
    name: "Sophia Khan",
    role: "Founder, Urban Spice Cafe",
    review:
      "The team understood our restaurant brand perfectly. The online ordering system runs flawlessly and boosted our daily orders.",
    image: "https://i.pravatar.cc/150?img=25"
  },
  {
    name: "Michael Chen",
    role: "Manager, Royal Dine",
    review:
      "Professional, responsive and highly skilled. Our restaurant website now feels like a luxury brand platform.",
    image: "https://i.pravatar.cc/150?img=35"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            What Our
            <span className="block text-orange-500 mt-3">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            We’ve helped restaurants build powerful digital platforms that
            increase revenue, streamline operations and elevate brand presence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 p-10 rounded-3xl transition duration-500 hover:-translate-y-3"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

              <div className="relative">

                {/* Stars */}
                <div className="flex gap-2 text-orange-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  “{item.review}”
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/40"
                  />
                  <div>
                    <h4 className="font-bold text-lg">
                      {item.name}
                    </h4>
                    <p className="text-orange-500 text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Trust Statement */}
        <div className="mt-28 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Trusted by Restaurant Owners
            <span className="text-orange-500"> Worldwide</span>
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            Our commitment to performance, design excellence and business
            growth makes us a reliable digital partner for modern restaurants.
          </p>

          <div className="mt-10">
            <button className="px-10 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-semibold shadow-lg shadow-orange-500/30">
              Become Our Next Success Story
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;