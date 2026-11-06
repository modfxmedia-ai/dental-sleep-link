"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BOOKING_URL,
  CTA,
  CONTACT as SITE_CONTACT,
  LINKEDIN_COMPANY_URL,
} from "@/lib/seo";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import {
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Send,
  Check,
  MessageCircle,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const INFO = [
  {
    icon: CalendarDays,
    label: "Book a call",
    value: "Schedule a time",
    href: BOOKING_URL,
    sub: "Practice-fit conversation on Calendly",
    external: true,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Dental Sleep Link",
    href: LINKEDIN_COMPANY_URL,
    sub: "Company page",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONTACT.phoneDisplay,
    href: `tel:${SITE_CONTACT.phone}`,
    sub: "Pending confirmation",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONTACT.email,
    href: `mailto:${SITE_CONTACT.email}`,
    sub: "Pending confirmation",
  },
];

const REASONS = [
  "Discuss practice fit",
  "Ask about implementation",
  "Billing question",
  "Press and media",
];

const PROMISES = [
  { icon: Mail, label: "Prepare an email that you send yourself" },
  { icon: ShieldCheck, label: "No patient information" },
  { icon: Headphones, label: "Response time not promised" },
];

export default function ContactUs() {
  const [sent, setSent] = useState(false);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-14 sm:py-20 lg:py-28">
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
            className="mt-5 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl"
          >
            Discuss{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              practice fit
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            {CTA.headline} {CTA.action} You can also use the form below to prepare an email
            in your mail app. The form does not send the message for you. Do
            not include patient or medical information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-105"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {CTA.button}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

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
      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
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
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
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
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const get = (k: string) => (data.get(k)?.toString() || "").trim();
                  const reasons = data.getAll("reasons").map(String).filter(Boolean);
                  const first = get("first");
                  const last = get("last");
                  const lines = [
                    `Name: ${first} ${last}`.trim(),
                    `Email: ${get("email")}`,
                    `Phone: ${get("phone") || "Not provided"}`,
                    `Practice: ${get("practice") || "Not provided"}`,
                    `City & state: ${get("city") || "Not provided"}`,
                    `Treating dentist: ${get("is_dentist") || "Not provided"}`,
                    "",
                    `Interest: ${reasons.length ? reasons.join(", ") : "Not provided"}`,
                    "",
                    "Message:",
                    get("message"),
                  ];
                  const body = encodeURIComponent(lines.join("\n"));
                  const subject = encodeURIComponent(
                    `Partner inquiry: ${first} ${last}`.trim() || "Partner inquiry",
                  );
                  window.location.href = `mailto:${SITE_CONTACT.email}?subject=${subject}&body=${body}`;
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
                    Prepare an email
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    Tell us about your practice.
                  </h2>
                  <p className="mt-3 text-sm text-white/70">
                    Submitting opens your email app with this note filled in.
                    You still have to send it. Nothing on this page means the
                    message was delivered.
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
                        Your email app should open. Send the message yourself.
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        This page did not receive an application. If nothing
                        opened, write to{" "}
                        <a href={`mailto:${SITE_CONTACT.email}`} className="font-semibold text-teal hover:text-teal-light">
                          {SITE_CONTACT.email}
                        </a>
                        {" "}or{" "}
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-teal hover:text-teal-light"
                        >
                          book a call
                        </a>
                        . No reply window is promised.
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
                      <Field label="City and state" name="city" placeholder="City, ST" required />
                      <SelectField
                        label="Are you the treating dentist?"
                        name="is_dentist"
                        options={["Yes", "No, another clinician treats", "Not sure yet"]}
                      />

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
                              <span>{r}</span>
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
                        <span className="relative">Prepare email</span>
                        <Send className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="text-center text-[11px] leading-relaxed text-white/50">
                        Do not submit patient names, records, or other medical
                        information. This is a general inquiry, not a secure
                        clinical channel. Preparing the email is not the same
                        as sending it.
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
                      You send it
                    </span>
                    <p className="mt-3 text-2xl font-bold leading-tight">
                      The button only prepares the email.
                    </p>
                    <p className="mt-2 text-sm text-white/75">
                      Delivery depends on your mail app. A response standard is
                      not published until an owner confirms one.
                    </p>
                  </div>
                </div>
              </div>

              <div id="inquiry-notes" className="rounded-2xl bg-white p-6 ring-1 ring-navy/10 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
                  Before you write
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-navy/70">
                  <li>
                    Prefer to talk?{" "}
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-dark hover:text-teal"
                    >
                      Book a practice-fit call
                    </a>
                    .
                  </li>
                  <li>
                    Follow Dental Sleep Link on{" "}
                    <a
                      href={LINKEDIN_COMPANY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-dark hover:text-teal"
                    >
                      LinkedIn
                    </a>
                    .
                  </li>
                  <li>Do not include patient or medical information.</li>
                  <li>This form prepares mail to {SITE_CONTACT.email}.</li>
                </ul>
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
                Public details
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                No street address is published.
              </h2>
              <p className="mt-4 text-white/70">
                A street address and hours are not listed. The quickest way to
                start is to book a practice-fit call.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal ring-1 ring-teal/30">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{SITE_CONTACT.phoneDisplay}</p>
                    <p className="text-sm text-white/65">Pending confirmation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal ring-1 ring-teal/30">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{SITE_CONTACT.email}</p>
                    <p className="text-sm text-white/65">Pending confirmation</p>
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
                  alt="Abstract city photograph, not a Dental Sleep Link location"
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
                  <p className="text-sm font-bold text-navy">Address not published</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-navy/60">
                    Book a call or email us
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

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-3 w-full appearance-none rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40"
      >
        <option value="" disabled className="bg-navy text-white">
          Select …
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-navy text-white">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
