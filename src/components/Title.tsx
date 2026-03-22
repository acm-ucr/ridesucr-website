"use client";

import { motion } from "framer-motion";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition = {{ duration: 0.5}}
      className="title-fade-up text-ridesucr-white flex justify-center py-10 text-center text-5xl md:text-7xl"
    >
      {text}
    </motion.h1>
  );
};

export default Title;
