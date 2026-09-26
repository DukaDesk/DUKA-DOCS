// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Daily Operations',
      items: [
        'dashboard',
        'orders',
        'products-inventory',
        'customers',
        'analytics',
      ],
    },
    {
      type: 'category',
      label: 'Build Your Customer App',
      items: [
        'app-builder/overview',
        'app-builder/adding-components',
        'app-builder/screens',
        'app-builder/sections-layout',
        'app-builder/pages-tabs',
        'app-builder/editing-styling',
        'app-builder/preview',
        'app-builder/publish',
        'my-app',
      ],
    },
    {
      type: 'category',
      label: 'Grow & Manage',
      items: [
        'marketing-messages',
        'billing',
        'team-settings',
        'integrations',
        'troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
