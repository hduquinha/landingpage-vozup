import { BadgeCheck, BriefcaseBusiness, MessageCircle, Timer, Trophy, Zap } from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const advantageIcons = [Timer, Zap, BadgeCheck];
const extraIcons = [BriefcaseBusiness, MessageCircle, Trophy];

const TrainingContentSection = () => {
  const { content } = useLandingPage();
  const modules = content.trainingContent.modules;

  const advantages = content.trainingContent.advantages.map((item, index) => ({
    icon: advantageIcons[index],
    ...item,
  }));

  const extras = content.trainingContent.extras.map((text, index) => ({
    icon: extraIcons[index],
    text,
  }));

  return (
    <section className="bg-cream px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-ink/10 pb-6 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="mb-3">{content.trainingContent.sectionLabel}</SectionLabel>
            <h2 className="max-w-3xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">
              <span className="text-[#0d94a4]">Curso de Oratória - </span>
              {content.trainingContent.headingLine1}
            </h2>
          </div>
          <p className="max-w-md rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-4 text-sm leading-relaxed text-slate-600 shadow-card sm:p-5 sm:text-lg">
            {content.trainingContent.intro}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col rounded-3xl border border-ink/5 bg-white p-4 shadow-card sm:p-8">
            <SectionLabel className="mb-3 sm:mb-6">Conteúdo do treino</SectionLabel>
            <div className="grid flex-1 content-center grid-cols-2 gap-x-3 gap-y-1 sm:gap-x-8 sm:gap-y-2">
              {modules.map((item) => (
                <div key={item} className="flex items-center gap-2 border-b border-gray-100 py-3 sm:gap-4 sm:py-8">
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4] sm:h-12 sm:w-12">
                    <BadgeCheck className="h-4 w-4 sm:h-6 sm:w-6" />
                  </span>
                  <p className="text-xs font-bold leading-snug sm:text-xl">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-5 text-white shadow-lift sm:p-8">
            <div className="absolute inset-0 bg-grid-ink opacity-60" />
            <div className="relative z-10">
              <SectionLabel tone="light" className="mb-3 sm:mb-6">VozUP vs. cursos tradicionais</SectionLabel>
              <div className="space-y-3 sm:space-y-5">
                {advantages.map((item) => (
                  <div key={item.title} className="flex gap-3 border-t border-white/10 pt-3 sm:gap-4 sm:pt-5">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7BE7EF] sm:h-11 sm:w-11">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold sm:text-xl">{item.title}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-gray-300 sm:mt-1 sm:text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-2 border-t border-white/10 pt-4 sm:mt-8 sm:gap-4 sm:pt-6">
                {extras.map((item) => (
                  <div key={item.text} className="flex gap-2 sm:gap-3">
                    <item.icon className="mt-1 h-4 w-4 flex-shrink-0 text-[#7BE7EF] sm:h-5 sm:w-5" />
                    <p className="text-sm font-bold leading-tight sm:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContentSection;
