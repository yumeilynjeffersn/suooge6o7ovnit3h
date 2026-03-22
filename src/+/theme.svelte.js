/**
 * Theme store — three modes: 'system' | 'light' | 'dark'
 *
 * Uses $state + $effect (Svelte 5 runes).
 * Guards all browser APIs behind `typeof window !== 'undefined'`
 * so the store is safe to instantiate during SSR.
 */

/** @type {'system' | 'light' | 'dark'} */
const STORAGE_KEY = 'sevles-theme';

function createThemeStore() {
  /** @type {'system' | 'light' | 'dark'} */
  let mode = $state('system');

  /** @type {boolean} - resolved value used by the DOM */
  let isDark = $state(true);

  /** Resolve the actual dark/light value from mode + system preference */
  function resolve(/** @type {'system' | 'light' | 'dark'} */ m) {
    if (m === 'dark') return true;
    if (m === 'light') return false;
    // 'system'
    if (typeof window === 'undefined') return true; // SSR default
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /** Apply the resolved theme to <html> data attribute */
  function applyToDOM(dark) {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  /** Initialise from localStorage + attach system-change listener */
  function init() {
    if (typeof window === 'undefined') return;

    const saved = /** @type {'system'|'light'|'dark'|null} */ (localStorage.getItem(STORAGE_KEY));
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      mode = saved;
    }
    isDark = resolve(mode);
    applyToDOM(isDark);

    // Keep 'system' mode in sync with OS changes
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      if (mode === 'system') {
        isDark = mq.matches;
        applyToDOM(isDark);
      }
    };
    mq.addEventListener('change', onSystemChange);
    return () => mq.removeEventListener('change', onSystemChange);
  }

  /** Set a new mode, persist to localStorage */
  function setMode(/** @type {'system' | 'light' | 'dark'} */ next) {
    mode = next;
    isDark = resolve(next);
    applyToDOM(isDark);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }

  return {
    get mode() { return mode; },
    get isDark() { return isDark; },
    setMode,
    init,
  };
}

export const theme = createThemeStore();
