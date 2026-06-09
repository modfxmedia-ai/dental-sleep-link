import type { Metadata } from "next";
import AboutUs from "./AboutUs";

const TITLE = "About Us — The Nation's First Dental Sleep Medicine MSO";
const DESCRIPTION =
  "Dental Sleep Link is the nation's first MSO built exclusively to help general dentists launch, scale, and profit from dental sleep medicine — without added complexity or risk.";
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
