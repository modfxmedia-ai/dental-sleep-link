import type { Metadata } from "next";
import PartnerCriteria from "./PartnerCriteria";

const TITLE = "Partner Criteria: Practice Fit";
const DESCRIPTION =
  "Practice fit looks for a responsible dentist, an internal team champion, and protected capacity. New and experienced sleep programs are evaluated individually. Territorial protection is not offered.";
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
