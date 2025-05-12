"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Scissors, Brain, Shield, Target, Clock } from "lucide-react";

export function TechniquesSection() {
  const techniques = [
    {
      icon: <Microscope className="h-8 w-8 text-blue-600" />,
      title: "Deep Plane Facelift",
      description: "Técnica avançada para rejuvenescimento facial profundo com resultados naturais e duradouros.",
      details: [
        "Dissecção no plano sub-SMAS",
        "Preservação de estruturas neurovasculares",
        "Reposicionamento volumétrico",
        "Vetores de suspensão otimizados"
      ]
    },
    {
      icon: <Scissors className="h-8 w-8 text-blue-600" />,
      title: "LowerLift® Avançado",
      description: "Abordagem inovadora para definição do terço inferior da face e região cervical.",
      details: [
        "Tratamento do SMAS cervical",
        "Manejo da banda platismal",
        "Definição mandibular",
        "Correção submentoniana"
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Anatomia Aplicada",
      description: "Estudo detalhado das estruturas anatômicas críticas para procedimentos seguros.",
      details: [
        "Mapeamento neurovascular",
        "Planos de dissecção seguros",
        "Variações anatômicas",
        "Pontos de referência"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Técnicas de Segurança",
      description: "Protocolos avançados para minimizar riscos e complicações cirúrgicas.",
      details: [
        "Identificação de estruturas nobres",
        "Manejo de complicações",
        "Zonas de segurança",
        "Prevenção de intercorrências"
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Vetores de Suspensão",
      description: "Planejamento estratégico dos vetores para resultados harmoniosos.",
      details: [
        "Análise vetorial personalizada",
        "Pontos de ancoragem",
        "Distribuição de forças",
        "Harmonização facial"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Otimização de Tempo",
      description: "Estratégias para procedimentos eficientes sem comprometer a qualidade.",
      details: [
        "Sequência cirúrgica otimizada",
        "Técnicas de sutura avançadas",
        "Manejo do tempo operatório",
        "Protocolos de eficiência"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Técnicas <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Avançadas</span> Abordadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Domine as técnicas mais modernas e eficazes em rejuvenescimento facial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                      {technique.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{technique.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{technique.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {technique.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-50 border border-blue-100 px-6 py-4 rounded-xl">
            <p className="text-blue-600 font-medium">
              Todas as técnicas incluem prática hands-on em cadáver com supervisão direta dos mentores
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}