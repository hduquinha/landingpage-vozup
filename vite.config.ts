import { defineConfig, loadEnv, type HtmlTagDescriptor, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const siteName = "Escola VozUP";
const businessName = "Escola VozUP de Oratória e Liderança Emocional";
const siteTitle = "Escola VozUP | Curso de Oratória no Tatuapé";
const siteDescription =
  "Escola VozUP de oratória e liderança emocional no Tatuapé, São Paulo. Treine fala em público, voz, presença e comunicação com método prático.";
const defaultProductionSiteUrl = "https://www.escolavozup.com";
const defaultGtmId = "GTM-MWVSCMS2";
const socialImagePath = "/og-vozup.jpg";
const logoPath = "/vozup-logo.png";
const mapUrl =
  "https://www.google.com/maps?q=Rua%20Azevedo%20Soares%2C%201334%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP";

const seoTopics = [
  "oratória",
  "Escola VozUP",
  "VozUP",
  "curso de oratória",
  "falar em público",
  "comunicação",
  "liderança emocional",
  "apresentações profissionais",
  "Tatuapé",
  "São Paulo",
];

const faqItems = [
  {
    question: "A VozUP é para quem tem medo de falar em público?",
    answer:
      "Sim. A escola atende tanto pessoas que travam ao falar quanto profissionais que já se comunicam bem e querem ganhar mais presença, clareza e liderança.",
  },
  {
    question: "As aulas são presenciais?",
    answer:
      "A proposta principal da unidade Tatuapé é presencial, na Rua Azevedo Soares, 1334. A disponibilidade de horários deve ser confirmada com a equipe.",
  },
  {
    question: "Preciso ter experiência com apresentações?",
    answer:
      "Não. O método parte do nível atual do aluno e evolui com exercícios práticos, feedback e repetição guiada.",
  },
  {
    question: "O curso serve para liderança e vendas?",
    answer:
      "Serve. A comunicação trabalhada na VozUP é aplicada a reuniões, apresentações, negociações, vídeos, liderança de equipes e conversas difíceis.",
  },
  {
    question: "Como faço para saber valores e turmas?",
    answer:
      "Clique no botão de WhatsApp da página para falar com a equipe, consultar horários e receber as condições atuais.",
  },
];

const normalizeUrl = (url?: string) => {
  const value = url?.trim();
  if (!value) return "";

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
};

const getVercelProductionUrl = (env: Record<string, string>) => {
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return normalizeUrl(env.VERCEL_PROJECT_PRODUCTION_URL);
  if (env.VERCEL_ENV === "production") return normalizeUrl(env.VERCEL_URL);
  return "";
};

const getSiteUrl = (env: Record<string, string>) => {
  return normalizeUrl(
    env.VITE_SITE_URL || env.PUBLIC_SITE_URL || getVercelProductionUrl(env) || defaultProductionSiteUrl,
  );
};

const absoluteUrl = (siteUrl: string, pathname: string) => {
  return `${siteUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
};

const isValidGtmId = (id?: string) => /^GTM-[A-Z0-9]+$/i.test(id || "");
const isValidGaMeasurementId = (id?: string) => /^G-[A-Z0-9]+$/i.test(id || "");

const compactObject = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map(compactObject).filter((item) => item !== undefined);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .map(([key, item]) => [key, compactObject(item)])
        .filter(([, item]) => item !== undefined && item !== ""),
    );
  }

  return value;
};

const getSocialProfileUrls = (env: Record<string, string>) =>
  [env.VITE_INSTAGRAM_URL, env.VITE_GOOGLE_BUSINESS_URL, env.VITE_LINKEDIN_URL]
    .map(normalizeUrl)
    .filter(Boolean);

const buildStructuredData = (siteUrl: string, env: Record<string, string>) => {
  const canonicalUrl = `${siteUrl}/`;
  const logoUrl = absoluteUrl(siteUrl, logoPath);
  const imageUrl = absoluteUrl(siteUrl, socialImagePath);
  const phone = env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const organizationId = `${canonicalUrl}#organization`;
  const websiteId = `${canonicalUrl}#website`;
  const courseId = `${canonicalUrl}#curso-oratoria`;

  return JSON.stringify(
    compactObject({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "EducationalOrganization"],
          "@id": organizationId,
          name: businessName,
          alternateName: ["VozUP", siteName],
          url: canonicalUrl,
          logo: logoUrl,
          image: [imageUrl, logoUrl],
          description: siteDescription,
          slogan: "Destrave sua fala em público na Escola VozUP.",
          telephone: phone ? `+${phone}` : undefined,
          priceRange: "$$",
          sameAs: getSocialProfileUrls(env),
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Azevedo Soares, 1334",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          hasMap: mapUrl,
          areaServed: [
            {
              "@type": "Place",
              name: "Tatuapé",
            },
            {
              "@type": "City",
              name: "São Paulo",
            },
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: phone ? `+${phone}` : undefined,
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: ["pt-BR"],
          },
          knowsAbout: seoTopics,
        },
        {
          "@type": "Course",
          "@id": courseId,
          name: "Curso presencial de oratória da Escola VozUP",
          description:
            "Treinamento prático para desenvolver fala em público, presença, voz, segurança e comunicação profissional em aulas presenciais no Tatuapé.",
          provider: {
            "@id": organizationId,
          },
          courseMode: "Presencial",
          inLanguage: "pt-BR",
          url: canonicalUrl,
        },
        {
          "@type": "WebSite",
          "@id": websiteId,
          name: siteName,
          url: canonicalUrl,
          publisher: {
            "@id": organizationId,
          },
          inLanguage: "pt-BR",
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: siteTitle,
          description: siteDescription,
          isPartOf: {
            "@id": websiteId,
          },
          about: {
            "@id": organizationId,
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl,
          },
          inLanguage: "pt-BR",
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: siteName,
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
      ],
    }),
  );
};

