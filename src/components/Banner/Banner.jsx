import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from '../../assets/bg_1.jpg'
import bg2 from '../../assets/bg_2.jpg'
import bg3 from '../../assets/bg_3.jpg'
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Globe2,
  Cpu,
  Lock,
} from "lucide-react";

/* ----------------- Utility ----------------- */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useInterval(callback, delay) {
  useEffect(() => {
    if (!delay) return;
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }, [callback, delay]);
}

/* ----------------- Data ----------------- */

const heroSlides = [
  {
    image: bg1,
    kicker: "Restaurant Tech · Online Ordering · Automation",
    title: "Next-Generation Restaurant Technology",
    subtitle:
      "Commission-free online ordering, branded mobile apps, POS integrations, and automation — built for growth.",
    bullets: [
      "Own your customer data",
      "Reduce third-party commission fees",
      "Launch in weeks, scale fast",
    ],
    stat: { label: "Typical uplift", value: "20–40 orders/day" },
  },
  {
    image: bg2,
    kicker: "Replace Third-Party Fees",
    title: "Drive Direct Orders",
    subtitle:
      "Switch to commission-free ordering with loyalty, coupons, delivery zones, and real-time POS workflows.",
    bullets: [
      "£0 commission ordering",
      "Loyalty + promo engine",
      "Delivery & pickup built-in",
    ],
    stat: { label: "Avg. fee savings", value: "8–30%" },
  },
  {
    image: bg3,
    kicker: "Automation that scales",
    title: "Scale to 70–100 Orders/Day",
    subtitle:
      "WhatsApp + SMS + email automations, push notifications, and analytics dashboards.",
    bullets: [
      "Automated re-order campaigns",
      "Abandoned cart recovery",
      "Menu & pricing sync",
    ],
    stat: { label: "Go-live", value: "2–4 weeks" },
  },
];

const trustBadges = [
  { icon: Globe2, label: "USA, UK & EU Markets" },
  { icon: BadgeCheck, label: "Commission-Free Ordering" },
  { icon: Cpu, label: "POS & Printer Ready" },
  { icon: Lock, label: "Secure by Design" },
];

/* ----------------- Small Components ----------------- */

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white">
    {children}
  </span>
);

const Button = ({ children }) => (
  <a
    href="#contact"
    className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-300 transition"
  >
    {children}
    <ArrowRight className="h-4 w-4" />
  </a>
);

const GlassCard = ({ children }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
    {children}
  </div>
);

/* ----------------- Main Component ----------------- */

const Banner = () => {
  const [i, setI] = useState(0);
  const slide = heroSlides[i];

  useInterval(() => {
    setI((prev) => (prev + 1) % heroSlides.length);
  }, 6500);

  return (
<section className="relative h-[70vh] overflow-hidden">

  {/* Background Image */}
  <AnimatePresence>
    <motion.div
      key={i}
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={slide.image}
        alt="Restaurant Technology"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
    </motion.div>
  </AnimatePresence>

  {/* Content Wrapper */}
  <div className="relative z-10 h-full flex flex-col justify-center">
    <div className="mx-auto max-w-6xl px-4 w-full">

      <div className="grid items-center gap-8 md:grid-cols-12">

        {/* Left */}
        <div className="md:col-span-7 text-white">

          <div className="mb-2 text-[11px] uppercase tracking-widest text-emerald-400">
            {slide.kicker}
          </div>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {slide.title}
          </h1>

          <p className="mt-3 max-w-xl text-sm text-white/80">
            {slide.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {slide.bullets.map((b) => (
              <Pill key={b}>{b}</Pill>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4">
            <Button>Book Call</Button>

            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2">
              <div className="text-[10px] text-white/60">
                {slide.stat.label}
              </div>
              <div className="text-sm font-semibold">
                {slide.stat.value}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() =>
                setI((p) => (p - 1 + heroSlides.length) % heroSlides.length)
              }
              className="h-9 w-9 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() =>
                setI((p) => (p + 1) % heroSlides.length)
              }
              className="h-9 w-9 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

        {/* Right */}
        <div className="md:col-span-5 text-white">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur text-sm">
            <ul className="space-y-2">
              <li>• Commission-free ordering</li>
              <li>• Branded mobile apps</li>
              <li>• POS integration</li>
              <li>• Automation workflows</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    {/* Trust Badges (Bottom Fixed Inside 70vh) */}
    <div className="absolute bottom-4 left-0 w-full">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-white text-xs">
        {trustBadges.map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            <t.icon className="h-4 w-4" />
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

  );
};

export default Banner;
