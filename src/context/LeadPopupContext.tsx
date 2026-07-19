import { createContext, useContext, useState, type ReactNode } from "react";
import LeadFormModal from "@/components/LeadFormModal";

interface LeadPopupContextValue {
  openLeadPopup: (source: string) => void;
}

const LeadPopupContext = createContext<LeadPopupContextValue>({
  openLeadPopup: () => {},
});

export function LeadPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("formulário da landing");

  const openLeadPopup = (nextSource: string) => {
    setSource(nextSource);
    setIsOpen(true);
  };

  return (
    <LeadPopupContext.Provider value={{ openLeadPopup }}>
      {children}
      <LeadFormModal open={isOpen} source={source} onClose={() => setIsOpen(false)} />
    </LeadPopupContext.Provider>
  );
}

export function useLeadPopup(): LeadPopupContextValue {
  return useContext(LeadPopupContext);
}
