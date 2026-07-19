import { ArrowRight, Briefcase, Heart, MessageCircle, TrendingUp, Users, Zap } from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";
import { useLeadPopup } from "@/context/LeadPopupContext";

const differentialIcons = [Zap, Users, MessageCircle, Heart, TrendingUp, Briefcase];

const DifferentialsSection = () => {
  const { content } = useLandingPage();
  const { openLeadPopup } = useLeadPopup();
  if (!content.differentials) return null;

  const { sectionLabel, heading, intro, items, cta } = content.differentials;
  const differentials = items.map((item, index) => ({
    icon: differentialIcons[index % differentialIcons.length],
    ...item,
  }));

  return (
    <section className="relative overflow-hidden bg-ink px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid-ink opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <SectionLabel tone="light" className="mb-3 justify-center">{sectionLabel}</SectionLabel>
          <p className="max-w-2xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">{heading}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">{intro}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-5"
            >
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#7BE7EF] sm:h-11 sm:w-11">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-extrabold leading-tight sm:text-base">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-300 sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => openLeadPopup("cta diferenciais")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold text-white shadow-lift transition hover:bg-white hover:text-ink"
          >
            {cta}
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
