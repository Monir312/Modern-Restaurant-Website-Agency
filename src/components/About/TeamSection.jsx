import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Arafat Rahman",
    role: "Founder & Lead Developer",
    desc: "Full-stack architect specialized in scalable restaurant platforms using modern technologies.",
    image: "https://i.pravatar.cc/400?img=12"
  },
  {
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    desc: "Crafts high-converting restaurant interfaces focused on user experience and branding.",
    image: "https://i.pravatar.cc/400?img=32"
  },
  {
    name: "Sabbir Hasan",
    role: "Backend Engineer",
    desc: "Builds secure APIs, payment systems and reservation logic for complex restaurant systems.",
    image: "https://i.pravatar.cc/400?img=52"
  },
  {
    name: "Mehedi Islam",
    role: "SEO & Growth Specialist",
    desc: "Optimizes restaurant websites for traffic growth, ranking and online visibility.",
    image: "https://i.pravatar.cc/400?img=22"
  }
];

const TeamSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[200px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Meet Our
            <span className="block text-orange-500 mt-3">
              Expert Team
            </span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Behind every successful restaurant website is a team of creative
            designers, skilled developers and digital strategists who turn ideas
            into powerful online experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-orange-500/40 rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-orange-500 font-medium mt-2">
                  {member.role}
                </p>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {member.desc}
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <a className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-orange-500 transition">
                    <FaLinkedinIn />
                  </a>
                  <a className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-orange-500 transition">
                    <FaGithub />
                  </a>
                  <a className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-orange-500 transition">
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-28 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            We Don’t Just Build Websites —
            <span className="text-orange-500"> We Build Restaurant Brands</span>
          </h3>

          <p className="text-gray-400 leading-relaxed text-lg">
            Our team collaborates closely with restaurant owners to deliver
            digital platforms that attract customers, increase reservations and
            boost online orders.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;