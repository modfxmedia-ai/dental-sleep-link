import type { Metadata } from "next";
import TheModel from "./TheModel";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

const TITLE = "The Model: A Structured Implementation Plan";
const DESCRIPTION =
  "Credentialing, setup, and remote training run in parallel, with hands-on training typically around months three or four. After launch, ongoing remote support, medical billing, and credentialing coordination continue.";
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
