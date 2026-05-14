<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  interface GalleryItem {
    src: string;
    label: string;
  }

  const gallery = $derived<GalleryItem[]>([
    { src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80', label: m.gallery1_label() },
    { src: 'https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?w=800&q=80', label: m.gallery2_label() },
    { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', label: m.gallery3_label() },
    { src: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?w=800&q=80', label: m.gallery4_label() },
    { src: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&q=80', label: m.gallery5_label() },
    { src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80', label: m.gallery6_label() },
  ]);

  onMount((): (() => void) | void => {
    const els: NodeListOf<Element> = document.querySelectorAll('#gallery .reveal');
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

<section id="gallery" class="section bg-[var(--clr-surface)]" aria-labelledby="gallery-heading">
  <div class="container">
    <header class="text-center mb-[clamp(2.5rem,5vw,4rem)] reveal">
      <p class="eyebrow">{m.gallery_eyebrow()}</p>
      <h2 id="gallery-heading">{m.gallery_heading()}</h2>
    </header>
  </div>

  <div class="gallery-strip flex overflow-x-auto gap-4 px-[clamp(1rem,4vw,calc((100vw-var(--max-w))/2+2.5rem))] pb-3" role="list" aria-label={m.gallery_aria()}>
    {#each gallery as item, i}
      <figure class="gallery-item flex-[0_0_clamp(260px,35vw,480px)] aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden relative cursor-pointer m-0 reveal" style="--delay:{i * 60}ms" role="listitem">
        <img src={item.src} alt={item.label} loading="lazy" width="800" height="600" class="w-full h-full object-cover" />
        <figcaption class="gallery-caption absolute bottom-0 inset-x-0 bg-gradient-to-t from-[rgba(14,15,12,0.85)] to-transparent text-[var(--clr-text)] pt-6 pb-3 px-4 font-[family-name:var(--font-display)] text-[0.7rem] font-bold tracking-[0.1em] uppercase opacity-0">{item.label}</figcaption>
      </figure>
    {/each}
  </div>
</section>

<style>
  /* Custom scrollbar styling */
  .gallery-strip {
    scrollbar-width: thin;
    scrollbar-color: var(--clr-accent) transparent;
  }

  .gallery-strip::-webkit-scrollbar {
    height: 4px;
  }

  .gallery-strip::-webkit-scrollbar-track {
    background: transparent;
  }

  .gallery-strip::-webkit-scrollbar-thumb {
    background: var(--clr-accent);
    border-radius: 2px;
  }

  /* Image zoom on hover */
  .gallery-item img {
    transition-property: transform;
    transition-duration: 500ms;
    transition-timing-function: ease;
  }

  .gallery-item:hover img {
    transform: scale(1.07);
  }

  /* Caption fade on hover */
  .gallery-caption {
    transition-property: opacity;
    transition-duration: var(--transition-base-duration);
    transition-timing-function: var(--transition-base-timing);
  }

  .gallery-item:hover .gallery-caption {
    opacity: 1;
  }
</style>
