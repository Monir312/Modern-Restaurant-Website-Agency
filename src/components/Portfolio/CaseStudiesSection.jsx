import { TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative  text-white py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Featured <span className="text-emerald-400">Case Studies</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Real restaurants. Real systems. Real measurable growth.
            Here’s how strategy, design, and automation combined
            to drive revenue and customer retention.
          </p>
        </div>

        {/* ================= CASE STUDY 1 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          {/* Image Placeholder */}
          <div className="rounded-2xl bg-slate-800 h-[380px] flex items-center justify-center text-slate-500 border border-slate-700">
            Project Screenshot
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-sm mb-4">
              Fine Dining
            </div>

            <h3 className="text-3xl font-bold mb-4">
              La Vista Italian Kitchen
            </h3>

            {/* Problem */}
            <div className="mb-6">
              <h4 className="font-semibold text-slate-200 mb-2">Challenge</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Outdated website, no online reservations,
                and zero customer retention system.
                Most bookings were manual phone calls.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <h4 className="font-semibold text-slate-200 mb-2">Solution</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  High-converting modern website redesign
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Automated reservation & CRM integration
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Email follow-up & loyalty automation
                </li>
              </ul>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="text-2xl font-bold text-emerald-400">+63%</h4>
                <p className="text-xs text-slate-400">Online Reservations</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-400">+41%</h4>
                <p className="text-xs text-slate-400">Website Traffic</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-400">2.3x</h4>
                <p className="text-xs text-slate-400">Repeat Customers</p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= CASE STUDY 2 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm mb-4">
              Fast Food
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Urban Burger Express
            </h3>

            {/* Problem */}
            <div className="mb-6">
              <h4 className="font-semibold text-slate-200 mb-2">Challenge</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Heavy dependency on third-party delivery apps,
                low profit margins, and no direct customer data ownership.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-6">
              <h4 className="font-semibold text-slate-200 mb-2">Solution</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Direct online ordering system
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Automated SMS & email promotions
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Conversion-focused landing funnels
                </li>
              </ul>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="text-2xl font-bold text-cyan-400">+52%</h4>
                <p className="text-xs text-slate-400">Direct Orders</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-cyan-400">+37%</h4>
                <p className="text-xs text-slate-400">Revenue Growth</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-cyan-400">+68%</h4>
                <p className="text-xs text-slate-400">Customer Retention</p>
              </div>
            </div>

          </div>

          {/* Image Placeholder */}
          <div className="rounded-2xl bg-slate-800 h-[380px] flex items-center justify-center text-slate-500 border border-slate-700">
            Project Screenshot
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-24 border-t border-slate-800 pt-12 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto">
            Each project is tailored to the restaurant’s unique audience,
            pricing model, and growth goals — combining design,
            automation, and measurable performance strategy.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 rounded-full px-6 py-3 bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition"
          >
            Start Your Growth Project
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}