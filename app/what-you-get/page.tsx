import type { Metadata } from "next";
import WhatYouGet from "./WhatYouGet";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

const TITLE = "What You Get — Implementation, Training, and Billing Support";
const DESCRIPTION =
  "Agreed setup, staff training, credentialing assistance, claims submission and follow-up, reporting, and ongoing nonclinical support. Clinical care stays with the practice.";
const PATH = "/what-you-get";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="What You Get with Dental Sleep Link"
        description={DESCRIPTION}
        url={PATH}
        serviceType="Dental Sleep Medicine Partnership"
      />
      <WhatYouGet />
    </>
  );
}
