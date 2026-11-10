import type { Metadata } from "next";
import SitemapPage from "./SitemapPage";

const TITLE = "Sitemap";
const DESCRIPTION =
  "Every page on the Dental Sleep Link site, from what you get and how the model works to partner criteria and how to join.";
const PATH = "/sitemap";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <SitemapPage />;
}
