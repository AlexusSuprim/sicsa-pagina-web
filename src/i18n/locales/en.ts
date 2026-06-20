import type { SiteContent } from '@i18n/types';
import { HERO_SLIDE_DEFAULT_DURATION_MS, HERO_SLIDE_LEMA_DURATION_MS } from '@i18n/config';

// SEO keywords: validate en-US search intent with client before publishing.
export const enContent: SiteContent = {
  locale: 'en',
  seo: {
    title: 'Integrated Logistics & Foreign Trade in Guatemala',
    description:
      'SICSA GROUP: Guatemala logistics operator and customs agency. Ocean, air, and ground freight, warehousing, owned fleet, and 25+ years in foreign trade.',
    keywords:
      'logistics Guatemala, foreign trade, customs brokerage, ocean freight, air cargo, cross-border trucking, SICSA GROUP, Central America',
    ogImageAlt:
      'SICSA GROUP logistics operations — ocean, air, and ground freight in Guatemala',
    organizationLegalName: 'Servicios Integrados de Carga y Logística, S.A.',
    ogLocale: 'en_US',
    hreflang: 'en',
  },
  nav: [
    { section: 'home', label: 'Home', hash: 'home' },
    { section: 'about', label: 'About Us', hash: 'about' },
    { section: 'services', label: 'Services', hash: 'services' },
    { section: 'contact', label: 'Contact', hash: 'contact' },
  ],
  ui: {
    skipLink: 'Skip to content',
    contactCta: 'Contact Us',
    ourServices: 'Our Services',
    languageLabel: 'Language',
    languageEs: 'Español',
    languageEn: 'English',
    headerHomeAria: 'SICSA GROUP - Home',
    headerLogoAlt: 'SICSA GROUP — Integrated logistics',
    mainNavAria: 'Main navigation',
    openMenuAria: 'Open menu',
    closeMenuAria: 'Close menu',
    mobileMenuAria: 'Navigation menu',
    mobileNavAria: 'Mobile navigation',
    mobileMenuTitle: 'Menu',
    whatsappAria: 'Contact us on WhatsApp Business',
    socialFollowPrefix: 'Follow us on',
    footerNavigation: 'Navigation',
    footerContact: 'Contact',
    footerTagline:
      'Full-service logistics operator with 25+ years of experience in foreign trade, multimodal transport, and customs brokerage across Guatemala and Central America.',
    footerCopyright: 'All rights reserved.',
    introPillarsHeading: 'Logistics strengths',
    heroCarouselLabel: 'Featured messages',
    heroSlideLabel: 'slide',
    heroDotsLabel: 'Select message',
    servicesViewCapabilities: 'View capabilities',
    notFoundEyebrow: 'Error 404',
    notFoundTitle: 'Page not found',
    notFoundDescription:
      'The page you are looking for does not exist or has been moved. Return to the homepage to keep browsing.',
    notFoundCta: 'Back to home',
    contact: {
      eyebrow: 'Contact',
      title: 'We are ready to help',
      description:
        'Tell us about your logistics operation and our team will get back to you shortly.',
      addressLabel: 'Address',
      phoneLabel: 'PBX Phone',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp Business',
      mapTitle: 'SICSA GROUP location — Empresarial El Cortijo II, Suite #118',
      formTitle: 'Send us a message',
      requiredHint: 'Fields marked with * are required.',
      nameLabel: 'Full name',
      emailLabelField: 'Email',
      addressLabelField: 'Address',
      phoneLabelField: 'Phone',
      messageLabel: 'Comments',
      namePlaceholder: 'John Smith',
      emailPlaceholder: 'john@company.com',
      addressPlaceholder: 'Guatemala City',
      phonePlaceholder: '+502 0000-0000',
      messagePlaceholder: 'How can we help you?',
      turnstileHint:
        'Set PUBLIC_TURNSTILE_SITE_KEY in .env to enable anti-bot verification.',
      turnstileRequired: 'Complete the anti-bot verification before submitting.',
      successMessage: 'Your message was sent successfully. We will reply soon.',
      errorMessage: 'Something went wrong while sending. Please try again.',
      connectionError: 'Connection error. Check your network and try again.',
      submitLabel: 'Send message',
      submittingLabel: 'Sending...',
    },
  },
  hero: {
    slides: [
      {
        // Alt: "Passion in Every Delivery" | "We Deliver With Purpose"
        title: 'We Bring Passion to Every Destination',
        subtitle: 'Connecting Guatemala and Central America with end-to-end logistics solutions.',
        durationMs: HERO_SLIDE_DEFAULT_DURATION_MS,
      },
      {
        title: 'Your Cargo, No Borders',
        subtitle: 'Owned fleet, regional coverage, and commitment on every shipment.',
        durationMs: HERO_SLIDE_DEFAULT_DURATION_MS,
      },
      {
        title: 'Our Mission',
        subtitle:
          'To become the market\'s best choice with reliable, responsive service you can count on.',
        durationMs: HERO_SLIDE_LEMA_DURATION_MS,
      },
    ],
  },
  intro: {
    stats: [
      { id: 'years', value: '25+', label: 'Years of experience', icon: 'mdi:calendar-check' },
      { id: 'employees', value: '110', label: 'Team members', icon: 'mdi:account-group' },
      { id: 'trucks', value: '30+', label: 'Owned fleet units', icon: 'mdi:truck' },
      { id: 'warehouses', value: '3', label: 'Strategic warehouses', icon: 'mdi:warehouse' },
    ],
    pillars: [
      {
        id: 'sea',
        icon: 'mdi:ferry',
        title: 'Global connections',
        description: 'Reliable, efficient ocean freight.',
      },
      {
        id: 'air',
        icon: 'mdi:airplane',
        title: 'Air freight without limits',
        description: 'Speed and security for what matters most.',
      },
      {
        id: 'land',
        icon: 'mdi:truck',
        title: 'Ground solutions',
        description: 'Trailers and containers that take your cargo further.',
      },
    ],
  },
  about: {
    quienesSomos: {
      title: 'Who We Are',
      highlights: [
        'Guatemalan logistics operator and customs agency, founded in 1999 with 25+ years of experience.',
        'Customs experts who evolved into integrated solutions: air, ocean, and ground across the region.',
      ],
      imageAlt:
        'Staff overseeing containers and documentation during an international trade operation',
    },
    logisticDna: {
      title: 'Our Logistics DNA',
      highlights: [
        'Family-owned company with hands-on oversight and personal commitment on every operation.',
        'A customs heritage that today powers a fully integrated multimodal operator.',
      ],
      imageAlt:
        'Logistics terminal with organized containers reflecting security, punctuality, efficiency, and operational commitment',
    },
    coreValues: [
      {
        id: 'security',
        title: 'Security',
        description: 'Custody and monitoring on every shipment.',
        icon: 'mdi:shield-check',
      },
      {
        id: 'punctuality',
        title: 'Punctuality',
        description: 'On-time performance that sets us apart.',
        icon: 'mdi:clock-check',
      },
      {
        id: 'efficiency',
        title: 'Efficiency',
        description: 'Processes that keep your operation moving.',
        icon: 'mdi:chart-timeline-variant',
      },
      {
        id: 'commitment',
        title: 'Commitment',
        description: 'Trust at every step of the journey.',
        icon: 'mdi:handshake',
      },
    ],
  },
  fleet: {
    eyebrow: 'Owned fleet',
    title: 'Full control on every route',
    description:
      '40 owned units to move your cargo with security, on-time delivery, and GPS tracking.',
    imageAlt:
      'SICSA GROUP owned fleet truck on the road with logistics monitoring and control',
    units: [
      {
        id: 'trailers',
        title: '53-foot trailers',
        description: 'Ideal capacity for high-volume loads.',
        icon: 'mdi:truck-trailer',
      },
      {
        id: 'medium',
        title: '10-ton trucks',
        description: 'Efficient solution for medium-sized loads.',
        icon: 'mdi:truck',
      },
      {
        id: 'light',
        title: '5-ton trucks',
        description: 'Perfect for lighter loads and local delivery.',
        icon: 'mdi:truck-fast',
      },
      {
        id: 'chassis',
        title: '40-foot chassis',
        description: 'Safe container moves from port to destination.',
        icon: 'mdi:crane',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Full-service logistics, fewer words',
    description: 'Multimodal freight, customs, and an owned fleet — one strategic partner.',
    multimodalModes: [
      { id: 'air', label: 'By air', icon: 'mdi:airplane' },
      { id: 'land', label: 'By land', icon: 'mdi:truck' },
      { id: 'sea', label: 'By sea', icon: 'mdi:ferry' },
    ],
    items: [
      {
        id: 'maritime',
        icon: 'mdi:ferry',
        title: 'Ocean Freight',
        tagline: 'Global connections',
        description:
          'Strategic partnerships with carriers and international agents to move your cargo anywhere.',
        imageKey: 'maritime',
        features: [
          'Full container loads (FCL)',
          'Less-than-container load (LCL) with three weekly consolidations',
          'Import and export',
          'Door-to-door transport',
          'Shipment-level tracking',
          'Shipping documentation support',
          'Cargo insurance',
        ],
      },
      {
        id: 'air',
        icon: 'mdi:airplane',
        title: 'Air Freight',
        tagline: 'Speed without borders',
        description: 'Time-critical air cargo with lines connecting Guatemala to the world.',
        imageKey: 'air',
        features: [
          'Air freight import and export',
          'Weekly consolidation from Miami',
          'Cargo insurance',
          'Door-to-door transport',
          'Coordination at Guatemala and regional airports',
        ],
      },
      {
        id: 'land',
        icon: 'mdi:truck',
        title: 'Cross-Border Ground Transport',
        tagline: 'Mexico → Central America',
        description:
          'From a single pallet to a full trailer — owned fleet and satellite GPS tracking.',
        imageKey: 'land',
        features: [
          'Less-than-truckload (LTL) with four weekly consolidations',
          'Full truckload (FTL)',
          'Cargo insurance',
          'Satellite GPS monitoring on units',
          'Cross-border import and export',
          'Local delivery from bonded warehouses and ports',
        ],
      },
      {
        id: 'customs',
        icon: 'mdi:file-document-outline',
        title: 'Customs Brokerage',
        tagline: 'Our core strength',
        description:
          'End-to-end customs support: classification, documentation, and SAT compliance.',
        imageKey: 'customs',
        features: [
          'Guidance on costs, timelines, and customs regimes',
          'Tariff classification',
          'Certificates of origin and documentation',
          'Bonded warehouse and authority coordination',
          'Coordination with carriers and insurers',
        ],
      },
      {
        id: 'warehousing',
        icon: 'mdi:warehouse',
        title: 'Warehousing',
        tagline: 'Strategic storage',
        description: 'Secure storage, inventory, and distribution to help your business grow.',
        imageKey: 'warehousing',
        features: [
          'Strategic storage for demand peaks and high seasons',
          'Customs and transport integration: consolidation, storage, and dispatch',
          'Loading and unloading with specialized equipment',
          'Trained staff for delicate product handling',
          'Inventory control and order preparation',
          'Cost optimization through reduced dwell time',
        ],
      },
    ],
  },
  courier: {
    title: 'Courier & P.O. Box',
    tagline: 'Your online purchases, one click away',
    description:
      'SICSA Courier is committed to delivering a better experience for your online shopping.',
    extendedDescription:
      'Our service keeps U.S.-to-Guatemala imports moving efficiently. With a P.O. Box address in the United States, you can shop at your favorite online stores — we receive, consolidate, and deliver your packages to your door, office, or pickup at our facility. Documents and merchandise, delivered fast.',
    imageAlt: 'Courier operators loading and delivering packages from a delivery van',
    features: [
      'Benefits for personal or business mailbox accounts',
      'Efficient imports from the U.S. to Guatemala',
      'Personal shopping agent or buy on your own with dedicated support',
      'Home or office delivery in Guatemala',
      'Pickup at our facilities',
      'Dedicated tracking and Courier service support',
    ],
    steps: [
      'Sign up and get your U.S. P.O. Box address',
      'Shop online and ship to your mailbox',
      'Receive your packages in Guatemala — delivery or pickup',
    ],
    badge: 'Dedicated service',
    expandLabel: 'View service details',
    collapseLabel: 'Hide details',
    howItWorksTitle: 'How it works',
    benefitsTitle: 'Service benefits',
    contactTitle: 'Courier contact',
    contactDescription: 'SICSA Courier social channels and dedicated WhatsApp.',
    whatsappLabel: 'Courier WhatsApp',
    whatsappAriaLabel: 'Contact SICSA Courier on WhatsApp',
    socialAriaPrefix: 'SICSA Courier on',
  },
};
