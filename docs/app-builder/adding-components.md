---
sidebar_position: 2
---

# Adding Components (e.g. a Button)

This is the core builder skill: **select a section → pick a component → edit it**. Everything else (screens, tabs, styling) builds on it.

## The rule to remember

Components always land **inside the selected section**. If nothing is selected, the gallery shows a warning: *“Select a section first — click a section on the canvas or in App sections.”* So step one is always: click a section.

## Example: add a button to the preview

1. Open the builder (`/desk-design` → visual builder) and switch to the page you want using the **Pages** bar at the bottom.
2. **Select a section**: click it on the phone canvas in the center, or click it under **App sections** in the left panel. It highlights amber.
3. Open the **Elements** tab in the left panel (grid icon).
4. Under **Components**, click **Buttons & Actions**. The right panel switches to the button gallery, grouped as:
   - **Rectangle** — Button, Icon Rectangle
   - **Round / FAB** — floating round button
   - **Pills** — Pill Button, Icon Pill, Pill Set, Icon Pill Set
   - **Pressables** — Text Pressable, Icon Pressable
5. Click **Button**. It is appended to the end of your selected section, becomes selected, and the right panel flips to its **Properties**.
6. In **General**, change the **Label** (e.g. `Order Now`) and **Variant** (`filled`, `outline`, `ghost`).
7. Switch to the **Styling** tab for background, text color, corner radius, size and shadow.
8. Press **Ctrl+P** (or the eye icon) to preview it on the phone, then **Publish** when happy.

## Other ways to add components

- **From the canvas**: empty container slots (row columns, carousel) show a **+** button. Clicking it opens the category chooser right there, and the component drops into that exact slot.
- **From a selected section**: with just a section selected, the right panel shows **Section Name** plus an **Add Element** browser with search (`Search components…`).
- **From a container component**: select a row/carousel/nested section and new components nest inside it.

## After adding: arrange it

With the component selected, the **General** tab gives you:

- **Up / Down** — move it within its section.
- **Dup** — duplicate it.
- **Trash icon** — delete it (or press `Delete` / `Backspace` on your keyboard when not typing).
- **Visibility checkbox** — hide it without deleting (hidden items are dimmed in App sections).

## Tips

- Use the **search box** in the gallery (`Search components…`) instead of scrolling — e.g. type `rat` for the star-rating block.
- Items marked **Soon** (e.g. Video, Accordion) are placeholders and can’t be added yet.
- Every component you add is immediately editable and publish-safe — there are no “draft” components. If it’s on the canvas, it ships on Publish.
