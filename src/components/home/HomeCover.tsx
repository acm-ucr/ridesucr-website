"use client";
import Image from "next/image";
import HomeBg from "@/../public/cars/car1.webp"; 

const HomeCover = () => {
  const repeatingText = "DRIVEN BY PASSION • RIDES @ UCR • ".repeat(200);

  return (
    <div className="absolute inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      <Image
        src={HomeBg}
        alt=""
        fill
        priority
        className="object-cover blur-sm scale-105 opacity-70" 
      />

      <div className="absolute inset-0 flex flex-wrap content-start justify-center overflow-hidden opacity-3 pointer-events-none select-none">
        <p className="text-white text-[30px] uppercase break-all">
          {repeatingText}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent via-50% to-black" />
    </div>
  );
};

export default HomeCover;