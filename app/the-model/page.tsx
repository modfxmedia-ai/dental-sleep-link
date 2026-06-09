import type { Metadata } from "next";
import TheModel from "./TheModel";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

const TITLE = "The Model — A 5-Step Path to a Profitable Sleep Practice";
const DESCRIPTION =
  "A proven, streamlined model for sleep dentistry success: simplified onboarding, workflow integration, full-service medical billing, device delivery, and ongoing growth coaching.";
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
        serviceType="Managed Service Organization"
      />
      <TheModel />
    </>
  );
}
