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

<header class:scrolled>
  <div class="container header-inner">
    <a href="/" class="logo" aria-label={m.nav_logo_aria()}>
      <span class="logo-mark">⬡</span>
      <span class="logo-text">{m.company_name()}</span>
    </a>

    <nav aria-label={m.nav_aria_label()}>
      <ul class="nav-list" class:open={menuOpen}>
        {#each navLinks as link}
          <li>
            <a href="#{link.anchor}" onclick={closeMenu}>
              {link.text}
            </a>
          </li>
        {/each}
        <li>
          <a href="#contacts" class="nav-cta" onclick={closeMenu}>{m.nav_cta()}</a>
        </li>
      </ul>
    </nav>

    <Controls />

    <button
      class="burger"
      aria-label={menuOpen ? m.nav_menu_close() : m.nav_menu_open()}
      aria-expanded={menuOpen}
      onclick={toggleMenu}
    >
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<style>
  header {
    position: fixed;
    inset-block-start: 0;
    inset-inline: 0;
    z-index: 100;
    padding-block: 1.2rem;
    background: transparent;
    border-bottom: 1px solid transparent;
    transition:
      background var(--transition),
      border-color var(--transition),
      padding var(--transition);
  }

  header.scrolled {
    background: rgba(14, 15, 12, 0.92);
    border-color: var(--clr-border);
    padding-block: 0.8rem;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    flex-shrink: 0;
  }

  .logo-mark {
    font-size: 1.5rem;
    color: var(--clr-accent);
    line-height: 1;
  }

  .logo-text {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--clr-text);
  }

  nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 1.75rem);
    flex-wrap: wrap;
  }

  .nav-list a {
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(232, 229, 220, 0.75);
    transition: color var(--transition);
  }

  .nav-list a:hover {
    color: var(--clr-accent);
  }

  .nav-cta {
    background: var(--clr-accent) !important;
    color: #0e0f0c !important;
    padding: 0.45em 1.1em;
    border-radius: var(--radius);
  }

  .nav-cta:hover {
    background: #cfe84e !important;
  }

  .burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    flex-shrink: 0;
  }

  .burger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--clr-text);
    transition: var(--transition);
    border-radius: 2px;
  }

  @media (max-width: 680px) {
    .burger {
      display: flex;
    }

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
      transition: transform var(--transition);
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
  }
</style>
