"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Clock,
  ArrowUpRight,
  Quote,
  Tag,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import type { Post, PostBlock } from "@/lib/posts";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function PostView({
  post,
  related,
}: {
  post: Post;
  related: Post[];
}) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  const toc = post.body
    .filter((b): b is Extract<PostBlock, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id ?? slugify(b.text), text: b.text }));

  return (
    <>
      {/* READING PROGRESS BAR */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        className="fixed left-0 right-0 top-[112px] z-40 h-[3px] bg-gradient-to-r from-teal via-teal-light to-teal-dark"
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 80% 20%, rgba(42,191,191,0.18), transparent 60%), radial-gradient(900px 500px at 10% 90%, rgba(42,191,191,0.10), transparent 60%)",
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

        <div className="relative mx-auto max-w-4xl px-6">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-teal">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blog" className="hover:text-teal">Blog</Link>
            <span className="text-white/30">/</span>
            <span className="text-teal">{post.category}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-teal ring-1 ring-teal/30 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
              </span>
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-center text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/70"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/15 text-teal-light ring-2 ring-teal/40 font-bold">
                {post.author.initials}
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-white/60">{post.author.role}</p>
              </div>
            </div>
            <span className="hidden h-6 w-px bg-white/15 sm:block" />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
              <Calendar className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70">
              <Clock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              {post.read} read
            </span>
          </motion.div>

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative mx-auto mt-14 max-w-5xl"
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
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 90vw"
                className="object-cover"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <motion.span
                aria-hidden="true"
                animate={{ y: ["-10%", "110%"] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
                className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <section className="relative bg-white py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 100% 0%, rgba(42,191,191,0.08), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(42,191,191,0.06), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(11,31,58,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 80%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* ARTICLE */}
          <article className="mx-auto w-full max-w-2xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="space-y-7"
            >
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </motion.div>

            {/* TAGS */}
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-navy/10 pt-8">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/60">
                <Tag className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                Tags
              </span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-navy/10 bg-white px-3 py-1 text-xs font-medium text-navy/70"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* AUTHOR CARD */}
            <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-navy via-navy-mid to-navy p-7 ring-1 ring-white/10 shadow-2xl shadow-navy/20 sm:p-8">
              <div className="flex flex-wrap items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-lg font-bold text-teal-light ring-2 ring-teal/40">
                  {post.author.initials}
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
                    Written by
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">{post.author.name}</p>
                  <p className="text-sm text-white/70">{post.author.role}</p>
                </div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-all hover:border-teal hover:bg-teal hover:text-white"
                >
                  Talk to the team
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* BACK TO BLOG */}
            <div className="mt-10">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:text-teal"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Back to all posts
              </Link>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              {toc.length > 0 && (
                <div className="rounded-2xl bg-white p-5 ring-1 ring-navy/10 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-navy/60">
                    In this article
                  </p>
                  <ol className="mt-3 space-y-2">
                    {toc.map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-start gap-3 text-sm text-navy/70 hover:text-teal-dark"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/10 text-[10px] font-bold text-teal-dark ring-1 ring-teal/20 transition-all group-hover:bg-teal group-hover:text-white">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-snug">{item.text}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="rounded-2xl bg-white p-5 ring-1 ring-navy/10 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-navy/60">
                  Share this post
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ShareButton label="Twitter" path="M22 5.8a8.5 8.5 0 0 1-2.36.65 4.13 4.13 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.29a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67v-.53A8.32 8.32 0 0 0 22 5.8Z" />
                  <ShareButton label="LinkedIn" path="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.36 0h4.37v1.91h.06c.61-1.16 2.1-2.39 4.33-2.39 4.63 0 5.48 3.05 5.48 7.02V22h-4.56v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V22H7.58V8Z" />
                  <ShareButton label="Facebook" path="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.93 8.44-9.93Z" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="relative overflow-hidden bg-teal-light/40 py-20">
          <div className="relative mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end"
            >
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
                  Keep reading
                </p>
                <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                  More from the playbook.
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:text-teal"
              >
                Browse all posts
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {related.map((r, i) => (
                <motion.article
                  key={r.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10 shadow-sm transition-all hover:shadow-2xl hover:ring-teal/40"
                >
                  <Link
                    href={`/blog/${r.slug}`}
                    className="relative block aspect-[16/9] w-full overflow-hidden bg-navy"
                  >
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 500px, (min-width: 640px) 50vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-teal px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal/30">
                      {r.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-navy/60">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-teal" aria-hidden="true" />
                        {r.date}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-navy/30" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3 text-teal" aria-hidden="true" />
                        {r.read}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-teal-dark">
                      <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70 line-clamp-3">
                      {r.excerpt}
                    </p>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark hover:text-teal"
                    >
                      Read more
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
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
              Ready to bring sleep medicine into your practice?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/80">
              Apply now and we&rsquo;ll map a clear, profitable path for your
              sleep practice &mdash; within one business day.
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
                href="/the-model"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                See the model
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Block({ block }: { block: PostBlock }) {
  if (block.type === "p") {
    return (
      <p className="text-lg leading-relaxed text-navy/80">{block.text}</p>
    );
  }
  if (block.type === "h2") {
    const id = block.id ?? slugify(block.text);
    return (
      <h2
        id={id}
        className="scroll-mt-32 pt-6 text-3xl font-bold leading-tight text-navy sm:text-4xl"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    const id = block.id ?? slugify(block.text);
    return (
      <h3 id={id} className="scroll-mt-32 pt-4 text-2xl font-bold text-navy">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-lg text-navy/80">
            <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-teal to-teal-dark" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-lg text-navy/80">
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-dark text-xs font-bold text-white shadow-sm">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  if (block.type === "callout") {
    return (
      <aside className="relative my-2 overflow-hidden rounded-2xl bg-gradient-to-br from-teal/10 via-teal/5 to-white p-6 ring-1 ring-teal/30 sm:p-8">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal to-teal-dark"
        />
        <div className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-teal-dark text-white shadow-lg shadow-teal/30">
            <Lightbulb className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
              {block.title}
            </p>
            <p className="mt-2 text-base leading-relaxed text-navy/80">
              {block.text}
            </p>
          </div>
        </div>
      </aside>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote className="relative my-2 rounded-2xl bg-navy p-7 text-white shadow-xl sm:p-9">
        <Quote className="h-8 w-8 text-teal/60" aria-hidden="true" />
        <p className="mt-3 text-xl leading-relaxed text-white/90 sm:text-2xl">
          &ldquo;{block.text}&rdquo;
        </p>
        {block.cite && (
          <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            &mdash; {block.cite}
          </footer>
        )}
      </blockquote>
    );
  }
  return null;
}

function ShareButton({ label, path }: { label: string; path: string }) {
  return (
    <button
      type="button"
      aria-label={`Share on ${label}`}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy/70 transition-all hover:border-teal hover:bg-teal hover:text-white"
      onClick={() => {
        if (typeof navigator !== "undefined" && navigator.share) {
          navigator
            .share({
              title: document.title,
              url: window.location.href,
            })
            .catch(() => {});
        } else if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).catch(() => {});
        }
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </button>
  );
}
