import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";
import { useLeadPopup } from "@/context/LeadPopupContext";

const PricingSection = () => {
  const { content } = useLandingPage();
  const { openLeadPopup } = useLeadPopup();
  const includes = content.pricing.includes;

  return (
    <section id="pricing" className="bg-cream-deep px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-3xl shadow-lift lg:grid-cols-[1fr,0.86fr]">
          <div className="relative overflow-hidden bg-ink p-5 text-white sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-grid-ink opacity-60" />
            <div className="relative z-10">
              <SectionLabel tone="light" className="mb-3">Próximo Passo para o Curso de Oratória</SectionLabel>
              <h2 className="max-w-2xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">
                <span className="text-[#7BE7EF]">Curso de Oratória - </span>
                {content.pricing.headingLine1}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
                {content.pricing.intro}
              </p>

              <ul className="mt-5 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3 border-t border-white/10 pt-3 text-sm text-gray-200 sm:pt-4 sm:text-base">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7BE7EF] sm:h-5 sm:w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-gradient-to-br from-[#D8F7FA] to-[#EAFBFC] p-5 text-ink sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d94a4]">VozUP Tatuapé</p>
            <p className="mt-2 text-2xl font-extrabold leading-tight sm:mt-4 sm:text-4xl">
              {content.pricing.rightHeading}
            </p>
            <Button
              variant="cta"
              className="mt-5 h-auto rounded-full bg-ink py-4 text-base font-bold normal-case tracking-normal text-white shadow-lift hover:bg-white hover:text-ink sm:mt-9 sm:py-5"
              onClick={() => openLeadPopup("cta topo da pricing")}
            >
              Quero conhecer o curso
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-ink/5 bg-white p-5 text-center shadow-card sm:gap-6 sm:p-8 lg:mt-10 lg:p-12">
          <div>
            <SectionLabel className="mb-3 justify-center">Ainda está em dúvida?</SectionLabel>
            <h3 className="mt-2 max-w-xl text-2xl font-extrabold leading-[1.05] sm:mt-3 sm:text-4xl">
              Toque no botão abaixo e nos chame no WhatsApp para te indicarmos a melhor turma.
            </h3>
          </div>
          <Button
            variant="cta"
            size="lg"
            className="h-auto rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold normal-case tracking-normal text-white shadow-lift hover:bg-ink hover:text-white"
            onClick={() => openLeadPopup("formulário inferior da landing")}
          >
            <MessageCircle className="h-5 w-5" />
            Falar com a equipe no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
