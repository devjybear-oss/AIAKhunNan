import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroBanner from "@/components/HeroBanner";
import IntroSection from "@/components/IntroSection";
import PlanningStepsSection from "@/components/PlanningStepsSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <IntroSection />
      <StatsSection />
      <ProductsSection />
      <PlanningStepsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
