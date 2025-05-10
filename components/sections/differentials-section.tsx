import { Award, Clock, Microscope, ShieldCheck, Stethoscope, UserPlus, BookOpen, Gauge, HeartPulse } from "lucide-react";

const differentials = [
  {
    icon: <UserPlus className="h-8 w-8 text-blue-600" />,
    title: "Apenas 6 Participantes",
    description: "Atenção personalizada e acesso direto aos mentores."
  },
  {
    icon: <Microscope className="h-8 w-8 text-blue-600" />,
    title: "Cadáveres Fresh Frozen",
    description: "Material de alta qualidade para experiência realista."
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "3 Dias de Imersão",
    description: "Tempo suficiente para dominar as técnicas avançadas."
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
    title: "Instrumental Completo",
    description: "Todo equipamento necessário fornecido para prática."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Ambiente Regulamentado",
    description: "Laboratório credenciado com todos os requisitos legais."
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Certificação Internacional",
    description: "Documento reconhecido por instituições internacionais."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: "Material Exclusivo",
    description: "Atlas digital e vídeos das técnicas para revisão."
  },
  {
    icon: <Gauge className="h-8 w-8 text-blue-600" />,
    title: "Hands-On Intensivo",
    description: "Mais de 80% do tempo dedicado à prática."
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-blue-600" />,
    title: "Networking Premium",
    description: "Conexão com elite de profissionais da área."
  }
];

export function DifferentialsSection() {
  return (
    <section id="differentials" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Diferenciais Exclusivos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Beyond the LowerLift Cadaver Lab oferece uma experiência sem paralelos no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                {differential.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{differential.title}</h3>
              <p className="text-gray-600">{differential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}