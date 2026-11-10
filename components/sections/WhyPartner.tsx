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
    id: "plan",
    number: "01",
    eyebrow: "Implementation",
    title: "Work starts right away, in parallel",
    body:
      "Credentialing, setup, and remote training run at the same time. For a typical new program, hands-on training happens around months three or four, depending on readiness. Credentialing may take approximately six months, varying by payer and practice.",
    icon: TrendingUp,
    image: "/images/snoring.jpg",
    stats: [
      { label: "Hands-on training", value: "Mo. 3 to 4" },
      { label: "Credentialing", value: "~6 mo" },
    ],
  },
  {
    id: "billing",
    number: "02",
    eyebrow: "Billing support",
    title: "Medical billing support",
    body:
      "Dental Sleep Link handles claims submission, follow-up, and reporting, and coordinates credentialing with medical payers. Collections vary with payer contracts, coverage, documentation, and patient responsibility.",
    icon: HandCoins,
    image: "/images/chin-strap.jpg",
    stats: [
      { label: "Billing support", value: "Ongoing" },
      { label: "Payment timing", value: "Varies" },
    ],
  },
  {
    id: "team",
    number: "03",
    eyebrow: "Your team",
    title: "In-office training, then ongoing remote support",
    body:
      "Implementation includes in-office team training for your existing staff. After launch, your team has ongoing remote support. Any additional on-site support is defined in your agreement.",
    icon: GraduationCap,
    image: "/images/turnkey-sleep-model.jpg",
    stats: [
      { label: "Team training", value: "In-office" },
      { label: "After launch", value: "Remote" },
    ],
  },
];

export default function WhyPartner() {
  return (
    <section
      id="the-model"
      className="relative scroll-mt-32 overflow-hidden bg-navy py-16 sm:py-20 lg:py-28"
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
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
            How the support is structured
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Implementation support around{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              dentist-led care
            </span>
            .
          </h2>
          <p className="mt-5 text-white/70">
            Dental Sleep Link supports credentialing, medical billing, team
            training, and workflow implementation. Clinical care, ownership,
            and your brand stay with your practice.
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
                        className={`pointer-events-none absolute -top-10 z-0 select-none text-[5rem] font-black leading-none tracking-tighter text-teal/10 sm:-top-16 sm:text-[10rem] ${
                          reverse ? "-right-2 sm:-right-4" : "-left-2 sm:-left-4"
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
                        <span className="text-4xl font-black leading-none text-teal sm:text-5xl">
                          {p.number}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-teal/60 to-transparent" />
                      </div>

                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-teal sm:mt-5 sm:text-xs">
                        {p.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:mt-3 sm:text-3xl lg:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
                        {p.body}
                      </p>

                      <Link
                        href="/the-model"
                        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-5 py-2.5 text-sm font-semibold text-teal backdrop-blur transition-all hover:border-teal hover:bg-teal hover:text-white sm:mt-8"
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
