import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { spendPoints } from '../store/slices/rewardsSlice';

const Rewards = () => {
  const dispatch = useDispatch();
  const { points, rewards } = useSelector((state) => state.rewards);

  const handleRedeemReward = (cost) => {
    if (points >= cost) {
      dispatch(spendPoints(cost));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Rewards Store</h1>
      
      {/* Points Balance */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-lg font-semibold mb-2">Your Points Balance</h2>
        <p className="text-3xl font-bold text-primary">{points}</p>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <img 
              src={reward.image} 
              alt={reward.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{reward.name}</h3>
            <p className="text-gray-600 mb-4">{reward.cost} Points</p>
            <button
              onClick={() => handleRedeemReward(reward.cost)}
              disabled={points < reward.cost}
              className={`w-full py-2 px-4 rounded-lg ${
                points >= reward.cost 
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {points >= reward.cost ? 'Redeem Reward' : 'Not Enough Points'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;