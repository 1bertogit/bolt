"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from 'lucide-react';
import { SITE_CONFIG } from "@/lib/constants";

const plans = [
  {
    name: "Diamond",
    color: "text-[#77d1d6]",
    bgColor: "bg-[#e6f7f8]",
    price: SITE_CONFIG.price.diamond,
    priceInstallments: "10x de R$ 2.399,70",
    features: ["Acesso completo ao laboratório cadavérico", "Material cirúrgico premium", "Coffee break e almoço executivo", "Hospedagem 5 estrelas (3 diárias)", "Transfers aeroporto/hotel/laboratório", "Kit exclusivo Diamond", "Certificado internacional", "Acesso à biblioteca digital vitalício", "Gravação HD individual da cirurgia", "Jantar com mentores"],
    cta: "Garantir Vaga Diamond"
  }, 
  {
    name: "Gold",
    color: "text-[#d4af37]",
    bgColor: "bg-[#fbf7e9]",
    price: SITE_CONFIG.price.gold,
    priceInstallments: "10x de R$ 1.999,70",
    features: ["Acesso completo ao laboratório cadavérico", "Material cirúrgico standard", "Coffee break e almoço", "Hospedagem 4 estrelas (3 diárias)", "Transfers aeroporto/hotel/laboratório", "Kit Gold", "Certificado internacional", "Acesso à biblioteca digital (1 ano)", "Gravação HD individual da cirurgia", "—"],
    cta: "Garantir Vaga Gold"
  }, 
  {
    name: "Black",
    color: "text-white",
    bgColor: "bg-black",
    price: SITE_CONFIG.price.black,
    priceInstallments: "10x de R$ 1.599,70",
    features: ["Acesso completo ao laboratório cadavérico", "Material cirúrgico standard", "Coffee break", "—", "—", "Kit Black", "Certificado internacional", "Acesso à biblioteca digital (6 meses)", "—", "—"],
    cta: "Garantir Vaga Black"
  }
];

export function PlansComparisonSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/556791155498', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Pacotes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Escolha o plano que melhor atende às suas necessidades e dê um salto em sua carreira cirúrgica com a experiência Beyond LowerLift Cadaver Lab.
        </p>

        <div className="hidden md:block">
          <Table className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-1/4">Benefícios</TableHead>
                {plans.map(plan => (
                  <TableHead 
                    key={plan.name} 
                    className={`w-1/4 text-center ${plan.bgColor} ${plan.name === "Black" ? "text-white" : ""}`}
                  >
                    <span className={`text-xl font-bold ${plan.color}`}>{plan.name}</span>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Investimento</TableCell>
                {plans.map(plan => (
                  <TableCell key={`${plan.name}-price`} className="text-center">
                    <div className="font-bold text-lg">{plan.price}</div>
                    <div className="text-sm text-gray-500">{plan.priceInstallments}</div>
                  </TableCell>
                ))}
              </TableRow>

              {plans[0].features.map((_, featureIndex) => (
                <TableRow key={`feature-${featureIndex}`}>
                  <TableCell className="font-medium">{plans[0].features[featureIndex]}</TableCell>
                  {plans.map(plan => (
                    <TableCell key={`${plan.name}-${featureIndex}`} className="text-center">
                      {plan.features[featureIndex] === "—" ? (
                        <X className="mx-auto text-red-500" size={20} />
                      ) : (
                        <Check className="mx-auto text-green-500" size={20} />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              <TableRow>
                <TableCell></TableCell>
                {plans.map(plan => (
                  <TableCell key={`${plan.name}-cta`} className="text-center p-4">
                    <Button 
                      className={`w-full ${
                        plan.name === 'Diamond' ? 'bg-blue-600 hover:bg-blue-700' : 
                        plan.name === 'Gold' ? 'bg-[#d4af37] hover:bg-[#b8971f]' : 
                        'bg-black hover:bg-gray-800'
                      }`}
                      onClick={handleWhatsAppClick}
                    >
                      {plan.cta}
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-8">
          {plans.map(plan => (
            <div 
              key={plan.name} 
              className={`rounded-lg overflow-hidden shadow-lg border border-gray-200 ${plan.bgColor}`}
            >
              <div className={`p-4 ${plan.name === "Black" ? "bg-black text-white" : plan.bgColor}`}>
                <h3 className={`text-2xl font-bold text-center ${plan.color}`}>{plan.name}</h3>
                <div className="text-center my-4">
                  <div className="font-bold text-2xl">{plan.price}</div>
                  <div className="text-sm opacity-75">{plan.priceInstallments}</div>
                </div>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      {feature === "—" ? (
                        <X className="mr-2 text-red-500 flex-shrink-0" size={16} />
                      ) : (
                        <Check className="mr-2 text-green-500 flex-shrink-0" size={16} />
                      )}
                      <span className="text-sm">
                        {feature === "—" ? plans[0].features[idx] : feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button 
                    className={`w-full ${
                      plan.name === 'Diamond' ? 'bg-blue-600 hover:bg-blue-700' : 
                      plan.name === 'Gold' ? 'bg-[#d4af37] hover:bg-[#b8971f]' : 
                      'bg-black hover:bg-gray-800'
                    }`}
                    onClick={handleWhatsAppClick}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>* Vagas limitadas a 2 por plano (total de 6 participantes)</p>
          <p>* Valores sujeitos a alteração sem aviso prévio</p>
        </div>
      </div>
    </section>
  );
}