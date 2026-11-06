import type { Metadata } from "next";
import HowToJoin from "./HowToJoin";

const TITLE = "How to Join: Six Planning Stages";
const DESCRIPTION =
  "Practice-fit conversation, scope and fee review, agreement and payer requirements, credentialing and setup, concurrent team training, then a readiness review and phased launch. About six months. No payment before the agreement is ready.";
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
