<script>
  import { localeStore } from '$lib/stores/locale.svelte.js';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import News from '$lib/components/News.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Team from '$lib/components/Team.svelte';
  import Contacts from '$lib/components/Contacts.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Reactive shorthand — re-renders every component when locale changes
  let t = $derived(localeStore.t);
</script>

<svelte:head>
  <title>{t.meta.title}</title>
  <meta name="description" content={t.meta.description} />
</svelte:head>

<Header {t} />

<main>
  <Hero {t} />
  <Services {t} />
  <News {t} />
  <Gallery {t} />
  <Team {t} />
  <Contacts {t} />
</main>

<Footer {t} />
