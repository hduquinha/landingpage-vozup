import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  const faqs = [
    {
      question: "A VozUP é para quem tem medo de falar em público?",
      answer:
        "Sim. A escola atende tanto pessoas que travam ao falar quanto profissionais que já se comunicam bem e querem ganhar mais presença, clareza e liderança.",
    },
    {
      question: "As aulas são presenciais?",
      answer:
        "A proposta principal da unidade Tatuapé é presencial, na Rua Azevedo Soares, 1334. A disponibilidade de horários deve ser confirmada com a equipe.",
    },
    {
      question: "Preciso ter experiência com apresentações?",
      answer:
        "Não. O método parte do nível atual do aluno e evolui com exercícios práticos, feedback e repetição guiada.",
    },
    {
      question: "O curso serve para liderança e vendas?",
      answer:
        "Serve. A comunicação trabalhada na VozUP é aplicada a reuniões, apresentações, negociações, vídeos, liderança de equipes e conversas difíceis.",
    },
    {
      question: "Como faço para saber valores e turmas?",
      answer:
        "Clique no botão de WhatsApp da página para falar com a equipe, consultar horários e receber as condições atuais.",
    },
  ];

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
          {faqs.map((faq, index) => (
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
