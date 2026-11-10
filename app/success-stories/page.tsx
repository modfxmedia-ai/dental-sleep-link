import type { Metadata } from "next";
import { notFound } from "next/navigation";

const TITLE = "Success Stories";
const DESCRIPTION =
  "Case studies from Dental Sleep Link partner practices.";
const PATH = "/success-stories";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  notFound();
}
