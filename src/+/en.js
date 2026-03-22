/** @type {import('./index').Translations} */
export const en = {
  meta: {
    title: 'NorthWood — Timber Harvesting Company',
    description:
      'NorthWood — professional timber harvesting, sawmilling and lumber supply across Russia.',
  },

  nav: {
    links: ['Services', 'News', 'Gallery', 'Team', 'Contacts'],
    anchors: ['services', 'news', 'gallery', 'team', 'contacts'],
    cta: 'Get in touch',
    logoAriaLabel: 'NorthWood — back to home',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navAriaLabel: 'Main navigation',
  },

  hero: {
    since: 'Since 1998',
    headingLine1: 'The power',
    headingLine2: 'of nature —',
    headingAccent: 'in reliable hands',
    sub: 'Professional timber harvesting, processing and lumber supply across Russia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ctaPrimary: 'Our services',
    ctaSecondary: 'Request a quote',
    statsAriaLabel: 'Key figures',
    stats: [
      { value: '25+', label: 'years of expertise' },
      { value: '120k', label: 'm³ per year' },
      { value: '300+', label: 'clients' },
    ],
  },

  services: {
    eyebrow: 'What we do',
    heading: 'Our Services',
    lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    items: [
      {
        icon: '🌲',
        title: 'Timber Harvesting',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
      },
      {
        icon: '🪚',
        title: 'Sawmilling',
        desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.',
      },
      {
        icon: '🚛',
        title: 'Transportation',
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
      },
      {
        icon: '📋',
        title: 'Project Design',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.',
      },
      {
        icon: '🌿',
        title: 'Reforestation',
        desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
      },
      {
        icon: '🔩',
        title: 'Wood Processing',
        desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
      },
    ],
  },

  news: {
    eyebrow: 'Latest updates',
    heading: 'News & Blog',
    allPosts: 'All posts',
    readMore: 'Read more →',
    items: [
      {
        date: 'March 15, 2026',
        category: 'Production',
        title: 'New sawmill workshop launched',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?w=600&q=80',
      },
      {
        date: 'February 28, 2026',
        category: 'Ecology',
        title: 'Forest restoration programme 2026',
        excerpt:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.',
        img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
      },
      {
        date: 'February 10, 2026',
        category: 'Company',
        title: 'Expanding our delivery geography',
        excerpt:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat.',
        img: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=600&q=80',
      },
    ],
  },

  gallery: {
    eyebrow: 'Our sites',
    heading: 'Gallery',
    ariaLabel: 'Photo gallery',
    items: [
      { src: 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=800&q=80', label: 'Timber harvesting' },
      { src: 'https://images.unsplash.com/photo-1542601098-3adb3baeb1ec?w=800&q=80', label: 'Sawmill workshop' },
      { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', label: 'Forest areas' },
      { src: 'https://images.unsplash.com/photo-1530533718754-001d2668365a?w=800&q=80', label: 'Transportation' },
      { src: 'https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&q=80', label: 'Nature' },
      { src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80', label: 'Forest roads' },
    ],
  },

  team: {
    eyebrow: 'The professionals',
    heading: 'Our Team',
    lead: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    members: [
      { name: 'Alexey Borisov', role: 'Chief Executive Officer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { name: 'Marina Sokolova', role: 'Head of Technology', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { name: 'Dmitry Lesnikov', role: 'Production Manager', img: 'https://randomuser.me/api/portraits/men/67.jpg' },
      { name: 'Olga Ryabova', role: 'Logistics Director', img: 'https://randomuser.me/api/portraits/women/25.jpg' },
    ],
  },

  contacts: {
    eyebrow: 'Get in touch',
    heading: 'Contacts',
    address: { label: 'Address', value: 'Arkhangelsk, Lesnaya St. 45, office 12' },
    phone: { label: 'Phone', value: '+7 (8182) 00-00-00', href: 'tel:+78182000000' },
    email: { label: 'Email', value: 'info@northwood.ru', href: 'mailto:info@northwood.ru' },
    hours: { label: 'Working hours', value: 'Mon–Fri: 9:00 AM — 6:00 PM' },
    form: {
      heading: 'Send a request',
      name: { label: 'Your name', placeholder: 'John Smith' },
      phone: { label: 'Phone', placeholder: '+7 (___) ___-__-__' },
      message: { label: 'Message', placeholder: 'Tell us about your request...' },
      submit: 'Send request',
      privacyNote: 'By clicking the button, you agree to our',
      privacyLink: 'privacy policy',
      ariaLabel: 'Contact form',
    },
  },

  footer: {
    tagline: 'Professional timber harvesting since 1998. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
    navHeading: 'Navigation',
    contactsHeading: 'Contacts',
    address: 'Arkhangelsk, Lesnaya St. 45',
    copyright: '© 2026 NorthWood. All rights reserved.',
    privacy: 'Privacy Policy',
    logoAriaLabel: 'NorthWood — back to home',
  },

  controls: {
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeAriaLabel: 'Switch theme',
    langAriaLabel: 'Switch language',
  },
};
