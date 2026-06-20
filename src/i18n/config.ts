import type { Locale, SectionKey } from '@i18n/types';

export const DEFAULT_LOCALE: Locale = 'es';
export const LOCALES: Locale[] = ['es', 'en'];

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};

export const SECTION_HASHES: Record<Locale, Record<SectionKey, string>> = {
  es: {
    home: 'inicio',
    about: 'nosotros',
    services: 'servicios',
    contact: 'contacto',
  },
  en: {
    home: 'home',
    about: 'about',
    services: 'services',
    contact: 'contact',
  },
};

export const HERO_SLIDE_DEFAULT_DURATION_MS = 15_000;
export const HERO_SLIDE_LEMA_DURATION_MS = 14_000;
