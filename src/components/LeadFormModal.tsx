import { X } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const LeadFormModal = ({
  open,
  source,
  onClose,
}: {
  open: boolean;
  source: string;
  onClose: () => void;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-lift transition hover:bg-ink hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <LeadForm source={source} compact />
      </div>
    </div>
  );
};

export default LeadFormModal;
