import React from "react";

const StripeProvider: React.FC<{
  publishableKey: string;
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return <>{children}</>;
};

// src/stripe/StripeProvider.web.tsx
// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('your-publishable-key');

// const StripeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <Elements stripe={stripePromise}>{children}</Elements>;
// };

export default StripeProvider;
