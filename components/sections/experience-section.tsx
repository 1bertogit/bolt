import { CheckCircle, Clock, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Exclusividade",
    description: "Apenas 6 participantes selecionados para uma experiência personalizada."
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "Imersão Total",
    description: "3 dias de treinamento intensivo com mais de 24 horas de prática."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
    title: "Resultados Comprovados",
    description: "Metodologia testada e aprovada por mais de 200 profissionais."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Uma Experiência Exclusiva
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Beyond the LowerLift Cadaver Lab foi desenvolvido para profissionais que buscam excelência e domínio completo das técnicas cirúrgicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center transition-transform hover:shadow-md hover:-translate-y-1 duration-300"
            >
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}