"use client";
import Image from "next/image";
import ErrorImage from "@/public/CheckEngine.webp";
import Link from "next/link";
import { motion } from "framer-motion";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center pt-24">
      <div className="-ml-30 w-2/3">
        <div className="flex flex-col items-start lg:flex-row lg:items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-ridesucr-white text-[15rem] leading-none lg:text-[25rem]/none"
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={ErrorImage}
              alt="Check Engine Light: Error Message Picture"
              className="-z-40 mt-[-100px] h-auto w-full animate-[pulse_0.2s_linear_infinite] blur-[0.3px] [mask-image:radial-gradient(circle_at_center,black_5%,transparent_65%)] lg:mt-0 lg:ml-[200px] lg:h-[450px] lg:w-[450px]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-20 pt-0 text-center text-4xl lg:text-left lg:text-6xl"
        >
          <p className="text-ridesucr-gray pb-2">OFF THE ROAD.</p>
          <Link
            href="/"
            className="text-ridesucr-white animate-pulse underline hover:text-gray-400"
          >
            RETURN HOME?
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorMessage;
