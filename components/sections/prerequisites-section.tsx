import { CheckCircle } from "lucide-react";

const prerequisites = [
  "Ser médico(a) com especialização em Cirurgia Plástica, Dermatologia ou áreas afins",
  "Ter experiência prévia em procedimentos cirúrgicos faciais",
  "Conhecimento básico de anatomia da face e pescoço",
  "Dispor de todos os dias do evento para imersão completa",
  "Comprometimento com o aprendizado e compartilhamento de experiências"
];

export function PrerequisitesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pré-Requisitos para Participação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Para garantir um aproveitamento máximo, os participantes devem atender aos seguintes requisitos:
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8">
          <ul className="space-y-4">
            {prerequisites.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}