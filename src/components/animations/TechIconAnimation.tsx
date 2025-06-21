import { motion } from "motion/react";
import Image from "next/image";

interface TechIconAnimationProps {
  iconUrl: string;
  alt: string;
  className?: string;
  size?: {
    width: string;
    height: string;
  };
  delay?: number;
  imageSize?: number;
}

export function TechIconAnimation({
  iconUrl,
  alt,
  className,
  size = { width: "w-12", height: "h-12" },
  delay = 0,
  imageSize = 48,
}: TechIconAnimationProps) {
  return (
    <motion.div
      className={`absolute ${className} ${size.width} ${size.height}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: [0.8, 1, 0.8],
      }}
      transition={{
        opacity: { duration: 0.5, ease: "easeOut", delay },
        scale: {
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay,
        },
      }}
    >
      <Image
        src={iconUrl}
        alt={alt}
        width={imageSize}
        height={imageSize}
        className="w-full h-full drop-shadow-lg rounded-xl"
      />
    </motion.div>
  );
}
