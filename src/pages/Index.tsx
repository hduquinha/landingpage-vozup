import { lazy, Suspense } from "react";
import HeroSectionClassic from "@/components/HeroSectionClassic";
import { LandingPageProvider } from "@/context/LandingPageContext";

const ProblemsSectionClassic = lazy(() => import("@/components/ProblemsSectionClassic"));
const AboutTrainingSectionClassic = lazy(() => import("@/components/AboutTrainingSectionClassic"));
const VideoSectionClassic = lazy(() => import("@/components/VideoSectionClassic"));
const TestimonialsSectionClassic = lazy(() => import("@/components/TestimonialsSectionClassic"));
const TrainersSectionClassic = lazy(() => import("@/components/TrainersSectionClassic"));
const TrainingContentSectionClassic = lazy(() => import("@/components/TrainingContentSectionClassic"));
const PricingSectionClassic = lazy(() => import("@/components/PricingSectionClassic"));
const LocationSectionClassic = lazy(() => import("@/components/LocationSectionClassic"));
const FAQSectionClassic = lazy(() => import("@/components/FAQSectionClassic"));
const FinalCtaSectionClassic = lazy(() => import("@/components/FinalCtaSectionClassic"));

/**
 * Home ("/") usa as versões "Classic" dos componentes — o estado exato de antes
 * da reforma mobile-first / pop-up / compactação, que foi aplicada só em /p/1-4
 * (ver LandingPage.tsx). Não compartilhar esses componentes com LandingPage.tsx.
 */
const Index = () => {
  return (
    <LandingPageProvider>
      <div className="min-h-screen">
      <HeroSectionClassic />
      <Suspense fallback={null}>
        <ProblemsSectionClassic />
        <AboutTrainingSectionClassic />
        <VideoSectionClassic />
        <TestimonialsSectionClassic />
        <TrainersSectionClassic />
        <TrainingContentSectionClassic />
        <PricingSectionClassic />
        <LocationSectionClassic />
        <FAQSectionClassic />
        <FinalCtaSectionClassic />
      </Suspense>
    </div>
    </LandingPageProvider>
  );
};

export default Index;
