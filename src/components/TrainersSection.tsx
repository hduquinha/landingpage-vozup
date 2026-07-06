import { Award, ClipboardCheck, MapPinned, UsersRound } from "lucide-react";
import speakerWoman from "@/assets/speaker-woman-commercial.webp";
const vozupLogo = "/VozUP_vetor_fundo-claro.svg";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const TrainersSection = () => {
  const { content } = useLandingPage();
  const features = [
    { icon: UsersRound, title: "Turmas presenciais" },
    { icon: ClipboardCheck, title: "Feedback individual" },
    { icon: Award, title: "Foco profissional" },
    { icon: MapPinned, title: "Unidade Tatuapé" },
  ];

  return (
    <section id="sobre" className="relative overflow-hidden bg-white px-4 py-14 text-ink sm:px-6 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-28 top-4 h-72 w-72 rounded-full bg-[#7BE7EF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#0d94a4]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-sm lg:max-w-none">
            <div className="deco-rings pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EAFBFC] via-white to-[#D8F7FA] shadow-soft sm:rounded-[2.5rem]">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
              <img
                src={speakerWoman}
                alt="Treinadora de oratória da VozUP"
                width={760}
                height={1142}
                loading="lazy"
                decoding="async"
                className="relative z-10 mx-auto h-auto w-full max-w-[220px] object-contain drop-shadow-2xl sm:max-w-[300px] lg:max-w-[420px]"
              />
            </div>
          </div>

          <div>
            <img
              src={vozupLogo}
              alt="VozUP"
              width={500}
              height={500}
              loading="lazy"
              decoding="async"
              className="mb-6 h-auto w-full max-w-[160px]"
            />
            <SectionLabel className="mb-5">{content.trainers.sectionLabel}</SectionLabel>
            <h2 className="text-2xl font-extrabold leading-[1.1] sm:text-4xl">
              <span className="text-[#0d94a4]">Curso de Oratória - </span>
              {content.trainers.headingLine1}
              <span className="block text-[#0d94a4]">{content.trainers.headingLine2}</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {content.trainers.intro}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white px-4 py-3 shadow-card"
                >
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4]">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
