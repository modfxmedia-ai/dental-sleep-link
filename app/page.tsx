import About from "@/components/sections/About";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABand from "@/components/sections/CTABand";
import FAQSection from "@/components/sections/FAQSection";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import ProgressSection from "@/components/sections/ProgressSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsStrip from "@/components/sections/StatsStrip";
import Testimonials from "@/components/sections/Testimonials";
import WhyPartner from "@/components/sections/WhyPartner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <WhyPartner />
      <Pricing />
      <ProgressSection />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <About />
      <CTABand />
    </>
  );
}
