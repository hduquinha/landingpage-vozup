import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  ClipboardList,
  Heart,
  MapPin,
  Repeat,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
const vozupLogo = "/VozUP_vetor_fundo-claro.svg";
import { scrollToSection } from "@/lib/lead";
import { useLandingPage } from "@/context/LandingPageContext";
import { useLeadPopup } from "@/context/LeadPopupContext";

const highlightIcons = [Timer, ShieldCheck, Users, Heart, Repeat];

const HeroSection = () => {
  const { content } = useLandingPage();
  const { openLeadPopup } = useLeadPopup();
  const highlights = content.hero.highlights.map((text, index) => ({
    icon: highlightIcons[index],
    text,
  }));

  return (
    <section className="relative overflow-hidden bg-cream px-4 pb-14 pt-6 text-ink sm:px-6 lg:pb-20">
      {/* Texturas e decoração estilo apostila */}
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="deco-rings pointer-events-none absolute -right-40 -top-40 hidden lg:block" />
      <div className="pointer-events-none absolute right-[-6%] top-10 hidden h-72 w-72 rounded-full bg-[#D8F7FA] blur-2xl lg:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between gap-4 sm:mb-14">
          <img
            src={vozupLogo}
            alt="VozUP Escola de Oratória e Liderança Emocional"
            width={697}
            height={281}
            decoding="async"
            className="h-[69px] w-auto sm:h-[88px]"
          />
          <button
            onClick={() => openLeadPopup("botão do cabeçalho")}
            className="hidden items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-sm font-bold text-ink shadow-sm backdrop-blur transition hover:bg-ink hover:text-white sm:flex"
          >
            <ClipboardList className="h-4 w-4" />
            Quero me inscrever
          </button>
        </header>

        <div className="relative max-w-3xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#0d94a4]/20 bg-white px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#0d94a4] shadow-sm sm:text-xs">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="break-words">Rua Azevedo Soares, 1334 · Tatuapé</span>
          </div>

          <h1 className="max-w-3xl text-[2.6rem] font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {content.hero.titleLine1}
            <span className="mt-1 block text-[#0d94a4]">
              {content.hero.titleLine2}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {content.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="cta"
              size="lg"
              className="h-auto rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold normal-case tracking-normal text-white shadow-lift hover:bg-ink hover:text-white"
              onClick={() => openLeadPopup("formulário do topo da landing")}
            >
              {content.hero.ctaLabel}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-auto rounded-full border-ink/20 bg-transparent px-7 py-4 text-base font-bold text-ink hover:bg-ink hover:text-white"
              onClick={() => scrollToSection("metodo")}
            >
              Ver método
            </Button>
          </div>

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
        </div>
      </div>

      <button
        onClick={() => scrollToSection("metodo")}
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
