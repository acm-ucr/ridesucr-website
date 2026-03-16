"use client";

import Info from "@/components/about/Info";
import Image from "next/image";
import car7 from "@/public/cars/car7.webp";
import car6 from "@/public/cars/car6.webp";
import Link from "next/link";
import upArrow from "@/public/Arrow_up.svg";
import { motion } from "motion/react";

const InView = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

const InfoSection = () => {
  return (
    <div className="flex w-full justify-center px-4 pb-10">
      <div className="w-full md:w-5/6 lg:w-2/3 lg:rounded-none lg:border-0 lg:bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl border lg:hidden">
            <div className="flex flex-col lg:hidden">
              <div className="overflow-hidden rounded-t-xl">
                <Info info="Rides @ UCR is a student-led club that aims to bring the car community together. We organize weekly events, such as car meets, with the purpose of fostering a community of enthusiasts." />
              </div>
              <motion.div
                whileTap={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={car6} alt="Car6" fill className="object-cover" />
                </div>
              </motion.div>
              <Info info="Anyone is welcome to join our club, even if you're still learning about cars. We strive to be a beginner friendly club that can serve as your first steps into the car community as a whole. Joining the club is completely free, and most of our events are open to students as well as the general public." />
              <motion.div
                whileTap={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={car7} alt="Car7" fill className="object-cover" />
                </div>
              </motion.div>
              <div className="overflow-hidden rounded-b-xl">
                <Info info="Feel free to support us by buying our awesome merch or stopping at one of our meets!" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="hidden flex-col gap-6 lg:flex">
          <motion.div {...InView}>
            <Info info="Rides @ UCR is a student-led club that aims to bring the car community together. We organize weekly events, such as car meets, with the purpose of fostering a community of enthusiasts." />
          </motion.div>
          <div className="relative h-4 w-full">
            <div className="absolute top-1/2 left-1/2 h-[1px] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
          </div>

          <div className="relative flex w-full gap-6">
            <div className="flex flex-1">
              <motion.div {...InView}>
                <Info info="Anyone is welcome to join our club, even if you're still learning about cars. We strive to be a beginner friendly club that can serve as your first steps into the car community as a whole. Joining the club is completely free, and most of our events are open to students as well as the general public." />
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white to-transparent opacity-40" />
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <motion.div
                {...InView}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image src={car6} alt="Car6" fill className="object-cover" />
                </div>
              </motion.div>
              <div className="relative h-3 w-full">
                <div className="absolute top-1/2 left-1/2 h-[1px] w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
              </div>
              <motion.div
                {...InView}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image src={car7} alt="Car7" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative h-4 w-full">
            <div className="absolute top-1/2 left-1/2 h-[1px] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
          </div>
          <motion.div {...InView}>
            <Info info="Feel free to support us by buying our awesome merch or stopping at one of our meets!" />
          </motion.div>
        </div>
      </div>

      <Link
        href="/#moto"
        className="absolute top-5/8 right-1/16 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border-[0.5px] border-white bg-white/15 backdrop-blur-lg lg:flex"
      >
        <Image src={upArrow} alt="Up Arrow" />
      </Link>
    </div>
  );
};

export default InfoSection;
