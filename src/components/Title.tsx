"use client";
import { motion } from "motion/react";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="text-ridesucr-white flex justify-center py-10 text-center text-5xl md:text-7xl"
    >
      {text}
    </motion.div>
  );
};

export default Title;
