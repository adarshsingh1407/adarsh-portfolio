import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData: Record<string, unknown>;
  loop?: boolean | number;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onComplete?: () => void;
  onLoopComplete?: () => void;
  segments?: [number, number];
  [key: string]: unknown; // Allow additional props
}

export function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  style,
  className,
  onComplete,
  onLoopComplete,
  segments,
  ...props
}: LottieAnimationProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
      initialSegment={segments}
      {...props}
    />
  );
}
