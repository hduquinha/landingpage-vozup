import { useState } from "react";
import { X } from "lucide-react";
import whatsappLogo from "@/assets/wwplogo-icon.webp";
import LeadForm from "@/components/LeadForm";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmClose, setShowConfirmClose] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  const handleCloseAttempt = () => {
    if (submitted) {
      closeModal();
      return;
    }
    setShowConfirmClose(true);
  };

  const handleConfirmClose = () => {
    setShowConfirmClose(false);
    closeModal();
  };

  return (
    <>
      {/* Botão flutuante */}
      <div className="group fixed bottom-6 right-6 z-50">
        <div className="pointer-events-none absolute bottom-full right-0 mb-2 w-max origin-bottom-right rounded-md bg-black px-4 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          Fale com a VozUP
          <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-black" />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-[#128C7E] animate-pulse-whatsapp"
          aria-label="Fale com a VozUP pelo WhatsApp"
        >
          <img
            src={whatsappLogo}
            alt="WhatsApp"
            width={192}
            height={192}
            decoding="async"
            className="h-full w-full rounded-full object-contain"
          />
        </button>
      </div>

      {/* Modal do formulário */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={handleCloseAttempt}
          />

          <div className="relative w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
            <button
              type="button"
              onClick={handleCloseAttempt}
              aria-label="Fechar"
              className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-lift transition hover:bg-ink hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <LeadForm source="botão flutuante" compact onSaved={() => setSubmitted(true)} />
          </div>
        </div>
      )}

      {/* Pop-up de confirmação de saída */}
      {showConfirmClose && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />

          <div className="relative w-full max-w-sm animate-in fade-in zoom-in-95 duration-200 rounded-2xl bg-white p-7 shadow-lift ring-1 ring-ink/5 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAFBFC]">
              <span className="text-2xl">🎤</span>
            </div>
            <h4 className="font-display text-xl font-extrabold text-ink">
              Falta tão pouco!
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Você estava a um passo de destravar sua voz. Quer mesmo fechar antes de garantir sua consultoria?
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setShowConfirmClose(false)}
                className="w-full rounded-full bg-[#00AFC1] py-3 text-sm font-bold text-white transition hover:bg-[#008C99]"
              >
                Continuar meu cadastro
              </button>
              <button
                type="button"
                onClick={handleConfirmClose}
                className="w-full rounded-full border border-gray-200 py-3 text-sm font-semibold text-gray-500 transition hover:bg-gray-50"
              >
                Sair mesmo assim
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
