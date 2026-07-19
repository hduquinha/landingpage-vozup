import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const TestimonialsSection = () => {
  const { content } = useLandingPage();
  const moments = content.testimonials.moments;

  return (
    <section id="aplicacoes" className="bg-cream px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-ink/10 pb-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0d94a4]/60">
              Curso de Oratória
            </h2>
            <SectionLabel className="mb-3">{content.testimonials.sectionLabel}</SectionLabel>
            <p className="max-w-3xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">
              {content.testimonials.headingLine1}
            </p>
          </div>
          <p className="max-w-md rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-4 text-base leading-relaxed text-slate-600 shadow-card sm:p-5 sm:text-lg">
            {content.testimonials.intro}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {moments.map((moment, index) => (
            <div
              key={moment}
              className="group flex min-h-16 items-center justify-between gap-2 rounded-2xl border border-ink/5 bg-white px-3 py-3 shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:min-h-24 sm:gap-4 sm:px-6 sm:py-5"
            >
              <div>
                <span className="font-display text-xs font-bold text-[#0d94a4] sm:text-sm">0{index + 1}</span>
                <p className="text-sm font-extrabold leading-tight sm:text-xl">{moment}</p>
              </div>
              <span className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#EAFBFC] text-[#0d94a4] transition group-hover:bg-[#00AFC1] group-hover:text-white sm:inline-flex">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
