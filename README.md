<div align="center">
  <img src="working_ss/dashboard.png" alt="Rewards Platform Banner" width="1280"/>

  # Rewards Platform System
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC.svg)](https://tailwindcss.com/)
  [![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.0.0-764ABC.svg)](https://redux-toolkit.js.org/)
  [![Stripe](https://img.shields.io/badge/Stripe-API-6772E5.svg)](https://stripe.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

## ✨ Features

<!-- <div align="center">
  <img src="public/features-demo.gif" alt="Features Demo" width="600"/>
</div> -->
![Coffee Animation](working_ss/coffee-animation.gif)
![Points Animation](working_ss/points-animation.gif)

- 💰 **Points Management**: Earn and spend points through various activities
- 💳 **Secure Payments**: Integrated Stripe payment processing
- ✨ **Elegant Animations**: Smooth reward animations using Framer Motion
- 📊 **Real-time Analytics**: Track spending patterns and reward metrics
- 📱 **Responsive Design**: Seamless experience across all devices

## 🚀 Working
<!-- 
<video src="working_ss/coffee-animation.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

<video src="working_ss\points-animation.mp4" controls width="800">
  Your browser does not support the video tag.
</video>

<video src="working_ss\transaction-animation.mp4" controls width="800">
  Your browser does not support the video tag.
</video> -->
![Transaction Animation](working_ss/transaction-animation.gif)



## 🔨 Tech Stack

- **Frontend**: React.js, TailwindCSS
- **State Management**: Redux Toolkit
- **Payments**: Stripe API
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/oneshikaa/rewards-platform.git
```

2. Install dependencies:
```bash
cd rewards-platform
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
```

## 🗰 Project Structure

```plaintext
src/
├── assets/           # Images, icons, etc.
├── components/       # Reusable components
│   ├── ui/          # Basic UI components
│   ├── layout/      # Layout components
│   └── features/    # Feature-specific components
├── pages/           # Page components
├── store/           # Redux store configuration
├── utils/           # Utility functions
├── services/        # API services
└── constants/       # Constants and configurations
```

## 💡 Usage

Here's a quick example of how to use the rewards system:

```javascript

import { useDispatch } from 'react-redux';
import { earnPoints } from '../store/slices/rewardsSlice';

const YourComponent = () => {
  const dispatch = useDispatch();

  const handleEarnPoints = async () => {
    await dispatch(earnPoints(100)).unwrap();
  };
};
```

## 📱 Screenshots

<div align="center">
  <img src="working_ss\payment-page.png" alt="Transactions" width="400"/>
  <img src="working_ss\reward-page.png" alt="Rewards Page" width="400"/>
</div>

## ⚙️ Configuration

### Stripe Setup

1. Create a Stripe account
2. Get your publishable key from the Stripe dashboard
3. Add the key to your `.env` file

### Environment Variables

```env
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
VITE_API_URL=your_api_url
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Stripe API](https://stripe.com/docs/api)
- [Framer Motion](https://www.framer.com/motion/)

