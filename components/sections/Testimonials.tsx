"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Dental Sleep Partner",
    role: "General dentist, multi-location",
    quote:
      "Partnering with Dental Sleep Link completely transformed our practice. We went from dabbling in sleep to becoming a true center of excellence.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Dental Sleep Partner",
    role: "Solo practice owner",
    quote:
      "The roadmap gave me clarity. I can see exactly how to grow sleep from a side service to a full-time practice. Collections and billing have never been easier.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Dental Sleep Partner",
    role: "Group practice partner",
    quote:
      "I used to struggle with billing and reimbursements. Now everything is streamlined, and my sleep revenue has doubled within months.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="success-stories"
      className="relative scroll-mt-32 bg-navy py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
            What our partners say
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Stories from dentists scaling sleep medicine.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative flex h-full flex-col rounded-2xl bg-navy-mid/60 p-7 ring-1 ring-white/10 backdrop-blur"
            >
              <Quote
                className="absolute right-6 top-6 h-10 w-10 text-teal/20"
                aria-hidden="true"
              />
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-teal text-teal"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/15 text-sm font-bold text-teal ring-2 ring-teal/40"
                >
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
                <span>
                  <p className="font-semibold text-white">— {t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
