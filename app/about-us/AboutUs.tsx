"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  Compass,
  Building2,
  ShieldCheck,
  Users,
  Workflow,
  Receipt,
  GraduationCap,
  Handshake,
  Heart,
  Activity,
  Check,
  ArrowUpRight,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const HERO_STATS = [
  { value: "1st", label: "Sleep-only MSO" },
  { value: "25+", label: "Partner practices" },
  { value: "$12M+", label: "Reimbursed" },
  { value: "1,500+", label: "Appliances/mo" },
];

const PILLARS = [
  {
    icon: Receipt,
    title: "Centralized medical billing",
    body: "National payer contracts, coding, and collections handled end-to-end so reimbursements arrive faster.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & credentialing",
    body: "HIPAA, documentation, and policy frameworks fully managed — nothing for your team to assemble.",
  },
  {
    icon: Workflow,
    title: "Done-for-you systems",
    body: "Patient screening, intake, ordering, and outcome tracking workflows wired into your existing practice.",
  },
  {
    icon: GraduationCap,
    title: "Clinical training & mentorship",
    body: "Hands-on protocols, live shadowing, and ongoing support from clinicians who run sleep practices daily.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    icon: Handshake,
    title: "True Partnership Model",
    body: "We only win when you win. Your growth is our growth — fully aligned incentives, every quarter.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Turnkey Systems & Workflows",
    body: "Nothing to build from scratch. Our process is plug-and-play from day one of onboarding.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Compliance & Credentialing Handled",
    body: "HIPAA, documentation, policies — every regulatory requirement covered for you.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Sleep-Focused MSO",
    body: "100% dedicated to dental sleep medicine. Not a coaching company, not a vendor, not a side hustle.",
  },
  {
    number: "05",
    icon: Heart,
    title: "On-Going Support & Mentorship",
    body: "You're never left figuring things out alone. A dedicated success lead walks beside your team.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Outcome-driven",
    body: "Every system we build is measured by patient outcomes and partner profitability.",
  },
  {
    icon: Heart,
    title: "Patient-first",
    body: "Life-changing oral appliance therapy is the north star — accessible, well-fit, and well-supported.",
  },
  {
    icon: Compass,
    title: "Long-term thinking",
    body: "We build relationships measured in decades, not training cohorts.",
  },
];

const MARQUEE = [
  "Diagnose",
  "Treat",
  "Bill",
  "Scale",
  "Mentor",
  "Grow",
  "Diagnose",
  "Treat",
  "Bill",
  "Scale",
  "Mentor",
  "Grow",
];

export default function AboutUs() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhoWeAre />
      <MissionWhy />
      <Pillars />
      <Differentiators />
      <Values />
      <CTABand />
    </>
  );
}

