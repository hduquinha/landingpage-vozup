export type TrafficChannel = "google-ads" | "meta" | "organico";

export interface TrafficSource {
  channel: TrafficChannel;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  gclid: string | null;
  fbclid: string | null;
}

export interface TrafficClassificationSignals {
  utmSource?: string | null;
  utmMedium?: string | null;
  utmContent?: string | null;
  gclid?: string | null;
  fbclid?: string | null;
}

const STORAGE_KEY = "vozup_traffic_source";

const EMPTY: TrafficSource = {
  channel: "organico",
  utmSource: null,
  utmMedium: null,
  utmCampaign: null,
  utmContent: null,
  utmTerm: null,
  gclid: null,
  fbclid: null,
};

const META_ORGANIC_SOURCES = new Set([
  "facebook",
  "facebookcom",
  "fb",
  "instagram",
  "instagramcom",
  "ig",
  "meta",
]);

const META_ADS_SOURCE_PREFIXES = ["facebookads", "fbads", "instagramads", "igads", "metaads"];
const PAID_MEDIUMS = new Set([
  "ads",
  "cpa",
  "cpc",
  "cpm",
  "cpv",
  "display",
  "paid",
  "paidmedia",
  "paidsearch",
  "paidsocial",
  "paidtraffic",
  "ppc",
  "remarketing",
  "retargeting",
  "socialads",
  "socialpaid",
  "sponsored",
  "sponsoredsocial",
]);
const ORGANIC_SOCIAL_MEDIUMS = new Set(["social", "organicsocial", "socialorganic"]);

function compact(value: string | null | undefined): string {
  return (value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/**
 * Classifica apenas sinais que realmente distinguem mídia paga de navegação
 * orgânica. `fbclid` também aparece em links orgânicos abertos dentro do
 * Facebook/Instagram, portanto só reforça Meta Ads quando vem acompanhado de
 * um meio pago. `link_in_bio` e `utm_medium=social` permanecem orgânicos desde
 * que não exista uma fonte explicitamente publicitária nem um meio pago.
 */
export function classifyTrafficChannel({
  utmSource,
  utmMedium,
  utmContent,
  gclid,
  fbclid,
}: TrafficClassificationSignals): TrafficChannel {
  const source = compact(utmSource);
  const medium = compact(utmMedium);
  const content = compact(utmContent);

  const isExplicitMetaAdsSource = META_ADS_SOURCE_PREFIXES.some((prefix) => source.startsWith(prefix));
  const isMetaOrganicSource = META_ORGANIC_SOURCES.has(source);
  const isPaidMedium = PAID_MEDIUMS.has(medium);
  const isOrganicSocialMedium = ORGANIC_SOCIAL_MEDIUMS.has(medium);
  const isLinkInBio = content.includes("linkinbio");

  // Google só conta como "pago" (Google Ads) com evidência real de mídia paga:
  // `gclid` (auto-tag do Google Ads em cliques de anúncio) ou fonte google com
  // meio pago (cpc/ppc/paid...). Uma visita de BUSCA ORGÂNICA chega com
  // utm_source=google sem gclid e sem meio pago — vira "organico" (Landing Page
  // VozUP), separando o tráfego pago do orgânico do Google.
  const isGoogleSource = source.includes("google");
  if (Boolean(gclid?.trim()) || (isGoogleSource && isPaidMedium)) return "google-ads";
  if (isGoogleSource) return "organico";

  if (isExplicitMetaAdsSource) return "meta";
  if (isPaidMedium && (isMetaOrganicSource || Boolean(fbclid?.trim()))) return "meta";
  if (isLinkInBio || (isMetaOrganicSource && isOrganicSocialMedium)) return "organico";

  return "organico";
}

function parseStoredTrafficSource(raw: string): TrafficSource | null {
  const parsed = JSON.parse(raw) as Partial<TrafficSource> | null;
  if (!parsed || typeof parsed !== "object") return null;

  const restored: TrafficSource = {
    ...EMPTY,
    utmSource: typeof parsed.utmSource === "string" ? parsed.utmSource : null,
    utmMedium: typeof parsed.utmMedium === "string" ? parsed.utmMedium : null,
    utmCampaign: typeof parsed.utmCampaign === "string" ? parsed.utmCampaign : null,
    utmContent: typeof parsed.utmContent === "string" ? parsed.utmContent : null,
    utmTerm: typeof parsed.utmTerm === "string" ? parsed.utmTerm : null,
    gclid: typeof parsed.gclid === "string" ? parsed.gclid : null,
    fbclid: typeof parsed.fbclid === "string" ? parsed.fbclid : null,
  };
  restored.channel = classifyTrafficChannel(restored);
  return restored;
}

/**
 * Lê os parâmetros de rastreio da URL de entrada e guarda na sessão, para o
 * formulário ainda enxergar a origem da primeira visita mesmo
 * se o visitante navegar entre páginas do site antes de converter.
 */
export function getTrafficSource(): TrafficSource {
  if (typeof window === "undefined") return EMPTY;

  const params = new URLSearchParams(window.location.search);
  const fromUrl: TrafficSource = {
    channel: "organico",
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
    utmContent: params.get("utm_content"),
    utmTerm: params.get("utm_term"),
    gclid: params.get("gclid"),
    fbclid: params.get("fbclid"),
  };
  const hasSignal = [
    fromUrl.utmSource,
    fromUrl.utmMedium,
    fromUrl.utmCampaign,
    fromUrl.utmContent,
    fromUrl.utmTerm,
    fromUrl.gclid,
    fromUrl.fbclid,
  ].some(Boolean);

  if (hasSignal) {
    fromUrl.channel = classifyTrafficChannel(fromUrl);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      // sessionStorage indisponível (modo privado etc.) — segue sem persistir
    }
    return fromUrl;
  }

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const restored = parseStoredTrafficSource(stored);
      if (restored) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
        return restored;
      }
    }
  } catch {
    // ignore
  }

  return EMPTY;
}
