---
sidebar_position: 6
---

# Editing & Styling Components

Click any component on the canvas (or its row under App sections) and the right panel shows its editor, split into two tabs: **General** and **Styling**, plus a property **search**.

## General tab — content first

This is where the words, numbers and data live:

- **Text-like fields** — labels, headings, placeholders, hints. Click a sub-element row (e.g. a card’s *Title*, *Subtitle*, *Badge*) to focus that exact piece of text.
- **Lists** — `info_list`, `menu_grid`, order history, notifications and similar blocks let you add/remove/reorder rows (items, dishes, invoices…) inline.
- **Toggles & picks** — switches (`checked`), variant dropdowns (`filled / outline / ghost`), icon picker (**Choose icon** opens the searchable icon bank).
- **Images** — uploader for `src`/logo/cover fields (keep files under 5 MB; logos ≤ 512px, backgrounds ≤ 1280px).

Header shortcuts on every component: **Up / Down** (reorder), **Dup** (duplicate), **trash** (delete), and a **Visibility** checkbox to hide without deleting.

## Styling tab — the look

Styling is grouped so you don’t hunt through one long form:

| Group | Controls |
|---|---|
| **Typography** | Font family, size, weight, italic, line height, letter spacing, transform, alignment |
| **Colors** | Text color and friends |
| **Background** | Solid color or background image |
| **Border & Radius** | Corner radius (uniform or per-corner), borders |
| **Layout** | Width/height, padding, gap, columns, image fit |
| **Effects** | Shadow/elevation, opacity |

Use the **search** (magnifier) to jump to a property — e.g. type `radius` to find every corner control.

## Making a button do something (tap actions)

Buttons, pills and list items can navigate or trigger actions on tap:

1. Select the component → **General** → find its **Action** field.
2. Use the preset chips (e.g. **navigate / push / replace**) and pick the **target screen** from the dropdown — no JSON needed.
3. Test it in **Preview** (`Ctrl+P`): tapping the component should move to that screen. (See [Preview & Test](./preview.md).)

## Sub-elements: edit precisely

Complex blocks expose **sub-elements** (e.g. hero banner → *Badge, Heading, Tagline, Background*). Clicking one in App sections focuses just that part in Properties — styleable ones open their own text-style controls. The row shows a live mini-preview of the current value, and the × clears it back to default.

## Undo anything

- **Ctrl+Z** undo, **Ctrl+Shift+Z** / **Ctrl+Y** redo (top-bar arrows work too).
- **Ctrl+S** saves to the server (watch the save status next to the back button: *Saving…* → *Saved …*).
- `Delete` / `Backspace` removes the selected component or section when you’re not typing in a field.
