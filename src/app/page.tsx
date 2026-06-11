import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroBanner from "@/components/HeroBanner";
import IntroSection from "@/components/IntroSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <IntroSection />
      <StatsSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
