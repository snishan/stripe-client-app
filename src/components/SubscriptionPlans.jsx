import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { createSubscription, createOneTimePayment } from '../api';
import { subscriptionPlans, oneTimeProducts } from '../data/plans';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const SubscriptionPlans = () => {
  const [isSubscription, setIsSubscription] = useState(true);

  const handlePayment = async (priceId, name, isSubscription) => {
    try {
      const { sessionId } = isSubscription 
        ? await createSubscription({ priceId, name })
        : await createOneTimePayment({ priceId, name });
      
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        alert(error.message);
      }
    } catch (error) {
      alert(error.message || 'Error creating Stripe Checkout Session.');
    }
  };

  return (
    <div className="plans-container">
      <div className="toggle-container">
        <button 
          className={`toggle-btn ${isSubscription ? 'active' : ''}`}
          onClick={() => setIsSubscription(true)}
        >
          Subscriptions
        </button>
        <button 
          className={`toggle-btn ${!isSubscription ? 'active' : ''}`}
          onClick={() => setIsSubscription(false)}
        >
          One-time Payments
        </button>
      </div>

      {isSubscription ? (
        <div className="plans-grid">
          {subscriptionPlans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <h3>{plan.name}</h3>
              <p>${plan.price}/{plan.interval}</p>
              <button 
                onClick={() => handlePayment(plan.id, plan.name, true)}
                className="select-btn"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="plans-grid">
          {oneTimeProducts.map((product) => (
            <div key={product.id} className="plan-card">
              <h3>{product.name}</h3>
              <p>${product.price} (one-time)</p>
              <button 
                onClick={() => handlePayment(product.id, product.name, false)}
                className="select-btn"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;