"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Receipt,
  GraduationCap,
  Boxes,
  TrendingUp,
  Check,
  ArrowUpRight,
} from "lucide-react";

const PILLARS = [
  {
    id: "credentialing",
    number: "01",
    tag: "Credentialing",
    icon: ShieldCheck,
    title: "Credentialing and medical billing support",
    body:
      "DSL supports credentialing and medical billing around dentist-led care. Collections vary with payer contracts, coverage, documentation, and patient responsibility. Reimbursement is not guaranteed.",
    bullets: [
      "Credentialing assistance",
      "No pre-negotiated national contracts claimed",
      "Payer outcomes vary",
      "Practice responsibilities stay in the agreement",
    ],
    metric: { value: "Support", label: "Not a rate guarantee" },
    image: "/images/what-you-get/reimbursements.jpg",
    imageAlt: "Clinical setting, not a reimbursement result",
  },
  {
    id: "billing",
    number: "02",
    tag: "Billing",
    icon: Receipt,
    title: "Claims submission, follow-up, and reporting",
    body:
      "Ongoing billing and support are included in the flat 14% of appliance collections. Appliance receipts go to the practice. DSL invoices monthly in arrears for services and approved pass-through costs. The final agreement controls.",
    bullets: [
      "Claims submission and follow-up",
      "Reporting on agreed activity",
      "14% of appliance collections",
      "Not a promise of faster payment",
    ],
    metric: { value: "14%", label: "Of appliance collections" },
    image: "/images/what-you-get/billing.webp",
    imageAlt: "Billing support illustration",
  },
  {
    id: "training",
    number: "03",
    tag: "Training",
    icon: GraduationCap,
    title: "Staff training and workflow implementation",
    body:
      "Agreed setup includes team training and billing setup. Treating clinicians select, fit, adjust, and oversee appliances. DSL does not diagnose patients or promise a first case within 30 days.",
    bullets: [
      "Team training where capacity allows",
      "Workflow implementation",
      "About six months of planning",
      "Mentorship hours are not listed until confirmed",
    ],
    metric: { value: "~6 mo", label: "Planning horizon" },
    image: "/images/what-you-get/training.jpg",
    imageAlt: "Team training session",
  },
  {
    id: "coordination",
    number: "04",
    tag: "Coordination",
    icon: Boxes,
    title: "Coordination is separate from third-party purchases",
    body:
      "DSL can coordinate agreed nonclinical steps. Software, appliances, testing, and additional marketing are not bundled unless specifically approved. Lab costs remain practice costs. The illustration assumes $300 each.",
    bullets: [
      "Software is a pass-through assumption",
      "$599 per month is not a vendor quote",
      "Appliances and testing are separate",
      "No supplied test-kit promise",
    ],
    metric: { value: "Actual", label: "Approved pass-through cost" },
    image: "/images/what-you-get/turnkey.jpg",
    imageAlt: "Supplies coordinated separately from the services fee",
  },
  {
    id: "support",
    number: "05",
    tag: "Ongoing",
    icon: TrendingUp,
    title: "Ongoing nonclinical support",
    body:
      "After launch, support continues under the services agreement. Response times, live shadowing, dashboards, and specialist networks are not listed as available until the operational owner confirms them.",
    bullets: [
      "Ongoing billing and support included in 14%",
      "Separate $249 DSL membership",
      "Membership is not practice revenue",
      "Service levels still need confirmation",
    ],
    metric: { value: "$249", label: "Annual membership, DSL-retained" },
    image: "/images/what-you-get/scale.webp",
    imageAlt: "Ongoing support planning image",
  },
];

const MARQUEE_ITEMS = [
  "Credentialing",
  "Team training",
  "Billing support",
  "Dentist-led care",
];

