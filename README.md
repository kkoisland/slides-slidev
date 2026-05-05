# slides-slidev

📊 For a visual overview of this project, see the [slides](https://www.kkoisland.com/slides-slidev/slides/slides-slidev/).

A slide list app built with React + Vite, managing Slidev presentations in one repository.

🌐 **[https://www.kkoisland.com/slides-slidev/](https://www.kkoisland.com/slides-slidev/)**

## Using This as Your Own Slide List

Want to manage your own Slidev presentations the same way?

1. Fork this repository
2. Remove slides under `slides/` (keep `slides/_template/`)
3. Replace `slides/_template/public/avatar.png` with your own, or delete it
4. Update personal info in `slides/_template/slides.md` (name, portfolio URL, GitHub URL)
5. Update `vite.config.ts` — change `base` to match your GitHub Pages URL
6. Update `.github/workflows/deploy.yml` if needed
7. Run `pnpm new-slide <your-slide>` to create your first slide

## Adding a New Slide

```bash
pnpm new-slide <slide-name>
pnpm generate
pnpm dev
```

1. Edit `slides/<slide-name>/slides.md` — replace all placeholders
2. Add images to `slides/<slide-name>/public/`
3. (Optional) Add a thumbnail: place `thumbnail.*` (any extension) in `slides/<slide-name>/public/`
4. Run `pnpm generate` to update `slides.json` and copy the thumbnail
5. Commit `slides.json` along with your changes

## Notes

- `slides.json` is auto-generated but should be committed so `pnpm dev` works without running generate first
- `slides/_template/` is excluded from the slide list automatically
- `avatar.png` is synced to all slide `public/` directories on every `pnpm generate`
- Slide list is sorted by date (newest first), which determines dev server port assignment (3030, 3031, ...)

## Thumbnail

Place a file named `thumbnail.*` (any extension: png, jpg, svg, etc.) in `slides/<slide-name>/public/`.
`pnpm generate` will automatically copy it to `public/thumbnails/` and update `slides.json`.

## Archiving Old Slides

Move the slide directory outside of `slides/` (e.g., to `archive/`).
`pnpm generate` will no longer include it in the list.

## Local Development

```bash
pnpm i
pnpm generate  # generate slides.json and scripts
pnpm dev       # start React app + all Slidev presentations
pnpm dev:app   # start React app only
```

## Usage

These are built-in Slidev features available during local development.

### Exporting to PDF

1. Start `pnpm dev` and open the target slide's port (e.g., `http://localhost:3030/`)
2. Click **Browser exporter** in the bottom-right menu
3. The browser print dialog opens — save as PDF

> **Note:** Slides with images that have no fixed height may appear blank in print mode.
> Fix: use `height: 320px; object-fit: cover; object-position: top` instead of `object-fit: contain` with no height.

### Presenter Mode

1. Start `pnpm dev` and open `http://localhost:3030/presenter`
2. The right panel shows the next slide preview and speaker notes (written in `<!-- -->` blocks)
3. Open presenter mode on your laptop and display the main view (`localhost:3030/`) on the projector (disable mirroring on Mac)

> **Note:** Presenter mode is not available on GitHub Pages (static hosting only).
> Editing notes in presenter mode writes directly to `slides.md` — run `git diff` after presenting to check for unintended changes.

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Biome (formatter & linter)
- Slidev (slide authoring)
- GitHub Pages (deployment)

## Build

```bash
pnpm build   # generates slides.json, builds React app and all Slidev presentations
```
