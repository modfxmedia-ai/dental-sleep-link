"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Receipt,
  Workflow,
} from "lucide-react";

const TIERS = [
  {
    eyebrow: "One-time",
    title: "Onboarding participation",
    price: "Disclosed on call",
    note: "Covers credentialing, billing integration, training, and program setup.",
    icon: Workflow,
    includes: [
      "Medical credentialing handled",
      "Billing engine integration",
      "Clinical & operational training",
      "Market exclusivity reserved",
    ],
  },
  {
    eyebrow: "Ongoing",
    title: "Management fee on the sleep line",
    price: "Aligned with revenue",
    note: "A management fee on the sleep medicine line we help you build \u2014 not on your dental practice.",
    icon: Receipt,
    includes: [
      "End-to-end medical billing",
      "Lab logistics & fulfillment",
      "Ongoing 1:1 coaching",
      "Quarterly business reviews",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-32 overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 20%, rgba(42,191,191,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Transparent economics
          </span>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
            Two pieces.{" "}
            <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
              No surprises.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            One participation fee at onboarding. One management fee on the
            sleep medicine line we build together. Designed so the sleep line
            is profitable to you from the first full quarter of operation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TIERS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-white p-8 shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-teal/30 sm:p-10"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-navy/60">
                  {t.eyebrow}
                </span>
                <div className="mt-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-lg shadow-teal/30 ring-1 ring-white/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold text-navy">{t.title}</h3>
                </div>
                <p className="mt-5 text-2xl font-bold text-navy">{t.price}</p>
                <p className="mt-1 text-sm text-navy/60">{t.note}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-navy/75">
                  {t.includes.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-navy/10 bg-navy/[0.03] p-5 text-center text-sm text-navy/70 sm:flex-row sm:text-left"
        >
          <p className="flex-1">
            We share the full economic structure on the first discovery call.
            One practice per market, so we walk through the numbers before any
            market is reserved.
          </p>
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105"
          >
            See if my market is open
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
