"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Receipt,
  Award,
  Activity,
  Quote,
  Star,
  ArrowUpRight,
  Users,
  CircleDollarSign,
  TrendingUp,
  Target,
  Check,
} from "lucide-react";

type OutcomeVisual = "network" | "revenue" | "milestones" | "volume";

const OUTCOMES: {
  id: string;
  number: string;
  tag: string;
  icon: typeof Building2;
  title: string;
  body: string;
  bullets: string[];
  metric: { value: string; label: string };
  visual: OutcomeVisual;
}[] = [
  {
    id: "practices",
    number: "01",
    tag: "Network",
    icon: Building2,
    title: "Practices Successfully Partnered",
    body:
      "Hundreds of forward-thinking dental practices across the country have already transformed the way they deliver care — and get paid — with our turnkey sleep model. From solo practitioners to multi-location groups, our system delivers scalable results.",
    bullets: [
      "Solo and group practices",
      "Active in 28 states",
      "Multi-location ready",
      "Quarterly business reviews",
    ],
    metric: { value: "25+", label: "Practices partnered" },
    visual: "network",
  },
  {
    id: "reimbursements",
    number: "02",
    tag: "Revenue",
    icon: Receipt,
    title: "$50M+ Insurance Reimbursements Processed",
    body:
      "With access to national-level payer contracts and expert billing support, our partners have successfully collected millions in medical reimbursements — often at much higher rates than traditional practice models.",
    bullets: [
      "National payer contracts",
      "Higher per-case yield",
      "Faster collection cycles",
      "Transparent reporting",
    ],
    metric: { value: "$50M+", label: "Reimbursements processed" },
    visual: "revenue",
  },
  {
    id: "milestones",
    number: "03",
    tag: "Outcomes",
    icon: Award,
    title: "95% of Qualified Applicants Reach Growth Milestones",
    body:
      "We've built our program for success. From training to ongoing support, nearly all qualified partners hit defined financial and operational growth goals — proving the model's predictability and power.",
    bullets: [
      "Defined growth milestones",
      "Ongoing 1:1 coaching",
      "Clinical & financial KPIs",
      "Predictable outcomes",
    ],
    metric: { value: "95%", label: "Hit growth milestones" },
    visual: "milestones",
  },
  {
    id: "appliances",
    number: "04",
    tag: "Volume",
    icon: Activity,
    title: "20+ Appliances Per Month — Average Partner Delivery",
    body:
      "Our streamlined appliance workflow makes it easy to deliver more oral sleep devices — creating consistent, recurring revenue without disrupting your daily operations.",
    bullets: [
      "Streamlined fitting workflow",
      "Recurring monthly revenue",
      "Lab logistics handled",
      "Compliance tracking",
    ],
    metric: { value: "20+/mo", label: "Avg. appliances per partner" },
    visual: "volume",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Within six months we moved from a handful of sleep cases a quarter to a recurring revenue stream that pays for two staff. The model is the difference.",
    name: "Dr. M. Patel",
    role: "Group practice owner",
    initials: "MP",
  },
  {
    quote:
      "The billing team alone has been worth the partnership. Our denial rate dropped, our average reimbursement went up, and we stopped chasing claims.",
    name: "Dr. S. Kim",
    role: "Solo practitioner",
    initials: "SK",
  },
  {
    quote:
      "We're delivering more than 30 appliances a month now. The workflow plugs in without disrupting the hygiene side of the practice at all.",
    name: "Dr. R. Alvarez",
    role: "Multi-location group",
    initials: "RA",
  },
];

function CountTo({ value, suffix, active }: { value: number; suffix?: string; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);
  return (
    <>
      {n.toLocaleString()}
      {suffix ?? ""}
    </>
  );
}

