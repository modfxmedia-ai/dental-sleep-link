import type { Metadata } from "next";
import ContactUs from "./ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to a partner success lead at Dental Sleep Link. We reply within one business day.",
};

export default function Page() {
  return <ContactUs />;
}
