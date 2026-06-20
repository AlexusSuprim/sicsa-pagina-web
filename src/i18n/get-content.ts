import type { Locale, SiteContent } from '@i18n/types';
import { esContent } from '@i18n/locales/es';
import { enContent } from '@i18n/locales/en';

const contentByLocale: Record<Locale, SiteContent> = {
  es: esContent,
  en: enContent,
};

export function getContent(locale: Locale): SiteContent {
  return contentByLocale[locale];
}

export function getSectionHashes(locale: Locale): string[] {
  return getContent(locale).nav.map((link) => link.hash);
}
