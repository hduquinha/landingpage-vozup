import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Brain,
  Briefcase,
  LayoutGrid,
  Lightbulb,
  MessageSquare,
  Mic,
  Sparkles,
  Users,
} from "lucide-react";
import presencialClassImage from "@/assets/hero-background.webp";

export interface BlogCategory {
  label: string;
  icon: LucideIcon;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { label: "Todos", icon: LayoutGrid },
  { label: "Comunicação", icon: MessageSquare },
  { label: "Oratória", icon: Mic },
  { label: "Liderança", icon: Users },
  { label: "Desenvolvimento Pessoal", icon: Sparkles },
  { label: "Inteligência Emocional", icon: Brain },
  { label: "Carreira", icon: Briefcase },
  { label: "Soft Skills", icon: Lightbulb },
  { label: "Dicas", icon: BookOpen },
];

export const getCategoryIcon = (label: string): LucideIcon =>
  BLOG_CATEGORIES.find((category) => category.label === label)?.icon ?? MessageSquare;

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "orderedList"; items: string[] };

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  /** Usada na tag <meta name="description">, não é exibida no corpo do texto. */
  metaDescription?: string;
  content?: BlogContentBlock[];
  image?: { src: string; alt: string };
}

export const FEATURED_POST: BlogPost = {
  id: "featured",
  title: "Como vencer o medo de falar em público: 7 estratégias práticas",
  excerpt:
    "Descubra técnicas simples e comprovadas para transformar a ansiedade em confiança antes da sua próxima apresentação, reunião ou aula.",
  category: "Comunicação",
  date: "28 de junho de 2026",
  readingTime: "8 min de leitura",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "curso-de-oratoria-presencial",
    title: "Curso de Oratória Presencial: o Atalho Real para Quem Quer Falar em Público com Confiança",
    excerpt:
      "Descubra por que o curso de oratória presencial é o caminho mais rápido para falar em público com confiança.",
    metaDescription:
      "Descubra por que o curso de oratória presencial é o caminho mais rápido para falar em público com confiança.",
    category: "Oratória",
    date: "13 de julho de 2026",
    readingTime: "9 min de leitura",
    image: {
      src: presencialClassImage,
      alt: "Participante falando ao microfone para a turma durante um curso de oratória presencial",
    },
    content: [
      {
        type: "paragraph",
        text: "Falar bem em público não é um dom reservado a poucos, é uma habilidade que pode ser treinada, lapidada e, principalmente, vivida na prática. É exatamente por isso que o **curso de oratória presencial** tem se tornado a escolha preferida de profissionais, estudantes, líderes e empreendedores que querem resultados reais, e não apenas teoria guardada em uma pasta de vídeos assistidos pela metade.",
      },
      {
        type: "paragraph",
        text: "Neste conteúdo, será apresentado um panorama completo sobre o que é um **curso de oratória presencial**, por que ele costuma superar as alternativas online, quais benefícios podem ser esperados, como escolher a instituição certa e, ao final, você vai conhecer a Escola VozUP, reconhecida como uma das melhores escolas de oratória do país.",
      },
      { type: "heading2", text: "O Que É Oratória e Por Que Ela Continua Sendo Tão Valorizada" },
      {
        type: "paragraph",
        text: 'Oratória é a arte de se comunicar com clareza, segurança e impacto diante de uma ou várias pessoas. Trata-se de uma competência que vai muito além de "falar bonito": envolve postura corporal, respiração, articulação vocal, estruturação de ideias, controle emocional e conexão genuína com quem ouve.',
      },
      {
        type: "paragraph",
        text: "No mercado de trabalho atual, a comunicação é frequentemente apontada como uma das habilidades mais requisitadas por recrutadores e líderes de equipe. Reuniões, apresentações, negociações, entrevistas de emprego e até conversas cotidianas exigem clareza e presença. Por isso, um **curso de oratória presencial** costuma ser procurado não apenas por quem sente medo de palco, mas também por quem já fala bem e deseja alcançar um nível ainda mais alto de performance.",
      },
      { type: "heading2", text: "Por Que o Curso de Oratória Presencial Faz Tanta Diferença" },
      {
        type: "paragraph",
        text: "Existem, hoje, inúmeras opções de cursos online sobre comunicação. No entanto, quando o assunto é oratória, a prática presencial oferece vantagens que dificilmente são replicadas em um ambiente virtual.",
      },
      { type: "heading3", text: "Feedback em Tempo Real" },
      {
        type: "paragraph",
        text: "Em um **curso de oratória presencial**, cada gesto, pausa, variação de tom e olhar pode ser observado e corrigido no momento em que acontece. Esse retorno imediato é considerado, por especialistas em desenvolvimento humano, um dos fatores mais determinantes para a evolução rápida de qualquer habilidade comportamental. Diferente de um vídeo gravado, onde o aluno assiste sozinho e tenta se autoavaliar, no presencial o erro é apontado e corrigido ali, na hora, com o apoio de um instrutor qualificado.",
      },
      { type: "heading3", text: "Prática em Grupo e Networking Real" },
      {
        type: "paragraph",
        text: "Outro grande diferencial de um **curso de oratória presencial** é a convivência com outras pessoas que compartilham o mesmo objetivo. As dinâmicas em grupo simulam situações reais de apresentação, debate e argumentação, o que é fundamental, já que a oratória só é verdadeiramente desenvolvida quando exercitada diante de outras pessoas. Além disso, é comum que conexões profissionais valiosas sejam construídas durante essas turmas, ampliando a rede de contatos dos participantes.",
      },
      { type: "heading3", text: "Ambiente de Imersão e Compromisso" },
      {
        type: "paragraph",
        text: "Quando se opta por um **curso de oratória presencial**, cria-se um compromisso mais forte com o processo. O deslocamento até o local, o horário marcado e a presença física de colegas e professores geram um senso de responsabilidade que muitas vezes não é sentido da mesma forma em plataformas digitais, onde a aula pode ser adiada, pausada ou simplesmente esquecida.",
      },
      { type: "heading3", text: "Correção Postural e Vocal Detalhada" },
      {
        type: "paragraph",
        text: "A voz e o corpo são instrumentos centrais da oratória. Em um ambiente presencial, é possível que a respiração, a projeção vocal, a dicção e até a postura sejam trabalhadas com precisão, algo que exige observação próxima e, muitas vezes, contato físico orientado (como ajustes de postura), impossível de ser feito à distância.",
      },
      { type: "heading2", text: "Como Funciona, na Prática, um Curso de Oratória Presencial" },
      {
        type: "paragraph",
        text: "De maneira geral, os módulos de um **curso de oratória presencial** costumam contemplar:",
      },
      {
        type: "orderedList",
        items: [
          "**Diagnóstico inicial:** identificação dos pontos fortes e das dificuldades de cada aluno.",
          "**Técnicas de respiração e voz:** exercícios para projeção, dicção e controle do nervosismo.",
          "**Estruturação de discurso:** como organizar ideias com começo, meio e fim persuasivos.",
          "**Linguagem corporal:** gestos, postura e expressões que reforçam a mensagem.",
          "**Prática de apresentações reais:** simulações gravadas e comentadas pelo grupo e pelo instrutor.",
          "**Gestão da ansiedade:** técnicas para lidar com o medo de falar em público, um dos receios mais comuns entre adultos.",
        ],
      },
      {
        type: "paragraph",
        text: "Essas etapas são, em geral, vivenciadas ao longo de encontros semanais, o que permite que o aprendizado seja absorvido de forma gradual e consolidado pela repetição.",
      },
      { type: "heading2", text: "Benefícios de Fazer um Curso de Oratória Presencial" },
      {
        type: "paragraph",
        text: "Os resultados de um bom **curso de oratória presencial** costumam ir muito além do momento da aula. Entre os principais benefícios, destacam-se:",
      },
      {
        type: "list",
        items: [
          "Mais confiança para falar em reuniões, entrevistas e apresentações.",
          "Redução significativa da ansiedade associada a situações de exposição pública.",
          "Aumento da capacidade de persuasão e argumentação, algo valioso em negociações e vendas.",
          "Melhora na clareza de comunicação no dia a dia, inclusive em conversas informais.",
          "Fortalecimento da liderança, já que líderes eficazes costumam ser também bons comunicadores.",
          "Ampliação da rede de contatos, já que as turmas presenciais reúnem profissionais de diferentes áreas.",
        ],
      },
      {
        type: "paragraph",
        text: "É por reunir esse conjunto de ganhos práticos que o **curso de oratória presencial** costuma ser visto como um investimento em desenvolvimento pessoal e profissional, e não apenas como um curso pontual.",
      },
      { type: "heading2", text: "Curso de Oratória Presencial x Curso Online: Qual a Diferença Real?" },
      {
        type: "paragraph",
        text: "Ainda que os cursos online tenham seu valor, sobretudo pela flexibilidade de horário, quando o objetivo é o domínio da fala em público, algumas limitações são frequentemente relatadas:",
      },
      {
        type: "list",
        items: [
          "A prática real diante de outras pessoas é substituída por exercícios solitários.",
          "O feedback é assíncrono, o que atrasa a correção de vícios de fala e postura.",
          "O senso de compromisso tende a ser menor, resultando em taxas mais altas de desistência.",
          "A simulação de nervosismo real, aquele que aparece diante de uma plateia de verdade, não é reproduzida da mesma forma diante de uma câmera.",
        ],
      },
      {
        type: "paragraph",
        text: "Por esses motivos, cada vez mais pessoas que já tentaram cursos digitais e não sentiram evolução suficiente acabam buscando um **curso de oratória presencial** como complemento ou alternativa definitiva.",
      },
      { type: "heading2", text: "Como Escolher o Melhor Curso de Oratória Presencial" },
      { type: "paragraph", text: "Antes de se matricular, alguns critérios podem ser considerados:" },
      {
        type: "list",
        items: [
          "**Metodologia prática:** verifique se o curso prioriza a prática em sala, e não apenas aulas expositivas.",
          "**Turmas reduzidas:** grupos menores permitem mais tempo de fala e feedback individual para cada aluno.",
          "**Professores qualificados:** é recomendável que os instrutores tenham formação e experiência comprovada em comunicação, teatro ou psicologia comportamental.",
          "**Depoimentos de alunos:** histórias reais de transformação costumam ser um bom indicativo de qualidade.",
          "**Estrutura física adequada:** salas amplas, com recursos audiovisuais, favorecem simulações mais realistas.",
          "**Acompanhamento contínuo:** cursos que oferecem suporte após o término das aulas tendem a gerar resultados mais duradouros.",
        ],
      },
      { type: "heading2", text: "Para Quem é Indicado um Curso de Oratória Presencial" },
      {
        type: "paragraph",
        text: "Embora muitas pessoas associem oratória apenas a palestrantes e políticos, esse tipo de curso é indicado para um público bem mais amplo:",
      },
      {
        type: "list",
        items: [
          "Profissionais que precisam apresentar projetos e resultados.",
          "Estudantes que enfrentam seminários e defesas de trabalhos.",
          "Empreendedores que buscam vender ideias e produtos com mais persuasão.",
          "Líderes e gestores que precisam engajar equipes.",
          "Pessoas tímidas que desejam superar o medo de se expressar.",
          "Profissionais de vendas, advocacia, educação e saúde, cuja rotina exige comunicação constante.",
        ],
      },
      { type: "heading2", text: "Conheça a Escola VozUP: Referência em Curso de Oratória Presencial" },
      {
        type: "paragraph",
        text: "Se, depois de tudo o que foi apresentado até aqui, a ideia de investir em um **curso de oratória presencial** despertou interesse, este é o momento de conhecer a **Escola VozUP**.",
      },
      {
        type: "paragraph",
        text: "A Escola VozUP é reconhecida como uma das melhores escolas de oratória do Brasil, com uma metodologia construída especificamente para que os alunos evoluam de forma rápida, prática e duradoura. Diferente de programas genéricos, o **curso de oratória presencial** oferecido pela VozUP é estruturado em turmas reduzidas, com acompanhamento próximo de instrutores especializados em voz, postura, storytelling e argumentação.",
      },
      { type: "paragraph", text: "Entre os diferenciais da Escola VozUP, destacam-se:" },
      {
        type: "list",
        items: [
          "Professores com formação em comunicação, teatro e psicologia comportamental.",
          "Simulações reais de apresentações, entrevistas e discursos, com feedback individualizado.",
          "Ambiente acolhedor, pensado para reduzir a ansiedade e fortalecer a confiança de cada participante.",
          "Rede de contatos formada por profissionais de diferentes setores.",
          "Metodologia testada e validada por centenas de alunos que já transformaram sua forma de se comunicar.",
        ],
      },
      {
        type: "paragraph",
        text: "Se comunicar bem é considerado, por muitos especialistas, um dos maiores diferenciais competitivos da atualidade, e é justamente esse diferencial que a Escola VozUP se propõe a desenvolver em cada aluno. Conhecer o **curso de oratória presencial** da Escola VozUP pode ser o primeiro passo para uma comunicação mais confiante, persuasiva e memorável.",
      },
      {
        type: "paragraph",
        text: "**Quer dar o próximo passo?** Entre em contato com a Escola VozUP e garanta sua vaga no próximo curso de oratória presencial.",
      },
      { type: "heading2", text: "Perguntas Frequentes Sobre Curso de Oratória Presencial" },
      { type: "heading3", text: "O que é um curso de oratória presencial?" },
      {
        type: "paragraph",
        text: "É um curso realizado fisicamente, em sala de aula, com prática direta diante de instrutores e colegas, no qual são desenvolvidas habilidades como voz, postura, respiração e estruturação de discurso.",
      },
      { type: "heading3", text: "Qual a diferença entre curso de oratória presencial e curso online?" },
      {
        type: "paragraph",
        text: "No curso presencial, o feedback é imediato e a prática acontece diante de pessoas reais, o que costuma acelerar a evolução. Já o curso online oferece mais flexibilidade de horário, mas tende a limitar a simulação real de nervosismo e a correção instantânea de gestos e vícios de fala.",
      },
      { type: "heading3", text: "Quanto tempo dura um curso de oratória presencial?" },
      {
        type: "paragraph",
        text: "A duração varia conforme a instituição, mas normalmente esses cursos são organizados em módulos semanais, com duração total entre alguns dias intensivos e alguns meses de encontros regulares.",
      },
      { type: "heading3", text: "Um curso de oratória presencial ajuda a vencer o medo de falar em público?" },
      {
        type: "paragraph",
        text: "Sim. Boa parte da metodologia utilizada nesse tipo de curso é voltada justamente para o controle da ansiedade, por meio de técnicas de respiração, exposição gradual e simulações práticas.",
      },
      { type: "heading3", text: "Preciso ter algum talento natural para fazer um curso de oratória presencial?" },
      {
        type: "paragraph",
        text: "Não. A oratória é considerada, pela maioria dos especialistas, uma habilidade técnica que pode ser aprendida e desenvolvida por qualquer pessoa, independentemente do nível de experiência inicial.",
      },
      { type: "heading3", text: "Qual é a melhor escola de curso de oratória presencial?" },
      {
        type: "paragraph",
        text: "A Escola VozUP é uma referência nesse segmento, sendo reconhecida por sua metodologia prática, turmas reduzidas e acompanhamento individualizado de cada aluno.",
      },
    ],
  },
  {
    id: "post-1",
    title: "5 exercícios de respiração para controlar o nervosismo antes de falar",
    excerpt:
      "Técnicas simples que ajudam a acalmar o corpo e organizar os pensamentos minutos antes de qualquer apresentação.",
    category: "Oratória",
    date: "24 de junho de 2026",
    readingTime: "6 min de leitura",
  },
  {
    id: "post-2",
    title: "Como dar feedback sem gerar conflito na equipe",
    excerpt: "Um roteiro prático para comunicar pontos de melhoria com clareza, respeito e resultado.",
    category: "Liderança",
    date: "20 de junho de 2026",
    readingTime: "7 min de leitura",
  },
  {
    id: "post-3",
    title: "O que fazer quando a ansiedade trava sua fala",
    excerpt: "Entenda por que o corpo reage assim e quais estratégias ajudam a retomar o controle na hora H.",
    category: "Inteligência Emocional",
    date: "15 de junho de 2026",
    readingTime: "5 min de leitura",
  },
  {
    id: "post-4",
    title: "Comunicação como diferencial em processos seletivos",
    excerpt: "Como a forma de se expressar pode pesar tanto quanto o currículo em uma entrevista de emprego.",
    category: "Carreira",
    date: "10 de junho de 2026",
    readingTime: "9 min de leitura",
  },
  {
    id: "post-5",
    title: "3 hábitos diários que melhoram sua clareza ao falar",
    excerpt: "Pequenas mudanças de rotina que fazem diferença real na forma como você se comunica.",
    category: "Soft Skills",
    date: "5 de junho de 2026",
    readingTime: "4 min de leitura",
  },
  {
    id: "post-6",
    title: "Como estruturar uma apresentação em menos de 10 minutos",
    excerpt: "Um modelo simples para organizar ideias, prender a atenção e fechar com uma mensagem clara.",
    category: "Dicas",
    date: "1 de junho de 2026",
    readingTime: "6 min de leitura",
  },
];
