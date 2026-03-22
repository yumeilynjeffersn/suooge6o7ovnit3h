/**
 * Locale store — two locales: 'ru' | 'en'
 *
 * Uses $state (Svelte 5 runes).
 * Guards localStorage behind browser check for SSR safety.
 */

import { ru } from '$lib/i18n/ru.js';
import { en } from '$lib/i18n/en.js';

const STORAGE_KEY = 'sevles-locale';

/** @type {Record<string, import('$lib/i18n/index').Translations>} */
const locales = { ru, en };

function createLocaleStore() {
  /** @type {'ru' | 'en'} */
  let locale = $state('ru');

  /** @type {import('$lib/i18n/index').Translations} */
  let t = $state(ru);

  function init() {
    if (typeof window === 'undefined') return;
    const saved = /** @type {'ru'|'en'|null} */ (localStorage.getItem(STORAGE_KEY));
    if (saved === 'ru' || saved === 'en') {
      locale = saved;
      t = locales[locale];
    }
  }

  /** @param {'ru' | 'en'} next */
  function setLocale(next) {
    locale = next;
    t = locales[next];
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
    }
    // Update <html lang> attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
    }
  }

  return {
    get locale() { return locale; },
    get t() { return t; },
    setLocale,
    init,
  };
}

export const localeStore = createLocaleStore();
