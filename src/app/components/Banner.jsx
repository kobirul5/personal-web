"use client"
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import BannerPhoto from "./BannerPhoto";
import DesignationText from "./DesignationText";
import { motion } from "motion/react"
const Banner = () => {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.4, ease: "easeIn" }
            }}
            className="lg:mt-10 z-30 container mx-auto flex flex-col lg:flex-row  justify-end items-center gap-8">
            <div className=" flex-1 flex flex-col order-2 lg:order-none">
                <DesignationText />
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-6 mt-2">Hi, I'm <br />  <span className="text-primaryColor">Kobirul Islam</span></h1>
                <p className="mb-9">I’m a MERN Stack Developer, building responsive and scalable web apps with MongoDB, Express.js, React.js, and Node.js. Passionate about clean code and user-friendly design. </p>
                <div className="space-y-5">
                    <a
                        href="/Resume_of_Kobirul.pdf"
                        // to="/Kobirul.pdf"
                        download="Resume_Of_Kobirul"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                        >
                            <span>Download CV</span>
                            <FaDownload></FaDownload>
                        </Button>
                    </a>
                    <div>
                        <Social></Social>
                    </div>
                </div>

            </div>
            <div className="flex-1 flex order-1 lg:order-none">
                <BannerPhoto />
            </div>
        </motion.div>
    );
};

export default Banner;