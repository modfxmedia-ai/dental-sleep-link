import type { Metadata } from "next";
import SitemapPage from "./SitemapPage";

const TITLE = "Sitemap";
const DESCRIPTION =
  "Every page on Dental Sleep Link in one place — programs, the model, partner criteria, success stories, blog, and how to get in touch.";
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
