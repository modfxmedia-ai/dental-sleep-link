"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Clock,
  Tag,
  TrendingUp,
  Search,
  HeartPulse,
} from "lucide-react";
import { useState } from "react";
import { POSTS } from "@/lib/posts";

const CATEGORIES = ["All", "Clinical", "Billing", "Growth", "Industry"];

const TOPICS = [
  { icon: HeartPulse, label: "Clinical care" },
  { icon: TrendingUp, label: "Practice growth" },
  { icon: Tag, label: "Medical billing" },
];

export default function Blog() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const filtered = POSTS.filter((p) => {
    const inCat = active === "All" || p.category === active;
    const inQ =
      q.trim() === "" ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase());
    return inCat && inQ;
  });

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.slug !== featured?.slug);

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
            <span className="text-teal">Blog</span>
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
            Insights &amp; playbooks
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Ideas that{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              grow sleep practices
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Clinical insights, billing playbooks, and growth stories from
            inside the Dental Sleep Link partner network.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur focus-within:border-teal focus-within:ring-2 focus-within:ring-teal/40"
          >
            <Search className="h-4 w-4 text-white/60" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search articles…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              aria-label="Search articles"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/70 hover:bg-white/20"
              >
                Clear
              </button>
            )}
          </motion.div>

          {/* Topic chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {TOPICS.map((t) => {
              const Icon = t.icon;
              return (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur"
                >
                  <Icon className="h-3 w-3 text-teal" aria-hidden="true" />
                  {t.label}
                </span>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* LISTING */}
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
          {/* Category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-teal text-white shadow-lg shadow-teal/30"
                      : "border border-navy/10 bg-white text-navy/70 hover:border-teal hover:text-teal-dark"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Featured */}
          {featured && (
            <motion.article
              key={featured.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="relative">
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-12 -left-2 z-0 select-none text-[10rem] font-black leading-none tracking-tighter"
                  style={{
                    WebkitTextStroke: "2px rgba(42,191,191,0.30)",
                    color: "transparent",
                  }}
                >
                  01
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
                      src={featured.image}
                      alt={featured.imageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 600px, 90vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                    <motion.span
                      aria-hidden="true"
                      animate={{ y: ["-10%", "110%"] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                      className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-70"
                    />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-teal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal/30">
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                      Featured
                    </span>
                    <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur ring-1 ring-white/25">
                      {featured.category}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-navy/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                    {featured.date}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-navy/30" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                    {featured.read} read
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-navy/70">{featured.excerpt}</p>
                <div className="mt-7 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/15 text-teal-dark ring-2 ring-teal/40 font-bold">
                    {featured.author.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{featured.author.name}</p>
                    <p className="text-xs text-navy/60">{featured.author.role}</p>
                  </div>
                </div>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-teal-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-105"
                >
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          )}

          {/* Grid of other posts */}
          {rest.length > 0 && (
            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10 shadow-sm transition-all hover:shadow-2xl hover:ring-teal/40"
                >
                  <Link href={`/blog/${p.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-teal px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal/30">
                      {p.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-teal" aria-hidden="true" />
                        {p.date}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-navy/30" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3 text-teal" aria-hidden="true" />
                        {p.read}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-teal-dark">
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/70 line-clamp-3">
                      {p.excerpt.replace(/&apos;/g, "\u2019")}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/15 text-[11px] font-bold text-teal-dark ring-1 ring-teal/30">
                          {p.author.initials}
                        </span>
                        <span className="text-xs font-medium text-navy/70">{p.author.name}</span>
                      </div>
                      <Link
                        href={`/blog/${p.slug}`}
                        aria-label={`Read ${p.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy/70 transition-all group-hover:border-teal group-hover:bg-teal group-hover:text-white"
                      >
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="mt-20 rounded-2xl border border-dashed border-navy/15 bg-white p-10 text-center">
              <p className="text-sm text-navy/60">
                No articles match your search. Try a different keyword or
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
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
              Get the playbook in your inbox.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              One short email a month. Clinical insights, billing wins, and
              partner stories — no fluff.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@practice.com"
                className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 backdrop-blur focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-dark shadow-lg transition-transform hover:scale-105"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
