export interface PortfolioProfile {
  name: string;
  title: string;
  experience: string;
  summary: string;
  focusAreas: readonly string[];
  cloudPlatforms: readonly string[];
  linkedInUrl?: string;
}

export interface ImpactHighlight {
  metric: string;
  title: string;
  description: string;
}

export interface ResponsibilityGroup {
  title: string;
  description: string;
}

export interface ProfessionalExperience {
  company: string;
  role: string;
  dates: string;
  tenure: string;
  summary: string;
  responsibilities: readonly ResponsibilityGroup[];
}

export interface EnterpriseInitiative {
  title: string;
  context: string;
  contribution: string;
  technologies: readonly string[];
  outcome?: string;
}

export interface SkillGroup {
  title: string;
  skills: readonly string[];
}

export interface ContactDetails {
  email?: string;
  /** Configure only after a verified public URL is available. */
  githubUrl?: string;
  /** Configure only after a verified public URL is available. */
  instagramUrl?: string;
  /** Keep disabled unless a public phone number is explicitly approved. */
  phone?: string;
}

export interface EnquiryTypeOption {
  value: string;
  label: string;
}

/** Public endpoint configuration only. Never place provider secrets in the frontend. */
export interface FormspreeIntegrationConfig {
  provider: 'formspree';
  /** Configure a client-owned HTTPS endpoint before enabling the form. */
  endpoint?: string;
}

/** A public responder URL owned by the portfolio client. */
export interface GoogleFormsIntegrationConfig {
  provider: 'google-forms';
  /** Configure the public Google Forms responder URL before enabling the CTA. */
  formUrl?: string;
}

export type EnquiryIntegrationConfig = FormspreeIntegrationConfig | GoogleFormsIntegrationConfig;

export interface EnquiryFormConfig {
  /** Keep false until the receiving provider and privacy information are configured. */
  enabled: boolean;
  heading: string;
  description: string;
  submitLabel: string;
  /** Label used when a provider hosts the enquiry form externally. */
  externalFormCtaLabel: string;
  enquiryTypes: readonly EnquiryTypeOption[];
  privacyNotice: string;
  privacyUrl?: string;
  successMessage: string;
  errorMessage: string;
  integration: EnquiryIntegrationConfig;
}

export interface PortfolioContent {
  profile: PortfolioProfile;
  highlights: readonly ImpactHighlight[];
  experience: ProfessionalExperience;
  initiatives: readonly EnterpriseInitiative[];
  skills: readonly SkillGroup[];
  contact: ContactDetails;
  enquiryForm: EnquiryFormConfig;
}
