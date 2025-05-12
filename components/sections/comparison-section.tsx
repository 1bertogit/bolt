"use client";

import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Users, CircleSlash, User, MessageSquare, BookCheck, TrendingUp, ShieldOff, Zap } from 'lucide-react';

interface ComparisonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColorClass: string;
  iconBgGradient: string;
  index: number;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ icon, title, description, borderColorClass, iconBgGradient, index }) => {
  return (
    <div
      className={`comparison-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-l-4 ${borderColorClass} opacity-0 transform translate-y-5`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full ${iconBgGradient} flex items-center justify-center text-white shadow-md`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const limiteInvisivelCardsData = [
  {
    icon: <ShieldOff size={24} />,
    title: "Simulações Distantes da Realidade",
    description: "Treinamentos em materiais sintéticos ou modelos que não reproduzem a consistência e as variações anatômicas reais, limitando a transferência de habilidade.",
    borderColorClass: "border-rose-500",
    iconBgGradient: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
  {
    icon: <Users size={24} />,
    title: "Cursos Massificados e Impessoais",
    description: "Salas com muitos alunos, onde o contato direto com o instrutor é mínimo e o aprendizado prático é comprometido pela falta de atenção individualizada.",
    borderColorClass: "border-rose-500",
    iconBgGradient: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
  {
    icon: <CircleSlash size={24} />,
    title: "Conhecimento Teórico Fragmentado",
    description: "Informação teórica dispersa, sem integração prática efetiva ou sem o aprofundamento necessário nos pontos críticos e nuances da técnica.",
    borderColorClass: "border-rose-500",
    iconBgGradient: "bg-gradient-to-br from-rose-500 to-pink-500",
  },
];

const atalhoRealCardsData = [
  {
    icon: <User size={24} />,
    title: "Cadáver Fresco: Textura e Anatomia Reais",
    description: "Pratique em tecidos que reproduzem fielmente a experiência cirúrgica, compreendendo as nuances da anatomia e a interação com as estruturas.",
    borderColorClass: "border-cyan-500",
    iconBgGradient: "bg-gradient-to-br from-cyan-500 to-sky-500",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Mentoria Direta e Personalizada",
    description: "Apenas 6 participantes por turma, recebendo feedback contínuo e ajustes técnicos personalizados, permitindo rápida correção e aprimoramento.",
    borderColorClass: "border-cyan-500",
    iconBgGradient: "bg-gradient-to-br from-cyan-500 to-sky-500",
  },
  {
    icon: <BookCheck size={24} />,
    title: "Documentação Científica e Prática Completa",
    description: "Material exclusivo detalhando cada etapa da técnica, com suporte teórico-prático robusto para revisão e consolidação do conhecimento.",
    borderColorClass: "border-cyan-500",
    iconBgGradient: "bg-gradient-to-br from-cyan-500 to-sky-500",
  },
];

export function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    if (!currentSectionRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll<HTMLElement>('.comparison-card');
            cards.forEach((card) => {
              card.classList.add('visible');
            });
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(currentSectionRef);

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section id="comparison" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            A Diferença Crucial no Seu Aprendizado
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entenda por que nossa abordagem acelera sua curva de aprendizado e eleva sua confiança cirúrgica.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Coluna "O Limite Invisível" */}
          <div className="space-y-6">
            <div className="flex items-center mb-6 md:mb-8">
              <span className="p-2 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg mr-3 shadow-md">
                <TrendingUp size={28} className="text-white transform -scale-x-100" /> 
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-rose-600">
                O <span className="font-bold">Limite Invisível</span>
              </h2>
            </div>
            {limiteInvisivelCardsData.map((card, index) => (
              <ComparisonCard key={`limite-${index}`} {...card} index={index} />
            ))}
          </div>

          {/* Coluna "O Atalho Real" */}
          <div className="space-y-6">
            <div className="flex items-center mb-6 md:mb-8">
               <span className="p-2 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-lg mr-3 shadow-md">
                <Zap size={28} className="text-white" />
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-600">
                O <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-600">Atalho Real</span>
              </h2>
            </div>
            {atalhoRealCardsData.map((card, index) => (
              <ComparisonCard key={`atalho-${index}`} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison-card {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s ease-in-out;
        }
        .comparison-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .comparison-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
}