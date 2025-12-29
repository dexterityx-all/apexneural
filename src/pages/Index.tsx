import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <EcosystemSection />
      <FeaturedWorkSection />
      <CapabilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
