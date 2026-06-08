"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

// lucide-react no longer ships brand marks, so we inline the social glyphs.
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

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about-us" },
  { label: "What You Get", href: "/what-you-get" },
  { label: "The Model", href: "/the-model" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Partner Criteria", href: "/partner-criteria" },
  { label: "How to Join", href: "/how-to-join" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const CONTACT = {
  phone: "123456789",
  email: "info@dentalsleeplink.com",
  address: "123 Main St, Springfield, USA",
};

const SOCIAL: { label: string; href: string; Icon: IconComponent }[] = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
];

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Tier 1 — top bar */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            key="top-bar"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-teal text-white"
          >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-sm md:flex-row md:gap-4">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{CONTACT.phone}</span>
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>{CONTACT.address}</span>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{CONTACT.email}</span>
                  </a>
                </li>
              </ul>

              <ul className="flex items-center gap-2">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal transition-transform hover:scale-110"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tier 2 — main nav */}
      <motion.div
        animate={{
          paddingTop: scrolled ? 8 : 16,
          paddingBottom: scrolled ? 8 : 16,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "bg-navy/90 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-navy",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Dental Sleep Link — Home"
          >
            <motion.div
              animate={{ scale: scrolled ? 0.85 : 1 }}
              transition={{ duration: 0.25 }}
              className="origin-left"
            >
              <Image
                src="/logo.png"
                alt="Dental Sleep Link"
                width={640}
                height={230}
                priority
                className="h-16 w-auto sm:h-20"
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center xl:flex"
          >
            <ul className="flex items-center">
              {NAV_ITEMS.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <li
                    key={item.href}
                    className="flex items-center"
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "text-teal"
                          : "text-white hover:text-teal",
                      )}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-teal"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                    {i < NAV_ITEMS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="select-none text-white/20"
                      >
                        |
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/how-to-join"
              className="hidden rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal/20 transition-transform hover:scale-105 hover:bg-teal-dark sm:inline-block"
            >
              Apply now
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 xl:hidden"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile slide-down nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-0 z-40 flex h-screen flex-col bg-navy pt-24 xl:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex-1 overflow-y-auto px-6 pb-8"
            >
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block border-b border-white/10 py-4 text-lg font-medium transition-colors",
                          active
                            ? "text-teal"
                            : "text-white hover:text-teal",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/how-to-join"
                onClick={closeMobile}
                className="mt-8 block rounded-full bg-teal px-6 py-3 text-center text-base font-semibold text-white shadow-md shadow-teal/20 transition-transform hover:scale-105 hover:bg-teal-dark"
              >
                Apply now
              </Link>

              <div className="mt-8 space-y-3 text-sm text-white/80">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 hover:text-teal"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {CONTACT.phone}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {CONTACT.address}
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 hover:text-teal"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </div>

              <ul className="mt-6 flex items-center gap-3">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white transition-transform hover:scale-110"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
