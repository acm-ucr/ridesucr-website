"use client";
import Image from "next/image";
import { galleryData } from "@/data/galleryData";
import { motion } from "motion/react";

const AboutCover = () => {
  const carData = galleryData.find((item) => item.Alt === "Car 4");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 4 }}
      viewport={{ once: true }}
      className="absolute inset-0 -z-10 w-full overflow-hidden"
    >
      {carData && (
        <Image
          src={carData.Pictures}
          alt={carData.Alt}
          fill
          className="scale-110 object-cover opacity-80 blur-sm"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black from-5% via-transparent via-50% to-black to-90%" />
    </motion.div>
  );
};

export default AboutCover;
