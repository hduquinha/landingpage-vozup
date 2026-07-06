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
    <section className="bg-cream px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-ink/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="mb-5">{content.trainingContent.sectionLabel}</SectionLabel>
            <h2 className="max-w-3xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">
              <span className="text-[#0d94a4]">Curso de Oratória - </span>
              {content.trainingContent.headingLine1}
            </h2>
          </div>
          <p className="max-w-md rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-6 text-base leading-relaxed text-slate-600 shadow-card sm:text-lg">
            {content.trainingContent.intro}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col rounded-3xl border border-ink/5 bg-white p-5 shadow-card sm:p-8">
            <SectionLabel className="mb-6">Conteúdo do treino</SectionLabel>
            <div className="grid flex-1 content-center gap-x-8 gap-y-2 md:grid-cols-2">
              {modules.map((item) => (
                <div key={item} className="flex items-center gap-4 border-b border-gray-100 py-8">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4]">
                    <BadgeCheck className="h-6 w-6" />
                  </span>
                  <p className="text-lg font-bold leading-snug sm:text-xl">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-lift sm:p-8">
            <div className="absolute inset-0 bg-grid-ink opacity-60" />
            <div className="relative z-10">
              <SectionLabel tone="light" className="mb-6">VozUP vs. cursos tradicionais</SectionLabel>
              <div className="space-y-5">
                {advantages.map((item) => (
                  <div key={item.title} className="flex gap-4 border-t border-white/10 pt-5">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#7BE7EF]">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6">
                {extras.map((item) => (
                  <div key={item.text} className="flex gap-3">
                    <item.icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#7BE7EF]" />
                    <p className="font-bold leading-tight">{item.text}</p>
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
