import { Activity, MessageSquare, Mic, Sparkles, Timer, TrendingUp } from "lucide-react";
import speakerCoach from "@/assets/speaker-coach-commercial.webp";
import speakerCoachMobile from "@/assets/speaker-coach-commercial-mobile.webp";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const stepIcons = [Mic, Activity, MessageSquare, Sparkles];

const VideoSection = () => {
  const { content } = useLandingPage();
  const steps = content.video.steps.map((step, index) => ({
    icon: stepIcons[index],
    ...step,
  }));

  return (
    <section id="metodo" className="relative overflow-hidden bg-cream-deep px-4 py-14 text-ink sm:px-6 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr,1.18fr] lg:items-center">
          <div>
            <SectionLabel className="mb-5">{content.video.sectionLabel}</SectionLabel>

            <h2 className="text-2xl font-extrabold leading-[1.1] sm:text-4xl">
              <span className="text-[#0d94a4]">Curso de Oratória - </span>
              {content.video.headingLine1}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {content.video.intro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/5 bg-white p-6 shadow-card">
                <Timer className="mb-3 h-7 w-7 text-[#0d94a4]" />
                <p className="text-lg font-extrabold">{content.video.cardOneTitle}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {content.video.cardOneText}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white shadow-lift">
                <div className="absolute inset-0 bg-grid-ink opacity-60" />

                <div className="relative z-10">
                  <TrendingUp className="mb-3 h-7 w-7 text-[#7BE7EF]" />
                  <p className="text-lg font-extrabold">
                    {content.video.cardTwoTitle}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">
                    {content.video.cardTwoText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl border border-ink/5 bg-white p-4 shadow-soft sm:p-7">
            <picture>
              <source media="(min-width: 1024px)" srcSet={speakerCoach} />
              <img
                src={speakerCoachMobile}
                alt="Treinador de oratória orientando aluno"
                width={640}
                height={685}
                loading="lazy"
                decoding="async"
                className="mx-auto mb-3 max-h-[190px] w-auto object-contain drop-shadow-xl sm:mb-4 sm:max-h-[300px] lg:absolute lg:-left-16 lg:bottom-0 lg:mb-0 lg:max-h-[520px]"
              />
            </picture>

            <div className="lg:ml-56">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-3 border-b border-gray-100 py-5 last:border-b-0 sm:grid-cols-[60px,1fr,auto] sm:items-center"
                >
                  <span className="font-display text-3xl font-black text-[#0d94a4]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-xl font-extrabold sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 sm:text-base">
                      {step.text}
                    </p>
                  </div>

                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4]">
                    <step.icon className="h-6 w-6" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;