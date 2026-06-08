import type { Metadata } from "next";
import WhatYouGet from "./WhatYouGet";

export const metadata: Metadata = {
  title: "What You Get",
  description:
    "Everything you need to run a profitable sleep dentistry practice — higher reimbursements, done-for-you billing, training, turnkey tooling, and a partnership that scales.",
};

export default function Page() {
  return <WhatYouGet />;
}
