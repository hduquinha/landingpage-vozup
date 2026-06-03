import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";
import vozupLogo from "@/assets/vozup-logo-dark.png";
import speakerWoman from "@/assets/speaker-woman-commercial.png";
import { openWhatsApp, scrollToLead } from "@/lib/lead";
import LeadForm from "@/components/LeadForm";

const HeroSection = () => {
  const highlights = [
    { icon: Timer, text: "Evolução mais rápida" },
    { icon: ShieldCheck, text: "Método prático" },
    { icon: Users, text: "Aulas presenciais" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-6 text-black sm:px-6 lg:pb-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#00AFC1]" />
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[34%] bg-[#D8F7FA] lg:block" />
      <div className="pointer-events-none absolute bottom-0 right-[28%] hidden h-80 w-80 rounded-full bg-[#EAFBFC] lg:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
          <img src={vozupLogo} alt="VozUP" className="h-11 w-auto sm:h-14" />
          <button
            onClick={() => openWhatsApp("botão do topo")}
            className="hidden items-center gap-2 border-b border-black pb-1 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:text-cyan-700 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </button>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr),420px] lg:items-center">
          <div className="relative">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 border-l-4 border-cyan-400 bg-cyan-50 px-3 py-3 text-[0.7rem] font-black uppercase tracking-[0.16em] text-cyan-900 sm:px-4 sm:text-xs">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="break-words">Rua Azevedo Soares, 1334 - Tatuapé</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[0.95] text-black sm:text-5xl lg:text-6xl xl:text-7xl">
              Destrave sua fala em público.
              <span className="block text-[#008C99]">Mais rápido. Mais prático.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
              Escola presencial de oratória e liderança emocional no Tatuapé.
              Nosso método foi desenhado para ser mais direto, rápido e eficaz
              que cursos tradicionais e modelos genéricos da concorrência.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex min-h-14 items-center gap-2 border-t border-gray-200 pt-3 text-sm font-bold text-gray-800"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-[#008C99]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="cta"
                size="lg"
                className="h-auto bg-[#00AFC1] px-6 py-4 text-base text-white shadow-none hover:bg-[#111827] hover:text-white"
                onClick={() => {
                  const form = document.getElementById("hero-form");
                  if (form) form.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                Preencher formulário
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-auto border-black/30 bg-transparent px-6 py-4 text-base text-black hover:bg-[#111827] hover:text-white"
                onClick={scrollToLead}
              >
                Ver método
              </Button>
            </div>

            <div className="mt-8 flex items-end justify-center bg-[#EAFBFC] pt-4 md:hidden">
              <img
                src={speakerWoman}
                alt="Profissional treinando oratória com microfone"
                className="max-h-[360px] w-auto object-contain"
              />
            </div>

            <img
              src={speakerWoman}
              alt="Profissional treinando oratória com microfone"
              className="pointer-events-none absolute bottom-[-84px] right-[-120px] hidden max-h-[560px] w-auto object-contain drop-shadow-2xl xl:block"
            />
          </div>

          <div id="hero-form" className="relative">
            <div className="absolute -right-3 -top-3 hidden h-full w-full bg-[#111827] lg:block" />
            <div className="relative">
              <LeadForm source="formulário do topo da landing" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToLead}
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center text-center text-gray-600 transition hover:text-black lg:flex"
        aria-label="Descer para conteúdo"
      >
        <span className="mb-1 text-sm font-semibold">Conheça a VozUP</span>
        <ChevronDown className="h-6 w-6 animate-bounce text-cyan-600" />
      </button>
    </section>
  );
};

export default HeroSection;
