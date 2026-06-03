import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const CheckoutSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cyan-50 p-4">
      <Card className="mx-auto w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
            <CheckCircle className="h-8 w-8 text-cyan-700" />
          </div>
          <CardTitle className="text-2xl font-bold text-cyan-900">Contato recebido</CardTitle>
          <CardDescription className="text-cyan-700">
            A equipe da VozUP vai orientar os próximos passos.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-4">
            <p className="text-sm text-cyan-900">
              Obrigado pelo interesse na VozUP Escola de Oratória e Liderança Emocional.
            </p>
          </div>

          <Button onClick={() => (window.location.href = "/")} className="w-full">
            Voltar ao início
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutSuccess;
