import { AlertCircle, BrainCircuit, MessageSquareWarning, Users } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: MessageSquareWarning,
      title: "Você sabe, mas não consegue explicar",
      text: "A ideia está na cabeça, mas na hora de falar sai confusa, longa ou insegura.",
    },
    {
      icon: AlertCircle,
      title: "A ansiedade toma o controle",
      text: "Voz trêmula, branco, fala acelerada e vontade de evitar exposição.",
    },
    {
      icon: Users,
      title: "Você perde espaço em reuniões",
      text: "Outras pessoas se posicionam melhor mesmo dominando menos o assunto.",
    },
    {
      icon: BrainCircuit,
      title: "Curso genérico não resolve",
      text: "Sem treino individual, o aluno entende a teoria mas continua travado.",
    },
  ];

  return (
    <section className="bg-[#F7FCFD] px-4 py-16 text-black sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#008C99]">
              O problema não é falta de capacidade
            </p>
            <h2 className="text-3xl font-black leading-none sm:text-5xl">
              É falta de treino certo, no ambiente certo.
            </h2>
          </div>
          <p className="border-l border-gray-300 pl-5 text-lg leading-relaxed text-gray-700">
            A VozUP trabalha a fala como habilidade prática: você aprende,
            aplica, recebe feedback e repete até ganhar segurança real.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div key={item.title} className="bg-white p-5 shadow-sm ring-1 ring-black/5">
              <item.icon className="mb-4 h-8 w-8 text-[#008C99]" />
              <h3 className="text-xl font-black leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
