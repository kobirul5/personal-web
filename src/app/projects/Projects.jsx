"use client"

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useState } from "react";
import Image from "next/image";
import SwiperProjectBtns from "@/components/ui/SwiperProjectBtns";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects } from "@/data/projectss";

export default function Projects() {


  const [project, setProject] = useState(projects[0])
  const handleChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" container mx-auto flex flex-col justify-center py-12 px-5 lg:py-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" }
        }}

        className="flex flex-col lg:flex-row gap-8 ">
        <motion.div className="w-full lg:w-1/2 lg:h-[468px] order-2 lg:order-none">
          <div className="flex flex-col   gap-6">
            {/* outline num ? */}
            <h1 className="text-2xl md:text-3xl  font-bold">{project?.title}</h1>
            <p className="text-justify " >{project?.description}</p>
            {/* button */}
            <div className="flex items-center md:gap-4 gap-1 ">
              {/* live link */}
              <Link target="_blank" href={project?.link}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      variant="outline"
                      className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-3 md:px-5  rounded-3xl  flex justify-center items-center group  ">
                      <BsArrowUpRight className="mr-2" />
                      Live
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link target="_blank" href={project?.github_client}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      variant="outline"
                      className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-3 md:px-5  rounded-3xl  flex justify-center items-center group  ">
                      <FaGithub className="mr-2" />
                      client
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <Link target="_blank" href={project?.github_server}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      variant="outline"
                      className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-3 md:px-5   rounded-3xl  flex justify-center items-center group  ">
                      <FaGithub className="mr-2" />
                      Server
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>


            </div>
          </div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" }

          }}
          className="lg:w-1/2 z-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="lg:h-[520px]"
            onSlideChange={handleChange}
          >
            {
              projects?.slice(0, 3).map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ScrollArea className="h-[450px] overflow-y-auto">
                      <div className="relative w-full">
                        <Image
                          src={project?.image}
                          alt="project"
                          width={800} // set your desired width
                          height={1500} // taller than 450px to allow scrolling
                          className="object-cover w-full"
                        />
                      </div>
                    </ScrollArea>

                  </SwiperSlide>
                )
              })
            }

            {/* wiper btn */}
            <SwiperProjectBtns containerStyle={"flex gap-2 absolute right-0 top-1/2 lg:top-[200px] justify-between z-20 w-full px-3"} btnStyle={"text-5xl bg-primaryColor  hover:bg-primaryColor/70 text-white rounded-xl text-background"} />
          </Swiper>
        </motion.div>
      </motion.div>


    </motion.section>
  )
}
