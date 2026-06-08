import type { Metadata } from "next";
import HowToJoin from "./HowToJoin";

export const metadata: Metadata = {
  title: "How to Join",
  description:
    "Becoming a Dental Sleep Link Partner is simple, transparent, and structured for success. Apply, interview, onboard, and launch.",
};

export default function Page() {
  return <HowToJoin />;
}
