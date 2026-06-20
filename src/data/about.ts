export interface ValueCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutBlock {
  title: string;
  highlights: string[];
  imageAlt: string;
}

export const quienesSomos: AboutBlock = {
  title: 'Quiénes somos',
  highlights: [
    'Operador logístico y agencia aduanal guatemalteca, fundado en 1999 con más de 25 años de trayectoria.',
    'Expertos en aduanas que evolucionaron a soluciones integrales: aéreo, marítimo y terrestre en toda la región.',
  ],
  imageAlt: 'Personal supervisando contenedores y documentación en operación marítima de comercio exterior',
};

export const logisticDna: AboutBlock = {
  title: 'Nuestro ADN logístico',
  highlights: [
    'Empresa familiar con supervisión directa y compromiso personal en cada operación.',
    'Herencia de servicio aduanal que hoy se traduce en un operador integral multimodal.',
  ],
  imageAlt:
    'Terminal logística con contenedores organizados, reflejando seguridad, puntualidad, eficiencia y compromiso operativo',
};

export const coreValues: ValueCard[] = [
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
];
