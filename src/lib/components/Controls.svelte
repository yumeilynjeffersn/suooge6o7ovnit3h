<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.svelte';
  import { setLocale, getLocale } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  type Locale = 'en' | 'ru';

  const langOptions: Locale[] = ['ru', 'en'];
  let currentLocale = $state<Locale>(getLocale() as Locale);

  // Toggle between light and dark
  // On first toggle, converts from 'system' to explicit light/dark
  function toggleTheme() {
    const nextTheme = theme.isDark ? 'light' : 'dark';
    theme.setMode(nextTheme);
  }

  function handleLocaleChange(locale: Locale) {
    setLocale(locale);
    currentLocale = locale;
  }
</script>

<div class="controls" role="group" aria-label={m.controls_theme_aria()}>
  <!-- Theme toggle switch -->
  <button
    class="theme-toggle"
    class:dark={theme.isDark}
    onclick={toggleTheme}
    title={theme.isDark ? m.controls_theme_light() : m.controls_theme_dark()}
    aria-label={theme.isDark ? m.controls_theme_light() : m.controls_theme_dark()}
    aria-checked={theme.isDark}
    role="switch"
  >
    <span class="toggle-track">
      <span class="toggle-thumb">
        <span class="toggle-icon" aria-hidden="true">{theme.isDark ? '☾' : '☀'}</span>
      </span>
    </span>
  </button>

  <div class="divider" aria-hidden="true"></div>

  <!-- Language switcher -->
  <div class="segment" aria-label={m.controls_lang_aria()}>
    {#each langOptions as lang}
      <button
        class="seg-btn lang-btn"
        class:active={currentLocale === lang}
        onclick={() => handleLocaleChange(lang)}
        aria-current={currentLocale === lang ? 'true' : 'false'}
      >
        {lang.toUpperCase()}
      </button>
    {/each}
  </div>
</div>

<style>
  .controls {
    display: flex;
    align-items: center;
    gap: 4px;
    background: var(--clr-surface2);
    border: 1px solid var(--clr-border);
    border-radius: calc(var(--radius) + 4px);
    padding: 3px;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    width: 52px;
    height: 26px;
  }

  .toggle-track {
    position: relative;
    display: block;
    width: 48px;
    height: 24px;
    background: var(--clr-border);
    border-radius: 12px;
    transition: background var(--transition);
  }

  .theme-toggle:hover .toggle-track {
    background: var(--clr-muted);
  }

  .theme-toggle.dark .toggle-track {
    background: var(--clr-accent);
  }

  .theme-toggle.dark:hover .toggle-track {
    background: var(--clr-accent-hover);
  }

  .toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: var(--clr-surface);
    border-radius: 50%;
    transition:
      transform var(--transition),
      background var(--transition);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .theme-toggle.dark .toggle-thumb {
    transform: translateX(24px);
    background: var(--clr-accent-fg);
  }

  .toggle-icon {
    font-size: 0.75rem;
    line-height: 1;
    color: var(--clr-muted);
    transition: color var(--transition);
  }

  .theme-toggle.dark .toggle-icon {
    color: var(--clr-accent);
  }

  .segment {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .divider {
    width: 1px;
    height: 16px;
    background: var(--clr-border);
    margin-inline: 2px;
    flex-shrink: 0;
  }

  .seg-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 26px;
    border: none;
    border-radius: var(--radius);
    background: transparent;
    color: var(--clr-muted);
    font-size: 0.75rem;
    cursor: pointer;
    transition:
      background var(--transition),
      color var(--transition);
    line-height: 1;
  }

  .seg-btn:hover {
    color: var(--clr-text);
    background: var(--clr-border);
  }

  .seg-btn.active {
    background: var(--clr-accent);
    color: var(--clr-accent-fg);
  }

  .lang-btn {
    font-family: var(--font-display);
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    width: 30px;
  }
</style>
