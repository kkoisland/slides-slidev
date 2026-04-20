---
theme: default
title: slides-slidev
author: Keiko Higuchi
date: "2026-04-19"
description: "A slide list app built with React + Vite, managing Slidev presentations in one repository"
---

<div class="flex items-center gap-8 h-full">
  <img :src="'/avatar.png'" style="height: 220px" />
  <div>
    <h1 class="text-6xl font-bold">slides-slidev</h1>
    <p class="text-2xl mt-4">Slides with Slidev</p>
    <div class="mt-8 text-lg">
      <p>Demo: https://www.kkoisland.com/slides-slidev/</p>
      <p>GitHub: https://github.com/kkoisland/slides-slidev</p>
    </div>
  </div>
</div>

<div class="absolute bottom-8 right-8 flex items-center gap-2">
  <span class="text-gray-400">kkoisland (Keiko)</span>
  <img :src="'/avatar.png'" style="height: 36px" />
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
  <img :src="'/avatar.png'" style="height: 260px" />
</div>

---

# What is slides-slidev?

<div class="flex gap-8 mt-4">
  <div class="flex-1">
    <p class="text-lg">A React app that lists all Slidev presentations in one repository</p>
    <ul class="mt-6 space-y-3 text-lg">
      <li>📝 Reads metadata from each <code>slides.md</code> frontmatter</li>
      <li>🌙 Dark mode support</li>
      <li>🖼️ Optional thumbnail per slide</li>
    </ul>
    <p class="mt-8 text-xl font-bold">One repo. One URL. All your slides.</p>
  </div>
  <img :src="'/screenshot-list.png'" style="height: 320px" />
</div>

---

# What is Slidev?

<div class="mt-6 space-y-4 text-lg">
  <p>📝 A Markdown-based slide authoring tool for developers</p>
  <p>🧩 Vue components work directly inside slides</p>
  <p>💻 Code highlighting, animations, and diagrams built-in</p>
  <p>📤 Export to PDF, PNG, or host as a web app</p>
</div>

<p class="mt-8">→ <a href="https://sli.dev">sli.dev</a></p>

---

# Why I Built This

**Problems with managing multiple Slidev presentations:**

<div class="mt-6 space-y-4 text-lg">
  <p>❌ No built-in index page for multiple presentations</p>
  <p>❌ Scattered across separate repos — hard to find</p>
  <p>❌ No single URL to share all slides</p>
</div>

<p class="mt-8">→ So I built my own solution</p>

<p class="mt-8 font-bold">Built with ❤️ for the React community</p>

---

# Key Features

**What You Can Do**

<div class="mt-4 grid grid-cols-2 gap-2 text-base">
  <p>✅ Auto-generated slide list from frontmatter</p>
  <p>✅ Dark mode toggle</p>
  <p>✅ Thumbnail support (any image format)</p>
  <p>✅ <code>pnpm new-slide</code> — create from template</p>
  <p>✅ Parallel dev server for all slides at once</p>
  <p>✅ One-command deploy to GitHub Pages</p>
</div>

---

# Showcase #1: Slide List

<div class="mt-4 space-y-4 text-lg">
  <p>📋 All presentations listed in one place &nbsp; 🌙 Dark mode toggle</p>
  <p>🖼️ Show thumbnails for visual overview &nbsp; 📄 Hide thumbnails for a compact, scannable list</p>
</div>
<div class="flex gap-4 mt-4">
  <img :src="'/screenshot-list.png'" style="height: 240px" />
  <img :src="'/screenshot-list-no-thumbnail.png'" style="height: 240px" />
</div>

---

# Showcase #2: Adding a New Slide

<div class="flex gap-8 mt-4 items-start">
  <div class="space-y-4 text-lg">
    <p>1️⃣ <code>pnpm new-slide my-talk</code></p>
    <p>2️⃣ <code>pnpm generate</code></p>
    <p>3️⃣ <code>pnpm dev</code></p>
    <p>4️⃣ Appears in the list!</p>
  </div>
  <img :src="'/screenshot-new-slide.png'" style="width: 50%; object-fit: contain" />
</div>

---

# Showcase #3: Opening a Slide

<div class="flex gap-8 mt-4">
  <div class="flex-1 space-y-4 text-lg">
    <p>🖱️ Click any slide in the list</p>
    <p>🚀 Opens the Slidev presentation in a new tab</p>
    <p>🌐 Works in both dev and production</p>
  </div>
  <img :src="'/screenshot-open-slide.png'" style="height: 320px" />
</div>

---

# Showcase #4: Animations in Slides

🎉 Successfully embedded animations in Slidev<br>
— Slidev supports HTML directly in Markdown, so `<object>` and `<img>` just work!

**excalidraw-animate** — Animated SVGs from Excalidraw (I am a top contributor)

```html
<script setup>
const base = import.meta.env.BASE_URL
</script>
<object :key="$slidev.nav.currentPage" type="image/svg+xml"
  :data="base + 'excalidraw-animate.svg'" width="372" height="492"></object>
```

**excalidraw-claymate** — Frame-by-frame GIFs from Excalidraw

```html
<img src="/excalidraw-claymate.gif" style="max-height: 400px" />
```

---

# Architecture

<div class="flex justify-center mt-4">
  <img :src="'/architecture.png'" style="max-height: 420px" />
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
    </ul>
  </div>
  <div>
    <p class="font-bold">Tooling</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>pnpm</li>
      <li>Biome (lint & format)</li>
      <li>gray-matter</li>
      <li>concurrently</li>
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
  <div class="flex-1 space-y-6 text-lg">
    <div>
      <p class="font-bold">🚀 Live Demo</p>
      <p class="mt-1">https://www.kkoisland.com/slides-slidev/</p>
    </div>
    <div>
      <p class="font-bold">💻 Source Code</p>
      <p class="mt-1">https://github.com/kkoisland/slides-slidev</p>
    </div>
    <div>
      <p class="font-bold">⭐ Want to use it?</p>
      <p class="mt-1">Fork the repo, replace slides with yours, swap avatar.png!</p>
    </div>
    <div>
      <p class="font-bold">✏️ Hand-drawn diagrams</p>
      <p class="mt-1">excalidraw-animate (OSS contributor)</p>
    </div>
  </div>
  <img :src="'/qr-code.png'" style="height: 200px" />
</div>

<div class="absolute bottom-8 left-8">
  <p class="text-xl">Try slides-slidev for your own presentations!</p>
</div>

<div class="absolute bottom-8 right-8 flex items-center gap-2">
  <span class="text-gray-400">kkoisland (Keiko)</span>
  <img :src="'/avatar.png'" style="height: 36px" />
</div>

---
