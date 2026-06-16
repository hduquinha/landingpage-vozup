import { AlertCircle, BrainCircuit, MessageSquareWarning, Users } from "lucide-react";
import { SectionLabel } from "@/components/editorial";

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
    <section className="relative overflow-hidden bg-cream-deep px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <SectionLabel className="mb-5">O problema não é falta de capacidade</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-[1.02] sm:text-5xl">
              É falta de treino certo,
              <span className="block text-[#0d94a4]">no ambiente certo.</span>
            </h2>
          </div>
          <p className="rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-6 text-lg leading-relaxed text-slate-600 shadow-card">
            A VozUP trabalha a fala como habilidade prática: você aprende,
            aplica, recebe feedback e repete até ganhar segurança real.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4] transition group-hover:bg-[#00AFC1] group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
