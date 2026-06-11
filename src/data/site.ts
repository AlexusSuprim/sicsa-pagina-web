export const SITE_NAME = 'SICSA GROUP';
export const SITE_TAGLINE = 'Logística que mueve al mundo';
export const SITE_DESCRIPTION =
  'Tu socio estratégico en comercio exterior y soluciones logísticas integrales en Guatemala. Transporte marítimo, aéreo, terrestre y logística aduanal.';

export interface HeroSlide {
  title: string;
  subtitle: string;
  durationMs: number;
}

export const HERO_SLIDE_DEFAULT_DURATION_MS = 15_000;
export const HERO_SLIDE_LEMA_DURATION_MS = 14_000;

export const heroSlides: HeroSlide[] = [
  {
    title: SITE_TAGLINE,
    subtitle: SITE_DESCRIPTION,
    durationMs: HERO_SLIDE_DEFAULT_DURATION_MS,
  },
  {
    title: 'Nuestro Lema',
    subtitle:
      'Consolidarnos como la mejor opción del mercado, brindando un servicio logístico confiable, eficiente y cercano, que impulse el crecimiento de nuestros clientes.',
    durationMs: HERO_SLIDE_LEMA_DURATION_MS,
  },
  {
    title: 'Más de 25 años moviendo al mundo',
    subtitle:
      'Tiempo que nos ha convertido en referentes de servicio en la región, expertos en logística aduanera y comercio internacional',
    durationMs: HERO_SLIDE_DEFAULT_DURATION_MS,
  },
];

export const SITE_URL = 'https://sicsagroup.com.gt';

export const CONTACT_EMAIL = 'info@sicsagroup.com.gt';
export const CONTACT_PHONE = '+502 2420-7999';
export const CONTACT_PHONE_RAW = '+50224207999';
export const WHATSAPP_PHONE = '50243905425';
/** Enlace directo al chat — más fiable en dispositivos móviles */
export const WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`;
/** Atajo wa.me — útil en escritorio */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const ADDRESS = {
  street: 'Calzada Atanasio Tzul 22-00, zona 12',
  building: 'Empresarial El Cortijo II, Interior #118',
  city: 'Ciudad de Guatemala',
  country: 'Guatemala',
  full: 'Calzada Atanasio Tzul 22-00, zona 12, Empresarial El Cortijo II, Interior #118, Ciudad de Guatemala',
};

/** Coordenadas verificadas — Interior #118, Empresarial El Cortijo II */
export const MAP_LOCATION = {
  latitude: 14.59364221077347,
  longitude: -90.54134524232788,
} as const;

const MAP_QUERY = `${MAP_LOCATION.latitude},${MAP_LOCATION.longitude}`;

/** Embed con pin único en las coordenadas exactas (sin búsqueda por texto) */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&ll=${MAP_QUERY}&z=18&hl=es&output=embed`;

/** Abrir ubicación exacta en Google Maps */
export const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/SICSAGroup',
  instagram: 'https://www.instagram.com/sicsa_group/',
  linkedin: 'https://www.linkedin.com/company/sicsa-group/',
} as const;

/** URLs activas para JSON-LD sameAs y componentes de redes sociales */
export function getActiveSocialUrls(): string[] {
  return Object.values(SOCIAL_LINKS).filter((url) => url.length > 0);
}

/**
 * Fuentes de imágenes (licencia libre para uso comercial):
 * - Hero: Pexels #262353 (containers/port)
 * - Maritime: Pexels #262353
 * - Air: Unsplash (airplane wing)
 * - Truck: Pexels #4483610
 * - Customs: Unsplash (business documents)
 * - Courier: Pexels #6169668 (recolección y entrega de paquetes)
 */
