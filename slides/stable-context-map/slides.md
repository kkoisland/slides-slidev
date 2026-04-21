---
theme: default
title: stable-context-map
author: Keiko Higuchi
date: "2026-04-18"
description: "A Map App That Preserves Your Viewing Context"
routerMode: hash
---

<div class="flex items-center gap-8 h-full">
  <img src="/logo.png" style="height: 220px" />
  <div>
    <h1 class="text-6xl font-bold">stable-context-map</h1>
    <p class="text-2xl mt-4">A Map App That Preserves Your Viewing Context</p>
    <div class="mt-8 text-lg">
      <p>Demo: https://www.kkoisland.com/stable-context-map/</p>
      <p>GitHub: https://github.com/kkoisland/stable-context-map</p>
    </div>
  </div>
</div>

<div class="absolute bottom-8 right-8 flex items-center gap-2">
  <span class="text-gray-400">kkoisland (Keiko)</span>
  <img src="/avatar.png" style="height: 36px" />
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
  <img src="/avatar.png" style="height: 260px" />
</div>

---

# Why I Built This

**Problems I had while planning trips:**

<div class="mt-6 space-y-4 text-lg">
  <p>❌ Map auto-moves on every search</p>
  <p>❌ Zoom level changes & can't lock</p>
  <p>❌ Hard to export data when closing browser</p>
</div>

<p class="mt-8">→ So I built my own solution</p>

<p class="mt-8 font-bold">Built with ❤️ for the React community</p>

---

# What is stable-context-map?

<div class="flex gap-8 mt-4">
  <div class="flex-1">
    <p class="text-lg">A React map application that preserves your viewing context</p>
    <ul class="mt-6 space-y-3 text-lg">
      <li>🗺️ OpenStreetMap + Leaflet</li>
      <li>📍 Add search results as markers</li>
      <li>💾 Auto-save to localStorage</li>
    </ul>
    <p class="mt-8 text-xl font-bold">Your viewport = Your workspace</p>
  </div>
  <img src="/screenshot-what-is.png" style="height: 320px" />
</div>

---

# Key Features

**What You Can Do**

<div class="mt-4 grid grid-cols-2 gap-2 text-base">
  <p>✏️ Edit labels & memos for each marker (Marker Info)</p>
  <p>📍 Click map to add markers manually</p>
  <p>🔒 Zoom lock for presentations</p>
  <p>📋 View all markers with navigation and delete (Marker List)</p>
  <p>📥 Import from JSON / 📤 Export to JSON</p>
  <p>🖨️ Export to PDF format</p>
  <p>🌍 Fit bounds to show all markers</p>
  <p>🗑️ Clear all markers & data</p>
  <p>📏 Zoom Selector: 16 levels (2–18), lower-left</p>
</div>

---

# Showcase #1: Search & Add

<div class="flex gap-8 mt-4">
  <div class="flex-1 space-y-4 text-lg">
    <p>Search<br/>"Kiyomizu Dera",<br/>"Kinkakuji",<br/>"Arashiyama",<br/>"Kyoto station"</p>
    <p>📍 Or click anywhere on the map to add pins</p>
    <p>💡 Map tries to keep your current view, but you can always adjust</p>
  </div>
  <img src="/screenshot-search.png" style="height: 320px" />
</div>

---

# Showcase #2: View Controls

<div class="flex gap-8 mt-4">
  <img src="/screenshot-view-controls.png" style="height: 340px" />
  <div class="flex-1 space-y-4 text-lg">
    <p>🔒 Zoom Lock: Prevent accidental zoom during presentations</p>
    <p>🌍 Fit Bounds: Auto-adjust to show all markers</p>
    <p>📏 Zoom Selector - 16 levels with descriptions</p>
  </div>
</div>

---

# Showcase #3: Zoom Selector Details

