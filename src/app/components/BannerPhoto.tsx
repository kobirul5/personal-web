"use client";
import { motion } from "motion/react";
import ShatterImage from "@/components/ui/ShatterImage";

const BannerPhoto = () => {
  return (
    <div className="w-full h-full relative">
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
          className="w-[259px] h-[298px] lg:w-[488px] lg:h-[562px] relative z-10"
        >
          <div className="w-100 h-100 z-[-1] bg-primaryColor/50 rounded-[50px] blur-[100px] opacity-40 animate-pulse absolute inset-0"></div>
          <ShatterImage imageUrl="/assets/kobirul4.png" rows={20} cols={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BannerPhoto;
