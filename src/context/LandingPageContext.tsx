import { createContext, useContext, type ReactNode } from "react";
import { DEFAULT_ORIGEM } from "@/lib/landingPages";
import { defaultLandingPageContent, type LandingPageContent } from "@/lib/landingPageContent";

interface LandingPageContextValue {
  origem: string;
  content: LandingPageContent;
}

const LandingPageContext = createContext<LandingPageContextValue>({
  origem: DEFAULT_ORIGEM,
  content: defaultLandingPageContent,
});

export function LandingPageProvider({
  origem,
  content = defaultLandingPageContent,
  children,
}: {
  origem: string;
  content?: LandingPageContent;
  children: ReactNode;
}) {
  return (
    <LandingPageContext.Provider value={{ origem, content }}>
      {children}
    </LandingPageContext.Provider>
  );
}

export function useLandingPage(): LandingPageContextValue {
  return useContext(LandingPageContext);
}
