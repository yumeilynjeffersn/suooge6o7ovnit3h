<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.svelte';
  import { setLocale, getLocale } from '$lib/paraglide/runtime';
  import * as m from '$lib/paraglide/messages';

  type Locale = 'en' | 'ru';

  const langOptions: Locale[] = ['ru', 'en'];
  let currentLocale = $state<Locale>(getLocale() as Locale);

  // Convert 'system' to concrete theme on mount
  onMount(() => {
    if (theme.mode === 'system') {
      theme.setMode(theme.isDark ? 'dark' : 'light');
    }
  });

  // Toggle between light and dark
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
  <!-- Theme toggle button -->
  <button
    class="theme-toggle"
    onclick={toggleTheme}
    title={theme.isDark ? m.controls_theme_light() : m.controls_theme_dark()}
    aria-label={theme.isDark ? m.controls_theme_light() : m.controls_theme_dark()}
  >
    <span aria-hidden="true">{theme.isDark ? '☀' : '☾'}</span>
  </button>

  <div class="divider" aria-hidden="true"></div>

  <!-- Language switcher -->
  <div class="segment" aria-label={m.controls_lang_aria()}>
    {#each langOptions as lang}
      <button
        class="seg-btn lang-btn"
        class:active={currentLocale === lang}
        onclick={() => handleLocaleChange(lang)}
        aria-pressed={currentLocale === lang}
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
    width: 32px;
    height: 26px;
    border: none;
    border-radius: var(--radius);
    background: transparent;
    color: var(--clr-accent);
    font-size: 1rem;
    cursor: pointer;
    transition:
      transform var(--transition),
      color var(--transition);
    line-height: 1;
  }

  .theme-toggle:hover {
    transform: scale(1.1);
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
