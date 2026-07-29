"use client";
import { motion } from "motion/react";
import ShatterImage from "@/components/ui/ShatterImage";

const BannerPhoto = () => {
  return (
    <div className="w-full h-full relative flex justify-center lg:justify-end items-center">
      <motion.div
        className="w-full flex justify-center lg:justify-end"
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
          className="w-full max-w-[300px] lg:max-w-[600px] aspect-[2148/2474] relative z-10"
        >
          <div className="w-100 h-100 z-[-1] bg-primaryColor/50 rounded-[50px] blur-[100px] opacity-40 animate-pulse absolute inset-0"></div>
          <ShatterImage imageUrl="/assets/kobirul4.png" rows={20} cols={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerPhoto;
