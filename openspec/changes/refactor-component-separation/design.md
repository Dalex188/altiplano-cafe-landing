# Design: Refactor Component Separation

## Technical Approach

Pure structural extraction of the 733-line monolithic `AltiplanoCafeLanding.tsx` into a modular file tree. Zero runtime behavior changes — every component, hook, and type mirrors the existing code. CSS remains a single flat file, reorganized by page-section order. The Formspree endpoint URL moves to `VITE_FORMSPREE_ENDPOINT` in `.env`.

## Architecture Decisions

| Option | Tradeoff | Decision |
|--------|----------|----------|
| One CSS file vs per-component CSS | One file: no selector breakage risk, simpler migration; per-component: future tree-shaking | **Single `styles/main.css`** — refactor is structural only |
| Props-drill vs Context for form state | Props: explicit, traceable, no new abstraction; Context: overkill for 2 consumers | **Props-drill** from App → ContactForm |
| Named vs default exports | Named: consistent imports, no rename collisions | **Named exports** for all components, hooks, icons |
| SVG as React components vs external files | Inline components: zero network requests, type-safe; external SVGs: would need bundler config | **Inline `React.FC<{}>`** — matches current pattern, keeps it self-contained |

## Component Tree & File Structure

```
src/
├── App.tsx                          ← renamed from AltiplanoCafeLanding.tsx
├── main.tsx                         ← updated imports
├── types/
│   └── index.ts                     ← FormData interface, shared types
├── hooks/
│   ├── useScrollSpy.ts              ← IntersectionObserver effect
│   └── useFormSubmit.ts             ← form state + submission logic
├── components/
│   ├── sections/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Quality.tsx
│   │   ├── ExportCapabilities.tsx
│   │   ├── Certifications.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── SectionHeading.tsx
│   │   ├── StatCard.tsx
│   │   ├── QualityItem.tsx
│   │   ├── ExportCard.tsx
│   │   ├── CertCard.tsx
│   │   ├── TimelineStep.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── StarRating.tsx
│   │   ├── ContactDetail.tsx
│   │   └── FormField.tsx
│   └── icons/
│       ├── index.ts                 ← barrel export
│       ├── GlobeIcon.tsx
│       ├── StarIcon.tsx
│       ├── ShipIcon.tsx
│       ├── ShieldIcon.tsx
│       ├── LeafIcon.tsx
│       ├── AwardIcon.tsx
│       ├── CheckIcon.tsx
│       ├── LabIcon.tsx
│       ├── CoffeeIcon.tsx
│       ├── GraphIcon.tsx
│       ├── DollarIcon.tsx
│       ├── BoxIcon.tsx
│       ├── DocumentIcon.tsx
│       ├── PinIcon.tsx
│       ├── MailIcon.tsx
│       └── PhoneIcon.tsx
└── styles/
    └── main.css                     ← moved + reorganized
```

## Props Interfaces

```typescript
// App.tsx — no external props
// Header — receives state + callbacks
interface HeaderProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onNavClick: () => void;
}

// ContactForm — receives hook output
interface ContactFormProps {
  formData: FormData;
  formState: 'idle' | 'submitting' | 'success' | 'error';
  submitError: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isFormInvalid: boolean;
}

// UI components — all self-contained, receive data as props
interface SectionHeadingProps {
  title: string; subtitle?: string; light?: boolean;
}
interface StatCardProps {
  number: string; label: string;
}
interface QualityItemProps {
  icon: React.ReactNode; title: string; description: string;
}
interface ExportCardProps {
  icon: React.ReactNode; title: string; description: string;
}
interface CertCardProps {
  icon: React.ReactNode; title: string; description: string;
}
interface TimelineStepProps {
  number: string; title: string; description: string;
  imageSrc: string; imageAlt: string;
}
interface TestimonialCardProps {
  text: string; author: string; role: string;
}
interface ContactDetailProps {
  icon: React.ReactNode; text: string;
}
interface FormFieldProps {
  label: string; name: string; type: 'text' | 'email' | 'tel' | 'textarea' | 'checkbox';
  value: string | boolean; placeholder?: string; required?: boolean;
  disabled?: boolean; rows?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
```

## Custom Hooks Interface

| Hook | Input | Output | Side Effects |
|------|-------|--------|-------------|
| `useScrollSpy` | (none) | (none) | Sets up `IntersectionObserver` that calls `history.replaceState` on scroll |
| `useFormSubmit` | (none) | `{ formData, formState, submitError, handleSubmit, handleChange, isFormInvalid }` | POST to `VITE_FORMSPREE_ENDPOINT` on submit; logs to console |

## State Flow

```
App.tsx
  ├── useScrollSpy()          ← self-contained, no return
  ├── useFormSubmit()         ← returns formData, formState, ...handlers
  ├── useState<menuOpen>      ← local state, passed down
  │
  ├── Header (menuOpen, onMenuToggle, onNavClick)     ← props
  ├── Hero                                                  ← no props
  ├── About                                                 ← no props
  ├── Quality                                               ← no props
  ├── ExportCapabilities                                    ← no props
  ├── Certifications                                        ← no props
  ├── ProcessTimeline                                       ← no props
  ├── Testimonials                                          ← no props
  ├── ContactForm (formData, formState, submitError,        ← props
  │                handleChange, handleSubmit, isFormInvalid)
  └── Footer                                                ← no props
```

## CSS Organization Strategy

Zero selector changes. The 1229-line `AltiplanoCafeLanding.css` moves verbatim to `src/styles/main.css` with sections reordered to match page flow:

1. Reset & Variables (unchanged)
2. Typography & Utilities (unchanged)
3. Sticky Header (moved before Hero)
4. Hero
5. About
6. Quality
7. Export Capabilities
8. Certifications
9. Process Timeline
10. Testimonials
11. Contact Form
12. Footer
13. Responsive breakpoints (merged at bottom)

The reordering is purely cosmetic — selector names remain identical so nothing breaks.

## .env Setup

```
# .env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mqeojool

# .env.example
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
```

`main.tsx` remains unchanged in env logic — Vite injects env vars at build time.

## Migration Plan

Order is bottom-up (dependencies first):

1. **Create `src/types/index.ts`** — extract `FormData` interface
2. **Create `src/components/icons/`** — 16 SVG files + barrel `index.ts`
3. **Create `src/hooks/`** — `useScrollSpy.ts` and `useFormSubmit.ts`
4. **Create `src/components/ui/`** — 10 UI components (StatCard, QualityItem, etc.)
5. **Create `src/components/sections/`** — 10 section components (Header, Hero, About, etc.)
6. **Create `src/styles/main.css`** — copy + reorganize CSS
7. **Create `.env` + `.env.example`** — extract Formspree URL
8. **Create `src/App.tsx`** — wire hooks → props → sections
9. **Update `src/main.tsx`** — import from `./App` and `./styles/main.css`
10. **Delete** `AltiplanoCafeLanding.tsx` and `AltiplanoCafeLanding.css`
11. **`npm run build`** — verify zero errors

## Testing Strategy

| Layer | What | How |
|-------|------|-----|
| Build | TS compilation | `npm run build` — zero errors |
| Visual | Pixel-perfect rendering | Side-by-side with production |
| Form | POST to Formspree | Submit with valid data, verify `formState === 'success'` |
| Scroll | Hash updates on scroll | Scroll through sections, verify `location.hash` |
| Nav | Mobile menu open/close | Toggle hamburger, verify overlay renders |

## Migration / Rollback

No migration required. Rollback: `git checkout HEAD~1 -- src/` restores original structure.

## Open Questions

None — all decisions are mechanical extractions of existing code.
