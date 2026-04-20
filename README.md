# slides-slidev

A slide list app built with React + Vite, managing Slidev presentations in one repository.

🌐 **[https://www.kkoisland.com/slides-slidev/](https://www.kkoisland.com/slides-slidev/)**

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Biome (formatter & linter)
- Slidev (slide authoring)
- GitHub Pages (deployment)

## Local Development

```bash
pnpm i
pnpm generate  # generate slides.json and scripts
pnpm dev       # start React app + all Slidev presentations
pnpm dev:app   # start React app only
```

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

## Thumbnail

Place a file named `thumbnail.*` (any extension: png, jpg, svg, etc.) in `slides/<slide-name>/public/`.
`pnpm generate` will automatically copy it to `public/thumbnails/` and update `slides.json`.

## Archiving Old Slides

Move the slide directory outside of `slides/` (e.g., to `archive/`).
`pnpm generate` will no longer include it in the list.

## Notes

- `slides.json` is auto-generated but should be committed so `pnpm dev` works without running generate first
- `slides/_template/` is excluded from the slide list automatically
- `avatar.png` is synced to all slide `public/` directories on every `pnpm generate`
- Slide list is sorted by date (newest first), which determines dev server port assignment (3030, 3031, ...)

## Using This as Your Own Slide List

Want to manage your own Slidev presentations the same way?

1. Fork this repository
2. Remove slides under `slides/` (keep `slides/_template/`)
3. Replace or delete `slides/_template/public/avatar.png`
4. Update `vite.config.ts` — change `base` to match your GitHub Pages URL
5. Update `.github/workflows/deploy.yml` if needed
6. Run `pnpm new-slide <your-slide>` to create your first slide

## Build

```bash
pnpm build   # generates slides.json, builds React app and all Slidev presentations
```
