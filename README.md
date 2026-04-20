# CX Webform: Consumer Checking Onboarding

This project is a React-based Next.js application. It serves as a collection of mobile-optimized onboarding flows and marketing scenarios specifically designed for SMS campaigns. 

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (`.tsx`)
- **Styling**: Tailwind CSS & Custom Themes
- **Iconography**: `lucide-react`

## Application Routes

The application contains several discrete views requested by the CX team, automatically mapped using Next.js file-system routing (`src/app/`):

* **Welcome Screen** (`/`): The initial mobile landing page.
* **Enrollment Flow** (`/enrollment`): Mobile enrollment flow emphasizing digital banking features and Zelle integration.
* **Direct Deposit Setup** (`/finish-setup`): Direct Deposit setup and Digital Wallet onboarding instructions.
* **Account Connectivity Guide** (`/connect-accounts`): Account linking instructions with native mobile app downloads.
* **Voice Banking Marketing** (`/voice-banking`): Voice banking marketing setup with a one-click `tel:` protocol CTA.
* **Platform Pro Tips** (`/pro-tips`): Pro tips on UI alerts, linking accounts, and card management.
* **Login Step-by-Step** (`/login-instructions`): Login checklist instructions for both mobile and online banking platforms.
* **Rewards Feature Highlight** (`/rewards-benefits`): Highlight reel of checking account perks and benefits.
* **Rewards Navigation Guide** (`/access-rewards`): Navigation instructions for finding the specific Rewards tile.

## Development

To run this project locally, ensure you have Node.js installed.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server (runs with Turbopack):
   ```bash
   npm run dev
   ```
3. To trigger a production build:
   ```bash
   npm run build
   ```

## Architecture Notes

To adhere to DRY (Don't Repeat Yourself) principles, repeating elements like the Header, component containers, and Store CTAs have been extracted into reusable components (`src/components/Header.tsx`, `src/components/PageLayout.tsx`, and `src/components/AppDownloads.tsx`). 

These modules have been configured with TypeScript interfaces mapping directly to strict Figma branding bounds (e.g. `wafd-green`, vector UI badges) to ensure globally cohesive, type-safe layouts across the Next.js footprint.
