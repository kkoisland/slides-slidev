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
pnpm generate  # generate slides.json and scripts/dev.sh
pnpm dev       # start React app + all Slidev presentations
pnpm dev:app   # start React app only
```

## Adding a New Slide

1. Create `slides/<your-slide-name>/` directory
2. Add `slides.md` with frontmatter:

```yaml
---
title: Your Slide Title
author: Keiko Higuchi
date: YYYY-MM-DD
description: ""
---
```

3. Add `public/og-image.png` as thumbnail (optional)
4. Run `pnpm generate` to update `slides.json` and `scripts/dev.sh`

## Build

```bash
pnpm build   # generates slides.json, builds Slidev presentations and React app
```
