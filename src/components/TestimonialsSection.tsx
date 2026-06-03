import { ArrowRight } from "lucide-react";

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
    <section className="bg-white px-4 py-16 text-black sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-gray-200 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#008C99]">
              Aplicações reais
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-none sm:text-5xl">
              Oratória para os momentos que movem carreira e negócio.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-gray-700">
            O treino não fica preso ao palco. Ele é aplicado nas conversas que
            você realmente precisa enfrentar.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((moment) => (
            <div key={moment} className="flex min-h-20 items-center justify-between gap-4 bg-[#F7FCFD] px-5 py-4 ring-1 ring-black/5">
              <p className="text-xl font-black leading-tight">{moment}</p>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-[#008C99]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
