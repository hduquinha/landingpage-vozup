import { faqItems as defaultFaqItems } from "@/lib/seo";

/**
 * Conteúdo textual configurável por rota/perfil de landing page.
 *
 * O prefixo fixo "Curso de Oratória - " usado nos H2 e o rótulo isolado
 * "Curso de Oratória" (kicker acima de alguns títulos) NÃO fazem parte
 * deste objeto de propósito: eles ficam hardcoded nos componentes para
 * garantir que nenhuma variação de conteúdo possa alterá-los.
 */
export interface LandingPageContent {
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    highlights: string[];
    ctaLabel: string;
  };
  problems: {
    sectionLabel: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    items: { title: string; text: string }[];
    /** CTA extra opcional abaixo dos cards de dor (só perfis com layout "extended"). */
    extraCta?: string;
  };
  /** Seção "Consequências" — opcional, só renderizada em perfis com layout "extended". */
  consequences?: {
    sectionLabel: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  /** Seção "Transformação" (antes/depois) — opcional, só perfis com layout "extended". */
  transformation?: {
    sectionLabel: string;
    heading: string;
    beforeTitle: string;
    beforeItems: string[];
    afterTitle: string;
    afterItems: string[];
  };
  /** Seção "Benefícios" — opcional, só perfis com layout "extended". */
  benefits?: {
    sectionLabel: string;
    heading: string;
    intro: string;
    items: { title: string; text: string }[];
    cta: string;
  };
  aboutTraining: {
    sectionLabel: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    results: string[];
    sideLabel: string;
    sideText: string;
    sideCta: string;
  };
  video: {
    sectionLabel: string;
    headingLine1: string;
    intro: string;
    cardOneTitle: string;
    cardOneText: string;
    cardTwoTitle: string;
    cardTwoText: string;
    steps: { title: string; text: string }[];
  };
  testimonials: {
    sectionLabel: string;
    headingLine1: string;
    intro: string;
    moments: string[];
  };
  trainers: {
    sectionLabel: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
  };
  trainingContent: {
    sectionLabel: string;
    headingLine1: string;
    intro: string;
    modules: string[];
    advantages: { title: string; text: string }[];
    extras: string[];
  };
  /** Seção "Como funcionam as aulas" — opcional, só perfis com layout "extended". */
  howClassesWork?: {
    sectionLabel: string;
    heading: string;
    intro: string;
    steps: { title: string; text: string }[];
  };
  /** Seção "Diferenciais" — opcional, só perfis com layout "extended". */
  differentials?: {
    sectionLabel: string;
    heading: string;
    intro: string;
    items: { title: string; text: string }[];
    cta: string;
  };
  pricing: {
    headingLine1: string;
    intro: string;
    includes: string[];
    rightHeading: string;
  };
  faq: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
  };
}

export const defaultLandingPageContent: LandingPageContent = {
  hero: {
    titleLine1: "Curso de Oratória Presencial",
    titleLine2: "Escola VozUP no Tatuapé.",
    subtitle:
      "O curso de oratória da Escola VozUP foi desenvolvido especialmente para quem busca resultados reais, sem enrolação. Diferente dos cursos de oratória tradicionais e dos modelos genéricos oferecidos pela concorrência, nosso método é mais direto, rápido e eficaz, unindo técnicas de oratória e liderança emocional para transformar sua comunicação de forma prática e definitiva.",
    highlights: ["Evolução mais rápida", "Método prático", "Aulas presenciais"],
    ctaLabel: "Quero começar meu treino",
  },
  problems: {
    sectionLabel: "O problema não é falta de capacidade",
    headingLine1: "É falta de treino certo,",
    headingLine2: "no ambiente certo.",
    intro:
      "No curso de oratória da VozUP, a fala é trabalhada como habilidade prática: você aprende as técnicas, aplica em exercícios reais, recebe feedback personalizado e repete o processo até ganhar segurança real para falar em público.",
    items: [
      {
        title: "Você sabe, mas não consegue explicar",
        text: "A ideia está na cabeça, mas na hora de falar sai confusa, longa ou insegura.",
      },
      {
        title: "A ansiedade toma o controle",
        text: "Voz trêmula, branco, fala acelerada e vontade de evitar exposição.",
      },
      {
        title: "Você perde espaço em reuniões",
        text: "Outras pessoas se posicionam melhor mesmo dominando menos o assunto.",
      },
      {
        title: "Curso de oratória genérico não resolve!",
        text: "Sem treino individual, o aluno entende a teoria mas continua travado. O curso de oratória da VozUP vai te destravar!",
      },
    ],
  },
  aboutTraining: {
    sectionLabel: "Comunicação é treino",
    headingLine1: "Não é dom.",
    headingLine2: "É método.",
    intro:
      "O curso de oratória da VozUP tira a fala do campo da teoria e leva direto para a prática: o aluno fala, recebe direção especializada, ajusta os pontos de melhoria e repete até construir uma comunicação mais natural, segura e influente.",
    results: [
      "Apresentar ideias sem se perder no raciocínio",
      "Controlar voz trêmula, ansiedade e branco na hora H",
      "Usar postura, pausas e entonação para prender atenção",
      "Falar com firmeza em reuniões, vendas, vídeos e entrevistas",
    ],
    sideLabel: "Para quem é",
    sideText:
      "Profissionais, líderes, vendedores, empreendedores e pessoas que cansaram de falar menos do que sabem.",
    sideCta: "Quero destravar minha comunicação",
  },
  video: {
    sectionLabel: "Curso de Oratória com Método VozUP",
    headingLine1: "Mais rápido porque você treina desde a primeira aula.",
    intro:
      "O curso de oratória da VozUP acelera a evolução com prática constante, correção imediata e repetição guiada, entregando resultados reais em muito menos tempo.",
    cardOneTitle: "Menos teoria solta",
    cardOneText: "Mais exercícios aplicados ao seu objetivo real.",
    cardTwoTitle: "Mais evolução percebida",
    cardTwoText: "Você fala, ajusta e melhora no próprio treino.",
    steps: [
      { title: "Voz", text: "respiração, dicção, volume, ritmo e pausas" },
      { title: "Corpo", text: "postura, presença, gestos e contato visual" },
      { title: "Mensagem", text: "roteiro, clareza, histórias e argumentação" },
      { title: "Emoção", text: "ansiedade, confiança e liderança sob pressão" },
    ],
  },
  testimonials: {
    sectionLabel: "Aplicações reais",
    headingLine1: "Oratória para os momentos que movem carreira e negócio.",
    intro:
      "O treino não fica preso ao palco. Ele é aplicado nas conversas que você realmente precisa enfrentar.",
    moments: [
      "apresentar projetos",
      "liderar reuniões",
      "gravar vídeos",
      "vender ideias",
      "participar de entrevistas",
      "conduzir conversas difíceis",
    ],
  },
  trainers: {
    sectionLabel: "Curso de Oratória e Liderança Emocional",
    headingLine1: "Você não assiste uma transformação.",
    headingLine2: "Você ensaia ela.",
    intro:
      "A proposta do curso de oratória da VozUP é colocar o aluno em movimento: falar, receber feedback, ajustar e repetir. É assim que a confiança deixa de ser promessa e vira comportamento real, treinado e sustentável.",
  },
  trainingContent: {
    sectionLabel: "Conteúdo e Vantagem do Curso de Oratória",
    headingLine1: "O treino que faz a fala evoluir mais rápido.",
    intro:
      "O diferencial do curso de oratória da VozUP está em reduzir o tempo entre aprender, praticar, corrigir e aplicar na vida real, entregando evolução mais rápida do que os métodos tradicionais do mercado.",
    modules: [
      "Abrir uma fala com impacto",
      "Apresentar ideias com começo, meio e fim",
      "Usar pausas, volume e entonação",
      "Improvisar sem perder a linha",
      "Responder perguntas difíceis",
      "Transmitir autoridade sem parecer artificial",
    ],
    advantages: [
      {
        title: "Mais rápido",
        text: "Você pratica desde o primeiro encontro, sem esperar semanas de teoria.",
      },
      {
        title: "Mais eficaz",
        text: "Feedback direto no seu jeito de falar, com ajustes aplicados na hora.",
      },
      {
        title: "Mais objetivo",
        text: "Treinos conectados ao seu uso real: carreira, vendas, liderança e vídeos.",
      },
    ],
    extras: [
      "Mais segurança em reuniões e entrevistas",
      "Comunicação mais clara em conversas difíceis",
      "Presença para liderar e defender ideias",
    ],
  },
  pricing: {
    headingLine1: "Conheça o curso de oratória da VozUP antes de decidir.",
    intro:
      "Converse com a equipe, entenda o melhor caminho para o seu objetivo e conheça a escola por dentro antes de se matricular no curso de oratória.",
    includes: [
      "Consultoria para conhecer a metodologia do curso de oratória.",
      "Diagnóstico inicial de comunicação",
      "Orientação sobre turma, agenda e formato ideal",
      "Atendimento presencial no Tatuapé",
    ],
    rightHeading: "Sua comunicação não melhora parada.",
  },
  faq: defaultFaqItems,
  seo: {
    title: "Curso de Oratória Presencial | Escola VozUP no Tatuapé",
    description:
      "Escola VozUP de oratória e liderança emocional no Tatuapé, São Paulo. Treine fala em público, voz, presença e comunicação com método prático.",
  },
};

