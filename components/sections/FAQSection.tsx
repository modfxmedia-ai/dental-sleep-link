"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: "franchise",
    q: "Is Dental Sleep Link a franchise?",
    a: "No. We operate as a Management Services Organization (MSO), not a franchise. The partnership is typically a 50/50 ownership structure that gives you joint control while you benefit from our infrastructure, training, billing, and ongoing support.",
  },
  {
    id: "what-you-get",
    q: "What do I receive when I join?",
    a: "You get end-to-end medical billing on national contracts, compliance and credentialing, a clinical and operational training program, ongoing mentorship, and a phased roadmap that takes your practice from a few sleep cases per month to a full sleep program.",
  },
  {
    id: "ownership",
    q: "Do I still own my practice?",
    a: "Yes. You retain ownership and clinical autonomy in your existing practice. The partnership applies to the sleep dentistry division, where shared ownership and shared infrastructure unlock the scale that solo practices typically can&apos;t reach.",
  },
  {
    id: "reimbursement",
    q: "How does the reimbursement advantage work?",
    a: "We negotiate and maintain national medical insurance contracts on behalf of the partner network. Cases are billed centrally through our system, which means higher per-case reimbursement, faster payment cycles, and far less administrative load on your team.",
  },
  {
    id: "training",
    q: "Do I need prior sleep medicine experience?",
    a: "No. Our roadmap is designed for general dentists with little or no sleep experience as well as practices already delivering oral appliances. Training scales to your starting point and target volume.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-32 overflow-hidden bg-teal-light py-24"
    >
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-10 right-1/4 h-72 w-72 rounded-full bg-teal/15 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-dark">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Partnering made simple.
          </h2>
          <p className="mt-4 text-navy/70">
            The most common questions from dentists exploring the model.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="franchise"
            className="space-y-3"
          >
            {FAQS.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Accordion.Item
                  value={f.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md shadow-navy/5 ring-1 ring-navy/5 transition-all data-[state=open]:shadow-xl data-[state=open]:shadow-teal/15 data-[state=open]:ring-teal/30"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-navy transition-colors hover:text-teal-dark">
                      <span>{f.q}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal-dark transition-all duration-200 group-data-[state=open]:bg-teal group-data-[state=open]:text-white group-data-[state=open]:rotate-180">
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-navy/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-5">{f.a}</div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
