import type { Metadata } from "next";
import ContactUs from "./ContactUs";

const TITLE = "Contact Us — Talk to a Partner Success Lead";
const DESCRIPTION =
  "Apply to partner with Dental Sleep Link or speak with our team about scaling sleep dentistry. We respond within one business day.";
const PATH = "/contact-us";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return <ContactUs />;
}
