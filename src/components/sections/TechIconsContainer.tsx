import Image from "next/image";

export function TechIconsContainer() {
  return (
    <div
      id="tech-icons"
      className="w-full md:flex-[0.5] md:mt-10 flex justify-center items-center"
    >
      <div className="relative w-[480px] h-[480px] overflow-hidden">
        <Image
          src="/adarsh-dp.png"
          alt="Background"
          fill
          className="rounded-full"
        />
      </div>
    </div>
  );
}
