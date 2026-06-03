import { Award, ClipboardCheck, MapPinned, UsersRound } from "lucide-react";
import vozupLogo from "@/assets/vozup-logo-light.png";
import speakerCoach from "@/assets/speaker-coach-commercial.png";

const TrainersSection = () => {
  const features = [
    { icon: UsersRound, title: "Turmas presenciais" },
    { icon: ClipboardCheck, title: "Feedback individual" },
    { icon: Award, title: "Foco profissional" },
    { icon: MapPinned, title: "Unidade Tatuapé" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7FCFD] px-4 py-16 text-black sm:px-6 lg:py-24">
      <div className="absolute left-0 top-0 hidden h-full w-[42%] bg-[#D8F7FA] lg:block" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="py-8">
            <img
              src={speakerCoach}
              alt="Treinador de oratória da VozUP"
              className="h-auto w-full max-w-md object-contain drop-shadow-2xl"
            />
          </div>

          <div>
            <img src={vozupLogo} alt="VozUP" className="mb-8 h-auto w-full max-w-xs bg-[#111827] p-4" />
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Escola de oratória e liderança emocional
            </p>
            <h2 className="text-4xl font-black leading-none sm:text-5xl">
              Você não assiste uma transformação. Você ensaia ela.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
              A proposta da VozUP é colocar o aluno em movimento: falar, receber
              feedback, ajustar e repetir. É assim que a confiança deixa de ser
              promessa e vira comportamento.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-4 border-t border-gray-300 pt-5">
                  <feature.icon className="h-7 w-7 text-[#008C99]" />
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
