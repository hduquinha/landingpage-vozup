import { CheckCircle2, X } from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const TransformationSection = () => {
  const { content } = useLandingPage();
  if (!content.transformation) return null;

  const { sectionLabel, heading, beforeTitle, beforeItems, afterTitle, afterItems } =
    content.transformation;

  return (
    <section className="relative overflow-hidden bg-cream-deep px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <SectionLabel className="mb-3 justify-center">{sectionLabel}</SectionLabel>
          <p className="max-w-2xl text-2xl font-extrabold leading-[1.1] sm:text-4xl">{heading}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-ink/5 bg-white p-5 shadow-card sm:p-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              {beforeTitle}
            </p>
            <ul className="space-y-3">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-500 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-5 text-white shadow-lift sm:p-7">
            <div className="absolute inset-0 bg-grid-ink opacity-60" />
            <div className="relative z-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7BE7EF]">
                {afterTitle}
              </p>
              <ul className="space-y-3">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#00AFC1]" />
                    <span className="text-sm font-bold sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
