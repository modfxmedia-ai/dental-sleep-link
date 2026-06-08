import type { Metadata } from "next";
import PartnerCriteria from "./PartnerCriteria";

export const metadata: Metadata = {
  title: "Partner Criteria",
  description:
    "Are you the right fit for Dental Sleep Link? Our partnerships are limited and exclusive — one practice per market.",
};

export default function Page() {
  return <PartnerCriteria />;
}
