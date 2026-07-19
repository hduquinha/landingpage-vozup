import { createContext, useContext, type ReactNode } from "react";
import { defaultLandingPageContent, type LandingPageContent } from "@/lib/landingPageContent";

interface LandingPageContextValue {
  content: LandingPageContent;
}

const LandingPageContext = createContext<LandingPageContextValue>({
  content: defaultLandingPageContent,
});

export function LandingPageProvider({
  content = defaultLandingPageContent,
  children,
}: {
  content?: LandingPageContent;
  children: ReactNode;
}) {
  return (
    <LandingPageContext.Provider value={{ content }}>
      {children}
    </LandingPageContext.Provider>
  );
}

export function useLandingPage(): LandingPageContextValue {
  return useContext(LandingPageContext);
}
