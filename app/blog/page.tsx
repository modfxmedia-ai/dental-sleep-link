import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PUBLISHED_POSTS } from "@/lib/posts";
import Blog from "./Blog";

const TITLE = "Resources for Building a Dental Sleep Program";
const DESCRIPTION =
  "Resources on evaluation, workflow, and adding dental sleep medicine to a general practice.";
const PATH = "/blog";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  if (PUBLISHED_POSTS.length === 0) notFound();
  return <Blog />;
}
