import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import speakerCoach from "@/assets/speaker-coach-commercial.webp";
import speakerCoachSm from "@/assets/speaker-coach-commercial-sm.webp";
import { SectionLabel } from "@/components/editorial";

const vozupLogo = "/VozUP_vetor_fundo-claro.svg";

const BlogHero = () => (
  <section className="relative overflow-hidden bg-cream-deep px-4 pb-14 pt-6 text-ink sm:px-6 sm:pb-20 sm:pt-8 lg:pb-24">
    <div className="absolute inset-0 bg-grid opacity-50" />

    <div className="relative z-10 mx-auto max-w-6xl">
      <header className="mb-10 flex flex-wrap items-center gap-3 sm:mb-14 sm:gap-4">
        <Link to="/" aria-label="Voltar para a página inicial da VozUP" className="flex-shrink-0">
          <img
            src={vozupLogo}
            alt="VozUP Escola de Oratória e Liderança Emocional"
            width={697}
            height={281}
            decoding="async"
            className="h-9 w-auto sm:h-[69px] lg:h-[88px]"
          />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/70 px-3 py-2 text-xs font-bold text-ink shadow-sm backdrop-blur transition hover:bg-ink hover:text-white sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
          <span>Voltar para a VozUP</span>
        </Link>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-16">
        <div className="text-center lg:text-left">
          <SectionLabel className="mb-5 justify-center lg:justify-start">Blog VozUP</SectionLabel>
          <h1 className="mx-auto max-w-xl text-3xl font-extrabold leading-[1.05] sm:text-5xl lg:mx-0">
            Ideias práticas para você comunicar melhor.
            <span className="block text-[#0d94a4]">Todos os dias.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-600 lg:mx-0">
            Artigos, exercícios e bastidores sobre oratória, liderança emocional
            e comunicação para você aplicar no trabalho, nas apresentações e no
            dia a dia.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[220px] sm:max-w-xs lg:max-w-none">
          <div className="deco-rings pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#D8F7FA] to-[#EAFBFC] p-4 shadow-soft sm:rounded-[2.5rem] sm:p-6">
            <picture>
              <source media="(min-width: 1024px)" srcSet={speakerCoach} />
              <img
                src={speakerCoachSm}
                alt="Comunicação e oratória na VozUP"
                width={520}
                height={780}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-[200px] object-contain drop-shadow-2xl sm:max-w-[260px] lg:max-w-[320px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BlogHero;
