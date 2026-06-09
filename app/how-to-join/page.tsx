import type { Metadata } from "next";
import HowToJoin from "./HowToJoin";

const TITLE = "How to Join — Apply, Interview, Onboard, Launch";
const DESCRIPTION =
  "Becoming a Dental Sleep Link partner takes ~30 days. Apply, interview, onboard, and launch sleep medicine in your practice with full support every step of the way.";
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
