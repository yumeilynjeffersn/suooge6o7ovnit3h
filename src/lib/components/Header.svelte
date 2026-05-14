<script lang="ts">
  import { onMount } from 'svelte';
  import Controls from '$lib/components/Controls.svelte';
  import * as m from '$lib/paraglide/messages';

  interface NavLink {
    text: string;
    anchor: string;
  }

  let menuOpen = $state<boolean>(false);
  let scrolled = $state<boolean>(false);

  const navLinks = $derived<NavLink[]>([
    { text: m.nav_services(), anchor: 'services' },
    { text: m.nav_news(), anchor: 'news' },
    { text: m.nav_gallery(), anchor: 'gallery' },
    { text: m.nav_team(), anchor: 'team' },
    { text: m.nav_contacts(), anchor: 'contacts' },
  ]);

  onMount((): (() => void) | void => {
    const onScroll = (): void => {
      scrolled = window.scrollY > 60;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  function closeMenu(): void {
    menuOpen = false;
  }

  function toggleMenu(): void {
    menuOpen = !menuOpen;
  }
</script>

<header class="header fixed top-0 left-0 right-0 z-[100] py-5 bg-transparent border-b border-transparent" class:scrolled>
  <div class="container flex items-center justify-between gap-6">
    <a href="/" class="flex items-center gap-2 flex-shrink-0 no-underline" aria-label={m.nav_logo_aria()}>
      <span class="text-2xl text-[var(--clr-accent)] leading-none">⬡</span>
      <span class="font-[family-name:var(--font-display)] text-[1.1rem] font-normal tracking-[0.04em] text-white">{m.company_name()}</span>
    </a>

    <nav class="flex-1 flex justify-end" aria-label={m.nav_aria_label()}>
      <ul class="nav-list flex items-center gap-[clamp(0.5rem,2vw,1.75rem)] flex-wrap" class:open={menuOpen}>
        {#each navLinks as link}
          <li>
            <a href="#{link.anchor}" onclick={closeMenu} class="font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.12em] uppercase text-[rgba(232,229,220,0.75)] transition-colors transition-base hover:text-[var(--clr-accent)]">
              {link.text}
            </a>
          </li>
        {/each}
        <li>
          <a href="#contacts" class="nav-cta bg-[var(--clr-accent)] !text-[#0e0f0c] py-2 px-4 rounded-[var(--radius)] hover:bg-[var(--clr-accent-hover)]" onclick={closeMenu}>{m.nav_cta()}</a>
        </li>
      </ul>
    </nav>

    <Controls />

    <button
      class="burger hidden flex-col gap-[5px] bg-none border-none cursor-pointer p-1 flex-shrink-0 max-[680px]:flex"
      aria-label={menuOpen ? m.nav_menu_close() : m.nav_menu_open()}
      aria-expanded={menuOpen}
      onclick={toggleMenu}
    >
      <span class="block w-6 h-0.5 bg-[var(--clr-text)] rounded-sm transition-all transition-base"></span>
      <span class="block w-6 h-0.5 bg-[var(--clr-text)] rounded-sm transition-all transition-base"></span>
      <span class="block w-6 h-0.5 bg-[var(--clr-text)] rounded-sm transition-all transition-base"></span>
    </button>
  </div>
</header>

<style>
  /* Header transitions */
  .header {
    transition-property: background-color, border-color, padding;
    transition-duration: var(--transition-base);
  }

  /* Scrolled state */
  .header.scrolled {
    background: rgba(14, 15, 12, 0.92);
    border-color: var(--clr-border);
    padding-block: 0.8rem;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  /* Mobile menu */
  @media (max-width: 680px) {
    nav {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 99;
    }

    .nav-list {
      position: fixed;
      inset-block-start: 0;
      inset-inline-end: 0;
      width: min(80vw, 300px);
      height: 100dvh;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;
      padding: 3rem 2rem;
      background: var(--clr-surface);
      border-left: 1px solid var(--clr-border);
      transform: translateX(100%);
      transition-property: transform;
      transition-duration: var(--transition-base);
      pointer-events: none;
      flex-wrap: nowrap;
    }

    .nav-list.open {
      transform: none;
      pointer-events: all;
    }

    .nav-list a {
      font-size: 0.9rem;
    }

    .nav-list.open {
      transform: none;
      pointer-events: all;
    }
  }
</style>
