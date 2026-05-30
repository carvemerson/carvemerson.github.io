# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio for Emerson Carvalho, deployed at the apex domain `carvemerson.github.io` (a GitHub user/org Pages site — hence `base: '/'` in `vite.config.js`).

Stack: **Vue 3 + Vite 8 + Tailwind CSS v4**, fully custom (no UI framework). The design system is codenamed **"THE FOLIO"** — the page is treated as one issue of a technical monograph: dark "press run" by default, warm ivory "proof copy" in light mode, a signature crimson **folio rule** down the left margin, and a refined-red-on-charcoal palette. Keep red as the signature accent and dark as the primary identity.

## Commands

```bash
npm install        # install dependencies
npm run dev        # Vite dev server with HMR
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
npm run lint       # eslint . (flat config; all rules are warnings, never fails)
```

- ESLint uses the **flat config** at `eslint.config.js` (ESLint 10). Most rules are `"warn"`, so lint never fails a build. `npm run lint` exists; run `npx eslint . --fix` to auto-format.
- There is **no test framework** — nothing to run for tests.
- There is **no `deploy` script** — deployment is entirely GitHub Actions (see below).

## Deployment

`.github/workflows/jekyll-gh-pages.yml` builds and deploys on every push to `main` (and via manual `workflow_dispatch`): `npm install` → `npm run build` → publish `dist/` to GitHub Pages on **Node 20**. Despite the workflow filename, no Jekyll is involved. **Pushing to `main` IS the deploy** — branch first and only push when intended.

## Architecture

One scrolling page, not a routed app — there is no vue-router.

- **Entry chain:** `index.html` → `src/main.js` → `src/App.vue`. `index.html` contains a pre-paint inline script that sets `data-theme` from `localStorage`/`prefers-color-scheme` (FOUC prevention) and loads Fraunces / Newsreader / JetBrains Mono from Google Fonts. `main.js` registers the global `v-reveal` directive and imports `src/styles/main.css`.
- **Shell:** `App.vue` mounts the fixed atmosphere stack (grain + blueprint baseline + vignette), the `FolioRule`, `AppNav`, the skip-link, `<main>` with the sections in order, and `AppFooter`.
- **Sections (in order):** `AppHero` (#home) → `AppAbout` (#about) → `AppWork` (#work) → `AppExperience` (#experience) → `AppSkills` (#skills) → `AppContact` (#contact) → `AppFooter`.
- **Anchor navigation:** `AppNav.vue` has folio-numbered scroll-spy links + a mobile "Contents" drawer. Anchor ids are `#home #about #work #experience #skills #contact`. If you add a nav link, add the matching `id` on a section's root, and add the id to `spyIds` in `AppNav.vue`.
- **Signature components:** `FolioRule.vue` (the crimson left-margin spine: draws on load, fill bound to scroll progress, excluded from the theme wipe) and `BrandCaret.vue` (the blinking crimson block cursor). Both are single shared components so they never drift.
- **Shared building blocks:** `SectionHeading` (folio number + clip-reveal h2), `DimensionFigure` (`|← N →|` mono bracket — real numbers only), `PhotoPlate` (duotone portrait), `ProjectEntry`, `LedgerRow`, `SkillMark`, `ThemeToggle`.
- **Composables:** `useTheme` (attribute flip + persistence + View-Transitions "stock flip"), `useScrollProgress` (rAF-throttled — the only scroll-bound work), `useReducedMotion` (matchMedia gate consumed by all motion).
- **Directive:** `v-reveal` (`src/directives/reveal.js`) — fire-once IntersectionObserver reveal; content is visible by default if JS/IO is absent; honors reduced motion. Stagger via `v-reveal="120"` (ms).

## Design tokens & theming

All design tokens live in **`src/styles/main.css`** as CSS custom properties on `:root` (dark) with `[data-theme="light"]` overrides. Tailwind v4 is wired via `@theme inline` so utilities (`bg-press`, `text-ink`, `text-accent`, `font-display`…) reference the same live vars and flip with the theme. **Never hard-code hex** in components — read `var(--token)`. Theming is a single attribute flip on `<html>`.

## Icons & assets

- Brand/tech marks come from **`simple-icons`** via per-name imports in `src/icons.js` (tree-shaken, recolored with `currentColor`). To add a skill mark, import the icon and add it to the `icons` map, then reference its key in `AppSkills.vue`.
- The legacy colored PNG logos in `public/images/frameworks/` are no longer used by the build; the portrait is `public/images/photo.jpg` (rendered duotone via `PhotoPlate`).

## Content is hard-coded in components

No CMS, data file, or API. Site copy and lists live in each component's `<script setup>`:
- Hero copy → `AppHero.vue`
- Bio + contact fact-lines → `AppAbout.vue` (`facts`)
- Projects → `AppWork.vue` (`projects` array — currently capability placeholders; see TODO there. Empty the array and the section hides itself. Never add fabricated metrics/customer names.)
- Experience / education ledger → `AppExperience.vue` (`experience`, `education`)
- Skills index → `AppSkills.vue` (`core`, `groups`)
- Contact email + socials → `AppContact.vue`
- Footer colophon → `AppFooter.vue`

Contact email is the personal address **carvemerson@gmail.com**. Use **"customer"**, not "client", in copy.

## Conventions

- `App.vue` and all components use `<script setup>` (Composition API).
- ESLint (flat config, warnings only) enforces: 4-space indentation, semicolons, trailing commas on multiline arrays/objects, **kebab-case component names in templates** (`<app-hero />`), always-self-closing tags, single-line element content on its own line.
- Match the surrounding file's style. Respect `prefers-reduced-motion` for any new motion, and keep crimson "precious" — reserved for active/current/key elements, never large fills.
