<script lang="ts">
  import { onMount } from 'svelte';
  import * as m from '$lib/paraglide/messages';

  onMount(() => {
    const els = document.querySelectorAll('#contacts .reveal');
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

<section id="contacts" class="section contacts" aria-labelledby="contacts-heading">
  <div class="container contacts-inner">
    <div class="contacts-info reveal">
      <p class="eyebrow">{m.contacts_eyebrow()}</p>
      <h2 id="contacts-heading">{m.contacts_heading()}</h2>
      <address>
        <ul class="contacts-list" role="list">
          <li>
            <span class="c-icon" aria-hidden="true">📍</span>
            <div>
              <strong>{m.contacts_address_label()}</strong>
              <span>{m.contacts_address_value()}</span>
            </div>
          </li>
          <li>
            <span class="c-icon" aria-hidden="true">📞</span>
            <div>
              <strong>{m.contacts_phone_label()}</strong>
              <a href="tel:+78182000000">{m.contacts_phone_value()}</a>
            </div>
          </li>
          <li>
            <span class="c-icon" aria-hidden="true">✉️</span>
            <div>
              <strong>{m.contacts_email_label()}</strong>
              <a href="mailto:info@northwood.ru">{m.contacts_email_value()}</a>
            </div>
          </li>
          <li>
            <span class="c-icon" aria-hidden="true">🕐</span>
            <div>
              <strong>{m.contacts_hours_label()}</strong>
              <span>{m.contacts_hours_value()}</span>
            </div>
          </li>
        </ul>
      </address>
    </div>

    <div class="contacts-form reveal" style="--delay:100ms">
      <h3>{m.contacts_form_heading()}</h3>
      <form novalidate aria-label={m.contacts_form_aria()}>
        <div class="field">
          <label for="name">{m.contacts_form_name_label()}</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={m.contacts_form_name_placeholder()}
            autocomplete="name"
            required
          />
        </div>
        <div class="field">
          <label for="phone">{m.contacts_form_phone_label()}</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder={m.contacts_form_phone_placeholder()}
            autocomplete="tel"
            required
          />
        </div>
        <div class="field">
          <label for="message">{m.contacts_form_message_label()}</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder={m.contacts_form_message_placeholder()}
          ></textarea>
        </div>
        <button type="submit" class="btn-primary full">{m.contacts_form_submit()}</button>
        <p class="form-note">
          {m.contacts_form_privacy_note()}
          <a href="/privacy">{m.contacts_form_privacy_link()}</a>.
        </p>
      </form>
    </div>
  </div>
</section>

<style>
  .contacts {
    background: var(--clr-surface);
    position: relative;
    overflow: hidden;
  }

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

  .contacts-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 6vw, 5rem);
    align-items: start;
  }

  h2 {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .contacts-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .contacts-list li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .c-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .contacts-list strong {
    display: block;
    font-family: var(--font-display);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--clr-accent);
    margin-bottom: 0.2rem;
  }

  .contacts-list a {
    color: var(--clr-text);
    transition: color var(--transition);
  }

  .contacts-list a:hover {
    color: var(--clr-accent);
  }

  .contacts-form {
    background: var(--clr-surface2);
    border: 1px solid var(--clr-border);
    border-radius: var(--radius-lg);
    padding: clamp(1.5rem, 3vw, 2.5rem);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .field label {
    font-family: var(--font-display);
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--clr-muted);
  }

  .field input,
  .field textarea {
    background: var(--clr-bg);
    border: 1px solid var(--clr-border);
    border-radius: var(--radius);
    padding: 0.75rem 1rem;
    color: var(--clr-text);
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 300;
    transition: border-color var(--transition);
    width: 100%;
    resize: vertical;
  }

  .field input::placeholder,
  .field textarea::placeholder {
    color: var(--clr-muted);
  }

  .field input:focus,
  .field textarea:focus {
    outline: none;
    border-color: var(--clr-accent);
  }

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
    transition: var(--transition);
    cursor: pointer;
    background: var(--clr-accent);
    color: #0e0f0c;
    border: 2px solid transparent;
  }

  .btn-primary:hover {
    background: #cfe84e;
    transform: translateY(-2px);
  }

  .form-note {
    margin-top: 0.75rem;
    font-size: 0.75rem;
    color: var(--clr-muted);
    text-align: center;
  }

  .form-note a {
    color: var(--clr-accent);
  }

  @media (max-width: 900px) {
    .contacts-inner {
      grid-template-columns: 1fr;
    }
  }
</style>
