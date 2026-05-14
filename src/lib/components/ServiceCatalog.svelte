<script lang="ts">
  import * as m from '$lib/paraglide/messages';

  interface Service {
    title: string;
    image: string;
    offers: number;
    link: string;
    subcategories?: Array<{ title: string; count: number; link: string }>;
  }

  const services: Service[] = [
    {
      title: 'Сборные дома и конструкции',
      image: 'https://static.stroyportal.ru/static/sections_images/img383.png',
      offers: 1369,
      link: '/catalog/sruby',
      subcategories: [
        { title: 'Мобильные дома', count: 4, link: '/catalog/mobilnye-doma' },
        { title: 'Сборные бани', count: 1085, link: '/catalog/sbornye-bani' },
        { title: 'Срубы, сборные дома', count: 44, link: '/catalog/sruby-sbornye-doma' }
      ]
    },
    {
      title: 'Фанера',
      image: 'https://static.stroyportal.ru/static/sections_images/img178.png',
      offers: 498,
      link: '/catalog/fanera'
    },
    {
      title: 'Погонажные изделия',
      image: 'https://static.stroyportal.ru/static/sections_images/img28.png',
      offers: 218,
      link: '/catalog/pogonazh'
    },
    {
      title: 'Доска обрезная',
      image: 'https://static.stroyportal.ru/static/sections_images/img176.png',
      offers: 212,
      link: '/catalog/doska-obreznaya'
    },
    {
      title: 'ОСБ плиты',
      image: 'https://static.stroyportal.ru/static/sections_images/img412.png',
      offers: 180,
      link: '/catalog/osb-plity'
    },
    {
      title: 'ДСП',
      image: 'https://static.stroyportal.ru/static/sections_images/img30.png',
      offers: 116,
      link: '/catalog/dsp'
    },
    {
      title: 'Брус обрезной',
      image: 'https://static.stroyportal.ru/static/sections_images/img381.png',
      offers: 104,
      link: '/catalog/brus'
    },
    {
      title: 'МДФ',
      image: 'https://static.stroyportal.ru/static/sections_images/img411.png',
      offers: 102,
      link: '/catalog/mdf'
    },
    {
      title: 'Мебельные щиты',
      image: 'https://static.stroyportal.ru/static/sections_images/img414.png',
      offers: 80,
      link: '/catalog/mebelnye-shchity'
    },
    {
      title: 'ДВП',
      image: 'https://static.stroyportal.ru/static/sections_images/img410.png',
      offers: 70,
      link: '/catalog/dvp'
    },
    {
      title: 'Вагонка',
      image: 'https://static.stroyportal.ru/static/sections_images/img23.png',
      offers: 39,
      link: '/catalog/vagonka'
    },
    {
      title: 'Брусок',
      image: 'https://static.stroyportal.ru/static/sections_images/img382.png',
      offers: 35,
      link: '/catalog/brusok'
    },
    {
      title: 'ЦСП',
      image: 'https://static.stroyportal.ru/static/sections_images/img413.png',
      offers: 30,
      link: '/catalog/csp'
    },
    {
      title: 'Бревна',
      image: 'https://static.stroyportal.ru/static/sections_images/img380.png',
      offers: 26,
      link: '/catalog/brevna'
    },
    {
      title: 'Евровагонка',
      image: 'https://static.stroyportal.ru/static/sections_images/img6904.jpg',
      offers: 23,
      link: '/catalog/evrovagonka'
    },
    {
      title: 'Фибролитовые плиты',
      image: 'https://static.stroyportal.ru/static/sections_images/img6897.jpg',
      offers: 21,
      link: '/catalog/fibrolitovye-plity'
    },
    {
      title: 'Блок хаус',
      image: 'https://static.stroyportal.ru/static/sections_images/img177.png',
      offers: 17,
      link: '/catalog/blok-haus'
    },
    {
      title: 'ДПК',
      image: 'https://static.stroyportal.ru/static/sections_images/img7618.jpg',
      offers: 17,
      link: '/catalog/dpk'
    },
    {
      title: 'Шпон',
      image: 'https://static.stroyportal.ru/static/sections_images/img415.png',
      offers: 15,
      link: '/catalog/shpon'
    },
    {
      title: 'Брус сухой',
      image: 'https://static.stroyportal.ru/static/sections_images/img5458.jpg',
      offers: 14,
      link: '/catalog/brus-suhoy'
    }
  ];

  function formatOffers(count: number): string {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return `${count} предложений`;
    }

    if (lastDigit === 1) {
      return `${count} предложение`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${count} предложения`;
    }

    return `${count} предложений`;
  }
</script>

<section class="relative py-[var(--section-py)] bg-[var(--clr-bg)]" id="catalog">
  <div class="container">
    <div class="mb-12 text-center reveal">
      <p class="eyebrow mb-3 flex items-center justify-center gap-3 font-[family-name:var(--font-display)] text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[var(--clr-accent)]">
        <span class="inline-block w-8 h-0.5 bg-[var(--clr-accent)]"></span>
        Каталог продукции
      </p>
      <h2 class="font-[family-name:var(--font-display)] text-[clamp(1.8rem,4vw,3rem)] font-black leading-none tracking-[-0.02em] text-[var(--clr-text)]">
        Пиломатериалы
      </h2>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-[var(--gap)] reveal">
      {#each services as service}
        <a 
          href={service.link}
          class="service-card group relative flex flex-col bg-[var(--clr-surface)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] p-6 no-underline"
        >
          <div class="flex flex-col items-center text-center mb-4">
            <div class="service-image w-24 h-24 mb-4 flex items-center justify-center rounded-lg bg-[var(--clr-surface2)] overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                class="w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>
            <h3 class="service-title font-[family-name:var(--font-display)] text-base font-bold text-[var(--clr-text)] mb-2">
              {service.title}
            </h3>
            <span class="text-xs text-[var(--clr-muted)]">
              {formatOffers(service.offers)}
            </span>
          </div>

          {#if service.subcategories}
            <ul class="mt-auto pt-4 border-t border-[var(--clr-border)] space-y-2">
              {#each service.subcategories as sub}
                <li class="flex justify-between items-center text-xs">
                  <span class="subcat-title text-[var(--clr-muted)]">
                    {sub.title}
                  </span>
                  <span class="text-[var(--clr-accent)] font-medium ml-2">
                    {sub.count}
                  </span>
                </li>
              {/each}
            </ul>
          {/if}
        </a>
      {/each}
    </div>

    <div class="mt-12 text-center reveal">
      <p class="text-sm text-[var(--clr-muted)] max-w-[65ch] mx-auto leading-relaxed">
        В каталоге представлен широкий ассортимент пиломатериалов. Для приобретения товара свяжитесь с нами через форму обратной связи или по указанным контактам.
      </p>
    </div>
  </div>
</section>

<style>
  /* Reveal animation */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    animation: revealIn 0.8s ease forwards;
  }

  @keyframes revealIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Service card hover effects */
  .service-card {
    transition-property: border-color, transform, box-shadow;
    transition-duration: var(--transition-base);
  }

  .service-card:hover {
    border-color: var(--clr-accent);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(184, 212, 68, 0.15);
  }

  .service-image {
    transition-property: transform;
    transition-duration: var(--transition-base);
  }

  .service-card:hover .service-image {
    transform: scale(1.1);
  }

  .service-title {
    transition-property: color;
    transition-duration: var(--transition-base);
  }

  .service-card:hover .service-title {
    color: var(--clr-accent);
  }

  .subcat-title {
    transition-property: color;
    transition-duration: var(--transition-base);
  }

  .service-card:hover .subcat-title {
    color: var(--clr-text);
  }

  /* Stagger animation for grid items */
  .grid .group {
    animation: fadeInUp 0.6s ease backwards;
  }

  .grid .group:nth-child(1) { animation-delay: 0.05s; }
  .grid .group:nth-child(2) { animation-delay: 0.1s; }
  .grid .group:nth-child(3) { animation-delay: 0.15s; }
  .grid .group:nth-child(4) { animation-delay: 0.2s; }
  .grid .group:nth-child(5) { animation-delay: 0.25s; }
  .grid .group:nth-child(6) { animation-delay: 0.3s; }
  .grid .group:nth-child(7) { animation-delay: 0.35s; }
  .grid .group:nth-child(8) { animation-delay: 0.4s; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
