import { trackWhatsAppClick } from "@/lib/analytics";

export const whatsappNumber = (
  import.meta.env.VITE_WHATSAPP_NUMBER || "5511988874277"
).replace(/\D/g, "");

export type LeadData = {
  name?: string;
  phone?: string;
  /** Objetivo/motivo de interesse (usado pelo formulário do botão flutuante e pela pergunta 2 do formulário principal). */
  goal?: string;
  /** Pergunta 1 do formulário principal: quando pretende começar. */
  quandoComecar?: string;
  /** Pergunta 3 do formulário principal: disponibilidade presencial 1x/semana no Tatuapé. */
  disponibilidadePresencial?: string;
  source?: string;
};

const buildLeadMessage = (lead: LeadData, source = "landing page VozUP") => {
  return [
    "Ola! Quero agendar uma aula experimental na VozUP.",
    lead.name ? `Nome: ${lead.name}` : "",
    lead.phone ? `WhatsApp: ${lead.phone}` : "",
    lead.goal ? `Objetivo: ${lead.goal}` : "",
    lead.quandoComecar ? `Quando pretende começar: ${lead.quandoComecar}` : "",
    lead.disponibilidadePresencial ? `Disponibilidade presencial: ${lead.disponibilidadePresencial}` : "",
    `Origem: ${source}`,
  ]
    .filter(Boolean)
    .join(" | ");
};

export const buildWhatsAppLink = (source = "landing page VozUP") => {
  const message = `Ola! Tenho interesse na VozUP Escola de Oratoria e Lideranca Emocional. Vim pela ${source} e gostaria de agendar uma aula experimental.`;
  return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
};

export const buildLeadWhatsAppLink = (lead: LeadData, source = "formulário da landing") => {
  return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    buildLeadMessage(lead, source),
  )}`;
};

export const submitLead = async (
  lead: Required<Pick<LeadData, "name" | "phone">> &
    Pick<LeadData, "goal" | "quandoComecar" | "disponibilidadePresencial"> & {
      source?: string;
      origem?: string;
    },
) => {
  const response = await fetch("https://dashboard.escolavozup.com/api/vozup/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: lead.name,
      telefone: lead.phone,
      objetivo: lead.goal,
      quando_comecar: lead.quandoComecar,
      disponibilidade_presencial: lead.disponibilidadePresencial,
      unidade_negocio: "Voz UP",
      origem: lead.origem || "Landing Page VozUP",
      source: lead.source || "formulário da landing",
      _final: true,
    }),
  });

  if (!response.ok) {
    const details = await response.json().catch(() => null);
    throw new Error(details?.details || details?.error || "Não foi possível enviar o cadastro.");
  }

  return response.json().catch(() => ({ ok: true }));
};

export const openWhatsApp = (source?: string) => {
  trackWhatsAppClick(source);
  window.open(buildWhatsAppLink(source), "_blank", "noopener,noreferrer");
};

export const scrollToLead = () => {
  const section = document.getElementById("lead");
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
};
