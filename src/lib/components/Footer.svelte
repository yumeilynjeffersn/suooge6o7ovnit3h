<script lang="ts">
  import * as m from '$lib/paraglide/messages';

  interface NavLink {
    text: string;
    anchor: string;
  }

  const navLinks = $derived<NavLink[]>([
    { text: m.nav_services(), anchor: 'services' },
    { text: m.nav_news(), anchor: 'news' },
    { text: m.nav_gallery(), anchor: 'gallery' },
    { text: m.nav_team(), anchor: 'team' },
    { text: m.nav_contacts(), anchor: 'contacts' },
  ]);
</script>

<footer class="bg-[#080908] border-t border-[var(--clr-border)]">
  <div class="container grid grid-cols-[2fr_1fr_1fr] gap-[clamp(2rem,5vw,4rem)] py-[clamp(2.5rem,5vw,4rem)] items-start max-[900px]:grid-cols-2 max-[680px]:grid-cols-1">
    <div class="max-[900px]:col-span-2 max-[680px]:col-auto">
      <a href="/" class="logo flex items-center gap-[ 0.5rem] mb-1" aria-label={m.footer_logo_aria()}>
        <span class="logo-mark">⬡</span>
        <span class="logo-text">{m.company_name()}</span>
      </a>
      <p class="text-[var(--clr-muted)] text-[0.85rem] max-w-[32ch]">{m.footer_tagline()}</p>
    </div>

    <nav aria-label="Footer navigation">
      <h4 class="font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--clr-muted)] mb-4">{m.footer_nav_heading()}</h4>
      <ul class="flex flex-col gap-2" role="list">
        {#each navLinks as link}
          <li><a href="#{link.anchor}" class="text-[rgba(232,229,220,0.65)] text-[0.9rem] transition-colors transition-base hover:text-[var(--clr-accent)]">{link.text}</a></li>
        {/each}
      </ul>
    </nav>

    <div>
      <h4 class="font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--clr-muted)] mb-4">{m.footer_contacts_heading()}</h4>
      <address>
        <p class="text-[rgba(232,229,220,0.65)] text-[0.9rem] mb-1.5">{m.footer_address()}</p>
        <p class="text-[rgba(232,229,220,0.65)] text-[0.9rem] mb-1.5"><a href="tel:{m.phone_number()}" class="transition-colors transition-base hover:text-[var(--clr-accent)]">{m.phone_number()}</a></p>
        <p class="text-[rgba(232,229,220,0.65)] text-[0.9rem] mb-1.5"><a href="mailto:{m.email_address()}" class="transition-colors transition-base hover:text-[var(--clr-accent)]">{m.email_address()}</a></p>
      </address>
    </div>
  </div>

  <div class="border-t border-[var(--clr-border)] py-5">
    <div class="container flex justify-between items-center flex-wrap gap-2">
      <p class="text-[0.78rem] text-[var(--clr-muted)]">{m.footer_copyright()}</p>
      <p class="text-[0.78rem] text-[var(--clr-muted)]"><a href="/privacy" class="transition-colors transition-base hover:text-[var(--clr-accent)]">{m.footer_privacy()}</a></p>
    </div>
  </div>
</footer>

<style>
  /* Logo mark styling */
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
</style>
