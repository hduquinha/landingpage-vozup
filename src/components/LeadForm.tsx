import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { buildLeadWhatsAppLink, submitLead } from "@/lib/lead";
import { trackLeadFormSubmit, trackWhatsAppClick } from "@/lib/analytics";
import { useLandingPage } from "@/context/LandingPageContext";
import {
  interestReasonOptions,
  interestReasonQuestion,
  presencialQuestion,
  startTimingOptions,
  startTimingQuestion,
  yesNoOptions,
} from "@/lib/leadFormQuestions";

type LeadFormProps = {
  source?: string;
  compact?: boolean;
};

const LeadForm = ({ source = "formulário principal", compact = false }: LeadFormProps) => {
  const { origem } = useLandingPage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quandoComecar, setQuandoComecar] = useState(startTimingOptions[0]);
  const [goal, setGoal] = useState(interestReasonOptions[0]);
  const [disponibilidadePresencial, setDisponibilidadePresencial] = useState(yesNoOptions[0]);
  const [revealed, setRevealed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "saved" | "error">("idle");
  const revealedFieldsRef = useRef<HTMLDivElement>(null);

  const lead = useMemo(
    () => ({ name, phone, quandoComecar, goal, disponibilidadePresencial }),
    [name, phone, quandoComecar, goal, disponibilidadePresencial],
  );
  const whatsappLink = buildLeadWhatsAppLink(lead, source);

  useEffect(() => {
    if (revealed) {
      revealedFieldsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [revealed]);

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
        source,
        origem,
      });
      trackLeadFormSubmit(source, goal);
      setStatus("saved");
      setRevealed(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-5 text-ink shadow-lift ring-1 ring-ink/5 sm:p-7">
      <div className="mb-5 border-b border-gray-100 pb-5">
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0d94a4]">
            <span className="h-px w-6 bg-[#0d94a4]" />
            Aula experimental
          </p>
          <span className="flex-shrink-0 rounded-full bg-[#EAFBFC] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-[#0d94a4]">
            Passo {revealed ? "2" : "1"} de 2
          </span>
        </div>
        <h3 className={`${compact ? "text-2xl" : "text-3xl"} mt-3 font-display font-extrabold leading-tight`}>
          Receba o contato da VozUP
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {revealed
            ? "Só mais um passo: responda as perguntas abaixo para confirmar sua inscrição."
            : "Preencha em menos de 30 segundos para consultar turmas e horários no Tatuapé."}
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-bold">Seu nome</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Digite seu nome"
            className="h-12 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold">WhatsApp</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            inputMode="tel"
            placeholder="(11) 99999-9999"
            className="h-12 w-full rounded-xl border border-gray-200 bg-cream/50 px-4 text-base outline-none transition focus:border-[#00AFC1] focus:bg-white focus:ring-2 focus:ring-[#00AFC1]/20"
          />
        </label>

        {revealed && (
          <div
            ref={revealedFieldsRef}
            className="animate-in fade-in slide-in-from-top-2 space-y-4 duration-300"
          >
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
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-4 py-4 text-center text-sm font-bold leading-tight text-white shadow-lift transition hover:bg-ink hover:text-white disabled:cursor-wait disabled:opacity-70 sm:gap-3 sm:text-base"
      >
        <MessageCircle className="h-5 w-5 flex-shrink-0" />
        <span>{status === "sending" ? "Enviando..." : "Quero minha aula experimental"}</span>
        <ArrowRight className="h-5 w-5 flex-shrink-0" />
      </button>

      {status === "saved" && (
        <div className="mt-4 rounded-xl bg-[#EAFBFC] p-3 text-sm font-semibold text-[#065A63]">
          Cadastro recebido. Nossa equipe vai entrar em contato.
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">
          Não conseguimos salvar agora. Confira se a API está ativa ou fale pelo WhatsApp abaixo.
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
