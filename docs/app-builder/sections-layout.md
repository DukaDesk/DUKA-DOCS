---
sidebar_position: 4
---

# Sections & Layout

A page is a stack of **sections**; each section holds **components**. Sections give you spacing, background and order — components are the content. Manage sections from the canvas or the **App sections** list in the left panel.

## Add a section

- **Blank page?** The canvas shows *“This page is empty — add sections from templates or build your own.”* Add your first section to get going.
- **From a screen template**: [Screens Gallery](./screens.md) variants arrive with sections already built.
- **Empty section**: use the add-section action in the builder to append a `New Section` to the current page, then fill it via [Adding Components](./adding-components.md).
- **Layout splits**: **Elements → Structure → Layout** offers `Section`, column splits (`1/2 | 1/2`, `1/3 | 2/3`, …) and **Carousel**. These are *containers* — after placing one, click its **+** slots to drop components into each slot.

## Select, rename, reorder

- **Select** — click the section on the canvas or its row in App sections. The right panel shows its **Section Name** field and **Add Element** browser.
- **Rename** — edit Section Name, or use the row’s **⋯ menu → Rename**.
- **Reorder** — drag the row by its grip handle onto another row, or use **⋯ menu → Move up / Move down**.
- **Expand/collapse** — the chevron on each row hides its component list to keep long pages manageable.

## Duplicate, save, delete

Open the row’s **⋯ menu** (or the buttons in the right panel when the section is selected):

| Action | What it does |
|---|---|
| **Duplicate** | Copies the section with all its components, right below the original. |
| **Save to library** | Stores it as a reusable linked section. |
| **Detach from library** | Unlinks a saved section so edits only affect this page. |
| **Delete** | Removes the section (trash icon). |
| **Eye icon** | Hides/shows the section without deleting it. Hidden rows are dimmed. |

## Section background

Each section has its own background color (the tinted square next to its name). It defaults to the page background — change it to band content visually (e.g. white cards on a light-grey page).

## Containers: rows, nested sections, carousel

- **Row / Columns** — pick a split template, then fill each column via its **+** slot. New rows of slots appear as you add more children than columns.
- **Nested section** — a box-inside-a-box for grouping (e.g. an offer card with image + text + button). Select it to see its **Children (n)** list in Properties; click a child to jump to it.
- **Carousel** — swipeable slides. Toggle **auto-play**, interval, dots and arrows in its properties.

:::tip If adds go to the wrong place
Check what’s selected: amber row = section (adds append to it). If a container is selected, adds nest *inside* it. Click the section row itself to append at section level.
:::