/* ==================== HERO ==================== */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-20 pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 90% 10%, rgba(42,191,191,0.18), transparent 60%), radial-gradient(700px 400px at 5% 90%, rgba(42,191,191,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 left-0 h-96 w-96 rounded-full bg-teal/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
              </span>
              About Dental Sleep Link
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
            >
              The nation&apos;s first MSO built{" "}
              <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                exclusively for dental sleep medicine
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
            >
              We don&apos;t sell courses. We don&apos;t coach from a distance.
              We build sleep dentistry businesses with you — full
              infrastructure, real revenue systems, and a partnership measured
              in years.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-teal-dark px-7 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-teal/40 transition-all hover:shadow-teal/60"
              >
                Become a partner
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/the-model"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-teal/40 hover:bg-teal/10 hover:text-teal-light"
              >
                See the model
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {HERO_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-teal">{s.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -left-8 select-none text-[12rem] font-black leading-none tracking-tighter"
              style={{
                WebkitTextStroke: "2px rgba(42,191,191,0.22)",
                color: "transparent",
              }}
            >
              MSO
            </span>

            <div className="relative">
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[2px] rounded-[2rem] opacity-60"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(42,191,191,0.6), rgba(42,191,191,0) 30%, rgba(42,191,191,0) 70%, rgba(42,191,191,0.6))",
                }}
              />

              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-mid to-navy ring-1 ring-white/10">
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

                <div className="absolute inset-0 flex items-center justify-center px-12 py-14">
                  <NetworkGraphic />
                </div>

                <span className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur ring-1 ring-white/20">
                  Partner network
                </span>

                <motion.span
                  aria-hidden="true"
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                  className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NetworkGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const orbiters = [
    { angle: 0, label: "DR", icon: Stethoscope },
    { angle: 60, label: "JL", icon: Receipt },
    { angle: 120, label: "MP", icon: Users },
    { angle: 180, label: "SK", icon: ShieldCheck },
    { angle: 240, label: "AR", icon: Workflow },
    { angle: 300, label: "EM", icon: TrendingUp },
  ];

  return (
    <div ref={ref} className="relative h-full w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[280px] w-[280px]">
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-6%] rounded-full border border-dashed border-teal/30"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[10%] rounded-full border border-dotted border-teal/25"
          />

          <svg
            viewBox="0 0 280 280"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {orbiters.map((o, i) => {
              const rad = (o.angle * Math.PI) / 180;
              const cx = 140 + Math.cos(rad) * 120;
              const cy = 140 + Math.sin(rad) * 120;
              return (
                <motion.line
                  key={i}
                  x1="140"
                  y1="140"
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

          {/* Center hub */}
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
              <Building2 className="h-9 w-9" aria-hidden="true" />
            </span>
          </div>

          {orbiters.map((o, i) => {
            const rad = (o.angle * Math.PI) / 180;
            const cx = 140 + Math.cos(rad) * 120;
            const cy = 140 + Math.sin(rad) * 120;
            const Icon = o.icon;
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
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-navy text-teal-light ring-2 ring-teal/50 backdrop-blur">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute right-2 top-2 flex items-center gap-1.5 rounded-lg bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-light backdrop-blur ring-1 ring-teal/30"
      >
        <Activity className="h-3 w-3" aria-hidden="true" />
        25+ practices
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute left-2 bottom-2 flex items-center gap-1.5 rounded-lg bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur ring-1 ring-white/15"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
        </span>
        Always connected
      </motion.div>
    </div>
  );
}

/* ==================== MARQUEE ==================== */

function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {MARQUEE.map((w, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 text-2xl font-bold uppercase tracking-tight text-white/30"
          >
            {w}
            <span className="text-teal">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ==================== WHO WE ARE ==================== */

function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 10%, rgba(42,191,191,0.10), transparent 60%), radial-gradient(700px 400px at 0% 90%, rgba(42,191,191,0.08), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Who we are
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              A partnership model — not a course, not a coaching program.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              Dental Sleep Link is the nation&apos;s first dedicated MSO built
              exclusively to help general dentists launch, scale, and profit
              from dental sleep medicine — without adding complexity, risk, or
              extra workload to their practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed text-navy/80">
              Through centralized billing, compliance systems, clinical
              training, and a proven revenue structure, we turn sleep dentistry
              into a predictable and scalable income stream.
            </p>
            <p className="text-lg leading-relaxed text-navy/80">
              Increase collections, treat more patients, and build a path
              toward a full-time sleep practice — if and when you choose. We
              work alongside your existing team and your existing schedule.
            </p>

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {[
                "Not a vendor",
                "Not a consultant",
                "Not a course",
                "A long-term partner",
              ].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3 shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==================== MISSION + WHY ==================== */

function MissionWhy() {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 90% 10%, rgba(42,191,191,0.14), transparent 60%), radial-gradient(700px 400px at 5% 90%, rgba(42,191,191,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-mid to-navy p-10"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 select-none text-[10rem] font-black leading-none text-teal/[0.07]"
            >
              01
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
              <Target className="h-3 w-3" aria-hidden="true" />
              Our mission
            </span>
            <h3 className="relative mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Expand access to life-changing oral appliance therapy —
            </h3>
            <p className="relative mt-5 text-lg leading-relaxed text-white/75">
              while helping dental professionals unlock a new level of
              financial, clinical, and professional freedom. Every protocol we
              codify, every payer contract we negotiate, every workflow we
              install ladders back to that mission.
            </p>

            <div className="relative mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "Patient", l: "First" },
                { v: "Dentist", l: "Empowered" },
                { v: "Sleep", l: "Solved" },
              ].map((c) => (
                <div
                  key={c.l}
                  className="rounded-xl bg-white/5 p-4 text-center backdrop-blur ring-1 ring-white/10"
                >
                  <p className="text-sm font-bold text-teal">{c.v}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">
                    {c.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why we exist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-mid to-navy p-10"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 select-none text-[10rem] font-black leading-none text-teal/[0.07]"
            >
              02
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
              <Compass className="h-3 w-3" aria-hidden="true" />
              Why we exist
            </span>
            <h3 className="relative mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Sleep apnea is widespread. Dentists are the frontline.
            </h3>
            <p className="relative mt-5 text-lg leading-relaxed text-white/75">
              But most practices struggle because they lack the systems,
              billing access, and clinical support required to make sleep
              medicine work. That&apos;s the gap Dental Sleep Link was built
              to fill.
            </p>

            <ul className="relative mt-7 space-y-3">
              {[
                "Centralized billing with higher reimbursement rates",
                "Full compliance, credentialing, and onboarding",
                "Done-for-you systems and clinical training",
                "Path from first appliance to sleep-only practice",
              ].map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span className="text-white/85">{t}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center text-xl font-semibold text-white sm:text-2xl"
        >
          We don&apos;t just teach sleep dentistry —{" "}
          <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
            we build sleep dentistry businesses with you.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

/* ==================== PILLARS / WHAT WE PROVIDE ==================== */

function Pillars() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
            What we provide
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl">
            The infrastructure behind every{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              partner practice
            </span>
            .
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-xl hover:shadow-teal/10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/5 blur-2xl transition-all group-hover:bg-teal/15"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-lg shadow-teal/30">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-navy">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-navy/65">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==================== DIFFERENTIATORS ==================== */

function Differentiators() {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 90% 10%, rgba(42,191,191,0.14), transparent 60%), radial-gradient(700px 400px at 5% 90%, rgba(42,191,191,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
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
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30 backdrop-blur">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            What makes us different
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Not a vendor. Not a consultant. A{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              long-term growth partner
            </span>
            .
          </h2>
          <p className="mt-5 text-white/70">
            A fully built infrastructure designed to remove every barrier that
            stops dentists from succeeding in sleep medicine.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {DIFFERENTIATORS.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-mid to-navy p-8 transition-all hover:border-teal/40"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-10 select-none text-[8rem] font-black leading-none text-teal/[0.07] transition-all group-hover:text-teal/[0.12]"
                >
                  {d.number}
                </span>

                <div className="relative flex items-start gap-5">
                  <span className="relative flex-shrink-0">
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="absolute inset-0 rounded-2xl bg-teal/30"
                    />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-xl shadow-teal/30 ring-1 ring-white/20">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </span>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-teal">
                      {d.number} / 05
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {d.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==================== VALUES ==================== */

function Values() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
              <Heart className="h-3 w-3" aria-hidden="true" />
              What we stand for
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Three values guide every partnership decision.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              At Dental Sleep Link, we partner with forward-thinking dentists
              to revolutionize sleep health. Together, we enable life-changing
              care through innovative solutions, expert support, and proven
              results — one restful night at a time.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/10"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-lg shadow-teal/30">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy/65">
                      {v.body}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-navy/20"
                  >
                    0{i + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== CTA BAND ==================== */

function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-dark via-teal to-teal-dark py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-dashed border-white/20"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full border border-dotted border-white/15"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Ready to build a sleep practice without the guesswork?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/85"
        >
          Apply to partner with Dental Sleep Link. We&apos;ll review your
          practice, walk through the model, and outline a path to your first
          appliances together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-dark shadow-2xl shadow-black/20 transition-all hover:bg-navy hover:text-white"
          >
            Apply now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/how-to-join"
            className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
          >
            How to join
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
