"use client";

import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function TransformationsSection() {
  const [isResizing, setIsResizing] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

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
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              LowerLift® com abordagem da região cervical
            </h3>
            <p className="text-gray-600 mb-6">
              Rejuvenescimento completo do terço inferior facial com definição 
              do contorno mandibular e correção da flacidez cervical.
            </p>

            <div 
              ref={containerRef}
              className="relative w-full h-full cursor-col-resize"
              style={{ aspectRatio: '3/4' }}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg"
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg"
                  alt="Antes"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white opacity-70 cursor-col-resize flex items-center justify-center transform -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Antes
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Depois
              </div>
            </div>

            <button className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Aprenda esta técnica no curso
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Face Média Case */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Face Média com Técnica Deep Plane
            </h3>
            <p className="text-gray-600 mb-6">
              Elevação da face média com abordagem profunda, preservando a 
              naturalidade da expressão facial.
            </p>

            <div 
              className="relative w-full h-full cursor-col-resize"
              style={{ aspectRatio: '3/4' }}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg"
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg"
                  alt="Antes"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white opacity-70 cursor-col-resize flex items-center justify-center transform -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Antes
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Depois
              </div>
            </div>

            <button className="mt-6 inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
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