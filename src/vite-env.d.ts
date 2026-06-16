/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GTM_ID?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
  readonly VITE_GOOGLE_BUSINESS_URL?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_ROBOTS_NOINDEX?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
