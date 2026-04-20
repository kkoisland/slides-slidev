#!/bin/bash
concurrently \
  "vite" \
  "slidev slides/test/slides.md --port 3030 --open false" \
  "slidev slides/slides-slidev/slides.md --port 3031 --open false" \
  "slidev slides/stable-context-map/slides.md --port 3032 --open false" \
  "slidev slides/slidev-starter-1/slides.md --port 3033 --open false" \
  "slidev slides/slides-test/slides.md --port 3034 --open false"
