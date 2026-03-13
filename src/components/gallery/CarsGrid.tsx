"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { galleryData } from "@/data/galleryData";

const CarsGrid = () => {
  return (
    <div className="grid h-auto grid-cols-1 gap-5 lg:h-[76rem] lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-1.5 lg:gap-y-1.5">
      {galleryData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, zIndex: 70 }}
            whileTap={{ scale: 1.05, zIndex: 70 }}
            className={`lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0 ${index == 0 ? "lg:rounded-tl-md" : ""} ${index == 2 ? "lg:rounded-tr-md" : ""} ${index == 6 ? "lg:rounded-bl-md" : ""} ${index == 8 ? "lg:rounded-br-md" : ""} `}
          >
            <Image
              className={`${"h-full w-full rounded-xl object-cover lg:rounded-none"}`}
              src={item.Pictures}
              alt={item.Alt}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default CarsGrid;
