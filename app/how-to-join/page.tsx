import type { Metadata } from "next";
import HowToJoin from "./HowToJoin";

const TITLE = "How to Join: Six Stages to Launch";
const DESCRIPTION =
  "Practice-fit conversation, scope and fee review, agreement and payer requirements, then credentialing, setup, and team training in parallel, followed by launch and ongoing support.";
const PATH = "/how-to-join";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <HowToJoin />;
}
