import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const PricingSection = () => {
  const { content } = useLandingPage();
  const includes = content.pricing.includes;

  const scrollToPricingForm = () => {
    const form = document.getElementById("pricing-form");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="pricing" className="bg-cream-deep px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-3xl shadow-lift lg:grid-cols-[1fr,0.86fr]">
          <div className="relative overflow-hidden bg-ink p-7 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-grid-ink opacity-60" />
            <div className="relative z-10">
              <SectionLabel tone="light" className="mb-5">Próximo Passo para o Curso de Oratória</SectionLabel>
              <h2 className="max-w-2xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">
                <span className="text-[#7BE7EF]">Curso de Oratória - </span>
                {content.pricing.headingLine1}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {content.pricing.intro}
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3 border-t border-white/10 pt-4 text-gray-200">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#7BE7EF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-gradient-to-br from-[#D8F7FA] to-[#EAFBFC] p-7 text-ink sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d94a4]">VozUP Tatuapé</p>
            <p className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              {content.pricing.rightHeading}
            </p>
            <Button
              variant="cta"
              className="mt-9 h-auto rounded-full bg-ink py-5 text-base font-bold normal-case tracking-normal text-white shadow-lift hover:bg-white hover:text-ink"
              onClick={scrollToPricingForm}
            >
              Quero conhecer o curso
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div id="pricing-form" className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[0.72fr,1fr] lg:items-center">
          <div>
            <SectionLabel className="mb-4">Ainda está em dúvida?</SectionLabel>
            <h3 className="mt-3 text-3xl font-extrabold leading-[1.02] sm:text-4xl">
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
