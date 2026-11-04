import type { Metadata } from "next";
import SuccessStories from "./SuccessStories";

const TITLE = "Founding Practice Program: What Participating Practices Will Measure";
const DESCRIPTION =
  "An introduction to the founding practice program. Participating practices will measure training readiness, collected revenue, staff time, claims status, and patient follow-through. These are not achieved results.";
const PATH = "/success-stories";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <SuccessStories />;
}
