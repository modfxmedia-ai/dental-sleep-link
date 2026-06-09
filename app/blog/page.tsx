import type { Metadata } from "next";
import Blog from "./Blog";

const TITLE = "Blog — Dental Sleep Medicine Insights & Playbooks";
const DESCRIPTION =
  "Clinical insights, growth playbooks, and case studies on dental sleep medicine, medical billing, and scaling a sleep-focused dental practice.";
const PATH = "/blog";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <Blog />;
}
