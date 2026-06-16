import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqItems } from "@/lib/seo";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  return (
    <section className="bg-white px-4 py-20 text-black sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <HelpCircle className="mx-auto mb-5 h-12 w-12 text-cyan-600" />
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-lg border border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between gap-4 bg-gray-50 px-5 py-5 text-left transition hover:bg-cyan-50"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-6 w-6 flex-shrink-0 text-cyan-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 flex-shrink-0 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="border-t border-gray-200 px-5 py-5">
                  <p className="leading-relaxed text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
