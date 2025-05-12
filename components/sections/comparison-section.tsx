import { CheckCircle, XCircle } from "lucide-react";

const comparisonData = [
  {
    title: "Conhecimento Teórico",
    traditional: "Compreensão limitada à teoria e visualização 2D",
    beyond: "Visão tridimensional real e palpável das estruturas anatômicas"
  },
  {
    title: "Prática Cirúrgica",
    traditional: "Primeira experiência em pacientes reais",
    beyond: "Treinamento prévio em cadáver com anatomia real"
  },
  {
    title: "Identificação de Estruturas",
    traditional: "Dificuldade em identificar variações anatômicas",
    beyond: "Exposição a diferentes variações e anomalias anatômicas"
  },
  {
    title: "Curva de Aprendizado",
    traditional: "Lenta, baseada em erros e acertos com pacientes",
    beyond: "Acelerada, com feedback imediato dos mentores"
  },
  {
    title: "Confiança Cirúrgica",
    traditional: "Desenvolvida gradualmente ao longo de anos",
    beyond: "Imediata, baseada em experiência prática prévia"
  },
  {
    title: "Resultado para Pacientes",
    traditional: "Variável, com maior risco de complicações iniciais",
    beyond: "Consistente, com redução significativa de riscos"
  }
];

export function ComparisonSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Limite Invisível vs. Atalho Real
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o Beyond the LowerLift transforma sua jornada de aprendizado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-100 p-4 rounded-t-xl font-bold text-gray-800">
            <div className="px-4 py-2">Aspecto</div>
            <div className="px-4 py-2 text-red-600">Método Tradicional</div>
            <div className="px-4 py-2 text-blue-600">Beyond the LowerLift</div>
          </div>
          
          {comparisonData.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } ${
                index === comparisonData.length - 1 ? 'rounded-b-xl' : ''
              }`}
            >
              <div className="px-4 py-2 font-medium text-gray-800">{item.title}</div>
              <div className="px-4 py-2 flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item.traditional}</span>
              </div>
              <div className="px-4 py-2 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item.beyond}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}