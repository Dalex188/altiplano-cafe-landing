# Tasks: Refactor Component Separation

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~2800 (additions: ~900, deletions: ~1962) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 3 (feature-branch-chain) |
| Delivery strategy | ask-on-risk |
| Chain strategy | feature-branch-chain |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation & UI layer — env, types, 16 icons, 2 hooks, 10 UI components | PR 1 | Base = feature/tracker branch. Zero deps between env/types/icons/hooks; UI depends on types + icons |
| 2 | Section components + CSS + App + cleanup — 8 sections, src/styles/main.css, App.tsx, main.tsx update, delete old files | PR 2 | Base = PR 1 branch. Sections depend on UI + hooks; App wires everything |
| 3 | Final build verification + visual parity check | PR 3 | Base = PR 2 branch. `npm run build`, screenshot diff, form e2e test |

## Phase 1: Foundation & Types

- [x] 1.1 Create `.env` and `.env.example` with `VITE_FORMSPREE_ENDPOINT`
- [x] 1.2 Create `src/types/index.ts` — extract `FormData` interface from monolithic file
- [x] 1.3 Create `src/hooks/useScrollSpy.ts` — extract IntersectionObserver effect
- [x] 1.4 Create `src/hooks/useFormSubmit.ts` — extract form state + submission logic (read endpoint from `import.meta.env.VITE_FORMSPREE_ENDPOINT` with hardcoded fallback)
- [x] 1.5 Create `src/components/icons/` — extract 16 SVG icon components each as `React.FC`, + barrel `index.ts`

## Phase 2: UI Components

- [x] 2.1 Create `src/components/ui/SectionHeading.tsx` — title/subtitle/light props
- [x] 2.2 Create `src/components/ui/StatCard.tsx` — number/label props
- [x] 2.3 Create `src/components/ui/QualityItem.tsx` — icon/title/description props
- [x] 2.4 Create `src/components/ui/ExportCard.tsx` — icon/title/description props
- [x] 2.5 Create `src/components/ui/CertCard.tsx` — icon/title/description props
- [x] 2.6 Create `src/components/ui/TimelineStep.tsx` — number/title/description/image props
- [x] 2.7 Create `src/components/ui/TestimonialCard.tsx` — text/author/role props
- [x] 2.8 Create `src/components/ui/StarRating.tsx` — extract star rendering from testimonial cards
- [x] 2.9 Create `src/components/ui/ContactDetail.tsx` — icon/text props
- [x] 2.10 Create `src/components/ui/FormField.tsx` — label/name/type/value/onChange/disabled props

## Phase 3: Section Components

- [x] 3.1 Create `src/components/sections/Header.tsx` — menuOpen, onMenuToggle, onNavClick props; include mobile-nav-overlay
- [x] 3.2 Create `src/components/sections/Hero.tsx` — no props, uses icons from barrel
- [x] 3.3 Create `src/components/sections/About.tsx` — no props; uses StatCard, SectionHeading
- [x] 3.4 Create `src/components/sections/Quality.tsx` — no props; uses QualityItem, SectionHeading
- [x] 3.5 Create `src/components/sections/ExportCapabilities.tsx` — no props; uses ExportCard, SectionHeading
- [x] 3.6 Create `src/components/sections/Certifications.tsx` — no props; uses CertCard, SectionHeading
- [x] 3.7 Create `src/components/sections/ProcessTimeline.tsx` — no props; uses TimelineStep, SectionHeading
- [x] 3.8 Create `src/components/sections/Testimonials.tsx` — no props; uses TestimonialCard, StarRating, SectionHeading
- [x] 3.9 Create `src/components/sections/ContactForm.tsx` — receives formData, formState, submitError, handleChange, handleSubmit, isFormInvalid as props; uses FormField, ContactDetail
- [x] 3.10 Create `src/components/sections/Footer.tsx` — no props

## Phase 4: CSS Reorganization

- [x] 4.1 Create `src/styles/main.css` — copy `AltiplanoCafeLanding.css` verbatim, reorder sections to match page flow (reset → typography → header → hero → about → quality → export → certs → process → testimonials → contact → footer → responsive)

## Phase 5: App Entry & Wiring

- [x] 5.1 Create `src/App.tsx` — wire `useScrollSpy()`, `useFormSubmit()`, `useState<menuOpen>`, pass props to Header and ContactForm, render all sections in order
- [x] 5.2 Update `src/main.tsx` — change imports to `./App` and `./styles/main.css`
- [x] 5.3 Delete `src/AltiplanoCafeLanding.tsx` and `src/AltiplanoCafeLanding.css`

## Phase 6: Verification

- [x] 6.1 Run `npm run build` — must pass with zero TS errors
- [x] 6.2 Visual parity check — render side-by-side with production; verify DOM tree, class names, text, SVG identical
- [x] 6.3 Form submission — POST to Formspree succeeds, success state renders
- [x] 6.4 Scroll spy — scroll through sections, verify `location.hash` updates
- [x] 6.5 Mobile nav — toggle hamburger, verify overlay renders and nav links close it
