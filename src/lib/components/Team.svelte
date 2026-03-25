<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  interface TeamMember {
    name: string;
    role: string;
    img: string;
  }

  const team = $derived<TeamMember[]>([
    { name: m.team1_name(), role: m.team1_role(), img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: m.team2_name(), role: m.team2_role(), img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: m.team3_name(), role: m.team3_role(), img: 'https://randomuser.me/api/portraits/men/67.jpg' },
    { name: m.team4_name(), role: m.team4_role(), img: 'https://randomuser.me/api/portraits/women/25.jpg' },
  ]);

  onMount((): (() => void) | void => {
    const els: NodeListOf<Element> = document.querySelectorAll('#team .reveal');
    const obs: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((e: IntersectionObserverEntry) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el: Element) => obs.observe(el));
    return () => obs.disconnect();
  });
</script>

<section id="team" class="section team bg-(--clr-bg)" aria-labelledby="team-heading">
  <div class="container">
    <header style="margin-bottom: clamp(2.5rem, 5vw, 4rem)" class="reveal text-center">
      <p class="eyebrow">{m.team_eyebrow()}</p>
      <h2 id="team-heading">{m.team_heading()}</h2>
      <p style="margin-inline: auto" class="text-[var(--clr-muted)] max-w-[52ch] mx-auto !mt-4">
        {m.team_lead()}
      </p>
    </header>

    <ul class="team-grid" role="list">
      {#each team as member, i}
        <li class="team-card reveal" style="--delay:{i * 90}ms">
          <div class="team-photo-wrap">
            <img src={member.img} alt={member.name} loading="lazy" width="200" height="200" />
          </div>
          <div class="team-info">
            <h3>{member.name}</h3>
            <p class="team-role font-(family-name:--font-display) text-[0.75rem] text-[var(--clr-accent)] uppercase font-bold tracking-wider !mb-3">{member.role}</p>
            <p class="team-bio text-[var(--clr-muted)] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore.
            </p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
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
    transition:
      border-color var(--transition),
      transform var(--transition);
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
  .team-photo-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
