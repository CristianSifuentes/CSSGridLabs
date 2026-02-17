# Da Vinci Minimal Gallery

A responsive, minimalist photo gallery built with **CSS Grid**, **advanced CSS effects**, and **vanilla JavaScript interactions**.

## Features

- **Three switchable Grid compositions** (A/B/C) inspired by editorial art walls.
- **Responsive behavior** for desktop, tablet, and mobile.
- **Advanced CSS styling**:
  - layered backgrounds,
  - subtle grain texture,
  - hover zoom,
  - blend/filter presets,
  - reveal-on-scroll motion.
- **Effect controls** to live-switch visual moods:
  - classic,
  - noir,
  - sepia,
  - glow,
  - etched,
  - dream.
- **Sticky minimalist side panels** on desktop and compact control bars on mobile.

## Tech Stack

- HTML5
- CSS3 (Grid, media queries, filters, transitions, keyframes)
- JavaScript (layout/effect toggles, IntersectionObserver animation timing)

## Run locally

```bash
python3 -m http.server 4173
```

Then open:

- `http://localhost:4173`

## Project Files

- `index.html` — gallery structure and controls.
- `styles.css` — responsive grid system, visual language, and effects.
- `script.js` — interactive layout/effect switching and staged reveal behavior.
