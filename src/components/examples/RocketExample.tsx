import { RocketAnimation } from "@/components/animations/RocketAnimation";

export function RocketExample() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h2 className="text-2xl font-bold text-foreground">
        Rocket Animation Examples
      </h2>

      {/* Basic rocket animation */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Basic Animation</h3>
        <RocketAnimation
          style={{ width: 200, height: 200 }}
          className="mx-auto"
        />
      </div>

      {/* Rocket with custom styling */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">Custom Styling</h3>
        <RocketAnimation
          style={{
            width: 150,
            height: 150,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          }}
          className="mx-auto"
        />
      </div>

      {/* Rocket with completion callback */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">With Completion Callback</h3>
        <RocketAnimation
          style={{ width: 180, height: 180 }}
          className="mx-auto"
          loop={false}
          onComplete={() => console.log("Rocket animation completed!")}
        />
      </div>
    </div>
  );
}
