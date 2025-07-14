export const subscriptionPlans = [
  { id: 'price_your_stripe_price_id', name: 'Basic', price: 9.99, interval: 'month' },
  { id: 'price_your_stripe_price_id', name: 'Pro', price: 19.99, interval: 'month' },
  { id: 'price_your_stripe_price_id', name: 'Premium', price: 29.99, interval: 'month' },
];

export const oneTimeProducts = [
  { id: 'price_your_stripe_price_id', name: 'One-time Purchase', price: 49.99 }
];

export default {
  subscriptionPlans,
  oneTimeProducts,
}; 