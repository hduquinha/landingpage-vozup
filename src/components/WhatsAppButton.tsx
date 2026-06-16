import whatsappLogo from "@/assets/wwplogo.png";
import { buildWhatsAppLink } from "@/lib/lead";
import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppButton = () => {
  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <div className="pointer-events-none absolute bottom-full right-0 mb-2 w-max origin-bottom-right rounded-md bg-black px-4 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        Fale com a VozUP
        <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-black" />
      </div>

      <a
        href={buildWhatsAppLink("botão flutuante")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("botão flutuante")}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-[#128C7E] animate-pulse-whatsapp"
        aria-label="Fale com a VozUP pelo WhatsApp"
      >
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          width={2048}
          height={2048}
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-full object-contain"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
