import { FormEvent, useState } from "react";
import { ArrowRight, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="bg-cream-deep px-4 py-14 text-ink sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D8F7FA] to-[#EAFBFC] p-8 text-center shadow-soft sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
            <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0d94a4] shadow-card">
              <Send className="h-6 w-6" />
            </span>

            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              Receba novos conteúdos direto no seu e-mail
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Toda semana, dicas práticas de comunicação, oratória e liderança
              emocional para você aplicar no dia a dia.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
                placeholder="Seu melhor e-mail"
                className="h-12 w-full rounded-full border border-gray-200 bg-white px-5 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-[#00AFC1] focus:ring-2 focus:ring-[#00AFC1]/20"
              />
              <button
                type="submit"
                className="flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#00AFC1] px-6 text-base font-bold text-white shadow-lift transition hover:bg-ink"
              >
                Inscrever-se
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
