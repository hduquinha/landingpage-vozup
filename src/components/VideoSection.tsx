import { Activity, MessageSquare, Mic, Sparkles, Timer, TrendingUp } from "lucide-react";
import speakerCoach from "@/assets/speaker-coach-commercial.png";

const VideoSection = () => {
  const steps = [
    { icon: Mic, title: "Voz", text: "respiração, dicção, volume, ritmo e pausas" },
    { icon: Activity, title: "Corpo", text: "postura, presença, gestos e contato visual" },
    { icon: MessageSquare, title: "Mensagem", text: "roteiro, clareza, histórias e argumentação" },
    { icon: Sparkles, title: "Emoção", text: "ansiedade, confiança e liderança sob pressão" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7FCFD] px-4 py-16 text-black sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Método VozUP
            </p>
            <h2 className="text-3xl font-black leading-none sm:text-5xl">
              Mais rápido porque você treina desde a primeira aula.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-700">
              Enquanto métodos tradicionais costumam prender o aluno em muita
              teoria, a VozUP acelera a evolução com prática, correção imediata
              e repetição guiada.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="bg-white p-5 shadow-sm">
                <Timer className="mb-3 h-7 w-7 text-[#008C99]" />
                <p className="text-lg font-black">Menos teoria solta</p>
                <p className="mt-1 text-sm text-gray-600">Mais exercícios aplicados ao seu objetivo real.</p>
              </div>
              <div className="bg-[#111827] p-5 text-white shadow-sm">
                <TrendingUp className="mb-3 h-7 w-7 text-[#7BE7EF]" />
                <p className="text-lg font-black">Mais evolução percebida</p>
                <p className="mt-1 text-sm text-gray-300">Você fala, ajusta e melhora no próprio treino.</p>
              </div>
            </div>
          </div>

          <div className="relative bg-white p-5 shadow-xl sm:p-7">
            <img
              src={speakerCoach}
              alt="Treinador de oratória orientando aluno"
              className="mx-auto mb-4 max-h-[360px] w-auto object-contain drop-shadow-xl lg:absolute lg:-left-20 lg:bottom-0 lg:mb-0 lg:max-h-[520px]"
            />
            <div className="lg:ml-56">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-3 border-b border-gray-200 py-5 last:border-b-0 sm:grid-cols-[72px,1fr,auto] sm:items-center"
                >
                  <span className="font-mono text-3xl font-black text-black/10">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-black sm:text-2xl">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 sm:text-base">{step.text}</p>
                  </div>
                  <step.icon className="h-8 w-8 text-[#008C99]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
