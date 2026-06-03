import { ArrowRight, CheckCircle2 } from "lucide-react";
import { openWhatsApp } from "@/lib/lead";

const AboutTrainingSection = () => {
  const results = [
    "Apresentar ideias sem se perder no raciocínio",
    "Controlar voz trêmula, ansiedade e branco na hora H",
    "Usar postura, pausas e entonação para prender atenção",
    "Falar com firmeza em reuniões, vendas, vídeos e entrevistas",
  ];

  return (
    <section id="lead" className="relative overflow-hidden bg-white px-4 py-16 text-black sm:px-6 lg:py-24">
      <div className="absolute left-0 top-0 hidden h-full w-2 bg-[#00AFC1] sm:block" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Comunicação é treino
            </p>
            <h2 className="text-3xl font-black leading-none sm:text-5xl lg:text-6xl">
              Não é dom.
              <span className="block text-[#008C99]">É método.</span>
            </h2>
          </div>

          <div className="border-l border-gray-300 pl-5">
            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              A VozUP tira a oratória do campo da teoria. O aluno fala, recebe
              direção, ajusta e repete até construir uma comunicação mais
              natural, segura e influente.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr,0.72fr]">
          <div className="space-y-1">
            {results.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-gray-200 py-5 transition hover:border-cyan-400"
              >
                <span className="mt-1 font-mono text-sm font-bold text-cyan-600">0{index + 1}</span>
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#008C99]" />
                <p className="text-lg font-bold leading-snug sm:text-xl">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#111827] p-6 text-white sm:p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#7BE7EF]">
              Para quem é
            </p>
            <p className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
              Profissionais, líderes, vendedores, empreendedores e pessoas que
              cansaram de falar menos do que sabem.
            </p>
            <button
              onClick={() => openWhatsApp("seção de benefícios")}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#00AFC1] px-5 py-4 text-center font-black text-white transition hover:bg-white hover:text-black sm:w-auto"
            >
              Quero destravar minha comunicação
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainingSection;
