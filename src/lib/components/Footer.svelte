<script lang="ts">
  import * as m from '$lib/paraglide/messages';

  const navLinks = $derived([
    { text: m.nav_services(), anchor: 'services' },
    { text: m.nav_news(), anchor: 'news' },
    { text: m.nav_gallery(), anchor: 'gallery' },
    { text: m.nav_team(), anchor: 'team' },
    { text: m.nav_contacts(), anchor: 'contacts' },
  ]);
</script>

<footer role="contentinfo">
  <div class="container footer-inner">
    <div class="footer-brand">
      <a href="/" class="logo" aria-label={m.footer_logo_aria()}>
        <span class="logo-mark">⬡</span>
        <span class="logo-text">NorthWood</span>
      </a>
      <p>
        {m.footer_tagline()}
      </p>
    </div>

    <nav aria-label="Footer navigation">
      <h4>{m.footer_nav_heading()}</h4>
      <ul role="list">
        {#each navLinks as link}
          <li><a href="#{link.anchor}">{link.text}</a></li>
        {/each}
      </ul>
    </nav>

    <div class="footer-contacts">
      <h4>{m.footer_contacts_heading()}</h4>
      <address>
        <p>{m.footer_address()}</p>
        <p><a href="tel:+78182000000">{m.contacts_phone_value()}</a></p>
        <p><a href="mailto:info@northwood.ru">{m.contacts_email_value()}</a></p>
      </address>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p>{m.footer_copyright()}</p>
      <p><a href="/privacy">{m.footer_privacy()}</a></p>
    </div>
  </div>
</footer>

<style>
  footer {
    background: #080908;
    border-top: 1px solid var(--clr-border);
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: clamp(2rem, 5vw, 4rem);
    padding-block: clamp(2.5rem, 5vw, 4rem);
    align-items: start;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    margin-bottom: 1rem;
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

  .logo-text strong {
    font-weight: 900;
    color: var(--clr-accent);
  }

  .footer-brand p {
    color: var(--clr-muted);
    font-size: 0.85rem;
    max-width: 32ch;
  }

  nav h4,
  .footer-contacts h4 {
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--clr-muted);
    margin-bottom: 1rem;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  nav a {
    color: rgba(232, 229, 220, 0.65);
    font-size: 0.9rem;
    transition: color var(--transition);
  }

  nav a:hover {
    color: var(--clr-accent);
  }

  .footer-contacts address p {
    color: rgba(232, 229, 220, 0.65);
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  .footer-contacts a {
    transition: color var(--transition);
  }

  .footer-contacts a:hover {
    color: var(--clr-accent);
  }

  .footer-bottom {
    border-top: 1px solid var(--clr-border);
    padding-block: 1.25rem;
  }

  .footer-bottom-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .footer-bottom p {
    font-size: 0.78rem;
    color: var(--clr-muted);
  }

  .footer-bottom a {
    color: var(--clr-muted);
    transition: color var(--transition);
  }

  .footer-bottom a:hover {
    color: var(--clr-accent);
  }

  @media (max-width: 900px) {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
    }

    .footer-brand {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 680px) {
    .footer-inner {
      grid-template-columns: 1fr;
    }

    .footer-brand {
      grid-column: auto;
    }
  }
</style>
