import type {
  ComparisonMatrixRow,
  DifferentialItem,
  FaqItem,
  NavLinkItem,
  PlanItem,
  SiteMetaInfo,
  StepItem,
} from "@/types";

export const siteInfo: SiteMetaInfo = {
  brandName: "ACTeam",
  coachName: "Aleff Cesar",
  headline: "A SUA MELHOR VERSÃO COMEÇA AGORA",
  subheadline:
    "Consultoria personalizada que une treinamento de força e nutrição para transformar sua rotina com estratégia, consistência e foco em performance e estética.",
  officialBio:
    "Atendimento presencial em Taubaté/SP e consultoria online para alunos em todo o Brasil e exterior. Especialista em unir treinamento de força e nutrição para maximizar sua performance e estética corporal.",
  location: { city: "Taubaté", state: "SP", formatted: "Taubaté/SP" },
  modalities: [
    "Consultoria presencial em Taubaté/SP",
    "Consultoria online para alunos em todo o Brasil e exterior",
  ],
  contact: {
    whatsappNumber: "5512978503248",
    whatsappFormatted: "+55 12 97850-3248",
    defaultMessage:
      "Olá, Aleff! Tenho interesse em um acompanhamento da ACTeam e gostaria de saber mais sobre as opções disponíveis.",
  },
};

export const navigationLinks: NavLinkItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export const differentials: DifferentialItem[] = [
  { id: "direct-professional", text: "Consultoria conduzida pelo mesmo profissional do início ao fim" },
  { id: "qualified-planning", text: "Nutricionista e Personal Trainer responsáveis por todo o planejamento" },
  { id: "individualized-care", text: "Atendimento verdadeiramente individualizado" },
  { id: "evidence-based", text: "Estratégias baseadas em evidências científicas" },
  { id: "constant-adjustments", text: "Ajustes constantes conforme sua evolução" },
  { id: "whatsapp-support", text: "Suporte direto via WhatsApp" },
];

export const howItWorksSteps: StepItem[] = [
  { step: 1, title: "Avaliação Inicial", summary: "Videochamada ou presencial para conhecer sua rotina, objetivos e histórico.", mediaPlaceholder: { type: "video", label: "Vídeo da avaliação inicial em breve", path: "/videos/TODO-avaliacao-inicial.mp4" } },
  { step: 2, title: "Planejamento", summary: "Em até 3 dias úteis você recebe seu protocolo 100% individualizado.", mediaPlaceholder: { type: "video", label: "Vídeo do planejamento em breve", path: "/videos/TODO-planejamento.mp4" } },
  { step: 3, title: "Acompanhamento", summary: "Suporte via WhatsApp, ajustes periódicos e evolução contínua.", mediaPlaceholder: { type: "video", label: "Vídeo do acompanhamento em breve", path: "/videos/TODO-acompanhamento.mp4" } },
];

const performanceFeatures = { onlineConsulting: true, presentialConsulting: false, customTraining: true, mealPlan: true, supplementation: true, whatsappSupport: true } as const;
const startFeatures = { onlineConsulting: true, presentialConsulting: false, customTraining: "optional", mealPlan: "optional", supplementation: false, whatsappSupport: true } as const;
const performanceProFeatures = { onlineConsulting: false, presentialConsulting: true, customTraining: true, mealPlan: true, supplementation: true, whatsappSupport: true } as const;
const startProFeatures = { onlineConsulting: false, presentialConsulting: true, customTraining: "optional", mealPlan: "optional", supplementation: false, whatsappSupport: true } as const;

export const plans: PlanItem[] = [
  { id: "performance", name: "ACTeam Performance", modality: "Consultoria online", priceInCents: 30000, formattedPrice: "R$ 300,00", billingPeriod: "por mês", featured: true, badge: "Mais completo", description: "Estratégia completa para performance e estética no online.", features: ["Consultoria online", "Treino personalizado", "Plano alimentar", "Suplementação", "Suporte via WhatsApp"], matrix: performanceFeatures },
  { id: "start", name: "ACTeam Start", modality: "Consultoria online", priceInCents: 22000, formattedPrice: "R$ 220,00", billingPeriod: "por mês", description: "O ponto de partida para começar sua evolução com orientação.", features: ["Consultoria online", "Treino personalizado ou plano alimentar", "Suporte via WhatsApp"], matrix: startFeatures, selectionNote: "Você escolhe entre treino personalizado ou plano alimentar." },
  { id: "performance-pro", name: "ACTeam Performance Pro", modality: "Consultoria presencial em Taubaté/SP", location: "Taubaté/SP", priceInCents: 35000, formattedPrice: "R$ 350,00", billingPeriod: "por mês", description: "Acompanhamento presencial completo em Taubaté/SP.", features: ["Consultoria presencial", "Treino personalizado", "Plano alimentar", "Suplementação", "Suporte via WhatsApp"], matrix: performanceProFeatures },
  { id: "start-pro", name: "ACTeam Start Pro", modality: "Consultoria presencial em Taubaté/SP", location: "Taubaté/SP", priceInCents: 27000, formattedPrice: "R$ 270,00", billingPeriod: "por mês", description: "Comece seu acompanhamento presencial com uma estratégia objetiva.", features: ["Consultoria presencial", "Treino personalizado ou plano alimentar", "Suporte via WhatsApp"], matrix: startProFeatures, selectionNote: "Você escolhe entre treino personalizado ou plano alimentar." },
];

export const comparisonMatrixRows: ComparisonMatrixRow[] = [
  { key: "onlineConsulting", label: "Consultoria online" },
  { key: "presentialConsulting", label: "Consultoria presencial" },
  { key: "customTraining", label: "Treino personalizado" },
  { key: "mealPlan", label: "Plano alimentar" },
  { key: "supplementation", label: "Suplementação" },
  { key: "whatsappSupport", label: "Suporte via WhatsApp" },
];

export const comparisonOptionalNote = "Nos planos Start e Start Pro, o cliente escolhe entre treino personalizado ou plano alimentar.";

export const faqItems: FaqItem[] = [
  { question: "Para quem é o acompanhamento?", answer: "Para pessoas que buscam orientação individualizada para evoluir com treinamento de força e nutrição, respeitando seus objetivos e sua rotina." },
  { question: "O atendimento é online ou presencial?", answer: "A ACTeam oferece consultoria online para alunos no Brasil e no exterior, além de consultoria presencial em Taubaté/SP." },
  { question: "Como funciona a avaliação inicial?", answer: "A avaliação pode ser feita por videochamada ou presencialmente, para conhecer sua rotina, objetivos e histórico." },
  { question: "O treino é personalizado?", answer: "Sim. Nos planos em que está incluído, o treino é construído de forma individualizada conforme sua estratégia e seu objetivo." },
  { question: "A nutrição faz parte do acompanhamento?", answer: "Sim. O plano alimentar está incluído nos planos Performance. Nos planos Start, você escolhe entre receber um treino personalizado ou um plano alimentar." },
  { question: "Como são realizados os ajustes?", answer: "O acompanhamento inclui suporte via WhatsApp, ajustes periódicos e orientação contínua durante o processo." },
];
