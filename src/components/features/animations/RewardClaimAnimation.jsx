import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const RewardClaimAnimation = ({ reward, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onAnimationComplete={() => !isVisible && onComplete?.()}
        >
          <motion.div
            initial={{ scale: 0.5, y: 100 }}
            animate={{ 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            exit={{ scale: 0.5, y: -100 }}
            className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative"
          >
            {/* Confetti Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                transition: { 
                  times: [0, 0.2, 1],
                  duration: 2 
                }
              }}
              className="absolute -inset-10"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0 
                  }}
                  animate={{ 
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 400 - 200,
                    scale: Math.random() * 1.5,
                    rotate: Math.random() * 360,
                    transition: {
                      duration: 1.5,
                      ease: "easeOut"
                    }
                  }}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: ['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3'][Math.floor(Math.random() * 4)]
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { delay: 0.2 }
              }}
              className="text-center"
            >
              <motion.img
                src={reward.image}
                alt={reward.name}
                className="w-32 h-32 mx-auto mb-4 rounded-lg"
                layoutId={`reward-image-${reward.id}`}
              />
              <h2 className="text-2xl font-bold mb-2">Reward Claimed!</h2>
              <p className="text-lg text-gray-600">{reward.name}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RewardClaimAnimation;