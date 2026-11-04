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
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { BOOKING_URL, FOUNDER } from "@/lib/seo";

const HERO_STATS = [
  { value: "$25k", label: "Implementation fees" },
  { value: "14%", label: "Appliance collections" },
  { value: "$249", label: "DSL membership" },
  { value: "~6 mo", label: "Planning horizon" },
];

const PILLARS = [
  {
    icon: Receipt,
    title: "Medical billing support",
    body: "Claims submission, follow-up, and reporting. Reimbursement and payment timing are not guaranteed.",
  },
  {
    icon: ShieldCheck,
    title: "Credentialing assistance",
    body: "Credentialing and documentation support. Practice responsibilities are defined in the agreement.",
  },
  {
    icon: Workflow,
    title: "Workflow implementation",
    body: "Agreed setup around dentist-led care. Software, appliances, and testing are not automatically included.",
  },
  {
    icon: GraduationCap,
    title: "Team training",
    body: "Training for the existing team where capacity permits. Staffing is assessed during planning.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    icon: Handshake,
    title: "Services around your practice",
    body: "DSL provides agreed nonclinical support. The practice remains independently owned, subject to the final agreement.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "A structured implementation plan",
    body: "Credentialing, setup, and training overlap. Go-live depends on payer, entity, staff, and clinical readiness.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Credentialing and documentation support",
    body: "Practice responsibilities are defined in the agreement. DSL does not claim that every regulatory requirement is covered.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Dentist-led clinical care",
    body: "Treating clinicians select, fit, adjust, and oversee appliances. DSL is not the diagnosing provider.",
  },
  {
    number: "05",
    icon: Heart,
    title: "Ongoing nonclinical support",
    body: "Ongoing billing and support are included in the 14% fee on appliance collections. Specific response times are not published yet.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Clear commercial terms",
    body: "Implementation fees, the collections fee, pass-through costs, and the separate membership are stated separately.",
  },
  {
    icon: Heart,
    title: "Patient care stays clinical",
    body: "A membership cannot replace diagnosis, appliance oversight, or clinically necessary follow-up.",
  },
  {
    icon: Compass,
    title: "Readiness before launch",
    body: "Planning takes about six months. A public launch date and a 30-day first-case promise are not offered.",
  },
];

const MARQUEE = [
  "Credentialing",
  "Training",
  "Billing support",
  "Planning",
  "Dentist-led care",
  "Readiness",
  "Credentialing",
  "Training",
  "Billing support",
  "Planning",
  "Dentist-led care",
  "Readiness",
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
      <Founder />
      <Values />
      <CTABand />
    </>
  );
}

