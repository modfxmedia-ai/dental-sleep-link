"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  BOOKING_URL,
  CONTACT as SITE_CONTACT,
  LINKEDIN_COMPANY_URL,
} from "@/lib/seo";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import type { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about-us" },
  { label: "What You Get", href: "/what-you-get" },
  { label: "The Model", href: "/the-model" },
  { label: "Founding Practice Program", href: "/success-stories" },
  { label: "Partner Criteria", href: "/partner-criteria" },
  { label: "How to Join", href: "/how-to-join" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

const CONTACT = {
  phone: SITE_CONTACT.phone,
  phoneDisplay: SITE_CONTACT.phoneDisplay,
  email: SITE_CONTACT.email,
};

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
      {/* Tier 1 — top bar (desktop only; on mobile the same info lives in the slide-down menu) */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            key="top-bar"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="hidden overflow-hidden bg-teal text-white md:block"
          >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-sm md:flex-row md:gap-4">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{CONTACT.phoneDisplay}</span>
                  </a>
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

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tier 2 — main nav */}
      <motion.div
        animate={{
          paddingTop: scrolled ? 6 : 10,
          paddingBottom: scrolled ? 6 : 10,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={cn(
          "transition-colors duration-300",
          scrolled
            ? "bg-navy/90 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-navy",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="Dental Sleep Link home"
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
                className="h-11 w-auto sm:h-14 xl:h-12 2xl:h-16"
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden min-w-0 items-center xl:flex"
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
                        "relative whitespace-nowrap px-2 py-2 text-sm font-medium transition-colors 2xl:px-3",
                        active
                          ? "text-teal"
                          : "text-white hover:text-teal",
                      )}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-2 -bottom-0.5 h-px bg-teal 2xl:inset-x-3"
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
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dental Sleep Link on LinkedIn"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-teal lg:inline-flex"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden whitespace-nowrap rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal/20 transition-transform hover:scale-105 hover:bg-teal-dark lg:inline-block"
            >
              Book a call
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
            className="fixed inset-0 top-0 z-40 flex h-screen flex-col bg-navy pt-20 xl:hidden"
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
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="mt-8 block rounded-full bg-teal px-6 py-3 text-center text-base font-semibold text-white shadow-md shadow-teal/20 transition-transform hover:scale-105 hover:bg-teal-dark"
              >
                Book a call
              </Link>

              <div className="mt-8 space-y-3 text-sm text-white/80">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center gap-3 hover:text-teal"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 hover:text-teal"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {CONTACT.email}
                </a>
                <a
                  href={LINKEDIN_COMPANY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-teal"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
