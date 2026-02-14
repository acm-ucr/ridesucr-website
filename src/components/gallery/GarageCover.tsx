"use client";
import Image from "next/image";
import GarageBg from "@/public/cars/car1.webp";

const GarageCover = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      <Image
        src={GarageBg}
        alt="Garage Background (Porsche 911)"
        fill
        priority
        className="scale-110 object-cover opacity-80 blur-md"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black from-15% via-transparent via-50% to-black to-85%" />
    </div>
  );
};

export default GarageCover;
