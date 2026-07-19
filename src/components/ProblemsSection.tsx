import { AlertCircle, ArrowRight, BrainCircuit, MessageSquareWarning, Users } from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";
import { useLeadPopup } from "@/context/LeadPopupContext";

const problemIcons = [MessageSquareWarning, AlertCircle, Users, BrainCircuit];

const ProblemsSection = () => {
  const { content } = useLandingPage();
  const { openLeadPopup } = useLeadPopup();
  const problems = content.problems.items.map((item, index) => ({
    icon: problemIcons[index],
    ...item,
  }));

  return (
    <section className="relative overflow-hidden bg-cream-deep px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <h2 className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0d94a4]/60">
              Curso de Oratória
            </h2>
            <SectionLabel className="mb-3">{content.problems.sectionLabel}</SectionLabel>
            <p className="text-2xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
              {content.problems.headingLine1}
              <span className="block text-[#0d94a4]">{content.problems.headingLine2}</span>
            </p>
          </div>
          <p className="rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-4 text-base leading-relaxed text-slate-600 shadow-card sm:p-5">
            {content.problems.intro}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-ink/5 bg-white p-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:p-5"
            >
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4] transition group-hover:bg-[#00AFC1] group-hover:text-white sm:mb-3 sm:h-12 sm:w-12">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-sm font-extrabold leading-tight sm:text-lg">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:mt-3 sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {content.problems.extraCta && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => openLeadPopup("cta dores")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold text-white shadow-lift transition hover:bg-ink"
            >
              {content.problems.extraCta}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProblemsSection;
