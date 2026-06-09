import { SITE_URL, SITE_NAME } from "@/lib/seo";

type Props = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
};

export default function ServiceJsonLd({ name, description, url, serviceType }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? "Dental Sleep Medicine MSO",
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "MedicalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
