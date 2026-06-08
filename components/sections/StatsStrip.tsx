"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Building2,
  ClipboardCheck,
  HeartPulse,
  TrendingUp,
} from "lucide-react";

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  delta: string;
  icon: typeof Briefcase;
}

const STATS: StatItem[] = [
  {
    id: "practices",
    label: "Practices currently partnered",
    value: 25,
    suffix: "+",
    delta: "+8 this quarter",
    icon: Building2,
  },
  {
    id: "reimburse",
    label: "Insurance reimbursements processed",
    value: 12,
    suffix: "M+",
    delta: "+38% YoY",
    icon: Briefcase,
  },
  {
    id: "appliances",
    label: "Appliances delivered per month",
    value: 1500,
    suffix: "+",
    delta: "+187% growth",
    icon: HeartPulse,
  },
  {
    id: "milestones",
    label: "Growth milestone success rate",
    value: 96,
    suffix: "%",
    delta: "12 mo. cohort",
    icon: ClipboardCheck,
  },
];

function CountUp({
  value,
  duration = 1600,
}: {
  value: number;
  duration?: number;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      {/* Mesh gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% 0%, rgba(42,191,191,0.14), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(42,191,191,0.10), transparent 60%), radial-gradient(700px 400px at 100% 100%, rgba(42,191,191,0.10), transparent 60%)",
        }}
      />
      {/* Faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />

      {/* Top + bottom gradient lines */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent"
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal/15 blur-3xl"
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
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
            </span>
            Trusted by dentists nationwide
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Real partners.{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              Real results.
            </span>
          </h2>
          <p className="mt-5 text-white/70">
            Hundreds of practices rely on Dental Sleep Link to grow their sleep
            programs efficiently and profitably. The numbers speak for
            themselves.
          </p>
        </motion.div>

        {/* Connector line behind cards (desktop) */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 lg:block"
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
            <motion.span
              animate={{ x: ["-10%", "110%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 h-px w-32 bg-gradient-to-r from-transparent via-teal to-transparent"
            />
          </div>

          <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Rotating conic border */}
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(42,191,191,0.7), rgba(42,191,191,0) 30%, rgba(42,191,191,0) 70%, rgba(42,191,191,0.7))",
                    }}
                  />

                  <div className="relative h-full overflow-hidden rounded-2xl bg-navy-mid/70 p-6 ring-1 ring-white/10 backdrop-blur transition-all group-hover:bg-navy-mid/90 group-hover:shadow-2xl group-hover:shadow-teal/20">
                    {/* Big watermark digit */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-3 -bottom-6 select-none text-[7rem] font-black leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-teal/10"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Pulsing teal halo at top-right */}
                    <motion.span
                      aria-hidden="true"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal/10 blur-2xl"
                    />

                    {/* Icon */}
                    <motion.span
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/30 to-teal/10 text-teal ring-1 ring-teal/20"
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </motion.span>

                    {/* Value */}
                    <p className="relative mt-5 text-5xl font-black leading-none text-white">
                      <CountUp value={s.value} />
                      <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                        {s.suffix}
                      </span>
                    </p>

                    {/* Label */}
                    <p className="relative mt-3 text-sm leading-relaxed text-white/70">
                      {s.label}
                    </p>

                    {/* Delta chip */}
                    <div className="relative mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-teal">
                      <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{s.delta}</span>
                    </div>

                    {/* Animated mini bar */}
                    <div className="relative mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 1.4,
                          delay: 0.3 + i * 0.1,
                          ease: "easeOut",
                        }}
                        className="block h-full rounded-full bg-gradient-to-r from-teal to-teal-light"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
