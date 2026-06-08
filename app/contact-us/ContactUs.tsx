"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  MessageCircle,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const INFO = [
  {
    icon: Phone,
    label: "Call us",
    value: "(123) 456-7890",
    href: "tel:+11234567890",
    sub: "Mon – Fri · 9am – 6pm ET",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@dentalsleeplink.com",
    href: "mailto:info@dentalsleeplink.com",
    sub: "Reply within 1 business day",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "123 Main St, Springfield, USA",
    href: "#map",
    sub: "By appointment only",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Fri, 9am – 6pm ET",
    href: "#",
    sub: "Closed weekends & holidays",
  },
];

const REASONS = [
  "Apply to become a partner",
  "Ask about a specific market",
  "Billing or claims question",
  "Press &amp; media inquiry",
];

const PROMISES = [
  { icon: Clock, label: "Reply within 1 business day" },
  { icon: ShieldCheck, label: "Your info stays private" },
  { icon: Headphones, label: "Real humans, not bots" },
];

export default function ContactUs() {
  const [sent, setSent] = useState(false);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-28">
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
            <span className="text-teal">Contact Us</span>
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
            We&apos;d love to hear from you
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Talk to a{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              partner success lead
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Tell us about your practice and goals. We&apos;ll come back with a
            clear path, an honest market assessment, and next steps — within
            one business day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {PROMISES.map((p) => {
              const Icon = p.icon;
              return (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur"
                >
                  <Icon className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                  {p.label}
                </span>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* INFO CARDS + FORM */}
      <section className="relative bg-white py-24">
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
          {/* Info cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INFO.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative block overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-navy/10 shadow-sm transition-all hover:shadow-2xl hover:ring-teal/40"
                >
                  <motion.span
                    aria-hidden="true"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/10 blur-2xl"
                  />
                  <div className="relative">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-lg shadow-teal/30 ring-1 ring-white/20">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
                      {c.label}
                    </p>
                    <p className="mt-1 text-lg font-bold leading-tight text-navy transition-colors group-hover:text-teal-dark">
                      {c.value}
                    </p>
                    <p className="mt-2 text-xs text-navy/60">{c.sub}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Form + side panel */}
          <div className="mt-20 grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-mid to-navy p-8 ring-1 ring-white/10 shadow-2xl shadow-navy/30 sm:p-10"
              >
                <motion.span
                  aria-hidden="true"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-teal/20 blur-3xl"
                />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
                    </span>
                    Send us a note
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Tell us about your practice.
                  </h2>
                  <p className="mt-3 text-sm text-white/70">
                    We reply within one business day. No sales pressure — just a
                    real conversation.
                  </p>

                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="mt-10 rounded-2xl border border-teal/40 bg-teal/10 p-8 text-center backdrop-blur"
                    >
                      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-white shadow-lg shadow-teal/40">
                        <Check className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <p className="mt-4 text-lg font-bold text-white">
                        Thanks — we got your note.
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        A partner success lead will reach out within one
                        business day.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal hover:text-teal-light"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <div className="mt-8 grid gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="First name" name="first" placeholder="Jane" required />
                        <Field label="Last name" name="last" placeholder="Doe" required />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field type="email" label="Work email" name="email" placeholder="you@practice.com" required />
                        <Field label="Phone" name="phone" placeholder="(555) 123-4567" />
                      </div>
                      <Field label="Practice name" name="practice" placeholder="Smile Family Dental" />
                      <Field label="City &amp; state" name="city" placeholder="Springfield, IL" />

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                          What can we help with?
                        </label>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {REASONS.map((r) => (
                            <label
                              key={r}
                              className="cursor-pointer rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 backdrop-blur transition-all has-[:checked]:border-teal has-[:checked]:bg-teal has-[:checked]:text-white hover:border-teal/60"
                            >
                              <input type="checkbox" name="reasons" value={r} className="sr-only" />
                              <span dangerouslySetInnerHTML={{ __html: r }} />
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                          Your message
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          required
                          placeholder="Tell us about your practice and what you&rsquo;re hoping to learn…"
                          className="mt-3 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal to-teal-dark px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-105"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <span className="relative">Send message</span>
                        <Send className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="text-center text-[11px] text-white/50">
                        We&apos;ll only use your info to reply. No marketing
                        spam, ever.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>

            {/* SIDE PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32 space-y-6"
            >
              {/* Image card */}
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
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-navy ring-1 ring-teal/20 shadow-2xl shadow-navy/10">
                  <Image
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
                    alt="Partner success team ready to help"
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    className="object-cover"
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  <motion.span
                    aria-hidden="true"
                    animate={{ y: ["-10%", "110%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                    className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-teal/30">
                      <MessageCircle className="h-3 w-3" aria-hidden="true" />
                      Real humans
                    </span>
                    <p className="mt-3 text-2xl font-bold leading-tight">
                      A partner success lead — not a bot.
                    </p>
                    <p className="mt-2 text-sm text-white/75">
                      Every inquiry routes to a real person on our team. We
                      read it, then we write back.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social row */}
              <div className="rounded-2xl bg-white p-6 ring-1 ring-navy/10 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
                  Follow along
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    {
                      label: "Facebook",
                      href: "#",
                      path: "M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.93 8.44-9.93Z",
                    },
                    {
                      label: "Instagram",
                      href: "#",
                      path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38a3.7 3.7 0 0 1-1.38.9c-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63A5.86 5.86 0 0 0 2 2 5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.86 5.86 0 0 0 1.38 2.14 5.86 5.86 0 0 0 2.14 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.14-1.38 5.86 5.86 0 0 0 1.38-2.14c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91A5.86 5.86 0 0 0 22 2 5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
                    },
                    {
                      label: "YouTube",
                      href: "#",
                      path: "M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.58A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.12 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.58a3 3 0 0 0 2.12-2.12C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.24 3.6L9.6 15.6Z",
                    },
                  ].map(({ label, href, path }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white text-navy/70 transition-all hover:border-teal hover:bg-teal hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION BAND */}
      <section id="map" className="relative scroll-mt-32 overflow-hidden bg-navy py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(42,191,191,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
                Headquarters
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Come find us on the map.
              </h2>
              <p className="mt-4 text-white/70">
                Dental Sleep Link is headquartered in Springfield, with partner
                practices coast to coast. Drop in by appointment.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal ring-1 ring-teal/30">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">123 Main St</p>
                    <p className="text-sm text-white/65">Springfield, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal ring-1 ring-teal/30">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">(123) 456-7890</p>
                    <p className="text-sm text-white/65">Mon – Fri · 9am – 6pm ET</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal ring-1 ring-teal/30">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">info@dentalsleeplink.com</p>
                    <p className="text-sm text-white/65">Reply within 1 business day</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative"
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
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-navy ring-1 ring-teal/20 shadow-2xl shadow-navy/30">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
                  alt="City map of headquarters area"
                  fill
                  sizes="(min-width: 1024px) 700px, 90vw"
                  className="object-cover"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-navy/40" />

                {/* Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.span
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-teal/40"
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-white shadow-2xl shadow-teal/40 ring-4 ring-white/40">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>

                <motion.span
                  aria-hidden="true"
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                  className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-4 py-3 shadow-xl ring-1 ring-navy/5 backdrop-blur">
                  <p className="text-sm font-bold text-navy">Dental Sleep Link HQ</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-navy/60">
                    Springfield, USA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-white py-20">
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
              Not ready to talk yet?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              Read how the partnership works and what you actually get inside.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/the-model"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-dark shadow-lg transition-transform hover:scale-105"
              >
                See the model
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/what-you-get"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                What you get
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40"
      />
    </div>
  );
}
