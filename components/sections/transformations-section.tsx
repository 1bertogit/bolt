"use client";

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
          <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <div className="p-6 flex flex-col justify-between order-1 md:order-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  LowerLift® com abordagem da região cervical
                </h3>
                <p className="text-gray-600">
                  Rejuvenescimento completo do terço inferior facial com definição 
                  do contorno mandibular e correção da flacidez cervical.
                </p>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Aprenda esta técnica no curso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="relative w-full h-full cursor-col-resize">
              <div className="grid grid-cols-2 divide-x divide-white">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg"
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    Antes
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg"
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Depois
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Face Média Case */}
          <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <div className="p-6 flex flex-col justify-between order-1 md:order-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Face Média com Técnica Deep Plane
                </h3>
                <p className="text-gray-600">
                  Elevação da face média com abordagem profunda, preservando a 
                  naturalidade da expressão facial.
                </p>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Aprenda esta técnica no curso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="relative w-full h-full cursor-col-resize">
              <div className="grid grid-cols-2 divide-x divide-white">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg"
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    Antes
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg"
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Depois
                  </div>
                </div>
              </div>
            </div>
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