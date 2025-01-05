import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const PointsDisplay = () => {
  const points = useSelector(state => state.rewards.points);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-lg font-semibold text-gray-700 mb-2">
        Your Points Balance
      </h2>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-primary">
          {points.toLocaleString()}
        </span>
        <span className="ml-2 text-gray-500">points</span>
      </div>
    </motion.div>
  );
};

export default PointsDisplay;