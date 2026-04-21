---
theme: default
title: Test Slide
author: Keiko Higuchi
date: "2026-04-13"
description: "excalidraw-animate and excalidraw-claymate demo"
routerMode: hash
---

# title
## title
### title
#### title
Contents

---

Image

<img src="/image.svg" style="max-height: 400px" />

---

Animation

<script setup>
const base = import.meta.env.BASE_URL
</script>

<object :key="$slidev.nav.currentPage" type="image/svg+xml" :data="base + 'excalidraw-animate.svg'" width="372" height="492"></object>

---

Claymate

<img src="/excalidraw-claymate.gif" style="max-height: 400px" />
