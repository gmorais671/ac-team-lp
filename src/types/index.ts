export type ServiceModality =
  | "Consultoria online"
  | "Consultoria presencial em Taubaté/SP";

export type FeatureAvailability = boolean | "optional";

export interface PlanFeatureMatrix {
  onlineConsulting: boolean;
  presentialConsulting: boolean;
  customTraining: FeatureAvailability;
  mealPlan: FeatureAvailability;
  supplementation: boolean;
  whatsappSupport: boolean;
}

export interface PlanItem {
  id: "performance" | "start" | "performance-pro" | "start-pro";
  name: string;
  modality: ServiceModality;
  location?: string;
  priceInCents: number;
  formattedPrice: string;
  billingPeriod: string;
  featured?: boolean;
  description: string;
  badge?: string;
  features: string[];
  matrix: PlanFeatureMatrix;
  selectionNote?: string;
}

export interface ComparisonMatrixRow {
  key: keyof PlanFeatureMatrix;
  label: string;
  description?: string;
}

export interface StepItem {
  step: number;
  title: string;
  summary: string;
  mediaPlaceholder: {
    type: "video" | "image";
    label: string;
    path: string;
  };
}

export interface DifferentialItem {
  id: string;
  text: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteMetaInfo {
  brandName: "ACTeam";
  coachName: string;
  headline: string;
  subheadline: string;
  officialBio: string;
  location: {
    city: string;
    state: string;
    formatted: string;
  };
  modalities: string[];
  contact: {
    whatsappNumber: string;
    whatsappFormatted: string;
    defaultMessage: string;
  };
}
