# CX Webform: Consumer Checking Onboarding

Mobile-optimized Next.js landing pages for WaFd Bank's SMS drip campaign. Users tap a link in a text message and land directly on the page — the primary goal is to render the headline and CTA above the fold on a mobile screen without scrolling.

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 with custom design tokens |
| **Icons** | `lucide-react` |
| **Font** | `next/font/google` — Open Sans (self-hosted, no render blocking) |
| **Deployment** | Vercel |

## Application Routes

All routes are file-system mapped under `src/app/`:

| Route | Description |
|---|---|
| `/` | Welcome screen — dynamic greeting via `useDynamicText` |
| `/enrollment` | Online banking enrollment CTA with accordion for required docs |
| `/finish-setup` | Direct deposit setup and digital wallet (Apple/Google Pay) instructions |
| `/connect-accounts` | Account linking guide with app download CTA |
| `/voice-banking` | Voice banking feature with one-tap `tel:` CTA |
| `/pro-tips` | Alerts, account linking, and card management tips |
| `/login-instructions` | Step-by-step first-login checklist |
| `/rewards-benefits` | Checking account perks and benefits highlight |
| `/access-rewards` | Navigation guide for the Rewards tile in-app |
| `/new-account-details` | Personalized account details page — renders `@{input_last4digits}` and `@{input_productname}` injected by the SMS platform |
| `/download` | Direct app download page (App Store / Google Play) |

## Architecture

### Components

| Component | Purpose |
|---|---|
| `PageLayout` | Shell: Header + banner + content area + Footer |
| `Header` | WaFd logo + responsive hamburger nav (ARIA-compliant) |
| `Footer` | Legal disclaimer, address, copyright |
| `AppDownloads` | App Store / Google Play badges with UTM-tracked campaign links |
| `PrimaryButton` | CTA button — accepts `href` (external) or `to` (internal Next.js `Link`) |
| `EnrollmentAccordion` | Accessible expand/collapse for enrollment requirements (ARIA `aria-expanded` + `aria-controls`) |
| `scenarios/WelcomeUnregistered` | Dynamic welcome page consuming `useDynamicText` |

### Utilities

| Utility | Purpose |
|---|---|
| `utils/dynamicText.ts` | Parses `@{token}` placeholders injected by the Relay SMS platform |
| `utils/openGraph.ts` | `ogImage(url, alt)` — generates standard 1200×630 OG image objects for page metadata |

### Design Tokens (`src/app/globals.css`)

```
wafd-green   #009639    headings, primary accents
wafd-dark    #202324    body text, table labels
wafd-text    #202324    general text
wafd-gray    #505759    secondary / muted text
wafd-blue    #2563EB    links
wafd-header  #004945    header background
wafd-border  #E5E7EB    dividers
```

### OG Images (`public/og/`)

Static images served at stable paths for SMS link preview cards (iMessage, Android Messages). One image per route; referenced via `ogImage()` in each page's `export const metadata`.

## Mobile-First Layout

SMS recipients land directly on these pages from a phone. Layout decisions prioritize above-the-fold content:

- **Banner**: 80px mobile / 240px tablet / 280px desktop
- **Header**: 64px fixed height
- **Two-column pages**: Content div appears first in DOM order so the headline and CTA render before the hero image on single-column mobile. CSS Grid naturally places the first child in the left column on desktop — no `order-*` classes needed.
- **Touch targets**: App Store / Google Play links enforce `min-h-[48px]`
- **Viewport**: `maximumScale: 1` prevents iOS auto-zoom on tap

## Development

```bash
npm install       # install dependencies
npm run dev       # start dev server with Turbopack
npm run build     # production build
```

Requires Node.js 18+. Environment variable `NEXT_PUBLIC_BASE_URL` sets the base URL for `metadataBase`; falls back to `VERCEL_URL` then `localhost:3000`.
