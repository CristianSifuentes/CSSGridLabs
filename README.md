# Da Vinci Gallery · React + TypeScript + Feature Architecture

This project is now migrated from static HTML/CSS/JS to a **React + TypeScript + NPM** application using a modern, feature-first architecture inspired by 2025/2026 React modular patterns.

## Architecture Overview

```text
src/
  app/
    guards/
    providers/
    routes/
    styles/
    views/
  features/
    home/
      views/
    gallery/
      hooks/
      services/
      store/
      types/
      utils/
      views/
  shared/
    components/
    constants/
    services/
    types/
```

## Concepts Implemented

- **Components**: reusable UI blocks (`PanelToggleGroup`, `GalleryCard`, layout shell).
- **Routes**: `react-router-dom` with lazy-loaded route pages.
- **Guards**: `FeatureGuard` using centralized feature flags.
- **Services Layer**:
  - `GalleryRepository` (data source boundary)
  - `GalleryManager` (business orchestration + transformations)
- **Store Layer**: `zustand` store for layout/effect/loaded states.
- **Custom Hooks**:
  - `useGalleryFeed` (feature data loading)
  - `useMasonryEngine` (dynamic grid row-span calculator)
- **Advanced UI behavior**:
  - responsive CSS Grid layouts (masonry/cinematic/editorial),
  - dynamic masonry sizing,
  - image fallback handling,
  - loading skeleton shimmer,
  - effect presets (noir/sepia/glow/etc.).

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Notes

If your environment blocks NPM registry access, installation/build steps may fail due to network policy restrictions rather than project code issues.
