"use client";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "@/public/Jump_Button.svg";
import { motion } from "motion/react";
import Linkbox from "@/components/home/Linkbox";

const linkboxAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
      delay: 0.3,
    },
  },
  whileHover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
  viewport: { once: true },
} as const;

const subtitleAnimation = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay: 0.2 },
};

const drivenbyAnimation = {
  initial: { opacity: 0, scale: 0, y: -100 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
};

const Moto = () => {
  return (
    <div className="text-ridesucr-white relative w-screen">
      <div className="flex items-center justify-center md:gap-x-[5vw] lg:gap-x-[10vw]">
        <div className="text-left">
          <motion.div
            {...drivenbyAnimation}
            className="hidden md:block md:text-[7rem] lg:text-[12rem]"
          >
            <p className="mb-[-0.5em]">Driven by</p>
            <p className="mb-[-0.2em]">Passion</p>
          </motion.div>
          <motion.div
            className="text-ridesucr-gray mt-4 hidden md:block md:text-5xl lg:text-6xl"
            {...subtitleAnimation}
          >
            We are rides @ ucr.
          </motion.div>
        </div>
        <motion.div {...linkboxAnimation}>
          <Linkbox />
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="my-12 flex animate-pulse justify-center pt-10 lg:pt-0"
      >
        <button>
          <Link href={"/#about"}>
            <Image src={DownArrow} alt="About" />
          </Link>
        </button>
      </motion.div>

      <div className="from-ridesucr-white to-ridesucr-black absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />
    </div>
  );
};

export default Moto;
