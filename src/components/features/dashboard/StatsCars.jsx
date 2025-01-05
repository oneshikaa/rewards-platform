import { motion } from 'framer-motion';

const StatsCard = ({ title, value, trend, icon: Icon }) => {
  const isPositive = trend > 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        {Icon && (
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-4">
          <span
            className={`text-sm font-medium ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isPositive ? '+' : ''}{trend}%
          </span>
          <span className="text-sm text-gray-500 ml-2">vs last week</span>
        </div>
      )}
    </motion.div>
  );
};

export default StatsCard;