export const siteName = "Escola VozUP";

export const businessName = "Escola VozUP de Oratória e Liderança Emocional";

const defaultProductionSiteUrl = "https://www.escolavozup.com";

export const businessAddress = {
  streetAddress: "Rua Azevedo Soares, 1334",
  neighborhood: "Tatuapé",
  addressLocality: "São Paulo",
  addressRegion: "SP",
  addressCountry: "BR",
};

export const homeSeo = {
  title: "Curso de Oratória Presencial | Escola VozUP no Tatuapé",
  description:
    "Escola VozUP de oratória e liderança emocional no Tatuapé, São Paulo. Treine fala em público, voz, presença e comunicação com método prático.",
  imagePath: "/og-vozup.jpg",
};

export type RouteSeo = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  imagePath?: string;
};

export const seoTopics = [
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

export const faqItems = [
  {
    question: "A VozUP é para quem tem medo de falar em público?",
    answer:
      "Sim. O curso de oratória da VozUP atende tanto pessoas que travam ao falar quanto profissionais que já se comunicam bem e querem ganhar mais presença, clareza e liderança.",
  },
  {
    question: "As aulas do curso de oratória são presenciais?",
    answer:
      "A proposta principal do curso de oratória na unidade Tatuapé é presencial, na Rua Azevedo Soares, 1334. A disponibilidade de horários deve ser confirmada com a equipe.",
  },
  {
    question: "Preciso ter experiência com apresentações para fazer o curso de oratória?",
    answer:
      "Não. O método do curso de oratória parte do nível atual do aluno e evolui com exercícios práticos, feedback e repetição guiada.",
  },
  {
    question: "O curso de oratória serve para liderança e vendas?",
    answer:
      "Serve. A comunicação trabalhada no curso de oratória da VozUP é aplicada a reuniões, apresentações, negociações, vídeos, liderança de equipes e conversas difíceis.",
  },
  {
    question: "Como faço para saber valores e turmas do curso de oratória?",
    answer:
      "Clique no botão \"Quero me inscrever\" (ou no CTA principal que direciona ao formulário) para acessar o formulário. Após o envio, nossa equipe entrará em contato para apresentar os horários disponíveis, esclarecer suas dúvidas e informar as condições atuais.",
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

  return defaultProductionSiteUrl;
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

export const getIndexRobots = () =>
  import.meta.env.VITE_ROBOTS_NOINDEX === "true"
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const getRouteSeo = (pathname: string): RouteSeo => {
  if (pathname === "/") {
    return {
      ...homeSeo,
      canonical: getCanonicalUrl("/"),
      robots: getIndexRobots(),
    };
  }

  if (pathname === "/blog") {
    return {
      title: "Blog VozUP | Oratória e Liderança Emocional",
      description: "Conteúdos da VozUP sobre oratória, comunicação e liderança emocional. Em breve, novos artigos por aqui.",
      canonical: getCanonicalUrl(pathname),
      robots: getIndexRobots(),
    };
  }

  if (pathname === "/politica-de-privacidade") {
    return {
      title: "Política de Privacidade | VozUP",
      description:
        "Como a Escola VozUP coleta, usa e protege os dados pessoais de quem preenche formulários no site e em anúncios de lead.",
      canonical: getCanonicalUrl(pathname),
      robots: getIndexRobots(),
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

const getSocialProfileUrls = () =>
  [
    import.meta.env.VITE_INSTAGRAM_URL,
    import.meta.env.VITE_GOOGLE_BUSINESS_URL,
    import.meta.env.VITE_LINKEDIN_URL,
  ]
    .map(normalizeUrl)
    .filter(Boolean);

export const buildHomeStructuredData = () => {
  const siteUrl = getSiteUrl();
  const canonicalUrl = getCanonicalUrl("/");
  const logoUrl = absoluteUrl("/vozup-logo.png", siteUrl);
  const imageUrl = absoluteUrl(homeSeo.imagePath, siteUrl);
  const phone = (import.meta.env.VITE_WHATSAPP_NUMBER || "5511988874277").replace(/\D/g, "");
  const organizationId = `${canonicalUrl}#organization`;
  const websiteId = `${canonicalUrl}#website`;
  const webpageId = `${canonicalUrl}#webpage`;
  const courseId = `${canonicalUrl}#curso-oratoria`;

  return compactObject({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EducationalOrganization"],
        "@id": organizationId,
        name: businessName,
        alternateName: ["VozUP", siteName],
        url: siteUrl || canonicalUrl,
        logo: logoUrl,
        image: [imageUrl, logoUrl],
        description: homeSeo.description,
        slogan: "Destrave sua fala em público na Escola VozUP.",
        telephone: phone ? `+${phone}` : undefined,
        priceRange: "$$",
        sameAs: getSocialProfileUrls(),
        address: {
          "@type": "PostalAddress",
          streetAddress: businessAddress.streetAddress,
          addressLocality: businessAddress.addressLocality,
          addressRegion: businessAddress.addressRegion,
          addressCountry: businessAddress.addressCountry,
        },
        hasMap:
          "https://www.google.com/maps?q=Rua%20Azevedo%20Soares%2C%201334%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP",
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Treinamentos da Escola VozUP",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Aula experimental de oratória",
                serviceType: "Aula presencial de oratória",
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
        url: siteUrl || canonicalUrl,
        publisher: {
          "@id": organizationId,
        },
        inLanguage: "pt-BR",
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: canonicalUrl,
        name: homeSeo.title,
        description: homeSeo.description,
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
  });
};
