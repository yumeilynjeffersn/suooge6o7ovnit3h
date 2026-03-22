

<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import FeatureBlocks from '$lib/components/FeatureBlocks.svelte';
  import News from '$lib/components/News.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Team from '$lib/components/Team.svelte';
  import Contacts from '$lib/components/Contacts.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Global reveal observer — picks up any .reveal elements
  // not handled by individual components (e.g. added dynamically)
  onMount(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
</script>

<svelte:head>
  <title>{m.meta_title()}</title>
  <meta name="description" content={m.meta_description()} />
</svelte:head>

<Header />

<main>
  <Hero />
  <Services />
  <FeatureBlocks />
  <News />
  <Gallery />
  <Team />
  <Contacts />
</main>

<Footer />
