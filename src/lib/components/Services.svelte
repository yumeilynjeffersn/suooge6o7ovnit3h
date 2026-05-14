<script lang="ts">
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages';

	interface Service {
		icon: string;
		title: string;
		desc: string;
	}

	const services = $derived<Service[]>([
		{ icon: '🌲', title: m.service1_title(), desc: m.service1_desc() },
		{ icon: '🪚', title: m.service2_title(), desc: m.service2_desc() },
		{ icon: '🚛', title: m.service3_title(), desc: m.service3_desc() },
		{ icon: '📋', title: m.service4_title(), desc: m.service4_desc() },
		{ icon: '🌿', title: m.service5_title(), desc: m.service5_desc() },
		{ icon: '🔩', title: m.service6_title(), desc: m.service6_desc() }
	]);

	onMount((): (() => void) | void => {
		const els: NodeListOf<Element> = document.querySelectorAll('#services .reveal');
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

<section id="services" class="section bg-[var(--clr-surface)]" aria-labelledby="services-heading">
	<div class="container">
		<header class="reveal mb-[clamp(2.5rem,5vw,4rem)] text-center">
			<p class="eyebrow">{m.services_eyebrow()}</p>
			<h2 id="services-heading">{m.services_heading()}</h2>
			<p class="mx-auto mt-3 max-w-[52ch] text-[var(--clr-muted)]">
				{m.services_lead()}
			</p>
		</header>

		<ul
			class="grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-[var(--gap)]"
			role="list"
		>
			{#each services as svc, i}
				<li
					class="service-card reveal relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--clr-border)] bg-[var(--clr-surface2)] p-8"
					style="--delay:{i * 80}ms"
				>
					<span class="mb-4 block text-[2.2rem] leading-none grayscale-[0.3]" aria-hidden="true"
						>{svc.icon}</span
					>
					<h3>{svc.title}</h3>
					<p class="text-[0.9rem] leading-[1.65] text-[var(--clr-muted)]">{svc.desc}</p>
					<span
						class="pointer-events-none absolute right-6 bottom-5 font-[family-name:var(--font-display)] text-[3.5rem] leading-none font-black text-[rgba(255,255,255,0.03)] select-none"
						aria-hidden="true">0{i + 1}</span
					>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	/* Card hover effects */
	.service-card {
		transition-property: border-color, transform; /* duration and timing inherited */
	}

	.service-card:hover {
		border-color: var(--clr-accent);
		transform: translateY(-4px);
	}

	/* Card gradient overlay */
	.service-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(184, 212, 68, 0.04), transparent);
		pointer-events: none;
	}
</style>
