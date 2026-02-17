# Da Vinci Minimal Gallery

A responsive, minimalist photo gallery built with **CSS Grid**, **advanced CSS effects**, and **vanilla JavaScript interactions**, now refined with a **masonry-inspired** layout system.

## What changed after masonry analysis

Based on analyzing the reference masonry demo, this project now emphasizes:

- fluid vertical rhythm through auto-sized rows,
- dense visual packing with varied card spans,
- multiple art-directed layout modes,
- scroll-native storytelling instead of rigid fixed tile heights.

## Features

- **Three switchable gallery compositions**:
  - `masonry` (Pinterest-like flow with variable row spans),
  - `cinematic` (hero-first narrative composition),
  - `editorial` (clean magazine-like arrangement).
- **Responsive behavior** for desktop, tablet, and mobile.
- **Advanced CSS styling**:
  - layered gradients,
  - subtle grain texture,
  - hover zoom,
  - visual filter presets,
  - reveal-on-scroll motion.
- **Runtime effect controls**:
  - classic,
  - noir,
  - sepia,
  - glow,
  - etched,
  - dream.
- **JS-powered masonry sizing** using image aspect ratio + CSS Grid row math.

## Tech Stack

- HTML5
- CSS3 (Grid, media queries, filters, transitions, keyframes)
- JavaScript (layout/effect toggles, IntersectionObserver, dynamic masonry row-span calculation)

## Run locally

```bash
python3 -m http.server 4173
```

Then open:

- `http://localhost:4173`

## Project Files

- `index.html` — gallery structure and controls.
- `styles.css` — responsive layouts, design system, and visual effects.
- `script.js` — interactive layout/effect switching and masonry row-span engine.
