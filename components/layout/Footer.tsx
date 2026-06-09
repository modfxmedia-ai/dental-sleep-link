"use client";

import Link from "next/link";
import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import type { NavItem } from "@/types";
import { CONTACT as SITE_CONTACT } from "@/lib/seo";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "What You Get", href: "/what-you-get" },
  { label: "The Model", href: "/the-model" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Partner Criteria", href: "/partner-criteria" },
  { label: "How to Join", href: "/how-to-join" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Sitemap", href: "/sitemap" },
];

const CONTACT = {
  phone: SITE_CONTACT.phone,
  phoneDisplay: SITE_CONTACT.phoneDisplay,
  email: SITE_CONTACT.email,
  address: `${SITE_CONTACT.street}, ${SITE_CONTACT.locality}, ${SITE_CONTACT.region}`,
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

const FacebookIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.9H8.1V14h2.7v8h2.7Z" />
  </svg>
);
const InstagramIcon: IconComponent = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z" />
  </svg>
);

const SOCIAL: { label: string; href: string; Icon: IconComponent }[] = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
];

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
            aria-label="Dental Sleep Link — Home"
          >
            <FooterLogo />
          </Link>

          <p className="flex items-start gap-2 text-sm text-white/70">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-teal"
              aria-hidden="true"
            />
            <span>{CONTACT.address}</span>
          </p>

          <p className="text-sm leading-relaxed text-white/70">
            At Dental Sleep Link, we partner with forward-thinking dentists to
            revolutionize sleep health. Together, we enable life-changing care
            through innovative solutions, expert support, and proven
            results—one restful night at a time.
          </p>

          <ul className="flex items-center gap-3">
            {SOCIAL.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white transition-transform hover:scale-110 hover:bg-teal-dark"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
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
            <li className="flex items-start gap-3 text-white/80">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                aria-hidden="true"
              />
              <span>{CONTACT.address}</span>
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
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="mt-2 text-sm text-white/90">
              Get the latest news on dental sleep medicine delivered to your
              inbox.
            </p>
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full bg-white/15 px-4 py-2.5 text-sm text-white placeholder-white/70 outline-none ring-1 ring-white/30 backdrop-blur transition focus:bg-white focus:text-navy focus:placeholder-navy/40 focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-navy-mid"
              >
                Subscribe
              </button>
            </form>
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
