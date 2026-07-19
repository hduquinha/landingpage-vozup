import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { isValidFullName, isValidPhone, submitLead } from "@/lib/lead";
import { trackLeadFormSubmit } from "@/lib/analytics";
import {
  getFormVariantForCurrentPath,
  getLandingGroupForCurrentPath,
  getMetaCampaignNameForCurrentPath,
  getOrigemForCurrentPath,
} from "@/lib/landingPages";
import { getTrafficSource } from "@/lib/trafficSource";
import {
  interestReasonOptions,
  interestReasonQuestion,
  presencialQuestion,
  professionQuestion,
  quickResultsQuestion,
  startTimingOptions,
  startTimingQuestion,
  yesNoOptions,
} from "@/lib/leadFormQuestions";

type LeadFormProps = {
  source?: string;
  compact?: boolean;
  onSaved?: () => void;
};

const LeadForm = ({ source = "formulário principal", compact = false, onSaved }: LeadFormProps) => {
  const origem = getOrigemForCurrentPath();
  const landingGroup = getLandingGroupForCurrentPath();
  const metaCampaignName = getMetaCampaignNameForCurrentPath();
  const traffic = getTrafficSource();
  const variant = getFormVariantForCurrentPath();
  const totalSteps = variant === "full" ? 3 : 2;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profissao, setProfissao] = useState("");
  const [quandoComecar, setQuandoComecar] = useState(startTimingOptions[0]);
  const [goal, setGoal] = useState(interestReasonOptions[0]);
  const [disponibilidadePresencial, setDisponibilidadePresencial] = useState(yesNoOptions[0]);
  const [quickResults, setQuickResults] = useState(yesNoOptions[0]);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "saved" | "error">("idle");
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const stepFieldsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step > 0) {
      stepFieldsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [step]);

  /**
   * Avança para a próxima etapa sem passar pelo submit nativo do <form>. O
   * GTM tem um gatilho de "envio de formulário" ligado ao evento submit do
   * HTML — se o botão de etapas intermediárias fosse type="submit", cada
   * "Continuar" (ex.: só nome+telefone) já disparava a conversão de Lead no
   * Meta/Google Ads antes do cadastro existir de fato no CRM, inflando
   * "Meta marcou X" sem o "CRM confirmou" correspondente.
   */
  const handleAdvance = () => {
    if (step === 0) {
      const validName = isValidFullName(name);
      const validPhone = isValidPhone(phone);
      setNameError(validName ? null : "Digite seu nome completo (nome e sobrenome).");
      setPhoneError(validPhone ? null : "Digite um WhatsApp válido com DDD.");
      if (!validName || !validPhone) return;
      setStep(1);
      return;
    }

    setStep((current) => current + 1);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step < totalSteps - 1) {
      handleAdvance();
      return;
    }

    setStatus("sending");

    try {
      await submitLead({
        name,
        phone,
        profissao: variant === "reduced3" ? undefined : profissao,
        quandoComecar: variant === "full" ? quandoComecar : undefined,
        goal: variant === "full" ? goal : undefined,
        disponibilidadePresencial: variant === "full" ? disponibilidadePresencial : undefined,
        quickResults: variant === "full" ? undefined : quickResults,
        source,
        origem,
        landingGroup,
        metaCampaignName,
        utmSource: traffic.utmSource,
        utmMedium: traffic.utmMedium,
        utmCampaign: traffic.utmCampaign,
        utmContent: traffic.utmContent,
        utmTerm: traffic.utmTerm,
        gclid: traffic.gclid,
        fbclid: traffic.fbclid,
      });
      trackLeadFormSubmit(source, variant === "full" ? goal : quickResults);
      setStatus("saved");
      onSaved?.();
      setName("");
      setPhone("");
      setProfissao("");
      setQuandoComecar(startTimingOptions[0]);
      setGoal(interestReasonOptions[0]);
      setDisponibilidadePresencial(yesNoOptions[0]);
      setQuickResults(yesNoOptions[0]);
      setStep(0);
      setNameError(null);
      setPhoneError(null);
    } catch {
      setStatus("error");
    }
  };

  const handleNewRegistration = () => setStatus("idle");

  if (status === "saved") {
    return (
      <div className="rounded-3xl bg-white p-5 text-center text-ink shadow-lift ring-1 ring-ink/5 sm:p-7">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAFBFC]">
          <CheckCircle2 className="h-8 w-8 text-[#008C99]" />
        </div>
        <h3 className={`${compact ? "text-xl" : "text-2xl"} font-display font-extrabold leading-tight`}>
          Cadastro recebido!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Nossa equipe vai entrar em contato em breve para agendar sua consultoria.
        </p>
        <button
          type="button"
          onClick={handleNewRegistration}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-ink transition hover:bg-gray-50"
        >
          Fazer novo cadastro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-5 text-ink shadow-lift ring-1 ring-ink/5 sm:p-7">
      <div className="mb-5 border-b border-gray-100 pb-5">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0d94a4]">
          <span className="h-px w-6 bg-[#0d94a4]" />
          Agendar Consultoria
        </p>
        <h3 className={`${compact ? "text-2xl" : "text-3xl"} mt-3 font-display font-extrabold leading-tight`}>
          Receba o contato da VozUP
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {step === 0
            ? "Preencha em menos de 30 segundos para consultar turmas e horários no Tatuapé."
            : "Só mais um pouco: responda as perguntas abaixo para confirmar sua inscrição."}
        </p>
      </div>

      <div className="space-y-4">
        {step === 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block">
              <span className="mb-2 block text-sm font-bold">Seu nome</span>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (nameError) setNameError(null);
                }}
                required
                placeholder="Digite seu nome completo"
                className={`h-12 w-full rounded-xl border ${nameError ? "border-red-400" : "border-gray-200"} bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20`}
              />
              {nameError && <span className="mt-1.5 block text-xs font-semibold text-red-600">{nameError}</span>}
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold">WhatsApp</span>
              <input
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  if (phoneError) setPhoneError(null);
                }}
                required
                inputMode="tel"
                placeholder="(11) 99999-9999"
                className={`h-12 w-full rounded-xl border ${phoneError ? "border-red-400" : "border-gray-200"} bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20`}
              />
              {phoneError && <span className="mt-1.5 block text-xs font-semibold text-red-600">{phoneError}</span>}
            </label>
          </div>
        )}

        {step === 1 && (
          <div ref={stepFieldsRef} className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {variant !== "reduced3" && (
              <label className="block">
                <span className="mb-2 block text-sm font-bold">{professionQuestion}</span>
                <input
                  value={profissao}
                  onChange={(event) => setProfissao(event.target.value)}
                  required
                  placeholder="Digite sua profissão"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20"
                />
              </label>
            )}

            {variant === "full" ? (
              <label className="block">
                <span className="mb-2 block text-sm font-bold">{startTimingQuestion}</span>
                <select
                  value={quandoComecar}
                  onChange={(event) => setQuandoComecar(event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20"
                >
                  {startTimingOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <label className="block">
                <span className="mb-2 block text-sm font-bold">{quickResultsQuestion}</span>
                <select
                  value={quickResults}
                  onChange={(event) => setQuickResults(event.target.value)}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20"
                >
                  {yesNoOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
        )}

        {step === 2 && variant === "full" && (
          <div ref={stepFieldsRef} className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <label className="block">
              <span className="mb-2 block text-sm font-bold">{interestReasonQuestion}</span>
              <select
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="h-12 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20"
              >
                {interestReasonOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold">{presencialQuestion}</span>
              <select
                value={disponibilidadePresencial}
                onChange={(event) => setDisponibilidadePresencial(event.target.value)}
                className="h-12 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20"
              >
                {yesNoOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
      </div>

      <button
        type={step < totalSteps - 1 ? "button" : "submit"}
        onClick={step < totalSteps - 1 ? handleAdvance : undefined}
        disabled={status === "sending"}
        className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-4 py-4 text-center text-sm font-bold leading-tight text-white shadow-lift transition hover:bg-ink hover:text-white disabled:cursor-wait disabled:opacity-70 sm:gap-3 sm:text-base"
      >
        {step === totalSteps - 1 && <MessageCircle className="h-5 w-5 flex-shrink-0" />}
        <span>
          {status === "sending"
            ? "Enviando..."
            : step < totalSteps - 1
              ? "Continuar"
              : "Quero agendar minha consultoria"}
        </span>
        <ArrowRight className="h-5 w-5 flex-shrink-0" />
      </button>

      {status === "error" && (
        <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">
          Não conseguimos salvar agora. Tente novamente em instantes.
        </div>
      )}



      <div className="mt-4 flex gap-2 text-xs font-semibold leading-relaxed text-gray-500">
        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#008C99]" />
        Atendimento humano. Seus dados serão usados somente para contato da VozUP.
      </div>
    </form>
  );
};

export default LeadForm;
