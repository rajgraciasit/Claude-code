# 11SI Website Project

## Company Details
- **Company**: 11SI (cybersecurity managed services reseller)
- **Domain**: 11si.com
- **Email**: info@11si.com
- **Phone**: +91-9537384707
- **Location**: Ahmedabad, India

## Design Reference
- Design closely replicates **ACPL** (www.acpl.com) in style/layout but with a **blue color scheme** (ACPL uses red #E41F26)
- User noted: "somehow blue color is not looking good but we can keep for now and can change later with different combination"
- Font: Satoshi from Fontshare CDN (matching ACPL)
- ACPL computed styles reference: bodyFont "Satoshi, sans-serif", h1Weight 500, h1Size 60px, btnRadius 8px, --color-primary #E41F26, --offWhite-color #fafaf7

## Key Naming
- Product suite is called **"DefendPro"** (NOT "CyberCare Pro")
- Primary CTA: **"Schedule a Consultation"** → links to #contact

## Technology Vendors
Microsoft, CrowdStrike, Fortinet, Sophos, Palo Alto, Okta, Rapid7, Cloudflare

## Architecture
- Static HTML5/CSS3/JavaScript site (no framework)
- `index.html` — main homepage
- `css/styles.css` — all styles
- `js/main.js` — animations and interactivity

### Key Features
- Canvas-based rotating wireframe globe animation (navy colors on white bg)
- CSS infinite marquee for vendor names (text-based, needs logo SVGs later)
- Lifecycle sticky scroll section (position: sticky, 400vh wrapper) — 4 phases: Assess, Architect, Implement, Manage/Defend
- Services grid (6 cards)
- SVG bezier curve hub flow diagram with stroke-dasharray/dashoffset animation for Technology Partners
- Radware live threat map iframe with CSS overlays hiding internal UI
- Stats gradient bar with animated counters
- Scroll-reveal animations via IntersectionObserver

### V3 Style (Current — Matching ACPL Patterns)
- Floating card-style navbar (rounded, centered, backdrop-blur)
- Grid background pattern on hero, lifecycle, partners sections
- Section label decorative lines (── LABEL ──)
- Medium font-weight headings (500 instead of 800)
- Squared buttons with 8px radius
- Gradient stats bar with dividers instead of separate cards
- White/light footer with dark text, underlined column headings
- Bordered service tags (transparent with accent border)
- Arrow SVG on primary CTA button

## Git
- **Branch**: `claude/11si-website-redesign-1ek4uc`
- Always push to this branch

## Version History
- **V1** (f45f93b): Initial homepage build with full SEO
- **V2** (e0239a5): White hero, sticky scroll lifecycle, hub flow diagram, Radware threat map, Satoshi font, vendor marquee, hub animation fix
- **V3** (d163918): Style updates matching ACPL design patterns — floating nav, grid bg, section labels, medium weights, squared buttons, gradient stats, white footer

## Pending Work
- Build inner pages (Services, Solutions, About Us, Contact Us)
- Replace text vendor names with actual vendor logo SVGs/images in marquee
- Vercel deployment + custom domain (11si.com) DNS setup
- Potentially change color scheme (blue → TBD)

## Playwright Screenshots
- Chromium path: `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
- playwright-core v1.63.0 installed
- Use `ignoreHTTPSErrors: true` in browser context
- Use `waitUntil: 'domcontentloaded'` (not networkidle)
- ACPL is a React SPA — must use Playwright (not WebFetch) to capture it

## ACPL Reference Screenshots (in scratchpad)
Screenshots taken from www.acpl.com for design reference: hero, vendors, services, partners, mid, soc, footer, bottom sections
