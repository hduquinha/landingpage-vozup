import {
  Award,
  ArrowRight,
  ListChecks,
  MessageSquare,
  PersonStanding,
  ShieldCheck,
  Target,
  Video,
  Wind,
} from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";
import { useLeadPopup } from "@/context/LeadPopupContext";

const benefitIcons = [
  ListChecks,
  ShieldCheck,
  Wind,
  PersonStanding,
  MessageSquare,
  Target,
  Award,
  Video,
];

const BenefitsSection = () => {
  const { content } = useLandingPage();
  const { openLeadPopup } = useLeadPopup();
  if (!content.benefits) return null;

  const { sectionLabel, heading, intro, items, cta } = content.benefits;
  const benefits = items.map((item, index) => ({
    icon: benefitIcons[index % benefitIcons.length],
    ...item,
  }));

  return (
    <section className="bg-white px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <SectionLabel className="mb-3">{sectionLabel}</SectionLabel>
            <p className="text-2xl font-extrabold leading-[1.1] sm:text-4xl">{heading}</p>
          </div>
          <p className="rounded-2xl border-l-4 border-[#00AFC1] bg-cream/70 p-4 text-base leading-relaxed text-slate-600 shadow-card sm:p-5">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink/5 bg-cream p-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:p-5"
            >
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4] sm:h-11 sm:w-11">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-extrabold leading-tight sm:text-base">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => openLeadPopup("cta benefícios")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold text-white shadow-lift transition hover:bg-ink"
          >
            {cta}
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
