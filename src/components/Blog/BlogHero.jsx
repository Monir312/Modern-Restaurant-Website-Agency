import { ArrowRight } from "lucide-react";

export default function BlogHero() {
  const miniHighlights = [
    {
      title: "Restaurant Website Tips",
      description:
        "Design high-converting, visually stunning restaurant websites that increase orders.",
    },
    {
      title: "SEO & Online Orders",
      description:
        "Boost visibility and maximize online orders with smart SEO strategies.",
    },
    {
      title: "Digital Marketing Insights",
      description:
        "Learn actionable marketing tips to attract and retain loyal customers.",
    },
  ];

  return (
    <section className="relative  text-white overflow-hidden pt-36 pb-32 px-4">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -top-10 -right-32 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-32 -left-24 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm text-emerald-400 mb-6">
          Restaurant Insights & Strategies
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Expert <span className="text-emerald-400">Tips & Strategies</span> for Your Restaurant
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Stay ahead with actionable advice on restaurant website design, 
          online ordering growth, SEO, digital marketing, website speed & UX, 
          and the latest industry trends.
        </p>

        {/* CTA Button */}
        <a
          href="#blog-grid"
          className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition text-lg"
        >
          Read Latest Articles
          <ArrowRight size={20} />
        </a>

        {/* Mini Highlights */}
        <div className="mt-16 grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {miniHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-emerald-400/40 transition duration-300 shadow"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
              <a
                href="#blog-grid"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
              >
                Read More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Stats Line */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-300 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">50+</span> actionable tips
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">20+</span> real case studies
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold">10+</span> expert insights
          </div>
        </div>

        {/* Bottom Divider / Tagline */}
        <div className="mt-16 border-t border-slate-800 pt-10 max-w-3xl mx-auto">
          <p className="text-slate-500 text-sm leading-relaxed">
            Our blog helps restaurant owners and marketers improve their online presence, 
            boost orders, and enhance customer experience with practical, step-by-step strategies.
          </p>
        </div>

      </div>
    </section>
  );
}