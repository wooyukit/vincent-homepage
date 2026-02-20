# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Vincent (Kit) built with Next.js 12, Chakra UI, Three.js, and recharts. Statically exported and deployed to Firebase Hosting. Live at https://vincent-homepage.web.app/.

## Commands

```bash
npm run dev        # Start dev server (binds 0.0.0.0)
npm run build      # Production build: next build && next export → /out
npm run lint       # ESLint (Next.js config)
npm run prettier   # Format all files with Prettier
```

Deployment: `firebase deploy --only hosting` (serves the `out/` directory).

## Architecture

**Next.js 12 with static export** — no server-side rendering in production. All pages are pre-rendered to static HTML.

### Key Directories

- `pages/` — Next.js file-based routing. Each portfolio project has its own page under `pages/portfolio/`. `pages/dashboard.js` is the metrics dashboard.
- `components/` — Reusable UI. `layouts/main.js` wraps all pages (navbar + 3D planet). `layouts/article.js` adds page transition animations.
- `lib/theme.js` — Chakra UI theme (dark mode default, font "M Plus Rounded 1c", custom color `glassTeal`).
- `lib/model.js` — Three.js GLTF model loader for the 3D planet component.
- `docs/plans/` — Design documents and implementation plans for features.
- `public/images/` — Static assets. `works/` has company logos, `portfolio/` has project screenshots.

### Component Hierarchy

`_app.js` (Chakra provider + AnimatePresence) → `Main` layout (navbar + planet) → `Article` layout (motion transitions) → Page content

### Patterns

- **Color mode**: Use `useColorModeValue()` for light/dark theme values throughout.
- **Animations**: Framer Motion for page transitions and section reveals (`Section` component). Chakra `keyframes` for CSS animations (wave, float, glow, pulse, gradient).
- **3D component**: `Planet` is loaded via `dynamic()` with `ssr: false` and wrapped in `NoSSR`.
- **Portfolio pages**: Use shared components from `components/work.js` (`Title`, `WorkImage`, `Meta`).
- **All content is hardcoded** — no database, no API calls. Data lives directly in page files as JS arrays/objects. Exception: `dashboard.js` fetches live data client-side.
- **Dashboard page**: Fetches GitHub API (`/users/wooyukit` + repos) and crates.io API client-side via `useEffect`. Uses `recharts` (v2.x, React 17 compatible) for PieChart and BarChart. Charts are gated behind a `chartsReady` timer (1.2s) so they animate after the Framer Motion section fade-in completes — never overlap animations.
- **Animation staggering**: When combining Framer Motion (Section/Layout fade-in) with recharts animations, delay chart rendering until the parent is fully visible. Use a `useState` + `setTimeout` pattern to gate chart mount.

## Code Style

Enforced by Prettier: single quotes, no semicolons, no trailing commas, 2-space indent, no parens on single arrow params.

ESLint: `next` config. Unused variables prefixed with `_` are allowed.
