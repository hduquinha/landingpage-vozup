import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, X } from "lucide-react";
import whatsappLogo from "@/assets/wwplogo-icon.webp";
import { submitLead } from "@/lib/lead";
import { trackLeadFormSubmit } from "@/lib/analytics";
import { getOrigemForCurrentPath } from "@/lib/landingPages";
import {
  interestReasonOptions,
  interestReasonQuestion,
  presencialQuestion,
  startTimingOptions,
  startTimingQuestion,
  yesNoOptions,
} from "@/lib/leadFormQuestions";

const inputClass =
  "h-10 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-sm outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20";

const WhatsAppButton = () => {
  const origem = getOrigemForCurrentPath();
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmClose, setShowConfirmClose] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quandoComecar, setQuandoComecar] = useState(startTimingOptions[0]);
  const [goal, setGoal] = useState(interestReasonOptions[0]);
  const [disponibilidadePresencial, setDisponibilidadePresencial] = useState(yesNoOptions[0]);
  const [revealed, setRevealed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "saved" | "error">("idle");
  const revealedFieldsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (revealed) {
      revealedFieldsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [revealed]);

  const resetForm = () => {
    setName("");
    setPhone("");
    setQuandoComecar(startTimingOptions[0]);
    setGoal(interestReasonOptions[0]);
    setDisponibilidadePresencial(yesNoOptions[0]);
    setRevealed(false);
    setStatus("idle");
  };

  const handleCloseAttempt = () => {
    if (status === "saved") {
      setIsOpen(false);
      resetForm();
      return;
    }
    setShowConfirmClose(true);
  };

  const handleConfirmClose = () => {
    setShowConfirmClose(false);
    setIsOpen(false);
    resetForm();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!revealed) {
      setRevealed(true);
      return;
    }

    setStatus("sending");

    try {
      await submitLead({
        name,
        phone,
        quandoComecar,
        goal,
        disponibilidadePresencial,
        source: "botão flutuante",
        origem,
      });
      trackLeadFormSubmit("botão flutuante", goal);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
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
            <div className="rounded-3xl bg-white shadow-lift ring-1 ring-ink/5 overflow-hidden">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-gray-100 px-6 pt-4 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0d94a4]">
                      <span className="h-px w-6 bg-[#0d94a4]" />
                      Aula experimental
                    </p>
                    {status !== "saved" && (
                      <span className="flex-shrink-0 rounded-full bg-[#EAFBFC] px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-[#0d94a4]">
                        Passo {revealed ? "2" : "1"} de 2
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-extrabold leading-tight text-ink">
                    Dê o primeiro passo
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {revealed && status !== "saved"
                      ? "Só mais um passo: responda as perguntas abaixo para confirmar sua inscrição."
                      : "Preencha em menos de 30 segundos e nossa equipe entra em contato."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCloseAttempt}
                  className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-ink"
                  aria-label="Fechar"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {status === "saved" ? (
                <div className="px-6 py-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAFBFC]">
                    <CheckCircle2 className="h-7 w-7 text-[#008C99]" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-ink">Cadastro recebido!</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Nossa equipe vai entrar em contato em breve. Fique de olho no seu WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setIsOpen(false); resetForm(); }}
                    className="mt-6 w-full rounded-full bg-[#00AFC1] py-3 text-sm font-bold text-white transition hover:bg-ink"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 px-6 py-4">
                  <label className="block">
                    <span className="mb-1 block text-sm font-bold text-ink">Seu nome</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Digite seu nome"
                      className={inputClass}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block text-sm font-bold text-ink">WhatsApp</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      inputMode="tel"
                      placeholder="(11) 99999-9999"
                      className={inputClass}
                    />
                  </label>

                  {revealed && (
                    <div
                      ref={revealedFieldsRef}
                      className="animate-in fade-in slide-in-from-top-2 space-y-3 duration-300"
                    >
                      <label className="block">
                        <span className="mb-1 block text-sm font-bold text-ink">{startTimingQuestion}</span>
                        <select
                          value={quandoComecar}
                          onChange={(e) => setQuandoComecar(e.target.value)}
                          className={inputClass}
                        >
                          {startTimingOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                          ))}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-1 block text-sm font-bold text-ink">{interestReasonQuestion}</span>
                        <select
                          value={goal}
                          onChange={(e) => setGoal(e.target.value)}
                          className={inputClass}
                        >
                          {interestReasonOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                          ))}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-1 block text-sm font-bold text-ink">{presencialQuestion}</span>
                        <select
                          value={disponibilidadePresencial}
                          onChange={(e) => setDisponibilidadePresencial(e.target.value)}
                          className={inputClass}
                        >
                          {yesNoOptions.map((item) => (
                            <option key={item} value={item}>{item}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">
                      Não conseguimos salvar agora. Tente novamente ou fale direto pelo WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-4 py-2.5 text-sm font-bold text-white shadow-lift transition hover:bg-ink disabled:cursor-wait disabled:opacity-70"
                  >
                    <MessageCircle className="h-5 w-5 flex-shrink-0" />
                    <span>{status === "sending" ? "Enviando..." : "Quero minha aula experimental"}</span>
                    <ArrowRight className="h-5 w-5 flex-shrink-0" />
                  </button>

                  <div className="flex gap-2 pb-1 text-xs font-semibold leading-relaxed text-gray-500">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#008C99]" />
                    Atendimento humano. Seus dados serão usados somente para contato da VozUP.
                  </div>
                </form>
              )}
            </div>
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
              Você estava a um passo de destravar sua voz. Quer mesmo fechar antes de garantir sua aula experimental?
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
