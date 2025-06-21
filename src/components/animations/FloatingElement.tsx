import { motion } from "motion/react";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yRange?: [number, number, number];
  rotateRange?: [number, number, number];
  ease?: "easeInOut" | "easeIn" | "easeOut" | "linear";
}

export const FloatingElement = ({
  children,
  className = "",
  duration = 6,
  delay = 0,
  yRange = [0, -20, 0],
  rotateRange = [0, 5, 0],
  ease = "easeInOut",
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: yRange,
        rotate: rotateRange,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
