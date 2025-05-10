"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Dra. Carolina Mendes",
    role: "Cirurgiã Plástica",
    location: "São Paulo, SP",
    quote: "O Beyond the LowerLift mudou completamente minha abordagem cirúrgica. A experiência em cadáver me deu uma compreensão tridimensional que nenhum livro ou vídeo poderia oferecer. Recomendo fortemente a qualquer profissional que busque excelência.",
  },
  {
    name: "Dr. Ricardo Almeida",
    role: "Cirurgião Plástico",
    location: "Rio de Janeiro, RJ",
    quote: "Participar do Cadaver Lab foi um divisor de águas na minha carreira. A atenção personalizada e o foco nas estruturas de risco me deram uma confiança que se reflete diretamente nos resultados dos meus pacientes.",
  },
  {
    name: "Dra. Fernanda Costa",
    role: "Cirurgiã Plástica",
    location: "Belo Horizonte, MG",
    quote: "A metodologia do Beyond the LowerLift é revolucionária. Poder praticar repetidamente em cadáver, com orientação direta dos mentores, acelerou minha curva de aprendizado de uma forma que eu não imaginava ser possível.",
  },
  {
    name: "Dr. Marcos Vinícius",
    role: "Cirurgião Plástico",
    location: "Brasília, DF",
    quote: "O nível de detalhe anatômico abordado no curso é impressionante. Após o Cadaver Lab, minha confiança ao realizar procedimentos complexos aumentou significativamente, e os resultados são notavelmente melhores.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = testimonials.length - 1;
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    if (testimonialsRef.current) {
      const scrollPosition = index * testimonialsRef.current.offsetWidth;
      testimonialsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? maxIndex : activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === maxIndex ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToTestimonial(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (testimonialsRef.current) {
        const scrollPosition = testimonialsRef.current.scrollLeft;
        const itemWidth = testimonialsRef.current.offsetWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    testimonialsRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      testimonialsRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Relatos de Excelência
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que dizem os profissionais que já participaram do Beyond the LowerLift.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-blue-50 h-12 w-12"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-blue-50 h-12 w-12"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </Button>
          </div>
          
          {/* Testimonials Carousel */}
          <div 
            ref={testimonialsRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                width: `${testimonials.length * 100}%`,
                transform: `translateX(-${activeIndex * (100 / testimonials.length)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full px-4 flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                    <div className="flex-shrink-0 flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 flex-shrink-0">
                        <Quote className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-blue-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic flex-grow">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToTestimonial(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}