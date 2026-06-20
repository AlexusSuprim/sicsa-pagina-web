import type { SiteContent } from '@i18n/types';
import { HERO_SLIDE_DEFAULT_DURATION_MS, HERO_SLIDE_LEMA_DURATION_MS } from '@i18n/config';

export const esContent: SiteContent = {
  locale: 'es',
  seo: {
    title: 'Logística Integral y Comercio Exterior en Guatemala',
    description:
      'SICSA GROUP: operador logístico y agencia aduanal en Guatemala. Transporte marítimo, aéreo y terrestre, almacenaje, flotilla propia y más de 25 años en comercio exterior.',
    keywords:
      'logística Guatemala, comercio exterior, agencia aduanal, transporte marítimo, carga aérea, transporte terrestre internacional, SICSA GROUP, Centroamérica',
    ogImageAlt:
      'Operaciones logísticas de SICSA GROUP — transporte marítimo, aéreo y terrestre en Guatemala',
    organizationLegalName: 'Servicios Integrados de Carga y Logística, S.A.',
    ogLocale: 'es_GT',
    hreflang: 'es-GT',
  },
  nav: [
    { section: 'home', label: 'Inicio', hash: 'inicio' },
    { section: 'about', label: 'Nosotros', hash: 'nosotros' },
    { section: 'services', label: 'Servicios', hash: 'servicios' },
    { section: 'contact', label: 'Contacto', hash: 'contacto' },
  ],
  ui: {
    skipLink: 'Saltar al contenido',
    contactCta: 'Contáctanos',
    ourServices: 'Nuestros servicios',
    languageLabel: 'Idioma',
    languageEs: 'Español',
    languageEn: 'English',
    headerHomeAria: 'SICSA GROUP - Inicio',
    headerLogoAlt: 'SICSA GROUP — Logística integral',
    mainNavAria: 'Navegación principal',
    openMenuAria: 'Abrir menú',
    closeMenuAria: 'Cerrar menú',
    mobileMenuAria: 'Menú de navegación',
    mobileNavAria: 'Navegación móvil',
    mobileMenuTitle: 'Menú',
    whatsappAria: 'Contactar por WhatsApp Business',
    socialFollowPrefix: 'Síguenos en',
    footerNavigation: 'Navegación',
    footerContact: 'Contacto',
    footerTagline:
      'Operador logístico integral con más de 25 años de experiencia en comercio exterior, transporte multimodal y logística aduanal en Guatemala y Centroamérica.',
    footerCopyright: 'Todos los derechos reservados.',
    introPillarsHeading: 'Fortalezas logísticas',
    heroCarouselLabel: 'Mensajes principales',
    heroSlideLabel: 'diapositiva',
    heroDotsLabel: 'Seleccionar mensaje',
    servicesViewCapabilities: 'Ver capacidades',
    notFoundEyebrow: 'Error 404',
    notFoundTitle: 'Página no encontrada',
    notFoundDescription:
      'La página que busca no existe o fue movida. Regrese al inicio para continuar navegando.',
    notFoundCta: 'Volver al inicio',
    contact: {
      eyebrow: 'Contacto',
      title: 'Estamos listos para atenderle',
      description:
        'Cuéntenos sobre su operación logística y nuestro equipo le responderá a la brevedad.',
      addressLabel: 'Dirección',
      phoneLabel: 'Teléfono PBX',
      emailLabel: 'Correo electrónico',
      whatsappLabel: 'WhatsApp Business',
      mapTitle: 'Ubicación de SICSA GROUP — Empresarial El Cortijo II, Interior #118',
      formTitle: 'Envíenos un mensaje',
      requiredHint: 'Los campos marcados con * son obligatorios.',
      nameLabel: 'Nombre completo',
      emailLabelField: 'Correo electrónico',
      addressLabelField: 'Dirección',
      phoneLabelField: 'Teléfono',
      messageLabel: 'Comentarios',
      namePlaceholder: 'Juan Pérez',
      emailPlaceholder: 'juan@empresa.com',
      addressPlaceholder: 'Ciudad de Guatemala',
      phonePlaceholder: '+502 0000-0000',
      messagePlaceholder: '¿En qué podemos ayudarle?',
      turnstileHint:
        'Configure PUBLIC_TURNSTILE_SITE_KEY en .env para activar la verificación anti-bot.',
      turnstileRequired: 'Complete la verificación anti-bot antes de enviar.',
      successMessage: 'Mensaje enviado correctamente. Le responderemos pronto.',
      errorMessage: 'Ocurrió un error al enviar. Intente nuevamente.',
      connectionError: 'Error de conexión. Verifique su red e intente nuevamente.',
      submitLabel: 'Enviar mensaje',
      submittingLabel: 'Enviando...',
    },
  },
  hero: {
    slides: [
      {
        title: 'Llevamos la pasión a cada destino',
        subtitle: 'Conectamos Guatemala y Centroamérica con soluciones logísticas integrales.',
        durationMs: HERO_SLIDE_DEFAULT_DURATION_MS,
      },
      {
        title: 'Tu carga, sin fronteras',
        subtitle: 'Flotilla propia, cobertura regional y compromiso en cada operación.',
        durationMs: HERO_SLIDE_DEFAULT_DURATION_MS,
      },
      {
        title: 'Nuestro lema',
        subtitle:
          'Consolidarnos como la mejor opción del mercado con servicio confiable y cercano.',
        durationMs: HERO_SLIDE_LEMA_DURATION_MS,
      },
    ],
  },
  intro: {
    stats: [
      { id: 'years', value: '25+', label: 'Años de experiencia', icon: 'mdi:calendar-check' },
      { id: 'employees', value: '110', label: 'Colaboradores', icon: 'mdi:account-group' },
      { id: 'trucks', value: '30+', label: 'Unidades en flota propia', icon: 'mdi:truck' },
      { id: 'warehouses', value: '3', label: 'Almacenes estratégicos', icon: 'mdi:warehouse' },
    ],
    pillars: [
      {
        id: 'sea',
        icon: 'mdi:ferry',
        title: 'Conexiones globales',
        description: 'Transporte marítimo confiable y eficiente.',
      },
      {
        id: 'air',
        icon: 'mdi:airplane',
        title: 'Carga aérea sin fronteras',
        description: 'Velocidad y seguridad para lo que importa.',
      },
      {
        id: 'land',
        icon: 'mdi:truck',
        title: 'Soluciones terrestres',
        description: 'Trailers y contenedores que llevan su carga más lejos.',
      },
    ],
  },
  about: {
    quienesSomos: {
      title: 'Quiénes somos',
      highlights: [
        'Operador logístico y agencia aduanal guatemalteca, fundado en 1999 con más de 25 años de trayectoria.',
        'Expertos en aduanas que evolucionaron a soluciones integrales: aéreo, marítimo y terrestre en toda la región.',
      ],
      imageAlt:
        'Personal supervisando contenedores y documentación en operación marítima de comercio exterior',
    },
    logisticDna: {
      title: 'Nuestro ADN logístico',
      highlights: [
        'Empresa familiar con supervisión directa y compromiso personal en cada operación.',
        'Herencia de servicio aduanal que hoy se traduce en un operador integral multimodal.',
      ],
      imageAlt:
        'Terminal logística con contenedores organizados, reflejando seguridad, puntualidad, eficiencia y compromiso operativo',
    },
    coreValues: [
      {
        id: 'security',
        title: 'Seguridad',
        description: 'Custodia y monitoreo en cada envío.',
        icon: 'mdi:shield-check',
      },
      {
        id: 'punctuality',
        title: 'Puntualidad',
        description: 'Tiempos cumplidos que nos distinguen.',
        icon: 'mdi:clock-check',
      },
      {
        id: 'efficiency',
        title: 'Eficiencia',
        description: 'Procesos que impulsan su operación.',
        icon: 'mdi:chart-timeline-variant',
      },
      {
        id: 'commitment',
        title: 'Compromiso',
        description: 'Confianza en cada paso del camino.',
        icon: 'mdi:handshake',
      },
    ],
  },
  fleet: {
    eyebrow: 'Flotilla propia',
    title: 'Control total en cada ruta',
    description:
      '40 unidades propias para mover su carga con seguridad, puntualidad y monitoreo GPS.',
    imageAlt:
      'Camión de la flotilla propia de SICSA GROUP en ruta con control y monitoreo logístico',
    units: [
      {
        id: 'trailers',
        title: 'Furgones 53 pies',
        description: 'Capacidad ideal para cargas de gran volumen.',
        icon: 'mdi:truck-trailer',
      },
      {
        id: 'medium',
        title: 'Camiones 10 toneladas',
        description: 'Solución eficiente para cargas medianas.',
        icon: 'mdi:truck',
      },
      {
        id: 'light',
        title: 'Camiones 5 toneladas',
        description: 'Ideal para cargas ligeras y reparto.',
        icon: 'mdi:truck-fast',
      },
      {
        id: 'chassis',
        title: 'Chasis 40 pies',
        description: 'Movimiento seguro de contenedores desde puerto.',
        icon: 'mdi:crane',
      },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Logística integral, menos palabras',
    description: 'Multimodal, aduanas y flota propia en un solo aliado estratégico.',
    multimodalModes: [
      { id: 'air', label: 'Por aire', icon: 'mdi:airplane' },
      { id: 'land', label: 'Por tierra', icon: 'mdi:truck' },
      { id: 'sea', label: 'Por mar', icon: 'mdi:ferry' },
    ],
    items: [
      {
        id: 'maritime',
        icon: 'mdi:ferry',
        title: 'Transporte Marítimo',
        tagline: 'Conexiones globales',
        description:
          'Alianzas con navieras y agentes internacionales para mover su carga a cualquier destino.',
        imageKey: 'maritime',
        features: [
          'Contenedores completos (FCL)',
          'Carga consolidada (LCL) con tres consolidados semanales',
          'Importación y exportación',
          'Transporte puerta a puerta (Door to Door)',
          'Tracking personalizado por embarque',
          'Asesoría en documentación de embarque',
          'Seguro para mercancías',
        ],
      },
      {
        id: 'air',
        icon: 'mdi:airplane',
        title: 'Carga Aérea',
        tagline: 'Velocidad sin fronteras',
        description: 'Carga aérea urgente con líneas que conectan Guatemala con el mundo.',
        imageKey: 'air',
        features: [
          'Importación y exportación de carga aérea',
          'Consolidado semanal desde Miami',
          'Seguro para su mercancía',
          'Transporte puerta a puerta',
          'Coordinación en aeropuertos de Guatemala y la región',
        ],
      },
      {
        id: 'land',
        icon: 'mdi:truck',
        title: 'Transporte Terrestre Internacional',
        tagline: 'México → Centroamérica',
        description:
          'Desde un pallet hasta un furgón completo, con flota propia y GPS satelital.',
        imageKey: 'land',
        features: [
          'Carga consolidada (LTL) con cuatro consolidados semanales',
          'Carga completa (FTL)',
          'Seguro para mercancías',
          'Monitoreo GPS satelital en unidades',
          'Importación y exportación terrestre',
          'Entregas locales desde bodegas fiscales y puertos',
        ],
      },
      {
        id: 'customs',
        icon: 'mdi:file-document-outline',
        title: 'Logística Aduanal',
        tagline: 'Nuestra fortaleza',
        description:
          'Asesoría aduanal integral: clasificación, documentación y cumplimiento SAT.',
        imageKey: 'customs',
        features: [
          'Asesoría en costos, tiempos y regímenes aduaneros',
          'Clasificación arancelaria de mercancías',
          'Certificados de origen y documentación',
          'Gestión con almacenes fiscales y autoridades',
          'Coordinación con transportistas y aseguradoras',
        ],
      },
      {
        id: 'warehousing',
        icon: 'mdi:warehouse',
        title: 'Almacenaje',
        tagline: 'Almacenaje estratégico',
        description: 'Resguardo, inventario y distribución para hacer crecer su negocio.',
        imageKey: 'warehousing',
        features: [
          'Almacenaje estratégico para picos de demanda y temporadas altas',
          'Integración con aduanas y transporte: consolidación, resguardo y despacho',
          'Maniobras de carga y descarga con equipo especializado',
          'Personal entrenado para el manejo de productos delicados',
          'Control de inventarios y preparación de pedidos',
          'Optimización de costos al reducir tiempos de estancia',
        ],
      },
    ],
  },
  courier: {
    title: 'Courier y P.O. Box',
    tagline: 'Tus compras a un solo clic',
    description:
      'SICSA Courier está comprometida en brindar una mejor experiencia a tus compras en línea.',
    extendedDescription:
      'Nuestro servicio garantiza efectividad en tus importaciones desde EE.UU. a Guatemala. Con tu casillero (P.O. Box) en Estados Unidos puedes comprar en tus tiendas favoritas en línea; nos encargamos de recibir, consolidar y traer tus paquetes con entrega a domicilio, en oficina o recolección en nuestras instalaciones — correspondencia y mercadería en tiempo récord.',
    imageAlt:
      'Operadores de courier cargando y entregando paquetes desde una furgoneta de reparto',
    features: [
      'Beneficios para tu casillero personal o empresarial',
      'Efectividad en tus importaciones desde EE.UU. a Guatemala',
      'Agente de compras o compras desde tu comodidad, con atención personalizada',
      'Entrega a domicilio u oficina en Guatemala',
      'Recolección en nuestras instalaciones',
      'Seguimiento y atención dedicada al servicio Courier',
    ],
    steps: [
      'Regístrate y obtén tu dirección P.O. Box en EE.UU.',
      'Compra en tus tiendas en línea favoritas y envía al casillero',
      'Recibe tus paquetes en Guatemala con entrega o recolección',
    ],
    badge: 'Servicio dedicado',
    expandLabel: 'Ver detalles del servicio',
    collapseLabel: 'Ocultar detalles',
    howItWorksTitle: '¿Cómo funciona?',
    benefitsTitle: 'Beneficios del servicio',
    contactTitle: 'Contacto Courier',
    contactDescription: 'Redes y WhatsApp exclusivos de SICSA Courier.',
    whatsappLabel: 'WhatsApp Courier',
    whatsappAriaLabel: 'Contactar SICSA Courier por WhatsApp',
    socialAriaPrefix: 'SICSA Courier en',
  },
};
