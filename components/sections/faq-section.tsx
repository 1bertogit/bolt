"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const faqItems = [
  {
    question: "Como funciona a inscrição para o Beyond the LowerLift?",
    answer: "A inscrição é feita mediante análise prévia de currículo e experiência do profissional. Após aprovação, o pagamento pode ser realizado à vista com 10% de desconto ou parcelado em até 12x no cartão de crédito."
  },
  {
    question: "Qual a formação necessária para participar?",
    answer: "O curso é destinado a médicos com especialização em Cirurgia Plástica, Dermatologia ou áreas afins, que já tenham experiência básica em procedimentos cirúrgicos faciais."
  },
  {
    question: "O certificado tem validade internacional?",
    answer: "Sim, todos os participantes recebem um certificado com reconhecimento internacional, validado pelos mentores e pela instituição organizadora."
  },
  {
    question: "Posso filmar e fotografar durante o curso?",
    answer: "Sim, os participantes podem registrar suas próprias práticas. Além disso, os planos Diamond e Gold incluem vídeos profissionais da sua prática como material de estudo posterior."
  },
  {
    question: "Existe material de apoio para o curso?",
    answer: "Sim, todos os participantes recebem material didático completo, incluindo um atlas anatômico digital exclusivo e literatura científica selecionada."
  },
  {
    question: "E se eu precisar cancelar minha inscrição?",
    answer: `Em caso de cancelamento com mais de 30 dias de antecedência, o valor pago será reembolsado com desconto de 10% referente a taxas administrativas. Cancelamentos com menos de 30 dias não serão reembolsados, mas o valor poderá ser utilizado como crédito para a próxima edição do evento.`
  },
  {
    question: "Existe a possibilidade de mentorias após o curso?",
    answer: "Sim, dependendo do plano escolhido. O plano Diamond inclui 3 consultas pós-curso com os mentores, o plano Gold inclui 1 consulta, e o plano Black não inclui mentorias pós-curso."
  },
  {
    question: "Como posso entrar em contato para mais informações?",
    answer: `Você pode entrar em contato pelo e-mail ${SITE_CONFIG.contact.email}, pelo telefone ${SITE_CONFIG.contact.phone} ou pelo Instagram ${SITE_CONFIG.contact.instagram}.`
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos suas dúvidas sobre o Beyond the LowerLift Cadaver Lab.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-between p-6 text-left font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </Button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'pb-6 max-h-96' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}