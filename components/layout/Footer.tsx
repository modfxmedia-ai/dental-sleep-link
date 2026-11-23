"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

import type { NavItem } from "@/types";
import {
  BOOKING_URL,
  CONTACT as SITE_CONTACT,
  LINKEDIN_COMPANY_URL,
} from "@/lib/seo";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "What You Get", href: "/what-you-get" },
  { label: "The Model", href: "/the-model" },
  { label: "Partner Criteria", href: "/partner-criteria" },
  { label: "How to Join", href: "/how-to-join" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Sitemap", href: "/sitemap" },
];

const CONTACT = {
  phone: SITE_CONTACT.phone,
  phoneDisplay: SITE_CONTACT.phoneDisplay,
  email: SITE_CONTACT.email,
};

function FooterLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Dental Sleep Link"
      width={640}
      height={230}
      className="h-12 w-auto"
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative pb-3 text-lg font-semibold text-white">
      {children}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 w-10 bg-teal"
      />
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 — Brand */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5"
        >
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Dental Sleep Link home"
          >
            <FooterLogo />
          </Link>

          <p className="text-sm leading-relaxed text-white/70">
            Dental Sleep Link supports credentialing, medical billing, team
            training, and workflow implementation around dentist-led care.
            Your practice retains responsibility for clinical care.
          </p>

          <a
            href={LINKEDIN_COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dental Sleep Link on LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Column 2 — Quick Links */}
        <motion.nav
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          aria-label="Footer"
          className="space-y-5"
        >
          <ColumnHeading>Quick Links</ColumnHeading>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-teal"
                >
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 0, x: -6, width: 0 }}
                    whileHover={{ opacity: 1, x: 0, width: "auto" }}
                    className="inline-block overflow-hidden text-teal opacity-0 transition-all duration-200 group-hover:w-auto group-hover:opacity-100"
                  >
                    →
                  </motion.span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Column 3 — Contact */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="space-y-5"
        >
          <ColumnHeading>Contact Us</ColumnHeading>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${CONTACT.phone}`}
                className="group flex items-start gap-3 text-white/80 transition-colors hover:text-teal"
              >
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span>{CONTACT.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-start gap-3 break-all text-white/80 transition-colors hover:text-teal"
              >
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <span>{CONTACT.email}</span>
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Column 4 — Newsletter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <div className="rounded-2xl bg-gradient-to-br from-teal to-teal-dark p-6 shadow-lg shadow-teal/10">
            <h3 className="text-lg font-semibold text-white">Discuss practice fit</h3>
            <p className="mt-2 text-sm text-white/90">
              A practice-fit conversation is the first step. Pick a time that
              works for you.
            </p>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-navy-mid"
            >
              Book a call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/60 sm:flex-row">
          <p>&copy; {year} Dental Sleep Link. All Rights Reserved.</p>
          <nav aria-label="Utility" className="flex items-center gap-4">
            <Link
              href="/sitemap"
              className="transition-colors hover:text-teal"
            >
              Sitemap
            </Link>
            <span aria-hidden="true" className="text-white/20">
              ·
            </span>
            <p>
              Powered by{" "}
              <a
                href="https://modfxmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal transition-opacity hover:opacity-80"
              >
                MODFXMedia
              </a>
            </p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
