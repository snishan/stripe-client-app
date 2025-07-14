import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate = useNavigate();
  return (
    <div className="checkout-disabled">
      <h2>Checkout is now handled by Stripe Checkout.</h2>
      <button onClick={() => navigate('/')} className="home-btn">
        Back to Home
      </button>
    </div>
  );
};

export default CheckoutForm;