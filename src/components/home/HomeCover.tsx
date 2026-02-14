"use client";
import Image from "next/image";
import HomeBg from "@/public/cars/car1.webp";

const HomeCover = () => {
  const repeatingText = "DRIVEN BY PASSION • RIDES @ UCR • ".repeat(200);

  return (
    <div className="absolute inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      <Image
        src={HomeBg}
        alt="Home Background (Porsche 911)"
        fill
        priority
        className="scale-105 object-cover opacity-70 blur-sm"
      />

      <p className="pointer-events-none absolute inset-0 overflow-hidden text-[30px] break-all text-white uppercase opacity-3 select-none">
  {repeatingText}
</p>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent via-50% to-black" />
    </div>
  );
};

export default HomeCover;
