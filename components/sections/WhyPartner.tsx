"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  HandCoins,
  TrendingUp,
} from "lucide-react";

const PILLARS = [
  {
    id: "grow",
    number: "01",
    eyebrow: "Practice growth",
    title: "Grow Your Sleep Practice",
    body:
      "Turn sleep dentistry into a major revenue driver. Our proven systems, training, and step-by-step guidance help your practice scale efficiently — without the guesswork.",
    icon: TrendingUp,
    image: "/images/snoring.jpg",
    stats: [
      { label: "Average case volume lift", value: "5×" },
      { label: "Onboarding time", value: "≤30 days" },
    ],
  },
  {
    id: "boost",
    number: "02",
    eyebrow: "Revenue uplift",
    title: "Boost Reimbursements",
    body:
      "Access national insurance contracts that significantly raise reimbursement rates. Centralized billing and collections mean faster payments and far less administrative load.",
    icon: HandCoins,
    image: "/images/chin-strap.jpg",
    stats: [
      { label: "Avg. reimbursement uplift", value: "+38%" },
      { label: "Days to payment", value: "−42%" },
    ],
  },
  {
    id: "support",
    number: "03",
    eyebrow: "Mentorship",
    title: "Hands-On Support & Mentorship",
    body:
      "From legal and compliance setup to ongoing clinical and operational mentorship, we provide the guidance you need to run a streamlined sleep practice at any scale.",
    icon: GraduationCap,
    image: "/images/turnkey-sleep-model.jpg",
    stats: [
      { label: "Dedicated success leads", value: "1:1" },
      { label: "Mentor response time", value: "<24h" },
    ],
  },
];

export default function WhyPartner() {
  return (
    <section
      id="the-model"
      className="relative scroll-mt-32 overflow-hidden bg-navy py-28"
    >
      {/* Mesh gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 90% 10%, rgba(42,191,191,0.14), transparent 60%), radial-gradient(700px 400px at 5% 90%, rgba(42,191,191,0.10), transparent 60%)",
        }}
      />

      {/* Faint grid */}
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

      {/* Floating orbs */}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            Why dentists partner with us
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            A partnership built around{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              three outcomes
            </span>
            .
          </h2>
          <p className="mt-5 text-white/70">
            We don&apos;t sell courses. We build long-term partnerships that
            deliver real revenue, real systems, and real results.
          </p>
        </motion.div>

        {/* Timeline + pillars */}
        <div className="relative mt-20">
          {/* Vertical timeline line (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
          >
            <div className="h-full w-full bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
            <motion.span
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal to-transparent"
            />
          </div>

          <div className="space-y-24">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              const reverse = i % 2 === 1;
              return (
                <div key={p.id} className="relative">
                  {/* Timeline node */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative flex h-12 w-12 items-center justify-center"
                    >
                      <span className="absolute inset-0 rounded-full bg-teal/20" />
                      <motion.span
                        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-teal/30"
                      />
                      <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-teal ring-4 ring-navy">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </span>
                    </motion.div>
                  </div>

                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                      reverse ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* IMAGE PANEL */}
                    <motion.div
                      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7 }}
                      className="relative"
                    >
                      {/* Outlined display number behind */}
                      <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className={`pointer-events-none absolute -top-16 z-0 select-none text-[10rem] font-black leading-none tracking-tighter text-teal/10 ${
                          reverse ? "-right-4" : "-left-4"
                        }`}
                        style={{
                          WebkitTextStroke: "2px rgba(42,191,191,0.25)",
                          color: "transparent",
                        }}
                      >
                        {p.number}
                      </motion.span>

                      {/* Animated gradient border wrapper */}
                      <div className="relative">
                        <motion.div
                          aria-hidden="true"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute -inset-[2px] rounded-[2rem] opacity-60"
                          style={{
                            background:
                              "conic-gradient(from 0deg, rgba(42,191,191,0.6), rgba(42,191,191,0) 30%, rgba(42,191,191,0) 70%, rgba(42,191,191,0.6))",
                          }}
                        />

                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal/20 via-navy-mid to-navy ring-1 ring-white/10">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(min-width: 1024px) 560px, 90vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-transparent"
                          />

                          {/* Icon badge top-left with concentric rings */}
                          <div className="absolute left-6 top-6 z-10">
                            <motion.span
                              aria-hidden="true"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="absolute inset-0 rounded-2xl bg-teal/30"
                            />
                            <motion.span
                              whileHover={{ rotate: 8, scale: 1.05 }}
                              className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-2xl shadow-teal/40 ring-1 ring-white/20"
                            >
                              <Icon className="h-7 w-7" aria-hidden="true" />
                            </motion.span>
                          </div>

                          {/* Number chip top-right */}
                          <span className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur ring-1 ring-white/20">
                            {p.number} / 03
                          </span>

                          {/* Stat cards bottom */}
                          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                            {p.stats.map((s, j) => (
                              <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.4 + j * 0.15,
                                }}
                                className="rounded-xl bg-navy/85 p-3 backdrop-blur ring-1 ring-teal/20"
                              >
                                <p className="text-lg font-bold text-teal">
                                  {s.value}
                                </p>
                                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/60">
                                  {s.label}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* COPY PANEL */}
                    <motion.div
                      initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-5xl font-black leading-none text-teal">
                          {p.number}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-teal/60 to-transparent" />
                      </div>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-teal">
                        {p.eyebrow}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-white/70">
                        {p.body}
                      </p>

                      <Link
                        href="/the-model"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-5 py-2.5 text-sm font-semibold text-teal backdrop-blur transition-all hover:border-teal hover:bg-teal hover:text-white"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
