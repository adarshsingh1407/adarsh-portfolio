import Image from "next/image";
import { TechIconAnimation } from "@/components/animations";

export function TechIconsContainer() {
  return (
    <div
      id="tech-icons"
      className="w-full md:flex-[0.5] md:mt-10 flex justify-center items-center"
    >
      <div className="relative w-[480px] h-[480px] rounded-lg overflow-hidden">
        <Image src="/bg-3.png" alt="Background" fill className="z-1" />

        <TechIconAnimation
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="top-12 left-4"
          size={{ width: "w-28", height: "h-28" }}
          delay={0}
          imageSize={96}
        />

        <TechIconAnimation
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="top-44 left-24"
          size={{ width: "w-20", height: "h-20" }}
          delay={0.5}
          imageSize={80}
        />

        <TechIconAnimation
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="top-4 right-0"
          size={{ width: "w-20", height: "h-20" }}
          delay={0.8}
          imageSize={80}
        />

        <TechIconAnimation
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
          alt="GraphQL"
          className="top-36 right-4"
          size={{ width: "w-16", height: "h-16" }}
          delay={1.1}
          imageSize={48}
        />

        <TechIconAnimation
          iconUrl="/document.svg"
          alt="Document"
          className="top-[-8px] left-30 z-2"
          size={{ width: "w-20", height: "h-20" }}
          delay={1.4}
          imageSize={80}
        />
      </div>
    </div>
  );
}
