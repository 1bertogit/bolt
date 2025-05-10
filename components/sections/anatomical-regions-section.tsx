import { Brain, HeartPulse, Eye } from "lucide-react";

const regions = [
  {
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    title: "Face Média e Inferior",
    description: "Anatomia neurovascular completa da face, com foco nos terços médio e inferior.",
    details: "Inclui SMAS, ligamentos de retenção, plano submuscular, gordura malar e compartimentos faciais."
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-blue-600" />,
    title: "Região Cervical",
    description: "Estruturas anatômicas do pescoço e transição cervicofacial.",
    details: "Inclui platisma, fáscias cervicais, trígono submandibular e estruturas neurovasculares críticas."
  },
  {
    icon: <Eye className="h-10 w-10 text-blue-600" />,
    title: "Região Periorbital",
    description: "Anatomia detalhada da região periorbital e técnicas de rejuvenescimento.",
    details: "Inclui septos orbitais, ROOF, SOOF, ligamentos e vascularização periorbital."
  }
];

export function AnatomicalRegionsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Regiões Anatômicas Abordadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Foco nas áreas de maior desafio técnico e risco cirúrgico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md duration-300"
            >
              <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6">
                {region.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{region.title}</h3>
              <p className="text-gray-700 mb-4 text-center">{region.description}</p>
              <p className="text-gray-600 text-sm mb-4">{region.details}</p>
              <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Abordada em profundidade durante o curso</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}