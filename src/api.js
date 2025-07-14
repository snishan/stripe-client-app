import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout for production
});

// Helper to handle errors
const handleApiError = (error) => {
  if (error.response && error.response.data && error.response.data.error) {
    throw new Error(error.response.data.error);
  }
  throw new Error(error.message || 'API Error');
};

// Create Stripe Checkout Session for Subscription
export const createSubscription = async ({ priceId, name }) => {
  try {
    const response = await api.post('/api/payments/pay/subscription', {
      priceId,
      name,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Create Stripe Checkout Session for One-time Payment
export const createOneTimePayment = async ({ priceId, name }) => {
  try {
    const response = await api.post('/api/payments/pay/one-time', {
      priceId,
      name,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export default api; 