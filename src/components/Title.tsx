"use client";

import { motion } from "framer-motion";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <div className="title-fade-up text-ridesucr-white flex justify-center py-10 text-center text-5xl md:text-7xl">
      {text}
    </div>
  );
};

export default Title;
