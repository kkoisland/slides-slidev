---
theme: default
title: doc-writer
author: Keiko Higuchi
date: "2026-06-22"
description: "Markdown editor that exports to Word"
routerMode: hash
---

<div class="flex items-center h-full">
  <div>
    <h1 class="text-6xl font-bold">doc-writer</h1>
    <p class="text-2xl mt-4">Markdown editor that exports to Word</p>
    <div class="mt-8 text-lg">
      <p>Demo: https://www.kkoisland.com/doc-writer</p>
      <p>GitHub: https://github.com/kkoisland/doc-writer</p>
    </div>
  </div>
</div>

<div class="absolute bottom-8 right-8 flex items-center gap-2">
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
  <img :src="$base + 'avatar.png'" style="height: 260px" />
</div>

---

# Why I Built This

**Problems I had:**

<div class="mt-6 space-y-4 text-lg">
  <p>❌ Editing in Word means managing styles every time — distracts from content</p>
  <p>❌ Just want to focus on writing, not formatting</p>
  <p>❌ Online converters send personal data to a server</p>
</div>

<p class="mt-8">→ Write in Markdown, export to Word only when needed</p>

<p class="mt-8 font-bold">Built for my own workflow — and open to fork!</p>

---

# What is doc-writer?

<div class="mt-6 space-y-3 text-lg">
  <p>🔹 Write in Markdown, export to .docx instantly</p>
  <p>🔹 Write in VS Code or any editor — open in doc-writer to export</p>
  <p>🔹 Open and save .md files locally</p>
  <p>🔹 No server — personal data never leaves your browser</p>
</div>

<p class="mt-8 text-xl font-bold">Your resume stays private.</p>

---

# Key Features

**What You Can Do**

<div class="mt-4 grid grid-cols-2 gap-2 text-base">
  <p>✅ Write Markdown in the editor</p>
  <p>✅ Export to .docx with one click</p>
  <p>✅ Open / save .md files (File System Access API)</p>
  <p>✅ Center and right-align text with HTML tags</p>
  <p>✅ Page header with name + page number</p>
  <p>✅ Runs entirely in the browser — no server</p>
</div>

---

# Showcase #1: Local File Workflow

<div class="mt-6 space-y-4 text-lg">
  <p>Open and save <code>.md</code> files directly from your local filesystem</p>
  <p>No file upload — data never leaves your machine</p>
  <p>Re-open the same file and save in place (no dialog the second time)</p>
  <p>Powered by the <strong>File System Access API</strong> — no server needed</p>
</div>

---

# Showcase #2: Resume Markdown Syntax

<div class="mt-6 space-y-4 text-lg">
  <p>Special tags for resume formatting:</p>
  <p><code># &lt;center&gt;Name&lt;/center&gt;</code> — centered heading</p>
  <p><code>&lt;p&gt;&lt;/p&gt;</code> — blank line spacer</p>
  <p>Two trailing spaces → line break within paragraph</p>
  <p><code>&lt;right&gt;Updated: June 2026&lt;/right&gt;</code> — right-aligned text</p>
  <p><code>***bold + italic***</code> — job title style</p>
</div>

---

# Showcase #3: Word Output

<div class="mt-6 space-y-4 text-lg">
  <p>Clean Word output with no extra setup</p>
  <p>Page header: name (left) + page number (right)</p>
  <p>Bold, italic, lists, centered and right-aligned text all preserved</p>
</div>

---

# Architecture

**Browser-only Markdown → Word pipeline**

<div class="mt-6">
  <p class="font-bold">💡 No server required</p>
  <ul class="mt-4 space-y-2 text-lg list-disc list-inside">
    <li>marked — parses Markdown into tokens</li>
    <li>docx — generates .docx from tokens in the browser</li>
    <li>File System Access API — read/write local .md files</li>
    <li>URL.createObjectURL — triggers download without a server</li>
  </ul>
</div>

---

# Tech Stack

🛠️ **Built with**

<div class="mt-4 grid grid-cols-3 gap-6 text-base">
  <div>
    <p class="font-bold">Frontend</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>React 19</li>
      <li>TypeScript</li>
      <li>Vite</li>
      <li>Tailwind CSS</li>
      <li>Biome</li>
    </ul>
  </div>
  <div>
    <p class="font-bold">Word Export</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>docx</li>
      <li>marked</li>
    </ul>
  </div>
  <div>
    <p class="font-bold">File & Deploy</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>File System Access API</li>
      <li>GitHub Pages</li>
      <li>GitHub Actions</li>
    </ul>
  </div>
</div>

