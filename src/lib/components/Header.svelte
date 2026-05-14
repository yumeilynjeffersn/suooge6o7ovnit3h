<script lang="ts">
	import { onMount } from 'svelte';
	import Controls from '$lib/components/Controls.svelte';
	import * as m from '$lib/paraglide/messages';

	interface NavLink {
		text: string;
		anchor: string;
	}

	let menuOpen = $state<boolean>(false);
	let scrolled = $state<boolean>(false);

	const navLinks = $derived<NavLink[]>([
		{ text: m.nav_services(), anchor: 'services' },
		{ text: m.nav_news(), anchor: 'news' },
		{ text: m.nav_gallery(), anchor: 'gallery' },
		{ text: m.nav_team(), anchor: 'team' },
		{ text: m.nav_contacts(), anchor: 'contacts' }
	]);

	onMount((): (() => void) | void => {
		const onScroll = (): void => {
			scrolled = window.scrollY > 60;
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	function closeMenu(): void {
		menuOpen = false;
	}

	function toggleMenu(): void {
		menuOpen = !menuOpen;
	}
</script>

<header
	class="header fixed top-0 right-0 left-0 z-[100] border-b border-transparent bg-transparent py-5"
	class:scrolled
>
	<div class="container flex items-center justify-between gap-6">
		<a
			href="/"
			class="flex flex-shrink-0 items-center gap-2 no-underline"
			aria-label={m.nav_logo_aria()}
		>
			<span class="text-2xl leading-none text-[var(--clr-accent)]">⬡</span>
			<span
				class="font-[family-name:var(--font-display)] text-[1.1rem] font-normal tracking-[0.04em] text-white"
				>{m.company_name()}</span
			>
		</a>

		<nav class="flex flex-1 justify-end" aria-label={m.nav_aria_label()}>
			<ul
				class="nav-list flex flex-wrap items-center gap-[clamp(0.5rem,2vw,1.75rem)]"
				class:open={menuOpen}
			>
				{#each navLinks as link}
					<li>
						<a
							href="#{link.anchor}"
							onclick={closeMenu}
							class="nav-link font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.12em] uppercase"
						>
							{link.text}
						</a>
					</li>
				{/each}
				<li>
					<a href="#contacts" class="nav-cta rounded-[var(--radius)] px-4 py-2" onclick={closeMenu}
						>{m.nav_cta()}</a
					>
				</li>
			</ul>
		</nav>

		<Controls />

		<button
			class="burger hidden flex-shrink-0 cursor-pointer flex-col gap-[5px] border-none bg-none p-1 max-[680px]:flex"
			aria-label={menuOpen ? m.nav_menu_close() : m.nav_menu_open()}
			aria-expanded={menuOpen}
			onclick={toggleMenu}
		>
			<span class="block h-0.5 w-6 rounded-sm bg-[var(--clr-text)] transition-all transition-base"
			></span>
			<span class="block h-0.5 w-6 rounded-sm bg-[var(--clr-text)] transition-all transition-base"
			></span>
			<span class="block h-0.5 w-6 rounded-sm bg-[var(--clr-text)] transition-all transition-base"
			></span>
		</button>
	</div>
</header>

<style>
	/* Header transitions */
	.header {
		transition-property: background-color, border-color, padding; /* duration and timing inherited */
	}

	/* Navigation links */
	.nav-link {
		color: var(--clr-nav-link);
		transition-property: color; /* duration and timing inherited */
	}

	.nav-link:hover {
		color: var(--clr-accent);
	}

	/* CTA button */
	.nav-cta {
		background: var(--clr-accent);
		color: var(--clr-accent-fg);
		transition-property: background-color; /* duration and timing from global button rule */
	}

	.nav-cta:hover {
		background: var(--clr-accent-hover);
	}

	/* Scrolled state */
	.header.scrolled {
		background: rgba(14, 15, 12, 0.92);
		border-color: var(--clr-border);
		padding-block: 0.8rem;
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
	}

	/* Mobile menu */
	@media (max-width: 680px) {
		nav {
			position: fixed;
			inset: 0;
			pointer-events: none;
			z-index: 99;
		}

		.nav-list {
			position: fixed;
			inset-block-start: 0;
			inset-inline-end: 0;
			width: min(80vw, 300px);
			height: 100dvh;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 1.5rem;
			padding: 3rem 2rem;
			background: var(--clr-surface);
			border-left: 1px solid var(--clr-border);
			transform: translateX(100%);
			transition-property: transform; /* duration and timing inherited */
			pointer-events: none;
			flex-wrap: nowrap;
		}

		.nav-list.open {
			transform: none;
			pointer-events: all;
		}

		.nav-list a {
			font-size: 0.9rem;
		}

		.nav-list.open {
			transform: none;
			pointer-events: all;
		}
	}
</style>
