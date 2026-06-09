"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Stethoscope,
  TrendingUp,
  HeartHandshake,
  Telescope,
  Check,
  Lock,
  ArrowUpRight,
  ShieldCheck,
  X,
} from "lucide-react";

const CRITERIA = [
  {
    id: "established",
    number: "01",
    tag: "Experience",
    icon: Stethoscope,
    title: "Established Dentists Already Treating Sleep Apnea",
    body:
      "You don\u2019t need to be a sleep expert \u2014 but you do need to have experience treating sleep apnea patients in your practice. We\u2019re built for dentists who\u2019ve dipped their toes in and now want to take the leap into a structured, profitable model.",
    bullets: [
      "Comfortable screening for OSA",
      "Some prior appliance experience",
      "Want a structured model",
      "Ready to scale, not start",
    ],
    image: "/images/partner-criteria/established.webp",
    imageAlt: "Established dentist with sleep apnea experience",
  },
  {
    id: "growth",
    number: "02",
    tag: "Mindset",
    icon: TrendingUp,
    title: "Growth-Focused Practices",
    body:
      "Whether you\u2019re solo or part of a multi-location group, we look for partners hungry for predictable revenue, scalable systems, and patient outcomes that go beyond cleanings and crowns.",
    bullets: [
      "Solo or multi-location",
      "Hungry for predictable revenue",
      "Want scalable systems",
      "Outcome-driven mindset",
    ],
    image: "/images/partner-criteria/growth-v2.jpg",
    imageAlt: "Growth focused dental practice",
  },
  {
    id: "clinicians",
    number: "03",
    tag: "Support",
    icon: HeartHandshake,
    title: "Clinicians Seeking Simplicity & Support",
    body:
      "If you\u2019re tired of trying to figure out sleep medicine on your own \u2014 and want a turnkey partner that handles the operational, financial, and clinical lift \u2014 you\u2019re in the right place.",
    bullets: [
      "Operational lift handled",
      "Billing & coding done for you",
      "Clinical playbook included",
      "Dedicated success lead",
    ],
    image: "/images/partner-criteria/clinicians-v2.jpg",
    imageAlt: "Clinician support and simplicity",
  },
  {
    id: "visionary",
    number: "04",
    tag: "Vision",
    icon: Telescope,
    title: "Visionary Dentists with Long-Term Goals",
    body:
      "We\u2019re building partnerships that last decades \u2014 not weeks. Our partners aren\u2019t looking for a side hustle; they\u2019re looking to redefine what their dental practice does, who it serves, and what kind of life it builds for them.",
    bullets: [
      "Decade-long partnerships",
      "Practice transformation",
      "Owner lifestyle goals",
      "Multi-generational outlook",
    ],
    image: "/images/partner-criteria/visionary-v2.jpg",
    imageAlt: "Visionary dentist with long-term goals",
  },
];

export default function PartnerCriteria() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-14 sm:py-20 lg:py-32">
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
            <span className="text-teal">Partner Criteria</span>
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
            Limited &amp; exclusive
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Are you the right fit for{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              Dental Sleep Link
            </span>
            ?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            We don&apos;t partner with everyone — and that&apos;s by design. To
            protect the quality of our model and the success of our partners,
            we limit our partnerships to dentists and practices who meet a
            specific set of criteria.
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
              <span className="relative">Apply for partnership</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#criteria"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-teal hover:text-teal"
            >
              See the 4 criteria
            </Link>
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
                src="/images/partner-criteria/hero-v2.webp"
                alt="Dental sleep partner fit assessment"
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
                <Lock className="h-3 w-3" aria-hidden="true" />
                1 partner per market
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIMITED & EXCLUSIVE BAND */}
      <section className="relative overflow-hidden bg-navy py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(42,191,191,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] bg-navy-mid/70 p-10 ring-1 ring-teal/20 backdrop-blur sm:p-14"
          >
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[2px] rounded-[2rem] opacity-30"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(42,191,191,0.6), rgba(42,191,191,0) 28%, rgba(42,191,191,0) 72%, rgba(42,191,191,0.6))",
              }}
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <div className="relative">
                <motion.span
                  aria-hidden="true"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-teal/40"
                />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-2xl shadow-teal/40 ring-1 ring-white/30">
                  <ShieldCheck className="h-8 w-8" aria-hidden="true" />
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
                  Limited &amp; exclusive
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  One partner per market.
                </h2>
                <p className="mt-3 max-w-xl text-white/75">
                  We don&apos;t saturate. We protect partner economics by
                  granting exclusivity per geography — so when we say yes,
                  we&apos;re betting on your practice to win.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-105"
              >
                Check availability
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CRITERIA STACK */}
      <section id="criteria" className="relative scroll-mt-32 bg-white py-16 sm:py-20 lg:py-24">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
              Who we&apos;re looking for
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              The four traits of our most successful partners.
            </h2>
            <p className="mt-4 text-navy/70">
              If you recognize yourself in these, we should talk.
            </p>
          </motion.div>

          <div className="mt-20 space-y-24">
            {CRITERIA.map((p, i) => {
              const Icon = p.icon;
              const reverse = i % 2 === 1;
              return (
                <div key={p.id} id={p.id} className="scroll-mt-32">
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
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
                        className={`pointer-events-none absolute -top-8 z-0 select-none text-[4.5rem] font-black leading-none tracking-tighter sm:-top-12 sm:text-[7rem] lg:text-[10rem] ${
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
                      <h3 className="mt-5 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-navy/70">
                        {p.body}
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
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO SHOULD NOT APPLY */}
      <section className="relative scroll-mt-32 bg-navy py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 400px at 80% 20%, rgba(42,191,191,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 ring-1 ring-white/10">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              An honest filter
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Who shouldn&apos;t apply
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              The program isn&apos;t a fit for every practice — and we&apos;d
              rather say so up front than waste your time on a call.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Brand-new practices (under ~3 years old)",
                b: "You need a stable patient base and operating rhythm before bolting on a new clinical line.",
              },
              {
                t: "Practices already in a sleep franchise or exclusivity contract",
                b: "If you’re locked into another sleep model, we can’t partner without that conflict being resolved first.",
              },
              {
                t: "Owners unwilling to commit dedicated chair time",
                b: "Sleep cases need protected time on the schedule. Squeezing them between hygiene blocks doesn’t work.",
              },
              {
                t: "Markets where we already have a partner",
                b: "We work one practice per market. If your area is already taken, we’ll tell you on the first call.",
              },
              {
                t: "Practices with active payer disputes or compliance issues",
                b: "Medical billing depends on clean payer relationships. Open disputes have to be resolved before joining.",
              },
              {
                t: "Owners looking for a turnkey side gig",
                b: "This is an additional line of business, not a hands-off referral fee. The dentist needs to be in the chair.",
              },
            ].map((d, i) => (
              <motion.div
                key={d.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/60">
                  <X className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{d.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{d.b}</p>
                </div>
              </motion.div>
            ))}
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
              Think you&apos;re a fit?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              Tell us about your practice. If your market is open and the
              criteria align, we&apos;ll reach out within one business day.
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
                href="/success-stories"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See success stories
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
