---
theme: default
title: image-notes
author: Keiko Higuchi
date: "2026-05-05"
description: "A web app to browse images in a Masonry grid and manage notes — built as a reusable template"
routerMode: hash
---

<div class="flex items-center gap-8 h-full">
  <div class="flex-1">
    <h1 class="text-6xl font-bold">image-notes</h1>
    <p class="text-2xl mt-4">Browse images. Add notes. Stay organized.</p>
    <div class="mt-8 text-lg">
      <p>GitHub: https://github.com/kkoisland/image-notes</p>
    </div>
  </div>
  <img :src="$base + 'screenshot-grid.png'" style="height: 320px; border-radius: 8px" />
</div>

<div class="absolute bottom-4 right-6 flex items-center gap-2">
  <span class="text-gray-400">kkoisland (Keiko)</span>
  <img :src="$base + 'avatar.png'" style="height: 36px" />
</div>

---

# About Me

<div class="flex items-center gap-12 mt-8">
  <div>
    <p class="text-xl font-bold">kkoisland (Keiko)</p>
    <p class="text-xl font-bold mt-2">Frontend Engineer</p>
    <ul class="mt-4 text-lg space-y-2 list-disc list-inside">
      <li>React / TypeScript</li>
      <li>Interactive UI</li>
      <li>Developer experience</li>
    </ul>
    <div class="mt-8 text-lg">
      <p><strong>Portfolio:</strong> www.kkoisland.com</p>
      <p><strong>GitHub:</strong> github.com/kkoisland</p>
    </div>
  </div>
  <img :src="$base + 'avatar.png'" style="height: 220px" />
</div>

---

# What is image-notes?

<div class="flex gap-8 mt-4">
  <div class="flex-1">
    <p class="text-lg">A web app to browse images in a Masonry grid, view them full-size, and manage notes</p>
    <ul class="mt-6 space-y-3 text-lg">
      <li>🖼️ Supports .svg, .png, .jpg, .gif, .webp</li>
      <li>📝 Add memo and done flag per image</li>
      <li>🌙 Dark mode with system preference detection</li>
    </ul>
    <p class="mt-8 text-xl font-bold">Built for personal use — open as a reusable template</p>
  </div>
  <img :src="$base + 'screenshot-grid.png'" style="height: 300px; border-radius: 8px" />
</div>

---

# Why I Built This

**Problems I had managing images:**

<div class="mt-6 space-y-4 text-lg">
  <p>❌ No simple way to browse local images with notes in one place</p>
  <p>❌ Existing tools were too heavy or required accounts / cloud storage</p>
  <p>❌ Wanted to add memos and a done flag without leaving the browser</p>
</div>

<p class="mt-8">→ So I built my own solution</p>

<p class="mt-8 font-bold">Built for my own workflow — and open to fork!</p>

---

# Key Features

**What You Can Do**

<div class="mt-4 grid grid-cols-2 gap-2 text-base">
  <p>✅ Masonry grid with 1–5 column layout toggle</p>
  <p>✅ Click to expand: split view (list + full-size)</p>
  <p>✅ Add memo and done flag per image</p>
  <p>✅ Export / Import notes as <code>notes.json</code></p>
  <p>✅ Search by title and filter by category</p>
  <p>✅ Sort toggle (newest / oldest)</p>
  <p>✅ Dark mode (system preference + manual toggle)</p>
</div>

---

# Showcase #1: Masonry Grid

<div class="flex gap-8 mt-4">
  <div class="flex-1 space-y-4 text-lg">
    <p>🖼️ All images displayed in a responsive Masonry grid</p>
    <p>✅ Done badge visible directly on each card</p>
    <p>🔍 Search by title — filter by category</p>
  </div>
  <img :src="$base + 'screenshot-grid.png'" style="height: 320px; border-radius: 8px" />
</div>

---

# Showcase #2: Detail View

<div class="flex gap-8 mt-4">
  <img :src="$base + 'screenshot-detail.png'" style="height: 320px; border-radius: 8px" />
  <div class="flex-1 space-y-4 text-lg">
    <p>🖱️ Click any image to open the detail view</p>
    <p>📋 Scrollable list on the left, large image on the right</p>
    <p>📝 Add memo and toggle done flag in the same view</p>
  </div>
</div>

---

# Showcase #3: Column Layout

<div class="mt-4 space-y-2 text-lg">
  <p>Toggle between 1 and 5 columns to fit your workflow</p>
</div>
<div class="flex gap-4 mt-4">
  <div class="flex flex-col items-center gap-2">
    <img :src="$base + 'screenshot-columns-few.png'" style="height: 260px; border-radius: 8px" />
    <span class="text-sm text-gray-500">2 columns</span>
  </div>
  <div class="flex flex-col items-center gap-2">
    <img :src="$base + 'screenshot-columns-many.png'" style="height: 260px; border-radius: 8px" />
    <span class="text-sm text-gray-500">5 columns</span>
  </div>
</div>

---

# Tech Stack

🛠️ **Built with**

<div class="mt-4 grid grid-cols-3 gap-6 text-base">
  <div>
    <p class="font-bold">Frontend</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>React + TypeScript</li>
      <li>Vite</li>
      <li>Tailwind CSS v4</li>
      <li>react-masonry-css</li>
    </ul>
  </div>
  <div>
    <p class="font-bold">Tooling</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>Biome (lint & format)</li>
      <li>lucide-react</li>
    </ul>
  </div>
  <div>
    <p class="font-bold">Deploy</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>GitHub Actions</li>
      <li>GitHub Pages</li>
    </ul>
  </div>
</div>

---

# Try It!

<div class="flex gap-12 mt-6">
  <div class="space-y-6 text-lg">
    <div>
      <p class="font-bold">💻 Source Code</p>
      <p class="mt-1">https://github.com/kkoisland/image-notes</p>
    </div>
    <div>
      <p class="font-bold">⭐ Want to use it?</p>
      <p class="mt-1">Fork the repo, add your images to <code>public/images/</code>, run <code>pnpm generate</code></p>
    </div>
    <div>
      <p class="font-bold">✏️ Hand-drawn diagrams</p>
      <p class="mt-1">excalidraw-animate (OSS contributor)</p>
    </div>
  </div>
</div>

<div class="absolute bottom-8 left-8">
  <p class="text-xl">Use image-notes as your own image organizer!</p>
</div>

<div class="absolute bottom-4 right-6 flex items-center gap-2">
  <span class="text-gray-400">kkoisland (Keiko)</span>
  <img :src="$base + 'avatar.png'" style="height: 36px" />
</div>
