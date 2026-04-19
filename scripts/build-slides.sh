#!/bin/bash
set -e
ROOT=$(pwd)
  pnpm exec slidev build slides/stable-context-map/slides.md --base /slides-slidev/slides/stable-context-map/ --out $ROOT/dist/slides/stable-context-map
  pnpm exec slidev build slides/slidev-starter-1/slides.md --base /slides-slidev/slides/slidev-starter-1/ --out $ROOT/dist/slides/slidev-starter-1
  pnpm exec slidev build slides/slides-test/slides.md --base /slides-slidev/slides/slides-test/ --out $ROOT/dist/slides/slides-test
