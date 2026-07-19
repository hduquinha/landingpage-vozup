import {
  meetingsLandingPageContent,
  publicSpeakingLandingPageContent,
  salesLandingPageContent,
  videoRecordingLandingPageContent,
  type LandingPageContent,
} from "@/lib/landingPageContent";
import { getTrafficSource, type TrafficChannel } from "@/lib/trafficSource";

/**
 * "full" = 6 perguntas (nome, telefone, profissão, quando começar, objetivo,
 * disponibilidade presencial) — formulário padrão.
 * "reduced4" = 4 perguntas (nome, telefone, profissão, quer resultado rápido).
 * "reduced3" = 3 perguntas (nome, telefone, quer resultado rápido).
 */
export type LandingPageFormVariant = "full" | "reduced4" | "reduced3";

export interface LandingPageProfile {
  id: string;
  route: string;
  label: string;
  /** Tema/dor da página (ex.: "Vendas", "Gravar Vídeos") — agrupa as variantes de uma mesma página no Dashboard. */
  group: string;
  /** Rótulo da variante do formulário (ex.: "Formulário 4 Perguntas"), presente só nas rotas reduzidas. */
  variantLabel?: string;
  content?: LandingPageContent;
  /** "extended" usa a composição de seções ampliada (jornada de vendas completa). Padrão: seções atuais. */
  layout?: "extended";
  /** Padrão: "full" (6 perguntas). */
  formVariant?: LandingPageFormVariant;
  /** Se true, a rota renderiza os mesmos componentes "Classic" da Home (App.tsx usa <Index /> em vez de <LandingPage />). */
  useHomeLayout?: boolean;
}

/**
 * Prefixo da origem enviada ao Dashboard por canal de tráfego. O canal não
 * vem da rota (uma única rota atende direto/Google Ads/Meta) — vem das UTMs e
 * dos sinais pagos capturados em getTrafficSource(). `fbclid` sozinho não
 * prova anúncio, pois também aparece em links orgânicos do Facebook/Instagram. As
 * pastas "Google Ads" e "Meta" do Dashboard (ver vozupFolders.ts) casam pela
 * origem começar com esses prefixos — não mexer aqui sem mexer lá.
 */
const ORIGEM_PREFIX_BY_CHANNEL: Record<TrafficChannel, string> = {
  organico: "Landing Page VozUP",
  "google-ads": "Google Ads VozUP",
  // Precisa começar com "Meta" para cair na pasta "Meta" do Dashboard
  // (condição da pasta casa com origem LIKE 'meta%').
  meta: "Meta Ads VozUP",
};

/**
 * Monta o valor de "origem" enviado ao Dashboard: prefixo do canal + tema +
 * (se houver) o rótulo da variante do formulário. Tema + variante já
 * identifica a página de forma única (a rota em si é legível, ex.
 * /forms/vendas/4-perguntas), não precisa de nenhum índice extra.
 */
function buildOrigem(channel: TrafficChannel, group: string, variantLabel?: string): string {
  const prefix = ORIGEM_PREFIX_BY_CHANNEL[channel];
  const variantSuffix = variantLabel ? ` (${variantLabel})` : "";
  return `${prefix} - ${group}${variantSuffix}`;
}

export const DEFAULT_GROUP = "Home";
export const DEFAULT_ORIGEM = buildOrigem("organico", DEFAULT_GROUP);

interface BaseTopic {
  /** Identificador da URL (ex.: "vendas" em /forms/vendas/6-perguntas). */
  slug: string;
  group: string;
  label: string;
  content: LandingPageContent;
}

const TOPICS: BaseTopic[] = [
  {
    slug: "vendas",
    group: "Vendas",
    label: "Dificuldade para vender",
    content: salesLandingPageContent,
  },
  {
    slug: "gravar-videos",
    group: "Gravar Vídeos",
    label: "Dificuldade para gravar vídeos",
    content: videoRecordingLandingPageContent,
  },
  {
    slug: "falar-em-publico",
    group: "Falar em Público",
    label: "Dificuldade para falar em público",
    content: publicSpeakingLandingPageContent,
  },
  {
    slug: "reunioes",
    group: "Reuniões",
    label: "Dificuldade em reuniões",
    content: meetingsLandingPageContent,
  },
];

