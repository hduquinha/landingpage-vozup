import { Clock, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/editorial";

const LocationSection = () => {
  const address = "Rua Azevedo Soares, 1334 - Tatuapé, São Paulo - SP";

  return (
    <section id="localizacao" className="bg-cream px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 grid gap-4 lg:grid-cols-[0.8fr,1.2fr] lg:items-end">
          <div>
            <h2 className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0d94a4]/60">
              Curso de Oratória
            </h2>
            <SectionLabel className="mb-3">Unidade presencial</SectionLabel>
            <p className="text-2xl font-extrabold leading-[1.1] sm:text-4xl">
              VozUP no coração do Tatuapé.
            </p>
          </div>
          <p className="rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-4 text-sm leading-relaxed text-slate-600 shadow-card sm:p-5 sm:text-lg">
            A escola fica na Rua Azevedo Soares, uma região de fácil acesso na
            zona leste de São Paulo.
          </p>
        </div>

        <div className="grid gap-0 overflow-hidden rounded-3xl shadow-lift lg:grid-cols-[0.72fr,1.28fr]">
          <div className="bg-gradient-to-br from-[#D8F7FA] to-[#EAFBFC] p-5 text-ink sm:p-8">
            <h3 className="mb-3 flex items-center gap-3 text-xl font-extrabold sm:mb-6 sm:text-2xl">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white sm:h-11 sm:w-11">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              Endereço
            </h3>
            <p className="text-lg font-extrabold leading-tight sm:text-2xl">{address}</p>
            <div className="mt-4 flex gap-3 sm:mt-8">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0d94a4]" />
              <p className="text-sm font-semibold text-slate-600 sm:text-base">Horários e disponibilidade confirmados pelo WhatsApp.</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Rua%20Azevedo%20Soares%2C%201334%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "260px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da VozUP Tatuapé"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
