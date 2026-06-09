import type { Metadata } from "next";
import PartnerCriteria from "./PartnerCriteria";

const TITLE = "Partner Criteria — One Practice Per Market";
const DESCRIPTION =
  "Dental Sleep Link partnerships are limited and exclusive — one practice per market. See if your established, growth-focused dental practice is the right fit for our MSO model.";
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