const FORM_VARIANTS: {
  routeSuffix: string;
  variantLabel?: string;
  formVariant: LandingPageFormVariant;
}[] = [
  { routeSuffix: "6-perguntas", formVariant: "full" },
  { routeSuffix: "4-perguntas", variantLabel: "Formulário 4 Perguntas", formVariant: "reduced4" },
  { routeSuffix: "3-perguntas", variantLabel: "Formulário 3 Perguntas", formVariant: "reduced3" },
];

export const LANDING_PAGE_PROFILES: LandingPageProfile[] = TOPICS.flatMap((topic) =>
  FORM_VARIANTS.map((variant) => ({
    id: `${topic.slug}-${variant.routeSuffix}`,
    route: `/forms/${topic.slug}/${variant.routeSuffix}`,
    label: variant.variantLabel ? `${topic.label} - ${variant.variantLabel}` : topic.label,
    group: topic.group,
    variantLabel: variant.variantLabel,
    content: topic.content,
    layout: "extended",
    formVariant: variant.formVariant,
  }))
);

/**
 * Rotas antigas (/p/N com índice numérico) redirecionadas para o equivalente
 * em /forms/<tema>/<n>-perguntas — mantém funcionando qualquer link já
 * distribuído (bio do Instagram, QR code impresso etc.) antes da renomeação.
 * Ver App.tsx para onde isso vira <Navigate>.
 */
export const LEGACY_ROUTE_REDIRECTS: Record<string, string> = {
  "/p/1": "/forms/vendas/6-perguntas",
  "/p/1/2947618": "/forms/vendas/4-perguntas",
  "/p/1/9812781": "/forms/vendas/3-perguntas",
  "/p/2": "/forms/gravar-videos/6-perguntas",
  "/p/2/3752094": "/forms/gravar-videos/4-perguntas",
  "/p/2/8140367": "/forms/gravar-videos/3-perguntas",
  "/p/3": "/forms/falar-em-publico/6-perguntas",
  "/p/3/4623810": "/forms/falar-em-publico/4-perguntas",
  "/p/3/7091254": "/forms/falar-em-publico/3-perguntas",
  "/p/4": "/forms/reunioes/6-perguntas",
  "/p/4/5308472": "/forms/reunioes/4-perguntas",
  "/p/4/6284915": "/forms/reunioes/3-perguntas",
};

export function getProfileByRoute(route: string): LandingPageProfile | undefined {
  return LANDING_PAGE_PROFILES.find((p) => p.route === route);
}

export function getOrigemForCurrentPath(): string {
  if (typeof window === "undefined") return DEFAULT_ORIGEM;
  const { channel } = getTrafficSource();
  const profile = getProfileByRoute(window.location.pathname);
  if (!profile) return buildOrigem(channel, DEFAULT_GROUP);
  return buildOrigem(channel, profile.group, profile.variantLabel);
}

export function getFormVariantForCurrentPath(): LandingPageFormVariant {
  if (typeof window === "undefined") return "full";
  return getProfileByRoute(window.location.pathname)?.formVariant ?? "full";
}

export function getLandingGroupForCurrentPath(): string {
  if (typeof window === "undefined") return DEFAULT_GROUP;
  return getProfileByRoute(window.location.pathname)?.group ?? DEFAULT_GROUP;
}

/**
 * Nome de campanha para a pasta "Meta" do Dashboard (blockKind "meta-form",
 * que identifica o bloco pelo nome da campanha em vez de agrupar por tema).
 * Usa utm_campaign quando o anúncio manda (configurar {{campaign.name}} no
 * Meta Ads Manager) — sem UTM, cai no tema + variante da página como
 * identificador do bloco.
 */
export function getMetaCampaignNameForCurrentPath(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const { channel, utmCampaign } = getTrafficSource();
  if (channel !== "meta") return undefined;
  if (utmCampaign) return utmCampaign;
  const profile = getProfileByRoute(window.location.pathname);
  if (!profile) return undefined;
  return `${profile.group}${profile.variantLabel ? ` (${profile.variantLabel})` : ""}`;
}
