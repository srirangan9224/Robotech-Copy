"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20] gap-10"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            IEEE @ GT: 2026 Hackathon
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            hackathon experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Join IEEE@GT as the Robotech Hackathon returns for 2026!
           January 23-25th, 2026.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Register now
          </span>{" "}
          to secure your spot and be part of the most exciting hackathon of the
          year! 
        </motion.p>

       <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 text-center cursor-pointer rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition duration-300 px-6 md:px-10 flex items-center justify-center"
          href="https://luma.com/suep29g0"
          target="_blank"
          rel="noopener noreferrer"
        >
          APPLY HERE
        </motion.a>

        <a
          className="py-2 text-center cursor-pointer rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300 px-6 md:px-10 flex items-center justify-center"
          href="https://robotech-scoring.web.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          LOGIN
        </a>
      </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex justify-center md:justify-end w-full md:w-1/2 px-4 md:px-10 lg:px-20"
      >
        <Image
          src="/logo_robotech.png"
          alt="logo"
          height={600}
          width={600}
          draggable={false}
          className="flex-shrink-0 w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};
