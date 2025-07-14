# 💳 Stripe Client App

A modern React application that demonstrates Stripe payment integration with subscription plans and one-time payments. Built with React 19 and Stripe's latest SDK.

![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Stripe](https://img.shields.io/badge/Stripe-7.4.0-6772E5?style=for-the-badge&logo=stripe)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- **Subscription Management** - Monthly subscription plans with different tiers
- **One-time Payments** - Single purchase options
- **Stripe Checkout** - Secure payment processing with Stripe's hosted checkout
- **Modern UI** - Clean and responsive design
- **React Router** - Client-side routing for seamless navigation
- **Environment Configuration** - Easy setup with environment variables


## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- A Stripe account with API keys
- A backend server to handle Stripe webhooks (not included in this repo)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stripe-client-app.git
   cd stripe-client-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp sample.env .env
   ```
   
   Edit `.env` and add your Stripe configuration:
   ```env
   REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   REACT_APP_API_BASE_URL=http://localhost:3001/api
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
stripe-client-app/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── CheckoutForm.jsx
│   │   ├── PaymentSuccess.jsx
│   │   └── SubscriptionPlans.jsx
│   ├── data/              # Data configuration
│   │   └── plans.js       # Subscription plans and products
│   ├── api.js             # API integration functions
│   ├── App.js             # Main application component
│   └── styles.css         # Global styles
├── package.json
└── README.md
```

## 💰 Subscription Plans

The application includes the following subscription tiers:

| Plan | Price | Features |
|------|-------|----------|
| **Basic** | $9.99/month | Essential features |
| **Pro** | $19.99/month | Advanced features |
| **Premium** | $29.99/month | All features + priority support |

### One-time Products
- **One-time Purchase**: $49.99

## 🔧 Configuration

### Stripe Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your publishable key from the Stripe Dashboard
3. Create products and prices in your Stripe Dashboard
4. Update the `plans.js` file with your actual price IDs

### Backend Requirements

This frontend application requires a backend server that can:
- Create Stripe Checkout Sessions
- Handle webhook events
- Manage subscription lifecycle

## 🎨 Customization

### Adding New Plans

Edit `src/data/plans.js` to add or modify subscription plans:

```javascript
export const subscriptionPlans = [
  { 
    id: 'price_your_stripe_price_id', 
    name: 'Your Plan', 
    price: 99.99, 
    interval: 'month' 
  },
  // ... more plans
];
```

### Styling

The application uses CSS for styling. Modify `src/styles.css` to customize the appearance.

## 🧪 Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

## 📦 Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

## 🙏 Acknowledgments

- [Stripe](https://stripe.com) for the payment processing platform
- [React](https://reactjs.org) for the frontend framework
- [React Router](https://reactrouter.com) for client-side routing

## 📞 Support

If you have any questions or need help, please:

- Open an [issue](https://github.com/yourusername/stripe-client-app/issues)
- Check the [Stripe documentation](https://stripe.com/docs)
- Review the [React documentation](https://reactjs.org/docs)

---

⭐ **Star this repository if you found it helpful!**