const seoAndMarketingPlugin = (mode: string): PluginOption => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = getSiteUrl(env);
  const gtmId = env.VITE_GTM_ID?.trim() || defaultGtmId;
  const gaMeasurementId = env.VITE_GA_MEASUREMENT_ID?.trim();
  const googleSiteVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim();
  const robotsContent =
    env.VITE_ROBOTS_NOINDEX === "true"
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return {
    name: "vozup-seo-and-marketing",
    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [];
      let updatedHtml = html
        .replace(/<title>.*?<\/title>/, `<title>${siteTitle}</title>`)
        .replace(
          /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
          `<meta name="description" content="${siteDescription}" />`,
        )
        .replace(
          /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
          `<meta name="robots" content="${robotsContent}" />`,
        );

      if (siteUrl) {
        updatedHtml = updatedHtml
          .replaceAll(`content="${socialImagePath}"`, `content="${absoluteUrl(siteUrl, socialImagePath)}"`)
          .replaceAll(`content="${logoPath}"`, `content="${absoluteUrl(siteUrl, logoPath)}"`);

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
            children: buildStructuredData(siteUrl, env),
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
            // GTM real só carrega na primeira interação do usuário (ou após
            // o load + fallback de 3.5s), para não competir com o JS crítico
            // no carregamento inicial. window.dataLayer.push continua
            // funcionando normalmente antes disso (fila nativa do GTM).
            tag: "script",
            children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var loaded=false;function load(){if(loaded)return;loaded=true;var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);}['scroll','mousemove','touchstart','keydown','click'].forEach(function(evt){w.addEventListener(evt,load,{passive:true,once:true});});if(d.readyState==='complete'){setTimeout(load,3500);}else{w.addEventListener('load',function(){setTimeout(load,3500);});}})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`,
            injectTo: "head-prepend",
          },
          {
            tag: "noscript",
            children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            injectTo: "body-prepend",
          },
        );
      } else if (isValidGaMeasurementId(gaMeasurementId)) {
        tags.push({
          // mesma estratégia de carregamento adiado aplicada ao gtag.js
          tag: "script",
          children: `(function(w,d,id){w.dataLayer=w.dataLayer||[];function gtag(){w.dataLayer.push(arguments);}w.gtag=gtag;gtag('js',new Date());gtag('config',id,{send_page_view:false});var loaded=false;function load(){if(loaded)return;loaded=true;var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtag/js?id='+id;d.head.appendChild(j);}['scroll','mousemove','touchstart','keydown','click'].forEach(function(evt){w.addEventListener(evt,load,{passive:true,once:true});});if(d.readyState==='complete'){setTimeout(load,3500);}else{w.addEventListener('load',function(){setTimeout(load,3500);});}})(window,document,${JSON.stringify(gaMeasurementId)});`,
          injectTo: "head-prepend",
        });
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
  build: {
    // Navegadores de 2020+ (>99% do tráfego real) já suportam isso nativamente;
    // evita transpilar/polyfillar recursos que o próprio navegador já entende.
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom")) {
            return "react-vendor";
          }
          if (id.includes("node_modules/@radix-ui")) {
            return "ui-vendor";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
        },
      },
    },
  },
}));
