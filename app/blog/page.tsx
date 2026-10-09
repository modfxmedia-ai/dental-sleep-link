import type { Metadata } from "next";
import Blog from "./Blog";

const TITLE = "Resources for Building a Dental Sleep Program";
const DESCRIPTION =
  "Draft resources on evaluation, workflow, and adding dental sleep medicine to a general practice. Articles are held for authorship and clinical review.";
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
