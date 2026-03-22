<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  const news = $derived([
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

  onMount(() => {
    const els = document.querySelectorAll('#news .reveal');
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

<section id="news" class="section news" aria-labelledby="news-heading">
  <div class="container">
    <header class="section-header reveal">
      <p class="eyebrow">{m.news_eyebrow()}</p>
      <h2 id="news-heading">{m.news_heading()}</h2>
    </header>

    <ul class="news-grid" role="list">
      {#each news as article, i}
        <li class="news-card reveal" style="--delay:{i * 100}ms">
          <a href="/blog/post-{i + 1}" class="news-card-inner">
            <figure class="news-img-wrap">
              <img
                src={article.img}
                alt={article.title}
                loading="lazy"
                width="600"
                height="400"
              />
              <figcaption class="news-category">{article.category}</figcaption>
            </figure>
            <div class="news-body">
              <time datetime="2026">{article.date}</time>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span class="read-more">{m.news_read_more()}</span>
            </div>
          </a>
        </li>
      {/each}
    </ul>

    <div class="section-cta reveal">
      <a href="/blog" class="btn-outline">{m.news_all_posts()}</a>
    </div>
  </div>
</section>

<style>
  .news {
    background: var(--clr-bg);
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

  h3 {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
    gap: var(--gap);
  }

  .news-card-inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--clr-surface);
    border: 1px solid var(--clr-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition:
      border-color var(--transition),
      transform var(--transition);
  }

  .news-card-inner:hover {
    border-color: rgba(184, 212, 68, 0.35);
    transform: translateY(-4px);
  }

  .news-img-wrap {
    position: relative;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    margin: 0;
  }

  .news-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .news-card-inner:hover .news-img-wrap img {
    transform: scale(1.06);
  }

  .news-category {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--clr-accent);
    color: #0e0f0c;
    font-family: var(--font-display);
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3em 0.75em;
    border-radius: 2px;
  }

  .news-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  .news-body time {
    font-size: 0.75rem;
    color: var(--clr-muted);
    letter-spacing: 0.05em;
  }

  .news-body p {
    color: var(--clr-muted);
    font-size: 0.88rem;
    flex: 1;
  }

  .read-more {
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--clr-accent);
    margin-top: 0.5rem;
  }

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
    transition: var(--transition);
    background: transparent;
    color: var(--clr-text);
    border: 2px solid rgba(255, 255, 255, 0.25);
  }

  .btn-outline:hover {
    border-color: var(--clr-accent);
    color: var(--clr-accent);
    transform: translateY(-2px);
  }

  .section-cta {
    text-align: center;
    margin-top: 3rem;
  }
</style>
