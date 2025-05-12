import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FrustrationsSection } from "@/components/sections/frustrations-section";
import { AboutSection } from "@/components/sections/about-section";
import { InstructorsSection } from "@/components/sections/instructors-section";
import { ResultsShowcaseSection } from "@/components/sections/results-showcase-section";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { AnatomicalRegionsSection } from "@/components/sections/anatomical-regions-section";
import { TechniquesSection } from "@/components/sections/techniques-section";
import { EventGallerySection } from "@/components/sections/event-gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TableComparisonSection } from "@/components/sections/table-comparison-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { LogisticsSection } from "@/components/sections/logistics-section";
import { PrerequisitesSection } from "@/components/sections/prerequisites-section";
import { PlansComparisonSection } from "@/components/sections/plans-comparison-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { EventLocationSection } from "@/components/sections/event-location-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <FloatingCTA />
      
      <HeroSection />
      <ExperienceSection />
      <FrustrationsSection />
      <AboutSection />
      <InstructorsSection />
      <ResultsShowcaseSection />
      <DifferentialsSection />
      <AnatomicalRegionsSection />
      <TechniquesSection />
      <EventGallerySection />
      <TestimonialsSection />
      <TableComparisonSection />
      <ComparisonSection />
      <LogisticsSection />
      <PrerequisitesSection />
      <PlansComparisonSection />
      <ScheduleSection />
      <EventLocationSection />
      <FAQSection />
      <CTASection />
      
      <SiteFooter />
    </main>
  );
}