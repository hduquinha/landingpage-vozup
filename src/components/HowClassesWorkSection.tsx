import { NumberBadge, SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const HowClassesWorkSection = () => {
  const { content } = useLandingPage();
  if (!content.howClassesWork) return null;

  const { sectionLabel, heading, intro, steps } = content.howClassesWork;

  return (
    <section className="bg-cream px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <SectionLabel className="mb-3 justify-center">{sectionLabel}</SectionLabel>
          <p className="max-w-2xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">{heading}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">{intro}</p>
        </div>

        <div className="relative rounded-3xl border border-ink/5 bg-white p-4 shadow-card sm:p-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-3 border-b border-gray-100 py-3 last:border-b-0 sm:gap-4 sm:py-4"
            >
              <NumberBadge n={index + 1} className="mt-0.5 h-8 w-8 flex-shrink-0 text-xs sm:h-9 sm:w-9 sm:text-sm" />
              <div>
                <h3 className="text-sm font-extrabold leading-tight sm:text-lg">{step.title}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500 sm:text-sm">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowClassesWorkSection;
