# 11SI Website Project

## Company Details
- **Company**: 11SI (cybersecurity managed services reseller)
- **Domain**: 11si.com
- **Email**: info@11si.com
- **Phone**: +91-9537384707
- **Location**: Ahmedabad, India

## Design Reference
- Design closely replicates **ACPL** (www.acpl.com) in style/layout with **ACPL's exact red color scheme** (#E41F26)
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
- Canvas-based rotating wireframe globe animation (red-tinted, larger radius 0.48)
- CSS infinite marquee with actual brand logo PNG images (greyscale filter, 50s animation)
- 3D isometric card stack for Delivery Architecture section (4 stacked 3D cards: purple Assess, teal Implement, gold Manage, red Defend) — scroll-driven transitions with transparent backgrounds and drop-shadow
- Services grid (6 cards)
- SVG bezier curve hub flow diagram with stroke-dasharray/dashoffset animation for Technology Partners
- Radware live threat map iframe with CSS overlays hiding internal UI
- Stats gradient bar with animated counters
- Scroll-reveal animations via IntersectionObserver

### V4 Style (Current — ACPL Red Theme)
- ACPL's exact red color scheme (#E41F26) — accent, buttons, globe, gradients
- Floating card-style navbar (rounded, centered, backdrop-blur)
- Grid background pattern on hero, lifecycle, partners sections
- Section label decorative lines (── LABEL ──)
- Medium font-weight headings (500 instead of 800)
- Squared buttons with 8px radius
- 3D isometric card stack for lifecycle (replacing old timeline panels)
- SVG vendor logos in marquee and Technology Partners hub (2 rows of 4)
- Larger wireframe globe (0.48 radius) with red dots/connections
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
- **V4**: ACPL red color scheme, SVG vendor logos in marquee & partners, 3D isometric card stack for lifecycle, larger globe, 2-row partner grid
- **V5**: Replaced SVG vendor logos with actual brand PNG images in marquee & partners
- **V6** (6ff205c): Fixed Fortinet logo, removed red arrow pseudo-elements from partner boxes, replaced DA card SVG icons with 3D isometric images
- **V7** (df65bae): Fixed DA card clipping (transparent bg, overflow visible, object-fit contain), converted Palo Alto logo .webp→.png, cropped all vendor logos to remove whitespace for proper rendering at small sizes
- **V8**: Replaced Cloudflare logo with correct brand logo (orange cloud + CLOUDFLARE text, 1125x469)
- **V9**: Built 6 vendor solution pages (Microsoft, Fortinet, CrowdStrike, Palo Alto, Okta, Cloudflare) in parallel using multi-agent approach. Updated navbar and footer links to point to solution pages.

## Vendor Logo Images
All vendor logos stored as PNG in `images/` folder, cropped to content area (no excessive whitespace):
- `crowdstrike-logo.jpg` (2000x1125)
- `fortinet-logo.png` (450x78, red grid + FORTINET text)
- `sophos-logo.png` (1827x316, blue shield + text)
- `paloalto-logo.png` (569x128, orange diamond + text)
- `rapid7-logo.png` (569x120)
- `cloudflare-logo.png` (1125x469, orange cloud + CLOUDFLARE text)

## Delivery Architecture Card Images
3D isometric cards in `images/` folder with transparent/black backgrounds:
- `da-assess.png` — Purple card with fingerprint/key (01)
- `da-implement.png` — Teal card with hexagons/servers (02)
- `da-manage.png` — Gold card with gears/globes (03)
- `da-defend.png` — Red card with shield/sword (04)

## Solution Pages
Vendor solution pages in `solutions/` folder, each modeled after ACPL's vendor page structure with 11SI branding:
- `solutions/microsoft.html` — Microsoft Security solutions
- `solutions/fortinet.html` — Fortinet Security Fabric solutions
- `solutions/crowdstrike.html` — CrowdStrike Falcon platform solutions
- `solutions/palo-alto.html` — Palo Alto Networks solutions
- `solutions/okta.html` — Okta identity solutions
- `solutions/cloudflare.html` — Cloudflare connectivity cloud solutions

Each page includes: hero, partnership details, platform overview, challenges, solution areas, delivery approach, use cases, FAQ, and CTA. Sections removed from ACPL: WHY ACPL, Professional Services, Certifications & Partner Status. All ACPL text replaced with 11SI.

## Pending Work
- Build Sophos and Rapid7 solution pages
- Build inner pages (Services, About Us, Contact Us)
- Vercel deployment + custom domain (11si.com) DNS setup

## Playwright Screenshots
- Chromium path: `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
- playwright-core v1.63.0 installed
- Use `ignoreHTTPSErrors: true` in browser context
- Use `waitUntil: 'domcontentloaded'` (not networkidle)
- ACPL is a React SPA — must use Playwright (not WebFetch) to capture it

## ACPL Reference Screenshots (in scratchpad)
Screenshots taken from www.acpl.com for design reference: hero, vendors, services, partners, mid, soc, footer, bottom sections
