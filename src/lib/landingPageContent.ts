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
  };
  problems: {
    sectionLabel: string;
    headingLine1: string;
    headingLine2: string;
    intro: string;
    items: { title: string; text: string }[];
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
      "Aula experimental para conhecer a metodologia do curso de oratória.",
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

/** Rota /p/1 — dor específica: não conseguir gravar vídeos nem se ver gravado. */
export const videoRecordingLandingPageContent: LandingPageContent = {
  hero: {
    titleLine1: "Grave vídeos sem travar",
    titleLine2: "Com o Curso de Oratória da VozUP.",
    subtitle:
      "Apertar o gravar, se ver na tela e não conseguir continuar trava muita gente boa. O curso de oratória da Escola VozUP treina você a gravar e se assistir com naturalidade, sem cortes, sem travar e sem parecer artificial.",
    highlights: ["Menos cortes, mais naturalidade", "Método prático", "Aulas presenciais"],
  },
  problems: {
    sectionLabel: "O problema não é falta de conteúdo",
    headingLine1: "É travar na hora de gravar,",
    headingLine2: "e não gostar do que vê depois.",
    intro:
      "No curso de oratória da VozUP, a dificuldade de se gravar é treinada como habilidade prática: você aprende a organizar a fala, controlar a ansiedade de se ver gravado e repete até conseguir gravar e assistir aos próprios vídeos com naturalidade, sem travar e sem depender de roteiro decorado.",
    items: [
      {
        title: "Você trava assim que aperta gravar",
        text: "O raciocínio some, a fala fica robótica e o vídeo vira uma sequência de cortes.",
      },
      {
        title: "Você não suporta se ver gravado",
        text: "Reassistir o próprio vídeo dá vergonha, e a vontade é sempre de apagar e gravar de novo.",
      },
      {
        title: "Excesso de cortes e regravações",
        text: "Um vídeo simples vira horas de gravação porque nada sai natural de primeira.",
      },
      {
        title: "Curso de oratória genérico não resolve!",
        text: "Técnica de palco não ensina a lidar com a própria imagem gravada. O curso de oratória da VozUP treina você especificamente para gravar vídeos.",
      },
    ],
  },
  aboutTraining: {
    sectionLabel: "Naturalidade também se treina",
    headingLine1: "Não é sobre ter carisma.",
    headingLine2: "É sobre método.",
    intro:
      "O curso de oratória da VozUP tira a dificuldade de se gravar do campo da sorte e leva direto para a prática: você grava, recebe direção especializada, ajusta o que trava a comunicação e repete até criar conteúdo com naturalidade e segurança.",
    results: [
      "Gravar um vídeo sem travar ou depender de roteiro decorado",
      "Assistir aos próprios vídeos sem se julgar ou querer apagar tudo",
      "Usar postura, olhar e tom de voz para transmitir autoridade",
      "Gravar aulas, reels, lives e reuniões online com naturalidade",
    ],
    sideLabel: "Para quem é",
    sideText:
      "Criadores de conteúdo, produtores digitais, professores, especialistas e empreendedores que precisam gravar vídeos para vender, ensinar ou construir autoridade.",
    sideCta: "Quero gravar vídeos com naturalidade",
  },
  video: {
    sectionLabel: "Curso de Oratória para Quem Grava Conteúdo",
    headingLine1: "Mais rápido porque você treina se gravando desde a primeira aula.",
    intro:
      "O curso de oratória da VozUP acelera a evolução de quem precisa se gravar, com prática constante, correção imediata e repetição guiada, entregando vídeos mais naturais em muito menos tempo.",
    cardOneTitle: "Menos cortes na edição",
    cardOneText: "Mais fluência para gravar em blocos maiores, sem parar a cada frase.",
    cardTwoTitle: "Mais presença nas gravações",
    cardTwoText: "Você grava, revê e melhora a cada treino.",
    steps: [
      { title: "Voz", text: "respiração, dicção, ritmo e pausas para um áudio mais natural" },
      { title: "Corpo", text: "postura, gestos e enquadramento na hora de gravar" },
      { title: "Mensagem", text: "roteiro, clareza e argumentação sem parecer decorado" },
      { title: "Emoção", text: "vergonha de se ver gravado, ansiedade e segurança para assistir seus próprios vídeos" },
    ],
  },
  testimonials: {
    sectionLabel: "Aplicações reais",
    headingLine1: "Oratória para os vídeos que constroem sua autoridade e suas vendas.",
    intro:
      "O treino não fica preso ao palco. Ele é aplicado direto nas gravações que você precisa entregar.",
    moments: [
      "gravar reels e stories",
      "apresentar aulas online",
      "fazer lives com confiança",
      "gravar vídeos de vendas",
      "participar de reuniões por vídeo",
      "criar conteúdo autoral",
    ],
  },
  trainers: {
    sectionLabel: "Curso de Oratória para Criadores de Conteúdo",
    headingLine1: "Você não fica só assistindo tutorial.",
    headingLine2: "Você grava e ensaia de verdade.",
    intro:
      "A proposta do curso de oratória da VozUP é colocar o aluno em movimento: gravar, se assistir, receber feedback, ajustar e repetir. É assim que a naturalidade na hora de se gravar deixa de ser promessa e vira comportamento real, treinado e sustentável.",
  },
  trainingContent: {
    sectionLabel: "Conteúdo e Vantagem do Curso de Oratória para Vídeos",
    headingLine1: "O treino que faz sua gravação evoluir mais rápido.",
    intro:
      "O diferencial do curso de oratória da VozUP está em reduzir o tempo entre aprender, gravar, corrigir e aplicar de verdade nos seus conteúdos, entregando vídeos mais naturais do que os métodos tradicionais do mercado.",
    modules: [
      "Abrir um vídeo com impacto nos primeiros segundos",
      "Estruturar o conteúdo com começo, meio e fim",
      "Usar pausas, ritmo e entonação na gravação",
      "Falar sem decorar roteiro e sem travar",
      "Responder perguntas e comentários com segurança",
      "Transmitir autoridade nos vídeos sem parecer artificial",
    ],
    advantages: [
      {
        title: "Mais rápido",
        text: "Você grava desde o primeiro encontro, sem esperar semanas de teoria.",
      },
      {
        title: "Mais eficaz",
        text: "Feedback direto no seu jeito de se gravar, com ajustes aplicados na hora.",
      },
      {
        title: "Mais objetivo",
        text: "Treinos conectados ao seu uso real: reels, aulas, lives e vídeos de vendas.",
      },
    ],
    extras: [
      "Mais naturalidade em reels, stories e lives",
      "Comunicação mais clara em aulas e treinamentos gravados",
      "Presença para construir autoridade em vídeo",
    ],
  },
  pricing: {
    headingLine1: "Conheça o curso de oratória da VozUP feito para quem precisa gravar vídeos.",
    intro:
      "Converse com a equipe, entenda o melhor caminho para destravar sua comunicação em vídeo e conheça a escola por dentro antes de se matricular no curso de oratória.",
    includes: [
      "Aula experimental para conhecer a metodologia do curso de oratória.",
      "Diagnóstico inicial de comunicação ao se gravar",
      "Orientação sobre turma, agenda e formato ideal",
      "Atendimento presencial no Tatuapé",
    ],
    rightHeading: "Sua comunicação em vídeo não melhora parada.",
  },
  faq: [
    {
      question: "O curso de oratória da VozUP ajuda quem não consegue se ver gravado?",
      answer:
        "Sim. O curso de oratória da VozUP treina especificamente a dificuldade de se gravar e de assistir aos próprios vídeos, trabalhando vergonha, insegurança e a sensação de estar sendo julgado.",
    },
    {
      question: "As aulas do curso de oratória são presenciais?",
      answer:
        "A proposta principal do curso de oratória na unidade Tatuapé é presencial, na Rua Azevedo Soares, 1334. A disponibilidade de horários deve ser confirmada com a equipe.",
    },
    {
      question: "Preciso já gravar conteúdo para fazer o curso de oratória?",
      answer:
        "Não. O método do curso de oratória parte do nível atual do aluno, seja para quem nunca conseguiu se gravar ou para quem já cria conteúdo e quer eliminar cortes e travadas.",
    },
    {
      question: "O curso de oratória ajuda a reduzir os cortes na edição dos vídeos?",
      answer:
        "Ajuda. Ao treinar fluência, roteiro e naturalidade na hora de se gravar, o curso de oratória da VozUP reduz a quantidade de cortes e o tempo gasto na edição.",
    },
    {
      question: "Como faço para saber valores e turmas do curso de oratória?",
      answer:
        'Clique no botão "Quero me inscrever" (ou no CTA principal que direciona ao formulário) para acessar o formulário. Após o envio, nossa equipe entrará em contato para apresentar os horários disponíveis, esclarecer suas dúvidas e informar as condições atuais.',
    },
  ],
  seo: {
    title: "Curso de Oratória para Gravar Vídeos com Naturalidade | Escola VozUP",
    description:
      "Aprenda a gravar vídeos e se assistir sem travar. O curso de oratória da Escola VozUP treina você a criar conteúdo, reels e aulas com naturalidade e segurança, em aulas presenciais no Tatuapé, São Paulo.",
  },
};
