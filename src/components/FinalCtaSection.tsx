import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import vozupLogo from "@/assets/vozup-logo-light.png";
import speakerWoman from "@/assets/speaker-woman-commercial.png";
import { openWhatsApp } from "@/lib/lead";

const FinalCtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-24 text-white sm:px-6">
      <div className="absolute inset-0 bg-grid-ink opacity-60" />
      <div className="deco-rings pointer-events-none absolute -right-32 top-1/2 hidden -translate-y-1/2 lg:block" />
      <div className="absolute bottom-0 right-[8%] hidden h-80 w-80 rounded-full bg-[#00AFC1]/20 blur-3xl lg:block" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr,0.62fr] lg:items-end">
        <div>
          <img src={vozupLogo} alt="VozUP" className="mb-10 h-auto w-full max-w-[260px]" />
          <h2 className="text-4xl font-extrabold leading-[1.0] sm:text-5xl lg:text-6xl">
            Sua voz pode abrir portas.
            <span className="block text-[#7BE7EF]">Treine ela do jeito certo.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Agende sua aula experimental na VozUP Tatuapé e descubra como evoluir
            sua comunicação com método, prática e acompanhamento.
          </p>

          <button
            onClick={() => openWhatsApp("CTA final")}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#00AFC1] px-9 py-5 text-lg font-bold text-white shadow-lift transition hover:bg-white hover:text-ink"
          >
            <MessageCircle className="h-6 w-6" />
            Quero falar melhor
            <ArrowRight className="h-6 w-6" />
          </button>

          <div className="mt-8 flex items-center gap-3 text-gray-400">
            <ShieldCheck className="h-5 w-5 text-[#7BE7EF]" />
            <span>Rua Azevedo Soares, 1334 - Tatuapé - São Paulo</span>
          </div>
        </div>

        <img
          src={speakerWoman}
          alt="Profissional falando com segurança"
          className="hidden max-h-[520px] w-auto object-contain drop-shadow-2xl lg:block"
        />

        <div className="border-t border-white/10 pt-6 text-sm text-gray-500 lg:col-span-2">
          © 2026 VozUP Escola de Oratória e Liderança Emocional. Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
