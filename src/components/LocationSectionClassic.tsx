import { Clock, MapPin, Navigation } from "lucide-react";
import { SectionLabel } from "@/components/editorial";

const LocationSectionClassic = () => {
  const address = "Rua Azevedo Soares, 1334 - Tatuapé, São Paulo - SP";

  return (
    <section id="localizacao" className="bg-cream px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-end">
          <div>
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0d94a4]/60">
              Curso de Oratória
            </p>
            <SectionLabel className="mb-5">Unidade presencial</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              <span className="text-[#0d94a4]">Curso de Oratória - </span>VozUP no coração do Tatuapé.
            </h2>
          </div>
          <p className="rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-6 text-lg leading-relaxed text-slate-600 shadow-card">
            A escola fica na Rua Azevedo Soares, uma região de fácil acesso na
            zona leste de São Paulo.
          </p>
        </div>

        <div className="grid gap-0 overflow-hidden rounded-3xl shadow-lift lg:grid-cols-[0.72fr,1.28fr]">
          <div className="bg-gradient-to-br from-[#D8F7FA] to-[#EAFBFC] p-8 text-ink">
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-extrabold">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                <MapPin className="h-6 w-6" />
              </span>
              Endereço
            </h3>
            <p className="text-2xl font-extrabold leading-tight">{address}</p>
            <div className="mt-8 flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0d94a4]" />
              <p className="font-semibold text-slate-600">Horários e disponibilidade confirmados pelo WhatsApp.</p>
            </div>
            <a
              href="https://maps.google.com/?q=Rua+Azevedo+Soares,+1334+-+Tatuap%C3%A9,+S%C3%A3o+Paulo+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 font-bold text-white transition hover:bg-[#00AFC1] hover:text-white"
            >
              <Navigation className="h-5 w-5" />
              Abrir rota no Maps
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Rua%20Azevedo%20Soares%2C%201334%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "420px" }}
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

export default LocationSectionClassic;
