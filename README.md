# CX Webform: Consumer Checking Onboarding

This project is a React-based single-page application (SPA) built with Vite. It serves as a collection of mobile-optimized onboarding flows and marketing scenarios specifically designed for SMS campaigns. 

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Vanilla CSS (`App.css`, `index.css`)
- **Iconography**: `lucide-react`

## Application Routes

The application contains several discrete views requested by the CX team, mapped to their specific routes:

* **Welcome Screen** (`/` - `Welcome.jsx`): The initial mobile landing page with routing capabilities based on the user's application status.
* **Enrollment Flow** (`/enrollment` - `Enrollment.jsx`): Mobile enrollment flow emphasizing digital banking features and Zelle integration.
* **Direct Deposit Setup** (`/finish-setup` - `FinishSetup.jsx`): Direct Deposit setup and Digital Wallet onboarding instructions.
* **Account Connectivity Guide** (`/connect-accounts` - `ConnectAccounts.jsx`): Account linking instructions with native mobile app downloads.
* **Voice Banking Marketing** (`/voice-banking` - `VoiceBanking.jsx`): Voice banking marketing setup with a one-click `tel:` protocol CTA.
* **Platform Pro Tips** (`/pro-tips` - `ProTips.jsx`): Pro tips on UI alerts, linking accounts, and card management.
* **Login Step-by-Step** (`/login-instructions` - `LoginInstructions.jsx`): Login checklist instructions for both mobile and online banking platforms.
* **Rewards Feature Highlight** (`/rewards-benefits` - `RewardsBenefits.jsx`): Highlight reel of checking account perks and benefits.
* **Rewards Navigation Guide** (`/access-rewards` - `AccessRewards.jsx`): Navigation instructions for finding the specific Rewards tile.

## Development

To run this project locally, ensure you have Node.js installed.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Architecture Notes

To adhere to DRY (Don't Repeat Yourself) principles, repeating elements like the Header, Footer, and App Store CTAs have been extracted into reusable components (`src/components/Header.jsx`, `src/components/Footer.jsx`, and `src/components/AppDownloads.jsx`). These components share dynamic configurations such as specific UTM URL variables to allow isolated tracking across different onboarding pathways.
