import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/lead";
import LeadForm from "@/components/LeadForm";

const PricingSection = () => {
  const includes = [
    "Aula experimental para conhecer a metodologia",
    "Diagnóstico inicial de comunicação",
    "Orientação sobre turma, agenda e formato ideal",
    "Atendimento presencial no Tatuapé",
  ];

  return (
    <section id="pricing" className="bg-white px-4 py-16 text-black sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden bg-[#111827] text-white lg:grid-cols-[1fr,0.86fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              Próximo passo
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-none sm:text-5xl">
              Agende uma aula experimental da VozUP.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Converse com a equipe, entenda o melhor caminho para o seu
              objetivo e veja a escola por dentro antes de decidir.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 border-t border-white/10 pt-4 text-gray-200">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center bg-[#D8F7FA] p-6 text-black sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.2em]">VozUP Tatuapé</p>
            <p className="mt-4 text-3xl font-black leading-none sm:text-4xl">
              Sua comunicação não melhora parada.
            </p>
            <Button
              variant="cta"
              className="mt-8 h-auto bg-[#111827] py-5 text-base text-white shadow-none hover:bg-white hover:text-black"
              onClick={() => openWhatsApp("seção de agendamento")}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr,1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
              Ainda está em dúvida?
            </p>
            <h3 className="mt-3 text-3xl font-black leading-none sm:text-4xl">
              Peça para a equipe te chamar e indicar a melhor turma.
            </h3>
          </div>
          <LeadForm source="formulário inferior da landing" compact />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
