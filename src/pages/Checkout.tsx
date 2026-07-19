import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/lead";
import { trackWhatsAppClick } from "@/lib/analytics";

const Checkout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    trackWhatsAppClick("rota de agendamento");
    window.location.href = buildWhatsAppLink("rota de agendamento");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <div className="max-w-lg space-y-4">
        <h1 className="text-2xl font-semibold">Redirecionando para o WhatsApp</h1>
        <p className="text-sm text-gray-300">
          Estamos encaminhando você para falar com a equipe da VozUP e agendar
          sua consultoria.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            onClick={() => {
              trackWhatsAppClick("botão da rota de agendamento");
              window.location.href = buildWhatsAppLink("rota de agendamento");
            }}
          >
            Abrir WhatsApp agora
          </Button>
          <Button variant="outline" className="bg-transparent text-white" onClick={() => navigate("/")}>
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
