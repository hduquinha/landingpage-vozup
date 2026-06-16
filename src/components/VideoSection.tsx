import { Activity, MessageSquare, Mic, Sparkles, Timer, TrendingUp } from "lucide-react";
import speakerCoach from "@/assets/speaker-coach-commercial.png";
import { SectionLabel } from "@/components/editorial";

const VideoSection = () => {
  const steps = [
    { icon: Mic, title: "Voz", text: "respiração, dicção, volume, ritmo e pausas" },
    { icon: Activity, title: "Corpo", text: "postura, presença, gestos e contato visual" },
    { icon: MessageSquare, title: "Mensagem", text: "roteiro, clareza, histórias e argumentação" },
    { icon: Sparkles, title: "Emoção", text: "ansiedade, confiança e liderança sob pressão" },
  ];

  return (
    <section className="relative overflow-hidden bg-cream-deep px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr,1.18fr] lg:items-center">
          <div>
            <SectionLabel className="mb-5">Método VozUP</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-[1.02] sm:text-5xl">
              Mais rápido porque você treina desde a primeira aula.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Enquanto métodos tradicionais costumam prender o aluno em muita
              teoria, a VozUP acelera a evolução com prática, correção imediata
              e repetição guiada.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/5 bg-white p-6 shadow-card">
                <Timer className="mb-3 h-7 w-7 text-[#0d94a4]" />
                <p className="text-lg font-extrabold">Menos teoria solta</p>
                <p className="mt-1 text-sm text-slate-500">Mais exercícios aplicados ao seu objetivo real.</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white shadow-lift">
                <div className="absolute inset-0 bg-grid-ink opacity-60" />
                <div className="relative z-10">
                  <TrendingUp className="mb-3 h-7 w-7 text-[#7BE7EF]" />
                  <p className="text-lg font-extrabold">Mais evolução percebida</p>
                  <p className="mt-1 text-sm text-gray-300">Você fala, ajusta e melhora no próprio treino.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl border border-ink/5 bg-white p-5 shadow-soft sm:p-7">
            <img
              src={speakerCoach}
              alt="Treinador de oratória orientando aluno"
              width={760}
              height={1140}
              loading="lazy"
              decoding="async"
              className="mx-auto mb-4 max-h-[360px] w-auto object-contain drop-shadow-xl lg:absolute lg:-left-24 lg:bottom-0 lg:mb-0 lg:max-h-[520px]"
            />
            <div className="lg:ml-56">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-3 border-b border-gray-100 py-5 last:border-b-0 sm:grid-cols-[60px,1fr,auto] sm:items-center"
                >
                  <span className="font-display text-3xl font-black text-[#0d94a4]/15">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-extrabold sm:text-2xl">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 sm:text-base">{step.text}</p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4]">
                    <step.icon className="h-6 w-6" />
                  </span>
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
