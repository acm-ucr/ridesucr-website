"use client";

import Link from "next/link";
import Image from "next/image";
import { navBarData } from "@/data/navBarData";
import Rides from "@/public/Logo-White.svg";
import NavOpen from "@/public/Nav_Button.svg";
import NavClose from "@/public/Nav_Close.svg";
import { motion } from "motion/react";

import { useState } from "react";

const Navbar = () => {
  const [visibility, toggleVisibility] = useState(false);

  const toggleIconVisibility = () => {
    toggleVisibility(!visibility);
  };

  return (
    <div className="flex flex-col">
      <div className="relative z-20 flex md:justify-center">
        <div className="w-1/4 pt-2 pl-2 md:absolute md:left-6 md:pt-6">
          <Link href={"/"} onClick={toggleIconVisibility}>
            <Image src={Rides} alt="logo" className="w-2/3 md:w-1/2 xl:w-1/3" />
          </Link>
        </div>

        <p className="text-ridesucr-gray w-2/3 pt-2 text-center text-2xl md:hidden md:text-4xl">
          Driven By Passion
        </p>

        <button
          className="flex w-1/4 justify-end pt-2 pr-2 md:hidden"
          onClick={toggleIconVisibility}
        >
          {visibility ? (
            <Image src={NavClose} alt="Navbar Close" />
          ) : (
            <Image src={NavOpen} alt="Navbar Select" />
          )}
        </button>

        <div className="bg-ridesucr-white/15 text-ridesucr-white mt-6 hidden h-18 w-max items-center justify-between gap-x-18 rounded-2xl px-5 py-3 text-left text-[25px] underline underline-offset-2 ring-1 backdrop-blur-lg md:flex">
          {navBarData.map(({ name, link }, index) => (
            <Link key={index} href={link} className="hover:-translate-y-0.5">
              {name}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`border-ridesucr-white text-ridesucr-white bg-ridesucr-white/15 absolute inset-x-0 z-10 mx-1 flex h-64 flex-col items-center justify-end rounded-md border border-t-0 backdrop-blur-lg transition-all duration-300 md:hidden ${
          visibility ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex w-full max-w-xl flex-col gap-2 pb-4">
          {navBarData.map(({ name, link }, index) => (
            <motion.div
              animate={{ opacity: visibility ? 1 : 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              key={index}
              className="text-center"
            >
              <Link
                href={link}
                className="text-2xl"
                onClick={toggleIconVisibility}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="from-ridesucr-white to-ridesucr-black absolute top-15 left-1/2 z-20 h-[1px] w-11/12 -translate-x-1/2 bg-radial md:hidden" />
    </div>
  );
};

export default Navbar;
