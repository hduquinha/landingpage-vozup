import { whatsappNumber, buildWhatsAppLink } from "@/lib/lead";
import { businessName, businessAddress } from "@/lib/seo";

const formattedWhatsApp = `+${whatsappNumber.replace(/^55/, "55 ")}`;
const lastUpdated = "03 de julho de 2026";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-cream px-6 py-16">
      <div className="prose prose-neutral mx-auto max-w-3xl prose-headings:text-gray-900 prose-a:text-[#00AFC1]">
        <h1>Política de Privacidade</h1>
        <p>Última atualização: {lastUpdated}</p>

        <p>
          Esta Política de Privacidade descreve como a <strong>{businessName}</strong> ("VozUP", "nós")
          coleta, usa, armazena e protege os dados pessoais de quem preenche formulários em nosso site,
          em formulários de anúncios (como o Meta/Instagram Lead Ads) ou entra em contato pelo WhatsApp.
          Ao fornecer seus dados, você concorda com os termos descritos abaixo, em conformidade com a Lei
          Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
        </p>

        <h2>1. Quem somos</h2>
        <p>
          {businessName}, com endereço em {businessAddress.streetAddress}, {businessAddress.neighborhood},{" "}
          {businessAddress.addressLocality} - {businessAddress.addressRegion}, é a controladora dos dados
          pessoais tratados por meio deste site e de seus canais de captação de leads.
        </p>

        <h2>2. Quais dados coletamos</h2>
        <ul>
          <li>Nome completo;</li>
          <li>Telefone/WhatsApp;</li>
          <li>E-mail (quando informado);</li>
          <li>Objetivo, interesse ou motivo de contato informado no formulário;</li>
          <li>
            Dados de navegação e origem do contato (página de origem, campanha, cookies e identificadores
            de anúncios, quando o contato ocorre via Facebook/Instagram Ads).
          </li>
        </ul>

        <h2>3. Como coletamos</h2>
        <p>
          Os dados são coletados diretamente quando você preenche um formulário em nosso site, em um
          formulário de anúncio de lead do Meta (Facebook/Instagram) ou quando envia uma mensagem pelo
          WhatsApp.
        </p>

        <h2>4. Para que usamos seus dados</h2>
        <ul>
          <li>Entrar em contato para apresentar nossos cursos e agendar aula experimental;</li>
          <li>Dar andamento à matrícula, quando solicitada;</li>
          <li>Enviar informações, novidades e ofertas relacionadas aos nossos serviços;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>

        <h2>5. Com quem compartilhamos</h2>
        <p>Não vendemos seus dados pessoais. Podemos compartilhar dados com:</p>
        <ul>
          <li>Provedores de envio de mensagens via WhatsApp, para viabilizar o atendimento comercial;</li>
          <li>
            Meta/Facebook Ads, quando o contato se origina de um formulário de anúncio de lead
            (Instant Forms);
          </li>
          <li>Ferramentas de análise de tráfego e desempenho de campanhas (ex.: Google Analytics).</li>
        </ul>

        <h2>6. Por quanto tempo guardamos seus dados</h2>
        <p>
          Mantemos seus dados enquanto durar o relacionamento comercial ou pelo prazo exigido por
          obrigações legais e regulatórias aplicáveis.
        </p>

        <h2>7. Seus direitos como titular dos dados</h2>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
        <ul>
          <li>Confirmação da existência de tratamento dos seus dados;</li>
          <li>Acesso, correção ou atualização dos seus dados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em excesso;</li>
          <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
          <li>Eliminação dos dados tratados com o seu consentimento;</li>
          <li>Revogação do consentimento e informação sobre o compartilhamento de dados.</li>
        </ul>

        <h2>8. Cookies</h2>
        <p>
          Utilizamos cookies e tecnologias semelhantes (incluindo pixels de rastreamento do Meta e do
          Google) para entender como você usa o site e medir o desempenho das nossas campanhas. Você
          pode desativar cookies nas configurações do seu navegador, o que pode afetar algumas
          funcionalidades do site.
        </p>

        <h2>9. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso
          não autorizado, perda, alteração ou divulgação indevida.
        </p>

        <h2>10. Alterações nesta política</h2>
        <p>
          Esta política pode ser atualizada periodicamente. A data da última atualização está indicada
          no topo desta página.
        </p>

        <h2>11. Contato</h2>
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre o tratamento dos seus dados, fale com a gente
          pelo WhatsApp:{" "}
          <a href={buildWhatsAppLink("política de privacidade")} target="_blank" rel="noopener noreferrer">
            {formattedWhatsApp}
          </a>
          .
        </p>

        <p>
          <a href="/">Voltar para a página inicial</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
