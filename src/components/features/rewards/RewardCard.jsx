import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const RewardCard = ({ reward, onClaim }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.4
          }
        },
        hidden: { opacity: 0, y: 50 }
      }}
      whileHover={{
        y: -5,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25
        }
      }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu"
    >
      <motion.img
        layoutId={`reward-image-${reward.id}`}
        src={reward.image}
        alt={reward.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{reward.name}</h3>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onClaim(reward)}
          className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg"
        >
          Claim for {reward.points} Points
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RewardCard;