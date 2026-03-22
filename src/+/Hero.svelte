<script>
  /** @type {{ t: import('$lib/i18n/index').Translations }} */
  let { t } = $props();
</script>

<section class="hero" aria-labelledby="hero-heading">
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-overlay"></div>
    <img
      src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=1800&q=85"
      alt=""
      class="hero-img"
      fetchpriority="high"
    />
  </div>

  <div class="container hero-content">
    <p class="hero-eyebrow">{t.hero.since}</p>
    <h1 id="hero-heading">
      {t.hero.headingLine1}<br />{t.hero.headingLine2}<br /><em>{t.hero.headingAccent}</em>
    </h1>
    <p class="hero-sub">{t.hero.sub}</p>
    <div class="hero-actions">
      <a href="#{t.nav.anchors[0]}" class="btn-primary">{t.hero.ctaPrimary}</a>
      <a href="#{t.nav.anchors[4]}" class="btn-outline">{t.hero.ctaSecondary}</a>
    </div>
    <dl class="hero-stats" aria-label={t.hero.statsAriaLabel}>
      {#each t.hero.stats as stat}
        <div><dt>{stat.value}</dt><dd>{stat.label}</dd></div>
      {/each}
    </dl>
  </div>

  <div class="hero-scroll" aria-hidden="true">↓</div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: flex-end;
    padding-bottom: clamp(3rem, 7vw, 5rem);
    overflow: hidden;
  }

  .hero-bg { position: absolute; inset: 0; }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(14, 15, 12, 0.9) 0%,
      rgba(14, 15, 12, 0.65) 55%,
      rgba(14, 15, 12, 0.4) 100%
    );
    z-index: 1;
  }

  /* Light theme: softer overlay */
  :global([data-theme='light']) .hero-overlay {
    background: linear-gradient(
      120deg,
      rgba(245, 244, 239, 0.82) 0%,
      rgba(245, 244, 239, 0.5) 55%,
      rgba(245, 244, 239, 0.2) 100%
    );
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 1.5rem;
    max-width: 700px;
    animation: heroIn 1s ease 0.2s both;
  }

  @keyframes heroIn {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: none; }
  }

  .hero-eyebrow {
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--clr-accent);
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .hero-eyebrow::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 2px;
    background: var(--clr-accent);
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 8vw, 6.5rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--clr-text);
  }

  h1 em {
    font-style: normal;
    color: var(--clr-accent);
    display: block;
  }

  .hero-sub {
    color: var(--clr-hero-sub);
    max-width: 45ch;
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* Local button styles (hero lives on top of image, needs own context) */
  .btn-primary, .btn-outline {
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.8em;
    border-radius: var(--radius);
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: var(--transition);
    cursor: pointer;
  }

  .btn-primary {
    background: var(--clr-accent);
    color: var(--clr-accent-fg);
    border: 2px solid transparent;
  }
  .btn-primary:hover { background: var(--clr-accent-hover); transform: translateY(-2px); }

  .btn-outline {
    background: transparent;
    color: var(--clr-text);
    border: 2px solid var(--clr-btn-outline-border);
  }
  .btn-outline:hover { border-color: var(--clr-accent); color: var(--clr-accent); transform: translateY(-2px); }

  .hero-stats {
    display: flex;
    gap: 2.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-border);
    flex-wrap: wrap;
  }

  .hero-stats > div { display: flex; flex-direction: column; }

  .hero-stats dt {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 900;
    color: var(--clr-accent);
    line-height: 1;
  }

  .hero-stats dd {
    font-size: 0.75rem;
    color: var(--clr-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .hero-scroll {
    position: absolute;
    bottom: 2rem;
    right: clamp(1rem, 4vw, 2.5rem);
    z-index: 2;
    font-size: 1.5rem;
    color: var(--clr-accent);
    animation: bounce 2s ease infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }

  @media (max-width: 680px) {
    h1 { font-size: clamp(2.2rem, 11vw, 3.5rem); }
  }
</style>
