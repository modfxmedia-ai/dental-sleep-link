"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Building2,
  Stethoscope,
  Receipt,
  Sparkles,
} from "lucide-react";

const BULLETS = [
  "Centralized medical billing with higher reimbursements",
  "Done-for-you compliance, credentialing, and workflow setup",
  "Training to scale to 100+ appliances per month",
  "A clear path to becoming a full-time sleep provider",
];

const STAT_PILLS = [
  { icon: Building2, value: "25+", label: "Practices" },
  { icon: Receipt, value: "$12M+", label: "Reimbursed" },
  { icon: Stethoscope, value: "1,500+", label: "Appliances" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-32 overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {/* Mesh + grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 10%, rgba(42,191,191,0.10), transparent 60%), radial-gradient(700px 400px at 0% 90%, rgba(42,191,191,0.08), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(11,31,58,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal-dark ring-1 ring-teal/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            About us
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-5xl">
            The first MSO built exclusively for{" "}
            <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
              dental sleep medicine
            </span>
            .
          </h2>
          <p className="mt-5 text-lg text-navy/70">
            We help general dentists launch and scale a profitable sleep
            division — without adding extra workload. We don&apos;t sell
            courses. We build long-term partnerships that deliver real revenue,
            real systems, and real results.
          </p>
        </motion.div>

        {/* STAT PILLS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {STAT_PILLS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-md ring-1 ring-navy/10"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-bold text-navy">{s.value}</span>
                <span className="text-xs uppercase tracking-wider text-navy/60">
                  {s.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-10 grid gap-8 sm:mt-16 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* LEFT: image + bullets */}
          <div>
            {/* Image with rotating gradient border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[2px] rounded-[2rem] opacity-60"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(42,191,191,0.5), rgba(42,191,191,0) 28%, rgba(42,191,191,0) 72%, rgba(42,191,191,0.5))",
                }}
              />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-navy ring-1 ring-navy/10 shadow-2xl shadow-navy/10">
                <Image
                  src="/images/sleep-apnea.jpg"
                  alt="Patient affected by sleep apnea snoring"
                  fill
                  sizes="(min-width: 1024px) 640px, 90vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent"
                />

                {/* Top-right glass chip */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur ring-1 ring-white/20"
                >
                  <Sparkles className="h-3.5 w-3.5 text-teal" />
                  Trusted MSO
                </motion.div>

                {/* Bottom-left 10+ yrs badge */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-navy/5 backdrop-blur"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dark text-white">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xl font-bold leading-none text-navy">
                      10+ yrs
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wider text-navy/60">
                      Elevating sleep dentistry
                    </p>
                  </div>
                </motion.div>

                {/* Animated scan line */}
                <motion.span
                  aria-hidden="true"
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"
                />
              </div>
            </motion.div>

            {/* What we provide */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
                What we provide
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {BULLETS.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-navy/10 shadow-sm transition-shadow hover:shadow-md hover:ring-teal/40"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-white shadow-sm transition-transform group-hover:rotate-6">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-navy/80">
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="sticky top-32 relative"
          >
            {/* Glow under card */}
            <motion.div
              aria-hidden="true"
              animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-teal/15 blur-3xl"
            />

            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Get in touch"
              className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-mid to-navy p-8 ring-1 ring-white/10 shadow-2xl shadow-navy/30"
            >
              {/* Animated corner accent */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-teal/40 to-transparent blur-2xl"
              />
              <motion.div
                aria-hidden="true"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-teal/30 to-transparent blur-2xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-white/15 backdrop-blur">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
                  </span>
                  Reply within 1 business day
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  Talk to a partner success lead
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Tell us about your practice. We&apos;ll map a clear path to
                  scaling your sleep program.
                </p>

                <div className="mt-7 space-y-4">
                  <Field id="name" label="Name" type="text" placeholder="Dr. Jane Smith" />
                  <Field id="email" label="Email" type="email" placeholder="you@practice.com" />
                  <Field id="phone" label="Phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <button
                  type="submit"
                  className="group relative mt-7 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal to-teal-dark px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Send</span>
                </button>

                <p className="mt-4 text-center text-[11px] text-white/50">
                  We&apos;ll never share your info. No spam. Ever.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl bg-navy-mid/70 px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition focus:bg-navy-mid focus:ring-2 focus:ring-teal"
      />
    </div>
  );
}
