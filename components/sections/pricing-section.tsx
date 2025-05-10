"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const plans = [
  {
    name: "Black",
    price: SITE_CONFIG.price.black,
    discount: "10% de desconto para pagamento à vista",
    description: "Experiência completa com foco em prática e aprendizado técnico.",
    features: [
      { text: "3 dias de imersão em cadáver", included: true },
      { text: "Material didático completo", included: true },
      { text: "Networking com participantes", included: true },
      { text: "Certificado internacional", included: true },
      { text: "Grupo VIP de suporte", included: false },
      { text: "Consulta pós-curso com mentores", included: false },
      { text: "Vídeos da sua própria prática", included: false },
      { text: "Acesso vitalício ao conteúdo", included: false },
    ]
  },
  {
    name: "Diamond",
    price: SITE_CONFIG.price.diamond,
    discount: "10% de desconto para pagamento à vista",
    description: "A experiência definitiva para profissionais que buscam excelência absoluta.",
    features: [
      { text: "3 dias de imersão em cadáver", included: true },
      { text: "Material didático completo", included: true },
      { text: "Networking com participantes", included: true },
      { text: "Certificado internacional", included: true },
      { text: "Grupo VIP de suporte", included: true },
      { text: "3 Consultas pós-curso com mentores", included: true },
      { text: "Vídeos da sua própria prática", included: true },
      { text: "Acesso vitalício ao conteúdo", included: true },
    ],
    highlight: true
  },
  {
    name: "Gold",
    price: SITE_CONFIG.price.gold,
    discount: "10% de desconto para pagamento à vista",
    description: "Experiência premium com benefícios adicionais para potencializar seu aprendizado.",
    features: [
      { text: "3 dias de imersão em cadáver", included: true },
      { text: "Material didático completo", included: true },
      { text: "Networking com participantes", included: true },
      { text: "Certificado internacional", included: true },
      { text: "Grupo VIP de suporte", included: true },
      { text: "1 Consulta pós-curso com mentores", included: true },
      { text: "Vídeos da sua própria prática", included: false },
      { text: "Acesso vitalício ao conteúdo", included: false },
    ]
  },
];

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string>("Diamond");

  const handleSelect = (planName: string) => {
    setSelectedPlan(planName);
    toast(`Plano ${planName} selecionado!`, {
      description: "Entre em contato para finalizar sua inscrição.",
      action: {
        label: "Contato",
        onClick: () => window.location.href = `mailto:${SITE_CONFIG.contact.email}`,
      },
    });
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investimento em Sua Excelência Profissional
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Escolha o plano que melhor se adequa às suas necessidades e transforme sua prática cirúrgica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`rounded-xl overflow-hidden ${
                plan.highlight 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl transform md:-translate-y-4 scale-105' 
                  : 'bg-white/10 backdrop-blur-sm'
              }`}
            >
              {plan.highlight && (
                <div className="bg-yellow-500 text-blue-900 py-2 text-center font-bold text-sm">
                  RECOMENDADO
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-blue-200'}`}>
                  Plano {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <p className="text-sm text-blue-200 mt-1">{plan.discount}</p>
                </div>
                <p className={`mb-6 ${plan.highlight ? 'text-blue-100' : 'text-blue-300'}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <CheckCircle className={`h-5 w-5 ${plan.highlight ? 'text-green-400' : 'text-green-500'} flex-shrink-0 mt-0.5`} />
                      ) : (
                        <XCircle className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-white' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? 'bg-white hover:bg-blue-50 text-blue-900' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  size="lg"
                  onClick={() => handleSelect(plan.name)}
                >
                  {selectedPlan === plan.name ? 'Plano Selecionado' : 'Selecionar Plano'}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-200 max-w-3xl mx-auto mb-6">
            Aceitamos pagamento parcelado em até 12x no cartão de crédito.
            Parcelamento em até 24x via boleto mediante análise.
          </p>
          <Button 
            size="lg" 
            className="bg-white hover:bg-blue-50 text-blue-900 font-bold"
            onClick={() => window.location.href = `mailto:${SITE_CONFIG.contact.email}?subject=Interesse em Beyond the LowerLift`}
          >
            FALAR COM UM CONSULTOR
          </Button>
        </div>
      </div>
    </section>
  );
}