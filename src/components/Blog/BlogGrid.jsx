import { ArrowRight } from "lucide-react";

export default function BlogGrid() {
  const posts = [
    {
      title: "Restaurant Website Tips",
      category: "Website",
      date: "Feb 15, 2026",
      description:
        "Learn how to design high-converting, visually stunning restaurant websites that engage visitors and increase orders.",
    },
    {
      title: "Online Ordering Growth Strategies",
      category: "Ordering",
      date: "Feb 10, 2026",
      description:
        "Discover proven strategies to grow online orders, reduce third-party dependency, and maximize revenue from direct bookings.",
    },
    {
      title: "SEO Tips for Restaurants",
      category: "SEO",
      date: "Feb 8, 2026",
      description:
        "Boost your restaurant website visibility on Google, drive local traffic, and attract hungry customers searching online.",
    },
    {
      title: "Digital Marketing for Food Business",
      category: "Marketing",
      date: "Feb 5, 2026",
      description:
        "Master social media, email campaigns, and paid advertising to attract and retain restaurant customers effectively.",
    },
    {
      title: "Website Speed & UX Tips",
      category: "UX",
      date: "Feb 2, 2026",
      description:
        "Learn how to improve your website speed, responsiveness, and overall user experience to increase conversions.",
    },
    {
      title: "Industry Trends",
      category: "Trends",
      date: "Jan 28, 2026",
      description:
        "Stay updated on the latest restaurant technology, online ordering trends, and marketing innovations shaping the industry.",
    },
  ];

  const getBadgeColor = (category) => {
    switch (category) {
      case "Website":
        return "bg-emerald-400/10 text-emerald-400";
      case "Ordering":
        return "bg-cyan-400/10 text-cyan-400";
      case "SEO":
        return "bg-orange-400/10 text-amber-400";
      case "Marketing":
        return "bg-purple-400/10 text-purple-400";
      case "UX":
        return "bg-pink-400/10 text-pink-400";
      case "Trends":
        return "bg-slate-700/20 text-slate-300";
      default:
        return "bg-slate-700/20 text-slate-300";
    }
  };

  return (
    <section id="blog-grid" className=" text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Latest <span className="text-emerald-400">Blog Articles</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Stay ahead with actionable tips, strategies, and trends
            for restaurant websites, online ordering, SEO, marketing, UX, and growth.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow hover:shadow-lg transition duration-300"
            >

              {/* Image Placeholder */}
              <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 text-sm">
                Blog Image
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[280px]">

                {/* Category Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs mb-3 ${getBadgeColor(
                    post.category
                  )}`}
                >
                  {post.category}
                </div>

                {/* Blog Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition">
                  {post.title}
                </h3>

                {/* Publish Date */}
                <p className="text-xs text-slate-400 mb-4">{post.date}</p>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {post.description}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>

              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}