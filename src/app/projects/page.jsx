"use client"

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Image from "next/image";
import SwiperProjectBtns from "@/components/ui/SwiperProjectBtns";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects } from "@/data/projectss";

export default function Projects() {

    
    //   const [project, setProject] = useState(projects)
    //   const handleChange = (swiper) => {
    //     const currentIndex = swiper.activeIndex;
    //     setProject(projects[currentIndex])
    //   }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] container mx-auto flex flex-col justify-center py-12 px-5 lg:py-0"
        >
            {
                projects?.map((p, idx) =>
                    <div
                        key={idx}
                        className={`flex flex-col  my-10 ${p?.rowSet ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 `}
                    >
                        <motion.div className="w-full lg:w-1/2 lg:h-[468px] order-2 lg:order-none">
                            <div className="flex flex-col gap-6">
                                {/* outline num ? */}
                                <div className="text-8xl leading-none text-transparent text-outline font-extrabold  text-outline ">0{p?.id}</div>
                                <h1 className="text-3xl font-bold">{p?.title}</h1>
                                <p>{p?.description}</p>
                                {/* button */}
                                <div className="flex items-center gap-4">
                                    {/* live link */}
                                    <Link target="_blank" href={p?.link}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    variant="outline"
                                                    className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  ">
                                                    <BsArrowUpRight className="mr-2" />
                                                    Live
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link target="_blank" href={p?.github_client}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    variant="outline"
                                                    className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  ">
                                                    <FaGithub className="mr-2" />
                                                    client
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                    <Link target="_blank" href={p?.github_server}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    variant="outline"
                                                    className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-5  rounded-3xl  flex justify-center items-center group  ">
                                                    <FaGithub className="mr-2" />
                                                    Server
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>


                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
                            }}
                            className="lg:w-1/2 z-10">

                            <ScrollArea className="h-[450px] overflow-y-auto">
                                <div className="relative w-full">
                                    <Image
                                        src={p?.image}
                                        alt="project"
                                        width={800} // set your desired width
                                        height={1500} // taller than 450px to allow scrolling
                                        className="object-cover w-full"
                                    />
                                </div>
                            </ScrollArea>


                        </motion.div>
                    </div>)
            }
        </motion.section>
    )
}
