import { ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectGrid() {
  const projects = [
    {
      name: "Bella Coffee House",
      industry: "Cafe",
      description:
        "Modern website + online ordering integration with automated email campaigns.",
    },
    {
      name: "Tokyo Sushi Bar",
      industry: "Fine Dining",
      description:
        "Luxury redesign with reservation automation and CRM loyalty system.",
    },
    {
      name: "Street Bites Express",
      industry: "Fast Food",
      description:
        "High-converting landing funnel with direct ordering & SMS promotions.",
    },
    {
      name: "Green Bowl Kitchen",
      industry: "Healthy Restaurant",
      description:
        "SEO-focused website with subscription meal automation system.",
    },
    {
      name: "Urban Steakhouse",
      industry: "Fine Dining",
      description:
        "Premium brand identity, booking system & customer retention workflow.",
    },
    {
      name: "Pizza Hub Central",
      industry: "Fast Food",
      description:
        "Custom ordering system reducing third-party dependency by 40%.",
    },
  ];

  const getBadgeColor = (industry) => {
    switch (industry) {
      case "Cafe":
        return "bg-emerald-400/10 text-emerald-400";
      case "Fine Dining":
        return "bg-cyan-400/10 text-cyan-400";
      case "Fast Food":
        return "bg-amber-400/10 text-amber-400";
      default:
        return "bg-slate-700 text-slate-300";
    }
  };

  return (
    <section className="bg-slate-950 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Completed <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            A collection of restaurant websites, automation systems,
            and conversion-focused digital platforms built for measurable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden hover:border-emerald-400/40 transition duration-300"
            >

              {/* Image Placeholder */}
              <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 text-sm">
                Project Preview
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Industry Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs mb-4 ${getBadgeColor(
                    project.industry
                  )}`}
                >
                  {project.industry}
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-between">

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                  >
                    Details
                    <ArrowRight size={16} />
                  </a>

                </div>

              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}