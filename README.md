# DUKA-DOCS — DukaDesk Merchant User Documentation

A [Docusaurus](https://docusaurus.io/) static site that documents **how merchants
use the DukaDesk Merchant app** (`../DUKA-MERCHANT/dukaDesk`): daily operations,
the visual app builder (including the 10 publish-ready screen templates),
publishing, billing, team management, and integrations.

- **Live reading order:** landing page → Getting Started → Daily Operations →
  Build Your Customer App → Grow & Manage.
- **Static output:** `npm run build` emits plain HTML/CSS/JS into `build/` —
  hostable anywhere (Vercel, Netlify, S3+CloudFront, GitHub Pages).
- **Repo:** https://github.com/DukaDesk/DUKA-DOCS.git (`main` branch).

---

## Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Node.js | ≥ 20.0.0 | Check with `node --version` |
| npm | ≥ 9 | Ships with Node |
| Git | any recent | For cloning / pushing |

No database, backend, or API keys are needed — this is a pure static content
site.

## Quick start

```bash
cd DUKA-DOCS
npm install
npm start
```

Open http://localhost:3000 — the site reloads automatically as you edit docs.

## Available scripts

| Command | What it does |
|---|---|
| `npm start` | Start the dev server with hot reload |
| `npm run build` | Production build into `build/` (breaks on broken links) |
| `npm run serve` | Serve the production `build/` locally to verify it |
| `npm run clear` | Clear the Docusaurus cache (use when styles/routes act stale) |
| `npm run swizzle` | Eject/override a theme component (advanced) |
| `npm run deploy` | Deploy via the configured Docusaurus strategy |

## Project structure

```
DUKA-DOCS/
├── docs/                        # ← all guide content (Markdown)
│   ├── intro.md                 # Guide home
│   ├── getting-started.md       # Signup → onboarding → KYC → first product
│   ├── dashboard.md             # Daily overview routine
│   ├── orders.md                # Order lifecycle + fulfillment
│   ├── products-inventory.md    # Catalog + stock + reorder points
│   ├── customers.md             # Customer records
│   ├── analytics.md             # Revenue metrics + weekly routine
│   ├── app-builder/             # Hands-on builder guides (in read order)
│   │   ├── overview.md          # Builder layout, hub page
│   │   ├── adding-components.md # Select section → add button → arrange
│   │   ├── screens.md           # 10 publish-ready screen templates
│   │   ├── sections-layout.md   # Rows, columns, carousels, nesting
│   │   ├── pages-tabs.md        # Pages + bottom tabs CRUD
│   │   ├── editing-styling.md   # General vs Styling, lists, tap actions
│   │   ├── preview.md           # Preview, test, top-bar tools
│   │   └── publish.md           # Validation checklist + release flow
│   ├── my-app.md                # Verifying what is live
│   ├── marketing-messages.md    # Promos, chat, notifications
│   ├── billing.md               # Plan, payment methods, invoices
│   ├── team-settings.md         # Roles, profile, app settings
│   ├── integrations.md          # Third-party connections
│   └── troubleshooting.md       # FAQ + fixes
├── src/
│   ├── pages/index.js           # Landing page (/)
│   └── css/custom.css           # Brand theme (navy + amber)
├── static/
│   ├── .nojekyll                # Lets GitHub Pages serve underscored files
│   └── img/logo.svg             # Navbar logo + favicon
├── docusaurus.config.js         # Site title, URL, navbar, footer
├── sidebars.js                  # Sidebar order (guide)
├── babel.config.js              # Required by Docusaurus
└── package.json
```

Docs are served from the site root (`routeBasePath: '/'`), so
`docs/getting-started.md` renders at `/getting-started`.

## Writing / editing docs

1. **Add a page:** create `docs/<name>.md` (or under `docs/app-builder/`)
   with front matter:
   ```md
   ---
   sidebar_position: 9
   ---

   # My New Page
   ```
2. **Register it:** add its id (path without `.md`, e.g.
   `'app-builder/my-page'`) to the right category in `sidebars.js`.
3. **Link between pages:** use relative links —
   `[Publish](./publish.md)` inside `app-builder/`,
   `[My App](../my-app.md)` to go up a level.
4. **Admonitions** (tip/warning/danger) render as callout boxes:
   ```md
   :::tip
   Text here.
   :::
   ```
5. Run `npm start` and check your page, then `npm run build` — the build
   **fails on broken links**, which is how we catch bad cross-references.

### Style guide

- Write for **shop owners and staff**, not developers: numbered steps,
  real button/field names in **bold**, routes in `code` (e.g. `/dashboard`).
- Keep pages task-focused and scannable; put reference tables where
  readers compare options (roles, error messages, styling groups).
- Verify every click-path against the actual app in
  `../DUKA-MERCHANT/dukaDesk/src` before writing it down.
- Keep the App Builder guides in this order: add components → screens →
  sections/layout → pages/tabs → editing/styling → preview → publish.

## Configuration notes

- `docusaurus.config.js` — edit `title`, `tagline`, `url`, navbar and footer
  links here. `onBrokenLinks: 'throw'` keeps links honest.
- `sidebars.js` — the `guide` sidebar defines section order; the
  `Build Your Customer App` category must stay in the read order listed
  above (overview → … → publish).
- `src/css/custom.css` — brand tokens: navy `#1A1A2E` primary (amber
  `#F4A026` in dark mode).

## Deployment

Any static host works since the output is plain files in `build/`:

```bash
npm run build
npm run serve   # sanity-check locally first
```

| Host | How |
|---|---|
| Vercel / Netlify | Point at this repo; build command `npm run build`, output dir `build` |
| GitHub Pages | `static/.nojekyll` is already included; deploy `build/` via Pages or `npm run deploy` |
| S3 + CloudFront | Upload `build/` contents to the bucket |

Set `url` in `docusaurus.config.js` to the final public domain
(currently `https://docs.dukadesk.com`).

## Git workflow

```bash
git status
git add -A
git commit -m "Describe the docs change"
git push            # main tracks origin/main
```

`node_modules/`, `build/` and `.docusaurus/` are git-ignored — never commit
them.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `npm start` port busy | `npm start -- --port 3001` |
| Stale styles/routes | `npm run clear`, restart dev server |
| Build fails on broken link | Read the `[WARNING]/[ERROR]` line — fix the path or target slug |
| Duplicate route `/` warning | Only one of `src/pages/index.js` and a `slug: /` doc may own `/` |
| Images not showing | Put them in `static/img/` and reference as `img/<file>` |

## License

Copyright © DukaDesk. Internal user documentation — all rights reserved.
