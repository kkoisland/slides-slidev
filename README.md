# slides-slidev

A slide list app built with React + Vite, managing Slidev presentations in one repository.

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Biome (formatter & linter)
- Slidev (slide authoring)
- GitHub Pages (deployment)

## Local Development

```bash
pnpm i
pnpm dev       # start React app at http://localhost:5173
```

## Slides

```bash
pnpm slidev:test      # slides/slides-test/slides.md
pnpm slidev:starter   # slides/slidev-starter-1/slides.md
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
4. Run `pnpm generate` to update `slides.json`

## Build

```bash
pnpm build   # generates slides.json then builds React app
```
