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

export interface DisplayServiceItem extends ServiceItem {
  imageKey: string;
  tagline: string;
}

export interface FleetUnit {
  id: string;
  title: string;
  description: string;
  icon: string;
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
    image: '/images/servicio_aduanal.png',
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
    description:
      'Soluciones de almacenaje estratégico diseñadas para adaptarse a sus picos de demanda y temporadas altas, con el espacio y la infraestructura necesarios para el resguardo seguro de una amplia gama de productos.',
    image: '/images/servicio_almacenaje.png',
    features: [
      'Almacenaje estratégico para picos de demanda y temporadas altas',
      'Integración con aduanas y transporte: consolidación, resguardo y despacho',
      'Maniobras de carga y descarga con equipo especializado',
      'Personal entrenado para el manejo de productos delicados',
      'Control de inventarios y preparación de pedidos',
      'Optimización de costos al reducir tiempos de estancia',
    ],
  },
];

const displayCopy: Record<string, { tagline: string; description: string; imageKey: string }> = {
  maritime: {
    tagline: 'Conexiones globales',
    description: 'Alianzas con navieras y agentes internacionales para mover su carga a cualquier destino.',
    imageKey: 'maritime',
  },
  air: {
    tagline: 'Velocidad sin fronteras',
    description: 'Carga aérea urgente con líneas que conectan Guatemala con el mundo.',
    imageKey: 'air',
  },
  land: {
    tagline: 'México → Centroamérica',
    description: 'Desde un pallet hasta un furgón completo, con flota propia y GPS satelital.',
    imageKey: 'land',
  },
  customs: {
    tagline: 'Nuestra fortaleza',
    description: 'Asesoría aduanal integral: clasificación, documentación y cumplimiento SAT.',
    imageKey: 'customs',
  },
  warehousing: {
    tagline: 'Almacenaje estratégico',
    description: 'Resguardo, inventario y distribución para hacer crecer su negocio.',
    imageKey: 'warehousing',
  },
};

export const displayServices: DisplayServiceItem[] = services.map((service) => {
  const copy = displayCopy[service.id];
  return {
    ...service,
    tagline: copy?.tagline ?? service.title,
    description: copy?.description ?? service.description,
    imageKey: copy?.imageKey ?? service.id,
  };
});

export const fleetUnits: FleetUnit[] = [
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
];
