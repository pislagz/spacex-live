import { motion } from "framer-motion";

export const animationProps = {
  as: motion.div,
  initial: { opacity: 0, translateX: -50 },
  animate: { opacity: 1, translateX: 0 },
  transition: { duration: 0.3 },
};

export const staticAnimationProps = {
  as: motion.div,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};
