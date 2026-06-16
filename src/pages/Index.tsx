import HeroSection from "@/components/HeroSection";
import AboutTrainingSection from "@/components/AboutTrainingSection";
import ProblemsSection from "@/components/ProblemsSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrainersSection from "@/components/TrainersSection";
import TrainingContentSection from "@/components/TrainingContentSection";
import PricingSection from "@/components/PricingSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import FinalCtaSection from "@/components/FinalCtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
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
    </div>
  );
};

export default Index;
