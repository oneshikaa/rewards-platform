import { createContext, useContext, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import PointsAnimation from './PointsAnimation';
import RewardClaimAnimation from './RewardClaimAnimation';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [claimedReward, setClaimedReward] = useState(null);

  const showRewardClaim = (reward) => {
    setClaimedReward(reward);
  };

  return (
    <AnimationContext.Provider value={{ showRewardClaim }}>
      <AnimateSharedLayout>
        {children}
        <PointsAnimation />
        {claimedReward && (
          <RewardClaimAnimation
            reward={claimedReward}
            onComplete={() => setClaimedReward(null)}
          />
        )}
      </AnimateSharedLayout>
    </AnimationContext.Provider>
  );
};