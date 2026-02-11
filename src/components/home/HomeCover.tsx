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
        className="scale-105 object-cover opacity-70 blur-sm"
      />

      <div className="pointer-events-none absolute inset-0 flex flex-wrap content-start justify-center overflow-hidden opacity-3 select-none">
        <p className="text-[30px] break-all text-white uppercase">
          {repeatingText}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent via-50% to-black" />
    </div>
  );
};

export default HomeCover;
