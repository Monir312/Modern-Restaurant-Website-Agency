import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Rocket,
  Calendar,
  QrCode,
  PlugZap,
  Bot,
  Download,
} from "lucide-react";

/* ---------------- Utilities ---------------- */

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}


/* ---------------- Small Components ---------------- */

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white">
    {children}
  </span>
);

const GlassCard = ({ children }) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    {children}
  </div>
);

const SectionTitle = ({ kicker, title, desc }) => (
  <div>
    <div className="text-xs uppercase tracking-widest text-emerald-400">
      {kicker}
    </div>
    <h2 className="mt-3 text-3xl font-bold text-white">{title}</h2>
    <p className="mt-3 max-w-xl text-sm text-white/70">{desc}</p>
  </div>
);

/* ---------------- Main Component ---------------- */

const VideoReviews = () => {
  const [idx, setIdx] = useState(0);

  const reviews = useMemo(
    () => [
      {
        name: "Owner, UK Restaurant",
        stars: 5,
        quote:
          "We shifted repeat customers to direct ordering. Fees dropped and weekly sales increased within weeks.",
      },
      {
        name: "Franchise Manager, USA",
        stars: 5,
        quote:
          "The automation + push notifications brought customers back. The system feels like a real platform.",
      },
      {
        name: "Operator, EU Brand",
        stars: 5,
        quote:
          "POS + kitchen printer integration saved time and reduced mistakes. Launch was smooth and fast.",
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % reviews.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="demo" className=" py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">

          {/* Left Side */}
          <div className="md:col-span-7">
            <SectionTitle
              kicker="Meet the system"
              title="A simple demo that builds instant trust"
              desc="Use this section to show a short intro video (you + product demo). This is one of the highest-converting blocks for UK/USA clients."
            />

            <div className="mt-8">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/watch?v=Rk9d5RRIj08"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* Optional overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  Launch in 2–4 weeks
                </Pill>
                <Pill>
                  <Rocket className="mr-1 h-3.5 w-3.5" />
                  Growth automations included
                </Pill>
                <Pill>
                  <QrCode className="mr-1 h-3.5 w-3.5" />
                  QR + repeat ordering
                </Pill>
              </div>
            </div>
          </div>

          {/* Right Side Reviews */}
          <div className="md:col-span-5">
            <GlassCard>
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-white">
                  Client Reviews
                </div>

              </div>

              <div className="mt-6">
                <div className="mt-6 min-h-[160px] relative">
                  <AnimatePresence>
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex gap-1">
                        {Array.from({ length: reviews[idx].stars }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-white text-white"
                          />
                        ))}
                      </div>

                      <p className="mt-4 text-sm text-white/80 leading-relaxed">
                        “{reviews[idx].quote}”
                      </p>

                      <div className="mt-3 text-xs font-semibold text-white/60">
                        — {reviews[idx].name}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>


                {/* Controls */}
                <div className="mt-5 flex items-center gap-2">
                  <button
                    onClick={() =>
                      setIdx((p) => (p - 1 + reviews.length) % reviews.length)
                    }
                    className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={() =>
                      setIdx((p) => (p + 1) % reviews.length)
                    }
                    className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <div className="ml-auto flex gap-1.5">
                    {reviews.map((_, d) => (
                      <button
                        key={d}
                        onClick={() => setIdx(d)}
                        className={cn(
                          "h-2.5 rounded-full transition",
                          d === idx
                            ? "w-6 bg-white"
                            : "w-2.5 bg-white/30"
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* Feature List */}
                <div className="mt-8 grid gap-4">
                  {[
                    {
                      icon: Rocket,
                      title: "Conversion-focused UX",
                      desc: "Made for direct ordering + repeat customers.",
                    },
                    {
                      icon: PlugZap,
                      title: "Operational workflows",
                      desc: "POS + kitchen printers reduce mistakes.",
                    },
                    {
                      icon: Bot,
                      title: "Automation built-in",
                      desc: "WhatsApp/SMS/email campaigns that scale.",
                    },
                  ].map((f) => (
                    <div key={f.title} className="flex gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                        <f.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {f.title}
                        </div>
                        <div className="text-xs text-white/60">
                          {f.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
