import type { Metadata } from "next";
import SuccessStories from "./SuccessStories";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Transforming dental practices through sleep medicine — one partner at a time. See the outcomes our partners actually achieve.",
};

export default function Page() {
  return <SuccessStories />;
}
