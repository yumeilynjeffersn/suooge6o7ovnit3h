<script lang="ts">
  import * as m from '$lib/paraglide/messages';
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
    <p class="hero-eyebrow">{m.hero_since()}</p>
    <h1 id="hero-heading">
      {m.hero_heading_line1()}<br />{m.hero_heading_line2()}<br /><em>{m.hero_heading_accent()}</em>
    </h1>
    <p class="hero-sub">
      {m.hero_sub()}
    </p>
    <div class="hero-actions">
      <a href="#services" class="btn-primary">{m.hero_cta_primary()}</a>
      <a href="#contacts" class="btn-outline">{m.hero_cta_secondary()}</a>
    </div>
    <dl class="hero-stats" aria-label={m.hero_stats_aria()}>
      <div><dt>{m.hero_stat1_value()}</dt><dd>{m.hero_stat1_label()}</dd></div>
      <div><dt>{m.hero_stat2_value()}</dt><dd>{m.hero_stat2_label()}</dd></div>
      <div><dt>{m.hero_stat3_value()}</dt><dd>{m.hero_stat3_label()}</dd></div>
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

  .hero-bg {
    position: absolute;
    inset: 0;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      117deg,
      rgba(14, 15, 12, 0.9) 0%,
      rgba(14, 15, 12, 0.65) 55%,
      rgba(14, 15, 12, 0.4) 50%
    );
    /* background: linear-gradient(
      120deg,
      rgba(14, 15, 12, 0.9) 0%,
      rgba(14, 15, 12, 0.65) 55%,
      rgba(14, 15, 12, 0.4) 100%
    ); */
    z-index: 1;
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
    max-width: 920px;
    animation: heroIn 1s ease 0.2s both;
  }

  @keyframes heroIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  .hero-eyebrow {
    margin-top: 64px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--clr-accent);
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
    font-size: clamp(2.8rem, 5vw, 6.5rem);
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
    color: rgba(232, 229, 220, 0.7);
    max-width: 45ch;
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  /* Local btn overrides so Hero works standalone */
  .btn-primary,
  .btn-outline {
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
    color: #0e0f0c;
    border: 2px solid transparent;
  }

  .btn-primary:hover {
    background: #cfe84e;
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: var(--clr-text);
    border: 2px solid rgba(255, 255, 255, 0.25);
  }

  .btn-outline:hover {
    border-color: var(--clr-accent);
    color: var(--clr-accent);
    transform: translateY(-2px);
  }

  .hero-stats {
    display: flex;
    gap: 2.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-border);
    flex-wrap: wrap;
  }

  .hero-stats > div {
    display: flex;
    flex-direction: column;
  }

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
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }

  @media (max-width: 680px) {
    h1 {
      font-size: clamp(2.2rem, 11vw, 3.5rem);
    }
  }
</style>
