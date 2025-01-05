import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Rewards from './pages/Rewards';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentError from './pages/PaymentError';
import Profile from './pages/Profile';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './services/stripe/config';
import { AnimationProvider } from './components/features/animations/AnimationProvider';

function App() {
  return (
    <AnimationProvider>
      <Elements stripe={stripePromise}>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/payment/error" element={<PaymentError />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Elements>
    </AnimationProvider>
  );
}

export default App;