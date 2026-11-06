"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  Receipt,
  Workflow,
  GraduationCap,
  Headphones,
  ClipboardCheck,
  Award,
} from "lucide-react";
import { BOOKING_URL, CTA, SPENCER_STUDY_CLUB } from "@/lib/seo";

const FEES = [
  {
    eyebrow: "To get started",
    title: "Implementation fee",
    note: "Covers credentialing coordination, practice and billing setup, and in-office team training to launch your sleep program.",
    icon: Workflow,
  },
  {
    eyebrow: "As you grow",
    title: "Ongoing service fee",
    note: "Covers the continuing support your practice receives: medical billing, remote support, credentialing coordination, and ongoing team training.",
    icon: Receipt,
  },
];

const ONGOING_SUPPORT = [
  { icon: GraduationCap, label: "In-office team training" },
  { icon: Headphones, label: "Remote support" },
  { icon: ClipboardCheck, label: "Credentialing coordination" },
  { icon: Receipt, label: "Medical billing" },
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
            Working together
          </span>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
            A continuing partnership,{" "}
            <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
              not a one-time setup.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
            Dental Sleep Link stays with your practice after launch, helping
            your team build and grow its sleep program over time. There is an
            implementation fee and an ongoing service fee. Details are
            discussed during a consultation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-mid to-navy p-8 text-white shadow-2xl shadow-navy/20 ring-1 ring-white/10 sm:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/25 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark shadow-lg shadow-teal/30 ring-1 ring-white/20">
                <Award className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal">
                  Included with your partnership
                </p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  {SPENCER_STUDY_CLUB.name} membership included
                </h3>
                <p className="mt-2 text-sm text-white/70 sm:text-base">
                  Included with your Dental Sleep Link partnership.
                </p>
              </div>
            </div>
            <div className="shrink-0 rounded-2xl border border-teal/40 bg-teal/10 px-6 py-4 text-center">
              <p className="text-4xl font-bold text-teal">
                {SPENCER_STUDY_CLUB.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Value
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {FEES.map((t, i) => {
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
                <p className="mt-5 text-sm leading-relaxed text-navy/70">
                  {t.note}
                </p>
                <p className="mt-4 text-sm font-semibold text-teal-dark">
                  Details discussed during a consultation.
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-[2rem] border border-navy/10 bg-navy/[0.03] p-8 sm:p-10"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-dark">
            Ongoing support
          </p>
          <h3 className="mt-2 text-2xl font-bold text-navy">
            Support that continues as your sleep program grows.
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ONGOING_SUPPORT.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-semibold text-navy ring-1 ring-navy/10"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-navy/70">
            {[
              "A continuing relationship, not a one-time setup",
              "Your practice keeps responsibility for clinical care",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-5 rounded-[2rem] bg-gradient-to-br from-teal to-teal-dark p-8 text-center shadow-xl shadow-teal/20 sm:p-10"
        >
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {CTA.headline} {CTA.action}
          </h3>
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-dark shadow-lg transition-transform hover:scale-105"
          >
            {CTA.button}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
