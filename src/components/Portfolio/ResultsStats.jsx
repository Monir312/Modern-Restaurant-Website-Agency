import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";

export default function ResultsStats() {
  const stats = [
    {
      icon: <TrendingUp size={28} />,
      value: "+58%",
      label: "Average Online Order Growth",
      description:
        "Restaurants saw a significant increase in direct online orders after launch.",
    },
    {
      icon: <Users size={28} />,
      value: "+72%",
      label: "Customer Retention Improvement",
      description:
        "CRM automation & loyalty systems increased repeat customer visits.",
    },
    {
      icon: <DollarSign size={28} />,
      value: "$1.2M+",
      label: "Revenue Impact Generated",
      description:
        "Combined measurable revenue growth across all completed projects.",
    },
    {
      icon: <BarChart3 size={28} />,
      value: "34+",
      label: "Restaurant Systems Delivered",
      description:
        "Websites, ordering funnels, booking systems & automation platforms launched.",
    },
  ];

  return (
    <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Measurable <span className="text-emerald-400">Results</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Every project is built with performance and profitability in mind.
            Here’s the overall impact our systems have generated for restaurants.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="mb-16 p-10 rounded-3xl bg-slate-950 border border-slate-800 text-center">

          <h3 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-6">
            3x Average Growth
          </h3>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Restaurants that implemented our full website + automation
            system experienced up to 3x growth in bookings,
            online orders, and repeat customers within months.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-800 bg-slate-950 hover:border-emerald-400/40 transition duration-300"
            >

              {/* Icon */}
              <div className="mb-6 text-emerald-400">
                {stat.icon}
              </div>

              {/* Value */}
              <h4 className="text-3xl font-bold mb-2">
                {stat.value}
              </h4>

              {/* Label */}
              <p className="text-sm font-medium text-slate-300 mb-3">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Our focus isn’t just beautiful design —
            it’s building revenue-generating digital systems
            that give restaurants ownership, automation,
            and scalable growth.
          </p>
        </div>

      </div>
    </section>
  );
}