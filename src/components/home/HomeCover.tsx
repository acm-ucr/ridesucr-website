"use client";
import Image from "next/image";
import { galleryData } from "@/data/galleryData";

const HomeCover = () => {
  const repeatingText = "DRIVEN BY PASSION • RIDES @ UCR • ".repeat(200);
  const carData = galleryData.find((item) => item.Alt === "Car 1");

  return (
    <div className="absolute inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      {carData && (
        <Image
          src={carData.Pictures}
          alt={carData.Alt}
          fill
          priority
          className="scale-105 object-cover opacity-70 blur-sm"
        />
      )}

      <p className="p-2 text-3xl text-white opacity-3">{repeatingText}</p>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent via-50% to-black" />
    </div>
  );
};

export default HomeCover;
