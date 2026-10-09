import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/from-3-to-20-appliances-a-month",
        destination: "/blog/building-a-repeatable-dental-sleep-workflow",
        permanent: false,
      },
      {
        source: "/blog/why-every-dental-practice-should-offer-sleep-apnea-treatment",
        destination: "/blog/adding-dental-sleep-medicine-to-a-general-practice",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
