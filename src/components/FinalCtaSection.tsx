import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import vozupLogo from "@/assets/vozup-logo-dark.png";
import speakerWoman from "@/assets/speaker-woman-commercial.png";
import { openWhatsApp } from "@/lib/lead";

const FinalCtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7FCFD] px-4 py-20 text-black sm:px-6">
      <div className="absolute bottom-0 right-0 hidden h-full w-[38%] bg-[#D8F7FA] lg:block" />
      <div className="container relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr,0.62fr] lg:items-end">
        <div>
          <img src={vozupLogo} alt="VozUP" className="mb-10 h-auto w-full max-w-sm" />
          <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-6xl">
            Sua voz pode abrir portas. Treine ela do jeito certo.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl">
            Agende sua aula experimental na VozUP Tatuapé e descubra como evoluir
            sua comunicação com método, prática e acompanhamento.
          </p>

          <button
            onClick={() => openWhatsApp("CTA final")}
            className="mt-10 inline-flex items-center justify-center gap-3 bg-[#111827] px-8 py-5 text-lg font-black uppercase text-white transition hover:bg-[#00AFC1] hover:text-white"
          >
            <MessageCircle className="h-6 w-6" />
            Quero falar melhor
            <ArrowRight className="h-6 w-6" />
          </button>

          <div className="mt-8 flex items-center gap-3 text-gray-600">
            <ShieldCheck className="h-5 w-5 text-cyan-700" />
            <span>Rua Azevedo Soares, 1334 - Tatuapé - São Paulo</span>
          </div>
        </div>

        <img
          src={speakerWoman}
          alt="Profissional falando com segurança"
          className="hidden max-h-[520px] w-auto object-contain drop-shadow-2xl lg:block"
        />

        <div className="border-t border-gray-200 pt-6 text-sm text-gray-500 lg:col-span-2">
          © 2026 VozUP Escola de Oratória e Liderança Emocional. Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
