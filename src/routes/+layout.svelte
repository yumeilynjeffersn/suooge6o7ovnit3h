<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { theme } from '$lib/stores/theme.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		// Initialize theme store and return cleanup function
		const cleanupTheme = theme.init();
		return () => cleanupTheme?.();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Geologica:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
