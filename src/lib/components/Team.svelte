<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  interface TeamMember {
    name: string;
    role: string;
    initials: string;
    color: string;
  }

  const team = $derived<TeamMember[]>([
    { name: m.team1_name(), role: m.team1_role(), initials: 'ДО', color: '#4a90e2' },
    { name: m.team2_name(), role: m.team2_role(), initials: 'ВЗ', color: '#f5a623' },
    { name: m.team3_name(), role: m.team3_role(), initials: 'АК', color: '#bd10e0' },
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
    <header class="text-center mb-[clamp(2.5rem,5vw,4rem)] reveal">
      <p class="eyebrow">{m.team_eyebrow()}</p>
      <h2 id="team-heading">{m.team_heading()}</h2>
      <p class="text-[var(--clr-muted)] max-w-[52ch] mx-auto mt-3">
        {m.team_lead()}
      </p>
    </header>

    <ul class="grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-[var(--gap)]" role="list">
      {#each team as member, i}
        <li class="team-card flex flex-col items-center text-center bg-[var(--clr-surface)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] p-8 px-6 reveal" style="--delay:{i * 90}ms">
          <div class="w-[100px] h-[100px] rounded-full overflow-hidden border-[3px] border-[var(--clr-accent)] mb-5 flex-shrink-0 flex items-center justify-center" style="background: {member.color}">
            <span class="text-white font-[family-name:var(--font-display)] text-2xl font-bold" aria-label={member.name}>{member.initials}</span>
          </div>
          <div>
            <h3>{member.name}</h3>
            <p class="font-[family-name:var(--font-display)] text-xs text-[var(--clr-accent)] uppercase font-bold tracking-wider mb-3">{member.role}</p>
            <p class="text-[var(--clr-muted)] text-sm">
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
  /* Card hover effects */
  .team-card {
    transition-property: border-color, transform;
    transition-duration: var(--transition-base);
  }
  .team-card:hover {
    border-color: var(--clr-accent);
    transform: translateY(-4px);
  }
  /* Removed - moved to Tailwind */
</style>
