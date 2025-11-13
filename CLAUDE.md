# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev        # Start development server on localhost:3000
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Architecture

This is a Next.js 14 App Router marketing site for County Medic, an enterprise clinical decision support system for fire department EMS.

### Page Structure

Single-page application with vertical sections loaded in `app/page.tsx`:
- Navigation (sticky header with mobile hamburger menu)
- Hero (animated headline with dual CTAs)
- ClientLogos
- StatsGrid
- Features (8-column grid, uses GlassCard)
- CaseStudies (3-column testimonials)
- SecuritySection (compliance badges)
- EnterpriseContactForm
- Footer (5-column grid)

### Component Architecture

**Client Components**: All components use `'use client'` directive as they contain interactivity (hover states, animations, form handling, mobile menu).

**Reusable Components**:
- `GlassCard.tsx`: Glassmorphic card wrapper with responsive padding (`p-5 sm:p-6 md:p-8`). Used by Features and implicitly by other sections.
- `AnimatedText.tsx`: Text animation component used in Hero headlines.

**Layout System**:
- Global layout in `app/layout.tsx` with viewport configuration and gradient background
- All sections use `max-w-7xl mx-auto` container with responsive horizontal padding (`px-4 sm:px-6`)

### Styling System

**Tailwind Configuration** (`tailwind.config.ts`):
- Custom enterprise color palette: navy (primary), red (LA County Fire safety red), orange, gold
- Custom font sizes: 12px (xs) through 60px (6xl)
- Limited spacing scale: 1px through 32px
- Custom shadows optimized for glassmorphic UI
- Font stack: FKGroteskNeue (loaded from Perplexity CDN) → Inter → system fonts

**Global Styles** (`app/globals.css`):
- Base font size: 16px (WCAG compliant)
- Gradient background uses `100dvh` (dynamic viewport height for mobile browsers)
- CSS custom properties for enterprise semantic colors

### Mobile-First Responsive Design

This site targets 80% mobile viewership. All components implement mobile-first responsive patterns:

**Breakpoints** (Tailwind defaults):
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

**Key Mobile Patterns**:
- Text scaling: Start smaller on mobile (e.g., `text-3xl sm:text-4xl md:text-5xl lg:text-6xl`)
- Section padding: `py-16 md:py-24` (compressed vertical spacing on mobile)
- Card padding: `p-5 sm:p-6 md:p-8` via GlassCard component
- Touch targets: Minimum `py-4` (48px) on interactive elements
- Mobile navigation: Hamburger menu with dropdown (not slide-out drawer)
- Button stacking: `flex-col sm:flex-row` with full-width on mobile
- Grid compression: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` patterns

### Three.js Integration

Dependencies installed for future 3D visualization features:
- `@react-three/fiber` (React renderer for Three.js)
- `@react-three/drei` (helpers/abstractions)
- `three` (core 3D library)

Configured in `next.config.js` with `transpilePackages` to handle ESM modules.

## Design Tokens

**Primary Brand Colors**:
- Navy: `#001935` (backgrounds), `#002855` (surfaces)
- Safety Red: `#C1272D` (CTAs, accents) - matches LA County Fire branding
- Slate: `#1E3A5F` (secondary surfaces)

**Typography**:
- Headlines: Bold, tight tracking, responsive scaling
- Body: 16px base (mobile and desktop)
- UI elements: 14px (`text-sm`) on desktop, 16px (`text-base`) on mobile

**Glassmorphism Pattern**:
- Background: `bg-white/5`
- Border: `border-white/10`
- Hover border: `border-red/30`
- Backdrop blur on Navigation only

## Footer Branding

`Footer.tsx` includes enhanced branding section at the top with:
- **Brand Header**: Company name with prominent red accent dot (`w-2 h-2 bg-red rounded-full`)
- **Tagline**: "Clinical Decision Support for Fire Department EMS"
- **Credentials Section**:
  - Mission: "Enhance emergency medical decision-making"
  - Trust: "Enterprise-grade security & compliance"
  - Formatted as flexible columns (single column on mobile, flex-row on sm+)
- **Footer Grid**: 3-column layout (Company, Legal, Contact sections) with staggered animations
- **Hover Effects**: Footer links animate on hover with spring transition (x offset + color change)
- **Accessibility**: Motion reduced for users with prefers-reduced-motion preference
- **Visual Elements**:
  - Animated divider line with scaleX animation
  - Staggered fade-in animations for columns
  - Motion variants respect `useReducedMotion()` hook

