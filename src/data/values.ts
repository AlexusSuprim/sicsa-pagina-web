export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const mission =
  'Ser la empresa líder en servicios logísticos y nacionalización de mercancías, a través de un servicio integrado, siendo aliados comerciales de nuestros clientes con un servicio óptimo y de calidad.';

export const vision =
  'Posicionarnos como una de las mejores empresas de servicios logísticos a través de un servicio integral, con un equipo de trabajo capacitado, innovador, con cultura de trabajo y excelencia.';

export const values: ValueItem[] = [
  {
    id: 'integrity',
    title: 'Integridad',
    description:
      'Brindamos valor a nuestros clientes a través de la confianza y equidad en todos los servicios que ofrecemos.',
    icon: 'mdi:shield-check',
  },
  {
    id: 'excellence',
    title: 'Búsqueda de la excelencia',
    description:
      'Buscamos la excelencia en el diseño de soluciones, la atención al cliente y la optimización de cada proceso.',
    icon: 'mdi:star-circle',
  },
  {
    id: 'teamwork',
    title: 'Trabajo en equipo',
    description:
      'Integramos a cada miembro de la organización en un ambiente colaborativo que impulsa mejores resultados.',
    icon: 'mdi:account-multiple',
  },
  {
    id: 'commitment',
    title: 'Compromiso',
    description:
      'Cumplimos y respetamos lo que ofrecemos, con el objetivo de lograr la máxima satisfacción del cliente.',
    icon: 'mdi:handshake',
  },
  {
    id: 'enthusiasm',
    title: 'Entusiasmo',
    description:
      'Animamos a nuestros colaboradores a tomar la iniciativa y promovemos un entorno de capacitación continua.',
    icon: 'mdi:lightning-bolt',
  },
  {
    id: 'responsibility',
    title: 'Responsabilidad',
    description:
      'Respondemos a nuestros clientes, los mantenemos informados y asumimos las consecuencias de nuestros compromisos.',
    icon: 'mdi:scale-balance',
  },
];
