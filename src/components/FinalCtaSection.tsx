import { MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const vozupLogo = "/VozUP_vetor_fundo-escuro.svg";
import { useLeadPopup } from "@/context/LeadPopupContext";

const FinalCtaSection = () => {
  const { openLeadPopup } = useLeadPopup();

  return (
    <section className="relative bg-ink px-4 py-14 text-white sm:px-6">
      <div className="absolute inset-0 bg-grid-ink opacity-60" />

      <footer className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="relative mx-auto h-24 w-40 sm:w-48">
          <img
            src={vozupLogo}
            alt="VozUP"
            width={500}
            height={500}
            loading="lazy"
            decoding="async"
            className="absolute left-1/2 top-1/2 h-72 w-auto -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
          <MapPin className="h-4 w-4 text-[#7BE7EF]" />
          Rua Azevedo Soares, 1334 - Tatuapé
        </p>

        <button
          onClick={() => openLeadPopup("footer")}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold text-white shadow-lift transition hover:bg-white hover:text-ink"
        >
          <MessageCircle className="h-5 w-5" />
          Falar com a equipe no WhatsApp
        </button>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-gray-500">
          <p>© 2026 VozUP Escola de Oratória e Liderança Emocional. Todos os direitos reservados.</p>
          <Link to="/politica-de-privacidade" className="mt-2 inline-block underline transition hover:text-gray-300">
            Política de Privacidade
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default FinalCtaSection;
