---
sidebar_position: 8
---

# Publish Your App

> First time? Run through [Preview & Test](./preview.md) before this page.

## Before you publish

- [ ] App name set in **Settings** (required — publish fails without it).
- [ ] At least **one screen** with a name and at least one section.
- [ ] Bottom tabs point to **existing screens** (no dangling links).
- [ ] Every screen has a **background color** (or you get a warning).
- [ ] Compliance approved if Desk Design was gated.

## How to publish

1. In the builder top bar, click **Publish**.
2. Wait for `Generating app manifest…` — the design is saved first, then compiled.
3. Success toast shows the version, e.g. `Published v1.0.3 — mobile manifest updated!`
4. If validation fails, a modal lists **errors** (must fix) and **warnings** (review recommended).

## After publish

- Check [My App](../my-app.md) to see what is live.
- Open **Release History** (clock icon) to compare versions or roll back.
- Publish again anytime — the pipeline verifies the previous release first.

## Troubleshooting

| Message | Fix |
|---|---|
| `At least one screen is required` | Add a screen from Elements → Screens |
| `Tab points to screen which does not exist` | Re-link the tab in Nav editor |
| `App name is required` | Settings → App Data → Name |
| `413 / too large` | Compress images (logos ≤ 512px, backgrounds ≤ 1280px) |
| `Sign in to a merchant before publishing` | Log in again — session expired |
