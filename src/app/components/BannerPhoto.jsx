"use client"
import {motion, MotionConfig} from "motion/react"
import Image from "next/image";
const BannerPhoto = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div>
                <div className="w-[298px] h-[298px] lg:w-[498px]  lg:h-[498px] ">
                    <Image
                    src="/kobirul.png"
                    priority
                    quality={100}
                    fill
                    alt="Koirul"
                    className="object-contain"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default BannerPhoto;