import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

/* ---------------- Utilities ---------------- */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SectionTitle = ({ kicker, title, desc }) => (
  <div className="mb-8">
    <div className="text-xs uppercase tracking-widest text-emerald-400">{kicker}</div>
    <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
);

/* ---------------- FAQ Data ---------------- */
const faqs = [
  {
    q: "How fast can we launch?",
    a: "Most restaurants go live in 2–4 weeks depending on menu complexity, POS requirements, and app store approvals.",
  },
  {
    q: "Can this replace UberEats/Deliveroo/Just Eat?",
    a: "Yes — you can drive direct orders through your website and app. Many brands still keep marketplaces for discovery, but shift repeat customers to direct.",
  },
  {
    q: "Do you support delivery + pickup + dine‑in?",
    a: "Yes. You can configure delivery zones, pickup time slots, and optional table ordering flows depending on your setup.",
  },
  {
    q: "Do you integrate with POS and kitchen printers?",
    a: "Yes. We can integrate with supported POS systems and connect kitchen printers/workflows so orders flow automatically.",
  },
  {
    q: "What ongoing support do you offer?",
    a: "We offer maintenance + growth packages including monitoring, updates, campaign automation, and menu optimization support.",
  },
];

/* ---------------- Main Component ---------------- */
function FAQSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className=" py-6">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          kicker="FAQ"
          title="Everything clients ask before they buy"
          desc="A clean accordion removes objections and increases bookings. Keep answers short, confident, and specific."
        />

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="text-sm font-bold text-white">{f.q}</div>
                <div
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5 transition-transform",
                    open === i ? "rotate-90" : "rotate-0"
                  )}
                >
                  <ChevronRight className="h-5 w-5 text-white/70" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 text-sm leading-relaxed text-white/70">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
