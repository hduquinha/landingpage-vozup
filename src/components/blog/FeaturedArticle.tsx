import { ArrowRight, Calendar, Clock, Mic } from "lucide-react";
import { FEATURED_POST } from "@/lib/blogPosts";
import { SectionLabel } from "@/components/editorial";
import PlaceholderImage from "@/components/blog/PlaceholderImage";

const FeaturedArticle = () => (
  <section className="bg-cream px-4 py-14 text-ink sm:px-6 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionLabel className="mb-8 justify-center sm:justify-start">Em destaque</SectionLabel>

      <div className="grid overflow-hidden rounded-3xl bg-white shadow-lift lg:grid-cols-2">
        <PlaceholderImage icon={Mic} className="h-64 w-full sm:h-80 lg:h-full" />

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#EAFBFC] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0d94a4]">
            {FEATURED_POST.category}
          </span>
          <h2 className="text-2xl font-extrabold leading-[1.1] sm:text-3xl lg:text-4xl">
            {FEATURED_POST.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {FEATURED_POST.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#0d94a4]" />
              {FEATURED_POST.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#0d94a4]" />
              {FEATURED_POST.readingTime}
            </span>
          </div>

          <button
            type="button"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#00AFC1] px-7 py-4 text-base font-bold text-white shadow-lift transition hover:bg-ink"
          >
            Ler artigo
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedArticle;
