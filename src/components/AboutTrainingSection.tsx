import { ArrowRight, CheckCircle2 } from "lucide-react";
import { openWhatsApp } from "@/lib/lead";
import { SectionLabel } from "@/components/editorial";

const AboutTrainingSection = () => {
  const results = [
    "Apresentar ideias sem se perder no raciocínio",
    "Controlar voz trêmula, ansiedade e branco na hora H",
    "Usar postura, pausas e entonação para prender atenção",
    "Falar com firmeza em reuniões, vendas, vídeos e entrevistas",
  ];

  return (
    <section id="lead" className="relative overflow-hidden bg-cream px-4 py-20 text-ink sm:px-6 lg:py-28">
      <span className="watermark pointer-events-none absolute -right-6 top-6 text-[14rem] sm:text-[20rem]">01</span>
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <SectionLabel className="mb-5">Comunicação é treino</SectionLabel>
            <h2 className="text-4xl font-extrabold leading-[0.98] sm:text-5xl lg:text-6xl">
              Não é dom.
              <span className="block text-[#0d94a4]">É método.</span>
            </h2>
          </div>

          <div className="rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-6 shadow-card">
            <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
              A VozUP tira a oratória do campo da teoria. O aluno fala, recebe
              direção, ajusta e repete até construir uma comunicação mais
              natural, segura e influente.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr,0.72fr]">
          <div className="rounded-3xl border border-ink/5 bg-white p-2 shadow-card sm:p-4">
            {results.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl px-4 py-5 transition hover:bg-cream"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
                  0{index + 1}
                </span>
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#0d94a4]" />
                <p className="text-lg font-bold leading-snug sm:text-xl">{item}</p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-lift sm:p-8">
            <div className="absolute inset-0 bg-grid-ink opacity-60" />
            <div className="relative z-10">
              <SectionLabel tone="light" className="mb-5">Para quem é</SectionLabel>
              <p className="text-2xl font-extrabold leading-tight sm:text-3xl">
                Profissionais, líderes, vendedores, empreendedores e pessoas que
                cansaram de falar menos do que sabem.
              </p>
              <button
                onClick={() => openWhatsApp("seção de benefícios")}
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-6 py-4 text-center font-bold text-white transition hover:bg-white hover:text-ink sm:w-auto"
              >
                Quero destravar minha comunicação
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainingSection;
