---
sidebar_position: 7
---

# Preview & Test Before Publishing

Never publish blind. The builder’s preview runs your real design as a customer would see it.

## Open preview

- Click the **eye icon** in the top bar, or press **Ctrl+P**.
- It starts on your home screen (first tab, or a page named Home/Shop/Dashboard) and plays the **splash screen** for a few seconds first.
- **Exit** with the Exit button or **Esc**.

## What to check

1. **Phone vs tablet** — toggle **Mobile / Tablet** at the top and confirm nothing overflows.
2. **Every bottom tab** — tap each one; a tab with no linked page is disabled (a sign you forgot to link it — see [Pages & Tabs](./pages-tabs.md)).
3. **Tap actions** — tap buttons, pills and list items that should navigate; use **Back** when you’ve pushed multiple screens.
4. **Splash** — logo, background and duration look right on entry.
5. **Empty states** — no *“This page is empty”* pages you didn’t intend.

## Top-bar tools around preview

| Tool | Where | What it does |
|---|---|---|
| **Save status** | Next to back button | *Saving to server…* → *Saved x ago*. **Ctrl+S** forces a save. |
| **Undo / Redo** | Top bar arrows | Step through edits (also Ctrl+Z / Ctrl+Shift+Z). |
| **Templates** (gold) | Top bar | Premium starter designs. ⚠️ Loading one **replaces your current design**. |
| **Export** | Download icon | Copy or download `design.json` for backup/sharing. |
| **Manifest `</>`** | Code icon | See the compiled publish manifest, or **Load backend** to compare with what’s live. |
| **Release History** (clock) | Top bar | Past versions with rollback. |
| **Dark toggle** | Moon/sun | Only changes the *editor* theme, not your app. |

## When preview looks right

Go to [Publish](./publish.md): hit **Publish**, wait for *Generating app manifest…*, and confirm the version toast. Then verify in [My App](../my-app.md).
