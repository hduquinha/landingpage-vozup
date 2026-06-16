import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/editorial";

const TestimonialsSection = () => {
  const moments = [
    "apresentar projetos",
    "liderar reuniões",
    "gravar vídeos",
    "vender ideias",
    "participar de entrevistas",
    "conduzir conversas difíceis",
  ];

  return (
    <section className="bg-cream px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-ink/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="mb-5">Aplicações reais</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.02] sm:text-5xl">
              Oratória para os momentos que movem carreira e negócio.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-slate-600">
            O treino não fica preso ao palco. Ele é aplicado nas conversas que
            você realmente precisa enfrentar.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((moment, index) => (
            <div
              key={moment}
              className="group flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-ink/5 bg-white px-6 py-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <span className="font-display text-sm font-bold text-[#0d94a4]/30">0{index + 1}</span>
                <p className="text-xl font-extrabold leading-tight">{moment}</p>
              </div>
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#EAFBFC] text-[#0d94a4] transition group-hover:bg-[#00AFC1] group-hover:text-white">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
