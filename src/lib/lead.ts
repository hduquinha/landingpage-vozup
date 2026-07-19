import { trackWhatsAppClick } from "@/lib/analytics";

export const whatsappNumber = (
  import.meta.env.VITE_WHATSAPP_NUMBER || "5511988874277"
).replace(/\D/g, "");

export type LeadData = {
  name?: string;
  phone?: string;
  /** Profissão informada pelo lead (campo de texto livre). */
  profissao?: string;
  /** Objetivo/motivo de interesse (usado pelo formulário do botão flutuante e pela pergunta 2 do formulário principal). */
  goal?: string;
  /** Pergunta 1 do formulário principal: quando pretende começar. */
  quandoComecar?: string;
  /** Pergunta 3 do formulário principal: disponibilidade presencial 1x/semana no Tatuapé. */
  disponibilidadePresencial?: string;
  /** Pergunta única dos formulários reduzidos (variantes de 4 e 3 perguntas). */
  quickResults?: string;
  source?: string;
};

/** Validação simples: exige nome e sobrenome (pelo menos duas palavras com 2+ letras). */
export const isValidFullName = (value: string) => {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  return parts.length >= 2 && parts.every((part) => part.length >= 2);
};

/** Validação simples de telefone brasileiro: DDD + 8 ou 9 dígitos. */
export const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length === 10 || digits.length === 11;
};

export const buildWhatsAppLink = (source = "landing page VozUP") => {
  const message = `Ola! Tenho interesse na VozUP Escola de Oratoria e Lideranca Emocional. Vim pela ${source} e gostaria de agendar uma consultoria.`;
  return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
};

export const submitLead = async (
  lead: Required<Pick<LeadData, "name" | "phone">> &
    Pick<LeadData, "profissao" | "goal" | "quandoComecar" | "disponibilidadePresencial" | "quickResults"> & {
      source?: string;
      origem?: string;
      /** Tema/dor da página (ex.: "Vendas") — agrupa as variantes de uma mesma página no Dashboard. */
      landingGroup?: string;
      /** Identifica o bloco dentro da pasta "Meta" do Dashboard (blockKind "meta-form"). */
      metaCampaignName?: string;
      /** UTM/click-id do clique no anúncio — gravados como estão, sem interpretação, para conferência manual na ficha do lead. */
      utmSource?: string | null;
      utmMedium?: string | null;
      utmCampaign?: string | null;
      utmContent?: string | null;
      utmTerm?: string | null;
      gclid?: string | null;
      fbclid?: string | null;
    },
) => {
  const response = await fetch("https://dashboard.escolavozup.com/api/vozup/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: lead.name,
      telefone: lead.phone,
      profissao: lead.profissao,
      objetivo: lead.goal,
      quando_comecar: lead.quandoComecar,
      disponibilidade_presencial: lead.disponibilidadePresencial,
      quer_resultado_rapido: lead.quickResults,
      unidade_negocio: "Voz UP",
      origem: lead.origem || "Landing Page VozUP",
      landing_page_grupo: lead.landingGroup,
      campaign_name: lead.metaCampaignName,
      utm_source: lead.utmSource || undefined,
      utm_medium: lead.utmMedium || undefined,
      utm_campaign: lead.utmCampaign || undefined,
      utm_content: lead.utmContent || undefined,
      utm_term: lead.utmTerm || undefined,
      gclid: lead.gclid || undefined,
      fbclid: lead.fbclid || undefined,
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

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
};

/** Usado só pelos componentes "Classic" da home (scrolla até a AboutTrainingSectionClassic, id="lead"). */
export const scrollToLead = () => scrollToSection("lead");
