"use client";

import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { motion } from "framer-motion";

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

export function TableComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Limite Invisível vs. <span className="text-blue-600">Atalho Real</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o Beyond the LowerLift transforma sua jornada de aprendizado.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            {/* Cabeçalho da Tabela */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-50">
              <div className="px-6 py-4 font-semibold text-gray-900">
                Aspecto
              </div>
              <div className="px-6 py-4 font-semibold text-red-600">
                Método Tradicional
              </div>
              <div className="px-6 py-4 font-semibold text-blue-600">
                Beyond the LowerLift
              </div>
            </div>
            
            {/* Linhas da Tabela */}
            {comparisonData.map((item, index) => (
              <div  
                key={index}  
                className={`grid grid-cols-1 md:grid-cols-3 gap-px ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-blue-50/30 transition-colors duration-300`}
              >
                <div className="px-6 py-4 font-medium text-gray-900">
                  {item.title}
                </div>
                <div className="px-6 py-4 flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item.traditional}</span>
                </div>
                <div className="px-6 py-4 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item.beyond}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforme sua prática cirúrgica com uma experiência de aprendizado única e comprovadamente eficaz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}