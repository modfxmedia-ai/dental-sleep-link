"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: "how-it-works",
    q: "How does DSL work with my practice?",
    a: "Dental Sleep Link supports credentialing, medical billing, team training, and workflow implementation around dentist-led care. Your practice retains responsibility for clinical care. The relationship is a services arrangement. This site does not classify that arrangement as a franchise or decide any legal category.",
  },
  {
    id: "what-you-get",
    q: "What do I receive?",
    a: "Agreed implementation work covers credentialing assistance, setup, and team training, including billing setup. Ongoing services include claims submission and follow-up, reporting, and other agreed nonclinical support, billed as 14% of appliance collections. Software, appliances, testing, and additional marketing are not bundled into that fee. Collections vary with payer contracts, coverage, documentation, and patient responsibility.",
  },
  {
    id: "ownership",
    q: "Do I still own my practice?",
    a: "The practice remains independently owned, and treating clinicians keep clinical authority, subject to the final agreement. Ownership, services, and any transaction-related rights are governed by that agreement. This site does not describe equity transfers, exit proceeds, or drag-along rights.",
  },
  {
    id: "economics",
    q: "How is the partnership priced?",
    a: "Implementation fees are $20,000, covering the agreed credentialing, setup, and team-training or billing-setup work. Ongoing support is a flat 14% of appliance collections and includes ongoing billing and support under the services agreement. Approved fixed costs pass through at actual cost. A $599 monthly software cost is a planning assumption, not a guaranteed vendor quote. A separate $249 annual patient membership is retained by DSL, is additional to the appliance payment, and is excluded from illustrated practice revenue. The 14% fee is not applied again to that membership. These figures are not a promise of first-quarter profit.",
  },
  {
    id: "billing",
    q: "How does medical billing work?",
    a: "DSL supports credentialing, claims submission, follow-up, and reporting for dentist-led care. Reimbursement and payment timing are not guaranteed. Under the latest proposed funds flow, appliance receipts go to the practice, and DSL invoices monthly in arrears for its services and approved pass-through costs. The final agreement controls. DSL does not promise to hold practice funds, remit a fixed share, or sweep accounts.",
  },
  {
    id: "experience",
    q: "Do I need prior sleep medicine experience?",
    a: "New and experienced sleep programs may be evaluated individually. Readiness, training, a responsible dentist, an internal team champion, and protected capacity are assessed during planning. Prior sleep experience is not a published requirement, and a practice-age threshold is not published until it is confirmed.",
  },
  {
    id: "fit",
    q: "How is practice fit assessed?",
    a: "Practice fit looks at capacity, payer readiness, clinical leadership, and team commitment. An initial cohort of about three to five practices is planned, with an approximately six-month implementation horizon. Go-live depends on payer, entity, staff, and clinical readiness. Territorial protection is not offered on this site.",
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
            Commercial terms below follow the current planning materials.
            Agreement language still needs counsel review.
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
