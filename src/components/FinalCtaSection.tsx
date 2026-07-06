import {
  BookOpen,
  Compass,
  HelpCircle,
  Info,
  MapPin,
  Send,
  Tag,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
const vozupLogo = "/VozUP_vetor_fundo-escuro.svg";
import { scrollToLead } from "@/lib/lead";
import { SectionLabel } from "@/components/editorial";

const quickLinks = [
  { label: "Como funciona", href: "#metodo", icon: Compass },
  { label: "Sobre a VozUP", href: "#sobre", icon: Info },
  { label: "Para quem é", href: "#aplicacoes", icon: Users },
  { label: "Planos", href: "#pricing", icon: Tag },
  { label: "Localização", href: "#localizacao", icon: MapPin },
  { label: "Perguntas frequentes", href: "#faq", icon: HelpCircle },
  { label: "Fale conosco", href: "#lead", icon: Send },
  { label: "Blog", href: "/blog", icon: BookOpen },
];

const FinalCtaSection = () => {
  return (
    <section className="relative bg-ink px-4 py-10 text-white sm:px-6">
      <div className="absolute inset-0 bg-grid-ink opacity-60" />

      <footer className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="relative h-24 w-40 sm:w-48">
            <img
              src={vozupLogo}
              alt="VozUP"
              width={500}
              height={500}
              loading="lazy"
              decoding="async"
              className="absolute left-1/2 top-1/2 h-72 w-auto -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#7BE7EF]" />
              Rua Azevedo Soares, 1334 - Tatuapé
            </span>
            <button
              onClick={scrollToLead}
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Send className="h-4 w-4 text-[#7BE7EF]" />
              Solicitar contato
            </button>
          </div>
        </div>

        <nav aria-label="Navegação rápida" className="mt-10 border-t border-white/10 pt-8">
          <SectionLabel tone="light" className="mb-5 justify-center sm:justify-start">
            Navegação rápida
          </SectionLabel>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {quickLinks.map((link) => {
              const isRoute = link.href.startsWith("/");
              const content = (
                <>
                  <link.icon className="h-4 w-4 flex-shrink-0 text-[#7BE7EF]" />
                  <span>{link.label}</span>
                </>
              );
              const className =
                "flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-[#7BE7EF]/40 hover:bg-white/10 hover:text-white";

              return (
                <li key={link.label}>
                  {isRoute ? (
                    <Link to={link.href} className={className}>
                      {content}
                    </Link>
                  ) : (
                    <a href={link.href} className={className}>
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © 2026 VozUP Escola de Oratória e Liderança Emocional. Todos os direitos reservados.
        </div>
      </footer>
    </section>
  );
};

export default FinalCtaSection;
