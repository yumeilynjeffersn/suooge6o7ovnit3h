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

<section id="gallery" class="section gallery" aria-labelledby="gallery-heading">
  <div class="container">
    <header class="section-header reveal">
      <p class="eyebrow">{m.gallery_eyebrow()}</p>
      <h2 id="gallery-heading">{m.gallery_heading()}</h2>
    </header>
  </div>

  <div class="gallery-strip" role="list" aria-label={m.gallery_aria()}>
    {#each gallery as item, i}
      <figure class="gallery-item reveal" style="--delay:{i * 60}ms" role="listitem">
        <img src={item.src} alt={item.label} loading="lazy" width="800" height="600" />
        <figcaption>{item.label}</figcaption>
      </figure>
    {/each}
  </div>
</section>

<style>
  .gallery {
    background: var(--clr-surface);
  }

  .section-header {
    text-align: center;
    margin-bottom: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .gallery-strip {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-inline: clamp(1rem, 4vw, calc((100vw - var(--max-w)) / 2 + 2.5rem));
    padding-bottom: 0.75rem;
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

  .gallery-item {
    flex: 0 0 clamp(260px, 35vw, 480px);
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-lg);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    margin: 0;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.07);
  }

  .gallery-item figcaption {
    position: absolute;
    bottom: 0;
    inset-inline: 0;
    background: linear-gradient(transparent, rgba(14, 15, 12, 0.85));
    color: var(--clr-text);
    padding: 1.5rem 1rem 0.75rem;
    font-family: var(--font-display);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity var(--transition);
  }

  .gallery-item:hover figcaption {
    opacity: 1;
  }
</style>
