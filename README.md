# CX Webform: Consumer Checking Onboarding

This project is a React-based single-page application (SPA) built with Vite. It serves as a collection of mobile-optimized onboarding flows and marketing scenarios specifically designed for SMS campaigns. 

## 🚀 Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Vanilla CSS (`App.css`, `index.css`)
- **Iconography**: `lucide-react`

## 📱 Scenarios and Routes

The application contains several discrete views (scenarios) requested by the CX team, mapped to their specific routes:

* **Scenario 1.a & 2.a** (`/` - `Welcome.jsx`): The initial mobile landing page with routing capabilities based on the user's application status.
* **Scenario 3.a** (`/enrollment` - `Enrollment.jsx`): Mobile enrollment flow emphasizing digital banking features and Zelle integration.
* **Scenario 4.a** (`/finish-setup` - `FinishSetup.jsx`): Direct Deposit setup and Digital Wallet onboarding instructions.
* **Scenario 4.b** (`/connect-accounts` - `ConnectAccounts.jsx`): Account linking instructions with native mobile app downloads.
* **Scenario 5.a** (`/voice-banking` - `VoiceBanking.jsx`): Voice banking marketing setup with a one-click `tel:` protocol CTA.
* **Scenario 6.a** (`/pro-tips` - `ProTips.jsx`): Pro tips on UI alerts, linking accounts, and card management.
* **Scenario 6.b** (`/login-instructions` - `LoginInstructions.jsx`): Login checklist instructions for both mobile and online banking platforms.
* **Scenario 7.a** (`/rewards-benefits` - `RewardsBenefits.jsx`): Highlight reel of checking account perks and benefits.
* **Scenario 7.b** (`/access-rewards` - `AccessRewards.jsx`): Navigation instructions for finding the specific Rewards tile.

## 🛠️ Development

To run this project locally, ensure you have Node.js installed.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Architecture Notes

To adhere to DRY (Don't Repeat Yourself) principles, repeating elements like the Header, Footer, and App Store CTAs have been extracted into reusable components (`src/components/Header.jsx`, `src/components/Footer.jsx`, and `src/components/AppDownloads.jsx`). These components share dynamic configurations such as specific UTM URL variables to allow isolated tracking across different onboarding pathways.
