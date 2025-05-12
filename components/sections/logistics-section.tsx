"use client";

import { MapPin, Truck, Bed, Wrench } from 'lucide-react';

export function LogisticsSection() {
  const logisticsItems = [
    {
      icon: <MapPin className="h-10 w-10 text-blue-600" />,
      title: "Localização",
      details: [
        "Centro de Treinamento Especializado", 
        "Campo Grande, MS", 
        "Estrutura completa para dissecção anatômica", 
        "Ambiente controlado e seguro"
      ]
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: "Transporte",
      details: [
        "Aeroporto Internacional de Campo Grande", 
        "Transfer aeroporto-hotel incluso (Planos Gold e Diamond)", 
        "Transporte diário entre hotel e centro de treinamento", 
        "Coordenação logística completa"
      ]
    },
    {
      icon: <Bed className="h-10 w-10 text-blue-600" />,
      title: "Hospedagem",
      details: [
        "Hotel 5 estrelas parceiro (incluso nos planos Gold e Diamond)", 
        "Diárias com café da manhã", 
        "Localização central próxima ao centro de treinamento", 
        "Ambiente exclusivo para networking pós-aulas"
      ]
    },
    {
      icon: <Wrench className="h-10 w-10 text-blue-600" />,
      title: "Equipamentos",
      details: [
        "Kit cirúrgico completo fornecido", 
        "Microscópios de última geração", 
        "Equipamentos de imagem de alta definição", 
        "Material didático exclusivo"
      ]
    }
  ];

  return (
    <section id="logistics" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#102140] to-[#5CE1E6] bg-clip-text text-transparent">
            Informações Logísticas
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Tudo cuidadosamente planejado para que você foque apenas no aprendizado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {logisticsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  );
}