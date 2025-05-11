export const SITE_CONFIG = {
  name: "Beyond the LowerLift",
  subtitle: "Cadaver Lab 2025",
  date: "26 a 28 de Junho de 2025",
  location: "Campo Grande, MS",
  availableSpots: 6,
  className: "Primeira Turma: Ivo Pitanguy",
  price: {
    diamond: "R$ 100.000,00",
    gold: "R$ 75.000,00",
    black: "R$ 60.000,00"
  },
  contact: {
    email: "contato@beyondlowerlift.com",
    phone: "+55 21 9999-9999",
    instagram: "@beyondlowerlift"
  }
};

export const NAVIGATION_ITEMS = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Benefícios", href: "#benefits" },
  { name: "Diferenciais", href: "#differentials" },
  { name: "Mentores", href: "#mentors" },
  { name: "Conteúdo", href: "#content" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Cronograma", href: "#schedule" },
  { name: "Logística", href: "#logistics" },
  { name: "Investimento", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export const SCHEDULE_DATA = {
  "day-1": {
    date: "26 de Junho de 2025",
    items: [
      {
        time: "08:00 - 09:00",
        title: "Recepção e credenciamento",
        description: "Café da manhã de boas-vindas",
        mentor: "Equipe Técnica"
      },
      {
        time: "09:00 - 10:30",
        title: "Aula teórica introdutória",
        description: "Fundamentos anatômicos do LowerLift",
        mentor: "Dr. Daniel Nunes"
      },
      {
        time: "10:30 - 12:00",
        title: "Live surgery demonstrativa",
        description: "Técnica avançada em cadáver",
        mentor: "Dr. João Ilgenfritz"
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço e networking",
        description: "Momento para troca de experiências"
      },
      {
        time: "13:30 - 17:00",
        title: "Hands-on: Região periocular",
        description: "Prática individualizada com mentoria",
        mentor: "Mentores"
      },
      {
        time: "17:00 - 18:00",
        title: "Debriefing e discussões",
        description: "Análise dos procedimentos do dia",
        mentor: "Mentores"
      }
    ]
  },
  "day-2": {
    date: "27 de Junho de 2025",
    items: [
      {
        time: "08:00 - 09:00",
        title: "Revisão dos conceitos do dia anterior",
        description: "Consolidação do aprendizado",
        mentor: "Dr. Daniel Nunes"
      },
      {
        time: "09:00 - 10:30",
        title: "Aula teórica avançada",
        description: "Região da face média",
        mentor: "Dr. João Ilgenfritz"
      },
      {
        time: "10:30 - 12:00",
        title: "Demonstração cirúrgica",
        description: "Técnicas de suspensão da face média",
        mentor: "Mentores"
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço e discussão de casos",
        description: "Networking e troca de experiências"
      },
      {
        time: "13:30 - 17:00",
        title: "Hands-on: Face média",
        description: "Prática com supervisão personalizada",
        mentor: "Mentores"
      },
      {
        time: "17:00 - 18:00",
        title: "Sessão de perguntas e respostas",
        description: "Esclarecimento de dúvidas técnicas",
        mentor: "Mentores"
      }
    ]
  },
  "day-3": {
    date: "28 de Junho de 2025",
    items: [
      {
        time: "08:00 - 09:00",
        title: "Integração dos conhecimentos anteriores",
        description: "Revisão geral das técnicas",
        mentor: "Dr. Daniel Nunes"
      },
      {
        time: "09:00 - 10:30",
        title: "Aula teórica final",
        description: "Região submandibular e pescoço",
        mentor: "Dr. João Ilgenfritz"
      },
      {
        time: "10:30 - 12:00",
        title: "Demonstração cirúrgica",
        description: "LowerLift completo",
        mentor: "Mentores"
      },
      {
        time: "12:00 - 13:30",
        title: "Almoço executivo",
        description: "Confraternização"
      },
      {
        time: "13:30 - 17:00",
        title: "Hands-on: Região submandibular",
        description: "Prática avançada supervisionada",
        mentor: "Mentores"
      },
      {
        time: "17:00 - 18:00",
        title: "Conclusão e certificação",
        description: "Encerramento oficial",
        mentor: "Equipe Técnica"
      }
    ]
  }
};

export const PLANS_DATA = {
  diamond: {
    name: "Diamond",
    title: "Beyond the LowerLift®️ Visitor Fellowship Diamond (7 em 1)",
    subtitle: "O Curso Diamond oferece uma Imersão Completa possibilitando Excelência e Diferenciação",
    price: "R$ 100.000,00",
    payment: "Entrada de 50% e o restante em até 10 vezes no cartão sem juros",
    features: [
      "3 Dias de Cirurgia ao Vivo",
      "1 Dia de Experiência FaceDay®️",
      "2 Dias de Dissecção em Cadáveres Frescos",
      "Material didático exclusivo",
      "Certificado internacional",
      "1 jantar exclusivo com o corpo docente",
      "2 jantares especiais com o grupo de alunos",
      "Mentoria pós-curso exclusiva (2 sessões online)",
      "Mentoria online em grupo por 12 meses",
      "Grupo de WhatsApp permanente para troca de experiência e discussão de casos por 12 meses"
    ],
    forWho: "O cirurgião que busca dominar todos os pilares do sucesso na cirurgia plástica facial: técnica cirúrgica avançada, gestão estratégica da prática e anatomia aplicada. Ideal para quem visa diferenciação máxima no mercado."
  },
  gold: {
    name: "Gold",
    title: "Beyond the LowerLift®️ Visitor Fellowship Gold (6 em 1)",
    subtitle: "O Curso Gold oferece uma Imersão anatômico-cirúrgica completa",
    price: "R$ 75.000,00",
    payment: "Entrada de 50% e o restante em até 10 vezes no cartão sem juros",
    features: [
      "1 Dia de Cirurgia ao Vivo",
      "2 Dias de Dissecção em Cadáveres Frescos",
      "Material didático exclusivo",
      "Certificado internacional",
      "2 jantares especiais com o grupo de alunos",
      "Mentoria pós-curso exclusiva (1 sessão online)",
      "Mentoria online em grupo por 6 meses",
      "Grupo de WhatsApp para troca de experiência e discussão de casos por 6 meses"
    ],
    forWho: "O cirurgião que busca dominar os pilares essenciais da cirurgia plástica facial, com foco em técnica cirúrgica e anatomia aplicada, ideal para quem busca diferenciação no mercado."
  },
  black: {
    name: "Black",
    title: "Beyond the LowerLift®️ Visitor Fellowship Black (2 em 1)",
    subtitle: "O Curso Black oferece uma Imersão anatômica completa",
    price: "R$ 60.000,00",
    payment: "Entrada de 50% e o restante em até 10 vezes no cartão sem juros",
    features: [
      "Material didático exclusivo",
      "Certificado internacional",
      "2 jantares especiais com o grupo de alunos",
      "Grupo de WhatsApp para troca de experiência e discussão de casos por 3 meses"
    ],
    forWho: "O cirurgião que busca aprofundar seus conhecimentos em anatomia aplicada à cirurgia plástica facial, com foco na base técnica necessária para resultados superiores."
  }
};

export const FAQ_DATA = [
  {
    question: "Quais são os pré-requisitos para participar do Cadaver Lab?",
    answer: "Médicos com registro ativo no CRM, preferencialmente cirurgiões plásticos, dermatologistas e otorrinolaringologistas."
  },
  {
    question: "Como é feita a inscrição e pagamento?",
    answer: "A inscrição é feita mediante preenchimento do formulário e pagamento de 50% de entrada, com restante em até 10x no cartão."
  },
  {
    question: "O que está incluso no investimento?",
    answer: "Cada plano (Diamond, Gold e Black) inclui benefícios específicos, desde material didático até experiências cirúrgicas completas."
  },
  {
    question: "É possível fazer o curso sem experiência prévia em lifting facial?",
    answer: "Sim, desde que tenha conhecimentos básicos em procedimentos faciais."
  },
  {
    question: "O certificado tem validade internacional?",
    answer: "Sim, todos os participantes recebem certificado com reconhecimento internacional."
  },
  {
    question: "Como é a política de cancelamento?",
    answer: "Entre em contato com nossa equipe para informações detalhadas."
  },
  {
    question: "Haverá edições futuras do curso?",
    answer: "Sim, mas com número limitado de turmas por ano e vagas extremamente restritas."
  },
  {
    question: "É fornecido material didático?",
    answer: "Sim, todos os planos incluem material didático exclusivo."
  }
];