/** Rota /p/1 — dor específica: travar ao se comunicar em situações de venda. */
export const salesLandingPageContent: LandingPageContent = {
  ...defaultLandingPageContent,
  hero: {
    titleLine1: "Melhore sua oratória",
    titleLine2: "e venda com mais segurança.",
    subtitle:
      "Você trava na hora de explicar, se posicionar ou falar com clareza numa conversa comercial? O curso de oratória da VozUP treina comunicação, presença e segurança para você se expressar melhor, sem parecer forçado.",
    highlights: [
      "Mais segurança ao falar",
      "Método prático",
      "Aulas presenciais",
      "Ambiente acolhedor",
      "Exercícios reais",
    ],
    ctaLabel: "Quero vender com mais segurança",
  },
  problems: {
    sectionLabel: "O que trava a venda",
    headingLine1: "A comunicação emperra",
    headingLine2: "bem na hora de se posicionar.",
    intro:
      "O foco não é ensinar técnica de vendas: é treinar fala, clareza, postura, voz e controle emocional para você comunicar melhor o valor do que faz.",
    items: [
      {
        title: "Você trava na hora de explicar o que vende?",
        text: "A ideia fica confusa, longa ou sem a força que deveria ter.",
      },
      {
        title: "Sua voz perde firmeza durante a conversa?",
        text: "Mesmo dominando o assunto, você sente que não transmite toda a confiança que poderia.",
      },
      {
        title: "Você evita se expor pra não parecer insistente?",
        text: "O medo de ser julgado ou falar errado faz você se esconder em momentos importantes.",
      },
      {
        title: "Curso de oratória genérico não resolve!",
        text: "Sem prática e feedback, a teoria não vira segurança. O curso de oratória da VozUP treina sua fala para situações reais da sua rotina.",
      },
    ],
    extraCta: "Quero destravar minha comunicação",
  },
  consequences: {
    sectionLabel: "Por que isso importa",
    headingLine1: "Sua comunicação",
    headingLine2: "decide o tamanho da sua venda.",
    intro:
      "Como você se expressa influencia diretamente o que você conquista — não só no fechamento da venda em si.",
    items: [
      {
        title: "Crescimento profissional",
        text: "Quem se comunica com clareza é lembrado e chamado pras próximas oportunidades.",
      },
      {
        title: "Liderança",
        text: "Times seguem com mais naturalidade quem fala com segurança.",
      },
      {
        title: "Relacionamentos",
        text: "Conversas mais claras evitam ruído e desgaste desnecessário.",
      },
      {
        title: "Entrevistas",
        text: "A primeira impressão profissional passa pela forma como você se expressa.",
      },
      {
        title: "Vendas",
        text: "Clareza e presença mudam como o cliente recebe sua proposta.",
      },
      {
        title: "Networking",
        text: "Comunicação segura abre portas em conversas rápidas e decisivas.",
      },
      {
        title: "Confiança",
        text: "Falar bem reforça a confiança que você tem em si mesmo, dentro e fora do trabalho.",
      },
    ],
  },
  transformation: {
    sectionLabel: "A mudança que você sente",
    heading: "De onde você está pra onde quer chegar.",
    beforeTitle: "Hoje",
    beforeItems: [
      "Medo de se posicionar",
      "Ansiedade antes de falar",
      "Insegurança na hora de vender",
      "Ideias desorganizadas",
      "Dificuldade pra convencer",
    ],
    afterTitle: "Depois do treino",
    afterItems: [
      "Segurança pra se posicionar",
      "Clareza mesmo sob pressão",
      "Confiança na hora de vender",
      "Comunicação objetiva",
      "Mais poder de persuasão",
    ],
  },
  benefits: {
    sectionLabel: "O que você ganha",
    heading: "Benefícios práticos pro seu dia a dia.",
    intro:
      "Resultados que aparecem nas suas próprias conversas, não só na teoria.",
    items: [
      {
        title: "Organização das ideias",
        text: "Você estrutura o que precisa dizer antes de abrir a boca.",
      },
      {
        title: "Mais segurança ao falar",
        text: "A voz e a postura acompanham o que você realmente sabe.",
      },
      {
        title: "Controle do nervosismo",
        text: "Menos ansiedade na hora de se posicionar.",
      },
      {
        title: "Postura mais firme",
        text: "Presença que transmite confiança sem parecer forçado.",
      },
      {
        title: "Comunicação mais clara",
        text: "Menos ruído, mais entendimento na conversa.",
      },
      {
        title: "Mais poder de persuasão",
        text: "Você comunica valor com mais naturalidade.",
      },
      {
        title: "Desenvolvimento da liderança",
        text: "Mais firmeza pra conduzir reuniões e conversas.",
      },
      {
        title: "Mais confiança pra gravar vídeos",
        text: "Naturalidade também na frente da câmera.",
      },
    ],
    cta: "Quero desenvolver minha comunicação",
  },
  aboutTraining: {
    ...defaultLandingPageContent.aboutTraining,
    sectionLabel: "Venda também é comunicação",
    headingLine1: "Fala firme",
    headingLine2: "vem de treino.",
    intro:
      "Você fala, recebe direção especializada, ajusta postura, voz e clareza — e repete até ganhar segurança para se expressar em contextos comerciais.",
    results: [
      "Apresentar ideias sem se perder no raciocínio",
      "Controlar voz trêmula, ansiedade e branco na hora H",
      "Usar postura, pausas e entonação para prender atenção",
      "Falar com firmeza em reuniões, atendimentos, vídeos e entrevistas",
    ],
    sideLabel: "Resultado direto",
    sideText:
      "Você sai de cada aula com uma comunicação mais segura pra aplicar na próxima conversa de venda.",
    sideCta: "Quero treinar minha comunicação",
  },
  video: {
    ...defaultLandingPageContent.video,
    sectionLabel: "Curso de Oratória com Método VozUP",
    headingLine1: "Mais rápido porque você treina sua fala desde a primeira aula.",
    intro:
      "Prática constante, correção imediata e repetição guiada aceleram sua evolução — com mais clareza e presença em situações comerciais.",
    cardOneTitle: "Menos improviso inseguro",
    cardOneText: "Mais clareza para organizar e expressar suas ideias.",
    cardTwoTitle: "Mais presença na fala",
    cardTwoText: "Você fala, ajusta e melhora no próprio treino.",
    steps: [
      { title: "Voz", text: "respiração, dicção, volume, ritmo e pausas" },
      { title: "Corpo", text: "postura, presença, gestos e contato visual" },
      { title: "Mensagem", text: "roteiro, clareza, histórias e argumentação" },
      { title: "Emoção", text: "ansiedade, confiança e liderança sob pressão" },
    ],
  },
  testimonials: {
    ...defaultLandingPageContent.testimonials,
    sectionLabel: "Para quem é o curso",
    headingLine1: "Feito pra quem decidiu comunicar melhor na hora de vender.",
    intro: "Se você se identifica com algum desses perfis, o treino é pra você.",
    moments: [
      "Vendedores que travam na abordagem",
      "Empreendedores que apresentam propostas",
      "Profissionais liberais que atendem clientes",
      "Quem lidera reuniões comerciais",
      "Quem grava conteúdo de vendas",
      "Quem quer crescer na carreira comercial",
    ],
  },
  trainers: {
    ...defaultLandingPageContent.trainers,
    headingLine1: "Você ensaia",
    headingLine2: "cada mudança, na prática.",
  },
  trainingContent: {
    ...defaultLandingPageContent.trainingContent,
    headingLine1: "O treino que faz sua fala evoluir mais rápido.",
    intro:
      "O diferencial: menos tempo entre aprender, praticar, corrigir e aplicar na vida real — inclusive para explicar melhor o valor do que você faz.",
    advantages: [
      {
        title: "Mais rápido",
        text: "Você pratica desde o primeiro encontro, sem esperar semanas de teoria.",
      },
      {
        title: "Mais eficaz",
        text: "Feedback direto no seu jeito de falar, com ajustes aplicados na hora.",
      },
      {
        title: "Mais objetivo",
        text: "Treinos conectados ao seu uso real: carreira, vendas, liderança e vídeos.",
      },
    ],
    extras: [
      "Mais segurança em reuniões e entrevistas",
      "Comunicação mais clara em conversas difíceis",
      "Presença para liderar e defender ideias",
    ],
  },
  howClassesWork: {
    sectionLabel: "Como funcionam as aulas",
    heading: "Do primeiro contato até você aplicar na prática.",
    intro: "Sem mistério: veja exatamente o que acontece depois que você agenda.",
    steps: [
      {
        title: "Agendamento",
        text: "Você marca seu horário e recebe a confirmação pelo WhatsApp.",
      },
      {
        title: "Primeiro contato",
        text: "A equipe entende seu momento e indica a melhor turma pra você.",
      },
      {
        title: "Exercícios práticos",
        text: "Você fala desde a primeira aula, em situações reais de comunicação.",
      },
      {
        title: "Feedback individual",
        text: "Ajustes no seu jeito de falar, aplicados na hora.",
      },
      {
        title: "Evolução contínua",
        text: "Você repete, pratica e sente a segurança crescer aula após aula.",
      },
    ],
  },
  differentials: {
    sectionLabel: "Por que a VozUP",
    heading: "Diferenciais que fazem a diferença no resultado.",
    intro: "Sem depoimento pronto: só o que realmente entregamos, aula a aula.",
    items: [
      {
        title: "Método prático",
        text: "Você pratica desde o primeiro encontro, sem esperar semanas de teoria.",
      },
      {
        title: "Exercícios presenciais",
        text: "Treino real, com gente de verdade, não só teoria na tela.",
      },
      {
        title: "Feedback personalizado",
        text: "Ajustes no seu jeito de falar, não um roteiro genérico.",
      },
      {
        title: "Ambiente acolhedor",
        text: "Espaço pensado pra você errar, ajustar e evoluir sem julgamento.",
      },
      {
        title: "Aprendizado progressivo",
        text: "Cada aula constrói em cima da anterior, no seu ritmo.",
      },
      {
        title: "Aplicação em situações reais",
        text: "O treino é conectado com o que você realmente vive no trabalho.",
      },
    ],
    cta: "Quero conhecer o método",
  },
  pricing: {
    ...defaultLandingPageContent.pricing,
    headingLine1: "Conheça o curso de oratória da VozUP antes de decidir.",
    intro:
      "Converse com a equipe, entenda como o treino ajuda sua comunicação profissional e conheça a escola antes de matricular.",
    includes: [
      "Consultoria para conhecer a metodologia do curso de oratória.",
      "Diagnóstico inicial de comunicação",
      "Orientação sobre turma, agenda e formato ideal",
      "Atendimento presencial no Tatuapé",
    ],
    rightHeading: "Sua comunicação não melhora parada.",
  },
  faq: [
    {
      question: "O curso de oratória da VozUP ajuda quem trava na hora de vender?",
      answer:
        "Sim. O curso não ensina técnica de vendas; ele treina comunicação, presença, voz, clareza e segurança para que você consiga se expressar melhor em situações profissionais, inclusive comerciais.",
    },
    {
      question: "Preciso ser vendedor profissional para fazer o curso?",
      answer:
        "Não. O curso atende profissionais, líderes, empreendedores e pessoas que querem comunicar melhor suas ideias, seu trabalho e seu valor.",
    },
    {
      question: "O curso ajuda quem tem vergonha de oferecer ou chamar o cliente?",
      answer:
        "Ajuda na parte de comunicação e segurança emocional. A proposta é treinar a fala de forma prática para reduzir insegurança, melhorar clareza e aumentar presença em conversas importantes.",
    },
    {
      question: "Preciso decorar um discurso ou script de vendas?",
      answer:
        "Não. O treino trabalha sua comunicação natural — clareza, voz, postura e organização das ideias — para você falar com segurança sem depender de um roteiro decorado.",
    },
    {
      question: "As aulas são só teoria ou eu pratico de verdade?",
      answer:
        "São práticas desde a primeira aula. Você fala, recebe feedback individual e ajusta na hora, em vez de só assistir a conteúdo teórico.",
    },
    {
      question: "Como é a primeira aula?",
      answer:
        "Começa com um diagnóstico do seu nível atual de comunicação e os primeiros exercícios práticos de fala, já com orientação da equipe.",
    },
    {
      question: "Vou precisar falar sozinho na frente dos outros?",
      answer:
        "Sim, mas de forma gradual e com apoio do instrutor e da turma — é justamente essa prática guiada que constrói a segurança.",
    },
    {
      question: "Existe acompanhamento depois de cada aula?",
      answer:
        "Sim. O feedback é individual e aplicado aula a aula, acompanhando sua evolução ao longo do treino.",
    },
    ...defaultFaqItems.slice(1, 2),
    ...defaultFaqItems.slice(4),
  ],
  seo: {
    title: "Curso de Oratória para Quem Trava na Hora de Vender | VozUP",
    description:
      "Curso de oratória presencial da Escola VozUP para quem trava em conversas profissionais e comerciais. Treine clareza, presença, voz e segurança no Tatuapé.",
  },
};

