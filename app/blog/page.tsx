import type { Metadata } from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, playbooks, and case studies on dental sleep medicine, medical billing, and growing a sleep-focused dental practice.",
};

export default function Page() {
  return <Blog />;
}
