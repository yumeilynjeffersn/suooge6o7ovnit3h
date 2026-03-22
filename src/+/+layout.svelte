<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.svelte.js';
  import { localeStore } from '$lib/stores/locale.svelte.js';
  import '../app.css';

  let { children } = $props();

  onMount(() => {
    // Returns cleanup fn for system-change listener
    const cleanupTheme = theme.init();
    localeStore.init();
    return () => cleanupTheme?.();
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Geologica:wght@300;400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children()}