/** Rota /p/2 — dor específica: travar ao gravar vídeos e aparecer na internet. */
export const videoRecordingLandingPageContent: LandingPageContent = {
  ...defaultLandingPageContent,
  hero: {
    titleLine1: "Grave vídeos com mais segurança",
    titleLine2: "sem travar na câmera.",
    subtitle:
      "Você trava na hora de gravar, se ver na tela ou falar com naturalidade? O curso de oratória da VozUP treina comunicação, presença e segurança para você se expressar melhor diante da câmera.",
    highlights: [
      "Mais naturalidade ao falar",
      "Método prático",
      "Aulas presenciais",
      "Ambiente acolhedor",
      "Exercícios reais",
    ],
    ctaLabel: "Quero perder a trava na câmera",
  },
  problems: {
    sectionLabel: "O que trava na hora de gravar",
    headingLine1: "A câmera liga",
    headingLine2: "e a naturalidade trava.",
    intro:
      "O foco não é ensinar algoritmo, edição ou estratégia de conteúdo: é treinar fala, clareza, postura, voz e controle emocional para você se comunicar melhor quando precisa aparecer, gravar ou falar para uma audiência.",
    items: [
      {
        title: "Você sabe o que quer dizer, mas trava na hora de gravar?",
        text: "A fala fica dura, acelerada ou confusa assim que a câmera liga.",
      },
      {
        title: "Você trava na hora de se ver gravado?",
        text: "Assistir ao próprio vídeo gera vergonha e vontade de apagar tudo antes de publicar.",
      },
      {
        title: "A câmera aumenta sua ansiedade?",
        text: "Basta apertar gravar para a voz mudar, o corpo endurecer e a naturalidade sumir.",
      },
      {
        title: "Curso de oratória genérico não resolve!",
        text: "Sem prática e feedback, a teoria não vira segurança. O curso de oratória da VozUP treina sua fala para situações reais, inclusive quando você precisa aparecer em vídeo.",
      },
    ],
    extraCta: "Quero gravar com mais naturalidade",
  },
  consequences: {
    sectionLabel: "Por que isso importa",
    headingLine1: "Sua comunicação",
    headingLine2: "decide o alcance do que você grava.",
    intro:
      "Como você se comunica na câmera influencia diretamente o que você conquista — não só nos vídeos em si.",
    items: [
      {
        title: "Crescimento profissional",
        text: "Quem se comunica bem em vídeo é lembrado e indicado pra novas oportunidades.",
      },
      {
        title: "Autoridade",
        text: "Aparecer com naturalidade reforça sua imagem como referência no que você faz.",
      },
      {
        title: "Relacionamentos",
        text: "Vídeos mais claros aproximam seu público e evitam ruído na comunicação.",
      },
      {
        title: "Entrevistas",
        text: "A forma como você se expressa em vídeo também é sua carta de apresentação profissional.",
      },
      {
        title: "Vendas",
        text: "Clareza e presença em vídeo mudam como as pessoas recebem o que você oferece.",
      },
      {
        title: "Networking",
        text: "Aparecer com segurança em vídeo abre portas com outras pessoas e marcas.",
      },
      {
        title: "Confiança",
        text: "Gravar bem reforça a confiança que você tem em si, dentro e fora da tela.",
      },
    ],
  },
  transformation: {
    sectionLabel: "A mudança que você sente",
    heading: "De onde você está pra onde quer chegar.",
    beforeTitle: "Hoje",
    beforeItems: [
      "Trava assim que a câmera liga",
      "Vergonha de se ver gravado",
      "Ansiedade na hora de gravar",
      "Fala dura e sem naturalidade",
      "Vídeos que você acaba nem publicando",
    ],
    afterTitle: "Depois do treino",
    afterItems: [
      "Naturalidade diante da câmera",
      "Segurança pra se ver gravado",
      "Calma na hora de gravar",
      "Fala fluida e natural",
      "Vídeos publicados com confiança",
    ],
  },
  benefits: {
    sectionLabel: "O que você ganha",
    heading: "Benefícios práticos pro seu dia a dia.",
    intro:
      "Resultados que aparecem nos seus próprios vídeos, não só na teoria.",
    items: [
      {
        title: "Organização das ideias",
        text: "Você estrutura o que precisa dizer antes de apertar gravar.",
      },
      {
        title: "Mais naturalidade ao falar",
        text: "A voz e a postura acompanham o que você realmente sabe.",
      },
      {
        title: "Controle do nervosismo",
        text: "Menos ansiedade assim que a câmera liga.",
      },
      {
        title: "Postura mais firme",
        text: "Presença que transmite confiança sem parecer forçado.",
      },
      {
        title: "Comunicação mais clara",
        text: "Menos cortes, mais fluidez na gravação.",
      },
      {
        title: "Mais poder de persuasão",
        text: "Você comunica valor com mais naturalidade pro seu público.",
      },
      {
        title: "Desenvolvimento da liderança",
        text: "Mais firmeza também fora das câmeras, em reuniões e conversas.",
      },
      {
        title: "Mais confiança pra aparecer ao vivo",
        text: "Naturalidade também em lives e stories.",
      },
    ],
    cta: "Quero gravar com mais confiança",
  },
  aboutTraining: {
    ...defaultLandingPageContent.aboutTraining,
    sectionLabel: "Vídeo também é comunicação",
    headingLine1: "Fala natural",
    headingLine2: "vem de treino.",
    intro:
      "O curso de oratória da VozUP leva sua comunicação para a prática: você fala, recebe direção especializada, ajusta postura, voz e clareza, e repete até ganhar mais segurança para se expressar em contextos profissionais, inclusive diante da câmera.",
    sideLabel: "Resultado direto",
    sideText:
      "Você sai de cada aula com mais naturalidade pra aplicar no próximo vídeo que gravar.",
    sideCta: "Quero treinar minha comunicação",
  },
  video: {
    ...defaultLandingPageContent.video,
    headingLine1: "Mais rápido porque você treina sua fala desde a primeira aula.",
    intro:
      "O curso de oratória da VozUP acelera a evolução com prática constante, correção imediata e repetição guiada, ajudando você a falar com mais clareza e presença também quando precisa gravar vídeos.",
    cardOneTitle: "Menos rigidez na fala",
    cardOneText: "Mais clareza para organizar e expressar suas ideias.",
    cardTwoTitle: "Mais presença diante da câmera",
    cardTwoText: "Você fala, ajusta e melhora no próprio treino.",
  },
  howClassesWork: {
    sectionLabel: "Como funcionam as aulas",
    heading: "Do primeiro contato até você aplicar na prática.",
    intro: "Sem mistério: veja exatamente o que acontece depois que você agenda.",
    steps: [
      {
        title: "Agendamento",
        text: "Você marca seu horário e recebe a confirmação pelo WhatsApp.",
      },
      {
        title: "Primeiro contato",
        text: "A equipe entende seu momento e indica a melhor turma pra você.",
      },
      {
        title: "Exercícios práticos",
        text: "Você fala desde a primeira aula, em situações reais de comunicação diante de outras pessoas.",
      },
      {
        title: "Feedback individual",
        text: "Ajustes no seu jeito de falar, aplicados na hora.",
      },
      {
        title: "Evolução contínua",
        text: "Você repete, pratica e sente a naturalidade crescer aula após aula.",
      },
    ],
  },
  testimonials: {
    ...defaultLandingPageContent.testimonials,
    sectionLabel: "Para quem é o curso",
    headingLine1: "Feito pra quem decidiu aparecer com mais naturalidade.",
    intro: "Se você se identifica com algum desses perfis, o treino é pra você.",
    moments: [
      "Criadores de conteúdo que travam na câmera",
      "Influenciadores que querem mais naturalidade",
      "Especialistas que gravam aulas e cursos",
      "Empreendedores que divulgam o próprio trabalho",
      "Quem lidera reuniões e apresentações",
      "Quem quer crescer gravando vídeos",
    ],
  },
  trainers: {
    ...defaultLandingPageContent.trainers,
    headingLine1: "Você ensaia",
    headingLine2: "cada mudança, na prática.",
  },
  trainingContent: {
    ...defaultLandingPageContent.trainingContent,
    intro:
      "O diferencial do curso de oratória da VozUP está em reduzir o tempo entre aprender, praticar, corrigir e aplicar na vida real, inclusive nos momentos em que você precisa falar melhor diante da câmera.",
  },
  differentials: {
    sectionLabel: "Por que a VozUP",
    heading: "Diferenciais que fazem a diferença no resultado.",
    intro: "Sem depoimento pronto: só o que realmente entregamos, aula a aula.",
    items: [
      {
        title: "Método prático",
        text: "Você pratica desde o primeiro encontro, sem esperar semanas de teoria.",
      },
      {
        title: "Exercícios presenciais",
        text: "Treino real, com gente de verdade, não só teoria na tela.",
      },
      {
        title: "Feedback personalizado",
        text: "Ajustes no seu jeito de falar, não um roteiro genérico.",
      },
      {
        title: "Ambiente acolhedor",
        text: "Espaço pensado pra você errar, ajustar e evoluir sem julgamento.",
      },
      {
        title: "Aprendizado progressivo",
        text: "Cada aula constrói em cima da anterior, no seu ritmo.",
      },
      {
        title: "Aplicação em situações reais",
        text: "O treino é conectado com o que você realmente vive na frente da câmera.",
      },
    ],
    cta: "Quero conhecer o método",
  },
  pricing: {
    ...defaultLandingPageContent.pricing,
    intro:
      "Converse com a equipe, entenda como o treino pode ajudar sua comunicação também em vídeo e conheça a escola por dentro antes de se matricular no curso de oratória.",
  },
  faq: [
    {
      question: "O curso de oratória da VozUP ajuda quem trava para gravar vídeos?",
      answer:
        "Sim. O curso não ensina algoritmo, edição ou produção de conteúdo; ele treina comunicação, presença, voz, clareza e segurança para que você consiga se expressar melhor também diante da câmera.",
    },
    {
      question: "Preciso ser influencer para fazer o curso?",
      answer:
        "Não. O curso atende criadores, profissionais, empreendedores, especialistas e pessoas que querem aparecer com mais segurança em vídeos, reuniões, apresentações e entrevistas.",
    },
    {
      question: "O curso ajuda quem não gosta de se ver gravado?",
      answer:
        "Ajuda na parte de comunicação e segurança emocional. A proposta é treinar a fala de forma prática para reduzir insegurança, melhorar presença e aumentar naturalidade ao se expor.",
    },
    {
      question: "Preciso ter um roteiro decorado pra gravar?",
      answer:
        "Não. O treino trabalha sua comunicação natural — clareza, voz, postura e organização das ideias — para você falar com segurança sem depender de um roteiro decorado.",
    },
    {
      question: "As aulas são só teoria ou eu pratico de verdade?",
      answer:
        "São práticas desde a primeira aula. Você fala, recebe feedback individual e ajusta na hora, em vez de só assistir a conteúdo teórico.",
    },
    {
      question: "Como é a primeira aula?",
      answer:
        "Começa com um diagnóstico do seu nível atual de comunicação e os primeiros exercícios práticos de fala, já com orientação da equipe.",
    },
    {
      question: "Vou precisar falar na frente dos outros durante as aulas?",
      answer:
        "Sim, mas de forma gradual e com apoio do instrutor e da turma — é justamente essa prática guiada que constrói a naturalidade que depois aparece na câmera.",
    },
    {
      question: "Existe acompanhamento depois de cada aula?",
      answer:
        "Sim. O feedback é individual e aplicado aula a aula, acompanhando sua evolução ao longo do treino.",
    },
    ...defaultFaqItems.slice(1, 2),
    ...defaultFaqItems.slice(4),
  ],
  seo: {
    title: "Curso de Oratória para Quem Trava ao Gravar Vídeos | VozUP",
    description:
      "Curso de oratória presencial da Escola VozUP para quem trava ao gravar vídeos ou aparecer na internet. Treine clareza, presença, voz e segurança no Tatuapé.",
  },
};

