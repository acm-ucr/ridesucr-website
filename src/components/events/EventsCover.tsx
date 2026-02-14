"use client";
import Image from "next/image";
import { galleryData } from "@/data/galleryData";

const GarageCover = () => {
  const carData = galleryData.find((item) => item.Alt === "Car 1");

  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      {carData && (
        <Image
          src={carData.Pictures}
          alt={carData.Alt}
          fill
          priority
          className="scale-110 object-cover opacity-80 blur-md"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black from-15% via-transparent via-50% to-black to-85%" />
    </div>
  );
};

export default GarageCover;
