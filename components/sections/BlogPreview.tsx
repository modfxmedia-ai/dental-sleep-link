"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { POSTS } from "@/lib/posts";

const PREVIEW = POSTS.slice(0, 3);

export default function BlogPreview() {
  return (
    <section id="blog" className="relative scroll-mt-32 overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, rgba(42,191,191,0.15), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(42,191,191,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              From the blog
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Your easy guide to treating sleep apnea.
            </h2>
            <p className="mt-4 text-white/70">
              Practical reads for dentists building a sleep program &mdash; from
              billing to clinical workflows.
            </p>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
          >
            View all posts
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PREVIEW.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-navy-mid/60 ring-1 ring-white/10 backdrop-blur transition-all hover:ring-teal/40 hover:shadow-2xl hover:shadow-teal/10"
            >
              <Link
                href={`/blog/${p.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-navy"
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent"
                />
                <span className="absolute left-4 top-4 rounded-full bg-teal px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal/30">
                  {p.category}
                </span>
                <motion.span
                  aria-hidden="true"
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  }}
                  className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-50"
                />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-white/50">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {p.read} read
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-teal">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                  {p.excerpt}
                </p>
                <Link
                  href={`/blog/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-light"
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
  );
}
