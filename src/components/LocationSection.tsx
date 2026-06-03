import { Clock, MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  const address = "Rua Azevedo Soares, 1334 - Tatuapé, São Paulo - SP";

  return (
    <section className="bg-white px-4 py-24 text-black sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Unidade presencial
            </p>
            <h2 className="text-4xl font-black leading-none sm:text-5xl">
              VozUP no coração do Tatuapé.
            </h2>
          </div>
          <p className="border-l border-gray-300 pl-6 text-lg leading-relaxed text-gray-700">
            A escola fica na Rua Azevedo Soares, uma região de fácil acesso na
            zona leste de São Paulo.
          </p>
        </div>

        <div className="grid gap-0 overflow-hidden lg:grid-cols-[0.72fr,1.28fr]">
          <div className="bg-[#D8F7FA] p-7 text-black">
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-black">
              <MapPin className="h-7 w-7" />
              Endereço
            </h3>
            <p className="text-2xl font-black leading-tight">{address}</p>
            <div className="mt-8 flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0" />
              <p className="font-semibold">Horários e disponibilidade confirmados pelo WhatsApp.</p>
            </div>
            <a
              href="https://maps.google.com/?q=Rua+Azevedo+Soares,+1334+-+Tatuap%C3%A9,+S%C3%A3o+Paulo+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#111827] px-6 py-4 font-bold text-white transition hover:bg-white hover:text-black"
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

export default LocationSection;
