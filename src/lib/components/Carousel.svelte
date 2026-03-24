<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  import Carousel from "svelte-flickity";

  interface GalleryItem {
    src: string;
    label: string;
  }

  const gallery = $derived<GalleryItem[]>([
    { src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80', label: m.gallery1_label() },
    { src: 'https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?w=800&q=80',    label: m.gallery2_label() },
    { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', label: m.gallery3_label() },
    { src: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?w=800&q=80', label: m.gallery4_label() },
    { src: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&q=80', label: m.gallery5_label() },
    { src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80', label: m.gallery6_label() },
  ]);

  const options = { // https://flickity.metafizzy.co/options.html
    freeScroll: true,
    freeScrollFriction: 0.03,
    wrapAround: true
  };
</script>

<Carousel {options}>
  {#each gallery as item, i}
    <figure role="listitem">
      <img src={item.src} alt={item.label} loading="lazy" width="800" height="600" />
      <figcaption>{item.label}</figcaption>
    </figure>
  {/each}
</Carousel>