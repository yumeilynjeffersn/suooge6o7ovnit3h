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
		{ name: m.team3_name(), role: m.team3_role(), initials: 'АК', color: '#bd10e0' }
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
		<header class="reveal mb-[clamp(2.5rem,5vw,4rem)] text-center">
			<p class="eyebrow">{m.team_eyebrow()}</p>
			<h2 id="team-heading">{m.team_heading()}</h2>
			<p class="mx-auto mt-3 max-w-[52ch] text-[var(--clr-muted)]">
				{m.team_lead()}
			</p>
		</header>

		<ul
			class="grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-[var(--gap)]"
			role="list"
		>
			{#each team as member, i}
				<li
					class="team-card reveal flex flex-col items-center rounded-[var(--radius-lg)] border border-[var(--clr-border)] bg-[var(--clr-surface)] p-8 px-6 text-center"
					style="--delay:{i * 90}ms"
				>
					<div
						class="mb-5 flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-[var(--clr-accent)]"
						style="background: {member.color}"
					>
						<span
							class="font-[family-name:var(--font-display)] text-2xl font-bold text-white"
							aria-label={member.name}>{member.initials}</span
						>
					</div>
					<div>
						<h3>{member.name}</h3>
						<p
							class="mb-3 font-[family-name:var(--font-display)] text-xs font-bold tracking-wider text-[var(--clr-accent)] uppercase"
						>
							{member.role}
						</p>
						<p class="text-sm text-[var(--clr-muted)]">
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
		transition-property: border-color, transform; /* duration and timing inherited */
	}
	.team-card:hover {
		border-color: var(--clr-accent);
		transform: translateY(-4px);
	}
	/* Removed - moved to Tailwind */
</style>