<div class="flex gap-8 mt-4">
  <div class="flex-1 space-y-3 text-lg">
    <p>📏 16 Zoom Levels organized by scale (Lower Left):</p>
    <ul class="space-y-2 text-base list-disc list-inside">
      <li>Global (2–6): World → Country → Wide Region</li>
      <li>Regional/City (8–14): Metro Area → City → District</li>
      <li>Detail (15–18): Neighborhood → Street → Building</li>
    </ul>
    <p class="mt-4">💡 Mouse wheel works too, and selector always shows current level!</p>
  </div>
  <img src="/screenshot-zoom-selector.png" style="height: 340px" />
</div>

---

# Showcase #4: Edit & Manage

<div class="flex gap-6 mt-4">
  <div class="flex-1 space-y-3 text-lg">
    <p>📍 Numbered pins on map</p>
    <p>📋 List view with navigate & delete</p>
    <p>✏️ Editable names and memos</p>
    <p>🗑️ Delete individual markers easily</p>
  </div>
  <img src="/screenshot-edit-map.png" style="height: 300px" />
  <img src="/screenshot-marker-list.png" style="height: 300px" />
</div>

---

# Showcase #5: Data Management

<div class="flex gap-8 mt-4">
  <div class="flex-1 space-y-3 text-lg">
    <p>💾 All changes auto-saved to localStorage</p>
    <p>📥 Import JSON (restore saved plans)</p>
    <p>📤 Export JSON (backup & share)</p>
    <p>🖨️ Export PDF (map + marker list)</p>
    <p>🗑️ Clear All - Start fresh anytime</p>
  </div>
  <img src="/screenshot-pdf-export.png" style="height: 320px" />
</div>

---

# Architecture

**OSM-based Map Architecture**

<div class="flex gap-8 mt-4">
  <div class="flex-1">
    <p class="font-bold">💡 Why OpenStreetMap?</p>
    <ul class="mt-4 space-y-2 text-lg list-disc list-inside">
      <li>Free & open-source</li>
      <li>No API keys required</li>
      <li>No usage limits</li>
      <li>Comparable to Google Maps, Apple Maps, Mapbox</li>
    </ul>
  </div>
  <img src="/diagram-architecture.png" style="height: 320px" />
</div>

---

# Tech Stack

🛠️ **Built with**

<div class="mt-4 grid grid-cols-3 gap-6 text-base">
  <div>
    <p class="font-bold">Frontend</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>React 19 + TypeScript</li>
      <li>Vite (Build tool)</li>
      <li>Leaflet (react-leaflet)</li>
      <li>Tailwind CSS</li>
    </ul>
  </div>
  <div>
    <p class="font-bold">Storage & Export</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>localStorage (auto-save)</li>
      <li>jsPDF + html2canvas</li>
    </ul>
  </div>
  <div>
    <p class="font-bold">API</p>
    <ul class="mt-2 space-y-1 list-disc list-inside">
      <li>Nominatim (OpenStreetMap geocoding)</li>
    </ul>
  </div>
</div>

---

# Try the Demo!

<div class="flex gap-12 mt-6">
  <div class="flex-1 space-y-6 text-lg">
    <div>
      <p class="font-bold">🚀 Live Demo</p>
      <p class="mt-1">https://www.kkoisland.com/stable-context-map/</p>
    </div>
    <div>
      <p class="font-bold">💻 Source Code</p>
      <p class="mt-1">https://github.com/kkoisland/stable-context-map</p>
    </div>
    <div>
      <p class="font-bold">✏️ Hand-drawn diagrams</p>
      <p class="mt-1">excalidraw-animate (OSS contributor)</p>
    </div>
  </div>
  <img src="/qr-code.png" style="height: 200px" />
</div>

<div class="absolute bottom-8 left-8">
  <p class="text-xl">Perfect for exploring places and organizing ideas on a map!</p>
</div>

<div class="absolute bottom-8 right-8 flex items-center gap-2">
  <span class="text-gray-400">kkoisland (Keiko)</span>
  <img src="/avatar.png" style="height: 36px" />
</div>
