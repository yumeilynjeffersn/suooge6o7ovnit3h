<script lang="ts">
  import * as m from '$lib/paraglide/messages';
</script>

<section
  class="relative min-h-svh flex items-end pb-[clamp(3rem,7vw,5rem)] overflow-hidden"
  aria-labelledby="hero-heading"
>
  <div class="absolute inset-0" aria-hidden="true">
    <div class="hero-overlay absolute inset-0 z-[1]"></div>
    <img
      src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=1800&q=85"
      alt=""
      class="w-full h-full object-cover object-center"
      fetchpriority="high"
    />
  </div>

  <div class="container hero-content relative z-[2] grid gap-6 max-w-[920px]">
    <p class="hero-eyebrow mt-16 flex items-center gap-3 font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[var(--clr-accent)]">
      {m.hero_since()}
    </p>
    <h1
      id="hero-heading"
      class="font-[family-name:var(--font-display)] text-[clamp(2.8rem,5vw,6.5rem)] font-black leading-none tracking-[-0.03em] text-white max-[680px]:text-[clamp(2.2rem,11vw,3.5rem)]"
    >
      {m.hero_heading_line1()}
      <br />{m.hero_heading_line2()}
      <br /><em class="not-italic block text-[var(--clr-accent)]">{m.hero_heading_accent()}</em>
    </h1>
    <p class="max-w-[45ch] text-[1.05rem] leading-[1.65] text-[rgba(232,229,220,0.7)]">
      {m.hero_sub()}
    </p>
    <div class="flex gap-4 flex-wrap">
      <a href="#services" class="btn-primary">{m.hero_cta_primary()}</a>
      <a href="#contacts" class="btn-outline">{m.hero_cta_secondary()}</a>
    </div>
    <dl class="flex gap-10 pt-4 border-t border-[var(--clr-border)] flex-wrap" aria-label={m.hero_stats_aria()}>
      <div class="flex flex-col">
        <dt class="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[var(--clr-accent)] leading-none">
          {m.hero_stat1_value()}
        </dt>
        <dd class="text-xs text-[var(--clr-muted)] uppercase tracking-[0.08em]">
          {m.hero_stat1_label()}
        </dd>
      </div>
      <div class="flex flex-col">
        <dt class="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[var(--clr-accent)] leading-none">
          {m.hero_stat2_value()}
        </dt>
        <dd class="text-xs text-[var(--clr-muted)] uppercase tracking-[0.08em]">
          {m.hero_stat2_label()}
        </dd>
      </div>
      <div class="flex flex-col">
        <dt class="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.2rem)] font-black text-[var(--clr-accent)] leading-none">
          {m.hero_stat3_value()}
        </dt>
        <dd class="text-xs text-[var(--clr-muted)] uppercase tracking-[0.08em]">
          {m.hero_stat3_label()}
        </dd>
      </div>
    </dl>
  </div>

  <div
    class="hero-scroll absolute bottom-8 right-[clamp(1rem,4vw,2.5rem)] z-[2] text-2xl text-[var(--clr-accent)]"
    aria-hidden="true"
  >
    ↓
  </div>
</section>

<style>
  /* Gradient overlay */
  .hero-overlay {
    background: linear-gradient(
      117deg,
      rgba(14, 15, 12, 0.9) 0%,
      rgba(14, 15, 12, 0.65) 55%,
      rgba(14, 15, 12, 0.4) 50%
    );
  }

  /* Hero content animation */
  .hero-content {
    animation: heroIn 1s ease 0.2s both;
  }

  @keyframes heroIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* Eyebrow line */
  .hero-eyebrow::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 2px;
    background: var(--clr-accent);
  }

  /* Button styles (local to Hero for standalone use) */
  .btn-primary,
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
    transition-duration: var(--transition-base-duration);
    transition-timing-function: var(--transition-base-timing);
    cursor: pointer;
  }

  .btn-primary {
    background: var(--clr-accent);
    color: #0e0f0c;
    border: 2px solid transparent;
  }

  .btn-primary:hover {
    background: #cfe84e;
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: var(--clr-text);
    border: 2px solid rgba(255, 255, 255, 0.25);
  }

  .btn-outline:hover {
    border-color: var(--clr-accent);
    color: var(--clr-accent);
    transform: translateY(-2px);
  }

  /* Scroll indicator animation */
  .hero-scroll {
    animation: bounce 2s ease infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
  }
</style>
