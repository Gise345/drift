# Drift in Cayman 🚕

A taxi-only booking and dispatch platform for licensed taxi operators in the Cayman Islands.

## 🏝️ About

Drift connects residents and visitors with licensed taxi operators for safer, faster access to transport across Grand Cayman, Cayman Brac, and Little Cayman.

## 🚀 Tech Stack

- **React Native** with Expo
- **TypeScript**
- **Expo Router** for navigation
- **Clerk** for authentication
- **Stripe** for payments
- **Google Maps** for location services
- **NeonDB** (PostgreSQL) for database
- **Zustand** for state management
- **TailwindCSS** (NativeWind) for styling

## 📱 Features

- Real-time taxi booking and tracking
- Regulated fare display
- Pre-payment support
- Live driver ETA
- Trip sharing for safety
- Airport/event queue management
- Driver permit verification

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI
- EAS CLI

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/Gise345/Drift.git
cd Drift

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm start
\`\`\`

### Environment Variables

Create a `.env` file with:

\`\`\`env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=
DATABASE_URL=
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
\`\`\`

## 📄 License

Private - All rights reserved

## 👥 Contact

**Drift in Cayman**
- Email: contact@drift.ky
- Website: drift.ky