import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <button onClick={() => navigate('/')} className="home-btn">
        Back to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;