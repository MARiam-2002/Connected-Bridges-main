# Connected Bridges — Performance & Quality Improvements (2026)

## Summary of Changes

### 🚀 Performance

#### Code Splitting & Lazy Loading (App.tsx)
- All page components now use `React.lazy()` + `Suspense`
- Initial bundle size reduced significantly — pages load on-demand
- Added a smooth `PageLoader` spinner for Suspense fallback

#### Vite Build Config (vite.config.ts)
- Manual chunk splitting: `react-vendor`, `router`, `motion`, `i18n`, `swiper`, `forms`, `icons`
- Target `es2020` for modern browser optimizations
- esbuild minification (faster than terser)

#### Video Optimization (Hero.tsx)
- `preload="none"` — video doesn't block page load
- IntersectionObserver pauses video when hero is off-screen (saves CPU/battery)
- Respects `prefers-reduced-motion`: video stays paused if user prefers

#### Image Optimization
- All images: `loading="lazy"`, `decoding="async"`, explicit `width/height` to prevent CLS
- Hero poster preloaded via `<link rel="preload">` in index.html

#### Event Listeners
- Scroll listener in ScrollUp uses `{ passive: true }` — removes jank on scroll
- Cleanup on unmount to prevent memory leaks

#### Hooks
- `useMediaQuery`: shared `MediaQueryList` instances via a cache Map — no duplicate listeners
- `useInView`: respects `prefers-reduced-motion` — elements instantly visible if motion is reduced
- `Clients.tsx`: 5 `useMediaQuery` calls consolidated into 1 custom `useClientLayout` hook
- `useMemo` for chunked clients array

#### CSS
- `will-change: transform` on animated elements
- `font-display: swap` for Google Fonts
- `-webkit-font-smoothing: antialiased` for sharper text
- `text-rendering: optimizeSpeed` on body

### ♿ Accessibility (a11y)
- `aria-label` on all icon-only buttons
- `aria-hidden="true"` on decorative icons
- `role="region"` on Achievements section
- `focus-visible` styles for keyboard navigation
- Semantic HTML: `<header>`, `<nav>`, `<section>` already used; added `aria-label` attributes

### 🌐 HTML / SEO
- Fixed `theme-color` from black (#000000) to brand color (#184C57)
- `preconnect` to `neom.scene7.com` (video CDN)
- `dns-prefetch` for video CDN
- `fetchpriority="high"` on hero poster preload
- `color-scheme: light` meta tag

### 🧹 Code Quality
- `memo` on `Counter` component in Achievements — prevents re-renders
- Removed `hover:scale-102` (not a standard Tailwind class)
- Used `button` → `span` for non-interactive decorative arrow in ProjectCard
- `displayName` set on memoized components for React DevTools

### 🎨 CSS Enhancements
- CSS custom properties for transitions: `--transition-fast/base/slow`
- CSS custom properties for shadows: `--shadow-card`, `--shadow-card-hover`
- `.card-hover` utility class for consistent hover effects
- `.skeleton` class for future loading states
- `.lazy-image` fade-in class for progressively loaded images
- `@media (prefers-reduced-motion)` disables all animations

## Files Modified
- `vite.config.ts`
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/index.css`
- `src/hooks/useInView.ts`
- `src/hooks/useMediaQuery.ts`
- `src/sections/hero/Hero.tsx`
- `src/sections/achievements/Achievements.tsx`
- `src/sections/our-clients/Clients.tsx`
- `src/components/cards/ClientCard.tsx`
- `src/components/cards/ProjectCard.tsx`
- `src/components/scroll-up/ScrollUp.tsx`
