"use client";
import { motion } from "motion/react";

const InView = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

const Info = (props: { info: string }) => {
  return (
    <motion.div
      {...InView}
      className="text-ridesucr-white flex h-full w-full items-center justify-center bg-white/30 p-4 text-center text-2xl leading-6 md:text-3xl md:leading-8 lg:rounded-md lg:p-6 lg:text-4xl lg:leading-[1.6]"
    >
      {props.info}
    </motion.div>
  );
};

export default Info;
