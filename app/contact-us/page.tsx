import type { Metadata } from "next";
import ContactUs from "./ContactUs";

const TITLE = "Contact Us: Discuss Practice Fit";
const DESCRIPTION =
  "Book a practice-fit call with Dental Sleep Link, or send us an inquiry. Please do not include patient or medical information.";
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
