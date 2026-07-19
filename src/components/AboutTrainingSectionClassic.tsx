import { ArrowRight, CheckCircle2 } from "lucide-react";
import { scrollToLead } from "@/lib/lead";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const AboutTrainingSectionClassic = () => {
  const { content } = useLandingPage();
  const results = content.aboutTraining.results;
  const labelWords = content.aboutTraining.sectionLabel.trim().split(/\s+/);
  const labelStart = labelWords.slice(0, -1).join(" ");
  const labelLastWord = labelWords[labelWords.length - 1] ?? "";

  return (
    <section id="lead" className="relative overflow-hidden bg-cream px-4 py-20 text-ink sm:px-6 lg:py-28">
      <span className="watermark pointer-events-none absolute -right-6 top-6 text-[14rem] sm:text-[20rem]">01</span>
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0d94a4]/60">
              Curso de Oratória
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight leading-[1.06] sm:text-4xl lg:text-5xl">
              <span className="text-[#0d94a4]">
                {labelStart ? `${labelStart} ` : ""}
                <span className="relative inline-block whitespace-nowrap">
                  {labelLastWord}
                  <svg
                    className="absolute -bottom-1 left-0 h-3 w-full sm:-bottom-1.5"
                    viewBox="0 0 120 14"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10C28 4 78 2 116 6"
                      stroke="#00AFC1"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                  </svg>
                </span>
              </span>
              <span className="mt-3 block text-ink">{content.aboutTraining.headingLine1}</span>
              <span className="block bg-gradient-to-r from-[#0d94a4] to-[#00AFC1] bg-clip-text text-transparent">
                {content.aboutTraining.headingLine2}
              </span>
            </h2>
          </div>

          <div className="rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-6 shadow-card">
            <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
              {content.aboutTraining.intro}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr,0.72fr]">
          <div className="rounded-3xl border border-ink/5 bg-white p-2 shadow-card sm:p-4">
            {results.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl px-4 py-5 transition hover:bg-cream"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
                  0{index + 1}
                </span>
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-[#0d94a4]" />
                <p className="text-lg font-bold leading-snug sm:text-xl">{item}</p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-lift sm:p-8">
            <div className="absolute inset-0 bg-grid-ink opacity-60" />
            <div className="relative z-10">
              <SectionLabel tone="light" className="mb-5">{content.aboutTraining.sideLabel}</SectionLabel>
              <p className="text-2xl font-extrabold leading-tight sm:text-3xl">
                {content.aboutTraining.sideText}
              </p>
              <button
                onClick={scrollToLead}
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-6 py-4 text-center font-bold text-white transition hover:bg-white hover:text-ink sm:w-auto"
              >
                {content.aboutTraining.sideCta}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainingSectionClassic;
