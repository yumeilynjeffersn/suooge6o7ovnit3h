<script>
  import { onMount } from 'svelte';

  /** @type {{ t: import('$lib/i18n/index').Translations }} */
  let { t } = $props();

  onMount(() => {
    const els = document.querySelectorAll('#команда .reveal, #team .reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
</script>

<section id={t.nav.anchors[3]} class="section team" aria-labelledby="team-heading">
  <div class="container">
    <header class="section-header reveal">
      <p class="eyebrow">{t.team.eyebrow}</p>
      <h2 id="team-heading">{t.team.heading}</h2>
      <p class="section-lead">{t.team.lead}</p>
    </header>

    <ul class="team-grid" role="list">
      {#each t.team.members as member, i}
        <li class="team-card reveal" style="--delay:{i * 90}ms">
          <div class="team-photo-wrap">
            <img src={member.img} alt={member.name} loading="lazy" width="200" height="200" />
          </div>
          <div class="team-info">
            <h3>{member.name}</h3>
            <p class="team-role">{member.role}</p>
            <p class="team-bio">{t.team.bio}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .team { background: var(--clr-bg); }

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

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
    gap: var(--gap);
  }

  .team-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: var(--clr-surface);
    border: 1px solid var(--clr-border);
    border-radius: var(--radius-lg);
    padding: 2rem 1.5rem;
    transition: border-color var(--transition), transform var(--transition);
  }

  .team-card:hover {
    border-color: var(--clr-accent);
    transform: translateY(-4px);
  }

  .team-photo-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--clr-accent);
    margin-bottom: 1.25rem;
    flex-shrink: 0;
  }

  .team-photo-wrap img { width: 100%; height: 100%; object-fit: cover; }

  .team-role {
    font-size: 0.75rem;
    font-family: var(--font-display);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--clr-accent);
    margin-bottom: 0.75rem;
  }

  .team-bio { color: var(--clr-muted); font-size: 0.85rem; }
</style>
