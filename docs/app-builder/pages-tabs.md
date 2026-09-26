---
sidebar_position: 5
---

# Pages & Bottom Tabs

Your app is a set of **Pages** (screens) plus an optional **bottom tab bar** that links to them. Both are managed from the **bottom bar** of the builder — and tabs can also be edited from the left panel.

## Pages bar

The bottom strip starts with the label **Pages**, followed by one pill per page. The active page is dark navy.

### Switch page

Click any page pill. The canvas, App sections list and Properties all follow it.

### Add a page

- Click **+ Add** (dashed button), or
- Add a full starter from **Elements → Structure → Screens** (see [Screens Gallery](./screens.md)) — this also creates its content, links a tab, and loads it.

### Rename a page

1. Make the page active.
2. **Double-click its name** in the pill.
3. Type and press **Enter** (or click away). **Escape** cancels.

You can also rename via the right panel: click the canvas background to select the screen, then edit **Screen Name**.

### Duplicate a page

Click the **copy icon** next to the active page. A `(copy)` is created and loaded. Useful for variations (e.g. `Menu` → `Menu (copy)` → Christmas menu).

### Delete a page

Click the **trash icon** next to the active page and confirm. Rules:

- You can’t delete the last remaining page.
- Deleting a page also removes any bottom tabs that pointed to it.

## Bottom tabs (Nav)

Tabs are the app’s bottom navigation. Open the editor with the **Nav** button (bottom-right, next to Pages). **Done** closes it.

### Add a tab

Click **Add Tab**. It appears as `New Tab` linked to your first page. Then:

1. **Rename** — click the tab’s label, type, press **Enter**.
2. **Link a page** — use the `-- screen --` dropdown to choose which page the tab opens. A tab with no page is disabled in preview (it renders but can’t be tapped).
3. **Reorder** — use the **‹ ›** arrows to move it left/right.
4. **Delete** — click the **×**.

### Change a tab’s icon

Tab icons come from the app’s icon bank:

- **From the Nav popup**: the current icon shows next to the label (it follows whatever icon is set).
- **From the left panel** (`App sections` tab, scroll to **Bottom Tabs**): click the icon square to open the icon grid, pick any icon (Home, Bell, ShoppingCart, …), and it applies instantly.

### Edit tabs from the left panel

Under **App sections**, the **Bottom Tabs** card mirrors the Nav popup and adds:

- **Link picker** — click the link icon to open the **Link to page** dialog listing every page (or **Unlink page** to detach).
- **Tab count** in the header (e.g. `3 tabs`).

Both editors stay in sync — use whichever is closer to your cursor.

## Splash screen is never a tab

The splash (logo) screen shows on app entry and is edited under **App sections → Splash Screen** (background, logo, duration, on/off). Don’t link it from tabs — the builder won’t create a tab for it.

## Publish checklist for pages + tabs

- Every tab has a **label** and points to an **existing page**.
- No page you link is **empty** (empty pages publish with a warning).
- Preview with **Ctrl+P** and tap every tab before publishing.
