/** @type {import('./index').Translations} */
export const ru = {
  meta: {
    title: 'СевЛес — Лесозаготовительная компания',
    description:
      'СевЛес — профессиональная лесозаготовка, лесопиление и поставки древесины по всей России.',
  },

  nav: {
    links: ['Услуги', 'Новости', 'Галерея', 'Команда', 'Контакты'],
    anchors: ['услуги', 'новости', 'галерея', 'команда', 'контакты'],
    cta: 'Связаться',
    logoAriaLabel: 'СевЛес — на главную',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    navAriaLabel: 'Основная навигация',
  },

  hero: {
    since: 'С 1998 года',
    headingLine1: 'Сила',
    headingLine2: 'природы —',
    headingAccent: 'в надёжных руках',
    sub: 'Профессиональная лесозаготовка, переработка и поставки древесины по всей России. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ctaPrimary: 'Наши услуги',
    ctaSecondary: 'Получить расчёт',
    statsAriaLabel: 'Ключевые показатели',
    stats: [
      { value: '25+', label: 'лет опыта' },
      { value: '120k', label: 'м³ в год' },
      { value: '300+', label: 'клиентов' },
    ],
  },

  services: {
    eyebrow: 'Что мы делаем',
    heading: 'Наши услуги',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    items: [
      {
        icon: '🌲',
        title: 'Лесозаготовка',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
      },
      {
        icon: '🪚',
        title: 'Лесопиление',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.',
      },
      {
        icon: '🚛',
        title: 'Транспортировка',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
      },
      {
        icon: '📋',
        title: 'Проектирование',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.',
      },
      {
        icon: '🌿',
        title: 'Озеленение',
        desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
      },
      {
        icon: '🔩',
        title: 'Переработка',
        desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
      },
    ],
  },

  news: {
    eyebrow: 'Актуальное',
    heading: 'Новости и блог',
    allPosts: 'Все публикации',
    readMore: 'Читать далее →',
    items: [
      {
        date: '15 марта 2026',
        category: 'Производство',
        title: 'Запуск нового цеха лесопиления',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?w=600&q=80',
      },
      {
        date: '28 февраля 2026',
        category: 'Экология',
        title: 'Программа восстановления лесов 2026',
        excerpt:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.',
        img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
      },
      {
        date: '10 февраля 2026',
        category: 'Компания',
        title: 'Расширение географии поставок',
        excerpt:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat.',
        img: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=600&q=80',
      },
    ],
  },

  gallery: {
    eyebrow: 'Наши объекты',
    heading: 'Галерея',
    ariaLabel: 'Фотогалерея',
    items: [
      { src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80', label: 'Заготовка леса' },
      { src: 'https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?w=800&q=80', label: 'Лесопильный цех' },
      { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', label: 'Лесные массивы' },
      { src: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?w=800&q=80', label: 'Транспортировка' },
      { src: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&q=80', label: 'Природа' },
      { src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80', label: 'Лесные дороги' },
    ],
  },

  team: {
    eyebrow: 'Профессионалы',
    heading: 'Наши сотрудники',
    lead: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    members: [
      { name: 'Алексей Борисов', role: 'Генеральный директор', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { name: 'Марина Соколова', role: 'Главный технолог', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { name: 'Дмитрий Лесников', role: 'Начальник производства', img: 'https://randomuser.me/api/portraits/men/67.jpg' },
      { name: 'Ольга Рябова', role: 'Руководитель логистики', img: 'https://randomuser.me/api/portraits/women/25.jpg' },
    ],
  },

  contacts: {
    eyebrow: 'Свяжитесь с нами',
    heading: 'Контакты',
    address: { label: 'Адрес', value: 'г. Архангельск, ул. Лесная, 45, офис 12' },
    phone: { label: 'Телефон', value: '+7 (8182) 00-00-00', href: 'tel:+78182000000' },
    email: { label: 'E-mail', value: 'info@sevles.ru', href: 'mailto:info@sevles.ru' },
    hours: { label: 'Режим работы', value: 'Пн–Пт: 9:00 — 18:00' },
    form: {
      heading: 'Оставить заявку',
      name: { label: 'Ваше имя', placeholder: 'Иван Иванов' },
      phone: { label: 'Телефон', placeholder: '+7 (___) ___-__-__' },
      message: { label: 'Сообщение', placeholder: 'Расскажите о вашем запросе...' },
      submit: 'Отправить заявку',
      privacyNote: 'Нажимая кнопку, вы соглашаетесь с',
      privacyLink: 'политикой конфиденциальности',
      ariaLabel: 'Форма обратной связи',
    },
  },

  footer: {
    tagline: 'Профессиональная лесозаготовка с 1998 года. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
    navHeading: 'Навигация',
    contactsHeading: 'Контакты',
    address: 'г. Архангельск, ул. Лесная, 45',
    copyright: '© 2026 СевЛес. Все права защищены.',
    privacy: 'Политика конфиденциальности',
    logoAriaLabel: 'СевЛес — на главную',
  },

  controls: {
    themeSystem: 'Системная',
    themeLight: 'Светлая',
    themeDark: 'Тёмная',
    themeAriaLabel: 'Переключить тему',
    langAriaLabel: 'Переключить язык',
  },
};
