import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  MonitorSmartphone,
  PlugZap,
  Bot,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ---------------- Small Components ---------------- */

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
    {children}
  </span>
);

const GlassCard = ({ children, className }) => (
  <div
    className={`rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const Button = ({ href, variant = "primary", children, className }) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "secondary"
      ? "border border-white/20 text-white hover:bg-white/10"
      : "bg-emerald-400 text-slate-950 hover:bg-emerald-300";
  return (
    <a href={href} className={`${base} ${styles} ${className || ""}`}>
      {children}
    </a>
  );
};

const SectionTitle = ({ kicker, title, desc }) => (
  <div>
    <div className="text-xs uppercase tracking-widest text-emerald-400">
      {kicker}
    </div>
    <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
);

/* ---------------- Data ---------------- */

const products = [
  {
    icon: Store,
    title: "Commission‑Free Online Ordering",
    desc: "Delivery zones, pickup, coupons, loyalty, and real‑time order tracking — without marketplace fees.",
    tags: ["Delivery + Pickup", "Coupons", "Loyalty"],
  },
  {
    icon: MonitorSmartphone,
    title: "Branded iOS & Android Apps",
    desc: "Your restaurant app with push notifications, saved favorites, reorder, and rewards.",
    tags: ["Push", "Rewards", "Reorder"],
  },
  {
    icon: PlugZap,
    title: "POS & Kitchen Integrations",
    desc: "Sync menus and send orders to kitchen printers/POS with fewer mistakes and faster service.",
    tags: ["Menu Sync", "Printers", "Realtime"],
  },
  {
    icon: Bot,
    title: "WhatsApp + SMS Automation",
    desc: "Abandoned carts, weekly deals, VIP segments, and delivery updates — fully automated.",
    tags: ["Segments", "Campaigns", "Templates"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Track conversion, popular items, repeat customers, and campaign ROI across channels.",
    tags: ["ROI", "Insights", "Trends"],
  },
  {
    icon: ShieldCheck,
    title: "Security + Compliance Ready",
    desc: "Modern stack, secure payments integrations, and privacy‑first data handling best practices.",
    tags: ["Secure", "GDPR‑aware", "Reliable"],
  },
];

/* ---------------- Main Component ---------------- */

function SoftwareSection() {
  return (
    <section id="software" className=" py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="Software ecosystem"
            title="Your Restaurant Growth Platform"
            desc="This is where you look like a real tech company. Show your products as a platform — not a list of services."
          />
          <div className="flex gap-3">
            <Button href="#book" className="whitespace-nowrap">
              Get a Proposal <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#portfolio" variant="secondary" className="whitespace-nowrap">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <GlassCard className="h-full flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    <Zap className="h-3 w-3" />
                    Platform
                  </div>
                </div>

                <div className="mt-4 text-base font-bold text-white">{p.title}</div>
                <div className="mt-2 text-sm text-white/70">{p.desc}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftwareSection;
