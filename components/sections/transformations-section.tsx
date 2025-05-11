import { ArrowRight } from "lucide-react";

export function TransformationsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 mb-2">
            RESULTADOS EXCLUSIVOS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformações <span className="text-blue-600">Reais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos resultados obtidos pelos mentores utilizando as técnicas que 
            serão ensinadas no Cadaver Lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* LowerLift Case */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                LowerLift® com abordagem da região cervical
              </h3>
              <p className="text-gray-600">
                Rejuvenescimento completo do terço inferior facial com definição 
                do contorno mandibular e correção da flacidez cervical.
              </p>
            </div>
            
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10" />
              <img
                src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg"
                alt="LowerLift Before"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-20">
                Antes
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm z-20">
                Depois
              </div>
            </div>

            <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Aprenda esta técnica no curso
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Face Média Case */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Face Média com Técnica Deep Plane
              </h3>
              <p className="text-gray-600">
                Elevação da face média com abordagem profunda, preservando a 
                naturalidade da expressão facial.
              </p>
            </div>
            
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10" />
              <img
                src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg"
                alt="Deep Plane Before"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-20">
                Antes
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm z-20">
                Depois
              </div>
            </div>

            <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Aprenda esta técnica no curso
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto">
          No Beyond the LowerLift Cadaver Lab, você aprenderá as técnicas exatas 
          utilizadas para obter estes resultados.
        </p>
      </div>
    </section>
  );
}