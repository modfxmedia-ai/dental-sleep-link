import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT } from "@/lib/seo";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/opengraph-image`,
    description: SITE_DESCRIPTION,
    email: CONTACT.email,
    sameAs: [] as string[],
    areaServed: { "@type": "Country", name: "United States" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
