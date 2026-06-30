import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

const ProblemsSection = lazy(() => import("@/components/ProblemsSection"));
const AboutTrainingSection = lazy(() => import("@/components/AboutTrainingSection"));
const VideoSection = lazy(() => import("@/components/VideoSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const TrainersSection = lazy(() => import("@/components/TrainersSection"));
const TrainingContentSection = lazy(() => import("@/components/TrainingContentSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const LocationSection = lazy(() => import("@/components/LocationSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCtaSection = lazy(() => import("@/components/FinalCtaSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemsSection />
        <AboutTrainingSection />
        <VideoSection />
        <TestimonialsSection />
        <TrainersSection />
        <TrainingContentSection />
        <PricingSection />
        <LocationSection />
        <FAQSection />
        <FinalCtaSection />
      </Suspense>
    </div>
  );
};

export default Index;
