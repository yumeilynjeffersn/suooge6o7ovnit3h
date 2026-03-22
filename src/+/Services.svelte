<script>
  import { onMount } from 'svelte';

  /** @type {{ t: import('$lib/i18n/index').Translations }} */
  let { t } = $props();

  onMount(() => {
    const els = document.querySelectorAll('#услуги .reveal, #services .reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
</script>

<section id={t.nav.anchors[0]} class="section services" aria-labelledby="services-heading">
  <div class="container">
    <header class="section-header reveal">
      <p class="eyebrow">{t.services.eyebrow}</p>
      <h2 id="services-heading">{t.services.heading}</h2>
      <p class="section-lead">{t.services.lead}</p>
    </header>

    <ul class="services-grid" role="list">
      {#each t.services.items as svc, i}
        <li class="service-card reveal" style="--delay:{i * 80}ms">
          <span class="service-icon" aria-hidden="true">{svc.icon}</span>
          <h3>{svc.title}</h3>
          <p>{svc.desc}</p>
          <span class="service-num" aria-hidden="true">0{i + 1}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .services { background: var(--clr-surface); }

  .section-header {
    text-align: center;
    margin-bottom: clamp(2.5rem, 5vw, 4rem);
  }

  .section-lead {
    color: var(--clr-muted);
    max-width: 52ch;
    margin-inline: auto;
    margin-top: 0.75rem;
  }

  h2 {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  h3 {
    font-family: var(--font-display);
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 0.5rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
    gap: var(--gap);
  }

  .service-card {
    position: relative;
    background: var(--clr-surface2);
    border: 1px solid var(--clr-border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    transition: border-color var(--transition), transform var(--transition);
    overflow: hidden;
  }

  .service-card:hover {
    border-color: var(--clr-accent);
    transform: translateY(-4px);
  }

  .service-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(184, 212, 68, 0.04), transparent);
    pointer-events: none;
  }

  .service-icon {
    font-size: 2.2rem;
    line-height: 1;
    display: block;
    margin-bottom: 1rem;
    filter: grayscale(0.3);
  }

  .service-card p {
    color: var(--clr-muted);
    font-size: 0.9rem;
    line-height: 1.65;
  }

  .service-num {
    position: absolute;
    bottom: 1.25rem;
    right: 1.5rem;
    font-family: var(--font-display);
    font-size: 3.5rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.03);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  :global([data-theme='light']) .service-num {
    color: rgba(0, 0, 0, 0.04);
  }
</style>
