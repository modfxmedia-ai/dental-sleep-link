"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ClipboardEdit,
  MessageSquare,
  Settings,
  Rocket,
  Check,
  ArrowUpRight,
  Clock,
} from "lucide-react";

const STEPS = [
  {
    id: "apply",
    number: "01",
    tag: "Apply",
    icon: ClipboardEdit,
    title: "Apply Online",
    body:
      "Fill out our short application form and share details about your practice and goals. It takes about five minutes — and there&apos;s no obligation.",
    bullets: [
      "5-minute application form",
      "Practice profile & goals",
      "No obligation, no pressure",
      "Reply within 1 business day",
    ],
    metric: { value: "~5 min", label: "To complete" },
    image: "/images/how-to-join/step-1.jpg",
    imageAlt: "Filling out an online application on a laptop",
  },
  {
    id: "interview",
    number: "02",
    tag: "Interview",
    icon: MessageSquare,
    title: "Interview & Practice Review",
    body:
      "Our team will connect with you to assess your current sleep services, insurance workflows, and growth potential — and decide together if it&apos;s the right fit.",
    bullets: [
      "30-minute discovery call",
      "Practice workflow review",
      "Insurance & payer audit",
      "Market exclusivity check",
    ],
    metric: { value: "30 min", label: "Discovery call" },
    image: "/images/how-to-join/step-2.jpg",
    imageAlt: "Discovery and partner interview meeting",
  },
  {
    id: "onboarding",
    number: "03",
    tag: "Onboarding",
    icon: Settings,
    title: "Onboarding & Setup",
    body:
      "We handle credentialing, compliance setup, billing integration, and sleep dentistry training — so you&apos;re ready to launch with confidence.",
    bullets: [
      "Credentialing handled for you",
      "Compliance & HIPAA setup",
      "Billing integration",
      "Sleep dentistry training",
    ],
    metric: { value: "30 days", label: "Avg. onboarding" },
    image: "/images/how-to-join/step-3.jpg",
    imageAlt: "Onboarding and clinical training session",
  },
  {
    id: "launch",
    number: "04",
    tag: "Launch",
    icon: Rocket,
    title: "Launch & Grow",
    body:
      "You begin delivering sleep apnea appliances, leveraging higher reimbursements, billing support, and our clinical growth systems — with a partner alongside you.",
    bullets: [
      "First cases within 30 days",
      "Higher reimbursement rates",
      "Ongoing billing support",
      "Quarterly growth reviews",
    ],
    metric: { value: "+187%", label: "Avg. case growth" },
    image: "/images/how-to-join/step-4.webp",
    imageAlt: "Sleep appliance ready for delivery and patient launch",
  },
];

const MARQUEE_ITEMS = ["Apply", "Interview", "Onboard", "Launch"];

export default function HowToJoin() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
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
            <Link href="/" className="hover:text-teal">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-teal">How to Join</span>
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
            4 simple steps
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Start your journey to{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              sleep dentistry success
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Becoming a Dental Sleep Link Partner is simple, transparent, and
            structured for success. Here&apos;s how you can get started.
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
              <span className="relative">Apply now</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#steps"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-teal hover:text-teal"
            >
              See the 4 steps
            </Link>
          </motion.div>

          {/* Quick anchor pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            {STEPS.map((p) => (
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
                src="/images/how-to-join/hero-v2.png"
                alt="Modern dental practice ready to onboard"
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 90vw"
                className="object-cover"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <motion.span
                aria-hidden="true"
                animate={{ y: ["-10%", "110%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"
              />
              <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-teal px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-teal/30">
                <Clock className="h-3 w-3" aria-hidden="true" />
                ~30 day onboarding
              </span>
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
                    <span key={`${dup}-${i}`} className="flex items-center gap-10">
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

      {/* STEPS STACK */}
      <section id="steps" className="relative scroll-mt-32 bg-white py-24">
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
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
            >
              <div className="h-full w-full bg-gradient-to-b from-transparent via-teal/30 to-transparent" />
              <motion.span
                animate={{ y: ["0%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal to-transparent"
              />
            </div>

            <div className="space-y-24">
              {STEPS.map((p, i) => {
                const Icon = p.icon;
                const reverse = i % 2 === 1;
                return (
                  <div key={p.id} id={p.id} className="scroll-mt-32 relative">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex h-12 w-12 items-center justify-center"
                      >
                        <span className="absolute inset-0 rounded-full bg-teal/20" />
                        <motion.span
                          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-teal/30"
                        />
                        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-white ring-4 ring-white">
                          {p.number}
                        </span>
                      </motion.div>
                    </div>

                    <div
                      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                        reverse ? "lg:[&>div:first-child]:order-2" : ""
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                      >
                        <motion.span
                          aria-hidden="true"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className={`pointer-events-none absolute -top-12 z-0 select-none text-[10rem] font-black leading-none tracking-tighter ${
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
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-navy ring-1 ring-teal/20 shadow-2xl shadow-navy/10">
                            <Image
                              src={p.image}
                              alt={p.imageAlt}
                              fill
                              sizes="(min-width: 1024px) 560px, 90vw"
                              className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-teal/15 via-transparent to-navy/40" />
                            <motion.div
                              aria-hidden="true"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-dashed border-teal/30"
                            />
                            <motion.div
                              aria-hidden="true"
                              animate={{ rotate: -360 }}
                              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                              className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full border border-dotted border-teal/30"
                            />
                            <motion.span
                              aria-hidden="true"
                              animate={{ y: ["-10%", "110%"] }}
                              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                              className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-70"
                            />
                            <div className="absolute left-5 top-5 z-10">
                              <motion.span
                                aria-hidden="true"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute inset-0 rounded-2xl bg-teal/40"
                              />
                              <motion.span
                                whileHover={{ rotate: 8, scale: 1.05 }}
                                className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-2xl shadow-teal/40 ring-1 ring-white/30"
                              >
                                <Icon className="h-7 w-7" aria-hidden="true" />
                              </motion.span>
                            </div>
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
                            <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur ring-1 ring-white/25">
                              {p.number} / 04
                            </span>
                            <span className="absolute bottom-6 right-6 rounded-full bg-teal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal/30">
                              {p.tag}
                            </span>
                          </div>
                        </div>
                      </motion.div>

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
                          {p.body.replace(/&apos;/g, "\u2019")}
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
                              <span className="text-sm font-medium text-navy/80">{b}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <Link
                          href="/contact-us"
                          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-5 py-2.5 text-sm font-semibold text-teal-dark backdrop-blur transition-all hover:border-teal hover:bg-teal hover:text-white"
                        >
                          Start with step {p.number}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
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
              Apply to become a partner.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              At Dental Sleep Link, we partner with forward-thinking dentists
              to revolutionize sleep health — one restful night at a time.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-dark shadow-lg transition-transform hover:scale-105"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/partner-criteria"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See partner criteria
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
