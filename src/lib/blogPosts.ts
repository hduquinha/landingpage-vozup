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

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
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
