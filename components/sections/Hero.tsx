"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  Activity,
  Award,
} from "lucide-react";

const MARQUEE_ITEMS = [
  "Sleep Apnea",
  "Diagnose",
  "Treat",
  "Grow Your Sleep Practice",
];

const SPEC_BADGES = [
  { icon: ShieldCheck, label: "FDA cleared", sub: "Class II device" },
  { icon: Activity, label: "Custom-fit", sub: "Per patient scan" },
  { icon: Award, label: "Insurance billable", sub: "Medical codes" },
];

const PARTICLES = [
  { top: "18%", left: "8%", size: 6, dur: 7 },
  { top: "70%", left: "14%", size: 4, dur: 9 },
  { top: "30%", left: "92%", size: 5, dur: 8 },
  { top: "82%", left: "78%", size: 3, dur: 11 },
  { top: "52%", left: "55%", size: 3, dur: 10 },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Mesh gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% 20%, rgba(42,191,191,0.18), transparent 60%), radial-gradient(900px 500px at 10% 90%, rgba(42,191,191,0.10), transparent 60%), radial-gradient(700px 400px at 50% 0%, rgba(42,191,191,0.08), transparent 60%)",
        }}
      />

      {/* Animated grid */}
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

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 right-[-8rem] h-[32rem] w-[32rem] rounded-full bg-teal/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-teal/10 blur-3xl"
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute rounded-full bg-teal/70 shadow-[0_0_12px_rgba(42,191,191,0.8)]"
          style={{ top: p.top, left: p.left, height: p.size, width: p.size }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* LEFT: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal ring-1 ring-teal/30 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            The MSO for dental sleep medicine
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Treat sleep.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-teal via-teal-light to-teal bg-clip-text text-transparent">
                Grow practice.
              </span>
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] origin-left rounded-full bg-gradient-to-r from-teal to-teal-light"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
          >
            The nation&apos;s only management services organization built for
            dentists. We deliver oral appliance therapy, medical billing, and a
            proven playbook so you can build a profitable, scalable sleep
            practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-105"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Apply to Become a Partner</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/the-model"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-teal hover:text-teal"
            >
              <span className="flex h-2 w-2 rounded-full bg-teal transition-transform group-hover:scale-150" />
              See how it works
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-teal text-teal"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm text-white/80">
                <span className="font-bold text-white">20k+</span> positive
                reviews
              </p>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <p className="text-2xl font-bold text-white">25+</p>
              <p className="text-[11px] uppercase tracking-wider text-white/60">
                Practices partnered
              </p>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <p className="text-2xl font-bold text-white">10+ yrs</p>
              <p className="text-[11px] uppercase tracking-wider text-white/60">
                Elevating sleep dentistry
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: product showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto h-[34rem] w-full max-w-xl"
        >
          {/* Glow halo */}
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/30 blur-3xl"
          />

          {/* Outer dashed orbit */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal/25"
          />
          {/* Inner dotted orbit */}
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-teal/30"
          />

          {/* Tick marks ring (SVG) */}
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 text-teal/40"
          >
            {Array.from({ length: 60 }).map((_, i) => {
              const angle = (i * 360) / 60;
              const isMajor = i % 5 === 0;
              return (
                <line
                  key={i}
                  x1="200"
                  y1={isMajor ? 14 : 18}
                  x2="200"
                  y2={isMajor ? 26 : 22}
                  stroke="currentColor"
                  strokeWidth={isMajor ? 1.5 : 1}
                  transform={`rotate(${angle} 200 200)`}
                />
              );
            })}
          </motion.svg>

          {/* Product image — floats */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex h-full w-full items-center justify-center"
          >
            <div className="relative h-[26rem] w-[26rem]">
              <Image
                src="/images/appliance.png"
                alt="Dental sleep oral appliance"
                fill
                priority
                sizes="(min-width: 1024px) 416px, 80vw"
                className="object-contain drop-shadow-[0_30px_40px_rgba(42,191,191,0.35)]"
              />
            </div>
          </motion.div>

          {/* Pedestal glow */}
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-1/2 h-3 w-72 -translate-x-1/2 rounded-[50%] bg-teal/40 blur-2xl"
          />

          {/* Floating spec badges */}
          {SPEC_BADGES.map((b, i) => {
            const Icon = b.icon;
            const positions = [
              "left-0 top-12",
              "right-0 top-1/3",
              "left-4 bottom-16",
            ];
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.18 }}
                className={`absolute z-20 ${positions[i]}`}
              >
                <motion.div
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-navy-mid/80 p-3 pr-4 shadow-2xl ring-1 ring-white/10 backdrop-blur"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/15 text-teal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {b.label}
                    </p>
                    <p className="text-[11px] text-white/60">{b.sub}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Monthly cases stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -bottom-2 right-2 z-20 w-56 rounded-2xl bg-gradient-to-br from-teal to-teal-dark p-5 shadow-2xl ring-1 ring-white/20"
          >
            <p className="text-[11px] uppercase tracking-wider text-white/80">
              Monthly cases
            </p>
            <p className="mt-1 text-3xl font-bold text-white">+187%</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 1.6, delay: 1.4, ease: "easeOut" }}
                className="h-full rounded-full bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="relative border-y border-white/10 bg-navy-mid/40 py-5">
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
  );
}
