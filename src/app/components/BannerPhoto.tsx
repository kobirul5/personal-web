"use client";
import { motion } from "motion/react";
import Image from "next/image";

const BannerPhoto = () => {
  return (
    <div className="w-full h-full relative ">
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-74.5 h-74.5  lg:w-124.5  lg:h-140.5 absol lg:right-0 lg:top-7  z-10"
        >
          <div className=" w-100 h-100 z-[-1] bg-primaryColor/50 rounded-[50px] blur-[100px] opacity-40 animate-pulse"></div>
          <Image
            src="/assets/kobirul4.png"
            priority
            quality={100}
            fill
            alt="Kobirul"
            className="object-contain"
          />
        </motion.div>

        {/* circle */}
        {/* <motion.svg className="w-[300px] h-[300px] lg:w-[520px] lg:h-[520px] lg:right-0"
          fill="transparent"
          viewBox="0 0 520 520"
          xmlns="http://www.w3/200/svg"
        >
          <motion.circle
            cx="260"
            cy="260"
            r="258"
            stroke="#ff6421"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: " 24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg> */}
      </motion.div>
    </div>
  );
};

export default BannerPhoto;
