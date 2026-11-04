import type { Metadata } from "next";
import TheModel from "./TheModel";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

const TITLE = "The Model: A Structured Implementation Plan";
const DESCRIPTION =
  "An approximately six-month planning timeline with overlapping credentialing, setup, and team training. Appliance receipts stay with the practice. DSL invoices monthly in arrears.";
const PATH = "/the-model";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="The Dental Sleep Link Partnership Model"
        description={DESCRIPTION}
        url={PATH}
        serviceType="Implementation and billing support"
      />
      <TheModel />
    </>
  );
}
