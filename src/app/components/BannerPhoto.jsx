"use client"
import { motion, MotionConfig } from "motion/react"
import Image from "next/image";
const BannerPhoto = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" }

                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }

                    }}
                    className="w-[298px] h-[298px] mix-blend-lighten lg:w-[498px]  lg:h-[498px] absolute lg:left-3 lg:top-7">
                    <Image
                        src="/assets/kobirul.png"
                        priority
                        quality={100}
                        fill
                        alt="Koirul"
                        className="object-contain"
                    />
                </motion.div>

                {/* circle */}
                <motion.svg className="w-[300px] h-[300px] lg:w-[520px] lg:h-[520px]"
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
                    initial={{strokeDasharray:" 24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120,360]
                    }}
                    transition={{
                        duration:20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    />
                </motion.svg>

            </motion.div>
        </div>
    );
};

export default BannerPhoto;