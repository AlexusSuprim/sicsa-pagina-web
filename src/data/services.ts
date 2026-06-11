export interface ServiceItem {
  id: string;
  icon: string;
  /** Marca visual opcional (p. ej. logotipo Courier) en lugar del ícono MDI */
  logoImage?: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'maritime',
    icon: 'mdi:ferry',
    title: 'Transporte Marítimo',
    description:
      'Alianzas estratégicas con las principales navieras a nivel mundial y red de agentes internacionales para transportar su carga desde y hacia cualquier destino.',
    image: '/images/services/maritime.jpg',
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
    description:
      'Cuando su mercancía no puede esperar, operamos con un extenso conglomerado de líneas aéreas capaces de llegar a cualquier destino internacional.',
    image: '/images/services/air.jpg',
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
    description:
      'Flota propia y alianzas con Freight Forwarders para consolidar carga en Ciudad Hidalgo y conectar México con toda Centroamérica.',
    image: '/images/services/land.jpg',
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
    description:
      'Nuestra fortaleza en nacionalización le asegura cumplir con cada normativa de la SAT, eliminando riesgos y agilizando sus tiempos de entrega.',
    image: '/images/services/customs.jpg',
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
    title: 'Bodegaje',
    description:
      'Soluciones de bodegaje estratégico diseñadas para adaptarse a sus picos de demanda y temporadas altas, con el espacio y la infraestructura necesarios para el resguardo seguro de una amplia gama de productos.',
    image: '/images/services/truck.jpg',
    features: [
      'Bodegaje estratégico para picos de demanda y temporadas altas',
      'Integración con aduanas y transporte: consolidación, resguardo y despacho',
      'Maniobras de carga y descarga con equipo especializado',
      'Personal entrenado para el manejo de productos delicados',
      'Control de inventarios y preparación de pedidos',
      'Optimización de costos al reducir tiempos de estancia',
    ],
  },
];

export const aboutContent = {
  intro:
    'Servicios Integrados Cargo es una empresa experta en logística, con años de experiencia en consolidación y desconsolidación de carga aérea, marítima y terrestre. Contamos con transporte terrestre propio y logística aduanal integral.',
  identity:
    'Somos una empresa guatemalteca fundada en 1999. Nos apasiona ser el operador logístico y la agencia aduanal que brinda seguridad jurídica y operativa a cada uno de nuestros clientes.',
  roots:
    'Servicios Integrados de Carga y Logística, S.A. fue fundada en abril de 1999 por socios netamente guatemaltecos, expertos en logística aduanera y comercio internacional. Más de 25 años de experiencia nos han convertido en referentes en servicios logísticos en la región.',
  team:
    'Estamos conformados por un equipo multidisciplinario de agentes aduaneros, agentes de carga, gestores de importación y exportación, operadores y transportistas, comprometidos con proveer un servicio ético y profesional con los más altos estándares de calidad.',
  consulting:
    'Ofrecemos un diferencial en consultoría para ayudarle a tomar las mejores decisiones en logística. Nos adaptamos al mercado y al entorno de nuestros clientes, innovando y liderando la industria.',
  heritage:
    'Llevamos la logística en la sangre. Heredamos la ética y visión de nuestro abuelo, un agente aduanal pionero en la región. Hoy combinamos esa tradición familiar con profesionalismo técnico para supervisar cada detalle de la carga que se nos confía.',
  evolution:
    'Nacimos expertos en aduanas y evolucionamos contigo. Hoy somos un operador integral que domina el transporte aéreo, marítimo y terrestre en toda la región, con un ecosistema logístico que incluye mensajería, carga marítima, aérea y flota propia.',
  philosophy:
    'Durante más de 25 años hemos transformado la logística en soluciones eficientes, proporcionando certeza y continuidad a nuestros clientes con precisión, responsabilidad y acompañamiento en cada operación.',
};
