import { AlertTriangle } from "lucide-react";

const frustrations = [
  "Falta de prática em cadáver antes de operar pacientes reais",
  "Insegurança ao realizar procedimentos de elevada complexidade",
  "Cursos teóricos que não abordam adequadamente a anatomia prática",
  "Técnicas cirúrgicas avançadas sem demonstração em ambiente real",
  "Pouca exposição a variações anatômicas comuns",
  "Dificuldade em visualizar estruturas nobres durante procedimentos"
];

export function FrustrationsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frustrações Comuns na Prática Cirúrgica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mesmo cirurgiões experientes enfrentam desafios que poderiam ser superados com treinamento anatômico avançado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frustrations.map((frustration, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <p className="text-gray-700 font-medium">{frustration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}