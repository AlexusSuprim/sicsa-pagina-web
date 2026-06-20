export const SITE_NAME = 'SICSA GROUP';
export const SITE_URL = 'https://sicsagroup.com.gt';

export const OG_IMAGE = '/images/og-default.jpg';
export const OG_IMAGE_WIDTH = 1920;
export const OG_IMAGE_HEIGHT = 1080;

export const CONTACT_EMAIL = 'info@sicsagroup.com.gt';
export const CONTACT_PHONE = '+502 2420-7999';
export const CONTACT_PHONE_RAW = '+50224207999';
export const WHATSAPP_PHONE = '50243905425';
export const WHATSAPP_DISPLAY = '+502 4390-5425';
export const WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`;
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const ADDRESS = {
  street: 'Calzada Atanasio Tzul 22-00, zona 12',
  building: 'Empresarial El Cortijo II, Interior #118',
  city: 'Ciudad de Guatemala',
  country: 'Guatemala',
  full: 'Calzada Atanasio Tzul 22-00, zona 12, Empresarial El Cortijo II, Interior #118, Ciudad de Guatemala',
};

export const MAP_LOCATION = {
  latitude: 14.59364221077347,
  longitude: -90.54134524232788,
} as const;

const MAP_QUERY = `${MAP_LOCATION.latitude},${MAP_LOCATION.longitude}`;

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&ll=${MAP_QUERY}&z=18&hl=es&output=embed`;

export const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/SICSAGroup',
  instagram: 'https://www.instagram.com/sicsa_group/',
  linkedin: 'https://www.linkedin.com/company/sicsa-group/',
} as const;

export function getActiveSocialUrls(): string[] {
  return Object.values(SOCIAL_LINKS).filter((url) => url.length > 0);
}

export const COURIER_WHATSAPP_PHONE = '50224584174';
export const COURIER_WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send?phone=${COURIER_WHATSAPP_PHONE}`;
export const COURIER_WHATSAPP_URL = `https://wa.me/${COURIER_WHATSAPP_PHONE}`;
export const COURIER_SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/EpBoxGuatemala',
  instagram: 'https://www.instagram.com/sicsacourier/',
} as const;
export const COURIER_LOGO_IMAGE = '/images/Logo_SICSA_COURIER_FINAL.png';
export const COURIER_IMAGE = '/images/services/courier.jpg';
export const COURIER_WHATSAPP_DISPLAY = '+502 2458-4174';
