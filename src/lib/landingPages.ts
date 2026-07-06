import { videoRecordingLandingPageContent, type LandingPageContent } from "@/lib/landingPageContent";

export interface LandingPageProfile {
  id: string;
  route: string;
  label: string;
  origem: string;
  content?: LandingPageContent;
}

export const DEFAULT_ORIGEM = "Landing Page VozUP";

export const LANDING_PAGE_PROFILES: LandingPageProfile[] = [
  {
    id: "p1",
    route: "/p/1",
    label: "Dificuldade para gravar vídeos",
    origem: "Vozup Landing Page - Dificuldade para Gravar Vídeos",
    content: videoRecordingLandingPageContent,
  },
  {
    id: "p2",
    route: "/p/2",
    label: "Empresários",
    origem: "Vozup Landing Page Empresários",
  },
  {
    id: "p3",
    route: "/p/3",
    label: "Corretores de Imóveis",
    origem: "Vozup Landing Page Corretores de Imóveis",
  },
  {
    id: "p4",
    route: "/p/4",
    label: "Autoridade Digital",
    origem: "Vozup Landing Page Autoridade Digital",
  },
];

export function getProfileByRoute(route: string): LandingPageProfile | undefined {
  return LANDING_PAGE_PROFILES.find((p) => p.route === route);
}

export function getOrigemForCurrentPath(): string {
  if (typeof window === "undefined") return DEFAULT_ORIGEM;
  return getProfileByRoute(window.location.pathname)?.origem ?? DEFAULT_ORIGEM;
}
