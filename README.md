# DUKA-DOCS — DukaDesk Merchant User Documentation

Docusaurus static site documenting **how merchants use the DukaDesk Merchant app**
(`DUKA-MERCHANT/dukaDesk`): daily operations, app builder + 10 publish-ready
screens, publishing, billing, team, integrations.

## Develop

```bash
cd DUKA-DOCS
npm install
npm start
```

## Build (static)

```bash
npm run build
npm run serve
```

Output goes to `build/` — deploy to Vercel, Netlify, S3+CloudFront, or GitHub Pages.

## Docs map

- `docs/intro.md` — guide home (`/`)
- `docs/getting-started.md` — signup → onboarding → KYC → first product
- `docs/dashboard.md`, `orders.md`, `products-inventory.md`, `customers.md`, `analytics.md`
- `docs/app-builder/overview.md` — builder layout, pages/nav, splash
- `docs/app-builder/adding-components.md` — select section → add button → arrange
- `docs/app-builder/screens.md` — the 10 screen templates in the Screens gallery
- `docs/app-builder/sections-layout.md` — rows, columns, carousels, nesting
- `docs/app-builder/pages-tabs.md` — pages + bottom tabs CRUD
- `docs/app-builder/editing-styling.md` — General vs Styling, lists, tap actions
- `docs/app-builder/preview.md` — preview, test, top-bar tools
- `docs/app-builder/publish.md` — validation + release flow
- `docs/my-app.md`, `marketing-messages.md`, `billing.md`, `team-settings.md`, `integrations.md`, `troubleshooting.md`
