import { defineConfig, loadEnv, type HtmlTagDescriptor, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const normalizeUrl = (url?: string) => {
  const value = url?.trim();
  if (!value) return "";

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
};

const getSiteUrl = (env: Record<string, string>) => {
  return normalizeUrl(env.VITE_SITE_URL || env.PUBLIC_SITE_URL || env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL);
};

const isValidGtmId = (id?: string) => /^GTM-[A-Z0-9]+$/i.test(id || "");
const isValidGaMeasurementId = (id?: string) => /^G-[A-Z0-9]+$/i.test(id || "");

const buildStructuredData = (siteUrl: string, whatsappNumber?: string) => {
  const logoUrl = `${siteUrl}/vozup-logo.png`;
  const phone = whatsappNumber?.replace(/\D/g, "");
  const organizationId = `${siteUrl}/#organization`;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": organizationId,
        name: "VozUP Escola de Oratória e Liderança Emocional",
        alternateName: "VozUP",
        url: siteUrl,
        logo: logoUrl,
        image: logoUrl,
        description:
          "Aulas presenciais de oratória e liderança emocional no Tatuapé, São Paulo. Treine fala em público, presença, voz e comunicação para carreira e vendas.",
        telephone: phone ? `+${phone}` : undefined,
        priceRange: "$$",
        additionalType: "https://schema.org/EducationalOrganization",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Azevedo Soares, 1334",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        areaServed: ["Tatuapé", "São Paulo"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "VozUP",
        url: siteUrl,
        publisher: {
          "@id": organizationId,
        },
        inLanguage: "pt-BR",
      },
    ],
  });
};

const seoAndMarketingPlugin = (mode: string): PluginOption => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = getSiteUrl(env);
  const gtmId = env.VITE_GTM_ID?.trim();
  const gaMeasurementId = env.VITE_GA_MEASUREMENT_ID?.trim();
  const googleSiteVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

  return {
    name: "vozup-seo-and-marketing",
    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [];
      let updatedHtml = html;

      if (siteUrl) {
        updatedHtml = updatedHtml
          .replace('content="/vozup-logo.png"', `content="${siteUrl}/vozup-logo.png"`)
          .replace('content="/vozup-logo.png"', `content="${siteUrl}/vozup-logo.png"`);

        tags.push(
          {
            tag: "link",
            attrs: { rel: "canonical", href: `${siteUrl}/` },
            injectTo: "head",
          },
          {
            tag: "meta",
            attrs: { property: "og:url", content: `${siteUrl}/` },
            injectTo: "head",
          },
          {
            tag: "script",
            attrs: { id: "vozup-structured-data", type: "application/ld+json" },
            children: buildStructuredData(siteUrl, env.VITE_WHATSAPP_NUMBER),
            injectTo: "head",
          },
        );
      }

      if (googleSiteVerification) {
        tags.push({
          tag: "meta",
          attrs: { name: "google-site-verification", content: googleSiteVerification },
          injectTo: "head",
        });
      }

      if (isValidGtmId(gtmId)) {
        tags.push(
          {
            tag: "script",
            children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`,
            injectTo: "head-prepend",
          },
          {
            tag: "noscript",
            children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            injectTo: "body-prepend",
          },
        );
      } else if (isValidGaMeasurementId(gaMeasurementId)) {
        tags.push(
          {
            tag: "script",
            attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}` },
            injectTo: "head-prepend",
          },
          {
            tag: "script",
            children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaMeasurementId)},{send_page_view:false});`,
            injectTo: "head-prepend",
          },
        );
      }

      return { html: updatedHtml, tags };
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    seoAndMarketingPlugin(mode),
    react(),
    mode === "development" &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
