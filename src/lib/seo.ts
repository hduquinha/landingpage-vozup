export const siteName = "VozUP";

export const homeSeo = {
  title: "VozUP | Escola de Oratória no Tatuapé, São Paulo",
  description:
    "Aulas presenciais de oratória e liderança emocional no Tatuapé, São Paulo. Treine fala em público, presença, voz e comunicação para carreira e vendas.",
  imagePath: "/vozup-logo.png",
};

export const faqItems = [
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

export const getSiteUrl = () => {
  const configuredUrl = normalizeUrl(import.meta.env.VITE_SITE_URL);
  if (configuredUrl) return configuredUrl;

  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin.replace(/\/+$/, "");
  }

  return "";
};

export const absoluteUrl = (path: string, baseUrl = getSiteUrl()) => {
  if (/^https?:\/\//i.test(path)) return path;
  if (!baseUrl) return path;

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export const getCanonicalUrl = (pathname = "/") => {
  const cleanPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;
  return absoluteUrl(cleanPath);
};

export const getRouteSeo = (pathname: string) => {
  if (pathname === "/") {
    return {
      ...homeSeo,
      canonical: getCanonicalUrl("/"),
      robots: "index, follow, max-image-preview:large",
    };
  }

  if (pathname.startsWith("/checkout")) {
    return {
      title: "Agendamento VozUP | WhatsApp",
      description: "Página de redirecionamento para atendimento da VozUP pelo WhatsApp.",
      canonical: getCanonicalUrl(pathname),
      robots: "noindex, nofollow",
    };
  }

  return {
    title: "Página não encontrada | VozUP",
    description: "A página solicitada não foi encontrada.",
    canonical: getCanonicalUrl(pathname),
    robots: "noindex, nofollow",
  };
};

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

export const buildHomeStructuredData = () => {
  const siteUrl = getSiteUrl();
  const logoUrl = absoluteUrl(homeSeo.imagePath, siteUrl);
  const phone = (import.meta.env.VITE_WHATSAPP_NUMBER || "5513997832766").replace(/\D/g, "");
  const organizationId = `${siteUrl || getCanonicalUrl("/")}/#organization`;

  return compactObject({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": organizationId,
        name: "VozUP Escola de Oratória e Liderança Emocional",
        alternateName: "VozUP",
        url: siteUrl || undefined,
        logo: logoUrl,
        image: logoUrl,
        description: homeSeo.description,
        telephone: phone ? `+${phone}` : undefined,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Azevedo Soares, 1334",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          postalCode: "",
          addressCountry: "BR",
        },
        areaServed: [
          {
            "@type": "City",
            name: "São Paulo",
          },
          {
            "@type": "Place",
            name: "Tatuapé",
          },
        ],
        additionalType: "https://schema.org/EducationalOrganization",
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aula experimental de oratória",
              serviceType: "Curso presencial de oratória e comunicação",
              areaServed: "Tatuapé, São Paulo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Treinamento de liderança emocional",
              serviceType: "Treinamento presencial de comunicação para liderança",
              areaServed: "Tatuapé, São Paulo",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl || getCanonicalUrl("/")}/#website`,
        name: siteName,
        url: siteUrl || undefined,
        publisher: {
          "@id": organizationId,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": `${getCanonicalUrl("/")}/#webpage`,
        url: getCanonicalUrl("/"),
        name: homeSeo.title,
        description: homeSeo.description,
        isPartOf: {
          "@id": `${siteUrl || getCanonicalUrl("/")}/#website`,
        },
        about: {
          "@id": organizationId,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "FAQPage",
        "@id": `${getCanonicalUrl("/")}/#faq`,
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
  });
};
