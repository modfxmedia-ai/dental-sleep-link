import type { Metadata } from "next";
import AboutUs from "./AboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dental Sleep Link is the nation's first dedicated MSO built exclusively to help general dentists launch, scale, and profit from dental sleep medicine.",
};

export default function Page() {
  return <AboutUs />;
}
