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

export const pageVariantsAnim = {
  initial: {
    opacity: 0,
  },
  in: {
    transition: { duration: 1, ease: "easeOut" },
    opacity: 1,
    staggerChildren: 1,
  },
  out: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};
