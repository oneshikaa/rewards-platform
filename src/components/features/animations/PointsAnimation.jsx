import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { clearRecentAnimation } from '../../../store/slices/rewardsSlice';
import { useEffect } from 'react';

const PointsAnimation = () => {
  const dispatch = useDispatch();
  const animation = useSelector((state) => state.rewards.recentAnimation);

  // Auto-clear animation after it completes
  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => {
        dispatch(clearRecentAnimation());
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animation, dispatch]);

  return (
    <AnimatePresence>
      {animation && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0,
            y: -50,
            transition: { duration: 0.3 }
          }}
          className="fixed bottom-10 right-10 z-50"
        >
          <motion.div
            className={`px-6 py-4 rounded-lg shadow-lg ${
              animation.type === 'earn' ? 'bg-green-500' : 'bg-blue-500'
            }`}
          >
            <motion.span 
              className="text-white text-2xl font-bold"
              layoutId={`points-${Date.now()}`}
            >
              {animation.type === 'earn' ? '+' : ''}{animation.points} Points
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PointsAnimation;