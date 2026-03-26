"use client";
import Image from "next/image";
import coverCar from "@/public/cars/car8.webp";
import { motion } from "motion/react";

const GarageCover = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="fixed inset-0 -z-10 h-screen w-full overflow-hidden bg-black"
    >
      <Image
        src={coverCar}
        alt="car cover"
        fill
        priority
        className="scale-110 object-cover opacity-80 blur-md"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black from-15% via-transparent via-50% to-black to-85%" />
    </motion.div>
  );
};

export default GarageCover;
