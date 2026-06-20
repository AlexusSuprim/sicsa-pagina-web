import { SECTION_HASHES, DEFAULT_LOCALE } from '@i18n/config';
import type { Locale, SectionKey } from '@i18n/types';
import { SITE_URL } from '@data/site';

export function getLocalePath(locale: Locale): string {
  return locale === 'en' ? '/en/' : '/';
}

export function getLocaleUrl(locale: Locale): string {
  return new URL(getLocalePath(locale), SITE_URL).href;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function getAlternateUrl(locale: Locale, hash?: string): string {
  const alternate = getAlternateLocale(locale);
  const base = getLocaleUrl(alternate);
  if (!hash) return base;
  const normalized = hash.startsWith('#') ? hash : `#${hash}`;
  return `${base}${normalized}`;
}

export function hashToSection(locale: Locale, hash: string): SectionKey | null {
  const clean = hash.replace(/^#/, '');
  if (!clean) return null;

  const entries = Object.entries(SECTION_HASHES[locale]) as [SectionKey, string][];
  const match = entries.find(([, h]) => h === clean);
  return match?.[0] ?? null;
}

export function sectionToHash(locale: Locale, section: SectionKey): string {
  return SECTION_HASHES[locale][section];
}

export function mapHashAcrossLocales(fromLocale: Locale, hash: string, toLocale: Locale): string {
  const section = hashToSection(fromLocale, hash);
  if (!section) return '';
  return `#${sectionToHash(toLocale, section)}`;
}

export function resolveLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  return DEFAULT_LOCALE;
}
