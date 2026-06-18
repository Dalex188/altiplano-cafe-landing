# Component Architecture Specification

## Purpose

Structural refactor of the monolithic `AltiplanoCafeLanding.tsx` (733 lines) into a modular architecture with separated hooks, section components, UI components, icons, types, and styles. Zero visual or behavioral change.

## Requirements

### Requirement: Module Extraction

The system MUST extract the monolithic component into the file structure below. All existing TypeScript types, interfaces, and type imports MUST be preserved exactly.

| Artifact | Path |
|----------|------|
| Entry component | `src/App.tsx` |
| Shared types | `src/types/index.ts` |
| Custom hooks | `src/hooks/useScrollSpy.ts`, `src/hooks/useFormSubmit.ts` |
| Section components | `src/components/sections/{Hero,About,Quality,ExportCapabilities,Certifications,ProcessTimeline,Testimonials,ContactForm}.tsx` |
| UI components | `src/components/ui/{SectionHeading,StatCard,QualityItem,ExportCard,CertCard,TimelineStep,TestimonialCard,StarRating,ContactDetail,FormField}.tsx` |
| SVG icons | `src/components/icons/{16 files + index.ts barrel}` |
| Styles | `src/styles/main.css` |
| Environment | `.env` with `VITE_FORMSPREE_ENDPOINT` |

#### Scenario: Build succeeds with clean structure

- GIVEN the extracted file structure exists under `src/`
- WHEN `npm run build` executes
- THEN it passes with zero TypeScript errors
- AND all imports between modules resolve without warnings

#### Scenario: Import path regression

- GIVEN a renamed or moved module file
- WHEN `tsc` type-checks the project
- THEN it reports unresolved module errors at compile time, never silently

### Requirement: Entry Point Rename

`src/main.tsx` MUST import from `./App` instead of `./AltiplanoCafeLanding` and MUST import `./styles/main.css` instead of `./AltiplanoCafeLanding.css`.

#### Scenario: main.tsx updated

- GIVEN the original `src/main.tsx`
- WHEN renamed imports point to `./App` and `./styles/main.css`
- THEN the app renders the same component tree (previously: `AltiplanoCafeLanding`)

### Requirement: Prop Contracts

Component props MUST match the data flow: only `Header` receives `menuOpen`/`setMenuOpen` from `App`; only `ContactForm` receives `formData`, `formState`, `submitError`, `handleSubmit`, `handleChange`, `isFormInvalid` from `useFormSubmit`.

#### Scenario: Correct prop wiring

- GIVEN the `App` component calls `useFormSubmit()`
- WHEN the return values are passed as props to `ContactForm`
- THEN the form renders, submits, and reports errors identically to the original

### Requirement: Form Environment Configurability

The form submission endpoint MUST be read from `import.meta.env.VITE_FORMSPREE_ENDPOINT`. When the env var is absent, the system SHOULD fall back to the hardcoded original Formspree URL.

#### Scenario: Env var present

- GIVEN `.env` contains `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/abc123`
- WHEN `useFormSubmit` sends form data
- THEN it POSTs to `https://formspree.io/f/abc123`

#### Scenario: Env var missing (edge case)

- GIVEN `.env` does NOT define `VITE_FORMSPREE_ENDPOINT`
- WHEN the app loads
- THEN `useFormSubmit` defaults to the original hardcoded Formspree URL
- AND the form functions identically

### Requirement: Zero Visual Regression

Every rendered DOM output — element hierarchy, CSS class names, inline styles, text content, SVG markup — MUST be identical before and after the refactor.

#### Scenario: DOM snapshot parity

- GIVEN the original component rendered in a browser
- WHEN the refactored component renders under the same conditions
- THEN every DOM node, attribute, and text value matches
- AND no new wrapper elements, extra `div`s, or missing fragments exist

### Requirement: Scroll Spy Integrity

The `useScrollSpy` hook MUST update the browser URL hash to match the currently visible section on scroll, with no external dependencies.

#### Scenario: URL hash updates on scroll

- GIVEN the page is loaded with sections `#hero`, `#about`, `#quality`
- WHEN the user scrolls past `#hero` into `#about`
- THEN the URL hash changes to `#about`

### Requirement: CSS Selector Preservation

The reorganized `src/styles/main.css` MUST contain the exact same CSS selectors, property names, and values as the original `AltiplanoCafeLanding.css`.

#### Scenario: Selector audit

- GIVEN the original CSS and the refactored CSS
- WHEN compared by selector→declaration mapping
- THEN no selector, property, value, or at-rule is removed or altered

## Out of Scope

- CSS modules, CSS-in-JS, or per-component stylesheets
- Test suite, unit tests, E2E tests
- Routing, lazy loading, code splitting
- Any visual, content, layout, or copy changes
- Any new component, hook, or feature not listed in the extraction table
- Build tooling, Vite config, or dependency changes
