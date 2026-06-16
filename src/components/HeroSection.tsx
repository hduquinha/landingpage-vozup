import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  MessageCircle,
  ShieldCheck,
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
    <section className="relative overflow-hidden bg-cream px-4 pb-16 pt-6 text-ink sm:px-6 lg:pb-24">
      {/* Texturas e decoração estilo apostila */}
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="deco-rings pointer-events-none absolute -right-40 -top-40 hidden lg:block" />
      <div className="pointer-events-none absolute right-[-6%] top-10 hidden h-72 w-72 rounded-full bg-[#D8F7FA] blur-2xl lg:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between gap-4 sm:mb-14">
          <img src={vozupLogo} alt="VozUP" className="h-11 w-auto sm:h-14" />
          <button
            onClick={() => openWhatsApp("botão do topo")}
            className="hidden items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-sm font-bold text-ink shadow-sm backdrop-blur transition hover:bg-ink hover:text-white sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </button>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),420px] lg:items-center">
          <div className="relative">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#0d94a4]/20 bg-white px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#0d94a4] shadow-sm sm:text-xs">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="break-words">Rua Azevedo Soares, 1334 · Tatuapé</span>
            </div>

            <h1 className="max-w-3xl text-[2.6rem] font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Destrave sua fala
              <br className="hidden sm:block" /> em público.
              <span className="mt-1 block text-[#0d94a4]">
                Mais rápido. Mais prático.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Escola presencial de oratória e liderança emocional no Tatuapé.
              Nosso método foi desenhado para ser mais direto, rápido e eficaz
              que cursos tradicionais e modelos genéricos da concorrência.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex min-h-16 items-center gap-3 rounded-2xl border border-ink/5 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-card"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-[#0d94a4]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="cta"
                size="lg"
                className="h-auto rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold normal-case tracking-normal text-white shadow-lift hover:bg-ink hover:text-white"
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
                className="h-auto rounded-full border-ink/20 bg-transparent px-7 py-4 text-base font-bold text-ink hover:bg-ink hover:text-white"
                onClick={scrollToLead}
              >
                Ver método
              </Button>
            </div>

            <div className="mt-10 flex items-end justify-center rounded-3xl bg-[#EAFBFC] pt-4 md:hidden">
              <img
                src={speakerWoman}
                alt="Profissional treinando oratória com microfone"
                className="max-h-[360px] w-auto object-contain"
              />
            </div>

            <img
              src={speakerWoman}
              alt="Profissional treinando oratória com microfone"
              className="pointer-events-none absolute bottom-[-96px] right-[-130px] hidden max-h-[560px] w-auto object-contain drop-shadow-2xl xl:block"
            />
          </div>

          <div id="hero-form" className="relative">
            <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl bg-[#D8F7FA] lg:block" />
            <div className="relative">
              <LeadForm source="formulário do topo da landing" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToLead}
        className="relative z-10 mx-auto mt-12 hidden flex-col items-center text-center text-slate-500 transition hover:text-ink lg:flex"
        aria-label="Descer para conteúdo"
      >
        <span className="mb-1 text-sm font-semibold">Conheça a VozUP</span>
        <ChevronDown className="h-6 w-6 animate-bounce text-[#0d94a4]" />
      </button>
    </section>
  );
};

export default HeroSection;
