import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe('VITE_STRIPE_PUBLISHABLE_KEY');

export const createPaymentIntent = async (amount) => {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    
    return await response.json();
  } catch (error) {
    throw new Error('Payment failed to initialize');
  }
};