/** Rota /p/3 — dor específica: travar ao falar em público. */
export const publicSpeakingLandingPageContent: LandingPageContent = {
  ...defaultLandingPageContent,
  hero: {
    titleLine1: "Fale em público com mais segurança",
    titleLine2: "sem travar na hora H.",
    subtitle:
      "Você sente ansiedade, branco ou insegurança na hora de falar para mais pessoas? O curso de oratória da VozUP treina comunicação, presença e controle emocional para você se expressar melhor em público.",
    highlights: [
      "Mais segurança ao falar",
      "Método prático",
      "Aulas presenciais",
      "Ambiente acolhedor",
      "Exercícios reais",
    ],
    ctaLabel: "Quero perder o medo do palco",
  },
  problems: {
    sectionLabel: "O que trava na hora H",
    headingLine1: "A fala trava",
    headingLine2: "bem na hora de subir ao palco.",
    intro:
      "Falar em público é trabalhado como habilidade prática: você treina voz, postura, clareza, organização da mensagem e controle emocional para se comunicar melhor em apresentações, eventos e situações de exposição.",
    items: [
      {
        title: "Você sabe o que falar, mas trava na hora de colocar pra fora?",
        text: "O raciocínio se perde ou a fala sai insegura assim que a atenção vira pra você.",
      },
      {
        title: "A ansiedade domina antes de você falar?",
        text: "Voz trêmula, branco, coração acelerado e vontade de evitar qualquer exposição.",
      },
      {
        title: "Você sente que poderia se posicionar melhor?",
        text: "Mesmo dominando o assunto, sua presença não transmite toda a segurança que você gostaria.",
      },
      {
        title: "Curso de oratória genérico não resolve!",
        text: "Sem prática e feedback, a teoria não vira segurança. O curso de oratória da VozUP treina sua fala em situações reais de exposição.",
      },
    ],
    extraCta: "Quero perder o medo de falar em público",
  },
  consequences: {
    sectionLabel: "Por que isso importa",
    headingLine1: "Sua comunicação",
    headingLine2: "decide o quanto você é ouvido.",
    intro:
      "Como você se comunica em público influencia diretamente o que você conquista — não só na apresentação em si.",
    items: [
      {
        title: "Crescimento profissional",
        text: "Quem fala com clareza em público é lembrado e chamado pras próximas oportunidades.",
      },
      {
        title: "Liderança",
        text: "Grupos seguem com mais naturalidade quem fala com segurança.",
      },
      {
        title: "Relacionamentos",
        text: "Apresentações mais claras evitam ruído e desgaste desnecessário.",
      },
      {
        title: "Entrevistas",
        text: "A forma como você se posiciona em público também aparece numa entrevista.",
      },
      {
        title: "Vendas",
        text: "Clareza e presença mudam como a plateia recebe sua proposta.",
      },
      {
        title: "Networking",
        text: "Falar bem em público te coloca em evidência em eventos e conversas rápidas.",
      },
      {
        title: "Confiança",
        text: "Falar em público reforça a confiança que você tem em si, dentro e fora do palco.",
      },
    ],
  },
  transformation: {
    sectionLabel: "A mudança que você sente",
    heading: "De onde você está pra onde quer chegar.",
    beforeTitle: "Hoje",
    beforeItems: [
      "Medo de subir ao palco",
      "Ansiedade antes de falar",
      "Branco na hora H",
      "Ideias desorganizadas",
      "Dificuldade pra prender atenção",
    ],
    afterTitle: "Depois do treino",
    afterItems: [
      "Segurança pra subir ao palco",
      "Clareza mesmo sob pressão",
      "Presença de espírito na hora H",
      "Comunicação objetiva",
      "Mais poder de persuasão",
    ],
  },
  benefits: {
    sectionLabel: "O que você ganha",
    heading: "Benefícios práticos pro seu dia a dia.",
    intro:
      "Resultados que aparecem nas suas próprias apresentações, não só na teoria.",
    items: [
      {
        title: "Organização das ideias",
        text: "Você estrutura sua fala antes de subir ao palco.",
      },
      {
        title: "Mais segurança ao falar",
        text: "A voz e a postura acompanham o que você realmente sabe.",
      },
      {
        title: "Controle do nervosismo",
        text: "Menos ansiedade na hora de falar pra um grupo.",
      },
      {
        title: "Postura mais firme",
        text: "Presença que transmite confiança sem parecer forçado.",
      },
      {
        title: "Comunicação mais clara",
        text: "Menos ruído, mais entendimento na plateia.",
      },
      {
        title: "Mais poder de persuasão",
        text: "Você comunica valor com mais naturalidade.",
      },
      {
        title: "Desenvolvimento da liderança",
        text: "Mais firmeza pra conduzir apresentações e conversas.",
      },
      {
        title: "Mais confiança pra gravar vídeos",
        text: "Naturalidade também na frente da câmera.",
      },
    ],
    cta: "Quero falar em público com mais segurança",
  },
  aboutTraining: {
    ...defaultLandingPageContent.aboutTraining,
    sectionLabel: "Falar em público é treino",
    headingLine1: "Presença firme",
    headingLine2: "vem de método.",
    intro:
      "O curso de oratória da VozUP leva a fala em público para a prática: você fala, recebe direção especializada, ajusta postura, voz e clareza, e repete até construir mais segurança para se expressar diante de outras pessoas.",
    sideLabel: "Resultado direto",
    sideText:
      "Você sai de cada aula com mais segurança pra aplicar na próxima vez que precisar falar em público.",
    sideCta: "Quero treinar minha comunicação",
  },
  video: {
    ...defaultLandingPageContent.video,
    headingLine1: "Mais rápido porque você treina sua fala desde a primeira aula.",
    intro:
      "O curso de oratória da VozUP acelera a evolução com prática constante, correção imediata e repetição guiada, ajudando você a falar com mais clareza e presença em situações de exposição.",
  },
  howClassesWork: {
    sectionLabel: "Como funcionam as aulas",
    heading: "Do primeiro contato até você aplicar na prática.",
    intro: "Sem mistério: veja exatamente o que acontece depois que você agenda.",
    steps: [
      {
        title: "Agendamento",
        text: "Você marca seu horário e recebe a confirmação pelo WhatsApp.",
      },
      {
        title: "Primeiro contato",
        text: "A equipe entende seu momento e indica a melhor turma pra você.",
      },
      {
        title: "Exercícios práticos",
        text: "Você fala desde a primeira aula, em situações reais de exposição diante de outras pessoas.",
      },
      {
        title: "Feedback individual",
        text: "Ajustes no seu jeito de falar, aplicados na hora.",
      },
      {
        title: "Evolução contínua",
        text: "Você repete, pratica e sente a segurança crescer aula após aula.",
      },
    ],
  },
  testimonials: {
    ...defaultLandingPageContent.testimonials,
    sectionLabel: "Para quem é o curso",
    headingLine1: "Feito pra quem decidiu falar em público com confiança.",
    intro: "Se você se identifica com algum desses perfis, o treino é pra você.",
    moments: [
      "Profissionais que apresentam projetos",
      "Líderes que conduzem reuniões e eventos",
      "Estudantes que apresentam trabalhos",
      "Empreendedores que palestram sobre o próprio negócio",
      "Quem participa de entrevistas importantes",
      "Quem quer perder o medo do palco",
    ],
  },
  trainers: {
    ...defaultLandingPageContent.trainers,
    headingLine1: "Você ensaia",
    headingLine2: "cada mudança, na prática.",
  },
  trainingContent: {
    ...defaultLandingPageContent.trainingContent,
    intro:
      "O diferencial do curso de oratória da VozUP está em reduzir o tempo entre aprender, praticar, corrigir e aplicar na vida real, inclusive nos momentos em que você precisa falar em público.",
  },
  differentials: {
    sectionLabel: "Por que a VozUP",
    heading: "Diferenciais que fazem a diferença no resultado.",
    intro: "Sem depoimento pronto: só o que realmente entregamos, aula a aula.",
    items: [
      {
        title: "Método prático",
        text: "Você pratica desde o primeiro encontro, sem esperar semanas de teoria.",
      },
      {
        title: "Exercícios presenciais",
        text: "Treino real, com gente de verdade, não só teoria na tela.",
      },
      {
        title: "Feedback personalizado",
        text: "Ajustes no seu jeito de falar, não um roteiro genérico.",
      },
      {
        title: "Ambiente acolhedor",
        text: "Espaço pensado pra você errar, ajustar e evoluir sem julgamento.",
      },
      {
        title: "Aprendizado progressivo",
        text: "Cada aula constrói em cima da anterior, no seu ritmo.",
      },
      {
        title: "Aplicação em situações reais",
        text: "O treino é conectado com o que você realmente vive quando precisa falar em público.",
      },
    ],
    cta: "Quero conhecer o método",
  },
  pricing: {
    ...defaultLandingPageContent.pricing,
    intro:
      "Converse com a equipe, entenda como o treino pode ajudar sua comunicação em público e conheça a escola por dentro antes de se matricular no curso de oratória.",
  },
  faq: [
    {
      question: "O curso de oratória da VozUP ajuda quem tem medo de falar em público?",
      answer:
        "Sim. O curso treina comunicação, presença, voz, clareza e segurança emocional para que você consiga se expressar melhor em situações de exposição.",
    },
    {
      question: "Preciso já conseguir falar em público para fazer o curso?",
      answer:
        "Não. O método parte do nível atual do aluno e evolui com exercícios práticos, feedback e repetição guiada.",
    },
    {
      question: "O curso ajuda com branco, voz trêmula e ansiedade?",
      answer:
        "Ajuda na parte de comunicação e controle emocional. A proposta é treinar a fala de forma prática para reduzir insegurança e aumentar presença nos momentos importantes.",
    },
    {
      question: "Tenho muita vergonha de falar na frente dos outros. O curso é indicado?",
      answer:
        "É justamente pra isso que o treino existe: reduzir a insegurança na prática, com apoio do instrutor e da turma, até você ganhar confiança real.",
    },
    {
      question: "Preciso decorar discursos ou apresentações?",
      answer:
        "Não. O treino trabalha sua comunicação natural — clareza, voz, postura e organização das ideias — para você falar com segurança sem depender de um texto decorado.",
    },
    {
      question: "As aulas são só teoria ou eu pratico de verdade?",
      answer:
        "São práticas desde a primeira aula. Você fala, recebe feedback individual e ajusta na hora, em vez de só assistir a conteúdo teórico.",
    },
    {
      question: "Como é a primeira aula?",
      answer:
        "Começa com um diagnóstico do seu nível atual de comunicação e os primeiros exercícios práticos de fala, já com orientação da equipe.",
    },
    {
      question: "Existe acompanhamento depois de cada aula?",
      answer:
        "Sim. O feedback é individual e aplicado aula a aula, acompanhando sua evolução ao longo do treino.",
    },
    ...defaultFaqItems.slice(1, 2),
    ...defaultFaqItems.slice(4),
  ],
  seo: {
    title: "Curso de Oratória para Falar em Público | Escola VozUP",
    description:
      "Curso de oratória presencial da Escola VozUP para quem trava ao falar em público. Treine clareza, presença, voz e segurança no Tatuapé.",
  },
};

