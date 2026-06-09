"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Home,
  Info,
  Briefcase,
  Workflow,
  Trophy,
  ClipboardList,
  Rocket,
  Mail,
  Newspaper,
  FileCode2,
  ShieldCheck,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { POSTS } from "@/lib/posts";
import { CONTACT, SITE_URL } from "@/lib/seo";

type SiteLink = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

type SiteGroup = {
  eyebrow: string;
  title: string;
  blurb: string;
  links: SiteLink[];
};

const GROUPS: SiteGroup[] = [
  {
    eyebrow: "01 — Start here",
    title: "Main pages",
    blurb:
      "The fastest tour of who we are, what the partnership delivers, and how the economics work.",
    links: [
      {
        href: "/",
        label: "Home",
        description:
          "Sleep dentistry, built as a real business. Overview of the MSO and how partners join.",
        icon: Home,
      },
      {
        href: "/about-us",
        label: "About Us",
        description:
          "Who we are, why we exist, and the operator background behind Dental Sleep Link.",
        icon: Info,
      },
      {
        href: "/what-you-get",
        label: "What You Get",
        description:
          "Medical billing, oral appliance fulfillment, training, and the operating playbook — itemized.",
        icon: Briefcase,
      },
    ],
  },
  {
    eyebrow: "02 — The program",
    title: "How the partnership works",
    blurb:
      "The actual mechanics: what we build with you, who fits, and the step-by-step path to launch.",
    links: [
      {
        href: "/the-model",
        label: "The Model",
        description:
          "How sleep medicine plugs into a general dental practice, and the economic structure underneath it.",
        icon: Workflow,
      },
      {
        href: "/partner-criteria",
        label: "Partner Criteria",
        description:
          "Who we partner with, who shouldn't apply, and how we keep one practice per market.",
        icon: ShieldCheck,
      },
      {
        href: "/how-to-join",
        label: "How to Join",
        description:
          "The six-step path from application to live sleep cases inside your practice.",
        icon: Rocket,
      },
      {
        href: "/success-stories",
        label: "Success Stories",
        description:
          "What partner practices get from the program — outcomes, capabilities, and testimonials.",
        icon: Trophy,
      },
    ],
  },
  {
    eyebrow: "03 — Resources",
    title: "Blog & resources",
    blurb:
      "Field notes on sleep apnea, oral appliance therapy, and building sleep medicine into a real business line.",
    links: [
      {
        href: "/blog",
        label: "Blog index",
        description:
          "All articles \u2014 clinical context, business model, and operator playbooks.",
        icon: Newspaper,
      },
      ...POSTS.map((p) => ({
        href: `/blog/${p.slug}`,
        label: p.title,
        description: p.excerpt,
        icon: ClipboardList,
      })),
    ],
  },
  {
    eyebrow: "04 — Get in touch",
    title: "Connect",
    blurb:
      "Apply for a market check, ask a question, or grab the machine-readable sitemap for search engines.",
    links: [
      {
        href: "/contact-us",
        label: "Contact Us",
        description:
          "Apply to become a partner or ask about your market. Replies within one business day.",
        icon: Mail,
      },
      {
        href: "/sitemap.xml",
        label: "XML sitemap",
        description:
          "Machine-readable sitemap used by search engines and crawlers.",
        icon: FileCode2,
      },
      {
        href: "/robots.txt",
        label: "robots.txt",
        description:
          "Crawler directives that point to the sitemap and govern indexing.",
        icon: FileCode2,
      },
    ],
  },
];

