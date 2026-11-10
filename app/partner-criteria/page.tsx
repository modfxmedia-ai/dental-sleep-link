import type { Metadata } from "next";
import PartnerCriteria from "./PartnerCriteria";

const TITLE = "Partner Criteria: Practice Fit";
const DESCRIPTION =
  "Practice fit looks for a responsible dentist, an internal team champion, protected capacity, and payer readiness. New and experienced sleep programs are both welcome.";
const PATH = "/partner-criteria";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <PartnerCriteria />;
}
