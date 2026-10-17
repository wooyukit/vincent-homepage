# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Vincent (Kit) built with Next.js 16 (Pages Router), React 18, Chakra UI 2, Three.js, and Recharts 3. Statically exported and deployed to Firebase Hosting. Live at https://vincent-homepage.web.app/.

## Commands

```bash
npm run dev        # Start dev server (binds 0.0.0.0)
npm run build      # Production build: optimize images, then next build --webpack → /out
npm run lint       # ESLint (Next.js config)
npm run prettier   # Format all files with Prettier
```

Deployment: `firebase deploy --only hosting` (serves the `out/` directory).

## Architecture

Requires Node.js 22+. `npm run test` runs regression checks, `npm run check:export` validates generated pages, and `npm run preview` serves the production export locally.

**Next.js 16 Pages Router with `output: 'export'`** — no server-side rendering in production. All pages are pre-rendered to static HTML.

### Key Directories

- `pages/` — Next.js file-based routing. Each portfolio project has its own page under `pages/portfolio/`. `pages/dashboard.js` is the metrics dashboard.
- `components/` — Reusable UI. `layouts/main.js` wraps all pages (navbar + main content). The homepage loads the 3D planet only after the visitor opens its preview. `layouts/article.js` adds page transition animations.
- `lib/theme.js` — Apple-inspired editorial theme with neutral light and dark surfaces, blue accents, native system typography, and reduced-motion rules. Use the `primary` and `glass` button variants and `.eyebrow` labels. Shared liquid-glass layer styles (`glassCard`, `glassFloating`, `glassMedia`, `glassFeature`) provide theme-aware translucent surfaces, reflective edges, and solid accessibility fallbacks. Keep live backdrop blur limited to floating navigation, menus, and the portrait caption; project grids use `glassCard` without blur. Clear navigation uses a scroll-edge fade for legibility. Use `glassMedia` with light text over photography; menus retain a denser tint for readability.
- `data/projects.js` — Shared project dates, technologies, summaries, and featured selections.
- `scripts/optimize-images.mjs` — Generates cached responsive WebP variants before development and builds. Generated images and their manifest are ignored by Git.
- `lib/model.js` — Three.js GLTF model loader for the 3D planet component.
- `docs/plans/` — Design documents and implementation plans for features.
- `public/images/` — Static assets. `works/` has company logos, `portfolio/` has project screenshots.

### Component Hierarchy

`_app.js` (Chakra provider + MotionConfig) → `Main` layout (navbar + main content) → `Article` layout (motion transitions) → Page content

### Patterns

- **Color mode**: Use semantic color tokens from `lib/color-tokens.js` and static `_dark` CSS rules for pre-rendered content. Both palettes must be present in the exported CSS so `ColorModeScript` can apply the saved preference before React hydrates. Reserve `useColorModeValue()` for behavior or delayed client-only charts; do not use it for initial page surfaces or text.
- **Animations**: CSS provides a 500ms page entrance and 560ms section entrances (delays capped at 240ms). Route changes mount immediately to avoid blank exit gaps and scroll jumps. Framer Motion drives the persistent navigation indicator and rotating hero text. Keep `layoutRoot` and `layoutScroll` on the fixed Motion navigation element so measurements stay relative to the viewport and page scroll offsets do not displace the shared indicator during route changes. `useReveal` progressively enables scroll reveals for below-the-fold sections and cards; static HTML and keyboard-focused content stay visible. `useMotionVisibility` pauses looping motion offscreen, in background tabs, or when reduced motion is requested. `AutomaticMotionProvider` also supplies the navigation pause control. Keep movement to transforms/opacity.
- **Page background and glass**: Use neutral solid light and dark page backgrounds. Keep glass localized to navigation, menus, the portrait caption, buttons, and cards. Do not add full-page glass sheets, decorative background orbs/ribbons, or fixed colored background layers. Project cards remain free of individual backdrop filters. Preserve solid surface fallbacks for reduced transparency, increased contrast, and forced colors.
- **Current job marker**: `components/current-job-indicator.js` uses two staggered ripple rings around a saturated timeline dot. The rings repeat using transforms and opacity; `useMotionVisibility` pauses them offscreen, in background tabs, and through the navigation pause control. Reduced motion shows the static dot.
- **3D component**: The homepage’s `PlanetPreview` loads `Planet` via `dynamic()` with `ssr: false` on request. The render loop pauses offscreen or in background tabs and honors reduced motion.
- **Portfolio pages**: Use shared components from `components/work.js` (`Title`, `WorkImage`, `Meta`) inside `components/project-gallery.js`. The gallery renders its viewer in a body-level portal to escape page animation transforms. PhotoSwipe core and default skin CSS are loaded globally in `_app.js`. Image fit/zoom uses native dimensions from the generated image manifest rather than legacy page dimensions.
- **Content is static** — no database. Shared project content lives in `data/projects.js`; other content lives in pages. The dashboard fetches public data client-side through `lib/dashboard-data.js`, with pagination, five-minute caching, and in-flight deduplication.
- **Dashboard page**: Fetches GitHub API (`/users/wooyukit` + repos) and crates.io API client-side via `useEffect`. Uses `recharts` v3 for PieChart and BarChart. Dashboard sections disable scroll reveals with `revealOnScroll={false}`. Charts are gated behind a `chartsReady` timer (1.2s) so they animate after page and section entrances complete — never overlap animations.
- **Animation staggering**: When combining page/section entrances with Recharts animations, delay chart rendering until the parent is fully visible. Use a `useState` + `setTimeout` pattern to gate chart mount.

## Code Style

Enforced by Prettier: single quotes, no semicolons, no trailing commas, 2-space indent, no parens on single arrow params.

ESLint: `next` config. Unused variables prefixed with `_` are allowed.
