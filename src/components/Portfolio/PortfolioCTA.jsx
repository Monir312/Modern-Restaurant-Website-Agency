import { ArrowRight, PhoneCall, CheckCircle } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="relative bg-slate-950 text-white py-24 px-4 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Ready to Be Our Next{" "}
          <span className="text-emerald-400">Success Story?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you run a café, fast-food chain, or fine dining restaurant —
          we build high-converting websites and automation systems
          designed to increase bookings, direct orders, and customer retention.
        </p>

        {/* Trust Points */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300">

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-400" />
            Strategy-First Approach
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-400" />
            Revenue-Focused Systems
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-emerald-400" />
            Long-Term Growth Support
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition text-lg"
          >
            Book Strategy Call
            <ArrowRight size={20} />
          </a>

          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition text-lg"
          >
            <PhoneCall size={18} />
            Call Us Directly
          </a>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-slate-800 pt-10">

          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Let’s build a digital system that gives your restaurant full control,
            stronger branding, and predictable revenue growth —
            without relying heavily on third-party delivery platforms.
          </p>

        </div>

      </div>
    </section>
  );
}