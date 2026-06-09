"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    id: "franchise",
    q: "Is Dental Sleep Link a franchise?",
    a: "No. We\u2019re a Management Services Organization (MSO), not a franchise. You retain full ownership and clinical control of your dental practice. We supply the infrastructure \u2014 medical billing on national contracts, oral appliance fulfillment, clinical training, and operating playbooks \u2014 under a services agreement.",
  },
  {
    id: "what-you-get",
    q: "What do I receive when I join?",
    a: "End-to-end medical billing on national payer contracts, oral appliance lab logistics, clinical and operational training, compliance and credentialing support, and a phased growth roadmap that takes you from a few sleep cases per month to a fully running sleep line.",
  },
  {
    id: "ownership",
    q: "Do I still own my practice?",
    a: "Yes \u2014 100%. Your dental practice and clinical autonomy remain entirely yours. Dental Sleep Link provides services to your practice under an MSO agreement; we do not take equity in your dental practice.",
  },
  {
    id: "economics",
    q: "How is the partnership priced?",
    a: "Pricing is a participation fee at onboarding plus an ongoing management fee on the sleep medicine line we help you build. We share the exact structure on a call \u2014 it\u2019s designed so the sleep program is profitable to you from the first full quarter of operation.",
  },
  {
    id: "reimbursement",
    q: "How does the reimbursement advantage work?",
    a: "We negotiate and maintain medical insurance contracts on behalf of the partner network and bill centrally through our system. That typically means higher per-case reimbursement, faster collection cycles, and substantially less administrative load on your front desk.",
  },
  {
    id: "training",
    q: "Do I need prior sleep medicine experience?",
    a: "No. The program is built for general dentists with little or no prior sleep experience, as well as practices already delivering oral appliances. Training and pacing scale to your starting point and target case volume.",
  },
  {
    id: "exclusivity",
    q: "Why one practice per market?",
    a: "We protect partner economics by only working with one practice per defined market area. That means no internal competition for cases inside the network and a clear runway to grow without us bringing on a competitor next door.",
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
