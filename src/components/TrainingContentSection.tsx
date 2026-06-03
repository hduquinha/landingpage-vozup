import { BadgeCheck, BriefcaseBusiness, MessageCircle, Timer, Trophy, Zap } from "lucide-react";

const TrainingContentSection = () => {
  const modules = [
    "Abrir uma fala com impacto",
    "Apresentar ideias com começo, meio e fim",
    "Usar pausas, volume e entonação",
    "Improvisar sem perder a linha",
    "Responder perguntas difíceis",
    "Transmitir autoridade sem parecer artificial",
  ];

  const advantages = [
    {
      icon: Timer,
      title: "Mais rápido",
      text: "Você pratica desde o primeiro encontro, sem esperar semanas de teoria.",
    },
    {
      icon: Zap,
      title: "Mais eficaz",
      text: "Feedback direto no seu jeito de falar, com ajustes aplicados na hora.",
    },
    {
      icon: BadgeCheck,
      title: "Mais objetivo",
      text: "Treinos conectados ao seu uso real: carreira, vendas, liderança e vídeos.",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 text-black sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-gray-200 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#008C99]">
              Conteúdo e vantagem
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-none sm:text-5xl">
              O treino que faz a fala evoluir mais rápido.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
            A diferença da VozUP está em reduzir o tempo entre aprender,
            praticar, corrigir e aplicar na vida real.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="grid gap-x-8 md:grid-cols-2">
            {modules.map((item) => (
              <div key={item} className="flex gap-4 border-b border-gray-200 py-5">
                <BadgeCheck className="mt-1 h-6 w-6 flex-shrink-0 text-[#008C99]" />
                <p className="text-lg font-bold leading-snug sm:text-xl">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#111827] p-6 text-white sm:p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#7BE7EF]">
              VozUP vs. cursos tradicionais
            </p>
            <div className="mt-6 space-y-5">
              {advantages.map((item) => (
                <div key={item.title} className="flex gap-4 border-t border-white/10 pt-5">
                  <item.icon className="mt-1 h-7 w-7 flex-shrink-0 text-[#7BE7EF]" />
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6">
              {[
                { icon: BriefcaseBusiness, text: "Mais segurança em reuniões e entrevistas" },
                { icon: MessageCircle, text: "Comunicação mais clara em conversas difíceis" },
                { icon: Trophy, text: "Presença para liderar e defender ideias" },
              ].map((item) => (
                <div key={item.text} className="flex gap-3">
                  <item.icon className="mt-1 h-5 w-5 flex-shrink-0 text-[#7BE7EF]" />
                  <p className="font-bold leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContentSection;
