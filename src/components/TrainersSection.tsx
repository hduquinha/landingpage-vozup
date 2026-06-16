import { Award, ClipboardCheck, MapPinned, UsersRound } from "lucide-react";
import vozupLogo from "@/assets/vozup-logo-light.png";
import speakerCoach from "@/assets/speaker-coach-commercial.png";
import { SectionLabel } from "@/components/editorial";

const TrainersSection = () => {
  const features = [
    { icon: UsersRound, title: "Turmas presenciais" },
    { icon: ClipboardCheck, title: "Feedback individual" },
    { icon: Award, title: "Foco profissional" },
    { icon: MapPinned, title: "Unidade Tatuapé" },
  ];

  return (
    <section className="relative overflow-hidden bg-cream-deep px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="relative">
            <div className="deco-rings pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block" />
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D8F7FA] to-[#EAFBFC] p-6 shadow-soft">
              <img
                src={speakerCoach}
                alt="Treinador de oratória da VozUP"
                width={760}
                height={1140}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div>
            <div className="mb-8 inline-flex rounded-2xl bg-ink p-4">
              <img
                src={vozupLogo}
                alt="VozUP"
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                className="h-auto w-full max-w-[220px]"
              />
            </div>
            <SectionLabel className="mb-5">Escola de oratória e liderança emocional</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-[1.0] sm:text-5xl">
              Você não assiste uma transformação.
              <span className="block text-[#0d94a4]">Você ensaia ela.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              A proposta da VozUP é colocar o aluno em movimento: falar, receber
              feedback, ajustar e repetir. É assim que a confiança deixa de ser
              promessa e vira comportamento.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 rounded-2xl border border-ink/5 bg-white px-5 py-4 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4]">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <span className="text-lg font-bold">{feature.title}</span>
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
