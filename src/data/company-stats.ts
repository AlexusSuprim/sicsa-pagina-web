export interface CompanyStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export const companyStats: CompanyStat[] = [
  {
    id: 'years',
    value: '25+',
    label: 'Años de experiencia',
    icon: 'mdi:calendar-check',
  },
  {
    id: 'employees',
    value: '110',
    label: 'Colaboradores',
    icon: 'mdi:account-group',
  },
  {
    id: 'trucks',
    value: '30+',
    label: 'Unidades en flota propia',
    icon: 'mdi:truck',
  },
  {
    id: 'warehouses',
    value: '3',
    label: 'Almacenes estratégicos',
    icon: 'mdi:warehouse',
  },
];

export const fleetItems = [
  {
    id: 'trucks-small',
    title: 'Camiones 5 y 10 toneladas',
    description: 'Unidades versátiles para distribución urbana y regional.',
    icon: 'mdi:truck',
  },
  {
    id: 'trailers',
    title: 'Furgones de 48 y 53 pies',
    description: 'Capacidad para carga consolidada y entregas de gran volumen.',
    icon: 'mdi:truck-trailer',
  },
  {
    id: 'containers',
    title: 'Porta-contenedores',
    description: 'Transporte seguro de contenedores desde puertos y bodegas fiscales.',
    icon: 'mdi:crane',
  },
];

export const multimodalModes = [
  { id: 'air', label: 'Por aire', icon: 'mdi:airplane' },
  { id: 'land', label: 'Por tierra', icon: 'mdi:truck' },
  { id: 'sea', label: 'Por mar', icon: 'mdi:ferry' },
];
