<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  onMount((): (() => void) | void => {
    const els: NodeListOf<Element> = document.querySelectorAll('#contacts .reveal');
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

<section
  id="contacts"
  class="section contacts relative bg-[var(--clr-surface)] overflow-hidden"
  aria-labelledby="contacts-heading"
>
  <div
    class="container grid grid-cols-2 gap-[clamp(2rem,6vw,5rem)] items-start max-[900px]:grid-cols-1"
  >
    <div class="reveal">
      <p class="eyebrow">{m.contacts_eyebrow()}</p>
      <h2 class="mb-8" id="contacts-heading">{m.contacts_heading()}</h2>
      <address>
        <ul class="flex flex-col gap-5" role="list">
          <li class="flex items-start gap-4">
            <span class="text-[1.3rem] flex-shrink-0 mt-0.5" aria-hidden="true">📍</span>
            <div>
              <strong
                class="block font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[var(--clr-accent)] mb-1"
                >{m.contacts_address_label()}</strong
              >
              <span>{m.contacts_address_value()}</span>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-[1.3rem] flex-shrink-0 mt-0.5" aria-hidden="true">📞</span>
            <div>
              <strong
                class="block font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[var(--clr-accent)] mb-1"
                >{m.contacts_phone_label()}</strong
              >
              <a
                href="tel:{m.phone_number()}"
                class="text-[var(--clr-text)] transition-colors transition-base hover:text-[var(--clr-accent)]"
                >{m.phone_number()}</a
              >
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-[1.3rem] flex-shrink-0 mt-0.5" aria-hidden="true">✉️</span>
            <div>
              <strong
                class="block font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[var(--clr-accent)] mb-1"
                >{m.contacts_email_label()}</strong
              >
              <a
                href="mailto:{m.email_address()}"
                class="text-[var(--clr-text)] transition-colors transition-base hover:text-[var(--clr-accent)]"
                >{m.email_address()}</a
              >
            </div>
          </li>
          <li class="flex items-start gap-4">
            <span class="text-[1.3rem] flex-shrink-0 mt-0.5" aria-hidden="true">🕐</span>
            <div>
              <strong
                class="block font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.1em] uppercase text-[var(--clr-accent)] mb-1"
                >{m.contacts_hours_label()}</strong
              >
              <span>{m.contacts_hours_value()}</span>
            </div>
          </li>
        </ul>
      </address>
    </div>

    <div class="contacts-form bg-[var(--clr-surface2)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] p-[clamp(1.5rem,3vw,2.5rem)] reveal" style="--delay:100ms">
      <h3>{m.contacts_form_heading()}</h3>
      <form novalidate aria-label={m.contacts_form_aria()}>
        <div class="flex flex-col gap-2 mb-4">
          <label
            for="name"
            class="font-[family-name:var(--font-display)] text-[0.62rem] font-bold tracking-[0.1em] uppercase text-[var(--clr-muted)]"
            >{m.contacts_form_name_label()}</label
          >
          <input
            id="name"
            type="text"
            name="name"
            placeholder={m.contacts_form_name_placeholder()}
            autocomplete="name"
            required
            class="bg-[var(--clr-bg)] border border-[var(--clr-border)] rounded-[var(--radius)] px-4 py-3 text-[var(--clr-text)] font-[family-name:var(--font-body)] text-[0.95rem] font-light w-full resize-y placeholder:text-[var(--clr-muted)] focus:outline-none focus:border-[var(--clr-accent)]"
          />
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label
            for="phone"
            class="font-[family-name:var(--font-display)] text-[0.62rem] font-bold tracking-[0.1em] uppercase text-[var(--clr-muted)]"
            >{m.contacts_form_phone_label()}</label
          >
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder={m.contacts_form_phone_placeholder()}
            autocomplete="tel"
            required
            class="bg-[var(--clr-bg)] border border-[var(--clr-border)] rounded-[var(--radius)] px-4 py-3 text-[var(--clr-text)] font-[family-name:var(--font-body)] text-[0.95rem] font-light w-full resize-y placeholder:text-[var(--clr-muted)] focus:outline-none focus:border-[var(--clr-accent)]"
          />
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label
            for="message"
            class="font-[family-name:var(--font-display)] text-[0.62rem] font-bold tracking-[0.1em] uppercase text-[var(--clr-muted)]"
            >{m.contacts_form_message_label()}</label
          >
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder={m.contacts_form_message_placeholder()}
            class="bg-[var(--clr-bg)] border border-[var(--clr-border)] rounded-[var(--radius)] px-4 py-3 text-[var(--clr-text)] font-[family-name:var(--font-body)] text-[0.95rem] font-light w-full resize-y placeholder:text-[var(--clr-muted)] focus:outline-none focus:border-[var(--clr-accent)]"
          ></textarea>
        </div>
        <button type="submit" class="btn-primary">{m.contacts_form_submit()}</button>
        <p class="mt-3 text-xs text-[var(--clr-muted)] text-center">
          {m.contacts_form_privacy_note()}
          <a href="/privacy" class="text-[var(--clr-accent)]">{m.contacts_form_privacy_link()}</a>.
        </p>
      </form>
    </div>
  </div>
</section>

<style>
  /* Accent gradient overlay */
  .contacts::before {
    content: '';
    position: absolute;
    top: -10rem;
    right: -10rem;
    width: 35rem;
    height: 35rem;
    background: radial-gradient(circle, rgba(184, 212, 68, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Button styles */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.8em 1.8em;
    border-radius: var(--radius);
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition-duration: var(--transition-base-duration);
    transition-timing-function: var(--transition-base-timing);
    cursor: pointer;
    background: var(--clr-accent);
    color: #0e0f0c;
    border: 2px solid transparent;
  }

  .btn-primary:hover {
    background: #cfe84e;
    transform: translateY(-2px);
  }
</style>
