"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Receipt,
  Workflow,
  Users,
  BadgeDollarSign,
} from "lucide-react";
import EconomicsTable from "@/components/sections/EconomicsTable";

const TIERS = [
  {
    eyebrow: "Implementation",
    title: "Implementation fees",
    price: "$20,000",
    note: "Covers the agreed credentialing, setup, and team-training or billing-setup work. Shown separately from operating illustrations. It does not drop out of cash flow.",
    icon: Workflow,
    includes: [
      "Credentialing assistance",
      "Practice and billing setup",
      "Team training",
      "Separate from the 14% fee",
    ],
  },
  {
    eyebrow: "Ongoing",
    title: "Services fee",
    price: "14% of appliance collections",
    note: "A flat fee on appliance collections, including ongoing billing and support under the services agreement. Not calculated on production, billed charges, or general-dentistry revenue.",
    icon: Receipt,
    includes: [
      "Claims submission and follow-up",
      "Reporting",
      "Ongoing nonclinical support",
      "Exact collections definition is for counsel",
    ],
  },
  {
    eyebrow: "Pass-through",
    title: "Approved costs at actual cost",
    price: "Actual approved cost",
    note: "Fixed costs that are approved pass through at actual cost. $599 per month for software is a planning assumption, not a percentage fee or a guaranteed vendor quote.",
    icon: BadgeDollarSign,
    includes: [
      "Retires the former 6% software proxy",
      "Lab cost stays with the practice",
      "Illustration uses $300 per appliance",
      "Other pass-throughs need approval",
    ],
  },
  {
    eyebrow: "Separate",
    title: "Patient membership",
    price: "$249 per year",
    note: "Additional to the appliance payment and retained by DSL. Excluded from illustrated practice revenue. The 14% fee is not applied again to the same receipt.",
    icon: Users,
    includes: [
      "Not practice revenue in the illustration",
      "Does not replace clinical follow-up",
      "Patient terms still need review",
      "Not public enrollment language",
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Planning economics
          </span>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
            Implementation, ongoing support{" "}
            <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
              and practice costs.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Go-live depends on payer, entity, staff, and clinical readiness.
            Credentialing, setup, and training overlap across an approximately
            six-month planning horizon. Profitability is not promised for the
            first quarter, and there is no 30-day first-case guarantee.
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

        <EconomicsTable />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-navy/10 bg-navy/[0.03] p-5 text-sm leading-relaxed text-navy/70"
        >
          <p>
            Proposed funds flow, pending the final agreement: appliance receipts
            go to the practice, and DSL invoices monthly in arrears for services
            and approved pass-through costs. Payment timing, deposits, refunds,
            and exclusivity are not set on this site.
          </p>
          <div className="mt-4 flex justify-center sm:justify-start">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform hover:scale-105"
            >
              Discuss practice fit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
