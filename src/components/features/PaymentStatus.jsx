import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { earnPoints } from '../../../store/slices/rewardsSlice';

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const status = searchParams.get('status');
  const amount = searchParams.get('amount');

  useEffect(() => {
    if (status === 'success' && amount) {
      // Convert payment amount to points (e.g., $1 = 100 points)
      const points = Math.floor(parseFloat(amount) * 100);
      dispatch(earnPoints(points));

      // Redirect to dashboard after 3 seconds
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, amount, dispatch, navigate]);

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-6 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-4">
          You've earned {Math.floor(parseFloat(amount) * 100)} points!
        </p>
        <p className="text-sm text-gray-500">
          Redirecting to dashboard...
        </p>
      </motion.div>
    );
  }

  if (status === 'error') {
    return (
      <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Payment Failed
        </h2>
        <p className="text-gray-600 mb-4">
          Something went wrong with your payment. Please try again.
        </p>
        <button
          onClick={() => navigate('/payment')}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
        >
          Try Again
        </button>
      </div>
    );
  }

  return null;
};

export default PaymentStatus;