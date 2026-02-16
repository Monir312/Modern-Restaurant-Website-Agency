import { ArrowRight, BarChart3, Rocket, Globe } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden  text-white py-24 px-4">

      {/* Background Gradient Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-400 mb-6">
          <Rocket size={16} />
          Proven Restaurant Growth Systems
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Real Projects. <span className="text-emerald-400">Real Revenue Growth.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-slate-400 max-w-2xl text-lg leading-relaxed">
          Explore how we design high-converting restaurant websites,
          automate bookings & online orders, and build digital systems
          that turn visitors into loyal customers.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">

          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition"
          >
            View Case Studies
            <ArrowRight size={18} />
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            Book Strategy Call
          </a>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-slate-800"></div>

        {/* Stats Preview Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Stat 1 */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
              <BarChart3 size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">+42%</h3>
              <p className="text-slate-400 text-sm">
                Average increase in online orders after launch
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
              <Globe size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">30+</h3>
              <p className="text-slate-400 text-sm">
                Restaurant websites & automation systems delivered
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
              <Rocket size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">3x</h3>
              <p className="text-slate-400 text-sm">
                Average customer retention growth through CRM automation
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Highlight Box */}
        <div className="mt-16 p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur">

          <h3 className="text-2xl font-semibold mb-4">
            From Cafes to Fine Dining — We Build Systems That Scale
          </h3>

          <p className="text-slate-400 leading-relaxed max-w-3xl">
            Whether it’s a cozy café needing online ordering,
            a fast-food chain optimizing delivery funnels,
            or a fine dining brand upgrading digital presence —
            our portfolio showcases measurable impact,
            modern design, and revenue-focused strategy.
          </p>

        </div>

      </div>
    </section>
  );
}