/** Rota /p/4 — dor específica: travar ou falar pouco em reuniões. */
export const meetingsLandingPageContent: LandingPageContent = {
  ...defaultLandingPageContent,
  hero: {
    titleLine1: "Fale melhor em reuniões",
    titleLine2: "sem perder sua voz.",
    subtitle:
      "Você tem ideias, mas acaba falando pouco, se enrolando ou deixando outras pessoas dominarem a conversa? O curso de oratória da Escola VozUP treina sua comunicação, presença, voz e segurança para você se posicionar melhor em reuniões.",
    highlights: [
      "Mais clareza em reuniões",
      "Método prático",
      "Aulas presenciais",
      "Ambiente acolhedor",
      "Exercícios reais",
    ],
    ctaLabel: "Quero me posicionar nas reuniões",
  },
  problems: {
    sectionLabel: "O que trava na hora de falar",
    headingLine1: "Você trava",
    headingLine2: "bem na hora da reunião.",
    intro:
      "O foco não é ensinar política corporativa ou técnica de reunião: é treinar fala, clareza, postura, voz e controle emocional para você se comunicar melhor em reuniões, alinhamentos e conversas profissionais.",
    items: [
      {
        title: "Você pensa, mas acaba não falando na reunião?",
        text: "A insegurança faz você guardar a ideia pra si ou falar tarde demais.",
      },
      {
        title: "Sua fala fica confusa na hora de se posicionar?",
        text: "Quando chega sua vez, a mensagem sai longa, acelerada ou sem a clareza que você queria.",
      },
      {
        title: "Você perde espaço pra quem fala melhor?",
        text: "Outras pessoas se posicionam com mais firmeza, mesmo quando você domina o assunto.",
      },
      {
        title: "Curso de oratória genérico não resolve!",
        text: "Sem prática e feedback, a teoria não vira segurança. O curso de oratória da VozUP treina sua fala para situações reais da sua rotina profissional.",
      },
    ],
    extraCta: "Quero me posicionar melhor nas reuniões",
  },
  consequences: {
    sectionLabel: "Por que isso importa",
    headingLine1: "Sua comunicação",
    headingLine2: "decide seu espaço nas reuniões.",
    intro:
      "Como você se comunica em reuniões influencia diretamente o que você conquista — não só naquela conversa específica.",
    items: [
      {
        title: "Crescimento profissional",
        text: "Quem se posiciona com clareza em reuniões é lembrado e considerado pra novas responsabilidades.",
      },
      {
        title: "Liderança",
        text: "Times seguem com mais naturalidade quem fala com segurança nas reuniões.",
      },
      {
        title: "Relacionamentos",
        text: "Se posicionar com clareza evita ruído e desgaste com colegas e liderança.",
      },
      {
        title: "Entrevistas",
        text: "A forma como você se comunica em reuniões também aparece numa entrevista.",
      },
      {
        title: "Vendas",
        text: "Clareza e presença mudam como sua ideia é recebida em uma negociação.",
      },
      {
        title: "Networking",
        text: "Se posicionar bem em reuniões te coloca em evidência dentro da empresa.",
      },
      {
        title: "Confiança",
        text: "Falar com segurança em reuniões reforça a confiança que você tem em si.",
      },
    ],
  },
  transformation: {
    sectionLabel: "A mudança que você sente",
    heading: "De onde você está pra onde quer chegar.",
    beforeTitle: "Hoje",
    beforeItems: [
      "Guarda a ideia pra si",
      "Fala tarde demais ou não fala",
      "Insegurança na hora de se posicionar",
      "Ideias desorganizadas",
      "Perde espaço pra quem fala mais",
    ],
    afterTitle: "Depois do treino",
    afterItems: [
      "Se posiciona no momento certo",
      "Fala com clareza mesmo sob pressão",
      "Segurança pra se posicionar",
      "Comunicação objetiva",
      "Mais presença nas reuniões",
    ],
  },
  benefits: {
    sectionLabel: "O que você ganha",
    heading: "Benefícios práticos pro seu dia a dia.",
    intro:
      "Resultados que aparecem nas suas próprias reuniões, não só na teoria.",
    items: [
      {
        title: "Organização das ideias",
        text: "Você estrutura o que precisa dizer antes da reunião começar.",
      },
      {
        title: "Mais segurança ao falar",
        text: "A voz e a postura acompanham o que você realmente sabe.",
      },
      {
        title: "Controle do nervosismo",
        text: "Menos ansiedade na hora de se posicionar.",
      },
      {
        title: "Postura mais firme",
        text: "Presença que transmite confiança sem parecer forçado.",
      },
      {
        title: "Comunicação mais clara",
        text: "Menos ruído, mais entendimento entre você e o time.",
      },
      {
        title: "Mais poder de persuasão",
        text: "Você comunica suas ideias com mais naturalidade.",
      },
      {
        title: "Desenvolvimento da liderança",
        text: "Mais firmeza pra conduzir e participar de reuniões.",
      },
      {
        title: "Mais confiança pra gravar vídeos",
        text: "Naturalidade também na frente da câmera.",
      },
    ],
    cta: "Quero me posicionar melhor nas reuniões",
  },
  aboutTraining: {
    ...defaultLandingPageContent.aboutTraining,
    sectionLabel: "Reunião também é comunicação",
    headingLine1: "Presença clara",
    headingLine2: "vem de treino.",
    intro:
      "O curso de oratória da VozUP leva sua comunicação profissional para a prática: você fala, recebe direção especializada, ajusta postura, voz e clareza, e repete até ganhar mais segurança para se posicionar em reuniões e conversas importantes.",
    results: [
      "Apresentar ideias sem se perder no raciocínio",
      "Controlar voz trêmula, ansiedade e branco na hora H",
      "Usar postura, pausas e entonação para prender atenção",
      "Falar com firmeza em reuniões, apresentações, vídeos e entrevistas",
    ],
    sideLabel: "Resultado direto",
    sideText:
      "Você sai de cada aula com mais segurança pra se posicionar na próxima reunião.",
    sideCta: "Quero treinar minha comunicação",
  },
  video: {
    ...defaultLandingPageContent.video,
    headingLine1: "Mais rápido porque você treina sua fala desde a primeira aula.",
    intro:
      "O curso de oratória da VozUP acelera a evolução com prática constante, correção imediata e repetição guiada, ajudando você a falar com mais clareza e presença também em reuniões profissionais.",
    cardOneTitle: "Menos fala embolada",
    cardOneText: "Mais clareza para organizar e expressar suas ideias.",
    cardTwoTitle: "Mais presença profissional",
    cardTwoText: "Você fala, ajusta e melhora no próprio treino.",
  },
  howClassesWork: {
    sectionLabel: "Como funcionam as aulas",
    heading: "Do primeiro contato até você aplicar na prática.",
    intro: "Sem mistério: veja exatamente o que acontece depois que você agenda.",
    steps: [
      {
        title: "Agendamento",
        text: "Você marca seu horário e recebe a confirmação pelo WhatsApp.",
      },
      {
        title: "Primeiro contato",
        text: "A equipe entende seu momento e indica a melhor turma pra você.",
      },
      {
        title: "Exercícios práticos",
        text: "Você fala desde a primeira aula, em situações reais de comunicação profissional.",
      },
      {
        title: "Feedback individual",
        text: "Ajustes no seu jeito de falar, aplicados na hora.",
      },
      {
        title: "Evolução contínua",
        text: "Você repete, pratica e sente a segurança crescer aula após aula.",
      },
    ],
  },
  testimonials: {
    ...defaultLandingPageContent.testimonials,
    sectionLabel: "Para quem é o curso",
    headingLine1: "Feito pra quem decidiu se posicionar melhor nas reuniões.",
    intro: "Se você se identifica com algum desses perfis, o treino é pra você.",
    moments: [
      "Profissionais que participam de reuniões",
      "Líderes e gestores de equipe",
      "Quem apresenta projetos e resultados",
      "Empreendedores que lideram alinhamentos",
      "Quem quer crescer na carreira corporativa",
      "Quem sente que poderia se posicionar melhor",
    ],
  },
  trainers: {
    ...defaultLandingPageContent.trainers,
    headingLine1: "Você ensaia",
    headingLine2: "cada mudança, na prática.",
  },
  trainingContent: {
    ...defaultLandingPageContent.trainingContent,
    intro:
      "O diferencial do curso de oratória da VozUP está em reduzir o tempo entre aprender, praticar, corrigir e aplicar na vida real, inclusive nos momentos em que você precisa se posicionar melhor em reuniões.",
  },
  differentials: {
    sectionLabel: "Por que a VozUP",
    heading: "Diferenciais que fazem a diferença no resultado.",
    intro: "Sem depoimento pronto: só o que realmente entregamos, aula a aula.",
    items: [
      {
        title: "Método prático",
        text: "Você pratica desde o primeiro encontro, sem esperar semanas de teoria.",
      },
      {
        title: "Exercícios presenciais",
        text: "Treino real, com gente de verdade, não só teoria na tela.",
      },
      {
        title: "Feedback personalizado",
        text: "Ajustes no seu jeito de falar, não um roteiro genérico.",
      },
      {
        title: "Ambiente acolhedor",
        text: "Espaço pensado pra você errar, ajustar e evoluir sem julgamento.",
      },
      {
        title: "Aprendizado progressivo",
        text: "Cada aula constrói em cima da anterior, no seu ritmo.",
      },
      {
        title: "Aplicação em situações reais",
        text: "O treino é conectado com o que você realmente vive nas suas reuniões.",
      },
    ],
    cta: "Quero conhecer o método",
  },
  pricing: {
    ...defaultLandingPageContent.pricing,
    intro:
      "Converse com a equipe, entenda como o treino pode ajudar sua comunicação em reuniões e conheça a escola por dentro antes de se matricular no curso de oratória.",
  },
  faq: [
    {
      question: "O curso de oratória da VozUP ajuda quem fala pouco em reuniões?",
      answer:
        "Sim. O curso treina comunicação, presença, voz, clareza e segurança emocional para que você consiga se posicionar melhor em reuniões e conversas profissionais.",
    },
    {
      question: "O curso ensina técnica de reunião ou negociação?",
      answer:
        "Não. A proposta é treinar sua comunicação: como organizar ideias, falar com clareza, controlar a ansiedade e transmitir mais segurança.",
    },
    {
      question: "O curso ajuda quem se enrola quando precisa explicar uma ideia?",
      answer:
        "Ajuda. O treino trabalha estrutura da fala, ritmo, pausas, voz e presença para que sua mensagem fique mais clara.",
    },
    {
      question: "Preciso decorar o que vou falar na reunião?",
      answer:
        "Não. O treino trabalha sua comunicação natural — clareza, voz, postura e organização das ideias — para você se posicionar com segurança sem depender de um texto decorado.",
    },
    {
      question: "As aulas são só teoria ou eu pratico de verdade?",
      answer:
        "São práticas desde a primeira aula. Você fala, recebe feedback individual e ajusta na hora, em vez de só assistir a conteúdo teórico.",
    },
    {
      question: "Como é a primeira aula?",
      answer:
        "Começa com um diagnóstico do seu nível atual de comunicação e os primeiros exercícios práticos de fala, já com orientação da equipe.",
    },
    {
      question: "Vou precisar falar na frente dos outros durante as aulas?",
      answer:
        "Sim, mas de forma gradual e com apoio do instrutor e da turma — é justamente essa prática guiada que constrói a segurança que depois aparece nas suas reuniões.",
    },
    {
      question: "Existe acompanhamento depois de cada aula?",
      answer:
        "Sim. O feedback é individual e aplicado aula a aula, acompanhando sua evolução ao longo do treino.",
    },
    ...defaultFaqItems.slice(1, 2),
    ...defaultFaqItems.slice(4),
  ],
  seo: {
    title: "Curso de Oratória para Falar Melhor em Reuniões | VozUP",
    description:
      "Curso de oratória presencial da Escola VozUP para quem trava, fala pouco ou se enrola em reuniões. Treine clareza, presença, voz e segurança no Tatuapé.",
  },
};