const QUICK_STATS = [
  { value: 25, suffix: "+", label: "Practices partnered", icon: Building2 },
  { value: 50, suffix: "M+", label: "Reimbursements", icon: Receipt },
  { value: 95, suffix: "%", label: "Hit milestones", icon: Award },
  { value: 20, suffix: "/mo", label: "Appliances per partner", icon: Activity },
];

export default function SuccessStories() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 80% 20%, rgba(42,191,191,0.20), transparent 60%), radial-gradient(900px 500px at 10% 90%, rgba(42,191,191,0.12), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 80%)",
          }}
        />
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-32 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-teal/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-teal">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-teal">Success Stories</span>
          </motion.nav>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30 backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Real partner outcomes
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Transforming dental practices through{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              sleep medicine
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Join the growing network of successful dentists who&apos;ve unlocked
            powerful new growth and patient care outcomes through Dental Sleep
            Link.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Become our next success story</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#outcomes"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-teal hover:text-teal"
            >
              See the outcomes
            </Link>
          </motion.div>

          {/* Featured hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="relative mx-auto mt-16 max-w-5xl"
          >
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[2px] rounded-[2rem] opacity-50"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(42,191,191,0.6), rgba(42,191,191,0) 28%, rgba(42,191,191,0) 72%, rgba(42,191,191,0.6))",
              }}
            />
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-navy ring-1 ring-white/10 shadow-2xl shadow-teal/10">
              <Image
                src="/images/success-stories/hero.jpg"
                alt="Successful dental sleep partner practice"
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 90vw"
                className="object-cover"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <motion.span
                aria-hidden="true"
                animate={{ y: ["-10%", "110%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"
              />
              <span className="absolute right-6 top-6 rounded-full bg-teal px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-teal/30">
                25+ partners
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK STAT STRIP */}
      <section ref={statsRef} className="relative overflow-hidden bg-navy py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(42,191,191,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {QUICK_STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl bg-navy-mid/70 p-6 ring-1 ring-white/10 backdrop-blur transition-all hover:ring-teal/40 hover:shadow-2xl hover:shadow-teal/20"
                >
                  <motion.span
                    aria-hidden="true"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal/10 blur-2xl"
                  />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/30 to-teal/10 text-teal ring-1 ring-teal/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="relative mt-5 text-5xl font-black leading-none text-white">
                    <CountTo value={s.value} suffix={s.suffix} active={inView} />
                  </p>
                  <p className="relative mt-3 text-sm text-white/70">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES STACK */}
      <section id="outcomes" className="relative scroll-mt-32 bg-white py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 100% 0%, rgba(42,191,191,0.10), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(42,191,191,0.08), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(11,31,58,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="space-y-24">
            {OUTCOMES.map((p, i) => {
              const Icon = p.icon;
              const reverse = i % 2 === 1;
              return (
                <div key={p.id} id={p.id} className="scroll-mt-32">
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                      reverse ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7 }}
                      className="relative"
                    >
                      <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className={`pointer-events-none absolute -top-12 z-0 select-none text-[10rem] font-black leading-none tracking-tighter ${
                          reverse ? "-right-2" : "-left-2"
                        }`}
                        style={{
                          WebkitTextStroke: "2px rgba(42,191,191,0.30)",
                          color: "transparent",
                        }}
                      >
                        {p.number}
                      </motion.span>
                      <div className="relative">
                        <motion.div
                          aria-hidden="true"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-[2px] rounded-[2rem] opacity-50"
                          style={{
                            background:
                              "conic-gradient(from 0deg, rgba(42,191,191,0.6), rgba(42,191,191,0) 28%, rgba(42,191,191,0) 72%, rgba(42,191,191,0.6))",
                          }}
                        />
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-mid to-navy ring-1 ring-teal/20 shadow-2xl shadow-navy/10">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{
                              background:
                                "radial-gradient(600px 360px at 30% 0%, rgba(42,191,191,0.18), transparent 60%), radial-gradient(500px 300px at 100% 100%, rgba(42,191,191,0.10), transparent 60%)",
                            }}
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 opacity-[0.10]"
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                              backgroundSize: "32px 32px",
                              maskImage:
                                "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 85%)",
                              WebkitMaskImage:
                                "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 85%)",
                            }}
                          />
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute right-6 top-3 select-none text-[11rem] font-black leading-none text-teal/[0.06]"
                          >
                            {p.number}
                          </span>
                          <div className="absolute inset-0 flex items-center justify-center px-12 py-14">
                            {p.visual === "network" && <NetworkVisual />}
                            {p.visual === "revenue" && <RevenueVisual />}
                            {p.visual === "milestones" && <MilestonesVisual />}
                            {p.visual === "volume" && <VolumeVisual />}
                          </div>
                          <motion.div
                            aria-hidden="true"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-dashed border-teal/30"
                          />
                          <motion.span
                            aria-hidden="true"
                            animate={{ y: ["-10%", "110%"] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                            className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-70"
                          />
                          <div className="absolute left-5 top-5 z-10">
                            <motion.span
                              aria-hidden="true"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="absolute inset-0 rounded-2xl bg-teal/40"
                            />
                            <motion.span
                              whileHover={{ rotate: 8, scale: 1.05 }}
                              className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-2xl shadow-teal/40 ring-1 ring-white/30"
                            >
                              <Icon className="h-7 w-7" aria-hidden="true" />
                            </motion.span>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-navy/5 backdrop-blur"
                          >
                            <p className="text-2xl font-bold leading-none text-teal-dark">
                              {p.metric.value}
                            </p>
                            <p className="mt-1 text-[10px] uppercase tracking-wider text-navy/60">
                              {p.metric.label}
                            </p>
                          </motion.div>
                          <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur ring-1 ring-white/25">
                            {p.number} / 04
                          </span>
                          <span className="absolute bottom-6 right-6 rounded-full bg-teal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal/30">
                            {p.tag}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-5xl font-black leading-none text-teal-dark">
                          {p.number}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-teal/60 to-transparent" />
                        <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-dark ring-1 ring-teal/20">
                          {p.tag}
                        </span>
                      </div>
                      <h2 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                        {p.title}
                      </h2>
                      <p className="mt-5 text-lg leading-relaxed text-navy/70">{p.body}</p>
                      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                        {p.bullets.map((b, k) => (
                          <motion.li
                            key={b}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: k * 0.06 }}
                            className="flex items-start gap-3 rounded-2xl bg-white p-3.5 ring-1 ring-navy/10 shadow-sm transition-all hover:shadow-md hover:ring-teal/40"
                          >
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-white shadow-sm">
                              <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                            </span>
                            <span className="text-sm font-medium text-navy/80">{b}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(42,191,191,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              In their words
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Partner voices.
            </h2>
            <p className="mt-4 text-white/70">
              Real partners. Real outcomes. Anonymized for compliance.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl bg-navy-mid/70 p-7 ring-1 ring-white/10 backdrop-blur transition-all hover:ring-teal/40 hover:shadow-2xl hover:shadow-teal/20"
              >
                <Quote className="h-8 w-8 text-teal/60" aria-hidden="true" />
                <div className="mt-4 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-teal text-teal" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-white/85">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/15 text-teal-light ring-2 ring-teal/40 font-bold">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal to-teal-dark p-10 text-center shadow-2xl shadow-teal/30 sm:p-14"
          >
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
            />
            <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
              Want to be our next case study?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              Apply now and we&apos;ll map a clear, profitable path for your
              sleep practice — within one business day.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-dark shadow-lg transition-transform hover:scale-105"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/partner-criteria"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See partner criteria
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ==================== OUTCOME VISUALS ==================== */

function NetworkVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const orbiters = [
    { angle: 0, label: "DR" },
    { angle: 60, label: "JL" },
    { angle: 120, label: "MP" },
    { angle: 180, label: "SK" },
    { angle: 240, label: "AR" },
    { angle: 300, label: "EM" },
  ];

  return (
    <div ref={ref} className="relative h-full w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[260px] w-[260px]">
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-6%] rounded-full border border-dashed border-teal/30"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[10%] rounded-full border border-dotted border-teal/25"
          />

          <svg
            viewBox="0 0 260 260"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {orbiters.map((o, i) => {
              const rad = (o.angle * Math.PI) / 180;
              const cx = 130 + Math.cos(rad) * 110;
              const cy = 130 + Math.sin(rad) * 110;
              return (
                <motion.line
                  key={i}
                  x1="130"
                  y1="130"
                  x2={cx}
                  y2={cy}
                  stroke="rgba(42,191,191,0.4)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.span
              aria-hidden="true"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-teal/30"
            />
            <motion.span
              aria-hidden="true"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute inset-0 rounded-full bg-teal/30"
            />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-white shadow-2xl shadow-teal/50 ring-2 ring-white/30">
              <Users className="h-9 w-9" aria-hidden="true" />
            </span>
          </div>

          {orbiters.map((o, i) => {
            const rad = (o.angle * Math.PI) / 180;
            const cx = 130 + Math.cos(rad) * 110;
            const cy = 130 + Math.sin(rad) * 110;
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.1,
                  ease: "backOut",
                }}
                className="absolute"
                style={{
                  left: `${cx}px`,
                  top: `${cy}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.span
                  aria-hidden="true"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute inset-0 rounded-full bg-teal/40"
                />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-teal-light ring-2 ring-teal/50 backdrop-blur">
                  {o.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RevenueVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(50 * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const bars = [30, 42, 38, 56, 64, 72, 88, 100];

  return (
    <div ref={ref} className="relative h-full w-full">
      {/* Big counter */}
      <div className="absolute inset-x-0 top-2 flex flex-col items-center text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal">
          Reimbursed
        </p>
        <p className="mt-1 flex items-baseline gap-1 text-6xl font-black leading-none text-white">
          <span className="text-3xl text-teal">$</span>
          {n}
          <span className="text-3xl text-teal">M+</span>
        </p>
      </div>

      {/* Bar chart bottom */}
      <div className="absolute inset-x-6 bottom-2 flex h-[42%] items-end justify-between gap-2">
        {bars.map((h, i) => (
          <div key={i} className="relative flex-1">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: `${h}%` } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full overflow-hidden rounded-t-md bg-gradient-to-t from-teal-dark/70 to-teal shadow-[0_0_20px_rgba(42,191,191,0.4)]"
            >
              <motion.span
                aria-hidden="true"
                animate={{ y: ["120%", "-20%"] }}
                transition={{
                  duration: 2.8 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className="absolute inset-x-0 h-1/3 bg-gradient-to-t from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Floating coin chips */}
      {[
        { left: "6%", top: "38%", delay: 0 },
        { right: "8%", top: "44%", delay: 1.0 },
      ].map((pos, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: [0, -6, 0] } : {}}
          transition={{
            duration: 3 + i * 0.4,
            delay: pos.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-teal/20 ring-1 ring-teal/40 backdrop-blur"
          style={pos}
        >
          <CircleDollarSign className="h-4 w-4 text-teal-light" aria-hidden="true" />
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute right-2 top-2 flex items-center gap-1.5 rounded-lg bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-light backdrop-blur ring-1 ring-teal/30"
      >
        <TrendingUp className="h-3 w-3" aria-hidden="true" />
        Growing monthly
      </motion.div>
    </div>
  );
}

function MilestonesVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const target = 95;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const r = 80;
  const c = 2 * Math.PI * r;
  const offset = c - (c * target) / 100;

  return (
    <div ref={ref} className="relative h-full w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[210px] w-[210px]">
          <motion.span
            aria-hidden="true"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[-10%] rounded-full bg-teal/15 blur-2xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-12%] rounded-full border border-dashed border-teal/30"
          />

          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full -rotate-90"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ms-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2abfbf" />
                <stop offset="100%" stopColor="#0d8e8e" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="10"
            />
            <motion.circle
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="url(#ms-grad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              animate={inView ? { strokeDashoffset: offset } : {}}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
            />
            {/* Milestone tick markers */}
            {[0, 25, 50, 75].map((p, i) => {
              const ang = (p / 100) * 360;
              const rad = (ang * Math.PI) / 180;
              const cx = 100 + Math.cos(rad) * r;
              const cy = 100 + Math.sin(rad) * r;
              return (
                <motion.circle
                  key={p}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="#fff"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                />
              );
            })}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              Hit milestones
            </p>
            <p className="mt-1 text-6xl font-black leading-none text-white">
              {n}
              <span className="text-3xl text-teal">%</span>
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-wider text-teal-light">
              Of qualified partners
            </p>
          </div>
        </div>
      </div>

      {/* Floating milestone chips */}
      {[
        { label: "First case", left: "4%", top: "18%", delay: 0.2, icon: Target },
        { label: "$10k/mo", right: "4%", top: "22%", delay: 0.4, icon: TrendingUp },
        { label: "5×", left: "6%", bottom: "16%", delay: 0.6, icon: Award },
        { label: "Sleep-only", right: "6%", bottom: "20%", delay: 0.8, icon: Check },
      ].map((m, i) => {
        const Icon = m.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
            className="absolute flex items-center gap-1.5 rounded-lg bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-light backdrop-blur ring-1 ring-teal/30"
            style={m}
          >
            <Icon className="h-3 w-3" aria-hidden="true" />
            {m.label}
          </motion.div>
        );
      })}
    </div>
  );
}

function VolumeVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const heights = [18, 26, 32, 30, 42, 50, 58, 66, 72, 80, 90, 100];

  return (
    <div ref={ref} className="relative h-full w-full">
      {/* Top counter */}
      <div className="absolute inset-x-0 top-2 flex flex-col items-center text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-teal">
          Avg appliances / month
        </p>
        <p className="mt-1 text-5xl font-black leading-none text-white">
          20<span className="text-3xl text-teal">+</span>
        </p>
      </div>

      {/* Y-axis grid lines */}
      {[20, 40, 60, 80].map((y) => (
        <span
          key={y}
          aria-hidden="true"
          className="absolute left-2 right-2 h-px bg-white/8"
          style={{ bottom: `calc(${y * 0.5}% + 8px)` }}
        />
      ))}

      {/* Bars */}
      <div className="absolute inset-x-4 bottom-8 flex h-[52%] items-end justify-between gap-1.5">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div className="relative flex w-full flex-1 items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={inView ? { height: `${h}%` } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full overflow-hidden rounded-t-sm bg-gradient-to-t from-teal-dark/70 to-teal shadow-[0_0_15px_rgba(42,191,191,0.35)]"
              >
                <motion.span
                  aria-hidden="true"
                  animate={{ y: ["120%", "-20%"] }}
                  transition={{
                    duration: 3 + i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                  className="absolute inset-x-0 h-1/3 bg-gradient-to-t from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-white/40">
              {months[i]}
            </span>
          </div>
        ))}
      </div>

      {/* Trend line overlay */}
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="absolute inset-x-4 bottom-8 h-[52%] w-[calc(100%-2rem)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="vol-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2abfbf" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2abfbf" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M2,42 Q15,38 25,33 T48,22 T72,10 T98,2"
          fill="none"
          stroke="url(#vol-line)"
          strokeWidth="0.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
        />
      </svg>

      {/* Top trend chip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute right-2 top-2 flex items-center gap-1.5 rounded-lg bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-light backdrop-blur ring-1 ring-teal/30"
      >
        <TrendingUp className="h-3 w-3" aria-hidden="true" />
        12 mo trend
      </motion.div>
    </div>
  );
}
