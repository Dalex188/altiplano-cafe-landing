# Proposal: Refactor Component Separation

## Intent

Restructure the 733-line monolithic landing page into a modular architecture — separate hooks, sections, UI components, types, icons — with zero visual or behavioral changes. Reduce cognitive load per file and improve maintainability.

## Scope

### In Scope
- 16 SVGs → `src/components/icons/` + barrel
- `useScrollSpy`, `useFormSubmit` → `src/hooks/`
- 8 sections → `src/components/sections/`
- 9 UI components → `src/components/ui/`
- Shared types → `src/types/index.ts`
- CSS → `src/styles/main.css` (reorganized)
- `VITE_FORMSPREE_ENDPOINT` → `.env`
- Rename entry to `App.tsx`, update `main.tsx`

### Out of Scope
- CSS modules/CSS-in-JS/per-component styles
- Test suite, routing, lazy loading
- Any visual or content change

## Capabilities

### New Capabilities
None — pure refactor, no new behavior.

### Modified Capabilities
None — requirements unchanged.

## Approach

1. Extract types → `src/types/index.ts`
2. Extract SVG icons → `src/components/icons/` + barrel
3. Extract hooks → `src/hooks/`
4. Extract sections → `src/components/sections/`
5. Extract UI components → `src/components/ui/`
6. Move CSS → `src/styles/main.css`
7. Add `.env` with `VITE_FORMSPREE_ENDPOINT`
8. Rename to `App.tsx`, wire hooks → component props
9. Verify build + visual parity

## Affected Areas

| Area | Impact |
|------|--------|
| `src/AltiplanoCafeLanding.tsx` | Deleted |
| `src/AltiplanoCafeLanding.css` | Deleted |
| `src/App.tsx` | Created |
| `src/styles/main.css` | Created |
| `src/main.tsx` | Modified (imports) |
| `src/types/index.ts` | Created |
| `src/hooks/useScrollSpy.ts` | Created |
| `src/hooks/useFormSubmit.ts` | Created |
| `src/components/sections/*.tsx` | Created (8 files) |
| `src/components/ui/*.tsx` | Created (9 files) |
| `src/components/icons/*.tsx` | Created (16 + barrel) |
| `.env` | Created |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Import path errors | Low | TypeScript catches all |
| CSS selector breakage | Low | No selector changes |
| Visual regression | Low | Screenshot comparison |
| Missed ref in main.tsx | Low | Build fails if wrong |

## Rollback Plan

Revert to previous commit — all changes are file extractions, no data migration. `git checkout HEAD~1 -- src/` restores the original structure.

## Dependencies

- Existing Formspree endpoint (same URL, now via env var)

## Success Criteria

- [ ] `npm run build` succeeds with zero TypeScript errors
- [ ] Page renders identically (no visual regression)
- [ ] All 16 icons render correctly
- [ ] Contact form submission works end-to-end
- [ ] Scroll spy updates URL hash on section scroll
- [ ] Mobile nav overlay functions correctly