export default function SitemapPage() {
  const totalLinks = GROUPS.reduce((sum, g) => sum + g.links.length, 0);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy py-14 sm:py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 0%, rgba(42,191,191,0.18), transparent 60%)",
          }}
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-1/3 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-teal/15 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-0 left-[-6rem] h-[28rem] w-[28rem] rounded-full bg-teal-dark/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-teal">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-teal">Sitemap</span>
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
            Every page, one map
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-[2.1rem] font-bold leading-[1.1] tracking-tight text-white sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Find anything on{" "}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              Dental Sleep Link
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            A human-friendly map of the site. Jump straight to the program
            details, partner criteria, blog, or apply for a market check.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <span className="text-teal">{totalLinks}</span> destinations
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <span className="text-teal">{GROUPS.length}</span> sections
            </span>
            <a
              href="/sitemap.xml"
              className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal backdrop-blur transition-colors hover:bg-teal/20"
            >
              <FileCode2 className="h-3.5 w-3.5" aria-hidden="true" />
              XML for crawlers
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS NAV */}
      <section className="relative border-y border-navy/5 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto py-4 sm:justify-center sm:gap-3 sm:overflow-visible">
            {GROUPS.map((g) => (
              <a
                key={g.title}
                href={`#${slugify(g.title)}`}
                className="group inline-flex shrink-0 snap-start items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy/70 transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:bg-teal/5 hover:text-teal-dark"
              >
                <span className="text-teal">{g.eyebrow.split(" — ")[0]}</span>
                <span className="hidden sm:inline">{g.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GROUPS */}
      <section className="relative bg-gradient-to-b from-white via-teal-light/20 to-white py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 400px at 80% 10%, rgba(42,191,191,0.10), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="space-y-20 sm:space-y-24">
            {GROUPS.map((group, gi) => (
              <motion.div
                key={group.title}
                id={slugify(group.title)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-32"
              >
                <div className="grid items-start gap-8 lg:grid-cols-[260px_1fr] lg:gap-16">
                  <div className="lg:sticky lg:top-32">
                    <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-dark ring-1 ring-teal/20">
                      {group.eyebrow}
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy/65">
                      {group.blurb}
                    </p>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/40">
                      {group.links.length}{" "}
                      {group.links.length === 1 ? "link" : "links"}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {group.links.map((link, li) => {
                      const Icon = link.icon;
                      const isExternal = link.href.startsWith("http");
                      const isFile =
                        link.href.endsWith(".xml") ||
                        link.href.endsWith(".txt");
                      const useNativeAnchor = isExternal || isFile;
                      const cardClass =
                        "group relative block h-full overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 ring-1 ring-navy/5 transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-2xl hover:ring-teal/30 sm:p-6";

                      const cardInner = (
                        <>
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                          />
                          <div className="flex items-start gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal/15 to-teal/5 text-teal-dark ring-1 ring-teal/20 transition-colors group-hover:from-teal group-hover:to-teal-dark group-hover:text-white">
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <p className="text-sm font-bold text-navy transition-colors group-hover:text-teal-dark sm:text-base">
                                  {link.label}
                                </p>
                                <ArrowUpRight
                                  className="mt-0.5 h-4 w-4 shrink-0 text-navy/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal"
                                  aria-hidden="true"
                                />
                              </div>
                              <p className="mt-1.5 text-xs leading-relaxed text-navy/60 sm:text-sm">
                                {link.description}
                              </p>
                              <p className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-navy/35">
                                {prettyHref(link.href)}
                              </p>
                            </div>
                          </div>
                        </>
                      );

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.4,
                            delay: Math.min(li * 0.04 + gi * 0.02, 0.4),
                          }}
                        >
                          {useNativeAnchor ? (
                            <a
                              href={link.href}
                              {...(isExternal && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              })}
                              className={cardClass}
                            >
                              {cardInner}
                            </a>
                          ) : (
                            <Link href={link.href} className={cardClass}>
                              {cardInner}
                            </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% 50%, rgba(42,191,191,0.15), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal">
                Prefer to talk?
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Skip the map and reach out directly.
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="inline-flex items-center gap-2 hover:text-teal"
                >
                  <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 hover:text-teal"
                >
                  <Mail className="h-4 w-4 text-teal" aria-hidden="true" />
                  {CONTACT.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal" aria-hidden="true" />
                  {CONTACT.locality}, {CONTACT.region}
                </span>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-teal-dark px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/30 transition-transform hover:scale-105"
            >
              <span>Apply or ask a question</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function prettyHref(href: string) {
  if (href.startsWith("http")) return href.replace(/^https?:\/\//, "");
  return `${SITE_URL.replace(/^https?:\/\//, "")}${href}`;
}
