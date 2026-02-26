# Da Vinci Gallery · React + TypeScript

A modern gallery project built with **React + TypeScript + Vite** using a **feature-first architecture**.

## Download this project

You can download this project in two easy ways:

### Option 1 — Download ZIP (GitHub UI)
1. Open the repository page on GitHub.
2. Click **Code**.
3. Click **Download ZIP**.
4. Extract the ZIP file on your machine.

### Option 2 — Clone with Git (recommended)
```bash
git clone <REPOSITORY_URL>
cd CSSGridLabs
```

---

## Install and run

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

---

## Build for production

```bash
npm run build
npm run preview
```

---

## Project architecture

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

---

## What is implemented

- React Router routes with lazy loading.
- Feature guard pattern.
- Gallery service layer (Repository + Manager).
- Zustand store for UI state.
- Custom hooks for feed loading and masonry engine behavior.
- Responsive CSS Grid layouts + visual effects.

---

## Troubleshooting

If `npm install` fails in restricted environments, it is usually caused by blocked registry/network policy, not by project source code.
