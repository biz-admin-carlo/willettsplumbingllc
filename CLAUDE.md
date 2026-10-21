cat > CLAUDE.md << 'EOF'
# biz-template-v5 — Build Instructions for Claude Code

## Stack
- Next.js 16, React 19, Tailwind CSS v4, App Router
- Google Fonts: Barlow Condensed (400,700,900) + DM Sans (400,500,600)
- No TypeScript. No src/ directory.

## Design: V1 — Services & Construction (ApexBuild)

### Identity
- Accent color: #f97316 (orange-500)
- Dark bg: #0d1117 nav, #1a2535 hero gradient, #161b22 cards
- Light bg: #fff7ed hero gradient, #f9fafb sections, white cards
- Font headings: Barlow Condensed (font-barlow), bold/black weight, tight tracking
- Font body: DM Sans (font-dm)
- Dark mode is DEFAULT. Toggle stored in localStorage key "theme".

### Folder structure
components/v1/Navbar.js
components/v1/Hero.js
components/v1/Services.js
components/v1/About.js
components/v1/Reviews.js
components/v1/CTA.js
components/v1/Footer.js
config/v1.config.js
context/ThemeContext.js
app/page.js
app/layout.js
app/globals.css

### Section specs

**Navbar**
- Sticky top, z-50
- Left: orange vertical bar + APEX(white)BUILD(orange) in Barlow Condensed
- Desktop: nav links + dark/light pill toggle + orange CTA button
- Mobile: logo centered, hamburger right, toggle left
- Mobile menu: full-width slide-down with links + full-width CTA button
- Border-bottom: 2px solid orange-500

**Hero**
- Section id="home"
- Soft radial blobs top-right and bottom-right in orange-500/5
- Green dot badge: "LICENSED & INSURED — SERVING METRO AREA"
- H1: three lines, middle line in orange-500, Barlow Condensed font-black text-5xl md:text-7xl lg:text-8xl leading-none
- Subtext: DM Sans, gray-600 dark:white/65
- Two CTA buttons: solid orange primary, transparent bordered secondary
- Stats row: 3 items with orange value + muted label
- Light mode hero bg: gradient from #fff7ed to #fef3c7
- Dark mode hero bg: gradient from #0d1117 to #1a2535

**Services**
- Section id="services"
- bg-gray-50 dark:bg-[#161b22]
- Centered label + title
- 2-col mobile, 3-col desktop grid
- Each card: white dark:bg-[#1f2937], 2px border transparent → orange-500 on hover
- Card: emoji (text-3xl) + bold title + muted desc

**About**
- Section id="about"
- bg-orange-50 dark:bg-[#0d1117]
- 1-col mobile, 2-col desktop
- Left: label, two-line H2 (second line orange), desc paragraph, checklist with orange ✓
- Right: founder card — bg-white dark:bg-[#161b22], border orange-500/20, rounded-xl
  - Orange circle avatar with emoji, name in Barlow, role in orange, italic quote

**Reviews**
- bg-white dark:bg-[#161b22]
- Centered label + title
- 1-col mobile, 3-col desktop
- Each card: bg-gray-50 dark:bg-[#1f2937], orange stars, italic quote, bold name, muted project label

**CTA**
- Section id="contact"
- bg-orange-500 always (no dark/light switch)
- Centered H2 white Barlow font-black text-5xl md:text-6xl
- Two buttons: white bg with orange text, transparent with white border

**Footer**
- bg-[#060a0e] always
- Flex row: logo left, links center, copyright right
- All text white/30, logo APEX(white)BUILD(orange)

### Dark/light toggle
- ThemeContext in context/ThemeContext.js
- Reads/writes localStorage key "theme"
- Adds/removes class "dark" on <html>
- Pill toggle: 44px wide, 24px tall, background orange in dark / gray in light
- Circle inside slides left↔right with 🌙 or ☀️ emoji

### SEO (in app/layout.js)
- metadata.title, description, keywords, openGraph, twitter, robots, alternates.canonical
- Inline script in <head> to apply saved theme before hydration (no flash)
- lang="en" on <html>
- suppressHydrationWarning on <html>

### Config-driven
- All text content, links, labels in config/v1.config.js
- Components import from @/config/v1.config.js
- No hardcoded content inside components

### Tailwind v4 notes
- @import "tailwindcss" in globals.css (not @tailwind directives)
- @variant dark (&:where(.dark, .dark *)) for class-based dark mode
- Custom font utility classes .font-barlow and .font-dm defined in globals.css

## General rules
- Mobile-first: base styles mobile, md: breakpoint for desktop
- transition-colors duration-300 on all bg/text that change between themes
- No inline styles — Tailwind classes only
- All components are server components unless they need useState/useEffect → add 'use client'
- Smooth scroll: html { scroll-behavior: smooth }
EOF