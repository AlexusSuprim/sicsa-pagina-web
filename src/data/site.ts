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
export const HERO_SLIDE_LEMA_DURATION_MS = 10_000;

export const heroSlides: HeroSlide[] = [
  {
    title: SITE_TAGLINE,
    subtitle: SITE_DESCRIPTION,
    durationMs: HERO_SLIDE_DEFAULT_DURATION_MS,
  },
  {
    title: 'Nuestro Lema',
    subtitle: 'Consolidarnos como la mejor opción del mercado',
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
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const ADDRESS = {
  street: 'Calzada Atanasio Tzul 22-00, zona 12',
  building: 'Empresarial El Cortijo II, Interior #118',
  city: 'Ciudad de Guatemala',
  country: 'Guatemala',
  full: 'Calzada Atanasio Tzul 22-00, zona 12, Empresarial El Cortijo II, Interior #118, Ciudad de Guatemala',
};

// Google Maps embed — Empresarial El Cortijo II, Zona 12, Guatemala
export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Calzada+Atanasio+Tzul+22-00,+Empresarial+El+Cortijo+II,+Zona+12,+Guatemala&hl=es&z=16&output=embed';

export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  twitter: '#',
  linkedin: '#',
} as const;

/**
 * Fuentes de imágenes (licencia libre para uso comercial):
 * - Hero: Pexels #262353 (containers/port)
 * - Maritime: Pexels #262353
 * - Air: Unsplash (airplane wing)
 * - Truck: Pexels #4483610
 * - Customs: Unsplash (business documents)
 * - Courier: Pexels #4391470 (furgoneta de entrega con paquetes)
 */
