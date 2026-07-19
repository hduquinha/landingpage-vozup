type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const cleanParams = (params: AnalyticsParams = {}) => {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );
};

const pushDataLayer = (eventName: string, params: AnalyticsParams = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...cleanParams(params),
  });
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (typeof window === "undefined") return;

  const clean = cleanParams(params);
  pushDataLayer(eventName, clean);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, clean);
  }
};

export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window === "undefined") return;

  trackEvent("page_view", {
    page_title: pageTitle,
    page_path: pagePath,
    page_location: window.location.href,
  });
};

export const trackLeadFormSubmit = (source?: string, goal?: string) => {
  const params = {
    event_category: "Lead",
    method: "form",
    lead_source: source,
    lead_goal: goal,
  };

  trackEvent("generate_lead", params);

  // O Meta Lead deste formulário já é enviado pelo container GTM no evento
  // de envio. Dispará-lo também por fbq aqui duplicava a mesma conversão no
  // Meta Ads (um cadastro confirmado aparecia como dois Leads).
};

export const trackWhatsAppClick = (source = "landing page VozUP") => {
  const params = {
    event_category: "Contact",
    method: "whatsapp",
    click_source: source,
  };

  trackEvent("whatsapp_click", params);

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact", {
      content_name: "WhatsApp VozUP",
      ...cleanParams(params),
    });
  }
};
