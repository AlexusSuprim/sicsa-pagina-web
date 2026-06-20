export type Locale = 'es' | 'en';

export type SectionKey = 'home' | 'about' | 'services' | 'contact';

export interface NavLinkContent {
  section: SectionKey;
  label: string;
  hash: string;
}

export interface HeroSlideContent {
  title: string;
  subtitle: string;
  durationMs: number;
}

export interface PillarContent {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface StatContent {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface AboutBlockContent {
  title: string;
  highlights: string[];
  imageAlt: string;
}

export interface ValueCardContent {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FleetUnitContent {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DisplayServiceContent {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  imageKey: string;
  features: string[];
}

export interface MultimodalModeContent {
  id: string;
  label: string;
  icon: string;
}

export interface CourierContent {
  title: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  imageAlt: string;
  features: string[];
  steps: string[];
  badge: string;
  expandLabel: string;
  collapseLabel: string;
  howItWorksTitle: string;
  benefitsTitle: string;
  contactTitle: string;
  contactDescription: string;
  whatsappLabel: string;
  whatsappAriaLabel: string;
  socialAriaPrefix: string;
}

export interface ContactUiContent {
  eyebrow: string;
  title: string;
  description: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  mapTitle: string;
  formTitle: string;
  requiredHint: string;
  nameLabel: string;
  emailLabelField: string;
  addressLabelField: string;
  phoneLabelField: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  addressPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  turnstileHint: string;
  turnstileRequired: string;
  successMessage: string;
  errorMessage: string;
  connectionError: string;
  submitLabel: string;
  submittingLabel: string;
}

export interface UiContent {
  skipLink: string;
  contactCta: string;
  ourServices: string;
  languageLabel: string;
  languageEs: string;
  languageEn: string;
  headerHomeAria: string;
  headerLogoAlt: string;
  mainNavAria: string;
  openMenuAria: string;
  closeMenuAria: string;
  mobileMenuAria: string;
  mobileNavAria: string;
  mobileMenuTitle: string;
  whatsappAria: string;
  socialFollowPrefix: string;
  footerNavigation: string;
  footerContact: string;
  footerTagline: string;
  footerCopyright: string;
  introPillarsHeading: string;
  heroCarouselLabel: string;
  heroSlideLabel: string;
  heroDotsLabel: string;
  servicesViewCapabilities: string;
  notFoundEyebrow: string;
  notFoundTitle: string;
  notFoundDescription: string;
  notFoundCta: string;
  contact: ContactUiContent;
}

export interface SeoContent {
  title: string;
  description: string;
  keywords: string;
  ogImageAlt: string;
  organizationLegalName: string;
  ogLocale: string;
  hreflang: string;
}

export interface SiteContent {
  locale: Locale;
  seo: SeoContent;
  nav: NavLinkContent[];
  ui: UiContent;
  hero: {
    slides: HeroSlideContent[];
  };
  intro: {
    stats: StatContent[];
    pillars: PillarContent[];
  };
  about: {
    quienesSomos: AboutBlockContent;
    logisticDna: AboutBlockContent;
    coreValues: ValueCardContent[];
  };
  fleet: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    units: FleetUnitContent[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    multimodalModes: MultimodalModeContent[];
    items: DisplayServiceContent[];
  };
  courier: CourierContent;
}
