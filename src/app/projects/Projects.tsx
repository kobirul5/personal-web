"use client";

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "motion/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
import SwiperProjectBtns from "@/components/ui/SwiperProjectBtns";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";
import { projects, type Project } from "@/data/projectss";

export default function Projects() {
  const [project, setProject] = useState<Project>(projects[0]);
  const handleChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

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
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
        className="flex flex-col lg:flex-row gap-8 "
      >
        <motion.div className="w-full lg:w-1/2 lg:h-[468px] order-2 lg:order-none">
          <div className="flex flex-col   gap-6">
            {/* outline num ? */}
            <h1 className="text-2xl md:text-3xl  font-bold">{project?.title}</h1>
            <p className="text-justify ">{project?.description}</p>
            {/* button */}
            <div className="flex items-center md:gap-4 gap-1 ">
              {/* live link */}
              <Link target="_blank" href={project?.link || "#"}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-3 md:px-5  rounded-3xl  flex justify-center items-center group  "
                    >
                      <BsArrowUpRight className="mr-2" />
                      Live
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {project?.github_client ? (
                <Link target="_blank" href={project.github_client}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-3 md:px-5  rounded-3xl  flex justify-center items-center group  "
                      >
                        <FaGithub className="mr-2" />
                        client
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ) : null}

              {project?.github_server ? (
                <Link target="_blank" href={project.github_server}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="border border-primaryColor text-primaryColor hover:text-background hover:bg-primaryColor/90 p-2 px-3 md:px-5   rounded-3xl  flex justify-center items-center group  "
                      >
                        <FaGithub className="mr-2" />
                        Server
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ) : null}
            </div>
          </div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="lg:w-1/2 z-10 rounded-2xl"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="lg:h-[520px]"
            onSlideChange={handleChange}
          >
            {projects?.slice(0, 3).map((project, index) => {
              const projectImages = (
                project?.images?.length ? project.images : [project?.image]
              ).filter(Boolean);

              return (
                <SwiperSlide key={index}>
                  <ScrollArea className="h-[450px] pr-3">
                    <div className="flex flex-col gap-5">
                      {projectImages.map((image, imageIndex) => (
                        <div
                          key={`${project?.id}-${imageIndex}`}
                          className="relative w-full"
                        >
                          <Image
                            src={image!}
                            alt={`${project?.title} screenshot ${imageIndex + 1}`}
                            width={1200}
                            height={1500}
                            className="object-cover w-full h-auto rounded-2xl"
                          />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </SwiperSlide>
              );
            })}

            {/* wiper btn */}
            <SwiperProjectBtns
              containerStyle={
                "flex gap-2 absolute right-0 top-1/2 lg:top-[200px] justify-between z-20 w-full px-3"
              }
              btnStyle={
                "text-5xl bg-primaryColor  hover:bg-primaryColor/70 text-white rounded-xl text-background"
              }
            />
          </Swiper>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
