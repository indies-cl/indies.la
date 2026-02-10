# Plata Page Design

**Date:** 2026-02-05
**Page:** `/plata` - Funding directory for community

## Overview

A beautiful, eye-catching directory page where the community can search and discover funding enterprises, groups, venture capitals, grants, and funds. The directory includes financing options and grants & funds available in Chile and Latin America (Argentina, Colombia, Mexico, Uruguay, Brazil, etc.).

## Page Structure

Two main sections displayed vertically:
1. **Financing** - Loans, venture capital, equity financing
2. **Grants & Funds** - Grants, scholarships, non-dilutive funding

Each section contains a grid of funding opportunity cards.

## Data Model

Each funding opportunity contains:
- `nombre`: string - name of the opportunity
- `proveedor`: string - company/group providing the funding
- `monto`: string - amount or range offered (e.g., "$50k-$100k")
- `descripcion`: string - brief 1-2 line description
- `tipo`: "financing" | "fondo" | "grant" - funding type
- `lugar`: "chile" | "latinoamerica" - geographic coverage
- `url`: string - link to official website

## Visual Design

### Card Component
- **Base:** `bg-bg-2 border border-ui rounded p-4 hover:border-ui-2`
- **Nombre:** `text-2xl font-sans text-tx`
- **Proveedor:** `text-xl text-og` (brand color for emphasis)
- **Monto:** `text-xl font-mono text-tx` (monospace for financial values)
- **Descripción:** `text-xl text-tx-2 lowercase` (muted text)
- **Tipo badge:** `bg-bg border border-ui text-tx-2 px-2 py-1`
- **Lugar badge:** `bg-bg border border-ui text-tx-2 px-2 py-1`
- **Link:** `text-og underline` with `target="_blank" rel="noopener noreferrer"`

### Layout
- **Container:** `space-y-8 p-4 max-w-6xl mx-auto`
- **Grid:** `grid md:grid-cols-2 lg:grid-cols-3 gap-4`
- **Section spacing:** `space-y-8` between Financing and Grants & Funds

### Typography
- Headings: `font-sans text-2xl text-tx`
- Body text: `font-serif text-xl lowercase`
- Financial values: `font-mono text-xl`

### Colors
Use project palette only:
- `bg`: main background
- `bg-2`: card background
- `ui`: borders
- `ui-2`: hover borders
- `tx`: primary text
- `tx-2`: muted text
- `og`: brand color (provider names, links)

## Component Architecture

```
src/pages/
├── plata.astro (Spanish)
└── en/plata.astro (English)

src/components/pages/
└── PlataPage.tsx
    ├── Hero (intro section)
    ├── FundingSection (title + grid)
    │   └── FundingCard (individual card)
    └── funding data constants
```

### Components
- **PlataPage**: Main container, handles i18n, renders sections
- **Hero**: Introductory section with page description
- **FundingSection**: Renders title and grid of cards for a category
- **FundingCard**: Renders individual funding opportunity, memoized

## Internationalization

Text keys in `src/locales/es.json` and `src/locales/en.json`:

```json
{
  "plata": {
    "title": "plata - indies.la",
    "metaDescription": "directorio de financiamiento para proyectos indie en chile y latinoamerica",
    "hero": {
      "heading": "buscando plata para tu proyecto?",
      "intro": "acá encontrarás financiamiento, fondos y grants disponibles en chile y latinoamerica"
    },
    "financing": "financing",
    "grantsAndFunds": "grants & funds",
    "badges": {
      "financing": "financiamiento",
      "fondo": "fondo",
      "grant": "grant",
      "chile": "chile",
      "latinoamerica": "latinoamerica"
    },
    "visitSite": "visitar sitio"
  }
}
```

## Performance

- **Memoization**: `FundingCard` and `FundingSection` memoized with `React.memo`
- **Static data**: No network requests, all data hardcoded
- **Client-side hydration**: `client:load` for interactive features
- **Optimized re-renders**: Only language prop changes trigger re-render

## Accessibility

- External links include `aria-label` attributes
- Semantic HTML structure (`<article>` for cards, `<section>` for categories)
- Proper contrast ratios with project color palette
- Keyboard navigation for card links
- Screen reader friendly with descriptive labels

## Error Handling

As a static page with hardcoded data:
- TypeScript validates data structure at compile time
- All fields required in data model
- Link validation optional for future API integration
- No loading states needed (data is local)

## Future Enhancements

Potential improvements for later iterations:
- Search/filter functionality
- Sort by amount, date, or provider
- Application deadline tracking
- User-submitted funding opportunities
- API-based data management
- Favorites/bookmarks system
