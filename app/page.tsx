import About from "@/components/sections/About";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABand from "@/components/sections/CTABand";
import FAQSection from "@/components/sections/FAQSection";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyPartner from "@/components/sections/WhyPartner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyPartner />
      <Pricing />
      <FAQSection />
      <BlogPreview />
      <About />
      <CTABand />
    </>
  );
}
