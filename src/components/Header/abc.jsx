

/**
 * Enterprise UI Preview for RestaurantDesign.tech
 * Single-file, Tailwind + Framer Motion.
 * Replace placeholder text/media with your real content.
 */

const cn = (...classes) => classes.filter(Boolean).join(" ");

const useInterval = (cb, delay) => {
  const saved = useRef(cb);
  useEffect(() => {
    saved.current = cb;
  }, [cb]);
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => saved.current?.(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

const gradients = [
  "from-indigo-500/20 via-sky-500/10 to-fuchsia-500/20",
  "from-emerald-500/15 via-cyan-500/10 to-indigo-500/20",
  "from-rose-500/20 via-violet-500/10 to-sky-500/20",
];







const stats = [
  { label: "Restaurants powered", value: "120+" },
  { label: "Orders processed", value: "500K+" },
  { label: "Avg. growth", value: "30–40%" },
  { label: "Time to launch", value: "2–4 weeks" },
];

const caseStudies = [
  {
    name: "Multi‑Location Chicken Brand",
    region: "🇺🇸 USA",
    before: "12 orders/day",
    after: "68 orders/day",
    uplift: "+467%",
    note: "Direct ordering + push + SMS automation",
  },
  {
    name: "Independent Indian Restaurant",
    region: "🇬🇧 UK",
    before: "£1,200/week fees",
    after: "£250/week fees",
    uplift: "Saved 79%",
    note: "Commission‑free ordering + loyalty",
  },
  {
    name: "Pizza + Kebab Franchise",
    region: "🇪🇺 Europe",
    before: "Manual kitchen workflow",
    after: "Auto printer + POS",
    uplift: "Faster 35%",
    note: "Integration + automation",
  },
];



function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Button({ children, variant = "primary", className, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99]";
  const styles =
    variant === "secondary"
      ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
      : "bg-white text-slate-950 hover:bg-white/90";
  return (
    <a className={cn(base, styles, className)} {...props}>
      {children}
    </a>
  );
}

function SectionTitle({ kicker, title, desc, align = "left" }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {kicker ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Sparkles className="h-3.5 w-3.5" />
          <span>{kicker}</span>
        </div>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function GlassCard({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_-35px_rgba(0,0,0,0.7)] backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function TopNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-slate-950">
            <span className="text-sm font-black">RD</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-white">RestaurantDesign.tech</div>
            <div className="text-[11px] text-white/60">Restaurant Tech & Automation</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#software" className="hover:text-white">Software</a>
          <a href="#cases" className="hover:text-white">Results</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>

        <div className="flex items-center gap-2">
          <Button href="#book" className="hidden sm:inline-flex">
            Book a Call <ArrowRight className="h-4 w-4" />
          </Button>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Open menu"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("mobileMenu")?.classList.remove("hidden");
            }}
          >
            <Layers className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div id="mobileMenu" className="hidden md:hidden">
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4">
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#software" className="hover:text-white">Software</a>
            <a href="#cases" className="hover:text-white">Results</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <Button href="#book" className="mt-2">
              Book a Call <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="#"
              className="mt-1 text-xs text-white/60"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("mobileMenu")?.classList.add("hidden");
              }}
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



function HeroMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
      <GlassCard className="relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-white/70">Live Orders</div>
          <div className="inline-flex items-center gap-2 text-xs text-white/60">
            <Gauge className="h-4 w-4" />
            <span>Realtime</span>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          {[
            { item: "Chicken Wrap Meal", time: "2m", price: "$18.50" },
            { item: "Family Bucket", time: "5m", price: "£29.99" },
            { item: "Pizza + Wings Combo", time: "8m", price: "€22.00" },
          ].map((o, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <div>
                <div className="text-sm font-semibold text-white">{o.item}</div>
                <div className="mt-0.5 text-xs text-white/60">{o.time} ago • Direct</div>
              </div>
              <div className="text-sm font-bold text-white">{o.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">Conversion</div>
            <div className="mt-1 flex items-center gap-2">
              <LineChart className="h-4 w-4 text-white/80" />
              <div className="text-lg font-bold text-white">4.8%</div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">Repeat rate</div>
            <div className="mt-1 flex items-center gap-2">
              <Users className="h-4 w-4 text-white/80" />
              <div className="text-lg font-bold text-white">33%</div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      </GlassCard>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { icon: MessageCircle, label: "WhatsApp" },
          { icon: Zap, label: "SMS" },
          { icon: Cloud, label: "POS" },
        ].map((x) => (
          <div
            key={x.label}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
          >
            <x.icon className="h-4 w-4" />
            <span>{x.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



function SoftwareSection() {
  return (
    <section id="software" className="bg-slate-950 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="Software ecosystem"
            title="Your Restaurant Growth Platform"
            desc="This is where you look like a real tech company. Show your products as a platform — not a list of services."
          />
          <div className="flex gap-2">
            <Button href="#book" className="whitespace-nowrap">
              Get a Proposal <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#portfolio" variant="secondary" className="whitespace-nowrap">
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    <Zap className="h-3.5 w-3.5" />
                    Platform
                  </div>
                </div>
                <div className="mt-4 text-base font-bold text-white">{p.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</div>
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

function TrustSection() {
  return (
    <section id="services" className="bg-slate-950 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <SectionTitle
              kicker="Trust & authority"
              title="Built to feel enterprise — designed to convert"
              desc="UK/USA clients decide fast. This section boosts credibility using stats, security, process, and proof."
            />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure + reliable",
                  desc: "Modern best practices for stability and data handling.",
                },
                {
                  icon: Gauge,
                  title: "Performance‑first",
                  desc: "Fast UX for ordering, even on mobile networks.",
                },
                {
                  icon: Globe2,
                  title: "Global‑ready",
                  desc: "Optimized for USA/UK audiences and operations.",
                },
                {
                  icon: Rocket,
                  title: "Growth systems",
                  desc: "Automation that turns one‑time buyers into regulars.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5">
                    <f.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{f.title}</div>
                    <div className="mt-1 text-xs text-white/60">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <GlassCard>
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-white">Proof in numbers</div>
                <div className="text-xs text-white/60">Replace with your real stats</div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs text-white/60">{s.label}</div>
                    <div className="mt-1 text-2xl font-extrabold text-white">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-white">Enterprise process</div>
                <div className="mt-3 grid gap-3">
                  {["Strategy", "Build", "Launch", "Automate Growth"].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-slate-950">
                        <span className="text-sm font-black">{i + 1}</span>
                      </div>
                      <div className="text-sm font-semibold text-white">{step}</div>
                      <div className="ml-auto text-xs text-white/60">
                        {i === 0
                          ? "Call + goals"
                          : i === 1
                          ? "Systems + UI"
                          : i === 2
                          ? "Go live"
                          : "Campaigns"}
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
}

function CaseStudySection() {
  const [k, setK] = useState(0);
  useInterval(() => setK((p) => (p + 1) % caseStudies.length), 6000);

  return (
    <section id="cases" className="bg-slate-950 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="Results"
            title="Case studies that sell for you"
            desc="Show outcomes, not promises. UK/USA buyers trust numbers and workflows."
          />
          <div className="flex gap-2">
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setK((p) => (p - 1 + caseStudies.length) % caseStudies.length)}
              aria-label="Prev case"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setK((p) => (p + 1) % caseStudies.length)}
              aria-label="Next case"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-white/60">{caseStudies[k].region}</div>
                      <div className="mt-1 text-xl font-extrabold text-white">
                        {caseStudies[k].name}
                      </div>
                      <div className="mt-2 text-sm text-white/70">{caseStudies[k].note}</div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                      <div className="text-xs text-white/60">Impact</div>
                      <div className="text-lg font-extrabold text-white">{caseStudies[k].uplift}</div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/60">Before</div>
                      <div className="mt-1 text-lg font-bold text-white">{caseStudies[k].before}</div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/60">After</div>
                      <div className="mt-1 text-lg font-bold text-white">{caseStudies[k].after}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Pill>
                      <Rocket className="mr-1 h-3.5 w-3.5" />
                      Direct ordering
                    </Pill>
                    <Pill>
                      <MessageCircle className="mr-1 h-3.5 w-3.5" />
                      WhatsApp/SMS
                    </Pill>
                    <Pill>
                      <PlugZap className="mr-1 h-3.5 w-3.5" />
                      POS + kitchen
                    </Pill>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <GlassCard className="h-full">
              <div className="text-sm font-bold text-white">What you deliver</div>
              <div className="mt-4 space-y-3">
                {[
                  { icon: Store, label: "Commission‑free ordering" },
                  { icon: MonitorSmartphone, label: "Branded apps" },
                  { icon: PlugZap, label: "POS + printers" },
                  { icon: Bot, label: "Automations" },
                  { icon: BarChart3, label: "Analytics" },
                ].map((x) => (
                  <div
                    key={x.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5">
                      <x.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-white">{x.label}</div>
                    <ChevronRight className="ml-auto h-4 w-4 text-white/50" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const nodes = [
    { icon: Store, title: "Ordering Website", sub: "Commission‑free" },
    { icon: MonitorSmartphone, title: "Mobile Apps", sub: "iOS + Android" },
    { icon: PlugZap, title: "POS / Printer", sub: "Realtime" },
    { icon: Bot, title: "Automation", sub: "WhatsApp/SMS" },
    { icon: BarChart3, title: "Analytics", sub: "ROI tracking" },
  ];

  return (
    <section id="automation" className="bg-slate-950 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          align="center"
          kicker="System architecture"
          title="Infrastructure, not just a website"
          desc="This block makes you look enterprise: show how your platform connects ordering → apps → POS → automation → analytics."
        />

        <div className="mt-10">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative grid gap-4 md:grid-cols-5">
              {nodes.map((n, i) => (
                <div key={n.title} className="relative">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                        <n.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{n.title}</div>
                        <div className="mt-0.5 text-xs text-white/60">{n.sub}</div>
                      </div>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-white"
                        style={{ width: `${60 + i * 8}%` }}
                      />
                    </div>
                  </div>
                  {i < nodes.length - 1 ? (
                    <div className="hidden md:block">
                      <div className="absolute right-[-18px] top-1/2 h-[2px] w-9 bg-white/20" />
                      <div className="absolute right-[-22px] top-1/2 -translate-y-1/2">
                        <ChevronRight className="h-5 w-5 text-white/30" />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              {["Menu sync", "Delivery zones", "Coupons & loyalty", "Push campaigns", "Abandoned carts", "Operational reporting"].map(
                (x) => (
                  <div
                    key={x}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    <BadgeCheck className="h-4 w-4" />
                    <span>{x}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function CTASection() {
  return (
    <section id="book" className="bg-slate-950 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10" />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-8 p-6 md:grid-cols-12 md:p-10">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Rocket className="h-3.5 w-3.5" />
                <span>Free strategy call</span>
              </div>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Ready to grow your restaurant with a real platform?
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Get a plan that includes direct ordering, apps, POS workflows, and automation — built for USA & UK customers.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Store, label: "Direct ordering" },
                  { icon: Bot, label: "Automation" },
                  { icon: PlugZap, label: "POS + printers" },
                ].map((x) => (
                  <div
                    key={x.label}
                    className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                      <x.icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold text-white">{x.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                <div className="text-sm font-bold text-white">Book a call</div>
                <div className="mt-1 text-xs text-white/60">
                  Replace with your Calendly / form.
                </div>

                <form
                  className="mt-4 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Preview only — connect this to your backend / form.");
                  }}
                >
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Restaurant name"
                    required
                  />
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Phone (WhatsApp optional)"
                    required
                  />
                  <select
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/20"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled className="bg-slate-950">
                      What do you need?
                    </option>
                    <option value="ordering" className="bg-slate-950">
                      Online Ordering
                    </option>
                    <option value="apps" className="bg-slate-950">
                      Mobile Apps
                    </option>
                    <option value="pos" className="bg-slate-950">
                      POS/Printer Integration
                    </option>
                    <option value="automation" className="bg-slate-950">
                      Automation + Marketing
                    </option>
                    <option value="all" className="bg-slate-950">
                      Full Platform
                    </option>
                  </select>

                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-slate-950 hover:bg-white/90">
                    Request Strategy Call <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <ShieldCheck className="h-4 w-4" />
                    <span>No spam. Quick reply.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-slate-950">
                <span className="text-sm font-black">RD</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">RestaurantDesign.tech</div>
                <div className="text-xs text-white/60">USA · UK · Europe</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#software" className="hover:text-white">Software</a>
              <a href="#cases" className="hover:text-white">Results</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default function EnterpriseRestaurantLandingPreview() {
  return (
    <div className="min-h-screen bg-slate-950">
      <TopNav />
      <Hero />
      <VideoAndReviews />
      <SoftwareSection />
      <TrustSection />
      <CaseStudySection />
      <ArchitectureSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
