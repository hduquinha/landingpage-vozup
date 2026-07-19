import {
  Award,
  Briefcase,
  Handshake,
  Heart,
  Share2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { SectionLabel } from "@/components/editorial";
import { useLandingPage } from "@/context/LandingPageContext";

const consequenceIcons = [TrendingUp, Award, Heart, Briefcase, Handshake, Share2, ShieldCheck];

const ConsequencesSection = () => {
  const { content } = useLandingPage();
  if (!content.consequences) return null;

  const items = content.consequences.items.map((item, index) => ({
    icon: consequenceIcons[index % consequenceIcons.length],
    ...item,
  }));

  return (
    <section className="relative overflow-hidden bg-cream px-4 py-12 text-ink sm:px-6 sm:py-16 lg:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.9fr,1.1fr] lg:items-end">
          <div>
            <h2 className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#0d94a4]/60">
              Curso de Oratória
            </h2>
            <SectionLabel className="mb-3">{content.consequences.sectionLabel}</SectionLabel>
            <p className="text-2xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
              {content.consequences.headingLine1}
              <span className="block text-[#0d94a4]">{content.consequences.headingLine2}</span>
            </p>
          </div>
          <p className="rounded-2xl border-l-4 border-[#00AFC1] bg-white/70 p-4 text-base leading-relaxed text-slate-600 shadow-card sm:p-5">
            {content.consequences.intro}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink/5 bg-white p-3 shadow-card sm:p-5"
            >
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAFBFC] text-[#0d94a4] sm:h-11 sm:w-11">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-extrabold leading-tight sm:text-base">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
