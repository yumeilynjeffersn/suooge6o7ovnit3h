<script>
  import { theme } from '$lib/stores/theme.svelte.js';
  import { localeStore } from '$lib/stores/locale.svelte.js';

  /** @type {{ t: import('$lib/i18n/index').Translations }} */
  let { t } = $props();

  const themeOptions = [
    { value: 'system', icon: '⬡' },
    { value: 'light',  icon: '☀' },
    { value: 'dark',   icon: '☾' },
  ];

  const themeLabels = $derived({
    system: t.controls.themeSystem,
    light:  t.controls.themeLight,
    dark:   t.controls.themeDark,
  });
</script>

<div class="controls" role="group" aria-label={t.controls.themeAriaLabel}>
  <!-- Theme switcher -->
  <div class="segment" aria-label={t.controls.themeAriaLabel}>
    {#each themeOptions as opt}
      <button
        class="seg-btn"
        class:active={theme.mode === opt.value}
        onclick={() => theme.setMode(opt.value)}
        title={themeLabels[opt.value]}
        aria-pressed={theme.mode === opt.value}
      >
        <span aria-hidden="true">{opt.icon}</span>
        <span class="sr-only">{themeLabels[opt.value]}</span>
      </button>
    {/each}
  </div>

  <div class="divider" aria-hidden="true"></div>

  <!-- Language switcher -->
  <div class="segment" aria-label={t.controls.langAriaLabel}>
    {#each ['ru', 'en'] as lang}
      <button
        class="seg-btn lang-btn"
        class:active={localeStore.locale === lang}
        onclick={() => localeStore.setLocale(lang)}
        aria-pressed={localeStore.locale === lang}
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

  /* Visually hidden but accessible */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
