// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DukaDesk Merchant Docs',
  tagline: 'How to run your business with the DukaDesk Merchant app',
  favicon: 'img/logo.svg',

  url: 'https://docs.dukadesk.com',
  baseUrl: '/',
  organizationName: 'dukadesk',
  projectName: 'duka-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DukaDesk Merchant Docs',
        logo: {
          alt: 'DukaDesk logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guide',
            position: 'left',
            label: 'User Guide',
          },
          {
            href: 'https://github.com',
            label: 'Merchant App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guide',
            items: [
              { label: 'Getting Started', to: '/getting-started' },
              { label: 'Dashboard', to: '/dashboard' },
              { label: 'App Builder & Screens', to: '/app-builder/screens' },
            ],
          },
          {
            title: 'Manage',
            items: [
              { label: 'Products & Inventory', to: '/products-inventory' },
              { label: 'Orders', to: '/orders' },
              { label: 'Billing', to: '/billing' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DukaDesk. Merchant user documentation.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
