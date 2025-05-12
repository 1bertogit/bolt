
import React from 'react';
import { MapPin, Truck, Bed, Wrench } from 'lucide-react';

const LogisticsSection: React.FC = () => {
  const logisticsItems = [
    {
      icon: <MapPin className="h-10 w-10 text-medical-blue" />,
      title: "Localização",
      details: [
        "Centro de Treinamento Especializado", 
        "Campo Grande, MS", 
        "Estrutura completa para dissecção anatômica", 
        "Ambiente controlado e seguro"
      ]
    },
    {
      icon: <Truck className="h-10 w-10 text-medical-blue" />,
      title: "Transporte",
      details: [
        "Aeroporto Internacional de Campo Grande", 
        "Transfer aeroporto-hotel incluso (Planos Gold e Diamond)", 
        "Transporte diário entre hotel e centro de treinamento", 
        "Coordenação logística completa"
      ]
    },
    {
      icon: <Bed className="h-10 w-10 text-medical-blue" />,
      title: "Hospedagem",
      details: [
        "Hotel 5 estrelas parceiro (incluso nos planos Gold e Diamond)", 
        "Diárias com café da manhã", 
        "Localização central próxima ao centro de treinamento", 
        "Ambiente exclusivo para networking pós-aulas"
      ]
    },
    {
      icon: <Wrench className="h-10 w-10 text-medical-blue" />,
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
    <section id="logistics" className="section bg-white">
      <div className="container">
        <h2 className="text-gradient bg-gradient-to-r from-[#102140] to-[#5CE1E6] bg-clip-text text-transparent font-montserrat font-bold text-4xl mb-4 text-center">
          Informações Logísticas
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
              <h3 className="text-xl font-semibold text-center font-montserrat text-medical-dark mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-medical-blue mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-medical-light p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="font-semibold text-xl text-medical-dark mb-4 font-montserrat">Pré-requisitos</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-medical-blue font-bold mr-2">•</span>
              <span>Médicos com registro ativo no Conselho Regional de Medicina (CRM)</span>
            </li>
            <li className="flex items-start">
              <span className="text-medical-blue font-bold mr-2">•</span>
              <span>Preferencialmente cirurgiões plásticos, dermatologistas e otorrinolaringologistas</span>
            </li>
            <li className="flex items-start">
              <span className="text-medical-blue font-bold mr-2">•</span>
              <span>Conhecimento básico em procedimentos faciais (introdutório ou intermediário)</span>
            </li>
            <li className="flex items-start">
              <span className="text-medical-blue font-bold mr-2">•</span>
              <span>Interesse em aprimorar técnicas avançadas de rejuvenescimento facial</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
