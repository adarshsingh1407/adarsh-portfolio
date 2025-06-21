# Lottie Animations

This directory contains Lottie animation JSON files for the portfolio.

## Structure

```
src/assets/lottie/
├── rocket.json          # Rocket animation (replace with your custom JSON)
└── README.md           # This file
```

## Usage

### 1. Add Your Lottie JSON File

Replace the empty `rocket.json` file with your custom Lottie animation JSON.

### 2. Use the Animation Component

```tsx
import { RocketAnimation } from "@/components/animations/RocketAnimation";

// Basic usage
<RocketAnimation
  style={{ width: 200, height: 200 }}
  className="mx-auto"
/>

// With custom props
<RocketAnimation
  style={{ width: 150, height: 150 }}
  loop={false}
  autoplay={true}
  onComplete={() => console.log("Animation completed!")}
/>
```

### 3. Create New Animation Components

To add a new animation:

1. Add your JSON file to `src/assets/lottie/`
2. Create a new component in `src/components/animations/`
3. Export it from `src/components/animations/index.ts`

Example:

```tsx
// src/components/animations/MyAnimation.tsx
import { LottieAnimation } from "@/components/ui/lottie";
import myAnimation from "@/assets/lottie/my-animation.json";

export function MyAnimation({ className, style, ...props }) {
  return (
    <LottieAnimation
      animationData={myAnimation}
      className={className}
      style={style}
      {...props}
    />
  );
}
```

## Available Props

The `LottieAnimation` component accepts all props from [lottie-react](https://lottiereact.com/):

- `animationData`: The Lottie JSON data
- `loop`: Boolean or number for loop count
- `autoplay`: Boolean to auto-play animation
- `style`: CSS styles object
- `className`: CSS class names
- `onComplete`: Callback when animation completes
- `onLoopComplete`: Callback when loop completes
- `segments`: Array of [start, end] frames

## Dependencies

- `lottie-react`: React wrapper for Lottie animations
- Installed via: `npm install lottie-react`
