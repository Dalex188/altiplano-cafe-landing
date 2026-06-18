# AGENTS.md — Altiplano Café Landing Page

## Repo structure

Single-file React + TypeScript landing page (`AltiplanoCafeLanding.tsx`) with local image assets. No build tooling, no package manager config, no HTML shell — this is a loose component, not a bundled project.

## Key facts

- `AltiplanoCafeLanding.tsx` is the only source file. It's a self-contained React component with `useState` form handling and zero external dependencies beyond React.
- `AltiplanoCafeLanding.css` is imported but **does not exist** yet — create it if styling is needed.
- All images are local files (Unsplash JPGs + one PNG). They are referenced in the CSS (no direct imports in the TSX).
- No `index.html`, `package.json`, `tsconfig.json`, or bundler config. To render this, wrap it in an app shell and serve with a bundler (Vite, CRA, etc.).
- `.atl/` is auto-generated gentle-ai/opencode skill registry metadata — do not edit manually.

## Conventions

- Uses plain CSS, not CSS modules or a CSS-in-JS solution. Class names follow BEM-ish naming (e.g., `.hero-content`, `.quality-grid`, `.form-group`).
- No TypeScript strict mode config exists; code avoids advanced TS features.
- Images are in the repo root colocated with the component — no `assets/` directory.
