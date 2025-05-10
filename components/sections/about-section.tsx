import { BookOpen, LayoutGrid, Microscope } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que é o Beyond the LowerLift: Cadaver Lab?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma imersão completa em anatomia cirúrgica e técnicas avançadas, com prática em cadáver e mentoria personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <Microscope className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Anatomia Avançada</h3>
            <p className="text-gray-600">
              Dissecção detalhada de estruturas anatômicas críticas com foco em regiões de alto risco cirúrgico.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <LayoutGrid className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Técnica Cirúrgica</h3>
            <p className="text-gray-600">
              Demonstração e prática de técnicas inovadoras com feedback imediato dos mentores especialistas.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Metodologia Exclusiva</h3>
            <p className="text-gray-600">
              Abordagem passo a passo das técnicas mais avançadas para garantir segurança e eficácia nos procedimentos.
            </p>
          </div>
        </div>
        
        {/* Material Científico Exclusivo */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 border border-blue-200 rounded-xl shadow-sm max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Material Científico Exclusivo</h3>
              <p className="text-blue-700">
                Todos os participantes receberão material científico exclusivo, incluindo atlas anatômico digital, 
                vídeos das técnicas e acesso vitalício à comunidade Beyond the LowerLift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}