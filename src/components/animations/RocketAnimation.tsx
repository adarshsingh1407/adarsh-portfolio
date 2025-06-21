import { LottieAnimation } from "@/components/ui/lottie";
import rocketAnimation from "@/assets/lottie/rocket.json";

interface RocketAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  onComplete?: () => void;
}

export function RocketAnimation({
  className,
  style,
  loop = true,
  autoplay = true,
  onComplete,
}: RocketAnimationProps) {
  return (
    <LottieAnimation
      animationData={rocketAnimation}
      className={className}
      style={style}
      loop={loop}
      autoplay={autoplay}
      onComplete={onComplete}
    />
  );
}
