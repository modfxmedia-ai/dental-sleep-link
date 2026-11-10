"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { OWNERSHIP, SPENCER_STUDY_CLUB, SUPPORT, TIMELINE } from "@/lib/seo";

const FAQS = [
  {
    id: "how-it-works",
    q: "How does DSL work with my practice?",
    a: "Dental Sleep Link supports credentialing, medical billing, team training, and workflow implementation around dentist-led care. Your dentists keep clinical authority and responsibility for patient care, and Dental Sleep Link handles the nonclinical work that makes a sleep program run.",
  },
  {
    id: "what-you-get",
    q: "What do I receive?",
    a: `Implementation covers credentialing coordination, practice and billing setup, and in-office team training. ${SUPPORT.ongoing} ${SUPPORT.onsite} Spencer Study Club membership is included, a $6,200 value. ${SPENCER_STUDY_CLUB.term}`,
  },
  {
    id: "ownership",
    q: "Do I keep my practice and my brand?",
    a: `Yes. ${OWNERSHIP} Treating clinicians keep clinical authority over patient care.`,
  },
  {
    id: "timing",
    q: "How long does implementation take?",
    a: TIMELINE.summary,
  },
  {
    id: "economics",
    q: "How is the partnership priced?",
    a: "There is an implementation fee to launch your sleep program and an ongoing service fee for continuing support. Spencer Study Club membership is included, a $6,200 value. Fee details are discussed during a consultation. Book a call to talk through what fits your practice.",
  },
  {
    id: "billing",
    q: "How does medical billing work?",
    a: "Dental Sleep Link handles claims submission, follow-up, and reporting for your sleep program, and coordinates credentialing with medical payers. Appliance payments go to your practice. Reimbursement varies with payer contracts, coverage, documentation, and patient responsibility.",
  },
  {
    id: "experience",
    q: "Do I need prior sleep medicine experience?",
    a: "No. Dental Sleep Link works with practices that are new to dental sleep medicine and with practices that already provide sleep services. Training, workflow, and timing are planned around where your practice is today.",
  },
  {
    id: "fit",
    q: "How is practice fit assessed?",
    a: "Practice fit looks at team capacity, payer readiness, clinical leadership, and commitment from a dentist and an internal team champion. We talk through fit together on a call before any agreement.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-32 overflow-hidden bg-teal-light py-16 sm:py-20 lg:py-24"
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

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
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
            Questions about working together.
          </h2>
          <p className="mt-4 text-navy/70">
            Answers to common questions. Fee details are discussed during a
            consultation.
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
            defaultValue="how-it-works"
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
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-navy transition-colors hover:text-teal-dark sm:gap-4 sm:px-6 sm:py-5 sm:text-base">
                      <span>{f.q}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal-dark transition-all duration-200 group-data-[state=open]:bg-teal group-data-[state=open]:text-white group-data-[state=open]:rotate-180">
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-navy/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-5 pb-4 text-sm text-navy/70 sm:px-6 sm:pb-5 sm:text-base">{f.a}</div>
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