/* ==================== HERO ==================== */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-12 pb-16 sm:pt-20 sm:pb-28">
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
              className="mt-5 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Support for general dentists adding{" "}
              <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                dental sleep medicine
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Dental Sleep Link helps general dentists add dental sleep medicine
              with implementation support, team training, credentialing
              assistance, and ongoing billing. Your practice retains
              responsibility for clinical care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-teal-dark px-7 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-teal/40 transition-all hover:shadow-teal/60"
              >
                Book a call
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
              className="pointer-events-none absolute -top-10 -left-4 select-none text-[6rem] font-black leading-none tracking-tighter sm:-top-20 sm:-left-8 sm:text-[12rem]"
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
                  Founding cohort
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
    { angle: 0, icon: Stethoscope },
    { angle: 60, icon: Receipt },
    { angle: 120, icon: Users },
    { angle: 180, icon: ShieldCheck },
    { angle: 240, icon: Workflow },
    { angle: 300, icon: TrendingUp },
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
        Cohort forming
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
        Dentist-led care
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
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
              A services model around dentist-led care.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              Dental Sleep Link supports credentialing, medical billing, team
              training, and workflow implementation. It does not take clinical
              responsibility away from the practice, and it does not promise
              that the work adds no time or no risk.
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
              Implementation fees are $25,000: $5,000 initially, with the
              remaining $20,000 spread over the next 11 months. Spencer Study
              Club is included. Ongoing billing and support are
              14% of appliance collections. Approved costs pass through at
              actual cost, and the $249 annual membership is retained by DSL.
            </p>
            <p className="text-lg leading-relaxed text-navy/80">
              An initial cohort of about three to five practices is planned.
              Use your existing team where capacity permits. Staffing and
              protected clinical time are assessed during planning.
            </p>

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {[
                "Credentialing support",
                "Team training",
                "Ongoing billing",
                "Practice-led care",
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
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-28">
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
              className="pointer-events-none absolute -right-4 -top-6 select-none text-[5rem] font-black leading-none text-teal/[0.07] sm:-right-10 sm:-top-12 sm:text-[10rem]"
            >
              01
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
              <Target className="h-3 w-3" aria-hidden="true" />
              Our mission
            </span>
            <h3 className="relative mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Make dental sleep medicine more accessible to general dentists.
            </h3>
            <p className="relative mt-5 text-lg leading-relaxed text-white/75">
              The proposed direction is practical support for credentialing,
              training, and billing, while the dentist remains responsible for
              clinical care. This is a planning statement, not a guarantee of
              income or patient outcomes.
            </p>

            <div className="relative mt-8 grid grid-cols-3 gap-3">
              {[
                { v: "Patient", l: "Care stays clinical" },
                { v: "Dentist", l: "Leads treatment" },
                { v: "Planning", l: "About six months" },
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
              className="pointer-events-none absolute -right-4 -top-6 select-none text-[5rem] font-black leading-none text-teal/[0.07] sm:-right-10 sm:-top-12 sm:text-[10rem]"
            >
              02
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
              <Compass className="h-3 w-3" aria-hidden="true" />
              Why we exist
            </span>
            <h3 className="relative mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
              General dentists need a workable way to add sleep care.
            </h3>
            <p className="relative mt-5 text-lg leading-relaxed text-white/75">
              Many practices do not yet have credentialing, billing workflow,
              or protected team time in place. Dental Sleep Link is being built
              to support those nonclinical pieces. It is an early cohort, not a
              nationwide mature network.
            </p>

            <ul className="relative mt-7 space-y-3">
              {[
                "Credentialing and documentation support",
                "Billing support, with variable payer outcomes",
                "Team training assessed against capacity",
                "Phased launch only after a readiness review",
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
          DSL coordinates agreed nonclinical support.{" "}
          <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
            Treating clinicians remain responsible for care.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

/* ==================== PILLARS / WHAT WE PROVIDE ==================== */

function Pillars() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
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
            The support behind each{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              participating practice
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
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-28">
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
            Services, training, and billing support{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              with responsibilities retained
            </span>
            .
          </h2>
          <p className="mt-5 text-white/70">
            Describe the work that is included. Do not treat legal
            classification, exclusivity, or zero extra work as settled.
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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
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
              Three values guide how a practice is supported.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/70">
              The practice keeps clinical authority. Commercial illustrations
              are planning tools, not achieved network results. Founder
              operating history, if later approved, will be labeled separately
              from Dental Sleep Link cohort outcomes.
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

/* ==================== FOUNDER ==================== */

function Founder() {
  return (
    <section className="relative scroll-mt-32 overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 20% 30%, rgba(42,191,191,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Founder
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Meet the founder
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10 md:grid-cols-[260px_1fr] md:gap-12"
        >
          <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-3xl bg-gradient-to-br from-teal/30 via-navy-mid to-navy ring-1 ring-white/10 md:mx-0">
            <div className="flex h-full w-full items-center justify-center text-white/40">
              <Users className="h-16 w-16" aria-hidden="true" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{FOUNDER.name}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-teal">
              {`${FOUNDER.role}, Dental Sleep Link`}
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              Brian founded Dental Sleep Link to help
              general dentists add dental sleep medicine with implementation,
              credentialing, and billing support, while each practice keeps
              responsibility for clinical care.
            </p>
            <a
              href={FOUNDER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-teal hover:bg-teal"
            >
              <LinkedInIcon className="h-4 w-4" />
              View Brian&apos;s LinkedIn profile
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==================== CTA BAND ==================== */

function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-dark via-teal to-teal-dark py-16 sm:py-20 lg:py-24">
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
          className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Discuss whether your practice is ready to plan.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/85"
        >
          A practice-fit conversation comes before any agreement. No payment is
          requested on this site, and launch depends on readiness.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-dark shadow-2xl shadow-black/20 transition-all hover:bg-navy hover:text-white"
          >
            Book a call
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
