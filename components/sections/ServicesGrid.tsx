"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  DollarSign,
  FileCheck2,
  Network,
  Rocket,
} from "lucide-react";

const SERVICES = [
  {
    id: "reimbursements",
    number: "01",
    tag: "Revenue",
    title: "Higher Insurance Reimbursements",
    body:
      "Get paid more per case with our national-level medical billing contracts.",
    bullets: ["National payer contracts", "Faster collections", "Higher per-case yield"],
    icon: DollarSign,
  },
  {
    id: "billing",
    number: "02",
    tag: "Operations",
    title: "Done-For-You Billing & Compliance",
    body:
      "We handle everything — from coding to collections — so you can focus on patients.",
    bullets: ["Medical coding", "Claims & appeals", "Credentialing"],
    icon: FileCheck2,
  },
  {
    id: "systems",
    number: "03",
    tag: "Playbook",
    title: "Proven Sleep Practice Systems",
    body:
      "Follow a step-by-step roadmap to scale from a few cases per month to a full sleep practice.",
    bullets: ["Clinical workflows", "Patient journey", "Team training"],
    icon: Rocket,
  },
  {
    id: "network",
    number: "04",
    tag: "Network",
    title: "Partner-Driven Growth",
    body:
      "Join a network built for dentists who want real results, not just another service.",
    bullets: ["Peer mentorship", "Marketing support", "Ongoing strategy"],
    icon: Network,
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="what-you-get"
      className="relative scroll-mt-32 overflow-hidden bg-teal-light py-28"
    >
      {/* Mesh gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, rgba(42,191,191,0.18), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(42,191,191,0.12), transparent 60%)",
        }}
      />
      {/* Dotted grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,31,58,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />

      {/* Floating blobs */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-teal/25 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-teal/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal-dark shadow-sm ring-1 ring-teal/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
              </span>
              Sleep practice expansion
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl">
              Scale your sleep dentistry with{" "}
              <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
                proven systems
              </span>{" "}
              and support.
            </h2>
            <p className="mt-5 text-lg text-navy/70">
              Four pillars of partnership that turn sleep medicine from a side
              service into a profitable, repeatable program.
            </p>
          </div>
          <Link
            href="/what-you-get"
            className="group inline-flex items-center gap-2 rounded-full border border-teal/40 bg-white px-5 py-2.5 text-sm font-semibold text-teal-dark shadow-sm transition-all hover:border-teal hover:bg-teal hover:text-white hover:shadow-md"
          >
            Explore everything you get
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* GRID */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative flex h-full flex-col"
              >
                {/* Conic gradient border on hover */}
                <motion.div
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18 + i,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute -inset-[1.5px] rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(42,191,191,0.8), rgba(42,191,191,0) 25%, rgba(42,191,191,0) 75%, rgba(42,191,191,0.8))",
                  }}
                />

                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-navy/5 ring-1 ring-navy/5 transition-shadow group-hover:shadow-2xl group-hover:shadow-teal/20">
                  {/* Watermark number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -bottom-6 select-none text-[7rem] font-black leading-none text-teal/[0.06] transition-colors duration-500 group-hover:text-teal/[0.12]"
                  >
                    {s.number}
                  </span>
                  {/* Top-right halo */}
                  <motion.span
                    aria-hidden="true"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{
                      duration: 4 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-teal/10 blur-2xl"
                  />

                  {/* Tag + number row */}
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-dark ring-1 ring-teal/20">
                      {s.tag}
                    </span>
                    <span className="text-xs font-bold text-navy/30">
                      {s.number} / 04
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.span
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="relative mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-lg shadow-teal/30 ring-1 ring-white/40"
                  >
                    <Icon className="h-7 w-7" aria-hidden="true" />
                    <motion.span
                      aria-hidden="true"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="absolute inset-0 rounded-2xl bg-teal/40"
                    />
                  </motion.span>

                  {/* Title */}
                  <h3 className="relative mt-5 text-lg font-bold leading-tight text-navy">
                    {s.title}
                  </h3>

                  {/* Body */}
                  <p className="relative mt-2.5 text-sm leading-relaxed text-navy/70">
                    {s.body}
                  </p>

                  {/* Bullets */}
                  <ul className="relative mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs text-navy/70"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Footer arrow */}
                  <div className="relative mt-6 flex items-center justify-between border-t border-navy/5 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/50">
                      Learn more
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 text-teal-dark transition-all group-hover:bg-teal group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Bottom underline grow */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-teal to-teal-light transition-all duration-500 group-hover:w-full"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
