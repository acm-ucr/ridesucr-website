"use client";
import Image from "next/image";
import { galleryData } from "@/data/galleryData";
import { motion } from "motion/react";

const HomeCover = () => {
  const repeatingText = "DRIVEN BY PASSION • RIDES @ UCR • ".repeat(200);
  const carData = galleryData.find((item) => item.Alt === "Car 1");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="absolute inset-0 -z-10 h-screen w-full overflow-hidden"
    >
      {carData && (
        <Image
          src={carData.Pictures}
          alt={carData.Alt}
          fill
          priority
          className="scale-105 object-cover blur-sm"
        />
      )}
      <p className="p-2 text-3xl text-white opacity-3">{repeatingText}</p>
      <div className="absolute inset-0 bg-gradient-to-b from-black from-0% via-transparent via-50% to-black to-90%" />
    </motion.div>
  );
};

export default HomeCover;