## FAQ Component

`FAQ.tsx` provides an accordion-style frequently asked questions section with:
- **Structure**: 4 questions displayed using GlassCard wrapper for consistent styling
- **Current Questions**:
  1. How much will it cost?
  2. Which devices and platforms are supported?
  3. Is County Medic HIPAA compliant?
  4. How can my department get involved?
- **Interactivity**:
  - Click to expand/collapse answers (state managed with `useState`)
  - Chevron icon rotates 180° when expanded
  - Smooth height/opacity transitions (duration: 300ms)
- **Accessibility**:
  - ARIA attributes: `aria-expanded`, `aria-controls` for screen readers
  - Semantic button elements for question headers
  - Focus indicators inherited from GlassCard styling

## Form Handling

`EnterpriseContactForm.tsx` includes honeypot field (`bot-field`) for spam prevention. Form is currently frontend-only with no backend submission endpoint configured.

## Navigation Behavior

- Sticky header with backdrop blur (md:backdrop-blur-md), dark background (bg-navy-900/98)
- **Brand Identity**:
  - Medical cross icon with gradient background (from-red to-red-dark, rounded-lg, shadow-lg)
  - Icon responsive sizing: `w-8 h-8 sm:w-9 sm:h-9`
  - Brand text enhanced with font-bold and white gradient styling
  - Logo/brand link includes hover animation (scale: 1.08, rotate: 5°)
- **Desktop Navigation**:
  - Horizontal nav links with hover states (bg-white/5, text-white)
  - Enhanced touch targets: `px-4 py-3` (48px minimum)
  - Focus indicators: `focus:ring-2 focus:ring-red/50`
  - CTA button with red background and scale hover effect
- **Mobile Navigation**:
  - Hamburger menu button with enhanced touch target: `px-5 py-4`
  - Icon sizing: `w-7 h-7` (28px, meeting 44px+ minimum with padding)
  - Menu state management with `useState`
  - Dropdown animation (height collapse/expand with staggered children)
  - Clicking nav links closes mobile menu automatically
  - Accessibility features:
    - ARIA labels: `aria-label`, `aria-expanded`, `aria-controls`
    - Focus trap in mobile menu (Tab key loops through focusable elements)
    - Escape key closes menu and restores button focus
    - Focus indicators on all interactive elements (focus:ring-2 focus:ring-red/50)

## Accessibility Improvements

Enhanced focus and keyboard navigation throughout the site:
- **Touch Targets**: All interactive elements meet or exceed 44px minimum height
  - Navigation links: `px-4 py-3` (height 48px)
  - Mobile menu button: `px-5 py-4` (height 48px)
  - Footer links: `text-sm inline-block` (respects minimum line-height)
- **Focus Indicators**: Consistent red ring on focus across navigation and form elements
  - Pattern: `focus:outline-none focus:ring-2 focus:ring-red/50`
- **Keyboard Navigation**:
  - Navigation: Escape key closes mobile menu
  - Mobile menu: Tab key creates focus trap (loops through focusable elements)
  - Mobile menu: Focus returns to menu button when closed
- **Semantic HTML**: Button elements for interactive controls, proper ARIA attributes
- **Motion Preferences**: All components respect `useReducedMotion()` hook
  - Animations disabled for users with prefers-reduced-motion
  - Transitions have 0 duration when motion is reduced

## Key Implementation Notes

1. **Viewport Configuration**: Defined in `app/layout.tsx` as separate `viewport` export (Next.js 14 pattern)
2. **Dynamic Viewport Units**: Use `100dvh` instead of `100vh` to handle mobile browser chrome
3. **Animation**: Hero uses `AnimatedText` component with configurable delays; all motion respects accessibility preferences
4. **Scroll Behavior**: Hero CTA buttons scroll to `#signup` section smoothly
5. **Accessibility**: All interactive elements meet 44px touch target minimum, enhanced keyboard navigation with focus traps
6. **Motion Handling**: Use `useReducedMotion()` from framer-motion to respect user preferences (implemented in Navigation, Footer, FAQ)
7. **Performance**: React Strict Mode enabled, no hydration mismatches expected
