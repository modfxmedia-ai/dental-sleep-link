"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Activity, Stethoscope, Award } from "lucide-react";

type Bar = {
  label: string;
  value: number;
  caption: string;
  icon: typeof TrendingUp;
};

const BARS: Bar[] = [
  {
    label: "Practices currently partnered",
    value: 84,
    caption: "Active in 28 states",
    icon: TrendingUp,
  },
  {
    label: "Insurance reimbursements processed",
    value: 92,
    caption: "Centralized billing",
    icon: Activity,
  },
  {
    label: "Appliances delivered per month",
    value: 76,
    caption: "Across the network",
    icon: Stethoscope,
  },
  {
    label: "Growth milestone success",
    value: 96,
    caption: "Within first 12 months",
    icon: Award,
  },
];

const RADIAL_TARGET = 88;

function CountTo({ value, active }: { value: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1400;
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
  return <>{n}</>;
}

export default function ProgressSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Radial gauge math
  const size = 240;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Mesh accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 90% 10%, rgba(42,191,191,0.10), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(42,191,191,0.07), transparent 60%)",
        }}
      />
      {/* Faint dot grid */}
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
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-[40%_60%_70%_30%] bg-teal/10 blur-2xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-[60%_40%_30%_70%] bg-teal/10 blur-2xl"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal-dark ring-1 ring-teal/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            Progress
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-5xl">
            Numbers our partners{" "}
            <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
              actually feel
            </span>
            .
          </h2>
          <p className="mt-5 text-navy/70">
            Every metric we track ties back to a real clinical or financial
            outcome inside a partner practice.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* LEFT: radial gauge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
          >
            <div className="relative" style={{ width: size, height: size }}>
              {/* outer pulsing halo */}
              <motion.span
                aria-hidden="true"
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-teal/15 blur-2xl"
              />
              {/* dashed orbit */}
              <motion.span
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-teal/30"
              />

              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="relative -rotate-90"
              >
                <defs>
                  <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2abfbf" />
                    <stop offset="100%" stopColor="#0d8e8e" />
                  </linearGradient>
                </defs>
                {/* Track */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={r}
                  fill="none"
                  stroke="rgba(11,31,58,0.08)"
                  strokeWidth={stroke}
                />
                {/* Progress */}
                <motion.circle
                  cx={size / 2}
                  cy={size / 2}
                  r={r}
                  fill="none"
                  stroke="url(#gaugeGrad)"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={c}
                  initial={{ strokeDashoffset: c }}
                  animate={
                    inView
                      ? { strokeDashoffset: c - (c * RADIAL_TARGET) / 100 }
                      : { strokeDashoffset: c }
                  }
                  transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal-dark">
                  Network health
                </p>
                <p className="mt-2 text-4xl font-black leading-none text-navy sm:text-5xl lg:text-6xl">
                  <CountTo value={RADIAL_TARGET} active={inView} />
                  <span className="text-3xl font-bold text-teal-dark">%</span>
                </p>
                <p className="mt-1 text-xs text-navy/60">composite score</p>
              </div>

              {/* Floating chip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -right-4 top-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-teal-dark shadow-lg ring-1 ring-teal/20"
              >
                ▲ +12% YoY
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="absolute -left-2 bottom-4 rounded-full bg-navy px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg"
              >
                25+ practices
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: bars card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Gradient border wrapper */}
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[1.5px] rounded-[2rem] opacity-50"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(42,191,191,0.5), rgba(42,191,191,0) 25%, rgba(42,191,191,0) 75%, rgba(42,191,191,0.5))",
              }}
            />

            <div className="relative space-y-5 rounded-[2rem] bg-white p-8 shadow-2xl shadow-navy/5 ring-1 ring-navy/5">
              {BARS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group rounded-2xl px-3 py-2 transition-colors hover:bg-teal-light/40"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/10 text-teal-dark transition-transform group-hover:rotate-6">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <p className="text-sm font-semibold text-navy">
                          {b.label}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-teal-dark">
                        <CountTo value={b.value} active={inView} />%
                      </span>
                    </div>

                    <div className="mt-3 ml-12 h-2 overflow-hidden rounded-full bg-navy/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${b.value}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.4,
                          delay: 0.15 + i * 0.1,
                          ease: "easeOut",
                        }}
                        className="relative h-full rounded-full bg-gradient-to-r from-teal to-teal-dark"
                      >
                        {/* Sliding shine */}
                        <motion.span
                          aria-hidden="true"
                          animate={{ x: ["-150%", "350%"] }}
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1 + i * 0.15,
                          }}
                          className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                        />
                      </motion.div>
                    </div>

                    <p className="ml-12 mt-1.5 text-[11px] uppercase tracking-wider text-navy/50">
                      {b.caption}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
