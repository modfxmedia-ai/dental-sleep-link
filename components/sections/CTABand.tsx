"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-navy py-14 sm:py-20">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-teal/30 blur-3xl"
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal via-teal-dark to-navy-mid p-6 text-center shadow-2xl shadow-teal/20 sm:p-10 lg:p-14"
        >
          <span
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-navy/40 blur-3xl"
          />

          <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Ready to grow?
          </p>
          <h2 className="relative mt-3 text-3xl font-bold text-white sm:text-4xl">
            Build a profitable sleep practice with us.
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-white/85">
            Apply to become a partner and we&apos;ll walk you through the model,
            the math, and the next 90 days.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/how-to-join"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy transition-transform hover:scale-105"
            >
              Apply now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Talk to our team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
