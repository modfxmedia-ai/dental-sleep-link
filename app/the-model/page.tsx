import type { Metadata } from "next";
import TheModel from "./TheModel";

export const metadata: Metadata = {
  title: "The Model",
  description:
    "A proven, streamlined path to sleep practice success — onboarding, workflow integration, billing, device delivery, and ongoing partnership.",
};

export default function Page() {
  return <TheModel />;
}