export default function WhatYouGetPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-14 sm:py-20 lg:py-32">
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
            <Link href="/" className="hover:text-teal">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-teal">What You Get</span>
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
            What you get as a partner
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Support for adding{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              dental sleep medicine
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Agreed setup, staff training, credentialing assistance, claims
            work, reporting, and ongoing nonclinical support. Clinical care
            stays with your practice.
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
              <span className="relative">Discuss practice fit</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#pillars"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-teal hover:text-teal"
            >
              Explore the 5 pillars
            </Link>
          </motion.div>

          {/* Quick anchor pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            {PILLARS.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur transition-all hover:border-teal hover:text-teal"
              >
                {p.number} · {p.tag}
              </a>
            ))}
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
                src="/images/what-you-get/hero.jpg"
                alt="Sleep apnea snoring affecting partner"
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 90vw"
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-teal/15 via-transparent to-transparent"
              />

              {/* Animated scan line */}
              <motion.span
                aria-hidden="true"
                animate={{ y: ["-10%", "110%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
                className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"
              />

              {/* Floating chip — bottom-left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-navy/5 backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dark text-white">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-bold leading-none text-navy">
                    Implementation support
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-navy/60">
                    Around dentist-led care
                  </p>
                </div>
              </motion.div>

              {/* Top-right chip */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute right-6 top-6 rounded-full bg-teal px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-teal/30"
              >
                5 pillars
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative mt-20 border-y border-white/10 bg-navy-mid/40 py-5">
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex items-center gap-10">
                  {MARQUEE_ITEMS.map((item, i) => (
                    <span
                      key={`${dup}-${i}`}
                      className="flex items-center gap-10"
                    >
                      <span>{item}</span>
                      <span className="text-teal">★</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS STACK */}
      <section
        id="pillars"
        className="relative scroll-mt-32 bg-white py-16 sm:py-20 lg:py-24"
      >
        {/* Backdrop */}
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
          <div className="space-y-28">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              const reverse = i % 2 === 1;
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className="scroll-mt-32"
                >
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                      reverse ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    {/* VISUAL PANEL — animated motion-graphic composition */}
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
                        className={`pointer-events-none absolute -top-8 z-0 select-none text-[4.5rem] font-black leading-none tracking-tighter sm:-top-12 sm:text-[7rem] lg:text-[10rem] ${
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
                        {/* Rotating conic border */}
                        <motion.div
                          aria-hidden="true"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute -inset-[2px] rounded-[2rem] opacity-50"
                          style={{
                            background:
                              "conic-gradient(from 0deg, rgba(42,191,191,0.6), rgba(42,191,191,0) 28%, rgba(42,191,191,0) 72%, rgba(42,191,191,0.6))",
                          }}
                        />

                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-navy ring-1 ring-teal/20 shadow-2xl shadow-navy/10">
                          {/* Photo */}
                          <Image
                            src={p.image}
                            alt={p.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 560px, 90vw"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                          {/* Dual gradient overlay */}
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent"
                          />
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-br from-teal/15 via-transparent to-navy/40"
                          />

                          {/* Rotating dashed orbit overlay */}
                          <motion.div
                            aria-hidden="true"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 60,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-dashed border-teal/30"
                          />
                          <motion.div
                            aria-hidden="true"
                            animate={{ rotate: -360 }}
                            transition={{
                              duration: 80,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full border border-dotted border-teal/30"
                          />

                          {/* Animated scan line */}
                          <motion.span
                            aria-hidden="true"
                            animate={{ y: ["-10%", "110%"] }}
                            transition={{
                              duration: 7,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatType: "reverse",
                            }}
                            className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-70"
                          />

                          {/* Icon badge top-left with concentric pulse */}
                          <div className="absolute left-5 top-5 z-10">
                            <motion.span
                              aria-hidden="true"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                              }}
                              className="absolute inset-0 rounded-2xl bg-teal/40"
                            />
                            <motion.span
                              whileHover={{ rotate: 8, scale: 1.05 }}
                              className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-2xl shadow-teal/40 ring-1 ring-white/30"
                            >
                              <Icon className="h-7 w-7" aria-hidden="true" />
                            </motion.span>
                          </div>

                          {/* Floating metric chip */}
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

                          {/* Top-right tag chip */}
                          <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur ring-1 ring-white/25">
                            {p.number} / 05
                          </span>

                          {/* Bottom-right tag */}
                          <span className="absolute bottom-6 right-6 rounded-full bg-teal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal/30">
                            {p.tag}
                          </span>
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
                      <p className="mt-5 text-lg leading-relaxed text-navy/70">
                        {p.body}
                      </p>

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
                              <Check className="h-3 w-3" aria-hidden="true" />
                            </span>
                            <span className="text-sm font-medium text-navy/80">
                              {b}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <Link
                        href="/contact-us"
                        className="group mt-8 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-5 py-2.5 text-sm font-semibold text-teal-dark backdrop-blur transition-all hover:border-teal hover:bg-teal hover:text-white"
                      >
                        Discuss practice fit
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 50%, rgba(42,191,191,0.18), transparent 60%)",
          }}
        />
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
              Review the services before you plan.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              A practice-fit conversation comes first. No response-time promise
              is published until an owner confirms one.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-dark shadow-lg transition-transform hover:scale-105"
              >
                Discuss practice fit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/the-model"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See the model
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
