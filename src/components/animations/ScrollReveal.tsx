import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  scale?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  scale = 1,
  className = "",
  viewportMargin = "-50px",
  once = true,
  ease = "easeOut",
}: ScrollRevealProps) => {
  const getInitialState = () => {
    const baseState = {
      opacity: 0,
      scale: scale === 1 ? 0.9 : scale,
    };

    switch (direction) {
      case "up":
        return { ...baseState, y: distance };
      case "down":
        return { ...baseState, y: -distance };
      case "left":
        return { ...baseState, x: distance };
      case "right":
        return { ...baseState, x: -distance };
      default:
        return { ...baseState, y: distance };
    }
  };

  const getFinalState = () => {
    const baseState = {
      opacity: 1,
      scale: 1,
    };

    switch (direction) {
      case "up":
      case "down":
        return { ...baseState, y: 0 };
      case "left":
      case "right":
        return { ...baseState, x: 0 };
      default:
        return { ...baseState, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getFinalState()}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
