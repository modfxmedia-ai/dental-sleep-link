import type { Metadata } from "next";
import AboutUs from "./AboutUs";

const TITLE = "About Us — Dental Sleep Medicine Implementation Support";
const DESCRIPTION =
  "Dental Sleep Link supports credentialing, medical billing, team training, and workflow implementation around dentist-led care. Clinical responsibility stays with the practice.";
const PATH = "/about-us";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <AboutUs />;
}
