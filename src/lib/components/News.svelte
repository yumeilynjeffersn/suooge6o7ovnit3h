<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  interface NewsArticle {
    date: string;
    category: string;
    title: string;
    excerpt: string;
    img: string;
  }

  const news = $derived<NewsArticle[]>([
    {
      date: m.news1_date(),
      category: m.news1_category(),
      title: m.news1_title(),
      excerpt: m.news1_excerpt(),
      img: 'https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?w=600&q=80',
    },
    {
      date: m.news2_date(),
      category: m.news2_category(),
      title: m.news2_title(),
      excerpt: m.news2_excerpt(),
      img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
    },
    {
      date: m.news3_date(),
      category: m.news3_category(),
      title: m.news3_title(),
      excerpt: m.news3_excerpt(),
      img: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=600&q=80',
    }
  ]);

  onMount((): (() => void) | void => {
    const els: NodeListOf<Element> = document.querySelectorAll('#news .reveal');
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

<section id="news" class="section bg-[var(--clr-bg)]" aria-labelledby="news-heading">
  <div class="container">
    <header class="text-center mb-[clamp(2.5rem,5vw,4rem)] reveal">
      <p class="eyebrow">{m.news_eyebrow()}</p>
      <h2 id="news-heading">{m.news_heading()}</h2>
    </header>

    <ul class="grid grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-[var(--gap)]" role="list">
      {#each news as article, i}
        <li class="reveal" style="--delay:{i * 100}ms">
          <a href="/blog/post-{i + 1}" class="news-card-inner flex flex-col h-full bg-[var(--clr-surface)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] overflow-hidden">
            <figure class="news-img-wrap relative aspect-[3/2] overflow-hidden m-0">
              <img
                src={article.img}
                alt={article.title}
                loading="lazy"
                width="600"
                height="400"
              />
              <figcaption class="absolute top-4 left-4 bg-[var(--clr-accent)] text-[#0e0f0c] font-[family-name:var(--font-display)] text-[0.6rem] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm">{article.category}</figcaption>
            </figure>
            <div class="p-6 flex flex-col gap-2 flex-1">
              <time class="text-xs text-[var(--clr-muted)] tracking-[0.05em]" datetime="2026">{article.date}</time>
              <h3>{article.title}</h3>
              <p class="text-[var(--clr-muted)] text-[0.88rem] flex-1">{article.excerpt}</p>
              <span class="font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.08em] uppercase text-[var(--clr-accent)] mt-2">{m.news_read_more()}</span>
            </div>
          </a>
        </li>
      {/each}
    </ul>

    <div class="text-center mt-12 reveal">
      <a href="/blog" class="btn-outline">{m.news_all_posts()}</a>
    </div>
  </div>
</section>

<style>
  /* Card hover effects */
  .news-card-inner {
    transition-property: border-color, transform;
    transition-duration: var(--transition-base);
  }

  .news-card-inner:hover {
    border-color: rgba(184, 212, 68, 0.35);
    transform: translateY(-4px);
  }

  /* Image zoom on hover */
  .news-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition-property: transform;
    transition-duration: 500ms;
    transition-timing-function: ease;
  }

  .news-card-inner:hover .news-img-wrap img {
    transform: scale(1.06);
  }

  /* Remove all moved to Tailwind */

  .btn-outline {
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.8em;
    border-radius: var(--radius);
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition-property: all;
    transition-duration: var(--transition-base);
    background: transparent;
    color: var(--clr-text);
    border: 2px solid rgba(255, 255, 255, 0.25);
  }

  .btn-outline:hover {
    border-color: var(--clr-accent);
    color: var(--clr-accent);
    transform: translateY(-2px);
  }

  /* Removed - moved to Tailwind */
</style>
