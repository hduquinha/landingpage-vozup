import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems } from "@/lib/seo";
import { SectionLabel } from "@/components/editorial";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  return (
    <section className="bg-cream-deep px-4 py-20 text-ink sm:px-6 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAFBFC] text-[#0d94a4]">
            <HelpCircle className="h-7 w-7" />
          </span>
          <SectionLabel className="mb-4 justify-center">Tire suas dúvidas</SectionLabel>
          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-cream"
                >
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <span
                    className={`inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? "bg-[#00AFC1] text-white" : "bg-[#EAFBFC] text-[#0d94a4]"
                    }`}
                  >
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 px-6 py-5">
                    <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
